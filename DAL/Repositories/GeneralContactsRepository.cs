using DAL.Models.Contact_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class GeneralContactsRepository : Repository<GeneralContacts>, IGeneralContactsRepository
    {
        public GeneralContactsRepository(DbContext context) : base(context)
        {
        }
    }
}
