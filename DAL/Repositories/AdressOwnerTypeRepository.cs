using DAL.Models.Contact_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class AdressOwnerTypeRepository : Repository<Adress_Owner_Type>, IAddressOwnerTypeRepository
    {
        public AdressOwnerTypeRepository(DbContext context) : base(context)
        {

        }
    }
}
