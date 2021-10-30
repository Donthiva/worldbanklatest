using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class businessdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BusinessPlanNote",
                table: "Persons",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BusinessPlanNote",
                table: "BusinessGeneral",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsFirstBusinessPlan",
                table: "BusinessGeneral",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BusinessPlanNote",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "BusinessPlanNote",
                table: "BusinessGeneral");

            migrationBuilder.DropColumn(
                name: "IsFirstBusinessPlan",
                table: "BusinessGeneral");
        }
    }
}
