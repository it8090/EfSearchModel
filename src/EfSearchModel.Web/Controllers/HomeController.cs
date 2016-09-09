using System.Linq;
using System.Web.Mvc;
using EfSearchModel.Model;
using EfSearchModel.Web.Entities;

namespace EfSearchModel.Web.Controllers {
    public class HomeController : Controller {
        public ActionResult Index(QueryModel conditions) {
            using (var db = new BlogEntities()) {

                var query = db.Users.Where(conditions);
                var list = query.ToList();

                return View(list);
            }
        }

        public ActionResult About() {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}