using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.ViewModels;
using DAL;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using DAL.Models.Customer_Related;
using DAL.Models.Monitoring_Information;
using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.IO;
using static System.Net.WebRequestMethods;
using DAL.Models;
using DAL.Models.Genaral;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;

        private IPersonDataRepository  _personRepo;



        private IGenderRepository _gender;
        private IPersonTypeRepository _personType;

        private IPersonPreviousTypeRepository _personPreviousType;

        
        private IPersonRepository _person;

        private IVulnerabilityLevelRepository _vulnerabilityLevelRepository;

        private IVulnerabilityTypeRepository _vulnerabilityTypeRepository;

        private IVulnerabilityRepository _vulnerabilityRepository;

        private IVulnerabilityMonitorRepository _vulnerabilityMonitorRepository;





        private IEmploymentStatusRepository _employmentstatusrepo;
        private IEmploymentTypeRepository _employmenttyperepo;
        private IEmployerTypeRepository _employerTyperepo;

        private ITrainingTypeRepository _trainingtyperepo;
        private ITrainingRepository _trainingRepository;

        private IMonitorPeriodRepository _monitorPeriodRepository;


        private IEducationLevelRepositoy _educationLevelRepositoy;

        private IBusinessOrLivelihoodRelocationRepository _businessOrLivelihoodRelocationRepository;


        private IMartialStatusRepository _martialStatusRepository;


        public PersonController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<CustomerController> logger, IPersonDataRepository personRepo, IGenderRepository gender, IPersonTypeRepository personType, IPersonRepository person,
            IVulnerabilityLevelRepository vulnerabilityLevelRepository, IVulnerabilityTypeRepository vulnerabilityTypeRepository, IVulnerabilityRepository vulnerabilityRepository, IVulnerabilityMonitorRepository vulnerabilityMonitorRepository,
              IEmploymentStatusRepository employmentstatusrepo,
         IEmploymentTypeRepository employmenttyperepo,
         IEmployerTypeRepository employerTyperepo,
         IMonitorPeriodRepository monitorPeriodRepository,
         ITrainingTypeRepository trainingtyperepo,
         IPersonPreviousTypeRepository personPreviousType,
         IEducationLevelRepositoy educationLevelRepositoy,
         IBusinessOrLivelihoodRelocationRepository businessOrLivelihoodRelocationRepository,
         IMartialStatusRepository martialStatusRepository,
         ITrainingRepository trainingRepository)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _personRepo = personRepo;
            _gender = gender;
            _personType = personType;
            _person = person;
            _vulnerabilityLevelRepository = vulnerabilityLevelRepository;
            _vulnerabilityTypeRepository = vulnerabilityTypeRepository;
            _vulnerabilityRepository = vulnerabilityRepository;
            _vulnerabilityMonitorRepository = vulnerabilityMonitorRepository;

            _employmentstatusrepo = employmentstatusrepo;
            _employmenttyperepo = employmenttyperepo;
            _employerTyperepo = employerTyperepo;
            _trainingtyperepo = trainingtyperepo;

            _trainingRepository = trainingRepository;
            _monitorPeriodRepository = monitorPeriodRepository;

            _personPreviousType = personPreviousType;




           _educationLevelRepositoy = educationLevelRepositoy;

        _businessOrLivelihoodRelocationRepository = businessOrLivelihoodRelocationRepository;


        _martialStatusRepository = martialStatusRepository;
    }

        // delete bank types
        [HttpPost("AddPersonData"), DisableRequestSizeLimit]
        public async Task<IActionResult> AddPersonData([FromForm] string jsonString)
        {

            var result = JsonConvert.DeserializeObject<AddPersonDataViewModel>(jsonString);

            var formCollection = await Request.ReadFormAsync();

            string webRootPath = Directory.GetCurrentDirectory();
            string newPath = Path.Combine(webRootPath,"assets");
            string newdbPath = "assets";

            List<ApImages> apimageslist = new List<ApImages>();
            List<ApDocuments> apDocumentslist = new List<ApDocuments>();
            List<ApBusinessDocuments> apbusinessDocumentslist = new List<ApBusinessDocuments>();
            List<ApVideos> apVideoslist = new List<ApVideos>();
            ApUserImage userimage = new ApUserImage();



            if (formCollection.Files.Count > 0)
            {
                for (int i = 0; i < formCollection.Files.Count; i++)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(formCollection.Files[i].ContentDisposition).FileName.Trim('"');
                    var fullPathsub = Path.Combine(newPath, fileName);

                    var fulldbpathsub = Path.Combine(newdbPath, fileName);

                    string fileExt = System.IO.Path.GetExtension(formCollection.Files[i].FileName).ToLower();

                    string fullPath = "";

                    string fullPathsubtype ="";

                    string fullPathsubtypedb = "";

                    string fullPathdbFileName = "";

                    string fullPathfilename = "";


                    if ((fileExt == ".pdf" || fileExt == ".docx" || fileExt == ".xlsx") && formCollection.Files[i].Name == "BusinessFiles" && result.PersonType == 2)
                    {
                        fullPathsubtype = Path.Combine(newPath, "userimages");

                        fullPathsubtypedb = Path.Combine(newdbPath, "userimages");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ApBusinessDocuments apb = new ApBusinessDocuments();
                        apb.FileName = fileName;

                        apb.FileType = fileExt;

                        apb.Path = fullPathdbFileName;


                        apbusinessDocumentslist.Add(apb);
                    }
                    else if((fileExt == ".png" || fileExt == ".jpg") && formCollection.Files[i].Name == "userImage")
                    {
                      


                            fullPathsubtype = Path.Combine(newPath, "userimages");

                            fullPathsubtypedb = Path.Combine(newdbPath, "userimages");

                            fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                            fullPathfilename = Path.Combine(fullPathsubtype, fileName);



                        userimage.Path = fullPathdbFileName;

                        userimage.FileType = fileExt;
                        userimage.FileName = fileName;


                    }
                    else if (fileExt == ".pdf" || fileExt == ".docx" || fileExt == ".xlsx")
                    {

                         fullPathsubtype = Path.Combine(newPath, "docs");

                         fullPathsubtypedb = Path.Combine(newdbPath, "docs");

                         fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                         fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ApDocuments apdocs = new ApDocuments();

                        apdocs.Path = fullPathdbFileName;

                        apdocs.FileType = fileExt;
                        apdocs.FileName = fileName;

                        apDocumentslist.Add(apdocs);


                    }
                    else if (fileExt == ".png" || fileExt == ".jpg")
                    {
               

                        fullPathsubtype = Path.Combine(newPath, "images");

                        fullPathsubtypedb = Path.Combine(newdbPath, "images");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ApImages apImages = new ApImages();

                        apImages.Path = fullPathdbFileName;

                        apImages.FileType = fileExt;
                        apImages.FileName = fileName;

                        apimageslist.Add(apImages);
                    }
                    else
                    {

                        fullPathsubtype = Path.Combine(newPath, "videos");

                        fullPathsubtypedb = Path.Combine(newdbPath, "videos");

                        fullPathdbFileName = Path.Combine(fullPathsubtypedb, fileName);

                        fullPathfilename = Path.Combine(fullPathsubtype, fileName);


                        ApVideos apVideos = new ApVideos();

                        apVideos.Path = fullPathdbFileName;

                        apVideos.FileType = fileExt;
                        apVideos.FileName = fileName;

                        apVideoslist.Add(apVideos);

    
                    }

                    using (var stream = new FileStream(fullPathdbFileName, FileMode.Create))
                    {
                        formCollection.Files[i].CopyTo(stream);
                    }
                }


                result.apUserImage = userimage;
                result.apImages = apimageslist;
                result.apDocuments = apDocumentslist;
                result.apVideos = apVideoslist;
                result.apBusinessDocs = apbusinessDocumentslist;


            }


          

            var data = await _personRepo.AddPersonData(result);
            return Ok(data);
        }



        [HttpGet("GetGender")]
        public async Task<IActionResult> GetAllState()
        {

            var data = await _gender.GetAllasync();
            return Ok(data);
        }


        [HttpGet("GetPersonTypes")]
        public async Task<IActionResult> GetAllPersonTypes()
        {

            var data = await _personType.GetAllasync();
            return Ok(data);
        }


        [HttpGet("GetPersonPreviousTypes")]
        public async Task<IActionResult> GetPersonPreviousTypes()
        {

            var data = await _personPreviousType.GetAllasync();
            return Ok(data);
        }


        [HttpGet("GetAllPersonsData")]
        public async Task<IActionResult> GetAllPersons()
        {
            try
            {
                var data = await _person.getallPersonData();

               // var data2 = await _person.getApProgressBO(1);
                
                
                return Ok(data);


            }
            catch(Exception ex)
            {

                var data = ex;
                return Ok("error");
            }

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);   
        }

        [HttpGet("GetApProgressBOData/{Id:int}")]
        public async Task<IActionResult> GetApProgressBO(int id)
        {
            try
            {
             
                var data2 = await _person.getApProgressBO(id);

                return Ok(data2);

            }
            catch (Exception ex)
            {
                var data = ex;

                return Ok("error");
            }

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }



        [HttpGet("GetTrainingData/{Id:int}")]
        public async Task<IActionResult> GetTrainingBO(int id)
        {
            try
            {

                var data2 = await _person.getTraining(id);

                return Ok(data2);

            }
            catch (Exception ex)
            {
                var data = ex;

                return Ok("error");
            }

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }



        [HttpGet("GetAllPersonsDataWithoutRelated")]
        public async Task<IActionResult> GetAllPersonsDataWithoutRelated()
        {
            try
            {
                var data = await _person.GetAllPersonsDataWithoutRelated();


                return Ok(data);


            }
            catch (Exception ex)
            {

                var data = ex;
                return Ok("error");
            }




            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);


        }



        [HttpPost("UpdatePerson")]
        public async Task<IActionResult> GetAllPersons([FromBody]Person value)
        {

            var data = await  _person.updatePersonData(value);

    
            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }


        //VulnerabilityLevel

        // POST VulnerabilityLevel 
        [HttpPost("PostVulnerabilityLevel")]
        public void PostVulnerabilityLevel([FromBody]Vulnerability_Level value)
        {
            _vulnerabilityLevelRepository.Add(value);
        }


        [HttpGet("GetAllValnerbilityLevel")]
        public async Task<IActionResult> GetAllValnerbilityLevel()
        {

            var data = await _vulnerabilityLevelRepository.GetAllasync();

            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }


        // update VulnerabilityLevel 
        [HttpPost("UpdateVulnerabilityLevel")]
        public void UpdateVulnerabilityLevel([FromBody]Vulnerability_Level value)
        {
            _vulnerabilityLevelRepository.Update(value);

        }


        // delete VulnerabilityLevel
        [HttpPost("DeleteVulnerabilityLevel")]
        public void DeleteVulnerabilityLevel([FromBody]Vulnerability_Level value)
        {
            _vulnerabilityLevelRepository.Remove(value);

        }



        //VulnerabilityType

        // POST VulnerabilityType 
        [HttpPost("PostVulnerabilityType")]
        public void PostVulnerabilityType([FromBody]Vulnerability_Type value)
        {
            _vulnerabilityTypeRepository.Add(value);
        }


        [HttpGet("GetAllVulnerabilityTypes")]
        public async Task<IActionResult> GetAllVulnerabilityTypes()
        {

            var data = await _vulnerabilityTypeRepository.GetAllasync();

            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }

        // update VulnerabilityType 
        [HttpPost("UpdateVulnerabilityType")]
        public void UpdateVulnerabilityType([FromBody]Vulnerability_Type value)
        {
            _vulnerabilityTypeRepository.Update(value);

        }

        // delete VulnerabilityType
        [HttpPost("DeleteVulnerabilityType")]
        public void DeleteVulnerabilityType([FromBody]Vulnerability_Type value)
        {
            _vulnerabilityTypeRepository.Remove(value);

        }




        [HttpPost("AddVulnerability")]
        public async Task<IActionResult> AddVulnerability([FromBody]VulnerabilityMonitor value)
        {

            var data = await _vulnerabilityMonitorRepository.AddAsync(value);

            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }




        [HttpGet("GetAllVulnerabilityMonitors")]
        public async Task<IActionResult> GetAllVulnerabilityMonitors()
        {

            var data = await _vulnerabilityMonitorRepository.getAllVulnerabilityMonitorData();

            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }





        [HttpPost("UpdateVulnerabilityMonitor")]
        public async Task<IActionResult> UpdateVulnerabilityMonitor([FromBody]VulnerabilityMonitor value)
        {

            var data = await _vulnerabilityMonitorRepository.UpdateAsync(value);

            return Ok(data);

            //string jsonString = JsonSerializer.Serialize<IEnumerable<Person>>(data);

        }






        //EmploymentStatus

        // POST EmploymentStatus
        [HttpPost("PostEmploymentStatus")]
        public void PostEmploymentStatus([FromBody]Employment_Status value)
        {
            _employmentstatusrepo.Add(value);
        }


        // Get EmploymentStatus
        [HttpGet("GetAllEmploymentStatues")]
        public async Task<IActionResult> GetAllEmploymentStatuses([FromBody]Employment_Status value)
        {
            var data = await _employmentstatusrepo.GetAllasync();



            return Ok(data);
        }


        // update EmploymentStatus
        [HttpPost("UpdateEmploymentStatus")]
        public void UpdateEmploymentStatus([FromBody]Employment_Status value)
        {
            _employmentstatusrepo.Update(value);

        }


        // delete EmploymentStatus
        [HttpPost("DeleteEmploymentStatus")]
        public void DeleteEmploymentStatus([FromBody]Employment_Status value)
        {
            _employmentstatusrepo.Remove(value);

        }


        //EmploymentType

        // POST EmploymentType
        [HttpPost("PostEmploymentType")]
        public void PostEmploymentType([FromBody]Employment_Type value)
        {
            _employmenttyperepo.Add(value);
        }


        // Get EmploymentType
        [HttpGet("GetAllEmploymentType")]
        public async Task<IActionResult> GetAllEmploymentTypes([FromBody]Employment_Type value)
        {
            var data = await _employmenttyperepo.GetAllasync();



            return Ok(data);
        }


        // update EmploymentType
        [HttpPost("UpdateEmploymentType")]
        public void UpdateEmploymentType([FromBody]Employment_Type value)
        {
            _employmenttyperepo.Update(value);

        }


        // delete EmploymentType
        [HttpPost("DeleteEmploymentType")]
        public void DeleteEmploymentType([FromBody]Employment_Type value)
        {
            _employmenttyperepo.Remove(value);

        }

        //EmployerType

        // POST EmployerType
        [HttpPost("PostEmployerType")]
        public void PostEmployerType([FromBody]Employer_Type value)
        {
            _employerTyperepo.Add(value);
        }


        // Get EmployerType
        [HttpGet("GetAllEmployerType")]
        public async Task<IActionResult> GetAllEmployerTypes([FromBody]Employer_Type value)
        {
            var data = await _employerTyperepo.GetAllasync();



            return Ok(data);
        }


        // update EmployerType
        [HttpPost("UpdateEmployerType")]
        public void UpdateEmployerType([FromBody]Employer_Type value)
        {
            _employerTyperepo.Update(value);

        }


        // delete EmployerType
        [HttpPost("DeleteEmployerType")]
        public void DeleteEmployerType([FromBody]Employer_Type value)
        {
            _employerTyperepo.Remove(value);

        }


        //TrainingType

        // POST TrainingType 
        [HttpPost("PostTrainingType")]
        public void PostTrainingType([FromBody]Training_Type value)
        {
            _trainingtyperepo.Add(value);
        }


        // Get TrainingType 
        [HttpGet("GetAllTrainingTypes")]
        public async Task<IActionResult> GetAllTrainingTypes([FromBody]Training_Type value)
        {
            var data = await _trainingtyperepo.GetAllasync();



            return Ok(data);
        }


        // update TrainingType 
        [HttpPost("UpdateTrainingType")]
        public void UpdateTrainingType([FromBody]Training_Type value)
        {
            _trainingtyperepo.Update(value);

        }


        // delete TrainingType
        [HttpPost("DeleteTrainingType")]
        public void DeleteTrainingType([FromBody]Training_Type value)
        {
            _trainingtyperepo.Remove(value);

        }


        // Add training data 
        [HttpPost("AddTrainingData")]
        public async Task<IActionResult> AddTrainingData([FromBody]Training value)
        {
          var data = await  _trainingRepository.AddAsync(value);

            return Ok(data);

        }

        // Add training data 
        [HttpGet("GetAllTrainigData")]
        public async Task<IActionResult> GetTrainingData()
        {
            var data = await _trainingRepository.GetAllasync();

            return Ok(data);

        }


        // Add training data 
        [HttpPost("UpdateTrainingData")]
        public async Task<IActionResult> UpdateTrainingData([FromBody]Training value)
        {
            var data = await _trainingRepository.UpdateAsync(value);

            return Ok(data);

        }




        // Get monitor period  data 
        [HttpGet("GetAllMonitorPeriodData")]
        public async Task<IActionResult> GetAllMonitorPeriodData()
        {
            var data = await _monitorPeriodRepository.GetAllasync();

            return Ok(data);

        }





        // Get GetAllEducationTypes  data 
        [HttpGet("GetAllEducationTypes")]
        public async Task<IActionResult> GetAllEducationTypes()
        {
            var data = await _educationLevelRepositoy.GetAllasync();

            return Ok(data);

        }




        // Get GetAllMatialTypes  data 
        [HttpGet("GetAllMatialTypes")]
        public async Task<IActionResult> GetAllMatialTypes()
        {
            var data = await _martialStatusRepository.GetAllasync();

            return Ok(data);

        }



        // Get GetAllLivelihoodTypes  data 
        [HttpGet("GetAllLivelihoodTypes")]
        public async Task<IActionResult> GetAllLivelihoodTypes()
        {
            var data = await _businessOrLivelihoodRelocationRepository.GetAllasync();

            return Ok(data);

        }


        // Add training data 
        [HttpPost("DeletePerson/{Id:int}")]
        public async Task<IActionResult> DeletePerson(int Id)
        {

            try
            {
                var data =  await _person.getallPersonData();

              var deletedata =  data.First(x => x.Person_ID == Id);



                _person.Remove(deletedata);

                return Ok(data);
            }
            catch (Exception ex)
            {
                var data = ex;

                return Ok(data);

            }

           

        }


        // Add training data 
        [HttpPost("addTrainingMultipleDataURL")]
        public async  Task<IActionResult> AddTrainingDataMultiple([FromBody]TrainingModelMultiple data)
        {
            //var result = JsonConvert.DeserializeObject<TrainingModelMultiple>(jsonString);
            try
            {
                DataTransModel mm = new DataTransModel();

                for (int i = 0; i < data.PersonList.Count; i++)
                {
                    Training training = new Training();
                    training.Description = data.Description;
                    training.DS_office = data.DS_office;
                    training.IsEmployed = data.IsEmployed;
                    training.IsEmployedSectorRelated = data.IsEmployedSectorRelated;
                    training.IsFamilyMemberCompletedTraining = data.IsFamilyMemberCompletedTraining;
                    training.IsFamilyMemberInvolved = data.IsFamilyMemberInvolved;
                    training.Note = data.Note;
                    training.SalaryStatus = data.SalaryStatus;
                    training.SocialRecognition = data.SocialRecognition;
                    training.Status = data.Status;
                    training.TrainigOrganization = data.TrainigOrganization;
                    training.TrainigPeriod = data.TrainigPeriod;

                    training.TrainingDoneBy = data.TrainingDoneBy;
                    training.Training_Type = data.Training_Type;

                    training.Training_Person_ID = data.PersonList[i];

                    var data2 = await _trainingRepository.AddAsync(training);

                }

                mm.Status = 200;

                return Ok(mm);

            }
            catch (Exception ex)
            {
                DataTransModel mm = new DataTransModel();
                mm.Status = 400;
                return Ok(mm);

            }


        }


    }

}
