namespace TMS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modelchange : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Trainings", "CreatedBy", c => c.String());
            AddColumn("dbo.Trainings", "ModifiedBy", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Trainings", "ModifiedBy");
            DropColumn("dbo.Trainings", "CreatedBy");
        }
    }
}
