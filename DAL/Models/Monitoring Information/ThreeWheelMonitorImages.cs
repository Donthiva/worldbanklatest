using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Monitoring_Information
{
  public  class ThreeWheelMonitorImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public ThreeWheeler ThreeWheel { get; set; }
    }

    public class ThreeWheelMonitorDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public ThreeWheeler ThreeWheel { get; set; }
    }

    public class ThreeWheelMonitorVideos
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int EmployeeMonitorId { get; set; }

        public ThreeWheeler ThreeWheel { get; set; }
    }
}
