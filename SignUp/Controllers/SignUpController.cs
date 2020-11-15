/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SignUp.ViewModels;

namespace SignUp.Controllers
{
    public class SignUpController : Controller
    {
        private readonly ILogger<SignUpController> _logger;

        public SignUpController(ILogger<SignUpController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult UserAccount()
        {
            UserAccountViewModel vm = new UserAccountViewModel();

            return PartialView("~/Views/Home/Signup/_UserAccount.cshtml", vm);
        }

        [HttpGet]
        public IActionResult ClientType()
        {
            ClientTypeViewModel vm = new ClientTypeViewModel();

            return PartialView("~/Views/Home/Signup/_ClientType.cshtml", vm);
        }

        [HttpGet]
        public IActionResult ContactInfo()
        {
            ContactInfoViewModel vm = new ContactInfoViewModel();

            return PartialView("~/Views/Home/Signup/_ContactInfo.cshtml", vm);
        }

        [HttpGet]
        public IActionResult CompanyContactInfo()
        {
            CompanyContactInfoViewModel vm = new CompanyContactInfoViewModel();

            return PartialView("~/Views/Home/Signup/_CompanyContactInfo.cshtml", vm);
        }

        [HttpGet]
        public IActionResult InstallationAddress()
        {
            InstallationAddressViewModel vm = new InstallationAddressViewModel();

            return PartialView("~/Views/Home/Signup/_InstallationAddress.cshtml", vm);
        }

        [HttpGet]
        public IActionResult ServicePlan()
        {
            ServicePlanViewModel vm = new ServicePlanViewModel();

            return PartialView("~/Views/Home/Signup/_ServicePlan.cshtml", vm);
        }

        [HttpGet]
        public IActionResult CustomerHasRouter()
        {
            CustomerHasRouterViewModel vm = new CustomerHasRouterViewModel();

            return PartialView("~/Views/Home/Signup/_CustomerHasRouter.cshtml", vm);
        }

        [HttpGet]
        public IActionResult RouterOption()
        {
            RouterOptionViewModel vm = new RouterOptionViewModel();

            return PartialView("~/Views/Home/Signup/_RouterOption.cshtml", vm);
        }

        [HttpGet]
        public IActionResult AntennaOption()
        {
            AntennaOptionViewModel vm = new AntennaOptionViewModel();

            return PartialView("~/Views/Home/Signup/_AntennaOption.cshtml", vm);
        }

        [HttpGet]
        public IActionResult ProfessionalInstallation()
        {
            ProfessionalInstallationViewModel vm = new ProfessionalInstallationViewModel();

            return PartialView("~/Views/Home/Signup/_ProfessionalInstallation.cshtml", vm);
        }

        [HttpGet]
        public IActionResult BillingInfo()
        {
            BillingInfoViewModel vm = new BillingInfoViewModel();

            return PartialView("~/Views/Home/Signup/_BillingInfo.cshtml", vm);
        }
    }
}
