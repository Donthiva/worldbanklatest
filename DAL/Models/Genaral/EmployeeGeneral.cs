using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
     public class EmployeeGeneral
    {
        public int Id { get; set; }

        public string JobRole { get; set; }

        public string Employer { get; set; }

        public double Salary { get; set; }

        public string EmployeeRealocatedMonthandYear { get; set; }

        public string EmployeeBusinessLivelihoodRealocation { get; set; }

        public string EmployeeSpecialNotes { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }

    }
}
