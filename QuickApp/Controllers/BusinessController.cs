using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models;
using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class BusinessController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;


        IBusinessTypeRepsitory _businessTypeRepo;
        IBusinessPlanRepsitory _businessPlan;
        IBusinessRepository _businessRepository;
        IBusinessManagementModeRepository _businessMangementMode;
        public BusinessController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<CustomerController> logger, IBusinessTypeRepsitory businessTypeRepo, IBusinessPlanRepsitory businessPlan,IBusinessRepository businessRepository, IBusinessManagementModeRepository businessMangementMode)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;

            _businessTypeRepo = businessTypeRepo;
            _businessPlan = businessPlan;
            _businessRepository = businessRepository;

            _businessMangementMode = businessMangementMode;
        }



        [HttpGet("GetAllBusinessTypes")]
        public async Task<IActionResult> GetAllBusinessTypes()
        {

            var data = await _businessTypeRepo.GetAllasync();
            return Ok(data);
        }



        [HttpGet("GetAllBusinessPlans")]
        public async Task<IActionResult> GetAllBusinessPlans()
        {

            var data = await _businessPlan.GetAllasync();
            return Ok(data);
        }


        // delete bank types
        [HttpPost("AddBusinessMonitor")]
        public async Task<IActionResult> AddBusinessMonitor([FromForm] string jsonString)
        {
            try
            {


                var result = JsonConvert.DeserializeObject<Business>(jsonString);

                var formCollection = await Request.ReadFormAsync();

                string webRootPath = Directory.GetCurrentDirectory();
                string newPath = Path.Combine(webRootPath, "assets");
                string newdbPath = "assets";

                List<BusinessMonitorImages> employeeMonitorImages = new List<BusinessMonitorImages>();
                List<BusinessMonitorDocuments> employeeMonitorDocuments = new List<BusinessMonitorDocuments>();
                List<BusinessMonitorVideos> employeeMonitorVideos = new List<BusinessMonitorVideos>();




                if (formCollection.Files.Count > 0)
                {
                    for (int i = 0; i < formCollection.Files.Count; i++)
                    {
                        var fileName = ContentDispositionHeaderValue.Parse(formCollection.Files[i].ContentDisposition).FileName.Trim('"');
                        var fullPathsub = Path.Combine(newPath, fileName);

                        var fulldbpathsub = Path.Combine(newdbPath, fileName);

                        string fileExt = System.IO.Path.GetExtension(formCollection.Files[i].FileName).ToLower();

                        string fullPath = "";

                        string fullPathsubtype = "";

                        string fullPathsubtypedb = "";

                        string fullPathdbFileName = "";

                        string fullPathfilename = "";


                        if (fileExt == ".pdf" || fileExt == ".docx" || fileExt == ".xlsx")
                        {

                            fullPathsubtype = Path.Combine(newPath, "docs");

                            fullPathsubtypedb = Path.Combine(newdbPath, "docs");

                            fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                            fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                            BusinessMonitorDocuments apdocs = new BusinessMonitorDocuments();

                            apdocs.Path = fullPathdbFileName;

                            apdocs.FileType = fileExt;
                            apdocs.FileName = fileName;

                            employeeMonitorDocuments.Add(apdocs);


                        }
                        else if (fileExt == ".png" || fileExt == ".jpg")
                        {


                            fullPathsubtype = Path.Combine(newPath, "images");

                            fullPathsubtypedb = Path.Combine(newdbPath, "images");

                            fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                            fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                            BusinessMonitorImages apImages = new BusinessMonitorImages();

                            apImages.Path = fullPathdbFileName;

                            apImages.FileType = fileExt;
                            apImages.FileName = fileName;

                            employeeMonitorImages.Add(apImages);
                        }
                        else
                        {

                            fullPathsubtype = Path.Combine(newPath, "videos");

                            fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                            fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                            fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                            BusinessMonitorVideos apVideos = new BusinessMonitorVideos();

                            apVideos.Path = fullPathdbFileName;

                            apVideos.FileType = fileExt;
                            apVideos.FileName = fileName;

                            employeeMonitorVideos.Add(apVideos);


                        }

                        using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                        {
                            formCollection.Files[i].CopyTo(stream);
                        }
                    }

                    result.businessMonitorImages = employeeMonitorImages;
                    result.businessMonitorDocuments = employeeMonitorDocuments;
                    result.businessMonitorVideos = employeeMonitorVideos;
                    


                }

                var val = await _businessRepository.AddAsync(result);
                return Ok(val);
            }
            catch (Exception ex)
            {
                DataTransModel mm = new DataTransModel();
                mm.Status = 500;
                var x = ex;
                return Ok(mm);
            }

        }




        [HttpGet("GetAllBusinessMonitors")]
        public async Task<IActionResult> GetAllBusinessMonitors()
        {

            var data = await _businessRepository.getallBusinessMonitor();
            return Ok(data);
        }



        [HttpPost("UpdateBusinessMonitor")]
        public async Task<IActionResult> UpdateBusinessMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<Business>(jsonString); 

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<BusinessMonitorImages> employeeMonitorImages = new List<BusinessMonitorImages>();
            List<BusinessMonitorDocuments> employeeMonitorDocuments = new List<BusinessMonitorDocuments>();
            List<BusinessMonitorVideos> employeeMonitorVideos = new List<BusinessMonitorVideos>();




            if (formCollection.Files.Count > 0)
            {
                for (int i = 0; i < formCollection.Files.Count; i++)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(formCollection.Files[i].ContentDisposition).FileName.Trim('"');
                    var fullPathsub = Path.Combine(newPath, fileName);

                    var fulldbpathsub = Path.Combine(newdbPath, fileName);

                    string fileExt = System.IO.Path.GetExtension(formCollection.Files[i].FileName).ToLower();

                    string fullPath = "";

                    string fullPathsubtype = "";

                    string fullPathsubtypedb = "";

                    string fullPathdbFileName = "";

                    string fullPathfilename = "";


                    if (fileExt == ".pdf" || fileExt == ".docx" || fileExt == ".xlsx")
                    {

                        fullPathsubtype = Path.Combine(newPath, "docs");

                        fullPathsubtypedb = Path.Combine(newdbPath, "docs");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        BusinessMonitorDocuments apdocs = new BusinessMonitorDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        employeeMonitorDocuments.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {


                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        BusinessMonitorImages apImages = new BusinessMonitorImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        employeeMonitorImages.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        BusinessMonitorVideos apVideos = new BusinessMonitorVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        employeeMonitorVideos.Add(apVideos);


                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }

                result.businessMonitorImages = employeeMonitorImages;
                result.businessMonitorDocuments = employeeMonitorDocuments;
                result.businessMonitorVideos = employeeMonitorVideos;


            }

            var data = await _businessRepository.UpdateAsync(result);
            return Ok(data);
        }



        [HttpGet("GetAllBusinessManagementModes")]
        public async Task<IActionResult> GetAllBusinessManagementModes()
        {

            var data = await _businessMangementMode.GetAllasync();
            return Ok(data);
        }

    }
}