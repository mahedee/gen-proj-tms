namespace TMS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initalmigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TrainingCategories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Trainings",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        ATSId = c.Long(nullable: false),
                        Title = c.String(),
                        Description = c.String(),
                        Venue = c.String(),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        ModificationDate = c.DateTime(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ATS", t => t.ATSId, cascadeDelete: true)
                .Index(t => t.ATSId);
            
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
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Trainings", "ATSId", "dbo.ATS");
            DropIndex("dbo.Trainings", new[] { "ATSId" });
            DropTable("dbo.ATS");
            DropTable("dbo.Trainings");
            DropTable("dbo.TrainingCategories");
        }
    }
}
