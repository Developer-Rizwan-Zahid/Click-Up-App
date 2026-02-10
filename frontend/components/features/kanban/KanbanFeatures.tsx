"use client";

import { motion } from "framer-motion";
import { Settings, Sliders, MessageSquare, Maximize2, Move, Layout, MousePointer, MoreHorizontal, ChevronDown, Plus, Search, Calendar, User, ArrowRight } from "lucide-react";

export default function KanbanFeatures() {
    return (
        <div className="bg-white pt-20 pb-20">
            <div className="text-center mb-24">
                <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">WHY BOARD VIEW?</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                    Here&apos;s how our Kanban works
                </h2>
            </div>

            <ColorfulFeature
                title="Personalize the entire board"
                description="A good Kanban board has extra visuals to help you stay organized. Get the view you want with custom colors, fields, nested subtasks, and more."
                bgClass="bg-[#2d0f59]" // Dark Purple
                image={<PersonalizeVisual />}
                align="right"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Set limits on each stage"
                description="Need help balancing expectations and reality? Set up custom columns with work-in-progress limits so it's easy to underpromise, then overdeliver."
                bgClass="bg-gradient-to-br from-[#ff6b6b] to-[#ff4757]" // Red/Pink
                image={<LimitsVisual />}
                align="left"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Add context to cards"
                description="You don't have to jump between the board and the tasks that are on it. Quickly assign tasks, add comments, and attach files without ever leaving the board view."
                bgClass="bg-blue-500" // Blue
                image={<ContextVisual />}
                align="right"
                textClass="text-slate-900"
            />

            <ColorfulFeature
                title="Shuffle work around"
                description="And now it's time to do a little shuffle. Easily update one or several tasks by selecting the cards and dragging them to a new column."
                bgClass="bg-[#8e44ad]" // Purple
                image={<ShuffleVisual />}
                align="left"
                textClass="text-slate-900"
            />
        </div>
    );
}

function ColorfulFeature({ title, description, bgClass, image, align }: any) {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                            {title}
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            {description}
                        </p>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex-1 w-full"
                    >
                        <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center ${bgClass}`}>
                            {image}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// --- Visual Components ---

function PersonalizeVisual() {
    return (
        <div className="w-full h-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex flex-col gap-4 relative overflow-hidden">
            {/* Background Board */}
            <div className="absolute inset-0 bg-slate-50/50 -z-10 grid grid-cols-3 gap-4 p-4 opacity-50">
                <div className="bg-slate-100 h-full rounded-lg"></div>
                <div className="bg-slate-100 h-full rounded-lg"></div>
                <div className="bg-slate-100 h-full rounded-lg"></div>
            </div>

            {/* Customization Menu */}
            <div className="bg-white rounded-lg shadow-xl border border-slate-200 w-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-slate-700 text-sm">View Options</span>
                    <Settings className="w-4 h-4 text-slate-400" />
                </div>
                <div className="p-2 space-y-1">
                    <MenuItem label="Card Size" value="Medium" />
                    <MenuItem label="Cover Image" value="None" />
                    <MenuItem label="Show Fields" toggle={true} />
                    <MenuItem label="Task properties" toggle={true} />
                    <MenuItem label="Show empty fields" toggle={false} />

                    <div className="h-px bg-slate-100 my-1"></div>
                    <MenuItem label="Color Columns" toggle={true} />
                    <MenuItem label="Task visibility" arrow={true} />
                </div>
            </div>
        </div>
    );
}

function MenuItem({ label, value, toggle, arrow }: any) {
    return (
        <div className="flex items-center justify-between px-2 py-1.5 hover:bg-slate-50 rounded text-xs cursor-pointer group">
            <span className="text-slate-600 font-medium">{label}</span>
            {value && <span className="text-slate-400 flex items-center gap-1">{value} <ChevronDown className="w-3 h-3" /></span>}
            {toggle !== undefined && (
                <div className={`w-8 h-4 rounded-full relative transition-colors ${toggle ? 'bg-purple-500' : 'bg-slate-200'}`}>
                    <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all ${toggle ? 'left-4.5 right-0.5' : 'left-0.5'}`}></div>
                </div>
            )}
            {arrow && <ChevronDown className="w-3 h-3 -rotate-90 text-slate-400" />}
        </div>
    )
}

