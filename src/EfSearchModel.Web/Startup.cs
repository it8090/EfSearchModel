using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EfSearchModel.Web.Startup))]
namespace EfSearchModel.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
