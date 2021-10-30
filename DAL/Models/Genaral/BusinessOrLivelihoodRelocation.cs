using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models.Genaral
{
   public class BusinessOrLivelihoodRelocation
    {
      
        public int Id { get; set; }

        public string name { get; set; }

        public ICollection<Person> Persons { get; set; }



    }
}
