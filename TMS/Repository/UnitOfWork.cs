using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TMS.Repository
{
    public class UnitOfWork : IDisposable
    {

        private TMSContext context;

        public UnitOfWork()
        {
            context = new TMSContext();
        }

        public UnitOfWork(TMSContext _context)
        {
            this.context = _context;
        }


        private TrainingRepository _trainingRepository;

        public TrainingRepository TrainingRepository
        {
            get
            {

                if (this._trainingRepository == null)
                {
                    this._trainingRepository = new TrainingRepository(context);
                }
                return _trainingRepository;
            }
        }


        private TrainingCategoryRepository _trainingCategoryRepository;
        public TrainingCategoryRepository TrainingCategoryRepository 
        {
            get 
            {
                if (this._trainingCategoryRepository == null) 
                {
                    this._trainingCategoryRepository = new TrainingCategoryRepository(context);
                }
                return _trainingCategoryRepository;
            }
        }

        private ATSRepository _aTSRepository;
        public ATSRepository ATSRepository 
        {
            get 
            {
                if (this._aTSRepository == null) 
                {
                    this._aTSRepository = new ATSRepository(context);
                }
                return _aTSRepository;
            }
        }



        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            context.Dispose();
            GC.SuppressFinalize(this);
        }

    }
}