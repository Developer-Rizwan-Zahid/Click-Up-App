"use client";

import { Button } from "@/components/ui/Button";

const features = [
    {
        tag: "CREATE",
        title: "Build Docs to suit any type of work",
        description: "Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.",
        video: "https://videos.ctfassets.net/w8fc6tgspyjz/3fsFkoqWIUtYPVDC6LyKgp/5069f00b1689882ca5edff05ced58896/docs30-1-future-of-docs.mp4",
        color: "text-blue-600"
    },
    {
        tag: "EDITING & COMMENTS",
        title: "Collaborate on ideas together",
        description: "Edit in real-time alongside your team. Tag others with comments, assign them action items, and convert text into trackable tasks to stay on top of ideas.",
        video: "https://videos.ctfassets.net/w8fc6tgspyjz/uaz2dsQdoROmX5NnuuBa3/d66264ac25ae8a2fa20863b1722fe590/docs30-2-collaborate-together.mp4",
        color: "text-purple-600"
    },
    {
        tag: "TASKS & WIDGETS",
        title: "Connect your Docs to workflows",
        description: "Access everything in one place by linking Docs and tasks together. Add widgets to update workflows, change project statuses, assign tasks, and more—all within your editor.",
        video: "https://videos.ctfassets.net/w8fc6tgspyjz/2UF2bdTN4dWV6IewAtXteX/980cfe8307e5009697198806c869a147/docs30-3-list-view-widget.mp4",
        color: "text-blue-500"
    },
    {
        tag: "ORGANIZE",
        title: "Keep work organized with Docs Hub",
        description: "With verified wikis highlighted for your teams, templates to create new resources, and the ability to search, sort, and filter for any other asset, using Docs Hub to find the information you need is a breeze.",
        video: "https://videos.ctfassets.net/w8fc6tgspyjz/45u9pMY5uxAQCFnNSPbjVY/7fc07f7ed68fce9e49fa04a43362ea52/docs30-4-keep-work-organized.mp4",
        color: "text-pink-500"
    },
    {
        tag: "PRIVACY & SHARING",
        title: "Securely share with anyone",
        description: "Easily protect your Docs with privacy and edit controls. Create shareable links and manage permissions for team, guest, or public access.",
        video: "https://videos.ctfassets.net/w8fc6tgspyjz/5Sngfy7MTUHOHVHw3QlXSV/ea27116e0eceb037c56dc4659e32326c/docs30-5-privacy-sharing.mp4",
        color: "text-indigo-500"
    }
];

const DocsFeatures = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            {/* Text Content */}
                            <div className={`flex-1 max-w-xl ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <span className={`${feature.color} font-bold tracking-widest text-sm uppercase mb-4 block`}>
                                    {feature.tag}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold text-[#292D34] mb-6 tracking-tight leading-tight">
                                    {feature.title}
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                    {feature.description}
                                </p>
                                <Button variant="outline" className="h-12 px-6 bg-gray-100 hover:bg-gray-200 border-none text-gray-900 font-bold rounded-xl text-md">
                                    Get started
                                </Button>
                            </div>

                            {/* Video Visual */}
                            <div className={`flex-1 w-full ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative aspect-video group">
                                    <video
                                        src={feature.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Optional Overlay Gradient for depth */}
                                    <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocsFeatures;
