using DAL.Models;
using DAL.Models.Genaral;
using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.ViewModels
{
   public class AddPersonDataViewModel
    {
        public int Person_ID { get; set; }
        public string Person_NIC { get; set; }
        public string Person_File_number { get; set; }
        public string Person_Name { get; set; }
        public int Person_Gender { get; set; }
        public string MartialStatus { get; set; }
        public string Education { get; set; }
        public double Person_Contact_Number { get; set; }
        public double Home_Contact_Number { get; set; }
        public string addressNo { get; set; }
        public string addressStreet { get; set; }
        public int City { get; set; }
        public int state { get; set; }
        public int country { get; set; }
        public int district { get; set; }
        public string Person_DOB { get; set; }
        public int PersonType { get; set; }
        public string JobRole { get; set; }
        public string Employer { get; set; }
        public double Salary { get; set; }
        public int BankName { get; set; }
        public int BankBranch { get; set; }
        public string AccountNumber { get; set; }

        public bool DOA { get; set; }

        public int BankAccountTypeId { get; set; }

        public int PreviousTypeId { get; set; }

        public string Longitude { get; set; }

        public string Latitude { get; set; }

        public int martialStatusId { get; set; }

        public int educationalLevelId { get; set; }

        public int businessOrLivelihoodRelocationId { get; set; }

        public ICollection<ApImages> apImages { get; set; }

        public ICollection<ApDocuments> apDocuments { get; set; }

        public ICollection<ApVideos> apVideos { get; set; }

        public ICollection<ApBusinessDocuments> apBusinessDocs { get; set; }

        public ApUserImage apUserImage { get; set; }


        public Vulnerability Vulnerability { get; set; }

        public string BankAccountName { get; set; }

        public EmployeeGeneral employeeGeneral { get; set; }
        public BusinessGeneral businessGeneral { get; set; }
        public ThreeWheelDriver threeWheelDriver { get; set; }
        public PhaseOut phaseOut { get; set; }



    }


    public class AddPersonDataViewModel2
    {
        public int Person_ID { get; set; }
        public string Person_NIC { get; set; }
        public string Person_File_number { get; set; }
        public string Person_Name { get; set; }
        public int Person_Gender { get; set; }
        public int MartialStatus { get; set; }
        public string Education { get; set; }
        public int Person_Contact_Number { get; set; }
        public int Home_Contact_Number { get; set; }
        public string addressNo { get; set; }
        public string addressStreet { get; set; }
        public int City { get; set; }
        public int state { get; set; }
        public int country { get; set; }
        public int district { get; set; }
        public string Person_DOB { get; set; }
        public int PersonType { get; set; }
        public string JobRole { get; set; }
        public string Employer { get; set; }
        public int Salary { get; set; }
        public int BankName { get; set; }
        public int BankBranch { get; set; }
        public int AccountNumber { get; set; }
        public string BankAccountName { get; set; }
        //public BusinessGeneral? businessGeneral { get; set; }
        //public ThreeWheelDriver? threeWheelDriver { get; set; }
        //public PhaseOut? phaseOut { get; set; }



    }


    public class BusinessGeneral
    {
        public int BusinessPlanId { get; set; }
        public int BusinessTypeId { get; set; }
        public bool IsEntilementFund { get; set; }
        public bool IsBankLoans { get; set; }
        public bool IsOwnService { get; set; }
        public bool IsPawningJewellary { get; set; }
        public bool IsformalLoans { get; set; }
        public bool IsPartnerShip { get; set; }
        public bool IsBusinessChanged { get; set; }
        public double GSBSPreviousIncome { get; set; }
        public string PreviousBusinessAtGoodShed { get; set; }
        public string ReallocatedMonthandyear { get; set; }

        public bool IsFirstBusinessPlan { get; set; }

        public string BusinessPlanNote { get; set; }

        public int BusinessAPType { get; set; }

    }


    public class ThreeWheelDriver
    {

        public string initialParkAtGSBS { get; set; }
        public double MonthlyIncomeGSBS { get; set; }
        public string EngagementAtGSBS { get; set; }
    }

    public class PhaseOut
    {
        public string FileNumber { get; set; }
        public string DecisionMade { get; set; }
        public string Situation { get; set; }
        public string MonthAndYear { get; set; }
        public string PlanedBusiness { get; set; }
        public string ReasonForPhaseOut { get; set; }
        public string UseOfEntileFund { get; set; }
        public string SocialWellBeing { get; set; }
        public bool IsInterestOfFixedDeposit { get; set; }
        public bool IsLivesWithcloseFamily { get; set; }
        public bool IsIncomeGeneratingSources { get; set; }
        public int PersonID { get; set; }
    }






}
