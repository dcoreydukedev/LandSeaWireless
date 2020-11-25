/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Text.Json.Serialization;

namespace SignUp.Models.UNMS
{

    public interface ISurcharge
    {
        int Id { get; set; }
        string InvoiceLabel { get; set; }
        string Name { get; set; }
        int Price { get; set; }
        bool Taxable { get; set; }
    }

    public class Surcharge : IAPIModel, ISurcharge
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("invoiceLabel")]
        public string InvoiceLabel { get; set; }

        [JsonPropertyName("price")]
        public int Price { get; set; }

        [JsonPropertyName("taxable")]
        public bool Taxable { get; set; }
    }

    public class SurchargeDTO
    {
        public string Name { get; set; }
        public string Price { get; set; }
    }

}
