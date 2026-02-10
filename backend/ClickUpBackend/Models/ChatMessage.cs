using System.ComponentModel.DataAnnotations;

namespace ClickUpBackend.Models
{
    public class ChatMessage
    {
        public int Id { get; set; }

        [Required]
        public string Content { get; set; } = string.Empty;

        public string Sender { get; set; } = "Anonymous"; // E.g., "Me" or "AI"

        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        
        // Optional: RoomId or ReceiverId for future DM support
        public string? RoomId { get; set; }
    }
}
