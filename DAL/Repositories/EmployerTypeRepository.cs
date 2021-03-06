using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmployerTypeRepository : Repository<Employer_Type>, IEmployerTypeRepository
    {
        public EmployerTypeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
