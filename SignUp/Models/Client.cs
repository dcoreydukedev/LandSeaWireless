/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using SignUp.Models.Domain;
using SignUp.Models.UNMS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignUp.Models
{
    /// <summary>
    /// Data Returned in the response from posting a Client
    /// </summary>
    public class ClientPostResponseData
    {
        public IClient client { get; set; }
        public bool createSuccess { get; set; }
        public string errorMsg { get; set; }
        public Dictionary<string, string> data { get; set; }
    }

    /// <summary>
    /// Data sent from the client app (the state)
    /// </summary>
    public class CreateClientWizardData
    {
        public string ClientType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public State State { get; set; }
        public string Zip { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Notes { get; set; }
        public string PrevIsp { get; set; }
    }
}
