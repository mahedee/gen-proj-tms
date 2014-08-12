using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TMS;
using TMS.Models;
using TMS.Repository;

namespace TMS.Controllers
{
    public class TrainingController : ApiController
    {
        private TMSContext db = new TMSContext();
        private UnitOfWork unitOfWork = new UnitOfWork();

        //public IEnumerable<Training> Get()
        //{
        //    return unitOfWork.TrainingRepository.All;
        //}

        // GET api/Training
        public IEnumerable<Training> GetTrainings()
        {
            //return db.Trainings;
            List<Training> lstTraining = new List<Training>();
            lstTraining = unitOfWork.TrainingRepository.All.OrderByDescending(a=>a.Id).ToList();
            return lstTraining;
            //return unitOfWork.TrainingRepository.All;
        }

        // GET api/Training/5
        [ResponseType(typeof(Training))]
        public IHttpActionResult GetTraining(int id)
        {
            Training training = db.Trainings.Find(id);
            if (training == null)
            {
                return NotFound();
            }

            return Ok(training);
        }

        // PUT api/Training/5
        public IHttpActionResult PutTraining(Training training)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != training.Id)
            //{
            //    return BadRequest();
            //}

            db.Entry(training).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (!TrainingExists(id))
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    throw;
                //}
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Training
        [ResponseType(typeof(Training))]
        public IHttpActionResult PostTraining(Training training)
        {

            training.ModificationDate = DateTime.Now;
            training.CreateDate = DateTime.Now;
            training.ModifiedBy = "Foysal";
            training.CreatedBy = "Mahedee";
            training.IsActive = true;


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Trainings.Add(training);
            db.SaveChanges();
            

            return CreatedAtRoute("DefaultApi", new { id = training.Id }, training);
        }

        // DELETE api/Training/5
        [ResponseType(typeof(Training))]
        public IHttpActionResult DeleteTraining(int id)
        {
            Training training = db.Trainings.Find(id);
            if (training == null)
            {
                return NotFound();
            }

            db.Trainings.Remove(training);
            db.SaveChanges();

            return Ok(training);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TrainingExists(int id)
        {
            return db.Trainings.Count(e => e.Id == id) > 0;
        }
    }
}