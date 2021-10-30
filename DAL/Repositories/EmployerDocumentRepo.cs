using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class EmployerDocumentRepo : Repository<EmployeeMonitorDocuments>, IEmployerDocumentRepo
    {
        public EmployerDocumentRepo(ApplicationDbContext context) : base(context)
        {

        }
    }
}
