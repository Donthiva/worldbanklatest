using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class phasoutfields2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Bettercaringandprotection",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Betterphysicallivingcondition",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Healthy",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bettercaringandprotection",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Betterphysicallivingcondition",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Healthy",
                table: "phaseOut");
        }
    }
}
