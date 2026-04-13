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

    [HttpGet("all")]
    public IActionResult GetHeroes()
    {
        var heroData = _db.Heroes.ToList();

        if (!heroData.Any())
            return NotFound("No heroes were found");

        var result = heroData.Select(h => ToResponse(h)).ToList();

        return Ok(result);
    }

    [HttpGet]
    public IActionResult GetHero([FromQuery] Heroes? hero)
    {
        if (hero == null)
            return NotFound("No hero was requested");

        var heroData = _db.Heroes.FirstOrDefault(h => h.Name == hero.ToString());

        if (heroData == null)
            return NotFound($"The hero {hero} is not found");

        return Ok(ToResponse(heroData));
    }

    private HeroData ToResponse(HeroData h)
    {
        var image = string.Empty;
        if (!string.IsNullOrEmpty(h.Image))
        {
            var fileLocation = Path.Combine(_env.ContentRootPath, "Data/Images/");
            var fullPath = Path.Combine(fileLocation, h.Image);

            if (System.IO.File.Exists(fullPath))
                image = Convert.ToBase64String(System.IO.File.ReadAllBytes(fullPath));
        }
        return new HeroData { Id = h.Id, Name = h.Name, Description = h.Description, Image = image };
    }
}
