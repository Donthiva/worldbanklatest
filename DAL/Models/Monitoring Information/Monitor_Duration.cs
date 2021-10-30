using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class Monitor_Duration : AuditableEntity
    {
        public int Monitor_Duratione_ID { get; set; }
        public DateTime Monitor_Duration_Start_date { get; set; }
        public DateTime Monitor_Duration_End_date { get; set; }
        public string Monitor_Duration_Description { get; set; }

        public ICollection<Monitor> Monitor { get; set; }
    }
}
