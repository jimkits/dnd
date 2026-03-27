using System.Net;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Text.Json;
using FluentAssertions;
using FluentAssertions.Execution;
using DnD.API.Data;

namespace DnD.API.IntegrationTests.Tests;

public class HeroControllerTests : BaseTestClass
{
    public HeroControllerTests(WebApplicationFactory<Program> factory) : base(factory) { }

    [Fact]
    public async Task GetHeroes_ValidHero_ReturnsCorrectHero()
    {
        // Act
        var response = await client.GetAsync("/api/hero?hero=cleric");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var contentString = await response.Content.ReadAsStringAsync();

        var content = JsonSerializer.Deserialize<HeroData>(contentString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        using (new AssertionScope())
        {
            content!.Name.Should().BeEquivalentTo("cleric");
            content.Description.Should().NotBeNullOrEmpty();
        }
    }

    [Fact]
    public async Task GetHeroes_Null_ReturnsNotFound()
    {
        // Act
        var response = await client.GetAsync("/api/hero");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().Contain("No hero was requested");
    }

    [Fact]
    public async Task GetHeroes_HeroThatDoesNotExist_ReturnsBadRequest()
    {
        // Act
        var response = await client.GetAsync("/api/hero?hero=void");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("The value 'void' is not valid");
    }

    [Fact]
    public async Task GetHeroImage_ValidHero_ReturnsCorrectHero()
    {
        // Act
        var response = await client.GetAsync("/api/hero/image?hero=cleric");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().NotBeNullOrEmpty();
    }

    [Fact]
    public async Task GetHeroImage_OutOfEnumBounds_ReturnsNotFound()
    {
        // Act
        var response = await client.GetAsync("/api/hero/image?hero=void");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("The value 'void' is not valid");
    }

    [Fact]
    public async Task GetHeroImage_Null_ReturnsNotFound()
    {
        // Act
        var response = await client.GetAsync("/api/hero/image");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().BeEquivalentTo("No hero was requested");
    }
}
