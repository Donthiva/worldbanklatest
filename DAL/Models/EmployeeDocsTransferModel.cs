using DAL.Models.Monitoring_Information;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class EmployeeDocsTransferModel
    {
        public ICollection<EmployeeMonitorDocuments> employeeMonitorDocuments { get; set; }

        public ICollection<EmployeeMonitorVideos> employeeMonitorVideos { get; set; }

        public ICollection<EmployeeMonitorImages> employeeMonitorImages { get; set; }
    }


    public class BusinessDocsTransferModel
    {
        public ICollection<BusinessMonitorDocuments> businessMonitorDocuments { get; set; }

        public ICollection<BusinessMonitorVideos> businessMonitorVideos { get; set; }

        public ICollection<BusinessMonitorImages> businessMonitorImages { get; set; }
    }



    public class ThreeWheelDocsTransferModel
    {
        public ICollection<ThreeWheelMonitorDocuments> threeWheelMonitorDocuments { get; set; }

        public ICollection<ThreeWheelMonitorVideos> threeWheelMonitorVideos { get; set; }

        public ICollection<ThreeWheelMonitorImages> threeWheelMonitorImages { get; set; }
    }


    public class PhaseOutDocsTransferModel
    {
        public ICollection<PhaseOutMonitorDocuments> phaseOutMonitorDocuments { get; set; }

        public ICollection<PhaseOutMonitorVideos> phaseOutMonitorVideos { get; set; }

        public ICollection<PhaseOutMonitorImages> phaseOutMonitorImages { get; set; }
    }


}
