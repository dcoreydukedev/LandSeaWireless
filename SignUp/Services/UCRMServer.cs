/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

namespace SignUp.Services
{
    public partial class UNMSDataService 
    {
        public static class UCRMServer
        {
            public static string IP 
            { 
                get
                {
                    return @"https://104.129.131.164";
                }
            }
            public static string API
            {
                get
                {
                    return @"/api/v1.0";
                }
            }
            public static class APIKeys
            {
                public static string Read
                {
                    get
                    {
                        return @"nb8sJ6G0AGIv+Fqb1g6/YKl9EkY4jf4Z9gpEkPw3sX/X2p6KAo0Ydldv7vngfH1n";
                    }
                }
                public static string Write
                {
                    get
                    {
                        return @"WitICI+xvF2NlbTvnp5Ast7ws2C/BIosTRLScSHbPBYtfHUXoctPRNVRQJ1LeXnk";
                    }
                }
            }
        }


    }



   

   


}
