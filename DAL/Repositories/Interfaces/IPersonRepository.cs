using DAL.Models;
using DAL.Models.Customer_Related;
using DAL.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IPersonRepository : IRepository<Person>
    {
        Task<IEnumerable<Person>> getallPersonData();

        Task<DataTransModel> updatePersonData(Person data);

        Task<IEnumerable<Person>> GetAllPersonsDataWithoutRelated();

        Task<IEnumerable<APProgressBO>> getApProgressBO(int PersonId);

        Task<IEnumerable<TrainigDataViewModel>> getTraining(int PersonId);
    }
}
