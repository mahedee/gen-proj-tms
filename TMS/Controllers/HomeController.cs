using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TMS.Models;
using TMS.Repository;

namespace TMS.Controllers
{
    public class HomeController : Controller
    {
        private UnitOfWork unitOfWork = new UnitOfWork();
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View("_Layout");
        }

        public IEnumerable<Training> Get()
        {
            return unitOfWork.TrainingRepository.All;
        }

    }
}
