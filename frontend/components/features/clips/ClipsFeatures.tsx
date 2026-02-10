import { Play, Mic, Video, Paperclip, MessageSquare, ArrowUp, Calendar, Clock, Smile, MoreHorizontal } from "lucide-react";

const ClipsFeatures = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase mb-4 block">
                        THE EVOLUTION OF WORK
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#292D34] mb-6 tracking-tight leading-[1.1]">
                        Connect Clips to your work
                        <br />
                        <span className="text-gray-400">to put ideas into action, faster</span>
                    </h2>
                    <p className="text-xl text-gray-500">
                        Experience the power of convergence. With AI superpowers.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1: Connect to Docs - Blue */}
                    <div className="group rounded-3xl p-8 bg-white hover:bg-gray-50/50 transition-colors border border-transparent hover:border-gray-100 pb-0 flex flex-col">
                        <h3 className="text-lg font-bold text-[#292D34] mb-8">Connect to Docs</h3>

                        <div className="relative rounded-t-2xl overflow-hidden bg-blue-500 pt-8 px-8 pb-0 flex-1 min-h-[300px] flex flex-col justify-end">
                            <div className="bg-white rounded-t-xl shadow-2xl p-6 relative top-2">
                                {/* Recording Widget Mockup */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="User" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-gray-800">Brenda</span>
                                        </div>
                                        <div className="text-sm text-gray-500">This is great!</div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex gap-4 shadow-sm mb-4">
                                    <div className="flex flex-col gap-3 text-sm text-gray-600 font-medium">
                                        <div className="flex items-center gap-2"><Mic className="w-4 h-4" /> Microphone</div>
                                        <div className="flex items-center gap-2 text-blue-600"><Video className="w-4 h-4" /> Share screen</div>
                                        <div className="flex items-center gap-2"><Video className="w-4 h-4" /> Camera</div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-end justify-between">
                                        <div className="flex gap-0.5 items-end h-4">
                                            {[1, 2, 3, 4, 3, 5, 2, 1].map((h, i) => (
                                                <div key={i} className="w-1 bg-[#4ade80] rounded-full" style={{ height: `${h * 3}px` }} />
                                            ))}
                                        </div>
                                        <div className="w-full">
                                            <button className="w-full py-2 bg-[#3b82f6] text-white rounded-lg font-bold text-sm shadow-md hover:bg-blue-600 transition-colors">
                                                Record Clip
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer Icons */}
                                <div className="flex items-center gap-4 text-gray-400 mt-2 px-1">
                                    <div className="w-4 h-4 rounded-full border border-current" />
                                    <Smile className="w-4 h-4" />
                                    <Video className="w-4 h-4 bg-blue-500 text-white rounded p-0.5 box-content" />
                                    <Mic className="w-4 h-4" />
                                    <Paperclip className="w-4 h-4 ml-auto" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 pb-2">
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Create & share screen recordings in Docs, Comments, or Chat—in a click.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Connect to Tasks - Purple */}
                    <div className="group rounded-3xl p-8 bg-white hover:bg-gray-50/50 transition-colors border border-transparent hover:border-gray-100 pb-0 flex flex-col">
                        <h3 className="text-lg font-bold text-[#292D34] mb-8">Connect to Tasks</h3>

                        <div className="relative rounded-t-2xl overflow-hidden bg-[#7B68EE] pt-8 px-8 pb-0 flex-1 min-h-[300px] flex flex-col justify-end">
                            <div className="bg-white rounded-t-xl shadow-2xl p-6 relative top-2 space-y-4">
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-2">
                                    <div className="w-3 h-3 border border-gray-300 rounded sm bg-green-500" />
                                    Task <span className="text-gray-300">|</span> clk-10
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 leading-tight">Update timelines from Clip</h4>
                                <div className="flex items-center gap-2 mt-2 mb-4">
                                    <span className="text-xs text-gray-400">Status</span>
                                    <span className="text-[10px] font-bold text-white bg-blue-500 px-1.5 py-0.5 rounded uppercase">IN PROGRESS</span>
                                    <div className="flex -space-x-1.5 ml-auto">
                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300" />
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white text-[10px]">↻</div>
                                        <span className="text-sm font-bold text-gray-700">Marketing Timelines</span>
                                    </div>
                                    <div className="h-16 relative bg-white rounded border border-gray-200 overflow-hidden flex items-center justify-center">
                                        {/* Gantt Chart Abstract */}
                                        <div className="absolute inset-x-0 h-4 bg-purple-100 top-2 rounded-full mx-2 flex items-center px-2 gap-2">
                                            <div className="w-4 h-4 rounded-full bg-pink-500 text-white flex items-center justify-center text-[8px] font-bold">JD</div>
                                            <span className="text-[8px] text-purple-700 font-bold">Sprint 14</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#7B68EE] text-white flex items-center justify-center shadow-lg relative z-10">
                                            <Play className="w-4 h-4 fill-current ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 pb-2">
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Use ClickUp AI to transcribe Clips and convert them into Tasks in seconds.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Connect to Chat - Pink */}
                    <div className="group rounded-3xl p-8 bg-white hover:bg-gray-50/50 transition-colors border border-transparent hover:border-gray-100 pb-0 flex flex-col">
                        <h3 className="text-lg font-bold text-[#292D34] mb-8">Connect to Chat</h3>

                        <div className="relative rounded-t-2xl overflow-hidden bg-[#FF4081] pt-8 px-8 pb-0 flex-1 min-h-[300px] flex flex-col justify-end">
                            <div className="bg-white rounded-t-xl shadow-2xl p-4 relative top-2 h-full">
                                <div className="flex items-center gap-2 mb-4 p-2 bg-white rounded-lg border border-gray-100 shadow-sm relative z-10">
                                    <div className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center text-purple-500"><div className="w-3 h-3 border-2 border-current rounded-full" /></div>
                                    <span className="font-bold text-gray-700 text-sm">Whiteboard Walkt...</span>
                                </div>

                                {/* Background grid pattern */}
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 mt-16" />

                                <div className="relative z-0 flex gap-4 ml-4">
                                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold shadow-sm">Software Team</div>
                                    <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-[10px] font-bold shadow-sm mt-8">Workflows</div>
                                </div>

                                {/* Chat Popover */}
                                <div className="absolute right-4 top-12 w-48 bg-white rounded-xl shadow-xl p-3 border border-gray-100 z-20">
                                    <div className="flex items-start gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-pink-100 overflow-hidden border border-white shadow-sm shrink-0">
                                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100" alt="Sarah" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-1">
                                                <span className="text-xs font-bold text-gray-900">Sarah</span>
                                                <span className="text-[10px] px-1 bg-purple-100 text-purple-600 rounded font-bold">00:24</span>
                                            </div>
                                            <p className="text-[10px] text-gray-600 leading-tight mt-0.5">Do we have examples of use cases?</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded p-1.5 flex items-center justify-between">
                                        <span className="text-[10px] text-gray-400 pl-1">Reply to comment ...</span>
                                        <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center text-white">
                                            <ArrowUp className="w-2.5 h-2.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 pb-2">
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Clip links auto-embed in Chat for instant viewing for seamless collaboration!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClipsFeatures;
