using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EntittlmentRepositoy : Repository<Entittlment>, IEntittlmentRepositoy
    {
        public EntittlmentRepositoy(DbContext context) : base(context)
        {
        }
    }
}
