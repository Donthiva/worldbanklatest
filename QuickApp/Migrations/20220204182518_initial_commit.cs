using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class initial_commit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Adress_Owner_Type",
                columns: table => new
                {
                    Adress_Owner_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Adress_Owner_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adress_Owner_Type", x => x.Adress_Owner_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "AppCustomers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    PhoneNumber = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateModified = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppCustomers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppProductCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateModified = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProductCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    JobTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Configuration = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsEnabled = table.Column<bool>(type: "bit", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AuditLogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TableName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    OldValues = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NewValues = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AffectedColumns = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrimaryKey = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Bank_Account_Type",
                columns: table => new
                {
                    Bank_Account_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bank_Account_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank_Account_Type", x => x.Bank_Account_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "Bank_Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankTypeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bank_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank_Type", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Buiness_Plan",
                columns: table => new
                {
                    Buiness_Plan_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Buiness_Plan_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buiness_Plan", x => x.Buiness_Plan_ID);
                });

            migrationBuilder.CreateTable(
                name: "Business_Management_Mode",
                columns: table => new
                {
                    Business_Management_Mode_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Business_Management_Mode_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business_Management_Mode", x => x.Business_Management_Mode_ID);
                });

            migrationBuilder.CreateTable(
                name: "businessOrLivelihoodRelocation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_businessOrLivelihoodRelocation", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BusinessType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessTypeName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    Country_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Country_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Country_ID);
                });

            migrationBuilder.CreateTable(
                name: "educationLevel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_educationLevel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employer_Type",
                columns: table => new
                {
                    Employer_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employer_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employer_Type_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employer_Type", x => x.Employer_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "Employment_Status",
                columns: table => new
                {
                    Employment_Status_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employment_Status", x => x.Employment_Status_ID);
                });

            migrationBuilder.CreateTable(
                name: "Employment_Type",
                columns: table => new
                {
                    Employment_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employment_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employment_Type_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employment_Type", x => x.Employment_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "Gender",
                columns: table => new
                {
                    User_Gender_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User_Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gender", x => x.User_Gender_ID);
                });

            migrationBuilder.CreateTable(
                name: "Intervention",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TypeOfEventId = table.Column<int>(type: "int", nullable: false),
                    NameOfEvent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BriefDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MainStakeholdersParticipated = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApCategoryId = table.Column<int>(type: "int", nullable: false),
                    NumberOfParticipants = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Intervention", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "JobEngagement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    engagement = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobEngagement", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "martialStatus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_martialStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Monitor_Duration",
                columns: table => new
                {
                    Monitor_Duratione_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Monitor_Duration_Start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Monitor_Duration_End_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Monitor_Duration_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Monitor_Duration", x => x.Monitor_Duratione_ID);
                });

            migrationBuilder.CreateTable(
                name: "MonitorPerioid",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PeroildName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MonitorPerioid", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Person_Type",
                columns: table => new
                {
                    Person_Type_ID = table.Column<int>(type: "int", nullable: false),
                    Id = table.Column<int>(type: "int", nullable: true),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person_Type", x => x.Person_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "previousType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Person_Type_ID = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_previousType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Training_Type",
                columns: table => new
                {
                    Training_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Training_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Training_Type_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Training_Type", x => x.Training_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "Vulnerability_Level",
                columns: table => new
                {
                    Vulnerability_Level_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Vulnerability_Level_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vulnerability_Level_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vulnerability_Level", x => x.Vulnerability_Level_ID);
                });

            migrationBuilder.CreateTable(
                name: "Vulnerability_Type",
                columns: table => new
                {
                    Vulnerability_Type_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Vulnerability_Type_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vulnerability_Type_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vulnerability_Type", x => x.Vulnerability_Type_ID);
                });

            migrationBuilder.CreateTable(
                name: "AppProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Icon = table.Column<string>(type: "varchar(256)", unicode: false, maxLength: 256, nullable: true),
                    BuyingPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SellingPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    UnitsInStock = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsDiscontinued = table.Column<bool>(type: "bit", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateModified = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ParentId = table.Column<int>(type: "int", nullable: true),
                    ProductCategoryId = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppProducts_AppProductCategories_ProductCategoryId",
                        column: x => x.ProductCategoryId,
                        principalTable: "AppProductCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppProducts_AppProducts_ParentId",
                        column: x => x.ParentId,
                        principalTable: "AppProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Comments = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateModified = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CashierId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppOrders_AppCustomers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "AppCustomers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppOrders_AspNetUsers_CashierId",
                        column: x => x.CashierId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Bank",
                columns: table => new
                {
                    Bank_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bank_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bank_Type = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank", x => x.Bank_ID);
                    table.ForeignKey(
                        name: "FK_Bank_Bank_Type_Bank_Type",
                        column: x => x.Bank_Type,
                        principalTable: "Bank_Type",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "States",
                columns: table => new
                {
                    States_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    States_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    States_Country_ID = table.Column<int>(type: "int", nullable: false),
                    districtId = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_States", x => x.States_ID);
                    table.ForeignKey(
                        name: "FK_States_Country_States_Country_ID",
                        column: x => x.States_Country_ID,
                        principalTable: "Country",
                        principalColumn: "Country_ID");
                });

            migrationBuilder.CreateTable(
                name: "EventwiseParticipants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<int>(type: "int", nullable: false),
                    ParticipantId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventwiseParticipants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EventwiseParticipants_Intervention_EventId",
                        column: x => x.EventId,
                        principalTable: "Intervention",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppOrderDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UnitPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppOrderDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppOrderDetails_AppOrders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "AppOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppOrderDetails_AppProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "AppProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Bank_Branch",
                columns: table => new
                {
                    Bank_Branch_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bank_Branch_Adress = table.Column<int>(type: "int", nullable: false),
                    Bank_Branch_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BankID = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank_Branch", x => x.Bank_Branch_ID);
                    table.ForeignKey(
                        name: "FK_Bank_Branch_Bank_BankID",
                        column: x => x.BankID,
                        principalTable: "Bank",
                        principalColumn: "Bank_ID");
                });

            migrationBuilder.CreateTable(
                name: "District",
                columns: table => new
                {
                    District_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    District_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    District_Country_ID = table.Column<int>(type: "int", nullable: false),
                    District_States_ID = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_District", x => x.District_ID);
                    table.ForeignKey(
                        name: "FK_District_Country_District_Country_ID",
                        column: x => x.District_Country_ID,
                        principalTable: "Country",
                        principalColumn: "Country_ID");
                    table.ForeignKey(
                        name: "FK_District_States_District_States_ID",
                        column: x => x.District_States_ID,
                        principalTable: "States",
                        principalColumn: "States_ID");
                });

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    City_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City_Country_ID = table.Column<int>(type: "int", nullable: false),
                    City_States_ID = table.Column<int>(type: "int", nullable: false),
                    City_District_ID = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.City_ID);
                    table.ForeignKey(
                        name: "FK_City_Country_City_Country_ID",
                        column: x => x.City_Country_ID,
                        principalTable: "Country",
                        principalColumn: "Country_ID");
                    table.ForeignKey(
                        name: "FK_City_District_City_District_ID",
                        column: x => x.City_District_ID,
                        principalTable: "District",
                        principalColumn: "District_ID");
                    table.ForeignKey(
                        name: "FK_City_States_City_States_ID",
                        column: x => x.City_States_ID,
                        principalTable: "States",
                        principalColumn: "States_ID");
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Address_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Adress_Owner_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adress_Owner_Type = table.Column<int>(type: "int", nullable: false),
                    Address_Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address_Street1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address_Street2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CordinateX = table.Column<double>(type: "float", nullable: false),
                    CordinateY = table.Column<double>(type: "float", nullable: false),
                    cityId = table.Column<int>(type: "int", nullable: false),
                    districtId = table.Column<int>(type: "int", nullable: false),
                    statesId = table.Column<int>(type: "int", nullable: false),
                    countryId = table.Column<int>(type: "int", nullable: false),
                    Longitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Latitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Address_ID);
                    table.ForeignKey(
                        name: "FK_Address_City_cityId",
                        column: x => x.cityId,
                        principalTable: "City",
                        principalColumn: "City_ID");
                    table.ForeignKey(
                        name: "FK_Address_Country_countryId",
                        column: x => x.countryId,
                        principalTable: "Country",
                        principalColumn: "Country_ID");
                    table.ForeignKey(
                        name: "FK_Address_District_districtId",
                        column: x => x.districtId,
                        principalTable: "District",
                        principalColumn: "District_ID");
                    table.ForeignKey(
                        name: "FK_Address_States_statesId",
                        column: x => x.statesId,
                        principalTable: "States",
                        principalColumn: "States_ID");
                });

            migrationBuilder.CreateTable(
                name: "Persons",
                columns: table => new
                {
                    Person_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Person_NIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_File_number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Gender = table.Column<int>(type: "int", nullable: false),
                    GSBSLivelihoodEngagement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncome = table.Column<int>(type: "int", nullable: false),
                    Employer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialObservationsatGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Contact_Number = table.Column<double>(type: "float", nullable: true),
                    Education = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_Address = table.Column<int>(type: "int", nullable: false),
                    Person_Type = table.Column<int>(type: "int", nullable: false),
                    Person_DOB = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    martialStatusId = table.Column<int>(type: "int", nullable: false),
                    educationalLevelId = table.Column<int>(type: "int", nullable: false),
                    businessOrLivelihoodRelocationId = table.Column<int>(type: "int", nullable: false),
                    BusinessPlanNote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EntitlementFund = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IsEntitleFund = table.Column<bool>(type: "bit", nullable: false),
                    GenderUser_Gender_ID = table.Column<int>(type: "int", nullable: true),
                    PreviousTypeId = table.Column<int>(type: "int", nullable: false),
                    DOA = table.Column<bool>(type: "bit", nullable: false),
                    EACdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persons", x => x.Person_ID);
                    table.ForeignKey(
                        name: "FK_Persons_Address_Person_Address",
                        column: x => x.Person_Address,
                        principalTable: "Address",
                        principalColumn: "Address_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Persons_businessOrLivelihoodRelocation_businessOrLivelihoodRelocationId",
                        column: x => x.businessOrLivelihoodRelocationId,
                        principalTable: "businessOrLivelihoodRelocation",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Persons_educationLevel_educationalLevelId",
                        column: x => x.educationalLevelId,
                        principalTable: "educationLevel",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Persons_Gender_GenderUser_Gender_ID",
                        column: x => x.GenderUser_Gender_ID,
                        principalTable: "Gender",
                        principalColumn: "User_Gender_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Persons_martialStatus_martialStatusId",
                        column: x => x.martialStatusId,
                        principalTable: "martialStatus",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Persons_Person_Type_Person_Type",
                        column: x => x.Person_Type,
                        principalTable: "Person_Type",
                        principalColumn: "Person_Type_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "apBusinessDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_apBusinessDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_apBusinessDocuments_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ApDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApDocuments_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ApImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApImages_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ApUserImage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApUserImage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApUserImage_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ApVideos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApVideos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApVideos_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "Bank_Account",
                columns: table => new
                {
                    Bank_Account_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bank_ID = table.Column<int>(type: "int", nullable: false),
                    PersonID = table.Column<int>(type: "int", nullable: true),
                    Bank_Account_Number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bank_Account_Type_ID = table.Column<int>(type: "int", nullable: false),
                    Bank_Branch_ID = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bank_Account", x => x.Bank_Account_ID);
                    table.ForeignKey(
                        name: "FK_Bank_Account_Bank_Account_Type_Bank_Account_Type_ID",
                        column: x => x.Bank_Account_Type_ID,
                        principalTable: "Bank_Account_Type",
                        principalColumn: "Bank_Account_Type_ID");
                    table.ForeignKey(
                        name: "FK_Bank_Account_Bank_Bank_ID",
                        column: x => x.Bank_ID,
                        principalTable: "Bank",
                        principalColumn: "Bank_ID");
                    table.ForeignKey(
                        name: "FK_Bank_Account_Bank_Branch_Bank_Branch_ID",
                        column: x => x.Bank_Branch_ID,
                        principalTable: "Bank_Branch",
                        principalColumn: "Bank_Branch_ID");
                    table.ForeignKey(
                        name: "FK_Bank_Account_Persons_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "Business_Situation",
                columns: table => new
                {
                    Business_Situation_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BS_Business_Person_ID = table.Column<int>(type: "int", nullable: false),
                    BS_Precovid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BS_Postcovid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BS_New_Business_PostCovid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Situation_of_the_business = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business_Situation", x => x.Business_Situation_ID);
                    table.ForeignKey(
                        name: "FK_Business_Situation_Persons_BS_Business_Person_ID",
                        column: x => x.BS_Business_Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BusinessGeneral",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusineesPlanId = table.Column<int>(type: "int", nullable: false),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessTypeId = table.Column<int>(type: "int", nullable: false),
                    IsEntilementFund = table.Column<bool>(type: "bit", nullable: false),
                    IsBankLoans = table.Column<bool>(type: "bit", nullable: false),
                    IsOwnService = table.Column<bool>(type: "bit", nullable: false),
                    IsPawingJewelery = table.Column<bool>(type: "bit", nullable: false),
                    IsInformalLoans = table.Column<bool>(type: "bit", nullable: false),
                    IsPartnerShip = table.Column<bool>(type: "bit", nullable: false),
                    IsBusinessChanged = table.Column<bool>(type: "bit", nullable: false),
                    GSBSPreviousIncome = table.Column<double>(type: "float", nullable: false),
                    IsFirstBusinessPlan = table.Column<bool>(type: "bit", nullable: false),
                    BusinessPlanNote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PreviousBusinessAtGoodShed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelocatedMonthandyear = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessAPType = table.Column<int>(type: "int", nullable: false),
                    BusinessTypeNote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessInformationNote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsBusinessPlanChangeFromInitialBP = table.Column<bool>(type: "bit", nullable: false),
                    PersonId = table.Column<int>(type: "int", nullable: true),
                    GSBSLivelihoodEngagement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncome = table.Column<int>(type: "int", nullable: false),
                    Business_BusinessLoaction = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialObservationsatGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessGeneral", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BusinessGeneral_Buiness_Plan_BusineesPlanId",
                        column: x => x.BusineesPlanId,
                        principalTable: "Buiness_Plan",
                        principalColumn: "Buiness_Plan_ID");
                    table.ForeignKey(
                        name: "FK_BusinessGeneral_BusinessType_BusinessTypeId",
                        column: x => x.BusinessTypeId,
                        principalTable: "BusinessType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BusinessGeneral_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "EmployeeGeneral",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobRole = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Salary = table.Column<double>(type: "float", nullable: false),
                    EmployeeRealocatedMonthandYear = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeBusinessLivelihoodRealocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeSpecialNotes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeGeneral", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EmployeeGeneral_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "Entittlments",
                columns: table => new
                {
                    Entittlment_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Entittlment_Person_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Entittlment_Sub_Total = table.Column<double>(type: "float", nullable: false),
                    Entittlment_retention_10_percent = table.Column<double>(type: "float", nullable: false),
                    Entittlment_Grand_Total = table.Column<double>(type: "float", nullable: false),
                    Person_ID = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entittlments", x => x.Entittlment_ID);
                    table.ForeignKey(
                        name: "FK_Entittlments_Persons_Person_ID",
                        column: x => x.Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Monitor",
                columns: table => new
                {
                    Monitor_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Monitor_Person_ID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Monitor_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Monitor_Duration = table.Column<int>(type: "int", nullable: false),
                    Monitor_Update = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Monitor_Monthly_income = table.Column<double>(type: "float", nullable: false),
                    Monitor_LRP_Responds_action = table.Column<int>(type: "int", nullable: false),
                    Monitor_Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Person_ID = table.Column<int>(type: "int", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Monitor", x => x.Monitor_ID);
                    table.ForeignKey(
                        name: "FK_Monitor_Monitor_Duration_Monitor_Duration",
                        column: x => x.Monitor_Duration,
                        principalTable: "Monitor_Duration",
                        principalColumn: "Monitor_Duratione_ID");
                    table.ForeignKey(
                        name: "FK_Monitor_Persons_Person_ID",
                        column: x => x.Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "phaseOut",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DecisionMade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Situation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthAndYear = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlanedBusiness = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReasonForPhaseOut = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EntileMentFundReceive = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UseOfEntileFund = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SocialWellBeing = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EconomyWellBeign = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsInterestOfFixedDeposit = table.Column<bool>(type: "bit", nullable: false),
                    IsLivesWithcloseFamily = table.Column<bool>(type: "bit", nullable: false),
                    IsIncomeGeneratingSources = table.Column<bool>(type: "bit", nullable: false),
                    PersonID = table.Column<int>(type: "int", nullable: true),
                    monitorPeriodId = table.Column<int>(type: "int", nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Monitordate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Dateofphaseout = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Contactable = table.Column<bool>(type: "bit", nullable: false),
                    Otherincomegeneratingnote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dependonclosefamily = table.Column<bool>(type: "bit", nullable: false),
                    Betterphysicallivingcondition = table.Column<bool>(type: "bit", nullable: false),
                    Bettercaringandprotection = table.Column<bool>(type: "bit", nullable: false),
                    Healthy = table.Column<bool>(type: "bit", nullable: false),
                    Isaprequirement = table.Column<bool>(type: "bit", nullable: false),
                    requirementnote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Isourintervention = table.Column<bool>(type: "bit", nullable: false),
                    Satisfactionlevel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ourinterventionnote = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_phaseOut", x => x.Id);
                    table.ForeignKey(
                        name: "FK_phaseOut_MonitorPerioid_monitorPeriodId",
                        column: x => x.monitorPeriodId,
                        principalTable: "MonitorPerioid",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_phaseOut_Persons_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "PhaseOutGeneral",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhaseOutDecisionMade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthAndYearPhaseOut = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessPlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReasonForPhaseout = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EntitlementFund = table.Column<double>(type: "float", nullable: false),
                    UseofEntitlementFund = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SocialEconomicWellbeing = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsInterestOfFixedDeposit = table.Column<bool>(type: "bit", nullable: false),
                    IsLivesWithcloseFamily = table.Column<bool>(type: "bit", nullable: false),
                    IsIncomeGeneratingSources = table.Column<bool>(type: "bit", nullable: false),
                    PersonID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhaseOutGeneral", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhaseOutGeneral_Persons_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ThreeWheelGeneral",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true),
                    InitialParkAtGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncomeAtGSBS = table.Column<double>(type: "float", nullable: false),
                    EngagementAtGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RealocatedMonthandYear = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessLivelihoodRealocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    specialNotes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GSBSLivelihoodEngagement = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncome = table.Column<int>(type: "int", nullable: false),
                    BusinessLoaction = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialObservationsatGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThreeWheelGeneral", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThreeWheelGeneral_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "Training",
                columns: table => new
                {
                    Training_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Training_Person_ID = table.Column<int>(type: "int", nullable: true),
                    Training_Need = table.Column<bool>(type: "bit", nullable: false),
                    Training_Type = table.Column<int>(type: "int", nullable: false),
                    DS_office = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrainingDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TrainigPeriod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrainigOrganization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsEmployed = table.Column<bool>(type: "bit", nullable: false),
                    SalaryStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsEmployedSectorRelated = table.Column<bool>(type: "bit", nullable: false),
                    SocialRecognition = table.Column<bool>(type: "bit", nullable: false),
                    IsFamilyMemberInvolved = table.Column<bool>(type: "bit", nullable: false),
                    IsFamilyMemberCompletedTraining = table.Column<bool>(type: "bit", nullable: false),
                    TrainingDoneBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Training", x => x.Training_ID);
                    table.ForeignKey(
                        name: "FK_Training_Persons_Training_Person_ID",
                        column: x => x.Training_Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                    table.ForeignKey(
                        name: "FK_Training_Training_Type_Training_Type",
                        column: x => x.Training_Type,
                        principalTable: "Training_Type",
                        principalColumn: "Training_Type_ID");
                });

            migrationBuilder.CreateTable(
                name: "Vulnerability",
                columns: table => new
                {
                    Vulnerability_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vulnerability_Person_ID = table.Column<int>(type: "int", nullable: true),
                    Vulnerability_IS_Vulnerable = table.Column<bool>(type: "bit", nullable: false),
                    Vulnerability_Type = table.Column<int>(type: "int", nullable: false),
                    Vulnerability_Level = table.Column<int>(type: "int", nullable: false),
                    Vulnerability_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vulnerability_Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OtherVulnerability = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BackgroundInformation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InitialProjectInput = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vulnerability", x => x.Vulnerability_ID);
                    table.ForeignKey(
                        name: "FK_Vulnerability_Persons_Vulnerability_Person_ID",
                        column: x => x.Vulnerability_Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                    table.ForeignKey(
                        name: "FK_Vulnerability_Vulnerability_Level_Vulnerability_Level",
                        column: x => x.Vulnerability_Level,
                        principalTable: "Vulnerability_Level",
                        principalColumn: "Vulnerability_Level_ID");
                    table.ForeignKey(
                        name: "FK_Vulnerability_Vulnerability_Type_Vulnerability_Type",
                        column: x => x.Vulnerability_Type,
                        principalTable: "Vulnerability_Type",
                        principalColumn: "Vulnerability_Type_ID");
                });

            migrationBuilder.CreateTable(
                name: "Businesses",
                columns: table => new
                {
                    Business_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Business_Person_ID = table.Column<int>(type: "int", nullable: true),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessSituation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Business_address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Business_GIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Business_First_Buiness_Plan = table.Column<int>(type: "int", nullable: false),
                    Business_Second_Buiness_Plan = table.Column<int>(type: "int", nullable: true),
                    Business_Type = table.Column<int>(type: "int", nullable: false),
                    Business_changed = table.Column<bool>(type: "bit", nullable: false),
                    Business_Second_Business = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Business_Management_Mode = table.Column<int>(type: "int", nullable: false),
                    Business_Investment_Sources = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BuinessPlan2Buiness_Plan_ID = table.Column<int>(type: "int", nullable: true),
                    Buisness_In_Out = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PreviousBusiness = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentBusiness = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GSBSPreviousIncome = table.Column<double>(type: "float", nullable: false),
                    GBBSBusinessDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    relocatedMonthAndYear = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsEntitlementFund = table.Column<bool>(type: "bit", nullable: false),
                    IsBankLoan = table.Column<bool>(type: "bit", nullable: false),
                    IsOwnSaving = table.Column<bool>(type: "bit", nullable: false),
                    IsPawingJewelary = table.Column<bool>(type: "bit", nullable: false),
                    IsInformalLoans = table.Column<bool>(type: "bit", nullable: false),
                    IsPartnerShip = table.Column<bool>(type: "bit", nullable: false),
                    MonthlyIncome = table.Column<double>(type: "float", nullable: false),
                    IsbuinessDiversified = table.Column<bool>(type: "bit", nullable: false),
                    OldBusinesses = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsBusinessChangeFromInitial = table.Column<bool>(type: "bit", nullable: false),
                    CityOut = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncomeStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsOperatingWithStableProfit = table.Column<bool>(type: "bit", nullable: false),
                    IsAlternativeSite = table.Column<bool>(type: "bit", nullable: false),
                    businessSummary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsneedRequested = table.Column<bool>(type: "bit", nullable: false),
                    monitorId = table.Column<int>(type: "int", nullable: true),
                    monitorPeriodId = table.Column<int>(type: "int", nullable: false),
                    BusinessAddressId = table.Column<int>(type: "int", nullable: true),
                    Contactable = table.Column<bool>(type: "bit", nullable: false),
                    IsAPDead = table.Column<bool>(type: "bit", nullable: false),
                    HowIsFamilyIfdead = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HowBusinessCHange = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncomeStatusComparedToGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncomeStatusComparedToPM = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DailyIncome = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IsNeedOrRequirment = table.Column<bool>(type: "bit", nullable: false),
                    RequirmentNeed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpecialObservation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Businesses", x => x.Business_ID);
                    table.ForeignKey(
                        name: "FK_Businesses_Address_BusinessAddressId",
                        column: x => x.BusinessAddressId,
                        principalTable: "Address",
                        principalColumn: "Address_ID");
                    table.ForeignKey(
                        name: "FK_Businesses_Business_Management_Mode_Business_Management_Mode",
                        column: x => x.Business_Management_Mode,
                        principalTable: "Business_Management_Mode",
                        principalColumn: "Business_Management_Mode_ID");
                    table.ForeignKey(
                        name: "FK_Businesses_BusinessType_Business_Type",
                        column: x => x.Business_Type,
                        principalTable: "BusinessType",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Businesses_Monitor_monitorId",
                        column: x => x.monitorId,
                        principalTable: "Monitor",
                        principalColumn: "Monitor_ID");
                    table.ForeignKey(
                        name: "FK_Businesses_MonitorPerioid_monitorPeriodId",
                        column: x => x.monitorPeriodId,
                        principalTable: "MonitorPerioid",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Businesses_Persons_Business_Person_ID",
                        column: x => x.Business_Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "Employment",
                columns: table => new
                {
                    Employment_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Person_ID = table.Column<int>(type: "int", nullable: true),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employment_Duration = table.Column<int>(type: "int", nullable: true),
                    Employment_Status = table.Column<int>(type: "int", nullable: false),
                    Employment_Started_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Employment_Salary = table.Column<double>(type: "float", nullable: true),
                    Employment_Type = table.Column<int>(type: "int", nullable: false),
                    Employment_Employer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employment_Employer_Type = table.Column<int>(type: "int", nullable: false),
                    Employment_How_he_found_the_job = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employment_If_not_angeged_in_a_job_reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Employment_Remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Job_Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsSameEmployer = table.Column<bool>(type: "bit", nullable: false),
                    SalaryStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Current_Employer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobengagementID = table.Column<int>(type: "int", nullable: false),
                    MonitorID = table.Column<int>(type: "int", nullable: true),
                    IsSimilarCapacity = table.Column<bool>(type: "bit", nullable: false),
                    monitorPeriodId = table.Column<int>(type: "int", nullable: false),
                    EmployementAddressId = table.Column<int>(type: "int", nullable: true),
                    Contactable = table.Column<bool>(type: "bit", nullable: false),
                    IsEmployee = table.Column<bool>(type: "bit", nullable: false),
                    CurrentEmployer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JobStartedDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncome = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    DailyIncome = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    IsSameEmployerCTG = table.Column<bool>(type: "bit", nullable: false),
                    IsSameSameEmployerCPM = table.Column<bool>(type: "bit", nullable: false),
                    HowJobFound = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AnyRequestNeed = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Situation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonitorDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsSimilarCapasityComparedToGSBS = table.Column<bool>(type: "bit", nullable: false),
                    IsSimilarCapasityComparedToPreviousMonitor = table.Column<bool>(type: "bit", nullable: false),
                    IncomStatusComparedtoGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncomeStatusComparedtoPM = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentJob = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedBy = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    UpdatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employment", x => x.Employment_ID);
                    table.ForeignKey(
                        name: "FK_Employment_Address_EmployementAddressId",
                        column: x => x.EmployementAddressId,
                        principalTable: "Address",
                        principalColumn: "Address_ID");
                    table.ForeignKey(
                        name: "FK_Employment_Employment_Status_Employment_Status",
                        column: x => x.Employment_Status,
                        principalTable: "Employment_Status",
                        principalColumn: "Employment_Status_ID");
                    table.ForeignKey(
                        name: "FK_Employment_Employment_Type_Employment_Type",
                        column: x => x.Employment_Type,
                        principalTable: "Employment_Type",
                        principalColumn: "Employment_Type_ID");
                    table.ForeignKey(
                        name: "FK_Employment_JobEngagement_JobengagementID",
                        column: x => x.JobengagementID,
                        principalTable: "JobEngagement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Employment_Monitor_MonitorID",
                        column: x => x.MonitorID,
                        principalTable: "Monitor",
                        principalColumn: "Monitor_ID");
                    table.ForeignKey(
                        name: "FK_Employment_MonitorPerioid_monitorPeriodId",
                        column: x => x.monitorPeriodId,
                        principalTable: "MonitorPerioid",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Employment_Persons_Person_ID",
                        column: x => x.Person_ID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "ThreeWheeler",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InitalParkAtGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIcomeAtGSBS = table.Column<double>(type: "float", nullable: false),
                    EngauagmentAtGSBS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrentPark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonthlyIncome = table.Column<double>(type: "float", nullable: false),
                    PersonID = table.Column<int>(type: "int", nullable: true),
                    IncomeStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Situation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonitorId = table.Column<int>(type: "int", nullable: false),
                    monitorPeriodId = table.Column<int>(type: "int", nullable: false),
                    Workingdays = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Haveotherincomegeneratingsources = table.Column<bool>(type: "bit", nullable: false),
                    Threewheelpark = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Contactable = table.Column<bool>(type: "bit", nullable: false),
                    DailyIncome = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SpecialObservation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ThreeWheeler", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ThreeWheeler_Monitor_MonitorId",
                        column: x => x.MonitorId,
                        principalTable: "Monitor",
                        principalColumn: "Monitor_ID");
                    table.ForeignKey(
                        name: "FK_ThreeWheeler_MonitorPerioid_monitorPeriodId",
                        column: x => x.monitorPeriodId,
                        principalTable: "MonitorPerioid",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ThreeWheeler_Persons_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                });

            migrationBuilder.CreateTable(
                name: "PhaseOutMonitorDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhaseOutMonitorDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhaseOutMonitorDocuments_phaseOut_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "phaseOut",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PhaseOutMonitorImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhaseOutMonitorImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhaseOutMonitorImages_phaseOut_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "phaseOut",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PhaseOutMonitorVideos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhaseOutMonitorVideos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PhaseOutMonitorVideos_phaseOut_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "phaseOut",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "VulnerabilityMonitor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Period = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PersonNIC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectInput = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VulnerabilityStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Stability = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsIncomeSecure = table.Column<bool>(type: "bit", nullable: false),
                    CoverDaytoDayExpenses = table.Column<bool>(type: "bit", nullable: false),
                    IsBetterPhysicalLivingFacility = table.Column<bool>(type: "bit", nullable: false),
                    BetterSocialFamilyEnvironment = table.Column<bool>(type: "bit", nullable: false),
                    ProtectionAndSecurity = table.Column<bool>(type: "bit", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MonitorId = table.Column<int>(type: "int", nullable: true),
                    PersonId = table.Column<int>(type: "int", nullable: true),
                    VulnerabilityID = table.Column<int>(type: "int", nullable: false),
                    monitorPeriodId = table.Column<int>(type: "int", nullable: false),
                    monitorDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VulnerabilityMonitor", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VulnerabilityMonitor_Monitor_MonitorId",
                        column: x => x.MonitorId,
                        principalTable: "Monitor",
                        principalColumn: "Monitor_ID");
                    table.ForeignKey(
                        name: "FK_VulnerabilityMonitor_MonitorPerioid_monitorPeriodId",
                        column: x => x.monitorPeriodId,
                        principalTable: "MonitorPerioid",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_VulnerabilityMonitor_Persons_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Persons",
                        principalColumn: "Person_ID");
                    table.ForeignKey(
                        name: "FK_VulnerabilityMonitor_Vulnerability_VulnerabilityID",
                        column: x => x.VulnerabilityID,
                        principalTable: "Vulnerability",
                        principalColumn: "Vulnerability_ID");
                });

            migrationBuilder.CreateTable(
                name: "businessMonitorDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false),
                    Business_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_businessMonitorDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_businessMonitorDocuments_Businesses_Business_ID",
                        column: x => x.Business_ID,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "businessMonitorImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false),
                    Business_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_businessMonitorImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_businessMonitorImages_Businesses_Business_ID",
                        column: x => x.Business_ID,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "businessMonitorVideos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false),
                    Business_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_businessMonitorVideos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_businessMonitorVideos_Businesses_Business_ID",
                        column: x => x.Business_ID,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BusinessStaff",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Number = table.Column<double>(type: "float", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessStaff", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BusinessStaff_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "BusinessStocks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessStocks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BusinessStocks_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "BusinessVehicle",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Purchased = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessVehicle", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BusinessVehicle_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "Cilentele",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cilentele", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cilentele_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "MachinaryEquipment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MachinaryEquipment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MachinaryEquipment_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "ManagementPractices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManagementPractices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ManagementPractices_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "Shopspace",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusinessId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    number = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shopspace", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Shopspace_Businesses_BusinessId",
                        column: x => x.BusinessId,
                        principalTable: "Businesses",
                        principalColumn: "Business_ID");
                });

            migrationBuilder.CreateTable(
                name: "employeeMonitorDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employeeMonitorDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_employeeMonitorDocuments_Employment_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "Employment",
                        principalColumn: "Employment_ID");
                });

            migrationBuilder.CreateTable(
                name: "employeeMonitorImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employeeMonitorImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_employeeMonitorImages_Employment_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "Employment",
                        principalColumn: "Employment_ID");
                });

            migrationBuilder.CreateTable(
                name: "employeeMonitorVideos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employeeMonitorVideos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_employeeMonitorVideos_Employment_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "Employment",
                        principalColumn: "Employment_ID");
                });

            migrationBuilder.CreateTable(
                name: "threeWheelMonitorDocuments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_threeWheelMonitorDocuments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_threeWheelMonitorDocuments_ThreeWheeler_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "ThreeWheeler",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "threeWheelMonitorImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_threeWheelMonitorImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_threeWheelMonitorImages_ThreeWheeler_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "ThreeWheeler",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "threeWheelMonitorVideos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FileType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmployeeMonitorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_threeWheelMonitorVideos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_threeWheelMonitorVideos_ThreeWheeler_EmployeeMonitorId",
                        column: x => x.EmployeeMonitorId,
                        principalTable: "ThreeWheeler",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_cityId",
                table: "Address",
                column: "cityId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_countryId",
                table: "Address",
                column: "countryId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_districtId",
                table: "Address",
                column: "districtId");

            migrationBuilder.CreateIndex(
                name: "IX_Address_statesId",
                table: "Address",
                column: "statesId");

            migrationBuilder.CreateIndex(
                name: "IX_apBusinessDocuments_PersonId",
                table: "apBusinessDocuments",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_ApDocuments_PersonId",
                table: "ApDocuments",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_ApImages_PersonId",
                table: "ApImages",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_AppCustomers_Name",
                table: "AppCustomers",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_AppOrderDetails_OrderId",
                table: "AppOrderDetails",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_AppOrderDetails_ProductId",
                table: "AppOrderDetails",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_AppOrders_CashierId",
                table: "AppOrders",
                column: "CashierId");

            migrationBuilder.CreateIndex(
                name: "IX_AppOrders_CustomerId",
                table: "AppOrders",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_Name",
                table: "AppProducts",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ParentId",
                table: "AppProducts",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ProductCategoryId",
                table: "AppProducts",
                column: "ProductCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ApUserImage_PersonId",
                table: "ApUserImage",
                column: "PersonId",
                unique: true,
                filter: "[PersonId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ApVideos_PersonId",
                table: "ApVideos",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Bank_Type",
                table: "Bank",
                column: "Bank_Type");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Account_Bank_Account_Type_ID",
                table: "Bank_Account",
                column: "Bank_Account_Type_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Account_Bank_Branch_ID",
                table: "Bank_Account",
                column: "Bank_Branch_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Account_Bank_ID",
                table: "Bank_Account",
                column: "Bank_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Account_PersonID",
                table: "Bank_Account",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_Bank_Branch_BankID",
                table: "Bank_Branch",
                column: "BankID");

            migrationBuilder.CreateIndex(
                name: "IX_Business_Situation_BS_Business_Person_ID",
                table: "Business_Situation",
                column: "BS_Business_Person_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_Business_Management_Mode",
                table: "Businesses",
                column: "Business_Management_Mode");

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_Business_Person_ID",
                table: "Businesses",
                column: "Business_Person_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_Business_Type",
                table: "Businesses",
                column: "Business_Type");

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_BusinessAddressId",
                table: "Businesses",
                column: "BusinessAddressId",
                unique: true,
                filter: "[BusinessAddressId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_monitorId",
                table: "Businesses",
                column: "monitorId",
                unique: true,
                filter: "[monitorId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_monitorPeriodId",
                table: "Businesses",
                column: "monitorPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_BusinessGeneral_BusineesPlanId",
                table: "BusinessGeneral",
                column: "BusineesPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_BusinessGeneral_BusinessTypeId",
                table: "BusinessGeneral",
                column: "BusinessTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_BusinessGeneral_PersonId",
                table: "BusinessGeneral",
                column: "PersonId",
                unique: true,
                filter: "[PersonId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_businessMonitorDocuments_Business_ID",
                table: "businessMonitorDocuments",
                column: "Business_ID");

            migrationBuilder.CreateIndex(
                name: "IX_businessMonitorImages_Business_ID",
                table: "businessMonitorImages",
                column: "Business_ID");

            migrationBuilder.CreateIndex(
                name: "IX_businessMonitorVideos_Business_ID",
                table: "businessMonitorVideos",
                column: "Business_ID");

            migrationBuilder.CreateIndex(
                name: "IX_BusinessStaff_BusinessId",
                table: "BusinessStaff",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BusinessStocks_BusinessId",
                table: "BusinessStocks",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BusinessVehicle_BusinessId",
                table: "BusinessVehicle",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cilentele_BusinessId",
                table: "Cilentele",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_City_City_Country_ID",
                table: "City",
                column: "City_Country_ID");

            migrationBuilder.CreateIndex(
                name: "IX_City_City_District_ID",
                table: "City",
                column: "City_District_ID");

            migrationBuilder.CreateIndex(
                name: "IX_City_City_States_ID",
                table: "City",
                column: "City_States_ID");

            migrationBuilder.CreateIndex(
                name: "IX_District_District_Country_ID",
                table: "District",
                column: "District_Country_ID");

            migrationBuilder.CreateIndex(
                name: "IX_District_District_States_ID",
                table: "District",
                column: "District_States_ID");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeGeneral_PersonId",
                table: "EmployeeGeneral",
                column: "PersonId",
                unique: true,
                filter: "[PersonId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_employeeMonitorDocuments_EmployeeMonitorId",
                table: "employeeMonitorDocuments",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_employeeMonitorImages_EmployeeMonitorId",
                table: "employeeMonitorImages",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_employeeMonitorVideos_EmployeeMonitorId",
                table: "employeeMonitorVideos",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_EmployementAddressId",
                table: "Employment",
                column: "EmployementAddressId",
                unique: true,
                filter: "[EmployementAddressId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_Employment_Status",
                table: "Employment",
                column: "Employment_Status");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_Employment_Type",
                table: "Employment",
                column: "Employment_Type");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_JobengagementID",
                table: "Employment",
                column: "JobengagementID");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_MonitorID",
                table: "Employment",
                column: "MonitorID",
                unique: true,
                filter: "[MonitorID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_monitorPeriodId",
                table: "Employment",
                column: "monitorPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_Employment_Person_ID",
                table: "Employment",
                column: "Person_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Entittlments_Person_ID",
                table: "Entittlments",
                column: "Person_ID");

            migrationBuilder.CreateIndex(
                name: "IX_EventwiseParticipants_EventId",
                table: "EventwiseParticipants",
                column: "EventId");

            migrationBuilder.CreateIndex(
                name: "IX_MachinaryEquipment_BusinessId",
                table: "MachinaryEquipment",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ManagementPractices_BusinessId",
                table: "ManagementPractices",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Monitor_Monitor_Duration",
                table: "Monitor",
                column: "Monitor_Duration");

            migrationBuilder.CreateIndex(
                name: "IX_Monitor_Person_ID",
                table: "Monitor",
                column: "Person_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_businessOrLivelihoodRelocationId",
                table: "Persons",
                column: "businessOrLivelihoodRelocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_educationalLevelId",
                table: "Persons",
                column: "educationalLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_GenderUser_Gender_ID",
                table: "Persons",
                column: "GenderUser_Gender_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_martialStatusId",
                table: "Persons",
                column: "martialStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_Person_Address",
                table: "Persons",
                column: "Person_Address",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Persons_Person_Type",
                table: "Persons",
                column: "Person_Type");

            migrationBuilder.CreateIndex(
                name: "IX_phaseOut_monitorPeriodId",
                table: "phaseOut",
                column: "monitorPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_phaseOut_PersonID",
                table: "phaseOut",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseOutGeneral_PersonID",
                table: "PhaseOutGeneral",
                column: "PersonID",
                unique: true,
                filter: "[PersonID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseOutMonitorDocuments_EmployeeMonitorId",
                table: "PhaseOutMonitorDocuments",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseOutMonitorImages_EmployeeMonitorId",
                table: "PhaseOutMonitorImages",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_PhaseOutMonitorVideos_EmployeeMonitorId",
                table: "PhaseOutMonitorVideos",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_Shopspace_BusinessId",
                table: "Shopspace",
                column: "BusinessId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_States_States_Country_ID",
                table: "States",
                column: "States_Country_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ThreeWheeler_MonitorId",
                table: "ThreeWheeler",
                column: "MonitorId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ThreeWheeler_monitorPeriodId",
                table: "ThreeWheeler",
                column: "monitorPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_ThreeWheeler_PersonID",
                table: "ThreeWheeler",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_ThreeWheelGeneral_PersonId",
                table: "ThreeWheelGeneral",
                column: "PersonId",
                unique: true,
                filter: "[PersonId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_threeWheelMonitorDocuments_EmployeeMonitorId",
                table: "threeWheelMonitorDocuments",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_threeWheelMonitorImages_EmployeeMonitorId",
                table: "threeWheelMonitorImages",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_threeWheelMonitorVideos_EmployeeMonitorId",
                table: "threeWheelMonitorVideos",
                column: "EmployeeMonitorId");

            migrationBuilder.CreateIndex(
                name: "IX_Training_Training_Person_ID",
                table: "Training",
                column: "Training_Person_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Training_Training_Type",
                table: "Training",
                column: "Training_Type");

            migrationBuilder.CreateIndex(
                name: "IX_Vulnerability_Vulnerability_Level",
                table: "Vulnerability",
                column: "Vulnerability_Level");

            migrationBuilder.CreateIndex(
                name: "IX_Vulnerability_Vulnerability_Person_ID",
                table: "Vulnerability",
                column: "Vulnerability_Person_ID",
                unique: true,
                filter: "[Vulnerability_Person_ID] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Vulnerability_Vulnerability_Type",
                table: "Vulnerability",
                column: "Vulnerability_Type");

            migrationBuilder.CreateIndex(
                name: "IX_VulnerabilityMonitor_MonitorId",
                table: "VulnerabilityMonitor",
                column: "MonitorId",
                unique: true,
                filter: "[MonitorId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_VulnerabilityMonitor_monitorPeriodId",
                table: "VulnerabilityMonitor",
                column: "monitorPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_VulnerabilityMonitor_PersonId",
                table: "VulnerabilityMonitor",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_VulnerabilityMonitor_VulnerabilityID",
                table: "VulnerabilityMonitor",
                column: "VulnerabilityID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adress_Owner_Type");

            migrationBuilder.DropTable(
                name: "apBusinessDocuments");

            migrationBuilder.DropTable(
                name: "ApDocuments");

            migrationBuilder.DropTable(
                name: "ApImages");

            migrationBuilder.DropTable(
                name: "AppOrderDetails");

            migrationBuilder.DropTable(
                name: "ApUserImage");

            migrationBuilder.DropTable(
                name: "ApVideos");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "AuditLogs");

            migrationBuilder.DropTable(
                name: "Bank_Account");

            migrationBuilder.DropTable(
                name: "Business_Situation");

            migrationBuilder.DropTable(
                name: "BusinessGeneral");

            migrationBuilder.DropTable(
                name: "businessMonitorDocuments");

            migrationBuilder.DropTable(
                name: "businessMonitorImages");

            migrationBuilder.DropTable(
                name: "businessMonitorVideos");

            migrationBuilder.DropTable(
                name: "BusinessStaff");

            migrationBuilder.DropTable(
                name: "BusinessStocks");

            migrationBuilder.DropTable(
                name: "BusinessVehicle");

            migrationBuilder.DropTable(
                name: "Cilentele");

            migrationBuilder.DropTable(
                name: "EmployeeGeneral");

            migrationBuilder.DropTable(
                name: "employeeMonitorDocuments");

            migrationBuilder.DropTable(
                name: "employeeMonitorImages");

            migrationBuilder.DropTable(
                name: "employeeMonitorVideos");

            migrationBuilder.DropTable(
                name: "Employer_Type");

            migrationBuilder.DropTable(
                name: "Entittlments");

            migrationBuilder.DropTable(
                name: "EventwiseParticipants");

            migrationBuilder.DropTable(
                name: "MachinaryEquipment");

            migrationBuilder.DropTable(
                name: "ManagementPractices");

            migrationBuilder.DropTable(
                name: "PhaseOutGeneral");

            migrationBuilder.DropTable(
                name: "PhaseOutMonitorDocuments");

            migrationBuilder.DropTable(
                name: "PhaseOutMonitorImages");

            migrationBuilder.DropTable(
                name: "PhaseOutMonitorVideos");

            migrationBuilder.DropTable(
                name: "previousType");

            migrationBuilder.DropTable(
                name: "Shopspace");

            migrationBuilder.DropTable(
                name: "ThreeWheelGeneral");

            migrationBuilder.DropTable(
                name: "threeWheelMonitorDocuments");

            migrationBuilder.DropTable(
                name: "threeWheelMonitorImages");

            migrationBuilder.DropTable(
                name: "threeWheelMonitorVideos");

            migrationBuilder.DropTable(
                name: "Training");

            migrationBuilder.DropTable(
                name: "VulnerabilityMonitor");

            migrationBuilder.DropTable(
                name: "AppOrders");

            migrationBuilder.DropTable(
                name: "AppProducts");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Bank_Account_Type");

            migrationBuilder.DropTable(
                name: "Bank_Branch");

            migrationBuilder.DropTable(
                name: "Buiness_Plan");

            migrationBuilder.DropTable(
                name: "Employment");

            migrationBuilder.DropTable(
                name: "Intervention");

            migrationBuilder.DropTable(
                name: "phaseOut");

            migrationBuilder.DropTable(
                name: "Businesses");

            migrationBuilder.DropTable(
                name: "ThreeWheeler");

            migrationBuilder.DropTable(
                name: "Training_Type");

            migrationBuilder.DropTable(
                name: "Vulnerability");

            migrationBuilder.DropTable(
                name: "AppCustomers");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "AppProductCategories");

            migrationBuilder.DropTable(
                name: "Bank");

            migrationBuilder.DropTable(
                name: "Employment_Status");

            migrationBuilder.DropTable(
                name: "Employment_Type");

            migrationBuilder.DropTable(
                name: "JobEngagement");

            migrationBuilder.DropTable(
                name: "Business_Management_Mode");

            migrationBuilder.DropTable(
                name: "BusinessType");

            migrationBuilder.DropTable(
                name: "Monitor");

            migrationBuilder.DropTable(
                name: "MonitorPerioid");

            migrationBuilder.DropTable(
                name: "Vulnerability_Level");

            migrationBuilder.DropTable(
                name: "Vulnerability_Type");

            migrationBuilder.DropTable(
                name: "Bank_Type");

            migrationBuilder.DropTable(
                name: "Monitor_Duration");

            migrationBuilder.DropTable(
                name: "Persons");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "businessOrLivelihoodRelocation");

            migrationBuilder.DropTable(
                name: "educationLevel");

            migrationBuilder.DropTable(
                name: "Gender");

            migrationBuilder.DropTable(
                name: "martialStatus");

            migrationBuilder.DropTable(
                name: "Person_Type");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "District");

            migrationBuilder.DropTable(
                name: "States");

            migrationBuilder.DropTable(
                name: "Country");
        }
    }
}
