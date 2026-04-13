using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using FluentAssertions;
using Moq;
using DnD.API.Controllers;
using DnD.API.UnitTests.Helpers;
using DnD.API.Data;
using FluentAssertions.Execution;

namespace DnD.API.UnitTests.Tests;

public class HeroControllerTests
{
    private readonly HeroController _heroController;
    private readonly Mock<IWebHostEnvironment> _mockEnv;

    public HeroControllerTests()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Heroes.Add(new HeroData { Name = Heroes.Cleric.ToString(), Description = "desc" });
        db.SaveChanges();

        _mockEnv = new Mock<IWebHostEnvironment>();
        _mockEnv.Setup(ex => ex.ContentRootPath).Returns(AppContext.BaseDirectory);

        _heroController = new HeroController(db, _mockEnv.Object);
    }

    [Fact]
    public void GetHeroes_ReturnsAllHeroes()
    {
        var response = (OkObjectResult)_heroController.GetHeroes();

        var heroList = (List<HeroData>)response.Value!;

        using (new AssertionScope())
        {
            heroList.Select(h => h.Name).Should().NotBeNullOrEmpty();
            heroList.Select(h => h.Description).Should().NotBeNullOrEmpty();
        }
    }

    [Fact]
    public void GetHero_ValidHero_ReturnsCorrectHero()
    {
        var response = (OkObjectResult)_heroController.GetHero(Heroes.Cleric);
        var name = response.Value!.GetType().GetProperty("Name")!.GetValue(response.Value);

        name.Should().Be(Heroes.Cleric.ToString());
    }

    [Fact]
    public void GetHero_Null_ReturnsNotFound()
    {
        var response = (NotFoundObjectResult)_heroController.GetHero(null);

        response.Value!.ToString().Should().Be("No hero was requested");
    }

    [Fact]
    public void GetHero_HeroThatDoesNotExist_ReturnsNotFound()
    {
        var response = (NotFoundObjectResult)_heroController.GetHero(Heroes.Fighter);

        response.Value!.ToString().Should().Be("The hero Fighter is not found");
    }

    [Fact]
    public void GetHero_OutOfEnumBounds_ReturnsNotFound()
    {
        var response = (NotFoundObjectResult)_heroController.GetHero((Heroes)5);

        response.Value!.ToString().Should().Be("The hero 5 is not found");
    }

    [Fact]
    public void GetHero_EmptyDB_ReturnsNotFound()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.SaveChanges();

        var heroController = new HeroController(db, _mockEnv.Object);

        var response = (NotFoundObjectResult)heroController.GetHero(Heroes.Cleric);

        response.Value!.ToString().Should().Be("The hero Cleric is not found");
    }
}
