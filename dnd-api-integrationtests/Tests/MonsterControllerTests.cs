using System.Net;
using FluentAssertions;
using FluentAssertions.Execution;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.Testing;

namespace DnD.API.IntegrationTests.Tests;

public class MonsterControllerTests : BaseTestClass
{
    public MonsterControllerTests(WebApplicationFactory<Program> factory) : base(factory)
    {
    }

    [Fact]
    public async Task GetMonsters_ValidMonster_ReturnsCorrectData()
    {
        // Act
        var response = await client.GetAsync("/api/monsters?size=small");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var contentString = await response.Content.ReadAsStringAsync();

        var content = JsonSerializer.Deserialize<List<MonsterData>>(contentString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        content.Should().HaveCountGreaterThan(0);

        using (new AssertionScope())
        {
            content.First().Name.Should().NotBeNullOrEmpty();
            content.First().Stats.HitPoints.Should().NotBeNullOrEmpty();
            content.First().Attributes.Strenth.Should().NotBeNullOrEmpty();
        }
    }

    [Fact]
    public async Task GetMonsters_Null_ReturnsNotFound()
    {
        // Act
        var response = await client.GetAsync("/api/monsters");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.NotFound);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("No monsters were requested");
    }

    [Fact]
    public async Task GetMonsters_SizeThatDoesNotExist_ReturnsNotFound()
    {
        // Act
        var response = await client.GetAsync("/api/monsters?size=void");

        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

        var content = await response.Content.ReadAsStringAsync();

        content.Should().ContainEquivalentOf("The value 'void' is not valid");
    }
}
