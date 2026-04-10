using Microsoft.AspNetCore.Mvc;
using DnD.API.Data;
using DnD.API.Services;

namespace DnD.API.Controllers;

[ApiController]
[Route("/api/login")]
public class LoginController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly UserStore _userStore;

    public LoginController(IConfiguration config, UserStore userStore)
    {
        _config = config;
        _userStore = userStore;
    }

    [HttpPost]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        if (!_userStore.IsValidUser(request.Username, request.Password))
        {
            return Unauthorized(new { message = "Invalid username or password" });
        }

        var tokenService = new TokenService(_config);

        var token = tokenService.GenerateToken(request.Username);

        var result = new LoginResponse
        {
            Message = "Login successful",
            Token = token
        };

        return Ok(result);
    }
}
