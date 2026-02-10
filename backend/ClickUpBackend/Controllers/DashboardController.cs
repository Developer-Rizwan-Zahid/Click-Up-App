using ClickUpBackend.Data;
using ClickUpBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace ClickUpBackend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/dashboard
        [HttpGet]
        public async Task<ActionResult<List<Dashboard>>> GetDashboards()
        {
            // For now, returning all dashboards. In real app, filter by OwnerId.
            return await _context.Dashboards.OrderByDescending(d => d.CreatedAt).ToListAsync();
        }

        // GET: api/dashboard/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Dashboard>> GetDashboard(string id)
        {
            var dashboard = await _context.Dashboards.FindAsync(id);

            if (dashboard == null)
            {
                return NotFound();
            }

            return dashboard;
        }

        [HttpGet("sidebar")]
        public async Task<ActionResult<List<Space>>> GetSidebar()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); 

            var spaces = await _context.Spaces
                .Include(s => s.Lists)
                .ToListAsync();

            return spaces;
        }

        [HttpGet("recent")]
        public async Task<ActionResult<List<TaskItem>>> GetRecentTasks()
        {
            var tasks = await _context.Tasks
                .Include(t => t.List)
                .ThenInclude(l => l.Space)
                .OrderByDescending(t => t.Id) 
                .Take(5)
                .ToListAsync();

            return tasks;
        }

        [HttpPost("seed")]
        public async Task<IActionResult> SeedData()
        {
            if (await _context.Spaces.AnyAsync()) return BadRequest("Data already seeded");

            var space = new Space { Name = "Team Space", Color = "blue", OwnerId = "system" };
            _context.Spaces.Add(space);
            await _context.SaveChangesAsync();

            var list1 = new ProjectList { Name = "Project 1", SpaceId = space.Id, Type = "List" };
            var list2 = new ProjectList { Name = "Project 2", SpaceId = space.Id, Type = "List" };
            var doc = new ProjectList { Name = "Project Notes", SpaceId = space.Id, Type = "Doc" };

            _context.Lists.AddRange(list1, list2, doc);
            await _context.SaveChangesAsync();

            _context.Tasks.AddRange(
                new TaskItem { Name = "Design Mockups", ListId = list1.Id, Status = "To Do" },
                new TaskItem { Name = "Frontend Setup", ListId = list1.Id, Status = "In Progress" },
                new TaskItem { Name = "Backend Models", ListId = list1.Id, Status = "Complete" },
                new TaskItem { Name = "API Integration", ListId = list2.Id, Status = "To Do" }
            );
            await _context.SaveChangesAsync();

            return Ok("Seeded successfully");
        }
        
        [HttpGet("templates")]
        public ActionResult<List<DashboardTemplate>> GetTemplates()
        {
            var templates = new List<DashboardTemplate>
            {
                new DashboardTemplate { Name = "Task Management", Description = "Manage and prioritize tasks", Icon = "Layout", Color = "#3B82F6" },
                new DashboardTemplate { Name = "AI Team Center", Description = "View team activity with AI", Icon = "Bot", Color = "#A855F7", IsCenter = true },
                new DashboardTemplate { Name = "Time Tracking", Description = "View and report on time tracking metrics", Icon = "Clock", Color = "#10B981", Badge = "Business" },
                new DashboardTemplate { Name = "Project Management", Description = "Analyze project progress and metrics", Icon = "KanbanSquare", Color = "#3B82F6", Badge = "Business" },
                new DashboardTemplate { Name = "AI Personal Center", Description = "Improve your performance and career with ClickUp's AI cards", Icon = "User", Color = "#A855F7", IsCenter = true }
            };

            return Ok(templates);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateDashboard([FromBody] DashboardTemplate template)
        {
            var dashboard = new Dashboard
            {
                Name = template.Name,
                Description = template.Description,
                TemplateId = template.Id,
                OwnerId = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? "system", // Fallback for dev
                WidgetsJson = "[]" // Initialize with empty widgets
            };

            // AI Logic: If it's an AI template, pre-populate widgets
            if (template.Name.Contains("AI"))
            {
                dashboard.WidgetsJson = "[{\"type\": \"ai-summary\", \"title\": \"Team Activity Summary\"}]";
            }

            _context.Dashboards.Add(dashboard);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Dashboard created", DashboardId = dashboard.Id });
        }
    }
}
