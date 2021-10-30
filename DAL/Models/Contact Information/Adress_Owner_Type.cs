using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
    public class Adress_Owner_Type : AuditableEntity
    {
        public int Adress_Owner_Type_ID { get; set; }
        public string Adress_Owner_Type_Description { get; set; }
   
    }
}
