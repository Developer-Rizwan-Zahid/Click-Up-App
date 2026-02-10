import Link from 'next/link';
import { Calendar, Users, Mic } from 'lucide-react';

export default function UniversityLive() {
    return (
        <section className="py-24 bg-[#0F111A]">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Live Workshops</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Join our experts for interactive sessions and deep dives into specific topics.
                </p>
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-5xl">
                {/* Featured Event */}
                <div className="md:col-span-2 rounded-2xl bg-gradient-to-r from-[#7B68EE]/20 to-[#E01E5A]/20 p-[1px]">
                    <div className="h-full rounded-2xl bg-[#1A1C29] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="flex-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-[#E01E5A] text-white text-xs font-bold uppercase tracking-wider mb-4">
                                Happening Soon
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Mastering ClickUp 3.0: The New Era of Productivity</h3>
                            <p className="text-gray-400 mb-8">
                                A comprehensive walkthrough of the new features in ClickUp 3.0 with our product team. Q&A session included.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-[#7B68EE]" />
                                    <span>Tomorrow, 10:00 AM PST</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-[#7B68EE]" />
                                    <span>2,500+ Registered</span>
                                </div>
                            </div>
                            <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                                Register for Free
                            </button>
                        </div>

                        {/* Speaker Avatars (Placeholder) */}
                        <div className="w-full md:w-auto flex justify-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="w-16 h-16 rounded-full border-4 border-[#1A1C29] bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold text-xl relative z-10">
                                        {['JD', 'AS', 'MR'][i]}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
