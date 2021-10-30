using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
     public class EmployeeMonitorImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Employment employee { get; set; }
    }


    public class EmployeeMonitorDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Employment employee { get; set; }
    }


    public class EmployeeMonitorVideos
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Employment employee { get; set; }
    }
}
