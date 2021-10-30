using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class rbandara : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BusinessLoaction",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GSBSLivelihoodEngagement",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MonthlyIncome",
                table: "ThreeWheelGeneral",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SpecialObservationsatGSBS",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Employer",
                table: "Persons",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GSBSLivelihoodEngagement",
                table: "Persons",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MonthlyIncome",
                table: "Persons",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SpecialObservationsatGSBS",
                table: "Persons",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Business_BusinessLoaction",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GSBSLivelihoodEngagement",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MonthlyIncome",
                table: "BusinessGeneral",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SpecialObservationsatGSBS",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BusinessLoaction",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "GSBSLivelihoodEngagement",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "MonthlyIncome",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "SpecialObservationsatGSBS",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "Employer",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "GSBSLivelihoodEngagement",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "MonthlyIncome",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "SpecialObservationsatGSBS",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "Business_BusinessLoaction",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "GSBSLivelihoodEngagement",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "MonthlyIncome",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "SpecialObservationsatGSBS",
                table: "BusinessGeneral");
        }
    }
}
