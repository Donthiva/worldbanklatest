using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class PhaseOutImagesRepo : Repository<PhaseOutMonitorImages>, IPhaseOutImagesRepo
    {
        public PhaseOutImagesRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
