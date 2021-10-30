using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
  public  class ThreeWheelRepository : Repository<ThreeWheeler>, IThreeWheelRepository
    {


        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<ThreeWheeler> _entities2;

        public ThreeWheelRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<ThreeWheeler>();
        }





        public async Task<IEnumerable<ThreeWheeler>> getallThreeWheelMonitor()
        {
            try
            {

                var data = await _context2.ThreeWheeler.Include(r=>r.Monitor).Include(r=>r.Monitor.MonitorDuration).Include(r=>r.threeWheelMonitorDocuments).Include(r=>r.threeWheelMonitorImages).Include(r=>r.threeWheelMonitorVideos).ToListAsync();
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
