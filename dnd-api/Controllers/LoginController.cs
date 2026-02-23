using Microsoft.AspNetCore.Mvc;
using DnD.API.Data;

namespace DnD.API.Controllers;

[ApiController]
[Route("/api/login")]
public class LoginController : ControllerBase
{
    private readonly UserStore userStore;

    public LoginController(IConfiguration configuration)
    {
        userStore = new UserStore(configuration);
    }

    [HttpPost]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        if (userStore.IsValidUser(request.Username, request.Password))
        {
            return Ok(new { message = "Login successful" });
        }

        return Unauthorized(new { message = "Invalid username or password" });
    }
}

