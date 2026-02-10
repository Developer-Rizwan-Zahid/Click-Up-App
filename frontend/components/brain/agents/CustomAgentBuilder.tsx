"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Settings, Play, Bot } from "lucide-react";

export const CustomAgentBuilder = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[100px] rounded-full pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 blur-[100px] rounded-full pointer-events-none opacity-60" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-6 border border-blue-200">
                            <Zap size={12} /> Custom Agents
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Automate custom workflows<br />
                            <span className="text-gray-400">with zero coding</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Describe what you want your agent to do in plain English. BrainGPT builds the workflow, connects the apps, and tests the logic instantly.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-900 font-bold flex items-center justify-center shrink-0 shadow-sm">1</div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Describe the role</h4>
                                    <p className="text-sm text-gray-500">"Create an agent that reviews customer tickets and drafts replies based on our docs."</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-900 font-bold flex items-center justify-center shrink-0 shadow-sm">2</div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Set permissions</h4>
                                    <p className="text-sm text-gray-500">Control exactly what data the agent can access and which actions it can perform.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-200">3</div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Deploy & Monitor</h4>
                                    <p className="text-sm text-gray-500">Launch to your workspace and track performance metrics in real-time.</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg">
                            Start building <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Visual Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white border border-gray-200 rounded-3xl p-2 shadow-2xl relative">
                            {/* Window Controls */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>

                            {/* Main builder area */}
                            <div className="bg-gray-50/50 rounded-2xl mt-8 p-6 min-h-[400px] border border-gray-100 relative overflow-hidden flex flex-col">

                                {/* Chat Header */}
                                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"><Bot size={16} className="text-white" /></div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">Agent Builder</div>
                                            <div className="text-xs text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online</div>
                                        </div>
                                    </div>
                                    <div className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full font-bold">Beta</div>
                                </div>

                                {/* Chat Messages */}
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600 font-bold">Yo</div>
                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 text-sm text-gray-700 max-w-[80%] shadow-sm">
                                            I need an agent that checks for high-priority bugs in Jira and posts them to our #engineering slack channel every morning.
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white"><Sparkles size={14} /></div>
                                        <div className="bg-purple-50 p-3 rounded-2xl rounded-tr-none border border-purple-100 text-sm text-gray-800 max-w-[90%] shadow-sm">
                                            <p className="mb-3">I can help with that. Here is the workflow I created for you:</p>

                                            {/* Visual Workflow Block */}
                                            <div className="bg-white rounded-xl p-3 border border-gray-200 space-y-2.5 shadow-sm">
                                                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600"><Settings size={12} /></div>
                                                    <span>Trigger: Every day at 9:00 AM</span>
                                                </div>
                                                <div className="flex justify-center"><div className="w-[1px] h-3 bg-gray-300" /></div>
                                                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-blue-600">J</div>
                                                    <span>Action: Fetch Jira tickets (Priority = High)</span>
                                                </div>
                                                <div className="flex justify-center"><div className="w-[1px] h-3 bg-gray-300" /></div>
                                                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center text-green-600">#</div>
                                                    <span>Action: Post message to #engineering</span>
                                                </div>
                                            </div>

                                            <div className="mt-3 flex gap-2">
                                                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-sm">
                                                    <Play size={12} /> Test Run
                                                </button>
                                                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-bold">
                                                    Modify
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="mt-4 relative">
                                    <input
                                        type="text"
                                        placeholder="Describe another action..."
                                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-sm text-gray-900 focus:outline-none focus:border-purple-500/50 shadow-sm"
                                        disabled
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
