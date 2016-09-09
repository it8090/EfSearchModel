using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using EfSearchModel.Binders;
using EfSearchModel.Model;

namespace EfSearchModel.Web {
    public class MvcApplication : System.Web.HttpApplication {
        protected void Application_Start() {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            AppDomain.CurrentDomain.SetData("SQLServerCompactEditionUnderWebHosting", true);

            ModelBinders.Binders.Add(typeof(QueryModel), new SearchModelBinder());
        }
    }
}
