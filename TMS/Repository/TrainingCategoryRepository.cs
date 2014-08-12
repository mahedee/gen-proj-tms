using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TMS.Models;

namespace TMS.Repository
{
    public class TrainingCategoryRepository : ITrainingCategoryRepository
    {
        TMSContext context = new TMSContext();

        public TrainingCategoryRepository()
            : this(new TMSContext())
        {

        }

        public TrainingCategoryRepository(TMSContext context)
        {
            this.context = context;
        }

        public IQueryable<TrainingCategory> All
        {
            get { return context.TrainingCategories; }
        }
    }

    public interface ITrainingCategoryRepository 
    {

    }
}