using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Businees_Related
{
   public class MachinaryEquipment
    {
        public int Id { get; set; }

        public int BusinessId { get; set; }
        public string Status { get; set; }

        public string Note { get; set; }

        public double number { get; set; }

        public Business business { get; set; }
    }
}
