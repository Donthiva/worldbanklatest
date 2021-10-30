using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
    public class Address : AuditableEntity
    {
        public int Address_ID { get; set; }
        //foreging key from person related 
        public int Adress_Owner_ID { get; set; }
        //foreign key from address owner type
        public int Adress_Owner_Type { get; set; }
        public string Address_Number { get; set; }

        public string Address_Street1 { get; set; }
        public string Address_Street2 { get; set; }

        public double CordinateX { get; set; }

        public double CordinateY { get; set; }

        public int cityId { get; set; }

        public int districtId { get; set; }

        public int statesId { get; set; }

        public int countryId { get; set; }

        public string Longitude { get; set; }

        public string Latitude { get; set; }


        public City city { get; set; }

        public District district { get; set; }

        public States States { get; set; }

        public Country Country { get; set; }


        public Person Person { get; set; }

        public Business business { get; set; }

        public Employment employment { get; set; }

        //public Business Business { get; set; }

    }
}
