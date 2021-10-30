using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Bank_Information
{
    public class Bank : AuditableEntity
    {
        public int Bank_ID { get; set; }
        public string Bank_Name { get; set; }
        //foreign key from bank types
        public int Bank_Type { get; set; }
        public ICollection<Bank_Account> Bank_Account { get; set; }
        public ICollection<Bank_Branch> Branch { get; set; }

        public Bank_Type bankType { get; set; }


    }
}
