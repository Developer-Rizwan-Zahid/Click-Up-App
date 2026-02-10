import { X, Check } from "lucide-react";

const ClipsComparison = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-[#7B68EE] font-bold tracking-widest text-sm uppercase mb-6 block">
                        THE CLICKUP WAY
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#292D34] mb-6 tracking-tight leading-[1.1]">
                        Work communication
                        <br />
                        is broken. We fixed it.
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Find the right way to stay in sync with your team.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                        {/* Divider Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />

                        {/* The Old Way */}
                        <div className="pl-8 lg:pl-16">
                            <h3 className="text-3xl font-bold text-gray-500 mb-10 tracking-tight">The old way</h3>
                            <ul className="space-y-6">
                                {[
                                    "Long emails & longer meetings",
                                    "Trying to explain visual concepts in long-form writing",
                                    "Links to Looms you can't find",
                                    "So slow"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-500 font-medium text-lg">
                                        <X className="w-5 h-5 mt-1 shrink-0 text-[#E3406D]" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The ClickUp Way */}
                        <div className="pl-8 lg:pl-16">
                            <h3 className="text-3xl font-bold text-[#292D34] mb-10 tracking-tight">The ClickUp way</h3>
                            <ul className="space-y-6">
                                {[
                                    "Short-form video for quick updates",
                                    "Quickly embed clips to Tasks, Docs, and Chats",
                                    "Searchable Clip transcripts, anywhere in ClickUp",
                                    "So fast"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-medium text-lg">
                                        <Check className="w-5 h-5 mt-1 shrink-0 text-[#21D179]" strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClipsComparison;
