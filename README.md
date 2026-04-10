# Dungeons & Dragons Compendium

A full-stack D&D compendium with a React frontend and ASP.NET Core API backend. Browse heroes and monsters with animated navigation, character art, and detailed game statistics.

## Installation

### Prerequisites

- .NET 10.0 SDK
- Node.js v18 or higher

### 1. Restore API dependencies

```bash
cd dnd-api
dotnet restore
```

### 2. Install UI dependencies

```bash
cd dnd-ui
npm install
```

### 3. Install test dependencies

```bash
cd dnd-ui-tests
npm install
npx playwright install chromium
```

### 4. Configure test credentials

Create a `.env` file in `dnd-ui-tests/`:

```env
BASE_URL=http://localhost:3000
DND_USERNAME=admin
DND_PASSWORD=admin
```

## Usage

### Start the API

```bash
cd dnd-api
dotnet run
```

API runs at `http://localhost:5071`. Swagger UI available at `/api/swagger` in development.

### Start the UI

```bash
cd dnd-ui
npm start
```

UI runs at `http://localhost:3000`. Navigate to `/login` and sign in with the credentials from `dnd-api/appsettings.Development.json`.

## Examples

### Projects

| Project                    | Description           | Port                    |
| -------------------------- | --------------------- | ----------------------- |
| `dnd-api`                  | ASP.NET Core REST API | `http://localhost:5071` |
| `dnd-ui`                   | React frontend        | `http://localhost:3000` |
| `dnd-ui-tests`             | Playwright e2e tests  |                         |
| `dnd-api-unittests`        | API unit tests        |                         |
| `dnd-api-integrationtests` | API integration tests |                         |

### API Endpoints

| Method | Endpoint                      | Auth | Description          |
| ------ | ----------------------------- | ---- | -------------------- |
| POST   | `/api/login`                  | No   | Authenticate         |
| GET    | `/api/hero?hero={type}`       | Yes  | Get hero information |
| GET    | `/api/hero/image?hero={type}` | Yes  | Get hero image       |
| GET    | `/api/monsters?size={size}`   | Yes  | Get monsters         |
| GET    | `/api/ping`                   | No   | Health check         |
| GET    | `/api/version`                | No   | API version          |

Hero types: `Fighter`, `Sorcerer`, `Cleric`, `Rogue`

Monster sizes: `Small`, `Medium`, `Large`

### Run tests

```bash
cd dnd-api-unittests
dotnet test

cd dnd-api-integrationtests
dotnet test

cd dnd-ui-tests
npx playwright test
npx playwright test --grep=smoke       # critical path only
npx playwright test --grep=regression  # full regression suite
```

## License

This project is for personal/educational use. No license has been applied.

## Contributors

- Dimitrios B
