using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TMS.Repository;
using TMS.Models;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace TMS.Controllers
{
    public class TrainingCategoryController : ApiController
    {

        private TMSContext db = new TMSContext();
        private UnitOfWork unitOfWork = new UnitOfWork();

        // GET api/TrainingCategory
        
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        public IEnumerable<TrainingCategory> GetTrainingCategory() 
        {
            List<TrainingCategory> lstOfTrainingCategory = new List<TrainingCategory>();
            lstOfTrainingCategory = unitOfWork.TrainingCategoryRepository.All.ToList();
            return lstOfTrainingCategory;
        }


        // GET api/<TrainingCategory>/5

        [ResponseType(typeof(TrainingCategory))]
        public IHttpActionResult GetTrainingCategory(int id)
        {
            TrainingCategory objOftrainingCategory = db.TrainingCategories.Find(id);
            if (objOftrainingCategory == null)
            {
                return NotFound();
            }

            return Ok(objOftrainingCategory);
        }


        // POST api/TrainingCategory
        [ResponseType(typeof(TrainingCategory))]
        public IHttpActionResult PostTrainingCategory(TrainingCategory trainingCategory) 
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }
            db.TrainingCategories.Add(trainingCategory);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = trainingCategory.Id }, trainingCategory);
        }

        // PUT api/<TrainingCategory>/5
        public IHttpActionResult PutTrainingCategory(TrainingCategory trainingCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != training.Id)
            //{
            //    return BadRequest();
            //}

            db.Entry(trainingCategory).State = EntityState.Modified;

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

        // DELETE api/<controller>/5
        [ResponseType(typeof(TrainingCategory))]
        public IHttpActionResult DeleteTraining(int id)
        {
            TrainingCategory objOftrainingCategory = db.TrainingCategories.Find(id);
            if (objOftrainingCategory == null)
            {
                return NotFound();
            }

            db.TrainingCategories.Remove(objOftrainingCategory);
            db.SaveChanges();

            return Ok(objOftrainingCategory);
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