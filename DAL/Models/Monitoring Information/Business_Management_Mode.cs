using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class Business_Management_Mode : AuditableEntity
    {
        public int Business_Management_Mode_ID { get; set; }

        public string Business_Management_Mode_Description { get; set; }

        public ICollection<Business> Business { get; set; }
    }
}
