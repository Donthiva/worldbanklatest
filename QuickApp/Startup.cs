// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using AutoMapper;
using DAL;
using DAL.Core;
using DAL.Core.Interfaces;
using DAL.Models;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using QuickApp.Authorization;
using QuickApp.Helpers;
using System;
using System.Collections.Generic;
using AppPermissions = DAL.Core.ApplicationPermissions;
using Microsoft.IdentityModel.Logging;
using System.Net;
using DAL.Repositories;
using DAL.Repositories.Interfaces;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http.Features;

namespace QuickApp
{
    public class Startup
    {
        private IWebHostEnvironment _env { get; }
        public IConfiguration Configuration { get; }


        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            _env = env;
            Configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"], b => b.MigrationsAssembly("QuickApp")));

            // add identity
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Configure Identity options and password complexity here
            services.Configure<IdentityOptions>(options =>
            {
                // User settings
                options.User.RequireUniqueEmail = true;

            });

          

            IdentityModelEventSource.ShowPII = true;


            // Adds IdentityServer.
            services.AddIdentityServer()
                // The AddDeveloperSigningCredential extension creates temporary key material for signing tokens.
                // This might be useful to get started, but needs to be replaced by some persistent key material for production scenarios.
                // See http://docs.identityserver.io/en/release/topics/crypto.html#refcrypto for more information.
                .AddDeveloperSigningCredential()
                .AddInMemoryPersistedGrants()
                // To configure IdentityServer to use EntityFramework (EF) as the storage mechanism for configuration data (rather than using the in-memory implementations),
                // see https://identityserver4.readthedocs.io/en/release/quickstarts/8_entity_framework.html
                .AddInMemoryIdentityResources(IdentityServerConfig.GetIdentityResources())
                .AddInMemoryApiResources(IdentityServerConfig.GetApiResources())
                .AddInMemoryClients(IdentityServerConfig.GetClients())
                .AddAspNetIdentity<ApplicationUser>()
                .AddProfileService<ProfileService>();


