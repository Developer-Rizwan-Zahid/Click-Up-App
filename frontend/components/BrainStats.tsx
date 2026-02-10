"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

const companies = [
    { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" },
    { name: "TIBCO", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/TIBCO_Software_logo.svg" },
    { name: "T-Mobile", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/T-Mobile_Logo_2022.svg/1200px-T-Mobile_Logo_2022.svg.png" }, // Using a public URL for demo or text if fail
    { name: "Logitech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/2560px-Logitech_logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg" },
    { name: "Fortinet", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Fortinet_logo.svg" }
];

export const BrainStats = () => {
    return (
        <section className="bg-black py-20 border-y border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight block">
                        150,000+ companies supercharge
                    </span>
                    <span className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight block">
                        their work with ClickUp Brain
                    </span>
                </motion.h2>

                {/* Company Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-24 opacity-60">
                    <span className="text-xl font-bold font-serif text-white tracking-tighter">Booking.com</span>
                    <span className="text-xl font-bold font-sans text-white tracking-widest">TIBCO</span>
                    <span className="text-xl font-bold font-mono text-white tracking-tighter">T-Mobile</span>
                    <span className="text-xl font-bold font-sans text-white italic">logitech</span>
                    <span className="text-xl font-extrabold font-serif text-white">IBM</span>
                    <span className="text-xl font-bold font-sans text-white tracking-[0.2em]">FORTINET</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Stat 1 */}
                    <StatCard
                        icon={<ArrowDown className="text-green-950 w-5 h-5" />}
                        iconBg="bg-green-400"
                        title="88% savings"
                        subtitle="on costs"
                        description="Brain's comprehensive capabilities replace the need for dozens of other AI tools."
                        delay={0.1}
                    />

                    {/* Stat 2 */}
                    <StatCard
                        icon={<ArrowDown className="text-green-950 w-5 h-5" />}
                        iconBg="bg-green-400"
                        title="1.1 days saved"
                        subtitle="per week"
                        description="Brain saves users time by automating the busy work and simplifying execution."
                        delay={0.2}
                    />

                    {/* Stat 3 */}
                    <StatCard
                        icon={<ArrowUp className="text-green-950 w-5 h-5" />}
                        iconBg="bg-green-400"
                        title="3x faster"
                        subtitle="task completion"
                        description="Replace multiple productivity tools and subscriptions with one AI super app."
                        delay={0.3}
                    />

                </div>
            </div>
        </section>
    );
};

function StatCard({ icon, iconBg, title, subtitle, description, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-black hover:bg-white/5 transition-colors group relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.3)]`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-gray-400 font-medium">{subtitle}</p>
                </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {description}
            </p>
            <span className="text-gray-600 text-sm font-mono mt-auto">0{Math.floor(delay * 10)}</span>
        </motion.div>
    );
}

