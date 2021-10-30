using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class MonitorPerioid
    {
        public int Id { get; set; }

        public string PeroildName { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public ICollection<Business> Businesses { get; set; }

        public ICollection<Employment> Employment { get; set; }

        public ICollection<VulnerabilityMonitor> VulnerabilityMonitor { get; set; }

        public ICollection<ThreeWheeler> ThreeWheeler { get; set; }

        public ICollection<phaseOut> phaseOut { get; set; }
        
    }
}
