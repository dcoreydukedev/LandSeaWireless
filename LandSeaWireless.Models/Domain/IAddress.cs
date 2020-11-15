/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LandSeaWireless.Models.Domain
{
    public interface IAddress
    {
        string Address1 { get; set; }

        string Address2 { get; set; }

        string City { get; set; }

        string Number { get; set; }

        State State { get; set; }

        AddressType Type { get; set; }

        string Zip { get; set; }

        Address GetAddress(string address1, string address2, string number, string city, State state, string zip);

        string GetAddressF(Address address);
    }

    [ComplexType, Serializable]
    public class Address : IAddress
    {
        public Address(string address1, string address2, string number, string city, State state, string zip) : this()
        {
            this.Address1 = address1;
            this.Address2 = address2;
            this.Number = number;
            this.City = city;
            this.State = state;
            this.Zip = zip;
            this.Type = AddressType.Default;
        }

        public Address(string address1, string address2, string number, string city, State state, string zip, AddressType type) :
            this(address1, address2, number, city, state, zip)
        {
            this.Type = type;
        }

        public Address()
        {
        }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string Number { get; set; }

        public State State { get; set; }

        public AddressType Type { get; set; }

        public string Zip { get; set; }

        public Address GetAddress(string address1, string address2, string number, string city, State state, string zip)
        {
            Address _address = new Address();

            if (!string.IsNullOrEmpty(address1))
            {
                if (!string.IsNullOrEmpty(city))
                {
                    if (!string.IsNullOrEmpty(zip))
                    {
                        _address.Address1 = address1;
                        if (!string.IsNullOrEmpty(address2))
                        {
                            _address.Address2 = address2;
                        }
                        else
                        {
                            _address.Address2 = null;
                        }
                        if (!string.IsNullOrEmpty(number))
                        {
                            _address.Number = number;
                        }
                        else
                        {
                            _address.Number = null;
                        }
                        _address.City = city;
                        _address.State = state;
                        _address.Zip = zip;
                    }
                    else
                    {
                        throw new ArgumentException("Zip Must be provided!", "Zip");
                    }
                }
                else
                {
                    throw new ArgumentException("City Must be provided!", "city");
                }
            }
            else
            {
                throw new ArgumentException("Address Line 1 Must be provided!", "address1");
            }

            return _address;
        }

        public string GetAddressF(Address address)
        {
            StringBuilder sb = new StringBuilder();

            if (!string.IsNullOrEmpty(address.Address1))
            {
                if (!string.IsNullOrEmpty(address.City))
                {
                    {
                        if (!string.IsNullOrEmpty(address.Zip))
                        {
                            sb.AppendLine(address.Address1);
                            if (!string.IsNullOrEmpty(address.Address2))
                            {
                                sb.AppendLine(address.Address2);
                            }
                            if (!string.IsNullOrEmpty(address.Number))
                            {
                                sb.AppendLine(address.Number);
                            }
                            sb.Append(address.City);
                            sb.Append(", ");
                            sb.Append(address.State.ToString());
                            sb.Append(" ");
                            sb.Append(address.Zip);
                        }
                        else
                        {
                            throw new ArgumentException("Zip Must be provided!", "Zip");
                        }
                    }
                }
                else
                {
                    throw new ArgumentException("City Must be provided!", "city");
                }
            }
            else
            {
                throw new ArgumentException("Address Line 1 Must be provided!", "address1");
            }

            return sb.ToString().Trim();
        }
    }
}