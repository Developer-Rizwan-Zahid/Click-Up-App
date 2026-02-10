import Link from "next/link";
import { Laptop, Smartphone, Globe } from "lucide-react";

export function TimeTrackingGlobal() {
    return (
        <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -top-20 -left-20" />
                <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -bottom-20 -right-20" />
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Track time where you work
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16">
                    Global time tracking, across multiple devices, with multiple integrations available.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Laptop className="w-10 h-10 text-purple-400 mb-6 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Desktop App</h3>
                        <p className="text-slate-400 mb-4">Native experience for intense focus.</p>
                        <Link href="/download" className="text-purple-400 hover:text-purple-300 font-semibold">Download for Mac & Windows &rarr;</Link>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Smartphone className="w-10 h-10 text-pink-400 mb-6 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Mobile App</h3>
                        <p className="text-slate-400 mb-4">Track time on the go, anywhere.</p>
                        <Link href="/download" className="text-pink-400 hover:text-pink-300 font-semibold">Get iOS & Android &rarr;</Link>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Globe className="w-10 h-10 text-blue-400 mb-6 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Chrome Extension</h3>
                        <p className="text-slate-400 mb-4">Track time from any website.</p>
                        <Link href="/download" className="text-blue-400 hover:text-blue-300 font-semibold">Add to Chrome &rarr;</Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/signup"
                        className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25"
                    >
                        Start Tracking Free
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/20 text-lg font-bold rounded-xl transition-all"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    );
}
