# D&D API

An ASP.NET Core REST API that serves Dungeons & Dragons hero data and images. Built as the backend for the D&D UI project.

## Endpoints

| Method | Endpoint                      | Description                                         |
| ------ | ----------------------------- | --------------------------------------------------- |
| POST   | `/api/login`                  | Authenticate with username and password              |
| GET    | `/api/hero?hero={type}`       | Get hero details (Cleric, Fighter, Rogue, Sorcerer) |
| GET    | `/api/hero/image?hero={type}` | Get hero image                                       |
| GET    | `/api/ping`                   | Health check (returns "pong")                       |
| GET    | `/api/version`                | Returns API version                                 |

Swagger UI is available at `/swagger` in development mode.

## Tech Stack

- .NET 10.0 / ASP.NET Core
- Swashbuckle for Swagger/OpenAPI documentation
- File-based JSON data (no database)

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

User credentials are configured in `appsettings.Development.json` under the `Users` section.

## Project Structure

```
dnd-api/
├── Controllers/
│   ├── HeroController.cs    # Hero details and image endpoints
│   └── LoginController.cs   # Authentication endpoint
├── Data/
│   ├── Heroes.cs             # Hero type enum
│   ├── UserStore.cs           # User credential store
│   ├── Images/                # Hero images
│   ├── Cleric.json            # Hero data files
│   ├── Fighter.json
│   ├── Rogue.json
│   └── Sorcerer.json
├── Program.cs                 # App setup, CORS, ping and version endpoints
├── appsettings.json
└── appsettings.Development.json
```
