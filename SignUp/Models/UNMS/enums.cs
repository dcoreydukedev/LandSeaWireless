/*************************************************************************
 * Author: DCoreyDuke
 ************************************************************************/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignUp.Models.UNMS
{

    /// <summary>
    /// Service Plan Period In Months
    /// </summary>
    [Serializable]
    public enum PlanPeriodMonhs
    {
        One,
        Three, 
        Six,
        Twelve,
        TwentyFour
    }

    /// <summary>
    /// Client Type
    /// </summary>
    [Serializable]
    public enum ClientType
    {
        Residential=1,
        Company=2
    }

    /// <summary>
    /// Job Status
    /// </summary>
    [Serializable]
    public enum JobStatus 
    {
        Open=0,
        InProgress=1,
        Closed=2
    }

}
