using System;
using LandSeaWireless.Models.UNMS;
using LandSeaWireless.UNMSDataService;

namespace LandSeaWireless.UNMSDataService.Test
{
    class Program
    {
        static async System.Threading.Tasks.Task Main(string[] args)
        {
            UNMSDataService uNMSDataService = new UNMSDataService();

            foreach(ServicePlan servicePlan in await uNMSDataService.GetServicePlans())
            {
                Console.WriteLine(servicePlan.Name + "|" + servicePlan.Periods[0].Price);
            }

            Console.ReadKey();
        }
    }
}
