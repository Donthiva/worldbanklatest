using DAL.Models.Bank_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Customer_Related
{
   public class Bank_Account : AuditableEntity
    {

        public int Bank_Account_ID { get; set; }
        //foreign key of Bank
        public int Bank_ID { get; set; }

        public int? PersonID { get; set; }

        public string Bank_Account_Number { get; set; }
        //foreign key of Bank account Type
        public int Bank_Account_Type_ID { get; set; }
        //foreign key of bank branch
        public int Bank_Branch_ID { get; set; }

        public Bank Bank { get; set; }

        public Person person { get; set; }

        public Bank_Account_Type BankAccountType { get; set; }

        public Bank_Branch Bank_Branch { get; set; }

    }
}
