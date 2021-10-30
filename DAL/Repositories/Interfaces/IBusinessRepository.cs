using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IBusinessRepository : IRepository<Business>
    {
        Task<IEnumerable<Business>> getallBusinessMonitor();
    }
}
