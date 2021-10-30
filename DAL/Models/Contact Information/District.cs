using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
   public class District :AuditableEntity
    {
        public int District_ID { get; set; }
        public string District_Name { get; set; }
        public int District_Country_ID { get; set; }
        //foreign key from states
        public int District_States_ID { get; set; }

        public Country country { get; set; }

        public ICollection<Address> address { get; set; }

        public ICollection<City> city { get; set; }

        public States state { get; set; }

     
    }
}
