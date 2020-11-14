/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using SignUp.Models.API;

namespace SignUp.Services
{
    public class APIDataService : IService
    {
        private readonly IConfiguration config;
        private static readonly HttpClient client = new HttpClient();
        private readonly string ip, api, readKey, writeKey;

        public APIDataService(IConfiguration _config)
        {
            this.config = _config;

            this.ip = config["UCRMServer:IP"].ToString().Trim();
            this.api = config["UCRMServer:API"].ToString().Trim();
            this.readKey = config["UCRMServer:APIKeys:Read"].ToString().Trim();
            this.writeKey = config["UCRMServer:APIKeys:Read"].ToString().Trim();

        }

        public async Task<List<ServicePlan>> GetServicePlans()
        {
            List<ServicePlan> _l = new List<ServicePlan>();

            return _l;
        }

    }



   

   


}
