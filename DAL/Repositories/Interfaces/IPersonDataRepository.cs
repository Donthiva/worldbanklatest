using DAL.Models;
using DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
   public interface IPersonDataRepository
    {
        Task<DataTransModel> AddPersonData(AddPersonDataViewModel data);
    }
}
