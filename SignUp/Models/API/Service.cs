/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SignUp.Models.API
{
    public interface IService
    {
        DateTime ActiveFrom { get; set; }
        DateTime ActiveTo { get; set; }
        double AddressGpsLat { get; set; }
        double AddressGpsLon { get; set; }
        string City { get; set; }
        int ClientId { get; set; }
        DateTime ContractEndDate { get; set; }
        string ContractId { get; set; }
        int ContractLengthType { get; set; }
        int CountryId { get; set; }
        string CurrencyCode { get; set; }
        DateTime DiscountFrom { get; set; }
        string DiscountInvoiceLabel { get; set; }
        DateTime DiscountTo { get; set; }
        int DiscountType { get; set; }
        double DiscountValue { get; set; }
        int DownloadSpeed { get; set; }
        string FccBlockId { get; set; }
        bool HasIndividualPrice { get; set; }
        bool HasOutage { get; set; }
        int Id { get; set; }
        string InvoiceLabel { get; set; }
        int InvoicingPeriodStartDay { get; set; }
        int InvoicingPeriodType { get; set; }
        bool InvoicingProratedSeparately { get; set; }
        bool InvoicingSeparately { get; set; }
        DateTime InvoicingStart { get; set; }
        List<string> IpRanges { get; set; }
        DateTime LastInvoicedDate { get; set; }
        int MinimumContractLengthMonths { get; set; }
        string Name { get; set; }
        int NextInvoicingDayAdjustment { get; set; }
        string Note { get; set; }
        double Price { get; set; }
        bool SendEmailsAutomatically { get; set; }
        int ServicePlanId { get; set; }
        string ServicePlanName { get; set; }
        int ServicePlanPeriod { get; set; }
        int ServicePlanPeriodId { get; set; }
        int ServicePlanPrice { get; set; }
        int StateId { get; set; }
        int Status { get; set; }
        string Street1 { get; set; }
        string Street2 { get; set; }
        int Tax1Id { get; set; }
        int Tax2Id { get; set; }
        int Tax3Id { get; set; }
        double TotalPrice { get; set; }
        int UploadSpeed { get; set; }
        bool UseCreditAutomatically { get; set; }
        string ZipCode { get; set; }
    }

    public class Service : IAPIModel, IService
    {

        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("clientId")]
        public int ClientId { get; set; }

        [JsonPropertyName("status")]
        public int Status { get; set; }

        [JsonPropertyName("servicePlanId")]
        public int ServicePlanId { get; set; }

        [JsonPropertyName("servicePlanPeriodId")]
        public int ServicePlanPeriodId { get; set; }

        [JsonPropertyName("activeFrom")]
        public DateTime ActiveFrom { get; set; }

        [JsonPropertyName("activeTo")]
        public DateTime ActiveTo { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("price")]
        public double Price { get; set; }

        [JsonPropertyName("note")]
        public string Note { get; set; }

        [JsonPropertyName("invoicingStart")]
        public DateTime InvoicingStart { get; set; }

        [JsonPropertyName("invoicingPeriodType")]
        public int InvoicingPeriodType { get; set; }

        [JsonPropertyName("invoicingPeriodStartDay")]
        public int InvoicingPeriodStartDay { get; set; }

        [JsonPropertyName("nextInvoicingDayAdjustment")]
        public int NextInvoicingDayAdjustment { get; set; }

        [JsonPropertyName("invoicingProratedSeparately")]
        public bool InvoicingProratedSeparately { get; set; }

        [JsonPropertyName("invoicingSeparately")]
        public bool InvoicingSeparately { get; set; }

        [JsonPropertyName("sendEmailsAutomatically")]
        public bool SendEmailsAutomatically { get; set; }

        [JsonPropertyName("useCreditAutomatically")]
        public bool UseCreditAutomatically { get; set; }

        [JsonPropertyName("invoiceLabel")]
        public string InvoiceLabel { get; set; }

        [JsonPropertyName("street1")]
        public string Street1 { get; set; }

        [JsonPropertyName("street2")]
        public string Street2 { get; set; }

        [JsonPropertyName("city")]
        public string City { get; set; }

        [JsonPropertyName("countryId")]
        public int CountryId { get; set; }

        [JsonPropertyName("stateId")]
        public int StateId { get; set; }

        [JsonPropertyName("zipCode")]
        public string ZipCode { get; set; }

        [JsonPropertyName("addressGpsLat")]
        public double AddressGpsLat { get; set; }

        [JsonPropertyName("addressGpsLon")]
        public double AddressGpsLon { get; set; }

        [JsonPropertyName("contractId")]
        public string ContractId { get; set; }

        [JsonPropertyName("contractLengthType")]
        public int ContractLengthType { get; set; }

        [JsonPropertyName("minimumContractLengthMonths")]
        public int MinimumContractLengthMonths { get; set; }

        [JsonPropertyName("contractEndDate")]
        public DateTime ContractEndDate { get; set; }

        [JsonPropertyName("discountType")]
        public int DiscountType { get; set; }

        [JsonPropertyName("discountValue")]
        public double DiscountValue { get; set; }

        [JsonPropertyName("discountInvoiceLabel")]
        public string DiscountInvoiceLabel { get; set; }

        [JsonPropertyName("discountFrom")]
        public DateTime DiscountFrom { get; set; }

        [JsonPropertyName("discountTo")]
        public DateTime DiscountTo { get; set; }

        [JsonPropertyName("tax1Id")]
        public int Tax1Id { get; set; }

        [JsonPropertyName("tax2Id")]
        public int Tax2Id { get; set; }

        [JsonPropertyName("tax3Id")]
        public int Tax3Id { get; set; }

        [JsonPropertyName("fccBlockId")]
        public string FccBlockId { get; set; }

        [JsonPropertyName("hasIndividualPrice")]
        public bool HasIndividualPrice { get; set; }

        [JsonPropertyName("totalPrice")]
        public double TotalPrice { get; set; }

        [JsonPropertyName("servicePlanName")]
        public string ServicePlanName { get; set; }

        [JsonPropertyName("servicePlanPrice")]
        public int ServicePlanPrice { get; set; }

        [JsonPropertyName("servicePlanPeriod")]
        public int ServicePlanPeriod { get; set; }

        [JsonPropertyName("downloadSpeed")]
        public int DownloadSpeed { get; set; }

        [JsonPropertyName("uploadSpeed")]
        public int UploadSpeed { get; set; }

        [JsonPropertyName("ipRanges")]
        public List<string> IpRanges { get; set; }

        [JsonPropertyName("currencyCode")]
        public string CurrencyCode { get; set; }

        [JsonPropertyName("hasOutage")]
        public bool HasOutage { get; set; }

        [JsonPropertyName("lastInvoicedDate")]
        public DateTime LastInvoicedDate { get; set; }
    }

    public class ServiceDTO
    {
        [JsonPropertyName("clientId")]
        public int ClientId { get; set; }

        [JsonPropertyName("status")]
        public int Status { get; set; }

        [JsonPropertyName("servicePlanId")]
        public int ServicePlanId { get; set; }

        [JsonPropertyName("servicePlanPeriodId")]
        public int ServicePlanPeriodId { get; set; }

        [JsonPropertyName("activeFrom")]
        public DateTime ActiveFrom { get; set; }

        [JsonPropertyName("activeTo")]
        public DateTime ActiveTo { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("price")]
        public double Price { get; set; }

    }

    public class SeviceSurcharge
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("serviceId")]
        public int ServiceId { get; set; }

        [JsonPropertyName("surchargeId")]
        public int SurchargeId { get; set; }

        [JsonPropertyName("invoiceLabel")]
        public string InvoiceLabel { get; set; }

        [JsonPropertyName("price")]
        public int Price { get; set; }

        [JsonPropertyName("taxable")]
        public bool Taxable { get; set; }
    }

    public class ServiceSuchargeDTO
    {
        [JsonPropertyName("serviceId")]
        public int ServiceId { get; set; }

        [JsonPropertyName("surchargeId")]
        public int SurchargeId { get; set; }

        [JsonPropertyName("price")]
        public int Price { get; set; }
    }

}
