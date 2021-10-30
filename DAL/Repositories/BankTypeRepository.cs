using DAL.Models.Bank_Information;
using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class BankTypeRepository : Repository<Bank_Type>, IBankTypeRepository
    {
        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<Person> _entities2;


        public BankTypeRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<Person>();
        }

        public async Task<IEnumerable<Person>>  testNavigation()
         {
            try
            {

                var data = await _context2.Persons
                .Include(r => r.Employment)
                .Include(r => r.Monitor)
                .SingleOrDefaultAsync();

                var x = await _entities2.ToListAsync();
                return x;
               
            }
            catch (Exception ex)
            {
                var z = ex;

                return null;
            }

        }

    }
}
