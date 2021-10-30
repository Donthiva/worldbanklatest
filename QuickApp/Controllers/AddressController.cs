using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models.Contact_Information;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {


        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;

        ICountryRepository _countryRepo;
        ICityRepository _cityRepo;
        IStatesRepository _stateRepo;
        IDistrictRepository _districtRepo;
        public AddressController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<CustomerController> logger, ICountryRepository countryRepo, ICityRepository cityRepo, IStatesRepository stateRepo, IDistrictRepository districtRepo)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;

            _countryRepo = countryRepo;
            _cityRepo = cityRepo;
            _stateRepo = stateRepo;
            _districtRepo = districtRepo;

        }


        [HttpGet("GetAllCountries")]
        public async Task<IActionResult> GetAllBankBranch()
        {

            var data = await _countryRepo.GetAllasync();
            return Ok(data);
        }

        // POST country types
        [HttpPost("PostCountry")]
        public void PostCountry([FromBody]Country value)
        {
            _countryRepo.Add(value);
        }



        // update country types
        [HttpPost("UpdateCountry")]
        public void UpdateCountry([FromBody]Country value)
        {
            _countryRepo.Update(value);

        }


        // POST city types
        [HttpPost("PostCity")]
        public void PostCity([FromBody]City value)
        {
            _cityRepo.Add(value);
        }

        [HttpGet("GetAllCities/{country:int}/{state:int}/{district:int}")]
        public async Task<IActionResult> GetAllCities(int country,int state,int district)
        {

            var data = await _cityRepo.GetAllasync();

            var datafiltered = data.Where(x => x.City_Country_ID == country && x.City_States_ID == state && x.City_District_ID == district);

            return Ok(datafiltered);
        }


        // delete country types
        [HttpPost("DeleteCountry")]
        public void DeleteCountry([FromBody]Country value)
        {
            _countryRepo.Remove(value);

        }

        // update city types
        [HttpPost("UpdateCity")]
        public void UpdateCity([FromBody]City value)
        {
            _cityRepo.Update(value);

        }


        // delete city types
        [HttpPost("DeleteCity")]
        public void DeleteCity([FromBody]City value)
        {
            _cityRepo.Remove(value);

        }

        // POST state types
        [HttpPost("PostState")]
        public void PostState([FromBody]States value)
        {
            _stateRepo.Add(value);
        }

        [HttpGet("GetAllStates/{Id:int}")]
        public async Task<IActionResult> GetAllState(int Id)
        {

            var data = await _stateRepo.GetAllasync();
            var datafiltered =   data.Where(x => x.States_Country_ID == Id).ToList();

            return Ok(datafiltered);
        }


        // update state types
        [HttpPost("UpdateState")]
        public void UpdateState([FromBody]States value)
        {
            _stateRepo.Update(value);

        }

        // delete state types
        [HttpPost("DeleteState")]
        public void DeleteState([FromBody]States value)
        {
            _stateRepo.Remove(value);

        }


        // POST district types
        [HttpPost("PostDistrict")]
        public void PostDistrict([FromBody]District value)
        {
            _districtRepo.Add(value);
        }


        [HttpGet("GetAllDistrict/{country:int}/{state:int}")]
        public async Task<IActionResult> GetAllDistrict(int country, int state)
        {

            var data = await _districtRepo.GetAllasync();

            var datafiltered = data.Where(x => x.District_Country_ID == country && x.District_States_ID == state);

            return Ok(datafiltered);
        }

        // update district types
        [HttpPost("UpdateDistrict")]
        public void UpdateDistrict([FromBody]District value)
        {
            _districtRepo.Update(value);

        }


        // delete district types
        [HttpPost("DeleteDistrict")]
        public void DeleteDistrict([FromBody]District value)
        {
            _districtRepo.Remove(value);

        }
    }
}