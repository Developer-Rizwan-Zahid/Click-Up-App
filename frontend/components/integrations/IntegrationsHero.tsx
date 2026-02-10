import Link from "next/link";
import { Search } from "lucide-react";

export function IntegrationsHero() {
    return (
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white text-center">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8">
                    Connect over 1,000+ tools to <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        ClickUp for free
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12">
                    Welcome to the future of productivity, where useful features and integrations are shipped to you weekly.
                </p>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto relative mb-16">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-6 w-6 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search integrations..."
                        className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl text-lg focus:outline-none focus:border-purple-500 transition-colors shadow-lg"
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4">
                    {["All", "Native Integrations", "Development", "Time Tracking", "CRM", "Storage"].map((cat, i) => (
                        <button
                            key={i}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${i === 0 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
