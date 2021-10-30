using DAL.Models.Bank_Information;
using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BankAcountTypeRepository : Repository<Bank_Account_Type>, IBankAcountTypeRepository
    {

     

        public BankAcountTypeRepository(ApplicationDbContext context) : base(context)
        {
          
        }

    }
}
