using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraphController : ControllerBase
    {

        IGpraphRepository _gpraphRepository;

        public GraphController(IGpraphRepository gpraphRepository)
        {
            _gpraphRepository = gpraphRepository;
        }


        
        [HttpGet("GetDeliverable1Report")]
        public ActionResult GetDeliverable1ReportData()
        {
            var data =   _gpraphRepository.getAllDeliverableOutput1Data();
            return Ok(data);
        }


        [HttpGet("GetDeliverable2Report")]
        public ActionResult GetDeliverable2ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput2Data();
            return Ok(data);
        }

        [HttpGet("GetDeliverable3Report")]
        public ActionResult GetDeliverable3ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput3Data();
            return Ok(data);
        }

        [HttpGet("GetDeliverable4Report")]
        public ActionResult GetDeliverable4ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput4Data();
            return Ok(data);
        }

        [HttpGet("GetDeliverable5Report")]
        public ActionResult GetDeliverable5ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput5Data();
            return Ok(data);
        }

        [HttpGet("GetDeliverable6Report")]
        public ActionResult GetDeliverable6ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput6Data();
            return Ok(data);
        }

        [HttpGet("GetDeliverable8Report")]
        public ActionResult GetDeliverable8ReportData()
        {
            var data = _gpraphRepository.getAllDeliverableOutput8Data();
            return Ok(data);
        }

        [HttpGet("GetAPCategoryWisePercentage")]
        public ActionResult GetAPCategoryWisePercentage()
        {
            var data = _gpraphRepository.GetAPCategoryWisePercentage();
            return Ok(data);
        }

        [HttpGet("GetGenderWiseDataPercentage")]
        public ActionResult GetGenderWiseDataPercentage()
        {
            var data = _gpraphRepository.GetGenderWiseDataPercentage();
            return Ok(data);
        }

        [HttpGet("GetAgeWiseAPsCategories")]
        public ActionResult GetAgeWiseAPsCategories()
        {
            var data = _gpraphRepository.GetAgeWiseAPsCategories();
            return Ok(data);
        }

        [HttpGet("GetVulnerabilitiesAPPercentage")]
        public ActionResult GetVulnerabilitiesAPPercentage()
        {
            var data = _gpraphRepository.GetVulnerabilitiesAPPercentage();
            return Ok(data);
        }

    }
}