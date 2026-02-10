using System.ComponentModel.DataAnnotations;

namespace ClickUpBackend.Models
{
    public class Space
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string Color { get; set; } = "#808080";

        // For simplicity in this iteration, we link to a user directly or could be a workspace
        public string OwnerId { get; set; } = string.Empty; 

        public List<ProjectList> Lists { get; set; } = new();
    }
}
