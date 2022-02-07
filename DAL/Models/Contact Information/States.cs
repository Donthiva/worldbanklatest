using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
    public class States :AuditableEntity
    {
        public int States_ID { get; set; }
        public string States_Name { get; set; }
        //foreign key from country
        public int States_Country_ID { get; set; }

        public int? districtId { get; set; }

        public ICollection<Address> address { get; set; }

        public ICollection<City> city { get; set; }

        public Country country { get; set; }

        public ICollection<District> district { get; set; }

    }
}
