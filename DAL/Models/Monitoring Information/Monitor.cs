using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class Monitor : AuditableEntity
    {

        public int Monitor_ID { get; set; }
        // foreign key of Person
        public string? Monitor_Person_ID { get; set; }
        public DateTime Monitor_Date { get; set; }
        // foreign key of monitor duration 
        public int Monitor_Duration { get; set; }
        public string Monitor_Update { get; set; }
        public double Monitor_Monthly_income { get; set; }
        public int Monitor_LRP_Responds_action { get; set; }
        public string Monitor_Remarks { get; set; }

       //what is monitoring period

        public Person Person { get; set; }

        public Business Business { get; set; }

    

        public ThreeWheeler ThreeWheeler { get; set; }
        
        public Employment Employment { get; set; }

        public VulnerabilityMonitor vulnerability { get; set; }

        public Monitor_Duration MonitorDuration { get; set; }

    }
}
