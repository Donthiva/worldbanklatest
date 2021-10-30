using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class PersonTypeRepository : Repository<Person_Type>, IPersonTypeRepository
    {
        public PersonTypeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
