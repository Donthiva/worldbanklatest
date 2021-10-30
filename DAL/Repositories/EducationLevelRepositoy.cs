using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
   
    public class EducationLevelRepositoy : Repository<EducationLevel>, IEducationLevelRepositoy
    {
        public EducationLevelRepositoy(ApplicationDbContext context) : base(context)
        {
        }
    }
}
