using ClickUpBackend.Data;
using ClickUpBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClickUpBackend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SpacesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SpacesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("default")]
        public async Task<ActionResult<object>> GetDefaultSpace()
        {
            // For MVP, get the first space or "Team Space"
            var space = await _context.Spaces
                .Include(s => s.Lists)
                .ThenInclude(l => l.Tasks)
                .FirstOrDefaultAsync(s => s.Name == "Team Space");

            if (space == null) return NotFound("Team Space not found. Please run dashboard seed first.");

            // Calculate progress for each list
            var listsWithStats = space.Lists.Select(l => new 
            {
                l.Id,
                l.Name,
                l.Type,
                TotalTasks = l.Tasks.Count,
                CompletedTasks = l.Tasks.Count(t => t.Status == "Complete"),
                Owner = "Me" // Mock owner
            });

            // Calculate overall workload stats for Pie Chart
            var allTasks = space.Lists.SelectMany(l => l.Tasks).ToList();
            var workload = new 
            {
                ToDo = allTasks.Count(t => t.Status == "To Do"),
                InProgress = allTasks.Count(t => t.Status == "In Progress"),
                Complete = allTasks.Count(t => t.Status == "Complete")
            };

            return Ok(new 
            {
                Space = new { space.Id, space.Name, space.Color },
                Lists = listsWithStats,
                Workload = workload
            });
        }
    }
}
