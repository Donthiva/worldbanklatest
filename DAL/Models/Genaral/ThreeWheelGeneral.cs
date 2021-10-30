using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
   public class ThreeWheelGeneral
    {
        public int Id { get; set; }

        public int? PersonId { get; set; }

        public string InitialParkAtGSBS { get; set; }

        public double MonthlyIncomeAtGSBS { get; set; }

        public string EngagementAtGSBS { get; set; }

        public string RealocatedMonthandYear { get; set; }

        public string BusinessLivelihoodRealocation { get; set; }

        public string specialNotes { get; set; }

        public string GSBSLivelihoodEngagement { get; set; }
        public int MonthlyIncome { get; set; }
        public string BusinessLoaction { get; set; }
        public string SpecialObservationsatGSBS { get; set; }

        public Person person { get; set; }
    }
}
