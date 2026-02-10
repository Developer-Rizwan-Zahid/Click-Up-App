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
    public class CalendarController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CalendarController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("events")]
        public async Task<ActionResult<List<CalendarEvent>>> GetEvents([FromQuery] DateTime start, [FromQuery] DateTime end)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            
            return await _context.CalendarEvents
                .Where(e => e.UserId == userId && e.Start >= start && e.Start <= end)
                .ToListAsync();
        }

        [HttpPost("events")]
        public async Task<ActionResult<CalendarEvent>> CreateEvent([FromBody] CalendarEvent calendarEvent)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            calendarEvent.UserId = userId;
            
            _context.CalendarEvents.Add(calendarEvent);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetEvents), new { id = calendarEvent.Id }, calendarEvent);
        }

        [HttpDelete("events/{id}")]
        public async Task<IActionResult> DeleteEvent(string id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var calendarEvent = await _context.CalendarEvents.FindAsync(id);
            
            if (calendarEvent == null || calendarEvent.UserId != userId)
            {
                return NotFound();
            }
            
            _context.CalendarEvents.Remove(calendarEvent);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }
}
