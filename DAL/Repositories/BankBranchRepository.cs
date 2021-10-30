using DAL.Models.Bank_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class BankBranchRepository : Repository<Bank_Branch> ,IBankBranchRepository
    {
        public BankBranchRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
