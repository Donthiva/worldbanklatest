using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class BusinessRepository : Repository<Business>, IBusinessRepository
    {
        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<Business> _entities2;

        public BusinessRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<Business>();
        }

 

        public async Task<IEnumerable<Business>> getallBusinessMonitor()
        {
            try
            {


                var data = await _context2.Businesses
                .Include(r => r.monitor)
                .Include(r => r.monitor.MonitorDuration)
                    .Include(r => r.businessStaff)
                      .Include(r => r.businessVehicle)
                        .Include(r => r.businessStocks)
                          .Include(r => r.cilentele)
                            .Include(r => r.machinaryEquipment)
                              .Include(r => r.shopspace)
                            .Include(r => r.managementPractices)
                            .Include(r=> r.businessMonitorDocuments)
                            .Include(r=>r.businessMonitorImages)
                            .Include(r=>r.businessMonitorVideos)
                            .Include(r=>r.address)
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
