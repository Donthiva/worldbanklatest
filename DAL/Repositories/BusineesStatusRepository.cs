using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BusinessStatusRepositoryn : Repository<BusinessStatus>, IBusinessStatusRepository
    {
        public BusinessStatusRepositoryn(DbContext context) : base(context)
        {
        }
    }
}
