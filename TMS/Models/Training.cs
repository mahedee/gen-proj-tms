using System;
using System.Data.Entity.Migrations.Model;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Http.Results;

namespace TMS.Models
{
    public class Training
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public long Id { get; set; }

        public long ATSId { get; set; }

        //[ForeignKey("ATSId")]
        public virtual ATS ATSRef { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Venue { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public string CreatedBy { get; set; }

        //[ForeignKey("CreatedBy")]
        //public virtual ApplicationUser CreatedByUser { get; set; }

        public string ModifiedBy { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModificationDate { get; set; }

        public bool IsActive { get; set; }


    }
}
