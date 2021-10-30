using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BusinessSituationRepository : Repository<Business_Situation>, IBusinessSituationRepository
    {
        public BusinessSituationRepository(DbContext context) : base(context)
        {
        }
    }
}
