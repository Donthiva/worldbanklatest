using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models.Bank_Information;
using DAL.Repositories;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace QuickApp.Controllers
{

    [Route("api/[controller]")]
    public class BankController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger _logger;

        private IBankTypeRepository _bankrepo;
        private IBankRepository _banknamerepo;
        private IBankBranchRepository _bankbranchrepo;
        private IBankAcountTypeRepository _bankacounttyperepo;
        public BankController(IMapper mapper, IUnitOfWork unitOfWork, ILogger<CustomerController> logger, IBankTypeRepository bankrepo,  IBankRepository banknamerepo,
         IBankBranchRepository bankbranchrepo, IBankAcountTypeRepository bankacounttyperepo)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _logger = logger;
            _bankrepo = bankrepo;
            _banknamerepo = banknamerepo;
            _bankbranchrepo = bankbranchrepo;
            _bankacounttyperepo = bankacounttyperepo;
        }



        // POST bank types
        [HttpPost("PostBankTypes")]
        public void PostBankTypes([FromBody]Bank_Type value)
        {
            _bankrepo.Add(value);
        }


        // POST bank types
        [HttpGet("GetAllBankTypes")]
        public async Task<IActionResult> GetAllBankTypes([FromBody]Bank_Type value)
        {
            var data =  await  _bankrepo.GetAllasync();
            return Ok(data);
        }


        // update bank types
        [HttpPost("UpdateBankTypes")]
        public void UpdateBankTypes([FromBody]Bank_Type value)
        {
          _bankrepo.Update(value);

        }


        // delete bank types
        [HttpPost("DeleteBankType")]
        public void DeleteBankTypes([FromBody]Bank_Type value)
        {
            _bankrepo.Remove(value);

        }



        //Bank

        // POST bank 
        [HttpPost("PostBank")]
        public void PostBank([FromBody]Bank value)
        {
            _banknamerepo.Add(value);
        }

        // Get bank 
        [HttpGet("GetAllBanks")]
        public async Task<IActionResult> GetAllBanks([FromBody]Bank value)
        {
            var data = await _banknamerepo.GetAllasync();



            return Ok(data);
        }

        // update bank 
        [HttpPost("UpdateBank")]
        public void UpdateBank([FromBody]Bank value)
        {
            _banknamerepo.Update(value);

        }



        // delete bank
        [HttpPost("DeleteBank")]
        public void DeleteBank([FromBody]Bank value)
        {
            _banknamerepo.Remove(value);

        }


        //

        [HttpGet("GetAllBankName/{type:int}")]
        public async Task<IActionResult> GetAllBankName(int type)
        {

            var data = await _banknamerepo.GetAllasync();

            var datafiltered = data.Where(x => x.Bank_Type == type);

            return Ok(datafiltered);
        }

        [HttpGet("GetAllBankNameAll")]
        public async Task<IActionResult> GetAllBankNameAll()
        {

            var data = await _banknamerepo.GetAllasync();

       

            return Ok(data);
        }



        [HttpGet("GetAllBankBranch/{bank:int}")]
        public async Task<IActionResult> GetAllBankBranch(int bank)
        {

            var data = await _bankbranchrepo.GetAllasync();

            var datafiltered = data.Where(x => x.BankID == bank);

            return Ok(data);
        }

        // POST bank 
        [HttpPost("PostBankBranch")]
        public void PostBankBranch([FromBody]Bank_Branch value)
        {
            _bankbranchrepo.Add(value);
        }




        // update bank Account type
        [HttpPost("UpdateBankBranch")]
        public void UpdateBankBranch([FromBody]Bank_Branch value)
        {
            _bankbranchrepo.Update(value);

        }



        // delete bank Account type
        [HttpPost("DeleteBankBranch")]
        public void DeleteBankBranch([FromBody]Bank_Branch value)
        {
            _bankbranchrepo.Remove(value);

        }

        //Bank Account type

        // POST bank Account type
        [HttpPost("PostBankAccountType")]
        public void PostBankAccountType([FromBody]Bank_Account_Type value)
        {
            _bankacounttyperepo.Add(value);
        }

        // Get bank Account type
        [HttpGet("GetAllBankAccountTypes")]
        public async Task<IActionResult> GetAllBankAccountTypes([FromBody]Bank_Account_Type value)
        {
            var data = await _bankacounttyperepo.GetAllasync();



            return Ok(data);
        }


        // update bank Account type
        [HttpPost("UpdateBankAccountType")]
        public void UpdateBankAccountType([FromBody]Bank_Account_Type value)
        {
            _bankacounttyperepo.Update(value);

        }

        // delete bank Account type
        [HttpPost("DeleteBankAccountType")]
        public void DeleteBankAccountType([FromBody]Bank_Account_Type value)
        {
            _bankacounttyperepo.Remove(value);

        }
    }
}