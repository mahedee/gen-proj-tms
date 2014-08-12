using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TMS.Models;

namespace TMS.Repository
{
    //public class TMSContext : DbContext
    public class TMSContext : IdentityDbContext<ApplicationUser>
    {
        public TMSContext()
            : base("TMSContext")
        {
        }


        public DbSet<Training> Trainings { get; set; }
        public DbSet<TrainingCategory> TrainingCategories { get; set; }
        public DbSet<ATS> ATS { get; set; }
<<<<<<< .mine

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityUserLogin>().HasKey<string>(l => l.UserId);
            modelBuilder.Entity<IdentityRole>().HasKey<string>(r => r.Id);
            modelBuilder.Entity<IdentityUserRole>().HasKey(r => new { r.RoleId, r.UserId });
        }

=======
        public DbSet<Trainer> Trainers { get; set; }
>>>>>>> .r66
    }

}