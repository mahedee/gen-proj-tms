namespace TMS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class applicationuserchanged : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.IdentityUsers", "FirstName");
            DropColumn("dbo.IdentityUsers", "LastName");
            DropColumn("dbo.IdentityUsers", "Email");
        }
        
        public override void Down()
        {
            AddColumn("dbo.IdentityUsers", "Email", c => c.String());
            AddColumn("dbo.IdentityUsers", "LastName", c => c.String());
            AddColumn("dbo.IdentityUsers", "FirstName", c => c.String());
        }
    }
}
