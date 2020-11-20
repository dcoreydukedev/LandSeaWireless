/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{

    public class CustomAttributes
    {
        public CustomAttributes()
        {
        }

        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("key")]
        public string Key { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("clientZoneVisible")]
        public bool ClientZoneVisible { get; set; }

        [JsonPropertyName("attributeType")]
        public string AttributeType { get; set; }
    }

    public enum AttributeType
    {
        Client,
        Invoice
    }

   


}
