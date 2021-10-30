using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Bank_Information
{
    public class Bank_Type : AuditableEntity
    {
        public int Id{ get; set; }
        public string BankTypeName { get; set; }
        public string Bank_Type_Description { get; set; }

        public ICollection<Bank> bank { get; set; }

    }
}
