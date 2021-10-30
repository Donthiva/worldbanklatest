using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
   public class BusinessDocumentRepo : Repository<BusinessMonitorDocuments>, IBusinessDocumentRepo
    {
        public BusinessDocumentRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
