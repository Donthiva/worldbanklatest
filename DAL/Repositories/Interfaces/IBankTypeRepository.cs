using DAL.Models.Bank_Information;
using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IBankTypeRepository : IRepository<Bank_Type>
    {
         Task<IEnumerable<Person>> testNavigation();
    }
}
