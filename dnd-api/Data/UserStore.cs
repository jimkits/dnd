namespace DnD.API.Data;

public class UserStore
{
    private readonly DndDbContext _db;

    public UserStore(DndDbContext db)
    {
        _db = db;
    }

    public bool IsValidUser(string username, string password)
    {
        return _db.Users.Any(u => u.Username == username && u.Password == password);
    }
}