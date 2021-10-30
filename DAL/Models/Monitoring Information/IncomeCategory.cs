using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class IncomeCategory : AuditableEntity
    {
        public int Id { get; set; }

        public string IncomeCategoryName { get; set; }

        public double MinimumIncome { get; set; }

        public double MaximumIncome { get; set; }
    }
}
