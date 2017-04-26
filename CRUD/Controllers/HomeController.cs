using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUD.Models;
namespace CRUD.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Listar()
        {
            
            return View();
        }

        public JsonResult GetPessoas()
        {

            var db = new CadastroEntities1();
            return this.Json(db.Pessoas.ToList()
                              , JsonRequestBehavior.AllowGet
                            );
        }
    }
}