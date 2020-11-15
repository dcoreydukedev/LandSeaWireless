/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/
using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{
    public interface IType
    {
        int Id { get; set; }
        string Name { get; set; }
    }

    public class Type : IAPIModel, IType
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

}
