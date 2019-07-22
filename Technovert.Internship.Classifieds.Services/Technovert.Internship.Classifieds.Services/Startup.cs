using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Technovert.Internship.Classifieds.Services.IServices;
using Technovert.Internship.Classifieds.Services.Services;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Authentication.OAuth.Claims;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;

namespace Technovert.Internship.Classifieds.Services
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });


            //string ConnectionString=Configuration["ConnectionString"];
            //services.AddTransient<IDbConnection>((sp) => new SqlConnection(ConnectionString));
            services.AddSingleton<IUserServices, UserServices>();
            services.AddSingleton<IAdServices, AdServices>();
            services.AddSingleton<IImagesServices, ImagesServices>();
            services.AddSingleton<ICategoryServices, CategoryServices>();
            services.AddSingleton<IAttributeServices, AttributeServices>();
            services.AddSingleton<IOfferServices, OfferServices>();
            services.AddSingleton<IChatServices, ChatServices>();
            services.AddSingleton<IReportServices, ReportServices>();



            //services.AddAuthentication().AddMicrosoftAccount(microsoftOptions =>
            //{
            //    microsoftOptions.ClientId = "94c38845 - 7e29 - 4bc5 - 9d8e-f53b0ce2ff7f";
            //    microsoftOptions.ClientSecret = "U0jyrBs0FzH6tbQtV9*DtReTCMF]y*k_";
            //});


            //services.Configure<CookiePolicyOptions>(options =>
            //{
            //    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
            //    options.CheckConsentNeeded = context => true;
            //    options.MinimumSameSitePolicy = SameSiteMode.None;
            //});

            //services.AddAuthentication(AzureADDefaults.AuthenticationScheme)
            //    .AddAzureAD(options => Configuration.Bind("AzureAd", options));

            //services.Configure<OpenIdConnectOptions>(AzureADDefaults.OpenIdScheme, options =>
            //{
            //    options.Authority = options.Authority + "/v2.0/";

            //    // Per the code below, this application signs in users in any Work and School
            //    // accounts and any Microsoft Personal Accounts.
            //    // If you want to direct Azure AD to restrict the users that can sign-in, change 
            //    // the tenant value of the appsettings.json file in the following way:
            //    // - only Work and School accounts => 'organizations'
            //    // - only Microsoft Personal accounts => 'consumers'
            //    // - Work and School and Personal accounts => 'common'

            //    // If you want to restrict the users that can sign-in to only one tenant
            //    // set the tenant value in the appsettings.json file to the tenant ID of this
            //    // organization, and set ValidateIssuer below to true.

            //    // If you want to restrict the users that can sign-in to several organizations
            //    // Set the tenant value in the appsettings.json file to 'organizations', set
            //    // ValidateIssuer, above to 'true', and add the issuers you want to accept to the
            //    // options.TokenValidationParameters.ValidIssuers collection
            //    options.TokenValidationParameters.ValidateIssuer = false;
            //});

            //services.AddMvc(options =>
            //{
            //    var policy = new AuthorizationPolicyBuilder()
            //        .RequireAuthenticatedUser()
            //        .Build();
            //    options.Filters.Add(new AuthorizeFilter(policy));
            //})
            //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();
            //app.UseAuthentication();
            app.UseMvc();
        }
    }
}
