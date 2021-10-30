using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
  

    public class BusinessImageRepo : Repository<BusinessMonitorImages>, IBusinessImageRepo
    {
        public BusinessImageRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
