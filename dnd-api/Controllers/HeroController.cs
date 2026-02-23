using Microsoft.AspNetCore.Mvc;

namespace DnD.API.Controllers;

[ApiController]
[Route("/api/hero")]
public class HeroController : ControllerBase
{
    [HttpGet]
    public IActionResult GetHeroes([FromQuery] Heroes? hero)
    {
        string fileData;

        switch (hero)
        {
            case Heroes.Cleric:
                fileData = System.IO.File.ReadAllText("Data/Cleric.json");
                break;
            case Heroes.Fighter:
                fileData = System.IO.File.ReadAllText("Data/Fighter.json");
                break;
            case Heroes.Rogue:
                fileData = System.IO.File.ReadAllText("Data/Rogue.json");
                break;
            case Heroes.Sorcerer:
                fileData = System.IO.File.ReadAllText("Data/Sorcerer.json");
                break;
            default:
                fileData = System.IO.File.ReadAllText("Data/HeroNotFound.json");
                break;
        }

        return Content(fileData, "application/json");
    }

    [HttpGet("image")]
    public IActionResult GetHeroImage([FromQuery] Heroes? hero)
    {
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
                filePath = "Data/Images/img-hero-not-found.jpg";
                break;
        }

        var imageBytes = System.IO.File.ReadAllBytes(filePath);
        return File(imageBytes, "image/png");
    }
}