public class MonsterData
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Size { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int? StatsId { get; set; }
    public int? AttributesId { get; set; }
    public Stats Stats { get; set; } = new Stats();
    public Attributes Attributes { get; set; } = new Attributes();
}
