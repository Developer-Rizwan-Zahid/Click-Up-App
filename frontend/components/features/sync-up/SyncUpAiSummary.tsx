import { Bot, Sparkles, FileText, ListTodo } from "lucide-react";

const SyncUpAiSummary = () => {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">
                        Your meeting, wrapped up for you
                    </h2>
                    <p className="text-xl text-gray-600">
                        AI captures the key points so you can focus on the conversation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Automatic recaps */}
                    <div className="p-8 rounded-2xl bg-[#F8F9FC] border border-[#E9EBF3] hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Automatic recaps</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Summaries, transcripts, and decisions delivered instantly after every call.
                        </p>
                    </div>

                    {/* Card 2: From talk to task */}
                    <div className="p-8 rounded-2xl bg-[#F8F9FC] border border-[#E9EBF3] hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">From talk to task</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Action items are assigned and linked to the right work so teams keep moving.
                        </p>
                    </div>

                    {/* Card 3: One place for it all */}
                    <div className="p-8 rounded-2xl bg-[#F8F9FC] border border-[#E9EBF3] hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">One place for it all</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Plan, meet, and follow up without switching tools or losing context.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SyncUpAiSummary;
