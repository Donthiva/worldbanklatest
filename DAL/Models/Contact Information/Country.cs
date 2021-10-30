using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
   public class Country : AuditableEntity
    {
        public int Country_ID { get; set; }
        public string Country_Name { get; set; }

        public ICollection<Address> address { get; set; }

        public ICollection<City> city { get; set; }

        public ICollection<States> states { get; set; }

        public ICollection<District> district { get; set; }

    }
}
