using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models;
using DAL.Models.Monitoring_Information;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace QuickApp.Controllers
{

    [Route("api/[controller]")]
    public class MonitorController : Controller
    {



        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;

        private readonly IEmploymentRepository _employee;
        private readonly IJobEngagementRepository _engagement;

        private readonly IEmploymentStatusRepository _employementStatus;

        private readonly IEmployerTypeRepository _employerTypes;

        private readonly IThreeWheelRepository _threeWheelRepo;

        private readonly IPhaseOutRepository _phaseOutRepo;

        private readonly IEmployerDocumentRepo _EmployerDocumentRepo;

        private readonly IEmployerVideoRepo _EmployerVideoRepo;

        private readonly IEmployerImageRepo _EmployerImageRepo;

        private readonly IBusinessDocumentRepo _BusinessDocumentRepo;

        private readonly IBusinessImageRepo _BusinessImageRepo;

        private readonly IBusinessVideoRepo _BusinessVideoRepo;



        private readonly IThreeWheelDocomentRepo _ThreeWheelDocomentRepo;

        private readonly IThreeWheelImagesRepo _ThreeWheelImagesRepo;

        private readonly IThreeWheelVideoRepo _ThreeWheelVideoRepo;



        private readonly IPhaseOutDocumentRepo _PhaseOutDocumentRepo;

        private readonly IPhaseOutImagesRepo _PhaseOutImagesRepo;

        private readonly IPhaseOutVideoRepo _PhaseOutVideoRepo;



        public MonitorController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<CustomerController> logger, IEmploymentRepository employee, 
            IJobEngagementRepository engagement, IEmploymentStatusRepository employementStatus, IEmployerTypeRepository employerTypes,
            IThreeWheelRepository threeWheelRepo, IPhaseOutRepository phaseOutRepo,IEmployerDocumentRepo EmployerDocumentRepo, 
            IEmployerVideoRepo EmployerVideoRepo, IEmployerImageRepo EmployerImageRepo,
           IBusinessDocumentRepo BusinessDocumentRepo, IBusinessImageRepo BusinessImageRepo, IBusinessVideoRepo BusinessVideoRepo,
           IThreeWheelDocomentRepo ThreeWheelDocomentRepo, IThreeWheelImagesRepo ThreeWheelImagesRepo, IThreeWheelVideoRepo ThreeWheelVideoRepo, IPhaseOutDocumentRepo PhaseOutDocumentRepo, IPhaseOutImagesRepo PhaseOutImagesRepo, IPhaseOutVideoRepo PhaseOutVideoRepo
            )
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _employee = employee;
            _engagement = engagement;
            _employementStatus = employementStatus;
            _employerTypes = employerTypes;
            _threeWheelRepo = threeWheelRepo;
            _phaseOutRepo = phaseOutRepo;

            _EmployerDocumentRepo = EmployerDocumentRepo;
            _EmployerVideoRepo = EmployerVideoRepo;
            _EmployerImageRepo = EmployerImageRepo;
            _BusinessDocumentRepo = BusinessDocumentRepo;
            _BusinessImageRepo = BusinessImageRepo;
            _BusinessVideoRepo = BusinessVideoRepo;




       _ThreeWheelDocomentRepo = ThreeWheelDocomentRepo;

         _ThreeWheelImagesRepo = ThreeWheelImagesRepo;

         _ThreeWheelVideoRepo = ThreeWheelVideoRepo;



        _PhaseOutDocumentRepo = PhaseOutDocumentRepo;

         _PhaseOutImagesRepo = PhaseOutImagesRepo;

         _PhaseOutVideoRepo = PhaseOutVideoRepo;

    }


        [HttpPost("AddEmployeeMonitor")]
        public async Task<IActionResult> AddEmployeeMonitor([FromForm] string jsonString)
        {

            var result = JsonConvert.DeserializeObject<Employment>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<EmployeeMonitorImages> employeeMonitorImages = new List<EmployeeMonitorImages>();
            List<EmployeeMonitorDocuments> employeeMonitorDocuments = new List<EmployeeMonitorDocuments>();
            List<EmployeeMonitorVideos> employeeMonitorVideos = new List<EmployeeMonitorVideos>();




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


                        EmployeeMonitorDocuments apdocs = new EmployeeMonitorDocuments();

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


                        EmployeeMonitorImages apImages = new EmployeeMonitorImages();

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


                        EmployeeMonitorVideos apVideos = new EmployeeMonitorVideos();

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

                result.employeeMonitorImages = employeeMonitorImages;
                result.employeeMonitorDocuments = employeeMonitorDocuments;
                result.employeeMonitorVideos = employeeMonitorVideos;


            }

            var val = await  _employee.AddAsync(result);
            return Ok(val);

        }



        [HttpPost("UpdateEmployeeMonitor")]
        public async Task<IActionResult> UpdateEmployeeMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<Employment>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<EmployeeMonitorImages> employeeMonitorImages = new List<EmployeeMonitorImages>();
            List<EmployeeMonitorDocuments> employeeMonitorDocuments = new List<EmployeeMonitorDocuments>();
            List<EmployeeMonitorVideos> employeeMonitorVideos = new List<EmployeeMonitorVideos>();




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


                        EmployeeMonitorDocuments apdocs = new EmployeeMonitorDocuments();

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


                        EmployeeMonitorImages apImages = new EmployeeMonitorImages();

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


                        EmployeeMonitorVideos apVideos = new EmployeeMonitorVideos();

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

                if(employeeMonitorImages.Count > 0)
                {
                    employeeMonitorImages.ForEach(x => result.employeeMonitorImages.Add(x));

                }

                if(employeeMonitorDocuments.Count > 0)
                {
                    employeeMonitorDocuments.ForEach(x => result.employeeMonitorDocuments.Add(x));
                }

                if(employeeMonitorVideos.Count > 0)
                {
                    employeeMonitorVideos.ForEach(x => result.employeeMonitorVideos.Add(x));
                }

               
          


            }


            var val = await _employee.UpdateAsync(result);
            return Ok(val);

        }

        [HttpGet("GetAllEmployeeMonitorImages/{empId:int}")]
        public async Task<IActionResult> GetAllJobEngagement(int empId)
        {

            EmployeeDocsTransferModel emp = new EmployeeDocsTransferModel();

            var empdocs  =   await _EmployerDocumentRepo.GetAllasync();

            var empimgs = await _EmployerImageRepo.GetAllasync();

            var empvds = await _EmployerVideoRepo.GetAllasync();


            emp.employeeMonitorDocuments = empdocs.Where(x => x.EmployeeMonitorId == empId).ToList();

            emp.employeeMonitorImages = empimgs.Where(x => x.EmployeeMonitorId == empId).ToList();

            emp.employeeMonitorVideos = empvds.Where(x => x.EmployeeMonitorId == empId).ToList();

        
            return Ok(emp);

        }


        [HttpGet("GetAllBusinessImages/{empId:int}")]
        public async Task<IActionResult> GetAllPhaseOutMonitorImages(int empId)
        {

            BusinessDocsTransferModel busi = new BusinessDocsTransferModel();

            var empdocs = await _BusinessDocumentRepo.GetAllasync();

            var empimgs = await _BusinessImageRepo.GetAllasync();

            var empvds = await _BusinessVideoRepo.GetAllasync();


            busi.businessMonitorDocuments = empdocs.Where(x => x.EmployeeMonitorId == empId).ToList();

            busi.businessMonitorImages = empimgs.Where(x => x.EmployeeMonitorId == empId).ToList();

            busi.businessMonitorVideos = empvds.Where(x => x.EmployeeMonitorId == empId).ToList();


            return Ok(busi);

        }


        [HttpGet("GetAllThreeWheelImages/{empId:int}")]
        public async Task<IActionResult> GetAllThreeWheelImages(int empId)
        {

            ThreeWheelDocsTransferModel three = new ThreeWheelDocsTransferModel();

            var empdocs = await _ThreeWheelDocomentRepo.GetAllasync();

            var empimgs = await _ThreeWheelImagesRepo.GetAllasync();

            var empvds = await _ThreeWheelVideoRepo.GetAllasync();



            three.threeWheelMonitorDocuments = empdocs.Where(x => x.EmployeeMonitorId == empId).ToList();

            three.threeWheelMonitorImages = empimgs.Where(x => x.EmployeeMonitorId == empId).ToList();

            three.threeWheelMonitorVideos = empvds.Where(x => x.EmployeeMonitorId == empId).ToList();


            return Ok(three);

        }




        [HttpGet("GetAllPhaseOutImages/{empId:int}")]
        public async Task<IActionResult> GetAllPhaseOutImages(int empId)
        {

            PhaseOutDocsTransferModel phase = new PhaseOutDocsTransferModel();

            var empdocs = await _PhaseOutDocumentRepo.GetAllasync();

            var empimgs = await _PhaseOutImagesRepo.GetAllasync();

            var empvds = await _PhaseOutVideoRepo.GetAllasync();





            phase.phaseOutMonitorDocuments = empdocs.Where(x => x.EmployeeMonitorId == empId).ToList();

            phase.phaseOutMonitorImages = empimgs.Where(x => x.EmployeeMonitorId == empId).ToList();

            phase.phaseOutMonitorVideos = empvds.Where(x => x.EmployeeMonitorId == empId).ToList();


            return Ok(phase);

        }






        [HttpPost("DeleteImagesMonitor/{Id:int}/{type:int}")]
        public async void DeleteImages(int Id, int type)
        {

            if(type == 1)
            {
              var entity =   _EmployerDocumentRepo.Get(Id);

              _EmployerDocumentRepo.Remove(entity);

            }else if(type == 2)
            {
                var entity = _EmployerVideoRepo.Get(Id);

                _EmployerVideoRepo.Remove(entity);
            }
            else
            {
                var entity = _EmployerImageRepo.Get(Id);

                _EmployerImageRepo.Remove(entity);
            }


        }


        [HttpPost("DeleteBusinessImagesMonitor/{Id:int}/{type:int}")]
        public async void DeleteBusinessImagesMonitor(int Id, int type)
        {

            if (type == 1)
            {
                var entity = _BusinessDocumentRepo.Get(Id);

                _BusinessDocumentRepo.Remove(entity);

            }
            else if (type == 2)
            {
                var entity = _BusinessVideoRepo.Get(Id);

                _BusinessVideoRepo.Remove(entity);
            }
            else
            {
                var entity = _BusinessImageRepo.Get(Id);

                _BusinessImageRepo.Remove(entity);
            }


        }




        [HttpGet("GetAllJobEngagement")]
        public async Task<IActionResult> GetAllJobEngagement()
        {

            var val = await _engagement.GetAllasync();
            return Ok(val);

        }



        [HttpGet("GetAllEmployeeData")]
        public async Task<IActionResult> GetAllEmployeeData()
        {

            var val = await _employee.getallPersonData();
            return Ok(val);

        }

       
        [HttpGet("GetAllEmployementStatus")]
        public async Task<IActionResult> GetAllEmployementStatus()
        {

            var val = await _employementStatus.GetAllasync();
            return Ok(val);

        }


        [HttpGet("GetAllEmployerTypes")]
        public async Task<IActionResult> GetAllEmployerTypes()
        {

            var val = await _employerTypes.GetAllasync();
            return Ok(val);

        }



        [HttpPost("AddThreeWheelMonitor")]
        public async Task<IActionResult> AddThreeWheelMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<ThreeWheeler>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<ThreeWheelMonitorImages> threewheelMonitorImages = new List<ThreeWheelMonitorImages>();
            List<ThreeWheelMonitorDocuments> threewheelMonitorDocuments = new List<ThreeWheelMonitorDocuments>();
            List<ThreeWheelMonitorVideos> threewheelMonitorVideos = new List<ThreeWheelMonitorVideos>();




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


                        ThreeWheelMonitorDocuments apdocs = new ThreeWheelMonitorDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        threewheelMonitorDocuments.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {


                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ThreeWheelMonitorImages apImages = new ThreeWheelMonitorImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        threewheelMonitorImages.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ThreeWheelMonitorVideos apVideos = new ThreeWheelMonitorVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        threewheelMonitorVideos.Add(apVideos);


                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }

                result.threeWheelMonitorImages = threewheelMonitorImages;
                result.threeWheelMonitorDocuments = threewheelMonitorDocuments;
                result.threeWheelMonitorVideos = threewheelMonitorVideos;


            }

            var val = await _threeWheelRepo.AddAsync(result);
            return Ok(val);


        }


        [HttpGet("GetThreeWheelMonitor")]
        public async Task<IActionResult> GetThreeWheelMonitor()
        {

            var val = await _threeWheelRepo.getallThreeWheelMonitor();
            return Ok(val);

        }


        [HttpPost("UpdateThreeWheelMonitor")]
        public async Task<IActionResult> UpdateThreeWheelMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<ThreeWheeler>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<ThreeWheelMonitorImages> threewheelMonitorImages = new List<ThreeWheelMonitorImages>();
            List<ThreeWheelMonitorDocuments> threewheelMonitorDocuments = new List<ThreeWheelMonitorDocuments>();
            List<ThreeWheelMonitorVideos> threewheelMonitorVideos = new List<ThreeWheelMonitorVideos>();




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


                        ThreeWheelMonitorDocuments apdocs = new ThreeWheelMonitorDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        threewheelMonitorDocuments.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {


                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ThreeWheelMonitorImages apImages = new ThreeWheelMonitorImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        threewheelMonitorImages.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ThreeWheelMonitorVideos apVideos = new ThreeWheelMonitorVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        threewheelMonitorVideos.Add(apVideos);


                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }

                result.threeWheelMonitorImages = threewheelMonitorImages;
                result.threeWheelMonitorDocuments = threewheelMonitorDocuments;
                result.threeWheelMonitorVideos = threewheelMonitorVideos;


            }

           
            var val = await _threeWheelRepo.UpdateAsync(result);
            return Ok(val);


        }



        [HttpPost("AddPhaseOutMonitor")]
        public async Task<IActionResult> AddPhaseOutMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<phaseOut>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<PhaseOutMonitorImages> phaseOutMonitorImages = new List<PhaseOutMonitorImages>();
            List<PhaseOutMonitorDocuments> phaseOutMonitorDocuments = new List<PhaseOutMonitorDocuments>();
            List<PhaseOutMonitorVideos> phaseOutMonitorVideos = new List<PhaseOutMonitorVideos>();




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


                        PhaseOutMonitorDocuments apdocs = new PhaseOutMonitorDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        phaseOutMonitorDocuments.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {


                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        PhaseOutMonitorImages apImages = new PhaseOutMonitorImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        phaseOutMonitorImages.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        PhaseOutMonitorVideos apVideos = new PhaseOutMonitorVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        phaseOutMonitorVideos.Add(apVideos);


                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }

                result.phaseOutMonitorImages = phaseOutMonitorImages;
                result.phaseOutMonitorDocuments = phaseOutMonitorDocuments;
                result.phaseOutMonitorVideos = phaseOutMonitorVideos;


            }

            var val = await _phaseOutRepo.AddAsync(result);
            return Ok(val);



        }



        [HttpGet("GetPhaseOutMonitor")]
        public async Task<IActionResult> GetPhaseOutMonitor()
        {

            var val = await _phaseOutRepo.getallPhaseOutMonitor();
            return Ok(val);

        }


        [HttpPost("UpdatePhaseOutMonitor")]
        public async Task<IActionResult> UpdatePhaseOutMonitor([FromForm] string jsonString)
        {
            var result = JsonConvert.DeserializeObject<phaseOut>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath, "assets");
            string newdbPath = "assets";

            List<PhaseOutMonitorImages> phaseOutMonitorImages = new List<PhaseOutMonitorImages>();
            List<PhaseOutMonitorDocuments> phaseOutMonitorDocuments = new List<PhaseOutMonitorDocuments>();
            List<PhaseOutMonitorVideos> phaseOutMonitorVideos = new List<PhaseOutMonitorVideos>();




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


                        PhaseOutMonitorDocuments apdocs = new PhaseOutMonitorDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        phaseOutMonitorDocuments.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {


                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        PhaseOutMonitorImages apImages = new PhaseOutMonitorImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        phaseOutMonitorImages.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        PhaseOutMonitorVideos apVideos = new PhaseOutMonitorVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        phaseOutMonitorVideos.Add(apVideos);


                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }

                result.phaseOutMonitorImages = phaseOutMonitorImages;
                result.phaseOutMonitorDocuments = phaseOutMonitorDocuments;
                result.phaseOutMonitorVideos = phaseOutMonitorVideos;


            }

            var val = await _phaseOutRepo.UpdateAsync(result);
            return Ok(val);

        }

    }
}