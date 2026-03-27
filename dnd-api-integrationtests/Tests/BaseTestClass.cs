using Microsoft.AspNetCore.Mvc.Testing;

namespace DnD.API.IntegrationTests.Tests;

public class BaseTestClass : IClassFixture<WebApplicationFactory<Program>>
{
    public HttpClient client;
    public TestSettings testSettings;

    public BaseTestClass(WebApplicationFactory<Program> factory)
    {
        testSettings = TestSettings.Load();

        if (testSettings.Selfhosted)
        {
            client = factory.CreateClient();
        }
        else
        {
            if (string.IsNullOrEmpty(testSettings.Url))
            {
                throw new Exception("The URL is not set in the testsettings file");
            }
            client = new HttpClient()
            {
                BaseAddress = new Uri(testSettings.Url)
            };
        }
    }
}