            var applicationUrl = Configuration["ApplicationUrlAPMS"].TrimEnd('/');

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = applicationUrl;
                    options.SupportedTokens = SupportedTokens.Jwt;
                    options.RequireHttpsMetadata = false; // Note: Set to true in production
                    options.ApiName = IdentityServerConfig.ApiName;
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy(Authorization.Policies.ViewAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewUsers));
                options.AddPolicy(Authorization.Policies.ManageAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageUsers));

                options.AddPolicy(Authorization.Policies.ViewAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewRoles));
                options.AddPolicy(Authorization.Policies.ViewRoleByRoleNamePolicy, policy => policy.Requirements.Add(new ViewRoleAuthorizationRequirement()));
                options.AddPolicy(Authorization.Policies.ManageAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageRoles));

                options.AddPolicy(Authorization.Policies.AssignAllowedRolesPolicy, policy => policy.Requirements.Add(new AssignRolesAuthorizationRequirement()));
            });


            // Add cors
            services.AddCors();

            //services.AddControllersWithViews();

            services.AddControllersWithViews()
         .AddNewtonsoftJson(options =>
         options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
     );

            services.AddControllers(x => x.AllowEmptyInputInBodyModelBinding = true);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = IdentityServerConfig.ApiFriendlyName, Version = "v1" });
                c.OperationFilter<AuthorizeCheckOperationFilter>();
                c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    Type = SecuritySchemeType.OAuth2,
                    Flows = new OpenApiOAuthFlows
                    {
                        Password = new OpenApiOAuthFlow
                        {
                            TokenUrl = new Uri("/connect/token", UriKind.Relative),
                            Scopes = new Dictionary<string, string>()
                            {
                                { IdentityServerConfig.ApiName, IdentityServerConfig.ApiFriendlyName }
                            }
                        }
                    }
                });
            });

            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddAutoMapper(typeof(Startup));

            // Configurations
            services.Configure<AppSettings>(Configuration);


            // Business Services
            services.AddScoped<IEmailSender, EmailSender>();


            // Repositories
            services.AddScoped<IUnitOfWork, HttpUnitOfWork>();
            services.AddScoped<IAccountManager, AccountManager>();



     


            services.AddScoped<IPersonRepository, PersonRepository>();

            services.AddScoped<IPersonDataRepository, PersonDataRepository>();

            services.AddScoped<IBusinessTypeRepsitory, BusinessTypeRepository>();

            services.AddScoped<IBusinessPlanRepsitory, BusinessPlanRepsitory>();


            services.AddScoped<ICountryRepository, CountryRepository>();

            services.AddScoped<ICityRepository, CityRepository>();

            services.AddScoped<IStatesRepository, StatesRepository>();

            services.AddScoped<IDistrictRepository, DistrictRepository>();

            services.AddScoped<IBankTypeRepository, BankTypeRepository>();

            services.AddScoped<IBankRepository, BankRepository>();

            services.AddScoped<IBankBranchRepository, BankBranchRepository>();

            services.AddScoped<IGenderRepository, GenderRepository>();

            services.AddScoped<IPersonTypeRepository, PersonTypeRepository>();

            services.AddScoped<IEmploymentRepository, EmploymentRepository>();

            services.AddScoped<IJobEngagementRepository, JobEngagementRepository>();
            // services.AddScoped<IBankBranchRepository, BankBranchRepository>();

            services.AddScoped<IEmployerTypeRepository, EmployerTypeRepository>();

            services.AddScoped<IEmploymentStatusRepository, EmploymentStatusRepository>();

            services.AddScoped<IEmployerTypeRepository, EmployerTypeRepository>();

            services.AddScoped<IBusinessRepository, BusinessRepository>();


            services.AddScoped<IThreeWheelRepository, ThreeWheelRepository>();

            services.AddScoped<IPhaseOutRepository, PhaseOutRepository>();

            services.AddScoped<IVulnerabilityLevelRepository, VulnerabilityLevelRepository>();

            services.AddScoped<IVulnerabilityTypeRepository, VulnerabilityTypeRepository>();

            services.AddScoped<IVulnerabilityRepository, VulnerabilityRepository>();

            services.AddScoped<IVulnerabilityMonitorRepository, VulnerabilityMonitorRepository>();

            services.AddScoped<IBankAcountTypeRepository, BankAcountTypeRepository>();

            services.AddScoped<IEmploymentStatusRepository, EmploymentStatusRepository>();

            services.AddScoped<IEmploymentTypeRepository, EmploymentTypeRepository>();

            services.AddScoped<IEmployerTypeRepository, EmployerTypeRepository>();
            services.AddScoped<ITrainingTypeRepository, TrainingTypeRepository>();



            services.AddScoped<IEmployerDocumentRepo, EmployerDocumentRepo>();

            services.AddScoped<IEmployerVideoRepo, EmployerVideoRepo>();
            services.AddScoped<IEmployerImageRepo, EmployerImageRepo>();

            services.AddScoped<ITrainingRepository, TrainingRepository>();

            services.AddScoped<IMonitorPeriodRepository, MonitorPeriodRepository>();



            services.AddScoped<IBusinessDocumentRepo, BusinessDocumentRepo>();

            services.AddScoped<IBusinessImageRepo, BusinessImageRepo>();

            services.AddScoped<IBusinessVideoRepo, BusinessVideoRepo>();



            services.AddScoped<IThreeWheelDocomentRepo, ThreeWheelDocomentRepo>();

            services.AddScoped<IThreeWheelImagesRepo, ThreeWheelImagesRepo>();

            services.AddScoped<IThreeWheelVideoRepo, ThreeWheelVideoRepo>();


            services.AddScoped<IPhaseOutDocumentRepo, PhaseOutDocumentRepo>();

            services.AddScoped<IPhaseOutImagesRepo, PhaseOutImagesRepo>();

            services.AddScoped<IPhaseOutVideoRepo, PhaseOutVideoRepo>();

            services.AddScoped<IPersonPreviousTypeRepository, PersonPreviousTypeRepository>();

            services.AddScoped<IEducationLevelRepositoy, EducationLevelRepositoy>();

            services.AddScoped<IBusinessOrLivelihoodRelocationRepository, BusinessOrLivelihoodRelocationRepositoy>();

            services.AddScoped<IMartialStatusRepository, MartialStatusRepository>();

            services.AddScoped<IBusinessManagementModeRepository, BusinessManagementModeRepository>();

            // Auth Handlers
            services.AddSingleton<IAuthorizationHandler, ViewUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ManageUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ViewRoleAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, AssignRolesAuthorizationHandler>();

            // DB Creation and Seeding
            services.AddTransient<IDatabaseInitializer, DatabaseInitializer>();

        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        [Obsolete]
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {


            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls
            | SecurityProtocolType.Tls11
            | SecurityProtocolType.Tls12;
            Utilities.ConfigureLogger(loggerFactory);
            EmailTemplates.Initialize(env);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
               // app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseIdentityServer();
            app.UseAuthorization();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.DocumentTitle = "Swagger UI - QuickApp";
                c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{IdentityServerConfig.ApiFriendlyName} V1");
                c.OAuthClientId(IdentityServerConfig.SwaggerClientID);
                c.OAuthClientSecret("no_password"); //Leaving it blank doesn't work
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseStaticFiles();// For the wwwroot folder

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                            Path.Combine(Directory.GetCurrentDirectory(), "assets")),
                RequestPath = "/assets"
            });
            //Enable directory browsing
            app.UseDirectoryBrowser(new DirectoryBrowserOptions
            {
                FileProvider = new PhysicalFileProvider(
                            Path.Combine(Directory.GetCurrentDirectory(), "assets")),
                RequestPath = "/assets"
            });



            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(180); // Increase the timeout if angular app is taking longer to startup
                    //spa.UseProxyToSpaDevelopmentServer("http://localhost:4200"); // Use this instead to use the angular cli server
                }
            });
        }
    }
}
