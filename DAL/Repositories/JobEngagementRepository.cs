using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class JobEngagementRepository : Repository<JobEngagement>,IJobEngagementRepository
    {
        public JobEngagementRepository(ApplicationDbContext context) : base(context)
        {

        }
    }
}
