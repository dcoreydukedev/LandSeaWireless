/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SignUp.Models.API
{
    public interface IContact
    {
        int ClientId { get; set; }
        string Email { get; set; }
        int Id { get; set; }
        bool IsBilling { get; set; }
        bool IsContact { get; set; }
        string Name { get; set; }
        string Phone { get; set; }
        List<Type> Types { get; set; }
    }

    public class Contact : IAPIModel, IContact
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("clientId")]
        public int ClientId { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("phone")]
        public string Phone { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("isBilling")]
        public bool IsBilling { get; set; }

        [JsonPropertyName("isContact")]
        public bool IsContact { get; set; }

        [JsonPropertyName("types")]
        public List<Type> Types { get; set; }
    }

}
