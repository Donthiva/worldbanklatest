using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BusinessPlanRepsitory : Repository<Business_Plan>, IBusinessPlanRepsitory
    {
        public BusinessPlanRepsitory(ApplicationDbContext context) : base(context)
        {
        }
    }
}
