using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class threewheelmonitor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BusinessLivelihoodRealocation",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RealocatedMonthandYear",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "specialNotes",
                table: "ThreeWheelGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Contactable",
                table: "ThreeWheeler",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "DailyIncome",
                table: "ThreeWheeler",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "SpecialObservation",
                table: "ThreeWheeler",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BusinessLivelihoodRealocation",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "RealocatedMonthandYear",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "specialNotes",
                table: "ThreeWheelGeneral");

            migrationBuilder.DropColumn(
                name: "Contactable",
                table: "ThreeWheeler");

            migrationBuilder.DropColumn(
                name: "DailyIncome",
                table: "ThreeWheeler");

            migrationBuilder.DropColumn(
                name: "SpecialObservation",
                table: "ThreeWheeler");
        }
    }
}
