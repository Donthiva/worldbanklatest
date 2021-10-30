using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public  class Training_Type : AuditableEntity
    {

        public int Training_Type_ID { get; set; }
        public string Training_Type_Description { get; set; }

        public string Training_Type_Name { get; set; }

        public ICollection<Training> Training { get; set; }
    }
}
