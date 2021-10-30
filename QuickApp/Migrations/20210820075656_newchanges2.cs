using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class newchanges2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Persons_businessOrLivelihoodRelocationId",
                table: "Persons",
                column: "businessOrLivelihoodRelocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_educationalLevelId",
                table: "Persons",
                column: "educationalLevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Persons_martialStatusId",
                table: "Persons",
                column: "martialStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_businessOrLivelihoodRelocation_businessOrLivelihoodRelocationId",
                table: "Persons",
                column: "businessOrLivelihoodRelocationId",
                principalTable: "businessOrLivelihoodRelocation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_educationLevel_educationalLevelId",
                table: "Persons",
                column: "educationalLevelId",
                principalTable: "educationLevel",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Persons_martialStatus_martialStatusId",
                table: "Persons",
                column: "martialStatusId",
                principalTable: "martialStatus",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Persons_businessOrLivelihoodRelocation_businessOrLivelihoodRelocationId",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_educationLevel_educationalLevelId",
                table: "Persons");

            migrationBuilder.DropForeignKey(
                name: "FK_Persons_martialStatus_martialStatusId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_businessOrLivelihoodRelocationId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_educationalLevelId",
                table: "Persons");

            migrationBuilder.DropIndex(
                name: "IX_Persons_martialStatusId",
                table: "Persons");
        }
    }
}
