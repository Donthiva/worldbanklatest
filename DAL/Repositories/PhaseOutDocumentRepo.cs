using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
   public class PhaseOutDocumentRepo : Repository<PhaseOutMonitorDocuments>, IPhaseOutDocumentRepo
    {
        public PhaseOutDocumentRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
