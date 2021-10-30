using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Bank_Information
{
   public class Bank_Account_Type : AuditableEntity
    {
        public int Bank_Account_Type_ID { get; set; }
        public string Type { get; set; }
        public string Bank_Account_Type_Description { get; set; }

        public ICollection<Bank_Account> Bank_Account { get; set; }
    }
}
