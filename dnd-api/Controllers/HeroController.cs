using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DnD.API.Data;

namespace DnD.API.Controllers;

[ApiController]
[Route("/api/hero")]
[Authorize]
public class HeroController : ControllerBase
{
    private readonly DndDbContext _db;
    private readonly IWebHostEnvironment _env;

    public HeroController(DndDbContext db, IWebHostEnvironment env)
    {
        _db = db;
        _env = env;
    }

    [HttpGet]
    public IActionResult GetHeroes([FromQuery] Heroes? hero)
    {
        if (hero == null)
        {
            return NotFound($"No hero was requested");
        }

        var heroData = _db.Heroes.FirstOrDefault(h => h.Name == hero.ToString());

        if (heroData == null)
        {
            return NotFound($"The hero {hero} is not found");
        }

        var result = new HeroData
        {
            Name = heroData.Name,
            Description = heroData.Description
        };

        return Ok(result);
    }

    [HttpGet("image")]
    public IActionResult GetHeroImage([FromQuery] Heroes? hero)
    {
        if (string.IsNullOrEmpty(hero.ToString()))
        {
            return NotFound($"No hero was requested");
        }

        string filePath;

        switch (hero)
        {
            case Heroes.Cleric:
                filePath = "Data/Images/img-hero-cleric.png";
                break;
            case Heroes.Fighter:
                filePath = "Data/Images/img-hero-fighter.png";
                break;
            case Heroes.Rogue:
                filePath = "Data/Images/img-rogue.png";
                break;
            case Heroes.Sorcerer:
                filePath = "Data/Images/img-sorcerer.png";
                break;
            default:
                return NotFound($"The hero {hero} is not found");
        }

        // Build an absolute path for the stored images
        var fullPath = Path.Combine(_env.ContentRootPath, filePath);
        var imageBytes = System.IO.File.ReadAllBytes(fullPath);

        return File(imageBytes, "image/png");
    }
}