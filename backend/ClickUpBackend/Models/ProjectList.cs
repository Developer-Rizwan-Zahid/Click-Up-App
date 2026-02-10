using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ClickUpBackend.Models
{
    public class ProjectList
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string Type { get; set; } = "List"; // List, Doc, etc.

        public int SpaceId { get; set; }
        
        [JsonIgnore]
        public Space? Space { get; set; }

        public List<TaskItem> Tasks { get; set; } = new();
    }
}
