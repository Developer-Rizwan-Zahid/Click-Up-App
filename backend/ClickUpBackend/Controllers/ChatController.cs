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
    public class ChatController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChatController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChatMessage>>> GetMessages()
        {
            return await _context.ChatMessages
                .OrderBy(m => m.Timestamp)
                .Take(50) 
                .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<ChatMessage>> SendMessage([FromBody] ChatMessage message)
        {
            message.Timestamp = DateTime.UtcNow;
            if (string.IsNullOrEmpty(message.Sender)) message.Sender = "Me";

            _context.ChatMessages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMessages), new { id = message.Id }, message);
        }
    }
}
