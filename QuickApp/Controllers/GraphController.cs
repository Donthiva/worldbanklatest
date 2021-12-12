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

    }
}