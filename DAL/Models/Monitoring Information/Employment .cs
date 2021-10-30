using DAL.Models.Contact_Information;
using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class Employment: AuditableEntity
    {
        public int Employment_ID { get; set; }
        // foreign key of person ID
        public int? Person_ID { get; set; }

        public int Employment_Duration { get; set; }
        //foreign key of employee status
        public int Employment_Status { get; set; }
        public DateTime Employment_Started_date { get; set; }
        public double Employment_Salary { get; set; }
        //foreing key of employeement types
        public int Employment_Type { get; set; }

        public string Employment_Employer { get; set; }
        //foreing key of employeement types
        public int Employment_Employer_Type { get; set; }

        public string Employment_How_he_found_the_job { get; set; }

        public string Employment_If_not_angeged_in_a_job_reason { get; set; }

        public string Employment_Remarks { get; set; }

        public string Job_Role { get; set; }

        public bool IsSameEmployer { get; set; }

        public string SalaryStatus { get; set; }

        public string Current_Employer { get; set; }

        //create master data for job enguagement
        public int JobengagementID { get; set; }

        public int MonitorID { get; set; }

        public bool IsSimilarCapacity { get; set; }

        public int monitorPeriodId { get; set; }

        public int? EmployementAddressId { get; set; }

        public bool Contactable { get; set; }

        public bool IsEmployee { get; set; }

        public string CurrentEmployer { get; set; }

        public string JobStartedDate { get; set; }

        public decimal MonthlyIncome { get; set; }

        public decimal DailyIncome { get; set; }

        public bool IsSameEmployerCTG { get; set; }

        public bool IsSameSameEmployerCPM { get; set; }

        public string HowJobFound { get; set; }

        public string AnyRequestNeed { get; set; }

        public string Situation { get; set; }

        public string Note { get; set; }

        public bool IsSimilarCapasityComparedToGSBS { get; set; }

        public bool IsSimilarCapasityComparedToPreviousMonitor { get; set; }

        public string IncomStatusComparedtoGSBS { get; set; }

        public string IncomeStatusComparedtoPM { get; set; }

        public string CurrentJob { get; set; }

        public Address address { get; set; }

        public ICollection<EmployeeMonitorImages> employeeMonitorImages { get; set; }

        public ICollection<EmployeeMonitorDocuments> employeeMonitorDocuments { get; set; }

        public ICollection<EmployeeMonitorVideos> employeeMonitorVideos { get; set; }

        public JobEngagement jobengagement { get; set; }

        public Person Person { get; set; }
        public Employment_Status EmploymentStatus { get; set; }

        public Employment_Type EmploymentType { get; set; }


        public Monitor monitor { get; set; }


        public MonitorPerioid monitorPeriod { get; set; }
    }

}
