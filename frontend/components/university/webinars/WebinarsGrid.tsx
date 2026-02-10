import WebinarCard from './WebinarCard';

const webinars = [
    {
        title: "Feature Fest: AI Custom Fields Deep Dive",
        description: "Discover how to leverage AI Custom Fields to automate data entry and gain insights from your tasks.",
        duration: "45 min",
        color: "bg-gradient-to-br from-[#FF0077] to-[#8000FF]", // Pink/Purple
        tag: "Product Update"
    },
    {
        title: "ClickUp 3.0: The New Productivity Standard",
        description: "A comprehensive walkthrough of the all-new ClickUp 3.0 experience, featuring Universal Search and more.",
        duration: "1h 15 min",
        color: "bg-gradient-to-br from-[#7B68EE] to-[#00D2FF]", // Purple/Blue
        tag: "Major Release"
    },
    {
        title: "Agile Scrums & Sprints",
        description: "Learn how to set up and manage your agile workflows using Sprints, Boards, and Dashboards.",
        duration: "55 min",
        color: "bg-gradient-to-br from-[#00C853] to-[#B2FF59]", // Green/Lime
        tag: "Methodology"
    },
    {
        title: "Mastering Dashboards for Reporting",
        description: "Create powerful dashboards to track team progress, identifying bottlenecks, and share reports.",
        duration: "35 min",
        color: "bg-gradient-to-br from-[#FFAB00] to-[#FFD600]", // Orange/Yellow
        tag: "Reporting"
    },
    {
        title: "Automate Your Busy Work",
        description: "See real-world examples of Automations that save teams hours of manual work every week.",
        duration: "28 min",
        color: "bg-gradient-to-br from-[#D500F9] to-[#AA00FF]", // Violet
        tag: "Automation"
    },
    {
        title: "ClickUp for Creative Agencies",
        description: "Best practices for managing client feedback, proofs, and creative assets in one place.",
        duration: "50 min",
        color: "bg-gradient-to-br from-[#FF3D00] to-[#FF9100]", // Deep Orange
        tag: "Solution"
    },
    {
        title: "OKR Tracking with Goals",
        description: "Align your team's objectives with key results using ClickUp Goals and targets.",
        duration: "22 min",
        color: "bg-gradient-to-br from-[#2962FF] to-[#00B0FF]", // Blue
        tag: "Strategy"
    },
    {
        title: "Guest Access & Permissions",
        description: "Everything you need to know about sharing your workspace safely with clients and contractors.",
        duration: "18 min",
        color: "bg-gradient-to-br from-[#607D8B] to-[#90A4AE]", // Grey
        tag: "Admin"
    },
    {
        title: "Whiteboards for Brainstorming",
        description: "Unlock creativity with ClickUp Whiteboards. Real-time collaboration examples.",
        duration: "30 min",
        color: "bg-gradient-to-br from-[#EC407A] to-[#F48FB1]", // Pink
        tag: "Collaboration"
    }
];

export default function WebinarsGrid() {
    return (
        <div className="flex-1">
            {/* Sort / Results Count */}
            <div className="flex items-center justify-between mb-6 text-sm">
                <span className="font-bold text-gray-700">{webinars.length} Webinars</span>

                <div className="flex items-center gap-2 text-gray-500">
                    <span>Sort by:</span>
                    <select className="bg-transparent font-bold text-gray-800 focus:outline-none">
                        <option>Newest</option>
                        <option>Most Popular</option>
                        <option>Alphabetical</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.map((webinar, idx) => (
                    <WebinarCard key={idx} {...webinar} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-bold hover:border-[#7B68EE] hover:text-[#7B68EE] transition-all">
                    Load More Webinars
                </button>
            </div>
        </div>
    );
}
