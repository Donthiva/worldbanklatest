using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class employeechanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AnyRequestNeed",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Contactable",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "CurrentEmployer",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "DailyIncome",
                table: "Employment",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "HowJobFound",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsEmployee",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsSameEmployerCTG",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsSameSameEmployerCPM",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "JobStartedDate",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "MonthlyIncome",
                table: "Employment",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Situation",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeBusinessLivelihoodRealocation",
                table: "EmployeeGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeRealocatedMonthandYear",
                table: "EmployeeGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeSpecialNotes",
                table: "EmployeeGeneral",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnyRequestNeed",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "Contactable",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "CurrentEmployer",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "DailyIncome",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "HowJobFound",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IsEmployee",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IsSameEmployerCTG",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IsSameSameEmployerCPM",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "JobStartedDate",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "MonthlyIncome",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "Situation",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "EmployeeBusinessLivelihoodRealocation",
                table: "EmployeeGeneral");

            migrationBuilder.DropColumn(
                name: "EmployeeRealocatedMonthandYear",
                table: "EmployeeGeneral");

            migrationBuilder.DropColumn(
                name: "EmployeeSpecialNotes",
                table: "EmployeeGeneral");
        }
    }
}
