using DAL.Models.Graph;
using DAL.Repositories.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class GraphRepository : IGpraphRepository
    {
        private IDbConnection _IDbConnection;

        public GraphRepository(IDbConnection iDbConnection)
        {
            _IDbConnection = iDbConnection;
        }

        public  IEnumerable<DeliverableOutput1DataModel> getAllDeliverableOutput1Data()
        {
            IEnumerable<DeliverableOutput1DataModel> data = new List<DeliverableOutput1DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
               
                     data =  db.Query<DeliverableOutput1DataModel>("Deliverable_Output_1",
                    commandType: CommandType.StoredProcedure);

                
               
            }

            return data;


        }


        public IEnumerable<DeliverableOutput2DataModel> getAllDeliverableOutput2Data()
        {
            IEnumerable<DeliverableOutput2DataModel> data = new List<DeliverableOutput2DataModel>();

            using (IDbConnection db = _IDbConnection)
            {

                data = db.Query<DeliverableOutput2DataModel>("Deliverable_Output_2",
               commandType: CommandType.StoredProcedure);



            }

            return data;


        }
    }
}
