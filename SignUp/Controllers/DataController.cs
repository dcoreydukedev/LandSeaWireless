/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SignUp.Models;
using System;
using System.Threading.Tasks;
using SignUp.Models.UNMS;
using SignUp.Models.Domain;
using SignUp.Services;
using System.Collections.Generic;

namespace SignUp.Controllers
{
    /// <summary>
    /// Controller to handle json data between client and server
    /// </summary>
    [ApiController]
    [Route("Data")]
    public class DataController : Controller
    {
        private UNMSDataService _dataService = new UNMSDataService();

        private readonly ILogger<DataController> _logger;

        /// <summary>
        /// Logger
        /// </summary>
        /// <param name="logger"></param>
        public DataController(ILogger<DataController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/ServicePlans")]
        public async Task<ActionResult<IEnumerable<ServicePlanDTO>>> ServicePlans()
        {
            UNMSDataService svc = new UNMSDataService();
            List<ServicePlanDTO> ret = new List<ServicePlanDTO>();
            try
            {
                List<ServicePlan> spl = await svc.GetServicePlans();
                foreach (ServicePlan sp in spl)
                {
                    ServicePlanDTO servicePlanDTO = new ServicePlanDTO();
                    servicePlanDTO.Id = sp.Id;
                    servicePlanDTO.ServicePlanType = sp.ServicePlanType;
                    servicePlanDTO.Name = sp.Name;
                    servicePlanDTO.DownloadSpeed = sp.DownloadSpeed;
                    servicePlanDTO.UploadSpeed = sp.UploadSpeed;
                    servicePlanDTO.PricePerMonth = (double)sp.Periods[0].Price;
                }
                return ret;
            }
            catch(Exception ex)
            {
                throw ex;
            }
           
        }

        [HttpGet]
        [Route("/Products")]
        public async Task<IActionResult> Products()
        {
            UNMSDataService svc = new UNMSDataService();
            List<Product> ret = new List<Product>();
            try
            {
                List<Product> pl = await svc.GetProducts();
                return Ok(ret);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }


        /// <summary>
        /// Accept Data from the client app, process, call service to send post and return response, return response to client
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("/CreateClient")]
        public async Task<JsonResult> CreateClient([FromBody] CreateClientWizardData data)
        {
            var addr = new Address(data.Address, string.Empty, string.Empty, data.City, data.State, data.Zip);
            ClientPost clientToPost = ConfigClientPost(data.ClientType, data.FirstName, data.LastName, data.CompanyName, addr, data.Email, data.Phone, data.Notes, data.PrevIsp);
            ClientPostResponseData cprd = await _dataService.PostClientLead(clientToPost);

            return Json(cprd.createSuccess == true ? ResponseData.Message = "success" : ResponseData.Message = "failure");

        }



        private ClientPost ConfigClientPost(string ClientType, string FirstName, string LastName, string CompanyName, Address address, string Email, string Phone, string Notes, string PrevIsp)
        {
            ClientPost client = new ClientPost();
            if (ClientType == "person")
            {
                client.ClientType = Models.UNMS.ClientType.Residential;
            }
            else if (ClientType == "company")
            {
                client.ClientType = Models.UNMS.ClientType.Company;
            }
            client.UserIdent = FirstName[0] + LastName[0] + DateTime.Now.Ticks.ToString();
            client.PreviousIsp = PrevIsp;
            client.IsLead = true; //Set Lead to True for Now
            client.CompanyName = !string.IsNullOrEmpty(CompanyName) ? CompanyName : string.Empty;
            client.CompanyContactFirstName = !string.IsNullOrEmpty(CompanyName) ? FirstName : string.Empty;
            client.CompanyContactLastName = !string.IsNullOrEmpty(CompanyName) ? LastName : string.Empty;
            client.FirstName = FirstName;
            client.LastName = LastName;
            client.Street1 = address.Address1;
            client.City = address.City;
            client.StateId = (int)address.State;
            client.CountryId = 249; //US is 249 in UNMS API
            client.ZipCode = address.Zip;
            // Set Billing Address = Contact Address
            client.InvoiceStreet1 = address.Address1;
            client.InvoiceCity = address.City;
            client.InvoiceStateId = (int)address.State;
            client.InvoiceCountryId = 249; //US is 249 in UNMS API
            client.InvoiceZipCode = address.Zip;
            client.InvoiceAddressSameAsContact = true;
            client.Note = Notes;
            client.OrganizationId = 1;
            // Date string in ISO 8601
            client.RegistrationDate = DateTime.UtcNow.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz");
            client.Username = Email; //Set Username to email address
            client.GenerateProformaInvoices = true;
            return client;
        }






    }
}
