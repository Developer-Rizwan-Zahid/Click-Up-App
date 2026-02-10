using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ClickUpBackend.Models;

namespace ClickUpBackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Space> Spaces { get; set; }
        public DbSet<ProjectList> Lists { get; set; }
        public DbSet<TaskItem> Tasks { get; set; }
        public DbSet<ChatMessage> ChatMessages { get; set; }
        public DbSet<Dashboard> Dashboards { get; set; }
        public DbSet<CalendarEvent> CalendarEvents { get; set; }
        // DashboardTemplate can be in-memory or DB. Let's keep it in-memory for now or add it if we want custom templates.
        // public DbSet<DashboardTemplate> DashboardTemplates { get; set; }
    }
}
