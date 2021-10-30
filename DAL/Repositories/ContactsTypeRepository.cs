using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class ContactsTypeRepository : Repository<ContactsType>, IContactsTypeRepository
    {
        public ContactsTypeRepository(DbContext context) : base(context)
        {
        }
    }
}
