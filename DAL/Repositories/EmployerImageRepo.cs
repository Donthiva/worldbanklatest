using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmployerImageRepo : Repository<EmployeeMonitorImages>, IEmployerImageRepo
    {
        public EmployerImageRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
