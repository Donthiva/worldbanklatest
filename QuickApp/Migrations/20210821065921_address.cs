using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class address : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BusinessAddressId",
                table: "Businesses",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Businesses_BusinessAddressId",
                table: "Businesses",
                column: "BusinessAddressId",
                unique: true,
                filter: "[BusinessAddressId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Businesses_Address_BusinessAddressId",
                table: "Businesses",
                column: "BusinessAddressId",
                principalTable: "Address",
                principalColumn: "Address_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Businesses_Address_BusinessAddressId",
                table: "Businesses");

            migrationBuilder.DropIndex(
                name: "IX_Businesses_BusinessAddressId",
                table: "Businesses");

            migrationBuilder.DropColumn(
                name: "BusinessAddressId",
                table: "Businesses");
        }
    }
}
