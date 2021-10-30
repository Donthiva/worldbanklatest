using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Customer_Related
{
    public class Business_Situation : AuditableEntity
    {

        public int Business_Situation_ID { get; set; }
        // Foreign Key of Person
        public int BS_Business_Person_ID { get; set; }

        public string BS_Precovid { get; set; }
        public string BS_Postcovid { get; set; }
        public string BS_New_Business_PostCovid { get; set; }
        public string Situation_of_the_business { get; set; }

        public Person Person { get; set; }
    }
}
