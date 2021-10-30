using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
    public class TrainingModelMultiple
    {



  

        public bool Training_Need { get; set; }

        public int Training_Type { get; set; }

        public string DS_office { get; set; }

        public string TrainingDate { get; set; }

        public string TrainigPeriod { get; set; }

        public string TrainigOrganization { get; set; }

        public bool IsEmployed { get; set; }

        public string SalaryStatus { get; set; }

        public string Status { get; set; }

        public string Description { get; set; }

        public bool IsEmployedSectorRelated { get; set; }

        public bool SocialRecognition { get; set; }

        public bool IsFamilyMemberInvolved { get; set; }

        public bool IsFamilyMemberCompletedTraining { get; set; }

        public string TrainingDoneBy { get; set; }

        public string Note { get; set; }

        public List<int> PersonList { get; set; }


    }
}
