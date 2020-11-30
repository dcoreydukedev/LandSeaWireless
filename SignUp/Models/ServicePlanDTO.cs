/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

namespace SignUp.Models
{
    public class ServicePlanDTO
    {
        public int Id { get; set; }
        public string ServicePlanType { get; set; }
        public string Name { get; set; }
        public double DownloadSpeed { get; set; }
        public double UploadSpeed { get; set; }
        public double PricePerMonth { get; set; }
    }
}
