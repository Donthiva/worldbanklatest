using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class TrainingTypeRepository : Repository<Training_Type>, ITrainingTypeRepository
    {
        public TrainingTypeRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
