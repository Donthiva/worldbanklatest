using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
  public class phaseOut
    {
        public int Id { get; set; }

        public string FileNumber { get; set; }

        public string DecisionMade { get; set; }

        public string Situation { get; set; }

        public string MonthAndYear { get; set; }

        public string PlanedBusiness { get; set; }

        public string ReasonForPhaseOut { get; set; }

        public string EntileMentFundReceive { get; set; }

        public string UseOfEntileFund { get; set; }

        public string SocialWellBeing { get; set; }

        public string  EconomyWellBeign { get; set; }

        public bool IsInterestOfFixedDeposit { get; set; }

        public bool IsLivesWithcloseFamily { get; set; }

        public bool IsIncomeGeneratingSources { get; set; }

        public int? PersonID { get; set; }

   
        public int monitorPeriodId { get; set; }

        public string  Summary { get; set; }

        public DateTime Monitordate { get; set; }

        public DateTime Dateofphaseout { get; set; }

        public bool Contactable { get; set; }

        public string Otherincomegeneratingnote { get; set; }

        public bool Dependonclosefamily { get; set; }

        public bool Betterphysicallivingcondition { get; set; }

        public bool Bettercaringandprotection { get; set; }

        public bool Healthy { get; set; }

        public bool Isaprequirement { get; set; }

        public string requirementnote { get; set; }

        public bool Isourintervention { get; set; }

        public string Satisfactionlevel { get; set; }

        public string Ourinterventionnote { get; set; }

        public Person person { get; set; }

     

        public ICollection<PhaseOutMonitorImages> phaseOutMonitorImages { get; set; }

        public ICollection<PhaseOutMonitorDocuments> phaseOutMonitorDocuments { get; set; }

        public ICollection<PhaseOutMonitorVideos> phaseOutMonitorVideos { get; set; }



        public MonitorPerioid monitorPeriod { get; set; }


    }
}
