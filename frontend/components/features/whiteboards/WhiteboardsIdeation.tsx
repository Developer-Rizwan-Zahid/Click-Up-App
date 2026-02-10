import React from 'react';
import { X, Check } from 'lucide-react';

export default function WhiteboardsIdeation() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto border border-zinc-100 rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row">

                    {/* The Old Way */}
                    <div className="flex-1 p-10 lg:p-16 bg-white flex flex-col items-start border-b md:border-b-0 md:border-r border-zinc-50">
                        <h3 className="text-3xl font-bold text-zinc-900 mb-10">
                            The old way
                        </h3>

                        <ul className="space-y-6">
                            {[
                                "Constantly switching apps",
                                "Broken, complex workflows",
                                "Manual tracking of tasks",
                                "Lost context in communication",
                                "Slow, frustrated teams",
                                "Disconnected apps"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[17px] text-zinc-500 font-medium">
                                    <X className="w-5 h-5 text-red-500 shrink-0" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The ClickUp Way */}
                    <div className="flex-1 p-10 lg:p-16 bg-white flex flex-col items-start">
                        <h3 className="text-3xl font-bold text-zinc-900 mb-10">
                            The ClickUp way
                        </h3>

                        <ul className="space-y-6">
                            {[
                                "The everything app, for work.",
                                "Clean, simple workflows",
                                "Embed and links tasks anywhere",
                                "Chat where you work",
                                "Fast, productive teams",
                                "Docs, tasks, lists and chat are all connected"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[17px] text-zinc-600 font-medium font-sans">
                                    <Check className="w-5 h-5 text-green-500 shrink-0" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
