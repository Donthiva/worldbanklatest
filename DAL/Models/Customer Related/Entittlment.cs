using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Customer_Related
{
  public  class Entittlment : AuditableEntity
    {
        public int Entittlment_ID { get; set; }
        //foreign key of person
        public string Entittlment_Person_ID { get; set; }

        public double Entittlment_Sub_Total { get; set; }

        public double Entittlment_retention_10_percent { get; set; }
        public double Entittlment_Grand_Total { get; set; }


        public Person Person { get; set; }
    }
}
