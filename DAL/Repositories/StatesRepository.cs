using DAL.Models.Contact_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class StatesRepository : Repository<States>, IStatesRepository
    {
        public StatesRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
