/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/


using System.Text.Json.Serialization;

namespace LandSeaWireless.Models.UNMS
{
    public interface IBankAccount
    {
        string AccountNumber { get; set; }
    }

    public class BankAccount : IAPIModel, IBankAccount
    {
        [JsonPropertyName("accountNumber")]
        public string AccountNumber { get; set; }
    }

}
