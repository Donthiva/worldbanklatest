using DAL.Models.Bank_Information;
using DAL.Models.Contact_Information;
using DAL.Models.Genaral;
using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models.Customer_Related
{
    public class Person : AuditableEntity
    {
        //composit key 1
        public int Person_ID { get; set; }
        //composit key 2
        public string Person_NIC { get; set; }

        public string Person_File_number { get; set; }

        public string Person_Name { get; set; }
        // foreign key of Gender
        public int  Person_Gender { get; set; }




        //previously employee

        public string GSBSLivelihoodEngagement { get; set; }
        public int MonthlyIncome { get; set; }
        public string Employer { get; set; }
        public string SpecialObservationsatGSBS { get; set; }

        //drop down

        public double Person_Contact_Number { get; set; }

        //drop down
        public string Education { get; set; }

        //public double Land_Line { get; set; }
        // foreign key of Address
        public int Person_Address { get; set; }



        // foreign key of PersonType
        public int Person_Type { get; set; }

        public string Person_DOB { get; set; }

        public int martialStatusId { get; set; }

        public int educationalLevelId { get; set; }

        public int businessOrLivelihoodRelocationId { get; set; }

        public string BusinessPlanNote { get; set; }

        public decimal EntitlementFund { get; set; }

        public bool IsEntitleFund { get; set; }

        public Address Address { get; set; }

        public Gender Gender { get; set; }

        public int PreviousTypeId { get; set; }

        public Person_Type PersonType { get; set; }

        public ICollection<Entittlment> Entittlment { get; set; }

        //dead or alive
        public bool DOA { get; set; }
        public DateTime EACdate { get; set; }

        public ICollection<Business> Business { get; set; }

        public Business_Situation Business_Situation { get; set; }

        public ICollection<ThreeWheeler> ThreeWheeler { get; set; }

        public ICollection<Employment> Employment { get; set; }

        public ICollection<Monitor> Monitor { get; set; }

        public ICollection<VulnerabilityMonitor> VulnerabilityMonitor { get; set; }

        public ICollection<Training> Training { get; set; }

        public Vulnerability Vulnerability { get; set; }

        public ICollection<Bank_Account> Bank { get; set; }

        public ICollection<phaseOut> phaseOut { get; set; }

        public ICollection<ApImages> apImages { get; set; }

        public ICollection<ApDocuments> apDocuments { get; set; }

        public ICollection<ApVideos> apVideos { get; set; }

        public ICollection<ApBusinessDocuments> apBusinessDocs { get; set; }

        public MartialStatus maritalStatus { get; set; }

        public EducationLevel educationLevel { get; set; }

        public BusinessOrLivelihoodRelocation businessOrLivelihoodRelocation { get; set; }

        public ApUserImage apUserImage { get; set; }

        public EmployeeGeneral employeeGeneral { get; set; }

        public BusinessGeneral businessGeneral { get; set; }

        public ThreeWheelGeneral threeWheelGeneral { get; set; }

        public PhaseOutGeneral phaseOutGeneral { get; set; }



    }
}
