using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Bank_Information
{
    public class Bank_Branch : AuditableEntity
    {
        public int Bank_Branch_ID { get; set; }
        //foreign key from address
        public int Bank_Branch_Adress { get; set; }
        public string Bank_Branch_Description { get; set; }
        public ICollection<Bank_Account> Bank_Account { get; set; }
        public int BankID { get; set; }
        public Bank bank { get; set; }



    }
}
