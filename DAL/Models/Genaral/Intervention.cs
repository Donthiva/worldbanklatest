using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
     public class Intervention
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }


        public int TypeOfEventId { get; set; }

        public string NameOfEvent { get; set; }

        public string BriefDescription { get; set; }

        public string MainStakeholdersParticipated { get; set; }

        public int ApCategoryId { get; set; }

        public int NumberOfParticipants { get; set; }

        public List<EventwiseParticipants> Participants { get; set; }
    }
}
