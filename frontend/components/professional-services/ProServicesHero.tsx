"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { Button } from "@/components/ui/Button";

export function ProServicesHero() {
    const { openModal } = useModal();
    return (
        <section className="relative bg-white pt-12 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="text-[#7b68ee] font-semibold mb-4">
                            Professional services
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#292D34] mb-6 leading-tight">
                            Get hands-on help <br /> from our team.
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Whether it's onboarding and implementation, system integrations, ongoing consulting, optimization, or live training, our Professional Services team is here to help you build the future of work for your organization.
                        </p>

                        <ul className="space-y-3 mb-12">
                            {[
                                "Onboarding & Deployment",
                                "Strategic Consulting Services",
                                "Integration Services",
                                "Live Training"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-slate-700 font-medium">
                                    <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Blob/Shape Mask Container - Simplified for now with border radius */}
                        <div className="relative rounded-[3rem] rounded-tr-[8rem] overflow-hidden shadow-2xl">
                            {/* Placeholder image trying to match the vibe (office/people) using a generic Unsplash URL or similar if allowed, 
                                but staying safe with a solid color placeholder or a known accessible asset if unsure. 
                                Using a styled div as a placeholder if no image available, but I'll try to use a nice colored block with an overlay text or a known local asset if present.
                                Actually, I'll use a standard placeholder from a service or just a gray block if I can't find one. 
                                Re-reading: "The user has uploaded 1 image(s)" - that's the reference image. 
                                I will use a high-quality placeholder from Unsplash via Next Image if connected, or a colorful div.
                                Let's use a nice gradient block for now effectively acting as the image place holder to be swapped.
                             */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-indigo-50 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                        alt="Team collaboration"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 pt-10 border-t border-transparent text-center"
                >
                    <p className="text-gray-400 text-sm mb-8">Trusted by the world's leading businesses</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Zillow */}
                        <div className="text-2xl font-bold text-blue-600 tracking-tighter">Zillow</div>

                        {/* Datadog */}
                        <div className="flex items-center gap-1">
                            <div className="w-6 h-6 bg-purple-600 rounded"></div>
                            <span className="text-xl font-bold text-purple-700">DATADOG</span>
                        </div>

                        {/* Siemens */}
                        <div className="text-xl font-bold text-teal-700 tracking-widest">SIEMENS</div>

                        {/* AT&T */}
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-blue-500">AT&T</span>
                        </div>

                        {/* American Airlines */}
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-medium text-slate-600 tracking-tighter">American Airlines</span>
                        </div>

                        {/* CN */}
                        <div className="text-xl font-black text-red-600 bg-black px-1">CN</div>

                        {/* Sephora */}
                        <div className="text-xl font-serif text-black tracking-widest">SEPHORA</div>

                        {/* Paramount */}
                        <div className="text-xl font-serif italic text-blue-800">Paramount</div>

                        {/* Wayfair */}
                        <div className="text-xl font-serif text-purple-800">wayfair</div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button onClick={openModal} className="h-14 px-8 bg-[#7B68EE] hover:bg-[#6c5ce7] text-white text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-105">
                        Contact Sales
                    </Button>
                    <Button variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl border-2 hover:bg-gray-50">
                        View Offerings
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
