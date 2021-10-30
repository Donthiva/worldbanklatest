// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        ICustomerRepository _customers;
        IProductRepository _products;
        IOrdersRepository _orders;


        IAddressReopository _address;
        IAddressOwnerTypeRepository _addressOwnerType;
        IBankAccountRepository _bankAccount;
        IBankAcountTypeRepository _bankAcountType;
        IBankBranchRepository _bankBranch;
        IBankRepository _bank;
        IBankTypeRepository _bankType;
        IBusinessPlanRepsitory _businessPlan;
        IBusinessStatusRepository _businessStatus;
        IBusinessManagementModeRepository _businessManagement;
        IBusinessRepository _business;
        IBusinessSituationRepository _businessSituation;
        ICityRepository _city;
        IContactsTypeRepository _contactsType;
        ICountryRepository _country;
        IDistrictRepository _district;
        IEmployerTypeRepository _employerType;
        IEmploymentRepository _employment;
        IEmploymentStatusRepository _employmentStatus;
        IEmploymentTypeRepository _employmentType;
        IEntittlmentRepositoy _entittlment;
        IGenderRepository _gender;
        IGeneralContactsRepository _generalContacts;
        IIncomeCategoryRepository _incomeCategory;
        IMonitorDurationRepository _monitorDuration;
        IMonitorRepostory _monitorRepostory;
        IPersonRepository _person;
        IPersonTypeRepository _personType;
        IStatesRepository _states;
        ITaskStatusRepository _taskStatus;
        ITrainingRepository _training;
        ITrainingTypeRepository _trainingType;
        IVulnerabilityTypeRepository _vulnerabilityType;
        IVulnerabilityLevelRepository _vulnerabilityLevel;
        IVulnerabilityRepository _vulnerability;



        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }



        public ICustomerRepository Customers
        {
            get
            {
                if (_customers == null)
                    _customers = new CustomerRepository(_context);

                return _customers;
            }
        }



        public IProductRepository Products
        {
            get
            {
                if (_products == null)
                    _products = new ProductRepository(_context);

                return _products;
            }
        }



        public IOrdersRepository Orders
        {
            get
            {
                if (_orders == null)
                    _orders = new OrdersRepository(_context);

                return _orders;
            }
        }

        public IAddressReopository Address
        {
            get
            {
                if (_address == null)
                    _address = new AddressReopository(_context);

                return _address;
            }
        }
        public IAddressOwnerTypeRepository AddressOwnerType
        {
            get
            {
                if (_addressOwnerType == null)
                    _addressOwnerType = new AdressOwnerTypeRepository(_context);
                return _addressOwnerType;
            }
        }
        public IBankAccountRepository BankAccount
        {
            get
            {
                if (_bankAccount == null)
                    _bankAccount = new BankAccountRepository(_context);
                return _bankAccount;
            }
        }
        public IBankAcountTypeRepository BankAcountType
        {
            get
            {
                if (_bankAcountType == null)
                    _bankAcountType = new BankAcountTypeRepository(_context);
                return _bankAcountType;
            }
        }
        public IBankBranchRepository BankBranch
        {
            get
            {
                if (_bankBranch == null)
                    _bankBranch = new BankBranchRepository(_context);
                return _bankBranch;
            }
        }
        public IBankRepository Bank
        {
            get
            {
                if (_bank == null)
                    _bank = new BankRepository(_context);
                return _bank;
            }
        }
        public IBankTypeRepository BankType
        {
            get
            {
                if (_bankType == null)
                    _bankType = new BankTypeRepository(_context);
                return _bankType;
            }
        }
        public IBusinessPlanRepsitory BusinessPlan
        {
            get
            {
                if (_businessPlan == null)
                    _businessPlan = new BusinessPlanRepsitory(_context);
                return _businessPlan;
            }
        }
        public IBusinessStatusRepository BusinessStatus
        {
            get
            {
                if (_businessStatus == null)
                    _businessStatus = new BusinessStatusRepositoryn(_context);
                return _businessStatus;
            }
        }
        public IBusinessManagementModeRepository BusinessManagement
        {
            get
            {
                if (_businessManagement == null)
                    _businessManagement = new BusinessManagementModeRepository(_context);
                return _businessManagement;
            }
        }
        public IBusinessRepository Business
        {
            get
            {
                if (_business == null)
                    _business = new BusinessRepository(_context);
                return _business;
            }
        }
        public IBusinessSituationRepository BusinessSituation
        {
            get
            {
                if (_businessSituation == null)
                    _businessSituation = new BusinessSituationRepository(_context);
                return _businessSituation;
            }
        }
        public ICityRepository City
        {
            get
            {
                if (_city == null)
                    _city = new CityRepository(_context);
                return _city;
            }
        }
        public ICountryRepository Country
        {
            get
            {
                if (_country == null)
                    _country = new CountryRepository(_context);
                return _country;
            }
        }
        public IContactsTypeRepository ContactsType
        {
            get
            {
                if (_contactsType == null)
                    _contactsType = new ContactsTypeRepository(_context);
                return _contactsType;
            }
        }
        public IDistrictRepository District
        {
            get
            {
                if (_district == null)
                    _district = new DistrictRepository(_context);
                return _district;
            }
        }
        public IEmployerTypeRepository EmployerType
        {
            get
            {
                if (_employerType == null)
                    _employerType = new EmployerTypeRepository(_context);
                return _employerType;
            }
        }
        public IEmploymentRepository Employment
        {
            get
            {
                if (_employment == null)
                    _employment = new EmploymentRepository(_context);
                return _employment;
            }
        }
        public IEmploymentStatusRepository EmploymentStatus
        {
            get
            {
                if (_employmentStatus == null)
                    _employmentStatus = new EmploymentStatusRepository(_context);
                return _employmentStatus;
            }
        }
        public IEmploymentTypeRepository EmploymentType
        {
            get
            {
                if (_employmentType == null)
                    _employmentType = new EmploymentTypeRepository(_context);
                return _employmentType;
            }
        }
        public IEntittlmentRepositoy Entittlment
        {
            get
            {
                if (_entittlment == null)
                    _entittlment = new EntittlmentRepositoy(_context);
                return _entittlment;
            }
        }
        public IGenderRepository Gender
        {
            get
            {
                if (_gender == null)
                    _gender = new GenderRepository(_context);
                return _gender;
            }
        }
        public IGeneralContactsRepository GeneralContacts
        {
            get
            {
                if (_generalContacts == null)
                    _generalContacts = new GeneralContactsRepository(_context);
                return _generalContacts;
            }
        }
        public IIncomeCategoryRepository IncomeCategory
        {
            get
            {
                if (_incomeCategory == null)
                    _incomeCategory = new IncomeCategoryRepository(_context);
                return _incomeCategory;
            }
        }
        public IMonitorDurationRepository MonitorDuration
        {
            get
            {
                if (_monitorDuration == null)
                    _monitorDuration = new MonitorDurationRepository(_context);
                return _monitorDuration;
            }
        }
        public IMonitorRepostory MonitorRepostory
        {
            get
            {
                if (_monitorRepostory == null) ;
                _monitorRepostory = new MonitorRepostory(_context);
                return _monitorRepostory;
            }
        }
        public IPersonRepository Person
        {
            get
            {
                if (_person == null)
                    _person = new PersonRepository(_context);
                return _person;
            }
        }
        public IPersonTypeRepository PersonType
        {
            get
            {
                if (_personType == null)
                    _personType = new PersonTypeRepository(_context);
                return _personType;
            }
        }
        public IStatesRepository States
        {
            get
            {
                if (_states == null)
                    _states = new StatesRepository(_context);
                return _states;
            }
        }
        public ITaskStatusRepository TaskStatus
        {
            get
            {
                if (_taskStatus == null) ;
                _taskStatus = new TaskStatusRepository(_context);
                return _taskStatus;
            }
        }
        public ITrainingRepository Training
        {
            get
            {
                if (_training == null)
                    _training = new TrainingRepository(_context);
                return _training;
            }
        }
        public ITrainingTypeRepository TrainingType
        {
            get
            {
                if (_trainingType == null)
                    _trainingType = new TrainingTypeRepository(_context);
                return _trainingType;
            }
        }
        public IVulnerabilityTypeRepository VulnerabilityType
        {
            get
            {
                if (_vulnerabilityType == null)
                    _vulnerabilityType = new VulnerabilityTypeRepository(_context);
                return _vulnerabilityType;
            }
        }
        public IVulnerabilityLevelRepository VulnerabilityLevel
        {
            get
            {
                if (_vulnerabilityLevel == null)
                    _vulnerabilityLevel = new VulnerabilityLevelRepository(_context);
                return _vulnerabilityLevel;
            }
        }
        public IVulnerabilityRepository Vulnerability
        {
            get
            {
                if (_vulnerability == null)
                    _vulnerability = new VulnerabilityRepository(_context);
                return _vulnerability;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
