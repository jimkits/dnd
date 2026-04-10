# D&D API

An ASP.NET Core REST API that serves Dungeons & Dragons hero and monster information. Built as the backend for the D&D UI project.

## Tech Stack

- .NET 10.0 / ASP.NET Core
- Swashbuckle for Swagger/OpenAPI documentation
- SQLite via Entity Framework Core

## Installation

### Prerequisites

- .NET 10.0 SDK

Restore dependencies:

```bash
dotnet restore
```

## Usage

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

### Endpoints

| Method | Endpoint                      | Auth required | Description              |
| ------ | ----------------------------- | ------------- | ------------------------ |
| POST   | `/api/login`                  | No            | Authenticate             |
| GET    | `/api/hero?hero={type}`       | Yes           | Get hero information     |
| GET    | `/api/hero/image?hero={type}` | Yes           | Get hero image           |
| GET    | `/api/monsters?size={size}`   | Yes           | Get monsters information |
| GET    | `/api/ping`                   | No            | Health check             |
| GET    | `/api/version`                | No            | Returns API version      |

Swagger UI is available at `/api/swagger` in development mode.

### Configuration

The SQLite connection string is configured in `appsettings.Development.json`. The database file (`dnd.db`) is created automatically on first run and seeded with users, heroes, and monsters.

### Database Migrations

Migrations run automatically on startup via `db.Database.Migrate()` in `Program.cs`.

To add a new migration after changing an entity class in `Models/`:

```bash
dotnet ef migrations add <MigrationName> --output-dir Data/Migrations
```

## Examples

### Querying the database

Download the `sqlite3.exe` standalone binary (no installer) from the **Precompiled Binaries for Windows** section at `sqlite.org/download.html` — look for `sqlite-tools-win-x64`. Extract and add the folder to your PATH.

```bash
sqlite3 dnd.db "SELECT * FROM Users;"
```

```bash
sqlite3 dnd.db "SELECT * FROM Monsters m left join Attributes a ON m.attributesid = a.id left join Stats s on m.statsid = s.id;"
```

### Stale migration lock

If a migration is interrupted (e.g. app crash or force-kill), the `__EFMigrationsLock` row may not be released. The next startup will hang for several minutes waiting to acquire the lock.

Check the lock:

```bash
sqlite3 dnd.db "SELECT * FROM __EFMigrationsLock;"
```

Clear it manually:

```bash
sqlite3 dnd.db "DELETE FROM __EFMigrationsLock;"
```

Then restart the app.

### Recreate the database

```bash
cd dnd-api
dotnet ef database drop
dotnet ef database update
```

## License

This project is for personal/educational use. No license has been applied.

## Contributors

- Dimitrios B
