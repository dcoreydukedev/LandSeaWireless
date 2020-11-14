/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using System.Text.Json.Serialization;

namespace SignUp.Models.API
{
    public interface ITag
    {
        string ColorBackground { get; set; }
        string ColorText { get; set; }
        int Id { get; set; }
        string Name { get; set; }
    }

    public class Tag : IAPIModel, ITag
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("colorBackground")]
        public string ColorBackground { get; set; }

        [JsonPropertyName("colorText")]
        public string ColorText { get; set; }
    }

}
