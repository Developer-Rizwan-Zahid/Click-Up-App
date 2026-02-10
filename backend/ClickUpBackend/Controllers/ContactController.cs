using ClickUpBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClickUpBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        public ContactController()
        {
        }

        [HttpPost]
        public IActionResult SubmitContact([FromBody] ContactRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (request.FirstName.ToLower() == "error")
            {
                 return StatusCode(500, "Simulated server error");
            }

            Console.WriteLine($"[Contact Sales] New Request: {request.FirstName}, {request.WorkEmail}, {request.EmployeeCount} employees");

            return Ok(new { message = "Contact request submitted successfully" });
        }
    }
}
