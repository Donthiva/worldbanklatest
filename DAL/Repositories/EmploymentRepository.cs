using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class EmploymentRepository : Repository<Employment>, IEmploymentRepository
    {
        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<Employment> _entities2;


        public EmploymentRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<Employment>();
        }

        public async Task<IEnumerable<Employment>> getallPersonData()
        {
            try
            {


                var data = await _context2.Employment
                .Include(r => r.employeeMonitorDocuments)
                .Include(r => r.employeeMonitorImages)
                .Include(r => r.employeeMonitorVideos)
                .Include(r => r.monitor)
                .Include(r => r.monitor.MonitorDuration)
                .ToListAsync();




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
