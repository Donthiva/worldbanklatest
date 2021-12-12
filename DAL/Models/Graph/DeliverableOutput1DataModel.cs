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

    public class DeliverableOutput3DataModel
    {
        public string Nature_of_previous_livelihood { get; set; }

        public int New_business_established { get; set; }

        public int Operating_with_stable_profit { get; set; }


    }

    public class DeliverableOutput4DataModel
    {
        public int Number_of_employees_at_GSBS { get; set; }

        public int Employed_with_the_same_employer { get; set; }

        public int Employed_with_the_new_employer { get; set; }

        public int Similar_or_higher_wages { get; set; }

        public int Lower_wages { get; set; }

        public int Engage_in_a_job { get; set; }

        public int Job_seeking { get; set; }

        public int Cannot_engage_in_a_job { get; set; }


    }

    public class DeliverableOutput5DataModel
    {
        public int Number_of_total_employments { get; set; }

        public int Employees_completed_vocational_trainings { get; set; }

        public int Family_members_of_the_employees_who_have_completed_the_vocational_trainings { get; set; }

        public int Employed_in_a_sector_related_to_their_training  { get; set; }

        public int Higher_wages { get; set; }

        public int Social_recognition { get; set; }


    }

    public class DeliverableOutput6DataModel
    {
        public int Number_of_businesses { get; set; }

        public int Diversified_businesses { get; set; }

        public int Scaled_up_businesses { get; set; }


    }

    public class DeliverableOutput8DataModel
    {
        public int Number_of_vulnerable_APs { get; set; }

        public int Family_social_support { get; set; }

        public int Improved_living_conditions { get; set; }

        public int No_improvement_or_stability { get; set; }


    }
}
