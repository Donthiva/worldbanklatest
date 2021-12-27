using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Graph
{
  public  class TotalPopulationCrossTabulationsAPCategoryWisePercentage
    {
        public string fieldname { get; set; }

        public string Business { get; set; }

        public string MobileVendor { get; set; }

        public string Employee { get; set; }

        public string ThreeWheel { get; set; }

    }

    public class GenderWiseDataPercentage
    {
        public string fieldname { get; set; }

        public string Male { get; set; }

        public string Female { get; set; }
    }


    public class AgeWiseAPsCategories
    {
        public string fieldname { get; set; }

        public string MaleBelow35 { get; set; }

        public string FemaleBelow35 { get; set; }

        public string MaleBetween35to65 { get; set; }

        public string FemaleBetween35to65 { get; set; }

        public string MaleGreater65 { get; set; }

        public string FemaleGreater65 { get; set; }


    }

    public class VulnerableAPPercentage
    {
        public decimal percentage { get; set; }

        public int number { get; set; }

    }
}
