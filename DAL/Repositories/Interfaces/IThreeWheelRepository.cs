using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
     public interface IThreeWheelRepository : IRepository<ThreeWheeler>
    {
        Task<IEnumerable<ThreeWheeler>> getallThreeWheelMonitor();
    }
}
