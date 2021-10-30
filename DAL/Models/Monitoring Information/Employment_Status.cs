using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class Employment_Status : AuditableEntity
    {
        public int Employment_Status_ID { get; set; }

        public string Status { get; set; }

        public string Status_Description { get; set; }


        public ICollection<Employment> Employment { get; set; }
    }
}
