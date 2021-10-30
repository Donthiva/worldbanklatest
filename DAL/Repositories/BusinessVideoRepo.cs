using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    

    public class BusinessVideoRepo : Repository<BusinessMonitorVideos>, IBusinessVideoRepo
    {
        public BusinessVideoRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
