using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
   public class Gender : AuditableEntity
    {
        public int User_Gender_ID { get; set; }
        public string User_Gender { get; set; }

        public ICollection<Person> Persons { get; set; }

    }
}
