using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TMS.Models;
using TMS.Repository;

namespace TMS.Controllers
{
    public class ATSController : ApiController
    {
        private TMSContext db = new TMSContext();
        private UnitOfWork unitOfWork = new UnitOfWork();

        // GET api/<ATS>
        public IEnumerable<ATS> GetATS()
        {
            List<ATS> lstofATS = new List<ATS>();
            lstofATS = unitOfWork.ATSRepository.All.ToList();
            return lstofATS;       
        }

        // GET api/<ATS>/ id
        [ResponseType(typeof(ATS))]
        public IHttpActionResult GetTrainingStrategy(int id)
        {
            ATS objoftrainingStrategy = db.ATS.Find(id);
            if (objoftrainingStrategy == null)
            {
                return NotFound();
            }

            return Ok(objoftrainingStrategy);
        }

        // POST api/ATS
        [ResponseType(typeof(ATS))]
        public IHttpActionResult PostTrainingStategy(ATS objOfTrainigStrategy)
        {

            objOfTrainigStrategy.ModificationDate = DateTime.Now;
            objOfTrainigStrategy.CreateDate = DateTime.Now;
            objOfTrainigStrategy.ModifiedBy = "Foysal";
            objOfTrainigStrategy.CreatedBy = "Mahedee";
            objOfTrainigStrategy.IsActive = true;


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.ATS.Add(objOfTrainigStrategy);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = objOfTrainigStrategy.Id }, objOfTrainigStrategy);
        }

        // PUT api/ATS/5
        public IHttpActionResult PutTrainingStrategy(ATS objOfTrainingStrategy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            } 

            db.Entry(objOfTrainingStrategy).State = EntityState.Modified;

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

        // DELETE api/ATS/ id
        [ResponseType(typeof(ATS))]
        public IHttpActionResult DeleteTrainingStrategy(int id)
        {
            ATS objOftrainingStrategy = db.ATS.Find(id);
            if (objOftrainingStrategy == null)
            {
                return NotFound();
            }

            db.ATS.Remove(objOftrainingStrategy);
            db.SaveChanges();

            return Ok(objOftrainingStrategy);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}