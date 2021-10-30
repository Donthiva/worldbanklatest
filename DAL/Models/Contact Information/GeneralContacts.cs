using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Contact_Information
{
    public class GeneralContacts : AuditableEntity
    {
        public int Id { get; set; }

        public int ContactOwnerID { get; set; }

        public int ContactsOwnerType { get; set; }

        public int ContactsType { get; set; }

        public int Contacts_Information { get; set; }
    }
}
