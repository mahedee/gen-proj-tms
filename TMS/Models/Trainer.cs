using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TMS
{
    public class Trainer
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        //[Index("IX_TrainingCode", 1, IsUnique = true)]
        public string Name { get; set; }

        public string Description { get; set; }

        public long EmployeeId { get; set; }

        public string UserId { get; set; }

        public int TrainerType { get; set; }
        public string CreatedBy { get; set; }

        //[ForeignKey("CreatedBy")]
        //public virtual ApplicationUser CreatedByUser { get; set; }

        public string ModifiedBy { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModificationDate { get; set; }

        public bool IsActive { get; set; }
    }

}
