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

        IEnumerable<DeliverableOutput3DataModel> getAllDeliverableOutput3Data();

        IEnumerable<DeliverableOutput4DataModel> getAllDeliverableOutput4Data();

        IEnumerable<DeliverableOutput5DataModel> getAllDeliverableOutput5Data();

        IEnumerable<DeliverableOutput6DataModel> getAllDeliverableOutput6Data();

        IEnumerable<DeliverableOutput8DataModel> getAllDeliverableOutput8Data();
    }
}
