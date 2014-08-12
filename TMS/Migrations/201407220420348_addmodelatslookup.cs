namespace TMS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addmodelatslookup : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Trainings");
            CreateTable(
                "dbo.ATS",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        TrainingCode = c.String(),
                        Iteration = c.Int(nullable: false),
                        TrainerId = c.Int(nullable: false),
                        Topic = c.String(),
                        BatchSize = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        TrainersResponsibility = c.String(),
                        StatusId = c.Int(nullable: false),
                        CalendarYear = c.String(maxLength: 4),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModificationDate = c.DateTime(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.CalendarYear, unique: true);
            
            AddColumn("dbo.Trainings", "ATSId", c => c.Long(nullable: false));
            AddColumn("dbo.Trainings", "Venue", c => c.String());
            AddColumn("dbo.Trainings", "CreateDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Trainings", "ModificationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Trainings", "IsActive", c => c.Boolean(nullable: false));
            AlterColumn("dbo.Trainings", "Id", c => c.Long(nullable: false, identity: true));
            AddPrimaryKey("dbo.Trainings", "Id");
            CreateIndex("dbo.Trainings", "ATSId");
            AddForeignKey("dbo.Trainings", "ATSId", "dbo.ATS", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trainings", "ATSId", "dbo.ATS");
            DropIndex("dbo.ATS", new[] { "CalendarYear" });
            DropIndex("dbo.Trainings", new[] { "ATSId" });
            DropPrimaryKey("dbo.Trainings");
            AlterColumn("dbo.Trainings", "Id", c => c.Int(nullable: false, identity: true));
            DropColumn("dbo.Trainings", "IsActive");
            DropColumn("dbo.Trainings", "ModificationDate");
            DropColumn("dbo.Trainings", "CreateDate");
            DropColumn("dbo.Trainings", "Venue");
            DropColumn("dbo.Trainings", "ATSId");
            DropTable("dbo.ATS");
            AddPrimaryKey("dbo.Trainings", "Id");
        }
    }
}
