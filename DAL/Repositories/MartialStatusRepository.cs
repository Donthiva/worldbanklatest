using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
 

    public class MartialStatusRepository : Repository<MartialStatus>, IMartialStatusRepository
    {
        public MartialStatusRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
