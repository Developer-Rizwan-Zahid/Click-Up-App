import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

function NavDropdown({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-[#292D34] pb-1 transition-colors outline-none">
                {title}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] flex flex-col">
                    {items.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="px-4 py-2 text-sm text-gray-600 hover:text-[#7B68EE] hover:bg-gray-50 font-medium text-left transition-colors whitespace-nowrap"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function BlogHero() {
    return (
        <section className="pt-5 pb-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Search & Navigation Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <div className="flex items-center gap-6 overflow-visible w-full md:w-auto pb-2 md:pb-0 relative z-20 flex-wrap justify-center md:justify-start">
                        <Link href="/blog" className="text-sm font-bold text-[#7B68EE] border-b-2 border-[#7B68EE] pb-1 whitespace-nowrap">
                            Blog Home
                        </Link>
                        <NavDropdown
                            title="Explore ClickUp"
                            items={["Product Demo", "Pricing", "Templates", "Features", "Use Cases", "Integrations"]}
                        />
                        <NavDropdown
                            title="Teams"
                            items={["Agencies", "Design", "Marketing", "Product", "Software", "Construction"]}
                        />
                        <NavDropdown
                            title="Topics"
                            items={["AI & Automation", "Agile", "Data Insights", "Goal Setting", "Note Taking", "Productivity", "Project Management", "Time Management"]}
                        />
                        <Link href="#" className="text-sm font-bold text-gray-500 hover:text-[#292D34] pb-1 whitespace-nowrap">
                            News
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE]"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                        <Button className="bg-[#7B68EE] hover:bg-[#6853E6] text-white font-bold rounded-lg px-6">
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Main Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Newsletter & Headline */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black text-[#292D34] mb-6 tracking-tight leading-tight">
                            Project management tips & trends, delivered.
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
                            Join millions of productivity lovers and get the latest insights delivered straight to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#7B68EE] focus:ring-2 focus:ring-[#7B68EE]/20 transition-all"
                            />
                            <Button className="h-full py-3.5 px-8 bg-[#292D34] hover:bg-black text-white font-bold rounded-xl text-base">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">
                            By clicking Subscribe, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>

                    {/* Right Side: Featured Post Card */}
                    <div className="group cursor-pointer">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
                                alt="Featured Post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-black text-[#7B68EE] uppercase tracking-wider shadow-sm">
                                Featured
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <span className="text-[#E01E5A] font-bold">Productivity</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                            <h2 className="text-3xl font-bold text-[#292D34] group-hover:text-[#7B68EE] transition-colors leading-tight">
                                10 Ways AI Will Change Project Management in 2026
                            </h2>
                            <p className="text-gray-500 line-clamp-2">
                                Artificial Intelligence isn't just a buzzword—it's reshaping how we plan, execute, and deliver projects. Here's what you need to know.
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-sm font-bold text-[#292D34]">Zeb Evans</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
