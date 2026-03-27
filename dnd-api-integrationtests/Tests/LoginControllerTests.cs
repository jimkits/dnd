using System.Net;
using Microsoft.AspNetCore.Mvc.Testing;
using FluentAssertions;
using System.Net.Http.Json;


namespace DnD.API.IntegrationTests.Tests;

public class LoginControllerTests : BaseTestClass
{
    public LoginControllerTests(WebApplicationFactory<Program> factory) : base(factory)
    {
    }

    [Fact]
    public async Task Login_ValidCredentials_ReturnsOk()
    {
        // Setup
        var loginRequest = new LoginRequest
        {
            Username = "admin",
            Password = "admin"
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/login", loginRequest);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("Login successful");
    }

    [Theory]
    [InlineData("admin", "wrong")]
    [InlineData("wrong", "admin")]
    public async Task Login_InvalidCredentials_ReturnsUnauthorized(string username, string password)
    {
        // Setup
        var loginRequest = new LoginRequest
        {
            Username = username,
            Password = password
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/login", loginRequest);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("Invalid username or password");
    }

    [Theory]
    [InlineData("admin", "' OR '1'='1")]
    [InlineData("' OR '1'='1", "admin")]
    [InlineData("admin'--", "anything")]
    [InlineData("' OR 1=1--", "")]
    public async Task Login_SqlInjection_ReturnsUnauthorized(string username, string password)
    {
        // Setup
        var loginRequest = new LoginRequest
        {
            Username = username,
            Password = password
        };

        // Act
        var response = await client.PostAsJsonAsync("/api/login", loginRequest);

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("Invalid username or password");
    }
}
