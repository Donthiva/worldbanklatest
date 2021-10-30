﻿using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
        public class ThreeWheelVideoRepo : Repository<ThreeWheelMonitorVideos>, IThreeWheelVideoRepo
    {
        public ThreeWheelVideoRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
