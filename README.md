# Dungeons & Dragons Compendium

A full-stack D&D compendium with a React frontend and ASP.NET Core API backend. Browse heroes and monsters with animated navigation, character art, and detailed game statistics.

## Projects

| Project    | Description              | Port                  |
| ---------- | ------------------------ | --------------------- |
| `dnd-api`  | ASP.NET Core REST API    | `http://localhost:5071` |
| `dnd-ui`   | React frontend           | `http://localhost:3000` |

## Getting Started

### Prerequisites

- .NET 10.0 SDK
- Node.js

### 1. Start the API

```bash
cd dnd-api
dotnet run
```

### 2. Start the UI

```bash
cd dnd-ui
npm install
npm start
```

### 3. Open the app

Navigate to `http://localhost:3000/login` and log in with the credentials configured in `dnd-api/appsettings.Development.json`.
