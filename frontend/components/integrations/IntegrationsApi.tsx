import Link from "next/link";
import { Code, Layers } from "lucide-react";

export function IntegrationsApi() {
    return (
        <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -mr-20 -mt-20" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                    Embed web apps or build<br />your own with ClickUp's API
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16">
                    Connect any tool with ClickUp’s Open API or simply embed a web app inside ClickUp with Embed View.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                        <Code className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">ClickUp API</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Build custom ClickUp integrations and apps using the public API for tailored automation and data synchronization.
                        </p>
                        <Link href="#" className="inline-flex items-center text-white font-bold group-hover:gap-2 transition-all">
                            Read Documentation &rarr;
                        </Link>
                    </div>

                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left group">
                        <Layers className="w-12 h-12 text-pink-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Embed View</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Bring other apps directly into your workflow. Embed Google Sheets, YouTube, Figma, and much more.
                        </p>
                        <Link href="#" className="inline-flex items-center text-white font-bold group-hover:gap-2 transition-all">
                            View Examples &rarr;
                        </Link>
                    </div>
                </div>

                <div className="mt-20">
                    <Link
                        href="/signup"
                        className="inline-block px-12 py-5 bg-purple-600 hover:bg-purple-500 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all"
                    >
                        Get Started for Free
                    </Link>
                </div>
            </div>
        </div>
    );
}
