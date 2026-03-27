using Microsoft.EntityFrameworkCore;

namespace DnD.API.Data;

public class DndDbContext : DbContext
{
    public DndDbContext(DbContextOptions<DndDbContext> options) : base(options) { }

    public DbSet<AppUser> Users => Set<AppUser>();
    public DbSet<HeroData> Heroes => Set<HeroData>();
    public DbSet<MonsterData> Monsters => Set<MonsterData>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MonsterData>()
            .HasOne(m => m.Stats)
            .WithMany()
            .HasForeignKey(m => m.StatsId);

        modelBuilder.Entity<MonsterData>()
            .HasOne(m => m.Attributes)
            .WithMany()
            .HasForeignKey(m => m.AttributesId);
    }
}
