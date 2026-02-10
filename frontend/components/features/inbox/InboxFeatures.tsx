import { ArrowRight, MessageSquare, ListTodo, Filter } from "lucide-react";

const InboxFeatures = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 space-y-32">
                {/* Feature 1: Streamline Communication (Left Text, Right Visual) */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1 space-y-6">
                        <span className="text-[#7B68EE] font-medium tracking-widest text-sm uppercase">Streamline Communication</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] leading-[1.1]">
                            One place for all
                            <br />
                            communications
                        </h2>
                        <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                            Make sure nothing falls through the cracks with a centralized communication hub for all of your work across ClickUp.
                        </p>
                        <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Get started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-1 w-full relative">
                        {/* Visual Mockup 1 */}
                        <div className="relative rounded-2xl border border-gray-100 bg-white shadow-2xl p-4 overflow-hidden">
                            {/* Detailed Email Thread Mockup */}
                            <div className="flex items-center gap-3 mb-6 p-2">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">AZ</div>
                                <div className="text-sm font-medium">Alexander Zhitchenko</div>
                                <div className="text-xs text-gray-400 ml-auto">May 17 at 4:32 pm</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
                                <div className="h-2 bg-gray-200 rounded w-full" />
                                <div className="h-2 bg-gray-200 rounded w-5/6" />
                                <div className="h-2 bg-gray-200 rounded w-4/6" />
                            </div>
                            <div className="pl-6 border-l-2 border-gray-200 space-y-4">
                                <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px]">YD</div>
                                        <div className="h-1.5 bg-gray-200 w-24 rounded" />
                                    </div>
                                    <div className="h-1.5 bg-gray-100 w-full rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Smart Notifications (Right Text, Left Visual) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    <div className="flex-1 space-y-6">
                        <span className="text-[#7B68EE] font-medium tracking-widest text-sm uppercase">Smart Notifications</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] leading-[1.1]">
                            Filter out the noise
                        </h2>
                        <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                            Automatically highlight your most important notifications so you can focus on the work that matters most.
                        </p>
                        <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Get started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-1 w-full relative">
                        {/* Visual Mockup 2 */}
                        <div className="relative rounded-2xl border border-gray-100 bg-white shadow-2xl p-6 overflow-hidden aspect-[4/3] flex flex-col justify-center">
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                        <Filter className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-gray-900">Important Update</span>
                                            <span className="text-xs text-purple-600 font-medium px-2 py-0.5 bg-purple-100 rounded-full">Priority</span>
                                        </div>
                                        <div className="h-2 bg-purple-100/50 rounded w-2/3" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 opacity-60">
                                    <div className="w-10 h-10 rounded-full bg-gray-100" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-2 bg-gray-100 rounded w-1/2" />
                                        <div className="h-2 bg-gray-50 rounded w-3/4" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 opacity-40">
                                    <div className="w-10 h-10 rounded-full bg-gray-100" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-2 bg-gray-100 rounded w-1/2" />
                                        <div className="h-2 bg-gray-50 rounded w-3/4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Context (Left Text, Right Visual) */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="flex-1 space-y-6">
                        <span className="text-[#7B68EE] font-medium tracking-widest text-sm uppercase">Conversations with Context</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#292D34] leading-[1.1]">
                            Get into your (work) flow
                        </h2>
                        <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                            See your work and notifications side-by-side for the context you need to crush work like never before.
                        </p>
                        <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Get started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-1 w-full relative">
                        {/* Visual Mockup 3 - Split View */}
                        <div className="relative rounded-2xl border border-gray-100 bg-white shadow-2xl overflow-hidden aspect-[4/3] flex">
                            <div className="w-1/3 border-r border-gray-100 bg-gray-50 p-3 space-y-2">
                                <div className="h-8 rounded bg-white border border-gray-100" />
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`h-12 rounded w-full ${i === 1 ? 'bg-white border border-gray-200 shadow-sm' : 'bg-transparent'}`} />
                                ))}
                            </div>
                            <div className="flex-1 bg-white p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status: Approved</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Launch Mobile App</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1/4 text-xs text-gray-400 font-medium uppercase">Assignees</div>
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
                                            <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1/4 text-xs text-gray-400 font-medium uppercase">Due Date</div>
                                        <div className="text-sm font-medium text-red-500">Aug 20 (Overdue)</div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="h-2 bg-gray-100 rounded w-full mb-2" />
                                        <div className="h-2 bg-gray-100 rounded w-full mb-2" />
                                        <div className="h-2 bg-gray-100 rounded w-2/3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InboxFeatures;
