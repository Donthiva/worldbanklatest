using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
     public class PhaseOutVideoRepo : Repository<PhaseOutMonitorVideos>, IPhaseOutVideoRepo
    {
        public PhaseOutVideoRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}

