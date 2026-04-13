using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using DnD.API.Data;

namespace DnD.API.Controllers;

[ApiController]
[Route("/api/monsters")]
[Authorize]
public class MonsterController : ControllerBase
{
    private readonly DndDbContext _db;

    public MonsterController(DndDbContext db)
    {
        _db = db;
    }

    [HttpGet("all")]
    public IActionResult GetAllMonsters()
    {
        var monstersData = _db.Monsters
            .Include(m => m.Stats)
            .Include(m => m.Attributes)
            .ToList();

        if (!monstersData.Any())
        {
            return NotFound($"No monsters were not found");
        }

        var result = monstersData.Select(m => new MonsterData
        {
            Name = m.Name,
            Type = m.Type,
            Size = m.Size,
            Description = m.Description,
            Stats = new Stats
            {
                ArmorClass = m.Stats.ArmorClass,
                HitPoints = m.Stats.HitPoints,
                Speed = m.Stats.Speed
            },
            Attributes = new Attributes
            {
                Strenth = m.Attributes.Strenth,
                Dexterity = m.Attributes.Dexterity,
                Constitution = m.Attributes.Constitution,
                Intelligence = m.Attributes.Intelligence,
                Wisdom = m.Attributes.Wisdom,
                Charisma = m.Attributes.Charisma
            }
        }).ToList();

        return Ok(result);
    }

    [HttpGet]
    public IActionResult GetMonsters([FromQuery] MonsterSize? size)
    {
        if (size == null)
        {
            return NotFound($"No monsters were requested");
        }

        var monstersData = _db.Monsters
            .Include(m => m.Stats)
            .Include(m => m.Attributes)
            .Where(m => m.Size == size.ToString())
            .ToList();

        if (!monstersData.Any())
        {
            return NotFound($"The monsters of size {size} were not found");
        }

        var result = monstersData.Select(m => new MonsterData
        {
            Name = m.Name,
            Type = m.Type,
            Size = m.Size,
            Description = m.Description,
            Stats = new Stats
            {
                ArmorClass = m.Stats.ArmorClass,
                HitPoints = m.Stats.HitPoints,
                Speed = m.Stats.Speed
            },
            Attributes = new Attributes
            {
                Strenth = m.Attributes.Strenth,
                Dexterity = m.Attributes.Dexterity,
                Constitution = m.Attributes.Constitution,
                Intelligence = m.Attributes.Intelligence,
                Wisdom = m.Attributes.Wisdom,
                Charisma = m.Attributes.Charisma
            }
        }).ToList();

        return Ok(result);
    }
}