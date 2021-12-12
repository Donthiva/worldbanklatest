using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Graph
{
  public  class DeliverableOutput1DataModel
    {
        public string Nature_of_previous_business { get; set; }

        public int Number_of_APs { get; set; }

        public int Lower_income { get; set; }

        public int equal { get; set; }

        public int Higher { get; set; }

        public int Relocated_currently_not_operating { get; set; }
    }

    public class DeliverableOutput2DataModel
    {
        public int Total_number_of_businesses { get; set; }

        public int Improved_businesses { get; set; }

        public int Non_improved_business { get; set; }


    }
}
