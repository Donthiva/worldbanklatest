// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
        ICustomerRepository Customers { get; }
        IProductRepository Products { get; }
        IOrdersRepository Orders { get; }


        IAddressReopository Address { get; }
        IAddressOwnerTypeRepository AddressOwnerType { get; } 
        IBankAccountRepository BankAccount { get; }
        IBankAcountTypeRepository BankAcountType { get; }
        IBankBranchRepository BankBranch { get; }
        IBankRepository Bank { get; }
        IBankTypeRepository BankType { get; }
        IBusinessPlanRepsitory BusinessPlan { get; }
        IBusinessStatusRepository BusinessStatus { get; }
        IBusinessManagementModeRepository BusinessManagement { get; }
        IBusinessRepository Business { get; }
        IBusinessSituationRepository BusinessSituation { get; }
        ICityRepository City { get; }
        IContactsTypeRepository ContactsType { get; }
        ICountryRepository Country { get; }
        IDistrictRepository District { get; }
        IEmployerTypeRepository EmployerType { get; }
        IEmploymentRepository Employment { get; }
        IEmploymentStatusRepository EmploymentStatus { get; }
        IEmploymentTypeRepository EmploymentType { get; }
        IEntittlmentRepositoy Entittlment { get; }
        IGenderRepository Gender { get; }
        IGeneralContactsRepository GeneralContacts { get; }
        IIncomeCategoryRepository IncomeCategory { get; }
        IMonitorDurationRepository MonitorDuration { get; }
        IMonitorRepostory MonitorRepostory { get; }
        IPersonRepository Person { get; }
        IPersonTypeRepository PersonType { get; }
        IStatesRepository States { get; }
        ITaskStatusRepository TaskStatus { get; }
        ITrainingRepository Training { get; }
        ITrainingTypeRepository TrainingType { get; }
        IVulnerabilityTypeRepository VulnerabilityType { get; }
        IVulnerabilityLevelRepository VulnerabilityLevel { get; }
        IVulnerabilityRepository Vulnerability { get; }
        






        int SaveChanges();
    }
}
