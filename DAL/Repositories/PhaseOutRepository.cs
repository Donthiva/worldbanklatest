using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
      public class PhaseOutRepository : Repository<phaseOut>, IPhaseOutRepository
    {


        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<phaseOut> _entities2;
        public PhaseOutRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<phaseOut>();
        }





        public async Task<IEnumerable<phaseOut>> getallPhaseOutMonitor()
        {
            try
            {

                var data = await _context2.phaseOut.Include(r => r.monitor).Include(r => r.monitor.MonitorDuration).Include(r=>r.phaseOutMonitorDocuments).Include(r=>r.phaseOutMonitorImages).Include(r=>r.phaseOutMonitorVideos).ToListAsync();
                return data;

            }
            catch (Exception ex)
            {
                var z = ex;

                return null;
            }

        }
    }
}
