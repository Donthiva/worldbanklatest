using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
   public class PhaseOutMonitorImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public phaseOut PhaseOut { get; set; }
    }


    public class PhaseOutMonitorDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public phaseOut PhaseOut { get; set; }
    }

    public class PhaseOutMonitorVideos
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public phaseOut PhaseOut { get; set; }
    }
}
