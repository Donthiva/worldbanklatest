using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class Training : AuditableEntity
    {
        
        public int Training_ID { get; set; }
        //foreign key of person
        public int? Training_Person_ID { get; set; }
        public bool Training_Need { get; set; }
        //foreign key of Training Type
        public int Training_Type { get; set; }
        public string DS_office { get; set; }

        public DateTime TrainingDate { get; set; }

        public string TrainigPeriod { get; set; }

        public string TrainigOrganization { get; set; }

        public bool IsEmployed { get; set; }

        public string SalaryStatus { get; set; }

        //drop  down
        public string Status { get; set; }

        public string Description { get; set; }

        public bool IsEmployedSectorRelated { get; set; }

        public bool SocialRecognition { get; set; }

        public bool IsFamilyMemberInvolved { get; set; }

        public bool IsFamilyMemberCompletedTraining { get; set; }

        public string TrainingDoneBy { get; set; }

        public string Note { get; set; }

        public Person Person { get; set; }

        public Training_Type TrainingType { get; set; }

    }
}