function LimitsVisual() {
    return (
        <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden transform scale-105">
            <div className="border-b border-slate-100 p-3 flex items-center justify-between bg-slate-50/50">
                <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400 my-auto"></div>
                    <span className="text-xs font-bold text-slate-700">IN REVIEW</span>
                    <span className="text-xs font-mono bg-red-100 text-red-600 px-1.5 py-0.5 rounded border border-red-200 ml-1">Limit: 12</span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </div>

            <div className="p-3 bg-red-50/30 min-h-[240px] flex flex-col gap-3 relative">
                <div className="absolute top-2 left-0 right-0 py-1 bg-red-500 text-white text-[10px] uppercase font-bold text-center z-10 shadow-sm opacity-90">
                    You&apos;ve reached the limit
                </div>

                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 mt-6">
                    <div className="h-2 w-16 bg-blue-100 rounded mb-2"></div>
                    <div className="h-3 w-3/4 bg-slate-200 rounded mb-1"></div>
                    <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                </div>

                <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
                    <div className="h-2 w-16 bg-purple-100 rounded mb-2"></div>
                    <div className="h-3 w-3/4 bg-slate-200 rounded mb-1"></div>
                    <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                </div>

                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 opacity-60">
                    <div className="h-2 w-16 bg-green-100 rounded mb-2"></div>
                    <div className="h-3 w-full bg-slate-200 rounded mb-1"></div>
                </div>
            </div>
        </div>
    );
}


function ContextVisual() {
    return (
        <div className="w-full h-full flex gap-4">
            {/* Left List */}
            <div className="w-1/3 space-y-3 pt-6 min-w-[140px]">
                {[1, 2, 3].map(i => (
                    <div key={i} className={`p-2 rounded-lg bg-white border shadow-sm ${i === 1 ? 'border-blue-300 ring-2 ring-blue-100' : 'border-slate-200'}`}>
                        <div className="h-1.5 w-8 bg-slate-200 rounded mb-2"></div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                    </div>
                ))}
            </div>

            {/* Right Detail Pane */}
            <div className="flex-1 bg-white rounded-t-xl shadow-xl border border-slate-200 overflow-hidden flex flex-col mt-8 hover:scale-105 transition-transform duration-500">
                <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 relative">
                    <div className="absolute bottom-4 left-4 p-2 bg-white/80 backdrop-blur rounded-lg border border-white/50 shadow-sm">
                        <div className="text-xs font-bold text-slate-800">Competitive Analysis</div>
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex gap-4 border-b border-slate-50 pb-4">
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Assignee</div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-purple-500 text-white text-[9px] flex items-center justify-center font-bold">JD</div>
                                <span className="text-xs font-medium text-slate-700">John Doe</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Due Date</div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-slate-400" />
                                <span className="text-xs font-medium text-red-500">Tomorrow</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded p-2 text-xs text-slate-500 italic">
                        Write a comment or attach a file...
                    </div>
                </div>
            </div>
        </div>
    );
}

function ShuffleVisual() {
    return (
        <div className="w-full h-full p-4 relative">
            <div className="flex gap-4 h-full">
                {/* Column 1 */}
                <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <span className="text-xs font-bold text-slate-500">TO DO</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
                        <div className="h-2 w-12 bg-blue-100 rounded mb-2"></div>
                        <div className="h-2.5 w-full bg-slate-100 rounded"></div>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm border border-slate-200">
                        <div className="h-2 w-12 bg-pink-100 rounded mb-2"></div>
                        <div className="h-2.5 w-3/4 bg-slate-100 rounded"></div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="w-1/2 flex flex-col gap-3 bg-blue-50/50 rounded-lg p-2 border border-blue-100 border-dashed">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs font-bold text-blue-600">IN PROGRESS</span>
                    </div>

                    {/* Dragged Card */}
                    <div className="bg-white p-3 rounded shadow-xl border border-blue-300 transform -rotate-2 scale-105 z-10 cursor-grabbing relative">
                        <MousePointer className="absolute -bottom-3 -right-3 w-5 h-5 fill-slate-900 text-slate-900 drop-shadow-md z-20" />
                        <div className="h-2 w-12 bg-purple-100 rounded mb-2"></div>
                        <div className="h-2.5 w-full bg-slate-100 rounded mb-2"></div>
                        <div className="flex items-center justify-between mt-3">
                            <div className="w-4 h-4 rounded-full bg-green-400"></div>
                            <div className="h-3 w-12 bg-slate-100 rounded"></div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm border border-slate-200 opacity-50">
                        <div className="h-2 w-12 bg-orange-100 rounded mb-2"></div>
                        <div className="h-2.5 w-2/3 bg-slate-100 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
