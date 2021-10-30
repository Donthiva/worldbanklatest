using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmploymentStatusRepository : Repository<Employment_Status>, IEmploymentStatusRepository
    {
        public EmploymentStatusRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
