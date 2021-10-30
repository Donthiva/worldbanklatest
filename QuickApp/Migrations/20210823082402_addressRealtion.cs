using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class addressRealtion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Employment_EmployementAddressId",
                table: "Employment",
                column: "EmployementAddressId",
                unique: true,
                filter: "[EmployementAddressId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Employment_Address_EmployementAddressId",
                table: "Employment",
                column: "EmployementAddressId",
                principalTable: "Address",
                principalColumn: "Address_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employment_Address_EmployementAddressId",
                table: "Employment");

            migrationBuilder.DropIndex(
                name: "IX_Employment_EmployementAddressId",
                table: "Employment");
        }
    }
}
