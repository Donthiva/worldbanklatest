using DAL.Models.Contact_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DAL.Repositories
{
    public class AddressReopository : Repository<Address>, IAddressReopository
    {
        public AddressReopository(DbContext context) : base(context)
        {

        }

    }
}
