using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{

    public class BusinessMonitorImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Business business { get; set; }
    }


    public class BusinessMonitorDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Business business { get; set; }
    }


    public class BusinessMonitorVideos
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public Business business { get; set; }
    }
}
