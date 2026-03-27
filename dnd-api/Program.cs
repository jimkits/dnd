using System.Reflection;
using Microsoft.EntityFrameworkCore;
using DnD.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers()
    .AddJsonOptions(o => o.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter()));
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(o => o.UseInlineDefinitionsForEnums());
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddDbContext<DndDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddScoped<UserStore>();

var app = builder.Build();

// Create the database and seed initial data
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<DndDbContext>();
    await db.Database.MigrateAsync();
}

app.UseCors();
app.UseHttpsRedirection();
app.MapControllers();

app.MapGet("/api/ping", () => "pong");

app.MapGet("/api/version", () => Assembly.GetExecutingAssembly()
            .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?
            .InformationalVersion);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(s =>
    {
        s.RouteTemplate = "api/swagger/{documentname}/swagger.json";
    });
    app.UseSwaggerUI(s =>
    {
        s.SwaggerEndpoint("/api/swagger/v1/swagger.json", "DnD Swagger");
        s.RoutePrefix = "api/swagger";
    });
}

app.Run();
