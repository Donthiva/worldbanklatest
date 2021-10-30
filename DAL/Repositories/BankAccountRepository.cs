using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BankAccountRepository : Repository<Bank_Account> , IBankAccountRepository
    {
        public BankAccountRepository(DbContext context) : base(context)
        {
        }
    }
}
