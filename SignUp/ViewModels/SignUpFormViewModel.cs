/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using LandSeaWireless.Models.UNMS;
using LandSeaWireless.Models.Domain;
using System.ComponentModel.DataAnnotations;

namespace SignUp.ViewModels
{


    public class UserAccountViewModel : ISignupFormViewModel
    {
        public string Username { get; set; }

        public string Password { get; set; }
    }

    public class ClientTypeViewModel : ISignupFormViewModel
    {
        /// <summary>
        /// Person | Company
        /// </summary>
        public string ClientType { get; set; }
    }

    public class ContactInfoViewModel : ISignupFormViewModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }
    }

    public class CompanyContactInfoViewModel : ISignupFormViewModel
    {
        public string CompanyName { get; set; }

        public ContactInfoViewModel ContactInfo { get; set; }
    }

    public class InstallationAddressViewModel : ISignupFormViewModel
    {
        public Address InstallAddress { get; set; }
    }

    public class ServicePlanViewModel : ISignupFormViewModel
    {
        public int Id { get; set; }
        public string ServicePlanType { get; set; }
        public string Name { get; set; }
        public double DownloadSpeed { get; set; }
        public double UploadSpeed { get; set; }
        public string Price { get; set; }
        public string Details { get; set; }

    }

    public class CustomerHasRouterViewModel : ISignupFormViewModel
    {
        public bool CustomerHasRouter { get; set; }
    }

    public class RouterOptionViewModel : ISignupFormViewModel
    {
        /// <summary>
        /// Buy | Lease
        /// </summary>
        public string RouterOption { get; set; }
    }

    public class AntennaOptionViewModel : ISignupFormViewModel
    {
        /// <summary>
        /// Buy | Lease
        /// </summary>
        public string Option { get; set; }
        public string Product { get; set; }
        public string Price { get; set; }
    }

    public class ProfessionalInstallationViewModel : ISignupFormViewModel
    {
        public bool ProfessionalInstallation { get; set; }
    }

    public class BillingInfoViewModel : ISignupFormViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address BillingAddress { get; set; }
        public string CCN { get; set; }
        public string CCV { get; set; }
        public string CCE { get; set; }
    }

    public class SignUpFormViewModel : IViewModel
    {
       
        public UserAccountViewModel UserAccount { get; set; }
        public ClientTypeViewModel ClientType { get; set; }
        public ContactInfoViewModel ContactInfo { get; set; }
        public CompanyContactInfoViewModel CompanyContactInfo { get; set; }
        public InstallationAddressViewModel installationAddress { get; set; }
        public ServicePlanViewModel ServicePlan { get; set; }
        public CustomerHasRouterViewModel CustomerHasRouter { get; set; }
        public RouterOptionViewModel RouterOption { get; set; }
        public AntennaOptionViewModel AntenaOption { get; set; }
        public ProfessionalInstallationViewModel ProfessionalInstallation { get; set; }
        public BillingInfoViewModel BillingInformation { get; set; }
    }

  
}
