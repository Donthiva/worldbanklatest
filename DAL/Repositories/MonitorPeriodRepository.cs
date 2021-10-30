using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class MonitorPeriodRepository : Repository<MonitorPerioid>, IMonitorPeriodRepository
    {
        public MonitorPeriodRepository(ApplicationDbContext context ) : base(context)
        {

        }
    }
}
