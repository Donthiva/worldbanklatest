using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
    public  class City :AuditableEntity
    {
        public int City_ID { get; set; }
        public string City_Name { get; set; }
        //foreign key from coutry 
        public int City_Country_ID { get; set; }
        // foreign key from states
        public int City_States_ID { get; set; }
        //foreign key from District
        public int City_District_ID { get; set; }

        public District district { get; set; }

        public States States { get; set; }

        public Country Country { get; set; }

        public ICollection<Address> address { get; set; }

    


    }
}
