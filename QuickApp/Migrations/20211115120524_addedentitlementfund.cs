using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class addedentitlementfund : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "EntitlementFund",
                table: "Persons",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "IsEntitleFund",
                table: "Persons",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EntitlementFund",
                table: "Persons");

            migrationBuilder.DropColumn(
                name: "IsEntitleFund",
                table: "Persons");
        }
    }
}
