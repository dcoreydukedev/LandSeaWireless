/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using FormHelper;
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
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            SignUpFormViewModel vm = new SignUpFormViewModel();

            return View(vm);
        }

        [HttpPost]
        [FormValidator]
        public IActionResult SignUp(SignUpFormViewModel vm)
        {
            try
            {
                return FormResult.CreateSuccessResult("Acccount Created Successfully!");
            }
            catch(Exception ex)
            {
                return FormResult.CreateErrorResult(ex.Message.ToString());
            }
        }

        [HttpGet]
        public IActionResult Services()
        {
            return View();
        }


        [HttpGet]
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
