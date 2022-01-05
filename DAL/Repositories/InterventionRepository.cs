using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
   public class InterventionRepository : Repository<Intervention>, IInterventionRepository
    {
        protected readonly ApplicationDbContext _context2;
        public InterventionRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
        }

        public override async Task<IEnumerable<Intervention>> GetAllasync()
        {
            return await _context2.Intervention.Include(r=>r.Participants).ToListAsync();
        }

    }
}
