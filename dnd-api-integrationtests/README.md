# D&D API Integration Tests

Integration tests for the D&D API, covering all endpoints.

## Tech Stack

- .NET 10.0 / xUnit
- FluentAssertions
- `Microsoft.AspNetCore.Mvc.Testing` — spins up the API in-process for self-hosted mode

## Installation

Restore dependencies:

```bash
dotnet restore
```

## Usage

Run all tests:

```bash
dotnet test
```

Configure test behaviour via `testsettings.json` before running:

| Property     | Description                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------- |
| `selfhosted` | `true` — spins up the API in-process via `WebApplicationFactory`. `false` — points to the URL below |
| `url`        | Base URL used when `selfhosted` is `false`                                                          |

## Examples

### Test Structure

```
Settings/
Tests/
```

## License

This project is for personal/educational use. No license has been applied.

## Contributors

- Dimitrios B
