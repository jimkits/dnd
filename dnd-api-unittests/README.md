# D&D API Unit Tests

Unit tests for the D&D API controllers, covering login, hero, and monster endpoints.

## Tech Stack

- .NET 10.0 / xUnit
- FluentAssertions
- Moq — mocks `IWebHostEnvironment` for controller instantiation
- SQLite in-memory database via `DbHelper` — each test gets an isolated, fresh DB

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

## Examples

### Test Structure

```
Helpers/
Tests/
```

### DbHelper

`DbHelper.CreateInMemoryDb()` opens an in-memory SQLite connection and calls `EnsureCreated()` to set up the schema. Each test creates its own instance so tests are fully isolated.

## License

This project is for personal/educational use. No license has been applied.

## Contributors

- Dimitrios B
