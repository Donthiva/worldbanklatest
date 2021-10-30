using DAL.Models.Contact_Information;
using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
   public class BusinessGeneral
    {
        public int Id { get; set; }

        public int BusineesPlanId { get; set; }

        public int BusinessTypeId { get; set; }

        public bool IsEntilementFund { get; set; }

        public bool IsBankLoans { get; set; }

        public bool IsOwnService { get; set; }

        public bool IsPawingJewelery { get; set; }

        public bool IsInformalLoans { get; set; }

        public bool IsPartnerShip { get; set; }

        public bool IsBusinessChanged { get; set; }

        public double GSBSPreviousIncome { get; set; }

        public bool IsFirstBusinessPlan { get; set; }

        public string  BusinessPlanNote { get; set; }

        public string PreviousBusinessAtGoodShed { get; set; }

        public string RelocatedMonthandyear { get; set; }

        public int BusinessAPType { get; set; }

        public string BusinessTypeNote { get; set; }

        public string BusinessInformationNote { get; set; }

        public bool IsBusinessPlanChangeFromInitialBP { get; set; }

        public int? PersonId { get; set; }

        public string GSBSLivelihoodEngagement { get; set; }
        public int MonthlyIncome { get; set; }
        public string Business_BusinessLoaction { get; set; }
        public string SpecialObservationsatGSBS { get; set; }



        public Business_Plan business_Plan { get; set; }

        public BusinessType businessType { get; set; }

        public Person person { get; set; }
    }
}
