using System.Collections.Generic;

using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using keo.Identity.Models;

namespace keo.Identity.Data
{
    public static class SD
    {
        //Roles
        public const string Admin = "Admin";
        public const string Customer = "Customer";
        
        //Resources
        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>()
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email()
            };

        //Scopes
        public static IEnumerable<ApiScope> ApiScopes = new List<ApiScope>()
        {
            new ApiScope() {Description = "Get Operation", Name = "Api.Get"},
            new ApiScope() {Description = "Update Operation", Name = "Api.Put"},
            new ApiScope() {Description = "Create Operation", Name = "Api.Post"},
            new ApiScope() {Description = "Delete Operation", Name = "Api.Delete"},
            new ApiScope() {Description = "Patch Operation", Name = "Api.Patch"},
        };

        //Demo Clients
        public static IEnumerable<Client> Clients = new List<Client>()
        {
            new Client
            {
                ClientId = "weather.api",
                ClientSecrets = {new Secret("secret".ToSha256())},
                AllowedScopes = new List<string>()
                {
                    "Api.Get", "Api.Post","Api.Delete","Api.Put"
                },
               AllowedGrantTypes = GrantTypes.ClientCredentials
            },
            new Client
            {
                ClientId = "spa",
                ClientSecrets = {new Secret("secret".ToSha256())},
                AllowedScopes = new List<string>()
                {
                    "Api.Get", 
                    "Api.Post",
                    "Api.Delete",
                    "Api.Put", 
                    IdentityServerConstants.StandardScopes.OpenId, 
                    IdentityServerConstants.StandardScopes.Profile,
                    IdentityServerConstants.StandardScopes.Email
                },
                AllowedGrantTypes = GrantTypes.Implicit,
                RedirectUris = {"https://localhost:6001/index.html"},
                PostLogoutRedirectUris = {"https://localhost:6001/signout-callback-oidc"},
                AllowAccessTokensViaBrowser = true
            },
        };

        public static IEnumerable<ApplicationUser> TestUsers = new List<ApplicationUser>()
        {
            new ApplicationUser()
            {
                FirstName = "RIADH",
                LastName = "ADOUANI",
                Email = "adouani.riadh@gmail.com",
                UserName = "adouani.riadh@gmail.com",
                EmailConfirmed = true,
            },
            new ApplicationUser()
            {
                FirstName = "Ines",
                LastName = "ADOUANI",
                Email = "adouani.ines@gmail.com",
                UserName = "adouani.ines@gmail.com",
                EmailConfirmed = true,
            }
        };
    }
}