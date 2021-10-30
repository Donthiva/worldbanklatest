using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmploymentTypeRepository : Repository<Employment_Type>, IEmploymentTypeRepository
    {
        public EmploymentTypeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
