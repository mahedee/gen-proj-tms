using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TMS.Repository
{
    public class TrainerRepository : ITrainerRepository
    {
        TMSContext context = new TMSContext();

        public TrainerRepository()
            : this(new TMSContext())
        {

        }

        public TrainerRepository(TMSContext context) 
          {
              this.context = context;
          }

          public IQueryable<Trainer> All 
          {
              get {return context.Trainers; }
          }


          public void Delete(long id)
          {
              var trainer = context.Trainers.Find(id);
              context.Trainers.Remove(trainer);
          }

          public Trainer Find(long id)
          {
              return context.Trainers.Find(id);
          }
    }

    public interface ITrainerRepository 
    {

    }
}