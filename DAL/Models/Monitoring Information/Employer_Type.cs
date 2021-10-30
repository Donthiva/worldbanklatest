using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class Employer_Type : AuditableEntity
    {
        public int Employer_Type_ID { get; set; }
        public string Employer_Type_Description { get; set; }

        public string Employer_Type_Name { get; set; }
    }
}
