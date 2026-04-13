using Microsoft.AspNetCore.Mvc;
using DnD.API.Controllers;
using DnD.API.UnitTests.Helpers;
using DnD.API.Data;
using FluentAssertions;
using FluentAssertions.Execution;
using System.Text.Json;

namespace DnD.API.UnitTests.Tests;

public class MonsterControllerTests
{
    private readonly MonsterController _monsterController;

    public MonsterControllerTests()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Monsters.AddRange(
            new MonsterData { Name = "Goblin", Type = "Humanoid", Size = "Small", Description = "Small Humanoid, Neutral Evil", Stats = new Stats { ArmorClass = "15", HitPoints = "7", Speed = "30 ft." }, Attributes = new Attributes { Strenth = "8 (-1)", Dexterity = "14 (+2)", Constitution = "10 (+0)", Intelligence = "10 (+0)", Wisdom = "8 (-1)", Charisma = "8 (-1)" } },
            new MonsterData { Name = "Baboon", Type = "Beast", Size = "Small", Description = "Small Beast, Unaligned", Stats = new Stats { ArmorClass = "12", HitPoints = "3", Speed = "30 ft." }, Attributes = new Attributes { Strenth = "8 (-1)", Dexterity = "14 (+2)", Constitution = "11 (+0)", Intelligence = "4 (-3)", Wisdom = "12 (+1)", Charisma = "6 (-2)" } },
            new MonsterData { Name = "Bandit", Type = "Humanoid", Size = "Medium", Description = "Medium Humanoid, Non-Lawful", Stats = new Stats { ArmorClass = "12", HitPoints = "11", Speed = "30 ft." }, Attributes = new Attributes { Strenth = "11 (+0)", Dexterity = "12 (+1)", Constitution = "12 (+1)", Intelligence = "10 (+0)", Wisdom = "10 (+0)", Charisma = "10 (+0)" } },
            new MonsterData { Name = "Banshee", Type = "Undead", Size = "Medium", Description = "Medium Undead, Chaotic Evil", Stats = new Stats { ArmorClass = "12", HitPoints = "58", Speed = "0 ft." }, Attributes = new Attributes { Strenth = "1 (-5)", Dexterity = "14 (+2)", Constitution = "10 (+0)", Intelligence = "12 (+1)", Wisdom = "11 (+0)", Charisma = "17 (+3)" } },
            new MonsterData { Name = "Chimera", Type = "Monstrosity", Size = "Large", Description = "Large Monstrosity, Chaotic Evil", Stats = new Stats { ArmorClass = "14", HitPoints = "114", Speed = "30 ft." }, Attributes = new Attributes { Strenth = "19 (+4)", Dexterity = "11 (+0)", Constitution = "19 (+4)", Intelligence = "3 (-4)", Wisdom = "14 (+2)", Charisma = "10 (+0)" } },
            new MonsterData { Name = "Clay Golem", Type = "Construct", Size = "Large", Description = "Large Construct, Unaligned", Stats = new Stats { ArmorClass = "14", HitPoints = "133", Speed = "20 ft." }, Attributes = new Attributes { Strenth = "20 (+5)", Dexterity = "9 (-1)", Constitution = "18 (+4)", Intelligence = "3 (-4)", Wisdom = "8 (-1)", Charisma = "1 (-5)" } }
        );
        db.SaveChanges();

        _monsterController = new MonsterController(db);
    }

    [Fact]
    public void GetAllMonsters_ReturnsCorrectData()
    {
        var response = (OkObjectResult)_monsterController.GetAllMonsters();

        var responseJson = JsonSerializer.Serialize(response.Value);
        var monsters = JsonSerializer.Deserialize<List<MonsterData>>(responseJson,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        using (new AssertionScope())
        {
            monsters.Should().HaveCount(6);
            monsters.Select(x => x.Name).ToList().Should().NotBeNullOrEmpty();
            monsters.Select(x => x.Stats.ArmorClass).ToList().Should().NotBeNullOrEmpty();
            monsters.Select(x => x.Attributes.Charisma).ToList().Should().NotBeNullOrEmpty();
        }
    }

    [Theory]
    [InlineData(MonsterSize.Small, 2, new string[] { "Goblin", "Baboon" })]
    [InlineData(MonsterSize.Medium, 2, new string[] { "Bandit", "Banshee" })]
    [InlineData(MonsterSize.Large, 2, new string[] { "Chimera", "Clay Golem" })]
    public void GetMonsters_ValidSize_ReturnsCorrectData(MonsterSize size, int expectedCount, string[] monsterNames)
    {
        var response = (OkObjectResult)_monsterController.GetMonsters(size);

        var responseJson = JsonSerializer.Serialize(response.Value);
        var monsters = JsonSerializer.Deserialize<List<MonsterData>>(responseJson,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        using (new AssertionScope())
        {
            monsters.Should().HaveCount(expectedCount);
            monsters.Should().OnlyContain(x => x.Size == size.ToString());
            monsters.Select(x => x.Name).ToList().Should().Contain(monsterNames.ToList());
            monsters.Select(x => x.Stats.ArmorClass).ToList().Should().NotBeNullOrEmpty();
            monsters.Select(x => x.Attributes.Charisma).ToList().Should().NotBeNullOrEmpty();
        }
    }

    [Fact]
    public void GetMonsters_Null_ReturnsNotFound()
    {
        var response = (NotFoundObjectResult)_monsterController.GetMonsters(null);

        response.Value!.ToString().Should().Be("No monsters were requested");
    }

    [Fact]
    public void GetMonsters_SizeThatDoesNotExist_ReturnsNotFound()
    {
        var response = (NotFoundObjectResult)_monsterController.GetMonsters((MonsterSize)99);

        response.Value!.ToString().Should().Be("The monsters of size 99 were not found");
    }

    [Fact]
    public void GetMonsters_EmptyDB_ReturnsNotFound()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.SaveChanges();

        var controller = new MonsterController(db);
        var response = (NotFoundObjectResult)controller.GetMonsters(MonsterSize.Small);

        response.Value!.ToString().Should().Be("The monsters of size Small were not found");
    }
}
