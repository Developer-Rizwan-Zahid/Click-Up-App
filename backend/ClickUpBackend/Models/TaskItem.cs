using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ClickUpBackend.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string Status { get; set; } = "To Do"; 

        public DateTime? DueDate { get; set; }

        public int ListId { get; set; }

        [JsonIgnore]
        public ProjectList? List { get; set; }

        // Optional: Assignee
        public string? AssigneeId { get; set; }
    }
}
