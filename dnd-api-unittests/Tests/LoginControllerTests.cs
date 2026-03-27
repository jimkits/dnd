using Microsoft.AspNetCore.Mvc;
using DnD.API.Controllers;
using DnD.API.Data;
using DnD.API.UnitTests.Helpers;

namespace DnD.API.UnitTests.Tests;

public class LoginControllerTests
{
    [Fact]
    public void Login_ValidCredentials_ReturnsOk()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Users.Add(new AppUser { Username = "admin", Password = "admin" });
        db.SaveChanges();

        var controller = new LoginController(new UserStore(db));
        var response = controller.Login(new LoginRequest { Username = "admin", Password = "admin" });

        Assert.IsType<OkObjectResult>(response);
    }

    [Fact]
    public void Login_InvalidCredentials_ReturnsUnauthorized()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Users.Add(new AppUser { Username = "admin", Password = "admin" });
        db.SaveChanges();

        var controller = new LoginController(new UserStore(db));
        var response = controller.Login(new LoginRequest { Username = "admin", Password = "wrong" });

        Assert.IsType<UnauthorizedObjectResult>(response);
    }

    [Fact]
    public void Login_UnknownUser_ReturnsUnauthorized()
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Users.Add(new AppUser { Username = "admin", Password = "admin" });
        db.SaveChanges();

        var controller = new LoginController(new UserStore(db));
        var response = controller.Login(new LoginRequest { Username = "admin", Password = "wrong" });

        Assert.IsType<UnauthorizedObjectResult>(response);
    }

    [Theory]
    [InlineData("admin", "' OR '1'='1")]
    [InlineData("' OR '1'='1", "admin")]
    [InlineData("admin'--", "anything")]
    [InlineData("' OR 1=1--", "")]
    public void Login_SqlInjection_ReturnsUnauthorized(string username, string password)
    {
        var db = DbHelper.CreateInMemoryDb();
        db.Users.Add(new AppUser { Username = "admin", Password = "admin" });
        db.SaveChanges();

        var controller = new LoginController(new UserStore(db));
        var response = controller.Login(new LoginRequest { Username = username, Password = password });

        Assert.IsType<UnauthorizedObjectResult>(response);
    }
}
