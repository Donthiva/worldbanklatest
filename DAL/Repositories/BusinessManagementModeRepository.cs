using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BusinessManagementModeRepository : Repository<Business_Management_Mode>, IBusinessManagementModeRepository
    {
        public BusinessManagementModeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
