using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Genaral
{
   public class EventwiseParticipants
    {
        public int Id { get; set; }

        public int EventId  { get; set; }

        public int ParticipantId { get; set; }

        public Intervention Interventions { get; set; }
    }
}
