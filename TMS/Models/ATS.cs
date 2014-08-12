using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Web;

namespace TMS.Models
{
    public class ATS
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        //[Index("IX_TrainingCode", 1, IsUnique = true)]
        public string TrainingCode { get; set; }

        public int Iteration { get; set; }
        public int TrainerId { get; set; }

        public string Topic { get; set; }
        public int BatchSize { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public string TrainersResponsibility { get; set; }
        public int StatusId { get; set; }

        
        [StringLength(4)]
        public string CalendarYear { get; set; }

        public string CreatedBy { get; set; }

        //[ForeignKey("CreatedBy")]
        //public virtual ApplicationUser CreatedByUser { get; set; }

        public string ModifiedBy { get; set; }  
        public DateTime CreateDate { get; set; }
        public DateTime ModificationDate { get; set; }

        public bool IsActive { get; set; }

    }
}