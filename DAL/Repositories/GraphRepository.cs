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
                try
                {

                    data = db.Query<DeliverableOutput1DataModel>("Deliverable_Output_1",
                   commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<DeliverableOutput1DataModel>();
                }

                
               
            }

            return data;


        }


        public IEnumerable<DeliverableOutput2DataModel> getAllDeliverableOutput2Data()
        {
            IEnumerable<DeliverableOutput2DataModel> data = new List<DeliverableOutput2DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput2DataModel>("Deliverable_Output_2",
               commandType: CommandType.StoredProcedure);
                }
                catch
                { 
                    data = new List<DeliverableOutput2DataModel>();
                }



            }

            return data;


        }

        public IEnumerable<DeliverableOutput3DataModel> getAllDeliverableOutput3Data()
        {
            IEnumerable<DeliverableOutput3DataModel> data = new List<DeliverableOutput3DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput3DataModel>("Deliverable_Output_3",
              commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data =  new List<DeliverableOutput3DataModel>();
                }
               



            }

            return data;


        }

        public IEnumerable<DeliverableOutput4DataModel> getAllDeliverableOutput4Data()
        {
            IEnumerable<DeliverableOutput4DataModel> data = new List<DeliverableOutput4DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput4DataModel>("Deliverable_Output_4",
             commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<DeliverableOutput4DataModel>();
                }
              



            }

            return data;


        }

        public IEnumerable<DeliverableOutput5DataModel> getAllDeliverableOutput5Data()
        {
            IEnumerable<DeliverableOutput5DataModel> data = new List<DeliverableOutput5DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput5DataModel>("Deliverable_Output_5",
              commandType: CommandType.StoredProcedure);

                }
                catch
                {
                    data = new List<DeliverableOutput5DataModel>();
                }



            }

            return data;


        }

        public IEnumerable<DeliverableOutput6DataModel> getAllDeliverableOutput6Data()
        {
            IEnumerable<DeliverableOutput6DataModel> data = new List<DeliverableOutput6DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput6DataModel>("Deliverable_Output_6",
            commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<DeliverableOutput6DataModel>();
                }
             



            }

            return data;


        }

        public IEnumerable<DeliverableOutput8DataModel> getAllDeliverableOutput8Data()
        {
            IEnumerable<DeliverableOutput8DataModel> data = new List<DeliverableOutput8DataModel>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<DeliverableOutput8DataModel>("Deliverable_Output_8",
              commandType: CommandType.StoredProcedure);

                }
                catch
                { 
                    data = new List<DeliverableOutput8DataModel>(); 
                }




            }

            return data;


        }

        public IEnumerable<TotalPopulationCrossTabulationsAPCategoryWisePercentage> GetAPCategoryWisePercentage()
        {
            IEnumerable<TotalPopulationCrossTabulationsAPCategoryWisePercentage> data = new List<TotalPopulationCrossTabulationsAPCategoryWisePercentage>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<TotalPopulationCrossTabulationsAPCategoryWisePercentage>("NandPofAPsbelongtoeachcategory",
               commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<TotalPopulationCrossTabulationsAPCategoryWisePercentage>();
                }



            }

            return data;
        }

        public IEnumerable<GenderWiseDataPercentage> GetGenderWiseDataPercentage()
        {
            IEnumerable<GenderWiseDataPercentage> data = new List<GenderWiseDataPercentage>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<GenderWiseDataPercentage>("GenderWiseData",
              commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<GenderWiseDataPercentage>();
                }
               



            }

            return data;
        }



        public IEnumerable<AgeWiseAPsCategories> GetAgeWiseAPsCategories()
        {
            IEnumerable<AgeWiseAPsCategories> data = new List<AgeWiseAPsCategories>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<AgeWiseAPsCategories>("AgeWiseAPs",
              commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<AgeWiseAPsCategories>();
                }



            }

            return data;
        }


        public IEnumerable<VulnerableAPPercentage> GetVulnerabilitiesAPPercentage()
        {
            IEnumerable<VulnerableAPPercentage> data = new List<VulnerableAPPercentage>();

            using (IDbConnection db = _IDbConnection)
            {
                try
                {
                    data = db.Query<VulnerableAPPercentage>("NandPVulnerableofAllAps",
              commandType: CommandType.StoredProcedure);
                }
                catch
                {
                    data = new List<VulnerableAPPercentage>();
                }



            }

            return data;
        }
    }
}
