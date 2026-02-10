using System.ComponentModel.DataAnnotations;

namespace ClickUpBackend.Models
{
    public class ContactRequest
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public required string WorkEmail { get; set; }

        [Required]
        public required string FirstName { get; set; }

        [Required]
        public required string Phone { get; set; }

        [Required]
        public required string EmployeeCount { get; set; }

        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    }
}
