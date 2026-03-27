using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using DnD.API.Data;

namespace DnD.API.UnitTests.Helpers;

// Creates a fresh in-memory SQLite database for each test.
// Each test gets an isolated DB so tests don't affect each other.
public static class DbHelper
{
    public static DndDbContext CreateInMemoryDb()
    {
        // "Data Source=:memory:" means the DB lives only in RAM — nothing is written to disk
        var connection = new SqliteConnection("Data Source=:memory:");
        connection.Open();

        var options = new DbContextOptionsBuilder<DndDbContext>()
            .UseSqlite(connection)
            .Options;

        var db = new DndDbContext(options);
        db.Database.EnsureCreated(); // creates the tables (Users, Heroes)

        return db;
    }
}
