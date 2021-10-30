using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class mobilevendor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CurrentJob",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IncomStatusComparedtoGSBS",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IncomeStatusComparedtoPM",
                table: "Employment",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSimilarCapasityComparedToGSBS",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsSimilarCapasityComparedToPreviousMonitor",
                table: "Employment",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "BusinessAPType",
                table: "BusinessGeneral",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "BusinessInformationNote",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BusinessTypeNote",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsBusinessPlanChangeFromInitialBP",
                table: "BusinessGeneral",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Contactable",
                table: "Businesses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "DailyIncome",
                table: "Businesses",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "HowBusinessCHange",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HowIsFamilyIfdead",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IncomeStatusComparedToGSBS",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "IncomeStatusComparedToPM",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsAPDead",
                table: "Businesses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsNeedOrRequirment",
                table: "Businesses",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "RequirmentNeed",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpecialObservation",
                table: "Businesses",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentJob",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IncomStatusComparedtoGSBS",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IncomeStatusComparedtoPM",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IsSimilarCapasityComparedToGSBS",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "IsSimilarCapasityComparedToPreviousMonitor",
                table: "Employment");

            migrationBuilder.DropColumn(
                name: "BusinessAPType",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "BusinessInformationNote",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "BusinessTypeNote",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "IsBusinessPlanChangeFromInitialBP",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "Contactable",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "DailyIncome",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "HowBusinessCHange",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "HowIsFamilyIfdead",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "IncomeStatusComparedToGSBS",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "IncomeStatusComparedToPM",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "IsAPDead",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "IsNeedOrRequirment",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "RequirmentNeed",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "SpecialObservation",
                table: "Businesses");
        }
    }
}
