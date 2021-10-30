using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
    public class ContactsType : AuditableEntity
    {
        public int Id { get; set; }
        public string ContactType { get; set; }
    
    }
}
