using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DnD.API.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddHeroImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Heroes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Heroes",
                keyColumn: "Name",
                keyValue: "Cleric",
                column: "Image",
                value: "img-hero-cleric.png");

            migrationBuilder.UpdateData(
                table: "Heroes",
                keyColumn: "Name",
                keyValue: "Fighter",
                column: "Image",
                value: "img-hero-fighter.png");

            migrationBuilder.UpdateData(
                table: "Heroes",
                keyColumn: "Name",
                keyValue: "Rogue",
                column: "Image",
                value: "img-hero-rogue.png");

            migrationBuilder.UpdateData(
                table: "Heroes",
                keyColumn: "Name",
                keyValue: "Sorcerer",
                column: "Image",
                value: "img-hero-sorcerer.png");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Heroes");
        }
    }
}
