/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SignUp.Models.UNMS
{
    public interface IClient
    {
        ClientType ClientType { get; set; }
        bool IsLead { get; set; }
        string UserIdent { get; set; }
        string Username { get; set; }
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

    public class ClientPost : IAPIModel, IClient
    {

        public ClientPost()
        {

        }


        [JsonPropertyName("userIdent")]
        public string UserIdent { get; set; }

        [JsonPropertyName("previousIsp")]
        public string PreviousIsp { get; set; } = string.Empty;

        [JsonPropertyName("isLead")]
        public bool IsLead { get; set; } = true;

        [JsonPropertyName("clientType")]
        public ClientType ClientType { get; set; }

        [JsonPropertyName("companyName")]
        public string CompanyName { get; set; } = string.Empty;

        [JsonPropertyName("companyRegistrationNumber")]
        public string CompanyRegistrationNumber { get; set; } = string.Empty;

        [JsonPropertyName("companyTaxId")]
        public string CompanyTaxId { get; set; } = string.Empty;

        [JsonPropertyName("companyWebsite")]
        public string CompanyWebsite { get; set; } = string.Empty;

        [JsonPropertyName("companyContactFirstName")]
        public string CompanyContactFirstName { get; set; } = string.Empty;

        [JsonPropertyName("companyContactLastName")]
        public string CompanyContactLastName { get; set; } = string.Empty;

        [JsonPropertyName("firstName")]
        public string FirstName { get; set; } = string.Empty;

        [JsonPropertyName("lastName")]
        public string LastName { get; set; } = string.Empty;

        [JsonPropertyName("street1")]
        public string Street1 { get; set; } = string.Empty;

        [JsonPropertyName("street2")]
        public string Street2 { get; set; } = string.Empty;

        [JsonPropertyName("city")]
        public string City { get; set; } = string.Empty;

        [JsonPropertyName("countryId")]
        public int CountryId { get; set; } = 249; // US is 249 in UNMS API

        [JsonPropertyName("stateId")]
        public int StateId { get; set; } 

        [JsonPropertyName("zipCode")]
        public string ZipCode { get; set; } = string.Empty;

        [JsonPropertyName("invoiceStreet1")]
        public string InvoiceStreet1 { get; set; } = string.Empty;

        [JsonPropertyName("invoiceStreet2")]
        public string InvoiceStreet2 { get; set; } = string.Empty;

        [JsonPropertyName("invoiceCity")]
        public string InvoiceCity { get; set; } = string.Empty;

        [JsonPropertyName("invoiceStateId")]
        public int InvoiceStateId { get; set; } 

        [JsonPropertyName("invoiceCountryId")]
        public int InvoiceCountryId { get; set; } = 249;

        [JsonPropertyName("invoiceZipCode")]
        public string InvoiceZipCode { get; set; } = string.Empty;

        [JsonPropertyName("invoiceAddressSameAsContact")]
        public bool InvoiceAddressSameAsContact { get; set; } = true;

        [JsonPropertyName("note")]
        public string Note { get; set; } = string.Empty;

        [JsonPropertyName("organizationId")]
        public int OrganizationId { get; set; } = 1;

        /// <summary>
        /// Date string in ISO 8601
        /// </summary>
        [JsonPropertyName("registrationDate")]
        public string RegistrationDate { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz");

        [JsonPropertyName("username")]
        public string Username { get; set; } = string.Empty;
        
        [JsonPropertyName("generateProformaInvoices")]
        public bool GenerateProformaInvoices { get; set; } = true;

        // Set All Invoice Options To System Default
        [JsonPropertyName("sendInvoiceByPost")]
        public bool? SendInvoiceByPost { get; set; } = null;

        [JsonPropertyName("invoiceMaturityDays")]
        public int? InvoiceMaturityDays { get; set; } = null;

        [JsonPropertyName("stopServiceDue")]
        public bool? StopServiceDue { get; set; } = null;

        [JsonPropertyName("stopServiceDueDays")]
        public int? StopServiceDueDays { get; set; } = null;

    }
}
