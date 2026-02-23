namespace DnD.API.Data;

public class UserStore
{
    public UserCredentials[] Users { get; }

    public UserStore(IConfiguration config)
    {
        var usersSection = config.GetSection("Users");

        Users = usersSection.GetChildren()
            .Select(section => new UserCredentials
            {
                Username = section["Username"] ?? string.Empty,
                Password = section["Password"] ?? string.Empty
            })
            .ToArray();
    }

    public bool IsValidUser(string username, string password)
    {
        return Users.Any(u => u.Username == username && u.Password == password);
    }
}