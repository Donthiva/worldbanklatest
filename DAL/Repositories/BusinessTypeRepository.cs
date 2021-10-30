using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
   public class BusinessTypeRepository : Repository<BusinessType>, IBusinessTypeRepsitory
    {
        public BusinessTypeRepository(ApplicationDbContext context) : base(context)
        {

        }
    }
}
