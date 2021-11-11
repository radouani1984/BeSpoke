using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using keo.Identity.Data.Contracts;
using keo.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace keo.Identity.Data
{
    public class DbInitializer : IDbInitializer
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public DbInitializer(ApplicationDbContext dbContext, 
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _db = dbContext;
        }
        
        public async Task Initialize()
        {
            var exist = await _roleManager.FindByIdAsync(SD.Admin);
            if (exist != null) return;

            await _roleManager.CreateAsync(new IdentityRole() {Name = SD.Admin});
            await _roleManager.CreateAsync(new IdentityRole() {Name = SD.Customer});

            var adminUser = SD.TestUsers.First();
            var customerUser = SD.TestUsers.Skip(1).Take(1).First();
            
            //create adminUser
            var response = await _userManager.CreateAsync(adminUser, "Secret123..");
            
            if (response.Succeeded)
            {
                await _userManager.AddToRoleAsync(adminUser, SD.Admin);
                await _userManager.AddClaimsAsync(adminUser, new List<Claim>()
                {
                    new Claim(JwtClaimTypes.Name, $"{adminUser.FirstName} {adminUser.LastName}"),
                    new Claim(JwtClaimTypes.Email, adminUser.Email),
                    new Claim(JwtClaimTypes.FamilyName, adminUser.LastName),
                    new Claim(JwtClaimTypes.GivenName, adminUser.FirstName),
                    new Claim(JwtClaimTypes.Role, SD.Admin),
                });

            }
            //create customerUser

            response = await _userManager.CreateAsync(customerUser, "Secret123..");
            if (response.Succeeded)
            {
                await _userManager.AddToRoleAsync(customerUser, SD.Customer);
                await _userManager.AddClaimsAsync(customerUser, new List<Claim>()
                {
                    new Claim(JwtClaimTypes.Name, $"{customerUser.FirstName} {customerUser.LastName}"),
                    new Claim(JwtClaimTypes.Email, customerUser.Email),
                    new Claim(JwtClaimTypes.FamilyName, customerUser.LastName),
                    new Claim(JwtClaimTypes.GivenName, customerUser.FirstName),
                    new Claim(JwtClaimTypes.Role, SD.Customer),
                });
            }

        }
    }
}