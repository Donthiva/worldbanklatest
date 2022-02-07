using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
    public class Person_Type : AuditableEntity
    {
        public int? Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Person_Type_ID { get; set; }

        public string Type { get; set; }

        public string Person_Type_Description { get; set; }

        public ICollection<Person> Persons { get; set; }
    }


    public class PreviousType 
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Person_Type_ID { get; set; }

        public string Type { get; set; }

        public string Person_Type_Description { get; set; }

    }
}
