using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class BusinessStatus : AuditableEntity
    {
        public int Id { get; set; }

        public string Business_Status { get; set; }

        public string ColorCode { get; set; }

        public string description { get; set; }

      
    }
}
