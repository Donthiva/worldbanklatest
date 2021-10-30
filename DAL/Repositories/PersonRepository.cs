﻿using DAL.Models;
using DAL.Models.Customer_Related;
using DAL.Repositories.Interfaces;
using DAL.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class PersonRepository : Repository<Person>, IPersonRepository
    {
        protected readonly ApplicationDbContext _context2;
        protected readonly DbSet<Person> _entities2;


        public PersonRepository(ApplicationDbContext context) : base(context)
        {
            _context2 = context;
            _entities2 = context.Set<Person>();
        }

        public async Task<IEnumerable<Person>> getallPersonData()
        {
            try
            {
                AddPersonDataViewModel pm = new AddPersonDataViewModel();

                var data = await _context2.Persons
                .Include(r => r.employeeGeneral)
                .Include(r => r.businessGeneral)
                .Include(r => r.threeWheelGeneral)
                .Include(r => r.phaseOutGeneral)
                .Include(r => r.Bank)
                .Include(r => r.Address)
                .Include(r => r.apUserImage)
                .Include(r => r.apDocuments)
                .Include(r => r.apImages)
                .Include(r => r.apVideos)
                .Include(r => r.Vulnerability)
                .Include(r => r.VulnerabilityMonitor)
                .Include(r => r.VulnerabilityMonitor)
                .Include(r=> r.phaseOut)
                .Include(r => r.Business)
                .Include(r => r.ThreeWheeler)
                 .Include(r => r.Employment)
                  .Include(r => r.Employment)
                  .Include(r => r.Employment)
                   .Include(r => r.Monitor)
                     .Include(r => r.VulnerabilityMonitor)
                .ToListAsync();


                
                return data;

            }
            catch (Exception ex)
            {
                var z = ex;

                return null;
            }

        }

        public async Task<IEnumerable<Person>> GetAllPersonsDataWithoutRelated()
        {
            try
            {
                AddPersonDataViewModel pm = new AddPersonDataViewModel();

                var data = await _context2.Persons.ToListAsync();



                return data;

            }
            catch (Exception ex)
            {
                var z = ex;

                return null;
            }

        }

        public async Task<DataTransModel> updatePersonData(Person data)
        {
            DataTransModel dt = new DataTransModel();
            try
            {

                _entities2.Update(data);
             await   _context2.SaveChangesAsync();

                dt.Status = 200;
                return dt;
            }
            catch (Exception ex)
            {
                var z = ex;
                dt.Status = 500;
                return dt;

            }

        }
    }
}
