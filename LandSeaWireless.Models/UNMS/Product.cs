/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{
    public interface IProduct
    {
        int Id { get; set; }
        string InvoiceLabel { get; set; }
        string Name { get; set; }
        double Price { get; set; }
        bool Taxable { get; set; }
        string Unit { get; set; }
    }

    public class Product : IAPIModel, IProduct
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("invoiceLabel")]
        public string InvoiceLabel { get; set; }

        [JsonPropertyName("unit")]
        public string Unit { get; set; }

        [JsonPropertyName("price")]
        public double Price { get; set; }

        [JsonPropertyName("taxable")]
        public bool Taxable { get; set; }

    }

   

}
