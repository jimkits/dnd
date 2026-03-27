# D&D API

An ASP.NET Core REST API that serves Dungeons & Dragons hero data and images. Built as the backend for the D&D UI project.

## Endpoints

| Method | Endpoint                      | Description                                         |
| ------ | ----------------------------- | --------------------------------------------------- |
| POST   | `/api/login`                  | Authenticate with username and password             |
| GET    | `/api/hero?hero={type}`       | Get hero details (Cleric, Fighter, Rogue, Sorcerer) |
| GET    | `/api/hero/image?hero={type}` | Get hero image                                      |
| GET    | `/api/ping`                   | Health check (returns "pong")                       |
| GET    | `/api/version`                | Returns API version                                 |

Swagger UI is available at `/swagger` in development mode.

## Tech Stack

- .NET 10.0 / ASP.NET Core
- Swashbuckle for Swagger/OpenAPI documentation
- SQLite database via Entity Framework Core

## Getting Started

### Prerequisites

- .NET 10.0 SDK

### Run

```bash
dotnet run
```

The API starts on:

- HTTP: `http://localhost:5071`
- HTTPS: `https://localhost:7162`

### Build

```bash
dotnet build
```

## Configuration

The SQLite connection string is configured in `appsettings.Development.json`. The database file (`dnd.db`) is created automatically on first run, and seeded with users and hero data.

## Swagger

Swagger is reachable in /api/swagger

## Database

The project uses SQLite with Entity Framework Core. The database file is `dnd.db` in the project root (git-ignored).

### Apply migrations

Migrations run automatically on startup via `db.Database.Migrate()` in `Program.cs`.

### Add a new migration

Run this after making changes to any entity class in `Models/`:

```bash
dotnet ef migrations add <MigrationName> --output-dir Data/Migrations
```

Example:

```bash
dotnet ef migrations add AddMonsters --output-dir Data/Migrations
```

This generates a new file in `Data/Migrations/` with `Up()` and `Down()` methods describing the schema change. The migration is applied automatically the next time the API starts.

## Querying the Database

The SQLite database file is `dnd.db` in the project root. Run the API at least once first so `dnd.db` is created.

### Setup

Download the `sqlite3.exe` standalone binary (no installer) from the **Precompiled Binaries for Windows** section at `sqlite.org/download.html` — look for `sqlite-tools-win-x64`. Extract and add the folder to your PATH.

### Examples

```bash
sqlite3 dnd.db "SELECT * FROM Users;"
```

```bash
sqlite3 dnd.db "SELECT * FROM Monsters m left join Attributes a ON m.attributesid = a.id left join Stats s on m.statsid = s.id;"
```

### Stale migration lock

If a migration is interrupted (e.g. app crash or force-kill), the `__EFMigrationsLock` row may not be released. The next startup will hang for several minutes waiting to acquire the lock.

```bash
sqlite3 dnd.db "SELECT * FROM __EFMigrationsLock;"
```

To fix it, clear the lock manually:

```bash
sqlite3 dnd.db "DELETE FROM __EFMigrationsLock;"
```

Then restart the app.

### Recreate the DB

```bash
cd dnd-api
dotnet ef database drop
dotnet ef database update
```
