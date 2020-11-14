/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using SignUp.Models.API;
using DCoreyDuke.CodeBase.Objects.General;
using System.ComponentModel.DataAnnotations;

namespace SignUp.ViewModels
{
    public class SignUpFormViewModel : IViewModel
    {
        public string ClientType { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public Address InstallAddress { get; set; }

        public Address BillingAddress { get; set; }

        public ServicePlanViewModel ServicePlan { get; set; }

        public string Installation { get; set; }

        public HardwareRequirementViewModel HardwareRequirement { get; set; }

        public CreditCardInfoViewModel CreditCardInfo { get; set; }

    }


    public class ServicePlanViewModel : IViewModel
    {
        public string Plan { get; set; }
        public string Price { get; set; }
        public string Details { get; set; }

    }

    public class HardwareRequirementViewModel : IViewModel
    {
        public string Produc { get; set; }
        public string Option { get; set; }
    }

    public class CreditCardInfoViewModel : IViewModel
    {
        public string CCN { get; set; }
        public string CCV { get; set; }
        public string CCE { get; set; }
    }
}
