using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class JobEngagement
    {
        public int Id { get; set; }

        public string engagement { get; set; }

        public ICollection<Employment> Employement { get; set; }

    }
}
