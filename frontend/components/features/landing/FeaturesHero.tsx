import Link from "next/link";

export function FeaturesHero() {
    const navItems = [
        { label: "Overview", href: "#overview" },
        { label: "Views", href: "#views" },
        { label: "Customization", href: "#customization" },
        { label: "Collaboration", href: "#collaboration" },
        { label: "Docs", href: "#docs" },
        { label: "Reporting", href: "#reporting" },
        { label: "Time", href: "#time" },
        { label: "All Features", href: "#all" },
    ];

    return (
        <div className="relative bg-white pb-20">
            {/* Background Shape */}
            <div className="absolute top-0 left-0 right-0 h-[85%] bg-gradient-to-br from-[#7b2bf9] via-[#7b2bf9] to-[#2facfe] rounded-bl-[100px] rounded-br-[200px] overflow-hidden">
                {/* Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
            </div>

            <div className="relative z-10 pt-32 lg:pt-40 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Main Headings */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
                        Hundreds of powerful tools, one platform.
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                        ClickUp comes with hundreds of features that can be customized for any work need—with more added every week. And they're all free, forever.
                    </p>
                </div>

                {/* Navigation Pills */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-md uppercase tracking-wider transition-colors backdrop-blur-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Video Container */}
                <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white aspect-[16/9]">
                    <div className="absolute inset-0 bg-slate-900 block">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://clickup.com/images/features/features-poster.png"
                        >
                            <source src="https://clickup.com/videos/project-management-software/pm-view.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-16">
                    <Link
                        href="/signup"
                        className="inline-block px-12 py-5 bg-[#7b2bf9] hover:bg-[#6b22d9] text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
