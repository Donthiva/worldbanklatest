using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class phasoutfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Contactable",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Dependonclosefamily",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Isaprequirement",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Isourintervention",
                table: "phaseOut",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "Monitordate",
                table: "phaseOut",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Otherincomegeneratingnote",
                table: "phaseOut",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Ourinterventionnote",
                table: "phaseOut",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Satisfactionlevel",
                table: "phaseOut",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "requirementnote",
                table: "phaseOut",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Contactable",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Dependonclosefamily",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Isaprequirement",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Isourintervention",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Monitordate",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Otherincomegeneratingnote",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Ourinterventionnote",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "Satisfactionlevel",
                table: "phaseOut");

            migrationBuilder.DropColumn(
                name: "requirementnote",
                table: "phaseOut");
        }
    }
}
