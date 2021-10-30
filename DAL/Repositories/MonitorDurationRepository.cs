using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class MonitorDurationRepository : Repository<Monitor_Duration>, IMonitorDurationRepository
    {
        public MonitorDurationRepository(DbContext context) : base(context)
        {
        }
    }
}
