using System.Text.Json;

public class TestSettings
{
    public bool Selfhosted { get; set; }
    public string Url { get; set; } = string.Empty;

    public static TestSettings Load()
    {
        var json = File.ReadAllText("testsettings.json");

        return JsonSerializer.Deserialize<TestSettings>(json,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true })!;
    }
}