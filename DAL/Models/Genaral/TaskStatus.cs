using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
    public class TaskStatus : AuditableEntity
    {
        public int Id { get; set; }

        public string Status { get; set; }
    }
}
