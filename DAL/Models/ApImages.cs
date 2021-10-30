using DAL.Models.Customer_Related;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
     public  class ApImages
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }

    }

    public class ApDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }
    }

    public class ApVideos
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }
    }


    public class ApUserImage
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }
    }



    public class ApBusinessDocuments
    {
        public int Id { get; set; }

        public string Path { get; set; }

        public string FileName { get; set; }

        public string FileType { get; set; }

        public int? PersonId { get; set; }

        public Person person { get; set; }
    }
}
