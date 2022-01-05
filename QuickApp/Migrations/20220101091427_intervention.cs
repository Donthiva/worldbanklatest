using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class intervention : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Intervention",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TypeOfEventId = table.Column<int>(type: "int", nullable: false),
                    NameOfEvent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BriefDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MainStakeholdersParticipated = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ApCategoryId = table.Column<int>(type: "int", nullable: false),
                    NumberOfParticipants = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Intervention", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EventwiseParticipants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EventId = table.Column<int>(type: "int", nullable: false),
                    ParticipantId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventwiseParticipants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EventwiseParticipants_Intervention_EventId",
                        column: x => x.EventId,
                        principalTable: "Intervention",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventwiseParticipants_EventId",
                table: "EventwiseParticipants",
                column: "EventId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventwiseParticipants");

            migrationBuilder.DropTable(
                name: "Intervention");
        }
    }
}
