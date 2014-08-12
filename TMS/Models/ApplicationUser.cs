using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace TMS.Models
{

    public class ApplicationUser : IdentityUser
    {
        //public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager,
        //    string authenticationType)
        //{
        //    var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
        //    return userIdentity;
        //}

        //[Required]
        //[StringLength(50, ErrorMessage = "The {0} must be at most {1} characters long.")]
        //public string Name { get; set; }
        
        
        //[Required]
        //public string FirstName { get; set; }

        //[Required]
        //public string LastName { get; set; }

        //[Required]
        //public string Email { get; set; }

    }


  
}