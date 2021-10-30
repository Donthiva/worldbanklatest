using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
  
    public class PersonPreviousTypeRepository : Repository<PreviousType>, IPersonPreviousTypeRepository
    {
        public PersonPreviousTypeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
