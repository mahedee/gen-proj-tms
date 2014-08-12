using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Mvc;
using TMS.Repository;

namespace TMS.Controllers
{
    public class TrainerController : ApiController
    {
        private TMSContext db = new TMSContext();
        private UnitOfWork unitOfWork = new UnitOfWork();

        // GET api/ Trainer
        public IEnumerable<Trainer> GetTrainer()
        {
            List<Trainer> lstofTrainer = new List<Trainer>();
            lstofTrainer = unitOfWork.TrainerRepository.All.ToList();
            return lstofTrainer;
        }

        // GET api/<Trainer>/ id
        [ResponseType(typeof(Trainer))]
        public IHttpActionResult GetTrainer(int id)
        {
            Trainer objOfTrainer = db.Trainers.Find(id);
            if (objOfTrainer == null)
            {
                return NotFound();
            }

            return Ok(objOfTrainer);
        }

        // POST api/<Trainer>
        [ResponseType(typeof(Trainer))]
        public IHttpActionResult PostTrainer(Trainer objOfTrainer)
        {

            objOfTrainer.ModificationDate = DateTime.Now;
            objOfTrainer.CreateDate = DateTime.Now;
            objOfTrainer.ModifiedBy = "Foysal";
            objOfTrainer.CreatedBy = "Mahedee";
            objOfTrainer.IsActive = true;


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Trainers.Add(objOfTrainer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = objOfTrainer.Id }, objOfTrainer);
        }

        // PUT api/<Trainer>/ id
        public IHttpActionResult PutTrainer(Trainer objOfTrainer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(objOfTrainer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
               
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        // DELETE api/<Trainer>/id
        [ResponseType(typeof(Trainer))]
        public IHttpActionResult DeleteTrainier(int id)
        {
            Trainer objOftrainer = db.Trainers.Find(id);
            if (objOftrainer == null)
            {
                return NotFound();
            }

            db.Trainers.Remove(objOftrainer);
            db.SaveChanges();

            //Trainer trainer = unitOfWork.TrainerRepository.Find(id);
            //unitOfWork.TrainerRepository.Delete(id);
            //unitOfWork.Save();

            //return Ok(trainer);
           return Ok(objOftrainer);



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