"use client";

const slashFeatures = [
    {
        title: "Create Tasks",
        description: "Instantly turn a great idea in a comment into an actionable task, then add assignees and details to bring that idea to life.",
        visual: (
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 space-y-3">
                <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-sm border border-gray-300" />
                    <div className="h-2 w-32 bg-gray-200 rounded" />
                </div>
                <div className="pl-6 space-y-2">
                    <div className="h-1.5 w-full bg-gray-100 rounded" />
                    <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                </div>
                <div className="flex gap-2 pl-6">
                    <div className="w-5 h-5 rounded-full bg-purple-100 border border-white" />
                    <div className="h-5 w-16 bg-gray-50 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Widgets",
        description: "Bring written reports and outlines to life and reduce context switching by adding customizable reporting and views widgets to your documents.",
        visual: (
            <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded space-y-1">
                    <div className="h-1 w-8 bg-gray-200 rounded" />
                    <div className="flex items-end gap-1 h-8">
                        <div className="w-2 h-4 bg-blue-300 rounded-t" />
                        <div className="w-2 h-6 bg-blue-400 rounded-t" />
                        <div className="w-2 h-3 bg-blue-200 rounded-t" />
                    </div>
                </div>
                <div className="bg-gray-50 p-2 rounded space-y-1">
                    <div className="h-1 w-8 bg-gray-200 rounded" />
                    <div className="w-8 h-8 rounded-full border-2 border-green-200 mx-auto" />
                </div>
            </div>
        )
    },
    {
        title: "Banners",
        description: "Organize documents and emphasize important text with color-coded banners.",
        visual: (
            <div className="space-y-2">
                <div className="bg-green-50 border-l-2 border-green-500 p-2 rounded-r flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-green-200" />
                    <div className="h-1 w-24 bg-green-200 rounded" />
                </div>
                <div className="bg-blue-50 border-l-2 border-blue-500 p-2 rounded-r flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-200" />
                    <div className="h-1 w-20 bg-blue-200 rounded" />
                </div>
                <div className="bg-red-50 border-l-2 border-red-500 p-2 rounded-r flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-200" />
                    <div className="h-1 w-28 bg-red-200 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Buttons",
        description: "Create clear, actionable customer-facing documents that include customized buttons.",
        visual: (
            <div className="flex items-center justify-center h-full gap-2">
                <div className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-[8px] font-bold shadow-sm">
                    Click Me
                </div>
                <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[8px] font-bold shadow-sm">
                    Cancel
                </div>
            </div>
        )
    },
    {
        title: "Table of contents",
        description: "Jump to any section of your document and easily navigate with a sticky table of contents that stays with you as you scroll.",
        visual: (
            <div className="flex gap-2 h-full">
                <div className="w-1/3 border-r border-gray-100 p-2 space-y-2">
                    <div className="h-1 w-12 bg-blue-100 rounded" />
                    <div className="h-1 w-10 bg-gray-100 rounded ml-2" />
                    <div className="h-1 w-8 bg-gray-100 rounded ml-2" />
                    <div className="h-1 w-12 bg-gray-100 rounded" />
                </div>
                <div className="flex-1 p-2 space-y-3 opacity-20">
                    <div className="h-2 w-full bg-gray-200 rounded" />
                    <div className="h-2 w-full bg-gray-200 rounded" />
                    <div className="h-2 w-3/4 bg-gray-200 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Markdown",
        description: "Quickly access markdown language tools using only your keyboard with /Slash Commands. Add bullets, bold, italics, strikethroughs, and more.",
        visual: (
            <div className="p-4 space-y-2 font-mono text-[8px]">
                <div className="flex gap-1"><span className="text-blue-500">#</span> Header</div>
                <div className="flex gap-1"><span className="text-blue-500">**</span>Bold<span className="text-blue-500">**</span></div>
                <div className="flex gap-1"><span className="text-blue-500">-</span> List item</div>
            </div>
        )
    },
    {
        title: "Code blocks",
        description: "Maintain code integrity and spacing with code blocks and improve code readability with syntax highlighting.",
        visual: (
            <div className="bg-[#1e1e1e] p-3 rounded-md w-full font-mono text-[7px] text-green-400">
                <div>function <span className="text-yellow-300">hello</span>() {"{"}</div>
                <div className="pl-2">console.<span className="text-blue-300">log</span>(<span className="text-orange-300">"Hi!"</span>);</div>
                <div>{"}"}</div>
            </div>
        )
    },
    {
        title: "Tables",
        description: "Easily create tables to organize, format, and visualize large amounts of data within a document.",
        visual: (
            <div className="bg-white border border-gray-100 rounded-md w-full overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 p-1">
                    <div className="h-1 w-8 bg-gray-200 rounded" />
                    <div className="h-1 w-8 bg-gray-200 rounded" />
                    <div className="h-1 w-8 bg-gray-200 rounded" />
                </div>
                <div className="grid grid-cols-3 p-1 border-b border-gray-50">
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                </div>
                <div className="grid grid-cols-3 p-1">
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                    <div className="h-1 w-6 bg-gray-100 rounded" />
                </div>
            </div>
        )
    },
    {
        title: "Attachments",
        description: "Add and embed screenshots, PDFs, or other files directly in your Doc for quick reference.",
        visual: (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 w-full flex flex-col items-center justify-center gap-1">
                <div className="w-4 h-4 text-gray-400">📎</div>
                <div className="h-1 w-16 bg-gray-100 rounded" />
            </div>
        )
    }
];

const DocsSlash = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#5B4BF0] font-bold tracking-widest text-sm uppercase mb-4 block">
                        RICH FORMATTING
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#292D34] mb-6 tracking-tight">
                        Add style & functionality with <br />
                        <span className="text-gray-500">/Slash commands</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slashFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#FAFAFC] hover:bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="font-bold text-gray-900 text-lg mb-6 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <div className="bg-white border border-gray-100 rounded-xl h-40 mb-6 flex items-center justify-center p-4 overflow-hidden shadow-sm">
                                {feature.visual}
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocsSlash;
