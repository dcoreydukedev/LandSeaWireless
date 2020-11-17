/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SignUp.Models;
using SignUp.ViewModels;

namespace SignUp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

       

        [HttpGet]
        public IActionResult SignUp()
        {
            SignUpFormViewModel vm = new SignUpFormViewModel();

            return View(vm);
        }

        [HttpPost]
        public IActionResult SignUp(SignUpFormViewModel vm)
        {
            try
            {
                return null;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
