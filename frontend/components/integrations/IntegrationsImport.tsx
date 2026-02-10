import { ArrowRight, UploadCloud } from "lucide-react";

export function IntegrationsImport() {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Automatic import from other tools
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Migrate to ClickUp in minutes. Bring everything over with just a few clicks! import tasks, projects, and attachments—no data left behind.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {["Asana", "Trello", "Todoist", "Jira", "Monday.com", "Basecamp", "Wrike", "Confluence"].map((tool, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium p-3 rounded-lg bg-slate-50 border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-3xl transform rotate-3" />
                        <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl p-12 flex flex-col items-center justify-center text-center aspect-[4/3] group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <UploadCloud className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Start Import</h3>
                            <p className="text-slate-500 mb-6">Upload CSV or connect directly</p>
                            <div className="text-green-600 font-bold flex items-center gap-1">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
