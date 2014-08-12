using System;
using System.Data.Entity.Migrations.Model;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Http.Results;

namespace TMS.Models
{
    public class TrainingStatus
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public long Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string CreatedBy { get; set; }

        //[ForeignKey("CreatedBy")]
        //public virtual ApplicationUser CreatedByUser { get; set; }

        public string ModifiedBy { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModificationDate { get; set; }

        public bool IsActive { get; set; }


    }
}
