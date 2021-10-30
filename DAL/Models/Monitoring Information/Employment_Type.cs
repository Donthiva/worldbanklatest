using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class Employment_Type : AuditableEntity
    {
        public int Employment_Type_ID { get; set; }
        public string Employment_Type_Description { get; set; }

        public string Employment_Type_Name { get; set; }

        public ICollection<Employment> Employment { get; set; }
    }
}
