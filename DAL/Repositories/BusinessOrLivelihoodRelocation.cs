using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BusinessOrLivelihoodRelocationRepositoy : Repository<BusinessOrLivelihoodRelocation>, IBusinessOrLivelihoodRelocationRepository
    {
        public BusinessOrLivelihoodRelocationRepositoy(ApplicationDbContext context) : base(context)
        {
        }
    }
}
