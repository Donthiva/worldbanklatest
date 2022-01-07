// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using DAL.Models.Interfaces;
using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using DAL.Models.Contact_Information;
using DAL.Models.Bank_Information;
using DAL.Core;
using DAL.Models.Businees_Related;
using DAL.Models.Genaral;

namespace DAL
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public string CurrentUserId { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
  



        public DbSet<Person> Persons { get; set; }
        public DbSet<Entittlment> Entittlments { get; set; }
        public DbSet<Business> Businesses { get; set; }
        public DbSet<Bank_Account> Bank_Account { get; set; }
        public DbSet<Business_Situation> Business_Situation { get; set; }
        public DbSet<Business_Plan> Buiness_Plan { get; set; }
        public DbSet<Business_Management_Mode> Business_Management_Mode { get; set; }
        public DbSet<Employer_Type> Employer_Type { get; set; }
        public DbSet<Employment> Employment { get; set; }
        public DbSet<Employment_Status> Employment_Status { get; set; }
        public DbSet<Employment_Type> Employment_Type { get; set; }
        public DbSet<Models.Monitoring_Information.Monitor> Monitor { get; set; }
        public DbSet<Monitor_Duration> Monitor_Duration { get; set; }
        public DbSet<Person_Type> Person_Type { get; set; }
        public DbSet<Training> Training { get; set; }
        public DbSet<Training_Type> Training_Type { get; set; }
        public DbSet<Vulnerability> Vulnerability { get; set; }
        public DbSet<Vulnerability_Level> Vulnerability_Level { get; set; }
        public DbSet<Vulnerability_Type> Vulnerability_Type { get; set; }
        public DbSet<VulnerabilityMonitor> VulnerabilityMonitor { get; set; }

        public DbSet<Address> Address { get; set; }
        public DbSet<Adress_Owner_Type> Adress_Owner_Type { get; set; }
        public DbSet<City> City { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<District> District { get; set; }
        public DbSet<States> States { get; set; }
        public DbSet<Bank> Bank { get; set; }
        public DbSet<Bank_Account_Type> Bank_Account_Type { get; set; }
        public DbSet<Bank_Branch> Bank_Branch { get; set; }

        public DbSet<Bank_Type> Bank_Type { get; set; }

        public DbSet<ThreeWheeler> ThreeWheeler { get; set; }

        public DbSet<phaseOut> phaseOut { get; set; }

        public DbSet<ApImages> ApImages { get; set; }

        public DbSet<ApDocuments> ApDocuments { get; set; }


        public DbSet<EmployeeMonitorImages> employeeMonitorImages { get; set; }

        public DbSet<EmployeeMonitorDocuments> employeeMonitorDocuments { get; set; }

        public DbSet<EmployeeMonitorVideos> employeeMonitorVideos { get; set; }




        public DbSet<BusinessMonitorImages> businessMonitorImages { get; set; }

        public DbSet<BusinessMonitorDocuments> businessMonitorDocuments { get; set; }

        public DbSet<BusinessMonitorVideos> businessMonitorVideos { get; set; }


        public DbSet<ApVideos> ApVideos { get; set; }

        public DbSet<ApUserImage> ApUserImage { get; set; }

        public DbSet<MonitorPerioid> MonitorPerioid { get; set; }

        public DbSet<ApBusinessDocuments> apBusinessDocuments { get; set; }


        public DbSet<ThreeWheelMonitorImages> threeWheelMonitorImages { get; set; }

        public DbSet<ThreeWheelMonitorDocuments> threeWheelMonitorDocuments { get; set; }

        public DbSet<ThreeWheelMonitorVideos> threeWheelMonitorVideos { get; set; }

        public DbSet<PreviousType> previousType { get; set; }
        
        public DbSet<Audit> AuditLogs { get; set; }

        public DbSet<EducationLevel> educationLevel { get; set; }

        public DbSet<MartialStatus> martialStatus { get; set; }

        public DbSet<BusinessOrLivelihoodRelocation> businessOrLivelihoodRelocation { get; set; }

        public DbSet<Intervention> Intervention { get; set; }

        public DbSet<EventwiseParticipants> EventwiseParticipants { get; set; }


        public ApplicationDbContext(DbContextOptions options) : base(options)
        { }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            const string priceDecimalType = "decimal(18,2)";

            builder.Entity<ApplicationUser>().HasMany(u => u.Claims).WithOne().HasForeignKey(c => c.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationUser>().HasMany(u => u.Roles).WithOne().HasForeignKey(r => r.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ApplicationRole>().HasMany(r => r.Claims).WithOne().HasForeignKey(c => c.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationRole>().HasMany(r => r.Users).WithOne().HasForeignKey(r => r.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Customer>().Property(c => c.Name).IsRequired().HasMaxLength(100);
            builder.Entity<Customer>().HasIndex(c => c.Name);
            builder.Entity<Customer>().Property(c => c.Email).HasMaxLength(100);
            builder.Entity<Customer>().Property(c => c.PhoneNumber).IsUnicode(false).HasMaxLength(30);
            builder.Entity<Customer>().Property(c => c.City).HasMaxLength(50);
            builder.Entity<Customer>().ToTable($"App{nameof(this.Customers)}");

            builder.Entity<ProductCategory>().Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Entity<ProductCategory>().Property(p => p.Description).HasMaxLength(500);
            builder.Entity<ProductCategory>().ToTable($"App{nameof(this.ProductCategories)}");

            builder.Entity<Product>().Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Entity<Product>().HasIndex(p => p.Name);
            builder.Entity<Product>().Property(p => p.Description).HasMaxLength(500);
            builder.Entity<Product>().Property(p => p.Icon).IsUnicode(false).HasMaxLength(256);
            builder.Entity<Product>().HasOne(p => p.Parent).WithMany(p => p.Children).OnDelete(DeleteBehavior.Restrict);
            builder.Entity<Product>().ToTable($"App{nameof(this.Products)}");
            builder.Entity<Product>().Property(p => p.BuyingPrice).HasColumnType(priceDecimalType);
            builder.Entity<Product>().Property(p => p.SellingPrice).HasColumnType(priceDecimalType);

            builder.Entity<Order>().Property(o => o.Comments).HasMaxLength(500);
            builder.Entity<Order>().ToTable($"App{nameof(this.Orders)}");
            builder.Entity<Order>().Property(p => p.Discount).HasColumnType(priceDecimalType);

            builder.Entity<OrderDetail>().ToTable($"App{nameof(this.OrderDetails)}");
            builder.Entity<OrderDetail>().Property(p => p.UnitPrice).HasColumnType(priceDecimalType);
            builder.Entity<OrderDetail>().Property(p => p.Discount).HasColumnType(priceDecimalType);
            


            //setting composite primary keys and foreing keys
            //person
            builder.Entity<Person>().HasKey(c => new { c.Person_ID });
            builder.Entity<Person>().HasOne(c => c.Address).WithOne(c => c.Person).HasForeignKey<Person>(x=>x.Person_Address);
            builder.Entity<Person>().HasMany(c=>c.Employment).WithOne(c=>c.Person).HasForeignKey(x => x.Person_ID);
            builder.Entity<Person>().HasOne(c => c.PersonType).WithMany(c => c.Persons).HasForeignKey(x => x.Person_Type);
            builder.Entity<Person>().HasOne(c => c.educationLevel).WithMany(c => c.Persons).HasForeignKey(x => x.educationalLevelId).OnDelete(DeleteBehavior.NoAction); ;
            builder.Entity<Person>().HasOne(c => c.maritalStatus).WithMany(c => c.Persons).HasForeignKey(x => x.martialStatusId).OnDelete(DeleteBehavior.NoAction); ;
            builder.Entity<Person>().HasOne(c => c.businessOrLivelihoodRelocation).WithMany(c => c.Persons).HasForeignKey(x => x.businessOrLivelihoodRelocationId).OnDelete(DeleteBehavior.NoAction);


            //Entittlment
            builder.Entity<Entittlment>().HasKey(c => new { c.Entittlment_ID });
            //builder.Entity<Entittlment>().HasOne(c => c.Person).WithMany(x => x.Entittlment).HasForeignKey(v=>v.Entittlment_Person_ID);

            //Business
            builder.Entity<Business>().HasKey(c => new { c.Business_ID });
            builder.Entity<Business>().HasOne(v => v.Person).WithMany(c => c.Business).HasForeignKey(c=>c.Business_Person_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.BuinessPlan1).WithMany(c => c.Business).HasForeignKey(b=>b.Business_First_Buiness_Plan).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.BusinessManagementMode).WithMany(c => c.Business).HasForeignKey(m => m.Business_Management_Mode).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.businessType).WithMany(c => c.Business).HasForeignKey(m => m.Business_Type).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<Business>().HasOne(v => v.businessStaff).WithOne(c => c.business).HasForeignKey<BusinessStaff>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.businessVehicle).WithOne(c => c.business).HasForeignKey<BusinessVehicle>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.businessStocks).WithOne(c => c.business).HasForeignKey<BusinessStocks>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.cilentele).WithOne(c => c.business).HasForeignKey<Cilentele>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.machinaryEquipment).WithOne(c => c.business).HasForeignKey<MachinaryEquipment>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.shopspace).WithOne(c => c.business).HasForeignKey<Shopspace>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.managementPractices).WithOne(c => c.business).HasForeignKey<ManagementPractices>(b => b.BusinessId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.monitor).WithOne(c => c.Business).HasForeignKey<Business>(d => d.monitorId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.monitor).WithOne(c => c.Business).HasForeignKey<Business>(d => d.monitorId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.monitorPeriod).WithMany(c => c.Businesses).HasForeignKey(d => d.monitorPeriodId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Business>().HasOne(v => v.address).WithOne(c => c.business).HasForeignKey<Business>(d => d.BusinessAddressId).OnDelete(DeleteBehavior.NoAction);

            //Bank_Account
            builder.Entity<Bank_Account>().HasKey(c => new { c.Bank_Account_ID });
            builder.Entity<Bank_Account>().HasOne(v => v.Bank).WithMany(c => c.Bank_Account).HasForeignKey(k => k.Bank_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Bank_Account>().HasOne(v => v.BankAccountType).WithMany(c => c.Bank_Account).HasForeignKey(g => g.Bank_Account_Type_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Bank_Account>().HasOne(v => v.Bank_Branch).WithMany(c => c.Bank_Account).HasForeignKey(f => f.Bank_Branch_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Bank_Account>().HasOne(v => v.person).WithMany(c => c.Bank).HasForeignKey(f => f.PersonID).OnDelete(DeleteBehavior.NoAction);

            //Business_Situation
            builder.Entity<Business_Situation>().HasKey(c => new { c.Business_Situation_ID });
            builder.Entity<Business_Situation>().HasOne(v => v.Person).WithOne(c => c.Business_Situation).HasForeignKey<Business_Situation>(c=>c.BS_Business_Person_ID);

            //Buiness_Plan
            builder.Entity<Business_Plan>().HasKey(c => new { c.Buiness_Plan_ID });

            //Business_Management_Mode
            builder.Entity<Business_Management_Mode>().HasKey(c => new { c.Business_Management_Mode_ID });

            //Employer_Type
            builder.Entity<Employer_Type>().HasKey(c => new { c.Employer_Type_ID });

            //Employment
            builder.Entity<Employment>().HasKey(c => new { c.Employment_ID });
            builder.Entity<Employment>().HasOne(v => v.EmploymentType).WithMany(c => c.Employment).HasForeignKey(f=>f.Employment_Type).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Employment>().HasOne(v => v.Person).WithMany(c => c.Employment).HasForeignKey(r=>r.Person_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Employment>().HasOne(v => v.EmploymentStatus).WithMany(c => c.Employment).HasForeignKey(d=>d.Employment_Status).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Employment>().HasOne(v => v.jobengagement).WithMany(c => c.Employement).HasForeignKey(d => d.JobengagementID).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Employment>().HasOne(v => v.monitor).WithOne(c => c.Employment).HasForeignKey<Employment>(d => d.MonitorID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Employment>().HasOne(v => v.monitorPeriod).WithMany(c => c.Employment).HasForeignKey(d => d.monitorPeriodId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Employment>().HasOne(v => v.address).WithOne(c => c.employment).HasForeignKey<Employment>(d => d.EmployementAddressId).OnDelete(DeleteBehavior.NoAction);


            //Employment_Status
            builder.Entity<Employment_Status>().HasKey(c => new { c.Employment_Status_ID });

            //Employment_Type
            builder.Entity<Employment_Type>().HasKey(c => new { c.Employment_Type_ID });

            //Monitor
            builder.Entity<Models.Monitoring_Information.Monitor>().HasKey(c => new { c.Monitor_ID });
            //builder.Entity<Models.Monitoring_Information.Monitor>().HasOne(c => c.Person).WithMany(x => x.Monitor).HasForeignKey(s=>s.Monitor_Person_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Models.Monitoring_Information.Monitor>().HasOne(c => c.MonitorDuration).WithMany(x => x.Monitor).HasForeignKey(w=>w.Monitor_Duration).OnDelete(DeleteBehavior.NoAction);




            //Monitor_Duration
            builder.Entity<Monitor_Duration>().HasKey(c => new { c.Monitor_Duratione_ID });

            //Person_Type
            builder.Entity<Person_Type>().HasKey(c => new { c.Person_Type_ID });

            //Training
            builder.Entity<Training>().HasKey(c => new { c.Training_ID });
            builder.Entity<Training>().HasOne(c => c.TrainingType).WithMany(x => x.Training).HasForeignKey(n=>n.Training_Type).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Training>().HasOne(c => c.Person).WithMany(x => x.Training).HasForeignKey(t=>t.Training_Person_ID).OnDelete(DeleteBehavior.NoAction);

            //Training_Type
            builder.Entity<Training_Type>().HasKey(c => new { c.Training_Type_ID });

            //Person Type
            builder.Entity<PreviousType>().HasKey(c => new { c.Id });

            //Vulnerability
            builder.Entity<Vulnerability>().HasKey(c => new { c.Vulnerability_ID });
            builder.Entity<Vulnerability>().HasOne(c => c.Person).WithOne(v => v.Vulnerability).HasForeignKey<Vulnerability>(c=>c.Vulnerability_Person_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Vulnerability>().HasOne(c => c.VulnerabilityType).WithMany(v => v.Vulnerability).HasForeignKey(g=>g.Vulnerability_Type).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Vulnerability>().HasOne(c => c.VulnerabilityLevel).WithMany(v => v.Vulnerability).HasForeignKey(n=>n.Vulnerability_Level).OnDelete(DeleteBehavior.NoAction);
           

            // vulnerability monitor
            builder.Entity<VulnerabilityMonitor>().HasKey(c => new { c.Id });
            builder.Entity<VulnerabilityMonitor>().HasOne(c => c.Person).WithMany(v => v.VulnerabilityMonitor).HasForeignKey(c => c.PersonId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<VulnerabilityMonitor>().HasOne(c => c.Vulnerability).WithMany(v => v.MonitorDetails).HasForeignKey(c => c.VulnerabilityID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<VulnerabilityMonitor>().HasOne(c => c.monitor).WithOne(v => v.vulnerability).HasForeignKey<VulnerabilityMonitor>(c => c.MonitorId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<VulnerabilityMonitor>().HasOne(v => v.monitorPeriod).WithMany(c => c.VulnerabilityMonitor).HasForeignKey(d => d.monitorPeriodId).OnDelete(DeleteBehavior.NoAction);

            //Vulnerability_Level
            builder.Entity<Vulnerability_Level>().HasKey(c => new { c.Vulnerability_Level_ID });

            //Vulnerability_Type
            builder.Entity<Vulnerability_Type>().HasKey(c => new { c.Vulnerability_Type_ID });


           

            builder.Entity<Adress_Owner_Type>().HasKey(c => new { c.Adress_Owner_Type_ID });

            builder.Entity<City>().HasKey(c => new { c.City_ID });
            builder.Entity<City>().HasOne(c => c.Country).WithMany(v => v.city).HasForeignKey(c => c.City_Country_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<City>().HasOne(c => c.district).WithMany(v => v.city).HasForeignKey(c => c.City_District_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<City>().HasOne(c => c.States).WithMany(v => v.city).HasForeignKey(c => c.City_States_ID).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<Country>().HasKey(c => new { c.Country_ID });
          


            builder.Entity<District>().HasKey(c => new { c.District_ID });
            builder.Entity<District>().HasOne(c => c.country).WithMany(v => v.district).HasForeignKey(c => c.District_Country_ID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<District>().HasOne(c => c.state).WithMany(v => v.district).HasForeignKey(c => c.District_States_ID).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<States>().HasKey(c => new { c.States_ID });
            builder.Entity<States>().HasOne(c => c.country).WithMany(v => v.states).HasForeignKey(c => c.States_Country_ID).OnDelete(DeleteBehavior.NoAction);
           


            builder.Entity<Bank>().HasKey(c => new { c.Bank_ID});
            builder.Entity<Bank>().HasMany(c => c.Branch).WithOne(v => v.bank).HasForeignKey(n => n.BankID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Bank>().HasOne(c => c.bankType).WithMany(v => v.bank).HasForeignKey(n => n.Bank_Type).OnDelete(DeleteBehavior.NoAction);

            //builder.Entity<Bank_Account>().HasKey(c => new { c.Bank_Account_Type_ID });
            //builder.Entity<Bank_Account>().HasOne(c => c.Bank_Branch).WithMany(v => v.Bank_Account).HasForeignKey(n => n.Bank_Branch_ID).OnDelete(DeleteBehavior.NoAction);



            builder.Entity<BusinessType>().HasKey(c => new { c.Id });



            builder.Entity<Bank_Account_Type>().HasKey(c => new { c.Bank_Account_Type_ID });

            builder.Entity<Bank_Branch>().HasKey(c => new { c.Bank_Branch_ID});


            builder.Entity<Bank_Type>().HasKey(c => new { c.Id });

            builder.Entity<Models.Genaral.Gender>().HasKey(c => new { c.User_Gender_ID });



            builder.Entity<ThreeWheeler>().HasKey(c => new { c.Id });
            builder.Entity<ThreeWheeler>().HasOne(v => v.person).WithMany(c => c.ThreeWheeler).HasForeignKey(c => c.PersonID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ThreeWheeler>().HasOne(v => v.Monitor).WithOne(c => c.ThreeWheeler).HasForeignKey<ThreeWheeler>(d => d.MonitorId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<ThreeWheeler>().HasOne(v => v.monitorPeriod).WithMany(c => c.ThreeWheeler).HasForeignKey(d => d.monitorPeriodId).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<phaseOut>().HasKey(c => new { c.Id });
            builder.Entity<phaseOut>().HasOne(v => v.person).WithMany(c => c.phaseOut).HasForeignKey(c => c.PersonID).OnDelete(DeleteBehavior.NoAction);
            //builder.Entity<phaseOut>().HasOne(v => v.monitor).WithOne(c => c.PhaseOut).HasForeignKey<phaseOut>(d => d.MonitorId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<phaseOut>().HasOne(v => v.monitorPeriod).WithMany(c => c.phaseOut).HasForeignKey(d => d.monitorPeriodId).OnDelete(DeleteBehavior.NoAction);



            builder.Entity<BusinessStaff>().HasKey(c => new { c.Id });
            builder.Entity<BusinessVehicle>().HasKey(c => new { c.Id });
            builder.Entity<BusinessStocks>().HasKey(c => new { c.Id });
            builder.Entity<Cilentele>().HasKey(c => new { c.Id });
            builder.Entity<MachinaryEquipment>().HasKey(c => new { c.Id });
            builder.Entity<Shopspace>().HasKey(c => new { c.Id });
            builder.Entity<ManagementPractices>().HasKey(c => new { c.Id });

            builder.Entity<EmployeeGeneral>().HasKey(c => new { c.Id });
            builder.Entity<EmployeeGeneral>().HasOne(c => c.person).WithOne(v => v.employeeGeneral).HasForeignKey<EmployeeGeneral>(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<BusinessGeneral>().HasKey(c => new { c.Id });
            builder.Entity<BusinessGeneral>().HasOne(c => c.person).WithOne(v => v.businessGeneral).HasForeignKey<BusinessGeneral>(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<BusinessGeneral>().HasOne(c => c.businessType).WithMany(v => v.businessGeneral).HasForeignKey(n => n.BusinessTypeId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<BusinessGeneral>().HasOne(c => c.business_Plan).WithMany(v => v.businessGeneral).HasForeignKey(n => n.BusineesPlanId).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<ThreeWheelGeneral>().HasKey(c => new { c.Id });
            builder.Entity<ThreeWheelGeneral>().HasOne(c => c.person).WithOne(v => v.threeWheelGeneral).HasForeignKey<ThreeWheelGeneral>(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<PhaseOutGeneral>().HasKey(c => new { c.Id });
            builder.Entity<PhaseOutGeneral>().HasOne(c => c.person).WithOne(v => v.phaseOutGeneral).HasForeignKey<PhaseOutGeneral>(n => n.PersonID).OnDelete(DeleteBehavior.NoAction);




            builder.Entity<Address>().HasKey(c => new { c.Address_ID });
            builder.Entity<Address>().HasOne(c => c.Country).WithMany(v => v.address).HasForeignKey(n => n.countryId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Address>().HasOne(c => c.district).WithMany(v => v.address).HasForeignKey(n => n.districtId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Address>().HasOne(c => c.States).WithMany(v => v.address).HasForeignKey(n => n.statesId).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<Address>().HasOne(c => c.city).WithMany(v => v.address).HasForeignKey(n => n.cityId).OnDelete(DeleteBehavior.NoAction);





            builder.Entity<ApImages>().HasKey(c => new { c.Id });
            builder.Entity<ApImages>().HasOne(c => c.person).WithMany(v => v.apImages).HasForeignKey(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ApDocuments>().HasKey(c => new { c.Id });
            builder.Entity<ApDocuments>().HasOne(c => c.person).WithMany(v => v.apDocuments).HasForeignKey(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ApVideos>().HasKey(c => new { c.Id });
            builder.Entity<ApVideos>().HasOne(c => c.person).WithMany(v => v.apVideos).HasForeignKey(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ApUserImage>().HasKey(c => new { c.Id });
            builder.Entity<ApUserImage>().HasOne(c => c.person).WithOne(v => v.apUserImage).HasForeignKey<ApUserImage>(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);




            builder.Entity<EmployeeMonitorImages>().HasKey(c => new { c.Id });
            builder.Entity<EmployeeMonitorImages>().HasOne(c => c.employee).WithMany(v => v.employeeMonitorImages).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<EmployeeMonitorDocuments>().HasKey(c => new { c.Id });
            builder.Entity<EmployeeMonitorDocuments>().HasOne(c => c.employee).WithMany(v => v.employeeMonitorDocuments).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<EmployeeMonitorVideos>().HasKey(c => new { c.Id });
            builder.Entity<EmployeeMonitorVideos>().HasOne(c => c.employee).WithMany(v => v.employeeMonitorVideos).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);



            builder.Entity<ThreeWheelMonitorImages>().HasKey(c => new { c.Id });
            builder.Entity<ThreeWheelMonitorImages>().HasOne(c => c.ThreeWheel).WithMany(v => v.threeWheelMonitorImages).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ThreeWheelMonitorDocuments>().HasKey(c => new { c.Id });
            builder.Entity<ThreeWheelMonitorDocuments>().HasOne(c => c.ThreeWheel).WithMany(v => v.threeWheelMonitorDocuments).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ThreeWheelMonitorVideos>().HasKey(c => new { c.Id });
            builder.Entity<ThreeWheelMonitorVideos>().HasOne(c => c.ThreeWheel).WithMany(v => v.threeWheelMonitorVideos).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);




            builder.Entity<PhaseOutMonitorImages>().HasKey(c => new { c.Id });
            builder.Entity<PhaseOutMonitorImages>().HasOne(c => c.PhaseOut).WithMany(v => v.phaseOutMonitorImages).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<PhaseOutMonitorDocuments>().HasKey(c => new { c.Id });
            builder.Entity<PhaseOutMonitorDocuments>().HasOne(c => c.PhaseOut).WithMany(v => v.phaseOutMonitorDocuments).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);

            builder.Entity<PhaseOutMonitorVideos>().HasKey(c => new { c.Id });
            builder.Entity<PhaseOutMonitorVideos>().HasOne(c => c.PhaseOut).WithMany(v => v.phaseOutMonitorVideos).HasForeignKey(n => n.EmployeeMonitorId).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<Intervention>().HasKey(c => new { c.Id });
            builder.Entity<Intervention>().HasMany(c => c.Participants).WithOne(v => v.Interventions).HasForeignKey(n => n.EventId);

            builder.Entity<MonitorPerioid>().HasKey(c => new { c.Id });


            builder.Entity<ApBusinessDocuments>().HasKey(c => new { c.Id });
            builder.Entity<ApBusinessDocuments>().HasOne(c => c.person).WithMany(v => v.apBusinessDocs).HasForeignKey(n => n.PersonId).OnDelete(DeleteBehavior.NoAction);


            builder.Entity<EducationLevel>().HasKey(c => new { c.Id });

            builder.Entity<MartialStatus>().HasKey(c => new { c.Id });

            builder.Entity<BusinessOrLivelihoodRelocation>().HasKey(c => new { c.Id });





    }




        public override int SaveChanges()
        {
            UpdateAuditEntities();
            return base.SaveChanges();
        }


        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            OnBeforeSaveChanges(CurrentUserId);
            UpdateAuditEntities();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }


        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            OnBeforeSaveChanges(CurrentUserId);
            UpdateAuditEntities();
            return base.SaveChangesAsync(cancellationToken);
        }


        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            OnBeforeSaveChanges(CurrentUserId);
            UpdateAuditEntities();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }


        private void UpdateAuditEntities()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => x.Entity is IAuditableEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));


            foreach (var entry in modifiedEntries)
            {
                var entity = (IAuditableEntity)entry.Entity;
                DateTime now = DateTime.UtcNow;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedDate = now;
                    entity.CreatedBy = CurrentUserId;
                }
                else
                {
                    base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                    base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                }

                entity.UpdatedDate = now;
                entity.UpdatedBy = CurrentUserId;
            }
        }


        private void OnBeforeSaveChanges(string userId)
        {
            ChangeTracker.DetectChanges();
            var auditEntries = new List<AuditEntry>();
            foreach (var entry in ChangeTracker.Entries())
            {
                if (entry.Entity is Audit || entry.State == EntityState.Detached || entry.State == EntityState.Unchanged)
                    continue;
                var auditEntry = new AuditEntry(entry);
                auditEntry.TableName = entry.Entity.GetType().Name;
                auditEntry.UserId = userId;
                auditEntries.Add(auditEntry);
                foreach (var property in entry.Properties)
                {
                    string propertyName = property.Metadata.Name;
                    if (property.Metadata.IsPrimaryKey())
                    {
                        auditEntry.KeyValues[propertyName] = property.CurrentValue;
                        continue;
                    }

                    switch (entry.State)
                    {
                        case EntityState.Added:
                            auditEntry.AuditType = AuditType.Create;
                            auditEntry.NewValues[propertyName] = property.CurrentValue;
                            break;

                        case EntityState.Deleted:
                            auditEntry.AuditType = AuditType.Delete;
                            auditEntry.OldValues[propertyName] = property.OriginalValue;
                            break;

                        case EntityState.Modified:
                            if (property.IsModified)
                            {
                                auditEntry.ChangedColumns.Add(propertyName);
                                auditEntry.AuditType = AuditType.Update;
                                auditEntry.OldValues[propertyName] = property.OriginalValue;
                                auditEntry.NewValues[propertyName] = property.CurrentValue;
                            }
                            break;
                    }
                }
            }
            foreach (var auditEntry in auditEntries)
            {
                AuditLogs.Add(auditEntry.ToAudit());
            }
        }





    }
}
