/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/


using System.Text.Json.Serialization;

namespace SignUp.Models.API
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
