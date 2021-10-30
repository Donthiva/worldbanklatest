using DAL.Models;
using DAL.Models.Contact_Information;
using DAL.Models.Customer_Related;
using DAL.Models.Genaral;
using DAL.Repositories.Interfaces;
using DAL.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class PersonDataRepository : Repository<Person>, IPersonDataRepository

    {
        protected readonly DbSet<Person> _entities2;

        protected readonly DbContext _context2;



        public PersonDataRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<Person>();
        }

        public async Task<DataTransModel> AddPersonData(AddPersonDataViewModel data)
        {
            DataTransModel mm = new DataTransModel();
            try
            {
                Person p = new Person();

                Address a = new Address();
                Bank_Account ba = new Bank_Account();
                Gender ge = new Gender();

                EmployeeGeneral eg = new EmployeeGeneral();

                Models.Genaral.BusinessGeneral bg = new Models.Genaral.BusinessGeneral();

                ThreeWheelGeneral tg = new ThreeWheelGeneral();

                PhaseOutGeneral pg = new PhaseOutGeneral();



                a.Address_Number = data.addressNo;
                a.Address_Street1 = data.addressStreet;
                a.cityId = data.City;
                a.countryId = data.country;
                a.statesId = data.state;
                a.districtId = data.district;
                a.Latitude = data.Latitude;
                a.Longitude = data.Longitude;

                ba.Bank_Account_Number = data.AccountNumber;
                ba.Bank_Branch_ID = data.BankBranch;
                ba.Bank_ID = data.BankName;
                ba.Bank_Account_Type_ID = 1;

                p.Person_NIC = data.Person_NIC;
                p.Person_Name = data.Person_Name;
                p.Person_File_number = data.Person_File_number;
              
                p.Education = data.Education;
                p.Person_Contact_Number = data.Person_Contact_Number;
                p.Person_Type = data.PersonType;
                p.Person_DOB = data.Person_DOB;

                p.martialStatusId = data.martialStatusId;
                p.businessOrLivelihoodRelocationId = data.businessOrLivelihoodRelocationId;
                p.educationalLevelId = data.educationalLevelId;
                p.DOA = data.DOA;
              

                

                p.PreviousTypeId = data.PreviousTypeId;


                ge.User_Gender_ID = data.Person_Gender;

                p.Person_Gender = 1;
                p.Bank = new List<Bank_Account>();
                p.Bank.Add(ba);
                p.Address = a;

            

                if(data.apUserImage != null)
                {
                    p.apUserImage = data.apUserImage;
                }

                if(data.apVideos != null)
                {
                    p.apVideos = data.apVideos;
                }

                if(data.apImages != null)
                {
                    p.apImages = data.apImages;
                }

                if(data.apDocuments != null)
                {
                    p.apDocuments = data.apDocuments;
                }
                if(data.apBusinessDocs != null)
                {
                    p.apBusinessDocs = data.apBusinessDocs;
                }


                if (data.Vulnerability != null)
                {
                    p.Vulnerability = data.Vulnerability;
                }



                if (data.PersonType == 1)
                {
                    eg.JobRole = data.JobRole;
                    eg.Salary = data.Salary;
                    eg.Employer = data.Employer;

                    p.employeeGeneral = eg;
                }
                else if(data.PersonType == 2)
                {

                    bg.BusineesPlanId = data.businessGeneral.BusinessPlanId;
                    bg.BusinessTypeId = data.businessGeneral.BusinessTypeId;
                    bg.GSBSPreviousIncome = data.businessGeneral.GSBSPreviousIncome;
                    bg.IsBankLoans = data.businessGeneral.IsBankLoans;
                    bg.IsBusinessChanged = data.businessGeneral.IsBusinessChanged;
                    bg.IsEntilementFund = data.businessGeneral.IsEntilementFund;
                    bg.IsInformalLoans = data.businessGeneral.IsEntilementFund;
                    bg.IsOwnService = data.businessGeneral.IsOwnService;
                    bg.IsPartnerShip = data.businessGeneral.IsPartnerShip;
                    bg.IsPawingJewelery = data.businessGeneral.IsPawningJewellary;
                    bg.PreviousBusinessAtGoodShed = data.businessGeneral.PreviousBusinessAtGoodShed;
                    bg.RelocatedMonthandyear = data.businessGeneral.ReallocatedMonthandyear;

                    bg.BusinessPlanNote = data.businessGeneral.BusinessPlanNote;

                    bg.IsFirstBusinessPlan = data.businessGeneral.IsFirstBusinessPlan;

                    p.businessGeneral = bg;
                }
                else if (data.PersonType == 3)
                {
                    tg.InitialParkAtGSBS = data.threeWheelDriver.initialParkAtGSBS;
                    tg.MonthlyIncomeAtGSBS = data.threeWheelDriver.MonthlyIncomeGSBS;
                    tg.EngagementAtGSBS = data.threeWheelDriver.EngagementAtGSBS;

                    p.threeWheelGeneral = tg;
                }
                else
                {
                    pg.BusinessPlan = data.phaseOut.PlanedBusiness;
                    pg.UseofEntitlementFund = data.phaseOut.UseOfEntileFund;
                    pg.IsIncomeGeneratingSources = data.phaseOut.IsIncomeGeneratingSources;
                    pg.IsInterestOfFixedDeposit = data.phaseOut.IsLivesWithcloseFamily;
                    pg.MonthAndYearPhaseOut = data.phaseOut.MonthAndYear;
                    pg.PhaseOutDecisionMade = data.phaseOut.DecisionMade;
                    pg.ReasonForPhaseout = data.phaseOut.ReasonForPhaseOut;
                    pg.SocialEconomicWellbeing = data.phaseOut.SocialWellBeing;
                    pg.UseofEntitlementFund = data.phaseOut.UseOfEntileFund;

                    p.phaseOutGeneral = pg;
                 }

                

              var saved_Data = await  _entities2.AddAsync(p);
                _context2.SaveChanges();
                mm.Status = 200;
                return mm;

            }
            catch (Exception ex)
            {
                var e = ex;
                mm.Status = 500;
                return mm;
            }




        }
    }
}
