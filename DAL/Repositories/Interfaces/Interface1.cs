using DAL.Models.Graph;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
   public interface IGpraphRepository 
    {
        IEnumerable<DeliverableOutput1DataModel> getAllDeliverableOutput1Data();

        IEnumerable<DeliverableOutput2DataModel> getAllDeliverableOutput2Data();
    }
}
