using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TMS.Models;

namespace TMS.Repository
{
    public class TrainingRepository : ITrainingRepository
    {
        TMSContext context = new TMSContext();

        public TrainingRepository()
            : this(new TMSContext())
        {

        }
        public TrainingRepository(TMSContext context)
        {
            this.context = context;
        }

        public IQueryable<Training> All
        {
            get { return context.Trainings; }
        }



    }

    public interface ITrainingRepository
    {

    }
}