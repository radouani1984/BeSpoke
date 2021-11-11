using System;
using System.Threading.Tasks;
using IdentityServer4.Services;
using keo.Identity.Data;
using keo.Identity.Data.Contracts;
using keo.Identity.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace BeSpoke.Identity
{
    public partial class Startup
    {
        private void ConfigureIdentity(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            var builder = services.AddIdentityServer(options =>
                {
                    options.Events.RaiseErrorEvents = true;
                    options.Events.RaiseInformationEvents = true;
                    options.Events.RaiseFailureEvents = true;
                    options.Events.RaiseSuccessEvents = true;
                    options.EmitStaticAudienceClaim = true;
                })
                .AddAspNetIdentity<ApplicationUser>()
                .AddInMemoryIdentityResources(SD.IdentityResources)
                .AddInMemoryClients(SD.Clients)
                .AddInMemoryApiScopes(SD.ApiScopes);

            builder.AddDeveloperSigningCredential();


            ConfigureDI(services, configuration);
        }

        private async Task UseServices(IApplicationBuilder app, IWebHostEnvironment env)
        {
            try
            {
                await InitializeDatabase(app);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        private void ConfigureDI(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IDbInitializer, DbInitializer>();
            services.AddSingleton<ICorsPolicyService>((container) =>
            {
                var logger = container.GetRequiredService<ILogger<DefaultCorsPolicyService>>();
                return new DefaultCorsPolicyService(logger)
                {
                    AllowedOrigins = {"https://localhost:6001"}
                };
            });
        }

        private async Task InitializeDatabase(IApplicationBuilder app)
        {
            using var scope = app.ApplicationServices.GetService<IServiceScopeFactory>()?.CreateScope();
            if (scope != null)
            {
                await scope.ServiceProvider.GetRequiredService<ApplicationDbContext>().Database.MigrateAsync();
                await scope.ServiceProvider.GetRequiredService<IDbInitializer>().Initialize();
            }
        }
    }
}