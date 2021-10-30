using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmployerVideoRepo : Repository<EmployeeMonitorVideos>, IEmployerVideoRepo
    {

        public EmployerVideoRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
