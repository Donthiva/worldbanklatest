using DAL.Models.Customer_Related;
using DAL.Models.Genaral;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class BusinessType
    {
        public int Id { get; set; }

        public string BusinessTypeName { get; set; }

        public ICollection<Business> Business { get; set; }

        public ICollection<BusinessGeneral> businessGeneral { get; set; }
    }
}
