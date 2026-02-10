using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ClickUpBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AiController : ControllerBase
    {
        [HttpPost("chat")]
        public IActionResult Chat([FromBody] AiRequest request)
        {
            // Simulate AI delay
            // await Task.Delay(1000); 

            // Simple mock logic for "Real-time" feel
            string response = "I'm a simulated AI. I can help you organize tasks or summarize documents!";
            
            if (request.Query.ToLower().Contains("create task"))
                response = "I can help create a task! Please provide the task name and due date.";
            else if (request.Query.ToLower().Contains("hello"))
                response = "Hi there! Ready to boost your productivity?";

            return Ok(new { response });
        }
    }

    public class AiRequest
    {
        public string Query { get; set; } = string.Empty;
    }
}
