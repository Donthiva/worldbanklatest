using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
   public class ThreeWheelDocomentRepo : Repository<ThreeWheelMonitorDocuments>, IThreeWheelDocomentRepo
    {
        public ThreeWheelDocomentRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
