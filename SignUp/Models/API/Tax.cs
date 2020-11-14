/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Text.Json.Serialization;

namespace SignUp.Models.API
{
    public interface ITax
    {
        string AgencyName { get; set; }
        int Id { get; set; }
        string Name { get; set; }
        int Rate { get; set; }
        bool Selected { get; set; }
    }

    public class Tax : IAPIModel, ITax
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("agencyName")]
        public string AgencyName { get; set; }

        [JsonPropertyName("rate")]
        public int Rate { get; set; }

        [JsonPropertyName("selected")]
        public bool Selected { get; set; }
    }

    public class TaxDTO
    {
        public string Name { get; set; }
        public int Rate { get; set; }
    }

}
