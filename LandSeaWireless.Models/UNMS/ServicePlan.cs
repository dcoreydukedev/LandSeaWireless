/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{
    public interface IServicePlan
    {
        object Aggregation { get; set; }
        double AmountExemptFromTaxation { get; set; }
        object DataUsageLimit { get; set; }
        object DownloadBurst { get; set; }
        double DownloadSpeed { get; set; }
        object EarlyTerminationFee { get; set; }
        int Id { get; set; }
        object InvoiceLabel { get; set; }
        object MinimumContractLengthMonths { get; set; }
        string Name { get; set; }
        int OrganizationId { get; set; }
        List<PlanPeriod> Periods { get; set; }
        string ServicePlanType { get; set; }
        double SetupFee { get; set; }
        bool Taxable { get; set; }
        object TaxId { get; set; }
        object UploadBurst { get; set; }
        double UploadSpeed { get; set; }
    }

    public class ServicePlan : IAPIModel, IServicePlan
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("servicePlanType")]
        public string ServicePlanType { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("invoiceLabel")]
        public object InvoiceLabel { get; set; }

        [JsonPropertyName("downloadBurst")]
        public object DownloadBurst { get; set; }

        [JsonPropertyName("uploadBurst")]
        public object UploadBurst { get; set; }

        [JsonPropertyName("downloadSpeed")]
        public double DownloadSpeed { get; set; }

        [JsonPropertyName("uploadSpeed")]
        public double UploadSpeed { get; set; }

        [JsonPropertyName("aggregation")]
        public object Aggregation { get; set; }

        [JsonPropertyName("dataUsageLimit")]
        public object DataUsageLimit { get; set; }

        [JsonPropertyName("organizationId")]
        public int OrganizationId { get; set; }

        [JsonPropertyName("taxable")]
        public bool Taxable { get; set; }

        [JsonPropertyName("taxId")]
        public object TaxId { get; set; }

        [JsonPropertyName("amountExemptFromTaxation")]
        public double AmountExemptFromTaxation { get; set; }

        [JsonPropertyName("setupFee")]
        public double SetupFee { get; set; }

        [JsonPropertyName("earlyTerminationFee")]
        public object EarlyTerminationFee { get; set; }

        [JsonPropertyName("minimumContractLengthMonths")]
        public object MinimumContractLengthMonths { get; set; }

        [JsonPropertyName("periods")]
        public List<PlanPeriod> Periods { get; set; }
    }

    public class PlanPeriod
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("price")]
        public double? Price { get; set; }

        [JsonPropertyName("period")]
        public int Period { get; set; }

        [JsonPropertyName("enabled")]
        public bool Enabled { get; set; }
    }

}
