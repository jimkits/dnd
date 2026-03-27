using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DnD.API.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeedMonsters : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Stats",
                columns: ["ArmorClass", "HitPoints", "Speed"],
                values: new object[,]
                {
                    { "15 (leather armor, shield)", "7 (2d6)", "30 ft." },
                    { "12", "3 (1d6)", "30 ft., climb 30 ft." },
                    { "14", "7 (3d6 - 3)", "30 ft." },
                    { "12 (leather armor)", "11 (2d8 + 2)", "30 ft." },
                    { "12", "58 (13d8)", "0 ft., fly 40 ft. (hover)" },
                    { "15", "52 (8d8 + 16)", "20 ft." },
                    { "14", "114 (12d10 + 48)", "30 ft., fly 60 ft." },
                    { "14", "133 (14d10 + 56)", "20 ft." }
                });

            migrationBuilder.InsertData(
                table: "Attributes",
                columns: ["Strenth", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
                values: new object[,]
                {
                    { "8 (-1)", "14 (+2)", "10 (+0)", "10 (+0)", "8 (-1)", "8 (-1)" },
                    { "8 (-1)", "14 (+2)", "11 (+0)", "4 (-3)", "12 (+1)", "6 (-2)" },
                    { "7 (-2)", "15 (+2)", "9 (-1)", "8 (-1)", "7 (-2)", "8 (-1)" },
                    { "11 (+0)", "12 (+1)", "12 (+1)", "10 (+0)", "10 (+0)", "10 (+0)" },
                    { "1 (-5)", "14 (+2)", "10 (+0)", "12 (+1)", "11 (+0)", "17 (+3)" },
                    { "16 (+3)", "8 (-1)", "15 (+2)", "2 (-4)", "8 (-1)", "7 (-2)" },
                    { "19 (+4)", "11 (+0)", "19 (+4)", "3 (-4)", "14 (+2)", "10 (+0)" },
                    { "20 (+5)", "9 (-1)", "18 (+4)", "3 (-4)", "8 (-1)", "1 (-5)" }
                });

            migrationBuilder.InsertData(
                table: "Monsters",
                columns: ["Name", "Type", "Size", "Description", "StatsId", "AttributesId"],
                values: new object[,]
                {
                    { "Goblin",        "Humanoid",    "Small",  "Small Humanoid (Goblinoid), Neutral Evil",                  1, 1 },
                    { "Baboon",        "Beast",       "Small",  "Small Beast, Unaligned",                                    2, 2 },
                    { "Kobold Warrior","Dragon",      "Small",  "Small Dragon, Neutral",                                     3, 3 },
                    { "Bandit",        "Humanoid",    "Medium", "Medium Humanoid (Any Race), Any Non-Lawful Alignment",      4, 4 },
                    { "Banshee",       "Undead",      "Medium", "Medium Undead, Chaotic Evil",                               5, 5 },
                    { "Basilisk",      "Monstrosity", "Medium", "Medium Monstrosity, Unaligned",                             6, 6 },
                    { "Chimera",       "Monstrosity", "Large",  "Large Monstrosity, Chaotic Evil",                           7, 7 },
                    { "Clay Golem",    "Construct",   "Large",  "Large Construct, Unaligned",                                8, 8 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(table: "Monsters", keyColumn: "Name", keyValues: ["Goblin", "Baboon", "Kobold Warrior", "Bandit", "Banshee", "Basilisk", "Chimera", "Clay Golem"]);
            migrationBuilder.DeleteData(table: "Stats", keyColumn: "Id", keyValues: [1, 2, 3, 4, 5, 6, 7, 8]);
            migrationBuilder.DeleteData(table: "Attributes", keyColumn: "Id", keyValues: [1, 2, 3, 4, 5, 6, 7, 8]);
        }
    }
}
