using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
     public class PhaseOutGeneral
    {
        public int Id { get; set; }

        //decision Made
        public string PhaseOutDecisionMade { get; set; }

        public string MonthAndYearPhaseOut { get; set; }

        public string BusinessPlan { get; set; }

        public string ReasonForPhaseout { get; set; }

        public double EntitlementFund { get; set; }

        public string UseofEntitlementFund { get; set; }

        public string SocialEconomicWellbeing { get; set; }

        public bool IsInterestOfFixedDeposit { get; set; }

        public bool IsLivesWithcloseFamily { get; set; }

        public bool IsIncomeGeneratingSources { get; set; }

        public int? PersonID { get; set; }

        public Person person { get; set; }

    }
}
