using DAL.Models.Customer_Related;
using DAL.Models.Genaral;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class Business_Plan : AuditableEntity
    {
        public int Buiness_Plan_ID { get; set; }
        public string Buiness_Plan_Description { get; set; }
    

        public ICollection<BusinessGeneral> businessGeneral { get; set; }
    }
}
