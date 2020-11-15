/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using LandSeaWireless.Models.UNMS;
using System.Text.Json;

namespace LandSeaWireless.UNMSDataService
{
    public partial class UNMSDataService
    {
        private static HttpClient readClient;
        private static HttpClient writeClient;
        private readonly string ip, api, readKey, writeKey;

        public UNMSDataService()
        {
            this.ip = UCRMServer.IP;
            this.api = UCRMServer.API;
            this.readKey = UCRMServer.APIKeys.Read;
            this.writeKey = UCRMServer.APIKeys.Write;

            ConfigClients();

        }

        public UNMSDataService(string _ip, string _api, string _readkey, string _writekey)
        {

            this.ip = _ip;
            this.api = _api;
            this.readKey = _readkey;
            this.writeKey = _writekey;

            ConfigClients();
        }

        private void ConfigClients()
        {
            var handler = new HttpClientHandler();
            handler.ClientCertificateOptions = ClientCertificateOption.Manual;
            handler.ServerCertificateCustomValidationCallback =
                (httpRequestMessage, cert, cetChain, policyErrors) =>
                {
                    return true;
                };

            readClient = new HttpClient(handler);
            writeClient = new HttpClient(handler);

            readClient.DefaultRequestHeaders.Add("X-Auth-App-Key", this.readKey);
            writeClient.DefaultRequestHeaders.Add("X-Auth-App-Key", this.writeKey);
        }

        private string getUrl(string endPoint)
        {
            return (ip + api + endPoint).Trim();
        }

        /// <summary>
        /// Get A List Of Service-Plans from the API
        /// </summary>
        public async Task<List<ServicePlan>> GetServicePlans()
        {
            string endpoint = @"/service-plans";

            var streamTask = readClient.GetStreamAsync(getUrl(endpoint));

            return await JsonSerializer.DeserializeAsync<List<ServicePlan>>(await streamTask);
        }

        /// <summary>
        /// Get A List of Products from the API
        /// </summary>
        /// <returns></returns>
        public async Task<List<Product>> GetProducts()
        {
            string endpoint = @"/products";

            var streamTask = readClient.GetStreamAsync(getUrl(endpoint));

            return await JsonSerializer.DeserializeAsync<List<Product>>(await streamTask);
        }

        /// <summary>
        /// Get A List of Surcharges from the API
        /// </summary>
        /// <returns></returns>
        public async Task<List<Surcharge>> GetSurcharges()
        {
            string endpoint = @"/surcharges";

            var streamTask = readClient.GetStreamAsync(getUrl(endpoint));

            return await JsonSerializer.DeserializeAsync<List<Surcharge>>(await streamTask);
        }
    }








}
