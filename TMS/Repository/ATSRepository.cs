using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TMS.Models;

namespace TMS.Repository
{
    public class ATSRepository : IATSRepository
    {
          TMSContext context = new TMSContext();

          public ATSRepository()
            : this(new TMSContext())
        {

        }

          public ATSRepository(TMSContext context) 
          {
              this.context = context;
          }

          public IQueryable<ATS> All 
          {
              get {return context.ATS; }
          }
    }

    public interface IATSRepository 
    {

    }
}