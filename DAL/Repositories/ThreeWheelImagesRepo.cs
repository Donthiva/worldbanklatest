using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class ThreeWheelImagesRepo : Repository<ThreeWheelMonitorImages>, IThreeWheelImagesRepo
    {
        public ThreeWheelImagesRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
