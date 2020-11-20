/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{
    public interface IClient
    {
        double AccountBalance { get; set; }
        int AccountCredit { get; set; }
        double AccountOutstanding { get; set; }
        double AddressGpsLat { get; set; }
        double AddressGpsLon { get; set; }
        string AvatarColor { get; set; }
        List<BankAccount> BankAccounts { get; set; }
        string City { get; set; }
        ClientType ClientType { get; set; }
        string CompanyContactFirstName { get; set; }
        string CompanyContactLastName { get; set; }
        string CompanyName { get; set; }
        string CompanyRegistrationNumber { get; set; }
        string CompanyTaxId { get; set; }
        string CompanyWebsite { get; set; }
        List<Contact> Contacts { get; set; }
        int CountryId { get; set; }
        string CurrencyCode { get; set; }
        string FirstName { get; set; }
        bool GenerateProformaInvoices { get; set; }
        int Id { get; set; }
        DateTime InvitationEmailSentDate { get; set; }
        bool InvoiceAddressSameAsContact { get; set; }
        string InvoiceCity { get; set; }
        int InvoiceCountryId { get; set; }
        int InvoiceMaturityDays { get; set; }
        int InvoiceStateId { get; set; }
        string InvoiceStreet1 { get; set; }
        string InvoiceStreet2 { get; set; }
        string InvoiceZipCode { get; set; }
        bool IsActive { get; set; }
        bool IsArchived { get; set; }
        bool IsLead { get; set; }
        string LastName { get; set; }
        string Note { get; set; }
        int OrganizationId { get; set; }
        string OrganizationName { get; set; }
        string PreviousIsp { get; set; }
        DateTime RegistrationDate { get; set; }
        bool SendInvoiceByPost { get; set; }
        int StateId { get; set; }
        bool StopServiceDue { get; set; }
        int StopServiceDueDays { get; set; }
        string Street1 { get; set; }
        string Street2 { get; set; }
        List<Tag> Tags { get; set; }
        int Tax1Id { get; set; }
        int Tax2Id { get; set; }
        int Tax3Id { get; set; }
        string UserIdent { get; set; }
        string Username { get; set; }
        bool UsesProforma { get; set; }
        string ZipCode { get; set; }
    }

    public class Client : IAPIModel, IClient
    {

        public Client()
        {

        }


        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("userIdent")]
        public string UserIdent { get; set; }

        [JsonPropertyName("previousIsp")]
        public string PreviousIsp { get; set; }

        [JsonPropertyName("isLead")]
        public bool IsLead { get; set; }

        [JsonPropertyName("clientType")]
        public ClientType ClientType { get; set; }

        [JsonPropertyName("companyName")]
        public string CompanyName { get; set; }

        [JsonPropertyName("companyRegistrationNumber")]
        public string CompanyRegistrationNumber { get; set; }

        [JsonPropertyName("companyTaxId")]
        public string CompanyTaxId { get; set; }

        [JsonPropertyName("companyWebsite")]
        public string CompanyWebsite { get; set; }

        [JsonPropertyName("companyContactFirstName")]
        public string CompanyContactFirstName { get; set; }

        [JsonPropertyName("companyContactLastName")]
        public string CompanyContactLastName { get; set; }

        [JsonPropertyName("firstName")]
        public string FirstName { get; set; }

        [JsonPropertyName("lastName")]
        public string LastName { get; set; }

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

        [JsonPropertyName("invoiceStreet1")]
        public string InvoiceStreet1 { get; set; }

        [JsonPropertyName("invoiceStreet2")]
        public string InvoiceStreet2 { get; set; }

        [JsonPropertyName("invoiceCity")]
        public string InvoiceCity { get; set; }

        [JsonPropertyName("invoiceStateId")]
        public int InvoiceStateId { get; set; }

        [JsonPropertyName("invoiceCountryId")]
        public int InvoiceCountryId { get; set; }

        [JsonPropertyName("invoiceZipCode")]
        public string InvoiceZipCode { get; set; }

        [JsonPropertyName("invoiceAddressSameAsContact")]
        public bool InvoiceAddressSameAsContact { get; set; }

        [JsonPropertyName("note")]
        public string Note { get; set; }

        [JsonPropertyName("sendInvoiceByPost")]
        public bool SendInvoiceByPost { get; set; }

        [JsonPropertyName("invoiceMaturityDays")]
        public int InvoiceMaturityDays { get; set; }

        [JsonPropertyName("stopServiceDue")]
        public bool StopServiceDue { get; set; }

        [JsonPropertyName("stopServiceDueDays")]
        public int StopServiceDueDays { get; set; }

        [JsonPropertyName("organizationId")]
        public int OrganizationId { get; set; }

        [JsonPropertyName("tax1Id")]
        public int Tax1Id { get; set; }

        [JsonPropertyName("tax2Id")]
        public int Tax2Id { get; set; }

        [JsonPropertyName("tax3Id")]
        public int Tax3Id { get; set; }

        [JsonPropertyName("registrationDate")]
        public DateTime RegistrationDate { get; set; }

        [JsonPropertyName("username")]
        public string Username { get; set; }

        [JsonPropertyName("avatarColor")]
        public string AvatarColor { get; set; }

        [JsonPropertyName("addressGpsLat")]
        public double AddressGpsLat { get; set; }

        [JsonPropertyName("addressGpsLon")]
        public double AddressGpsLon { get; set; }

        [JsonPropertyName("generateProformaInvoices")]
        public bool GenerateProformaInvoices { get; set; }

        [JsonPropertyName("isActive")]
        public bool IsActive { get; set; }

        [JsonPropertyName("accountBalance")]
        public double AccountBalance { get; set; }

        [JsonPropertyName("accountCredit")]
        public int AccountCredit { get; set; }

        [JsonPropertyName("accountOutstanding")]
        public double AccountOutstanding { get; set; }

        [JsonPropertyName("currencyCode")]
        public string CurrencyCode { get; set; }

        [JsonPropertyName("organizationName")]
        public string OrganizationName { get; set; }

        [JsonPropertyName("invitationEmailSentDate")]
        public DateTime InvitationEmailSentDate { get; set; }

        [JsonPropertyName("isArchived")]
        public bool IsArchived { get; set; }

        [JsonPropertyName("usesProforma")]
        public bool UsesProforma { get; set; }

        [JsonPropertyName("contacts")]
        public List<Contact> Contacts { get; set; }

        [JsonPropertyName("bankAccounts")]
        public List<BankAccount> BankAccounts { get; set; }

        [JsonPropertyName("tags")]
        public List<Tag> Tags { get; set; }

        [JsonPropertyName("attributes")]
        public CustomAttributes Attributes { get; set; }
    }
}
