using DAL.Models.Businees_Related;
using DAL.Models.Contact_Information;
using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Customer_Related
{
        public class Business : AuditableEntity
    {
        public int Business_ID { get; set; }
        //foreign key of Person Id
        public int? Business_Person_ID { get; set; }

        public string PersonNIC { get; set; }
        public string BusinessSituation { get; set; }
        public string  FileNumber { get; set; }
        //foreign key of address 
        public string Business_address { get; set; }
        public string Business_GIS { get; set; }
        //foreign key of Buiness_Plan
        public int Business_First_Buiness_Plan { get; set; }
        public int? Business_Second_Buiness_Plan { get; set; }
        //can create another table for busineess types
        public int Business_Type { get; set; }
        public bool Business_changed { get; set; }
        public string Business_Second_Business { get; set; }
        //foreign key of Business_Management_Mode
        public int Business_Management_Mode { get; set; }
        public string Business_Investment_Sources { get; set; }

        public int? BuinessPlan2Buiness_Plan_ID { get; set; }

        public string Buisness_In_Out { get; set; }

        public string PreviousBusiness { get; set; }

        public string CurrentBusiness { get; set; }

        public string BusinessStatus { get; set; }

        public double GSBSPreviousIncome { get; set; }

        public string GBBSBusinessDescription { get; set; }

        public DateTime? relocatedMonthAndYear { get; set; }

        public bool IsEntitlementFund { get; set; }

        public bool IsBankLoan { get; set; }

        public bool IsOwnSaving { get; set; }

        public bool IsPawingJewelary { get; set; }

        public bool IsInformalLoans { get; set; }
        public bool IsPartnerShip { get; set; }

        public double MonthlyIncome { get; set; }

        public bool IsbuinessDiversified { get; set; }

        public string OldBusinesses { get; set; }

        public bool IsBusinessChangeFromInitial { get; set; }

        public string CityOut { get; set; }

        public string IncomeStatus { get; set; }

        public bool IsOperatingWithStableProfit { get; set; }

        public bool IsAlternativeSite { get; set; }

        public string businessSummary { get; set; }

        public string Summary { get; set; }

        public bool IsneedRequested { get; set; }

        public int? monitorId { get; set; }

        public int  monitorPeriodId { get; set; }

        public int? BusinessAddressId { get; set; }

        public bool Contactable { get; set; }

        public bool IsAPDead { get; set; }

        public string HowIsFamilyIfdead { get; set; }

        public string HowBusinessCHange { get; set; }

        public string IncomeStatusComparedToGSBS { get; set; }

        public string  IncomeStatusComparedToPM { get; set; }

        public decimal DailyIncome { get; set; }

        public bool IsNeedOrRequirment { get; set; }

        public string RequirmentNeed { get; set; }

        public string SpecialObservation { get; set; }

        public Address address { get; set; }

        public ICollection<BusinessMonitorImages> businessMonitorImages { get; set; }

        public ICollection<BusinessMonitorDocuments> businessMonitorDocuments { get; set; }

        public ICollection<BusinessMonitorVideos> businessMonitorVideos { get; set; }

        public Person Person { get; set; }

        //public Address Address { get; set; }

        

        //public Business_Plan BuinessPlan2 { get; set; }

        public BusinessType businessType { get; set; }

        public Business_Management_Mode BusinessManagementMode { get; set; }

        public BusinessStaff businessStaff { get; set; }

        public BusinessVehicle businessVehicle { get; set; }

        public BusinessStocks businessStocks { get; set; }

        public Cilentele cilentele { get; set; }

        public MachinaryEquipment machinaryEquipment { get; set; }

        public Shopspace shopspace { get; set; }

        public ManagementPractices managementPractices { get; set; }

        public Monitor monitor { get; set; }

        public MonitorPerioid monitorPeriod { get; set; }


    }
}
