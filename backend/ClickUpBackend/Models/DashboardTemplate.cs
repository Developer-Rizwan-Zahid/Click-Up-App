using System.ComponentModel.DataAnnotations;

namespace ClickUpBackend.Models
{
    public class DashboardTemplate
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public string Icon { get; set; } // Lucide icon name

        public string Color { get; set; }

        public string Badge { get; set; }

        public bool IsCenter { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
