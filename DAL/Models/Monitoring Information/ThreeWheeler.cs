using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class ThreeWheeler
    {
        public int Id { get; set; }

        public string InitalParkAtGSBS { get; set; }

        public string PersonNIC { get; set; }

        public double MonthlyIcomeAtGSBS { get; set; }

       ///drop down
        public string EngauagmentAtGSBS { get; set; }

        public string CurrentPark { get; set; }

        public string Status { get; set; }

        public double MonthlyIncome { get; set; }

        public int? PersonID { get; set; }

        public string IncomeStatus { get; set; }

        public string Situation { get; set; }

        public int MonitorId { get; set; }

        public int monitorPeriodId { get; set; }

        public string Workingdays { get; set; }

        public bool Haveotherincomegeneratingsources { get; set; }

        public string Threewheelpark { get; set; }

        public string Summary { get; set; }

        public bool Contactable { get; set; }

        public decimal DailyIncome { get; set; }

        public string SpecialObservation { get; set; }

        public ICollection<ThreeWheelMonitorImages> threeWheelMonitorImages { get; set; }

        public ICollection<ThreeWheelMonitorDocuments> threeWheelMonitorDocuments { get; set; }

        public ICollection<ThreeWheelMonitorVideos> threeWheelMonitorVideos { get; set; }

        public Monitor Monitor { get; set; }

        public Person person { get; set; }

        public MonitorPerioid monitorPeriod { get; set; }
    }
}
