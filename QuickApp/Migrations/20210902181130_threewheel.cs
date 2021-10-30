using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class threewheel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Haveotherincomegeneratingsources",
                table: "ThreeWheeler",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Threewheelpark",
                table: "ThreeWheeler",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Workingdays",
                table: "ThreeWheeler",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Haveotherincomegeneratingsources",
                table: "ThreeWheeler");

            migrationBuilder.DropColumn(
                name: "Threewheelpark",
                table: "ThreeWheeler");

            migrationBuilder.DropColumn(
                name: "Workingdays",
                table: "ThreeWheeler");
        }
    }
}
