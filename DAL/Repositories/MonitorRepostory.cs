using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class MonitorRepostory : Repository<Monitor>, IMonitorRepostory
    {
        public MonitorRepostory(DbContext context) : base(context)
        {
        }
    }
}
