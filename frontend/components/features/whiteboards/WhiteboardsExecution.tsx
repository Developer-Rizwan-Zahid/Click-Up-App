'use client';

import React, { useState, useEffect } from 'react';
import { Layout, FileText, MessageSquare } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

// --- Icons ---
const NotionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.367 19.34L8.537 1.583C8.636 1.157 9.855 1.096 9.855 1.096L18.736 1.05C19.231 1.047 19.566 1.517 19.467 1.944L15.297 19.701C15.198 20.127 13.979 20.188 13.979 20.188L5.098 20.234C4.603 20.237 4.268 19.767 4.367 19.34Z" fill="currentColor" />
    </svg>
);

const SlackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.04 15.26C3.99 15.26 3.14 16.11 3.14 17.16C3.14 18.21 3.99 19.06 5.04 19.06H6.94V17.16C6.94 16.11 6.09 15.26 5.04 15.26ZM5.04 5.04C3.99 5.04 3.14 5.89 3.14 6.94C3.14 7.99 3.99 8.84 5.04 8.84H6.94V6.94C6.94 5.89 6.09 5.04 5.04 5.04ZM15.26 18.96C15.26 20.01 16.11 20.86 17.16 20.86C18.21 20.86 19.06 20.01 19.06 18.96V17.06H17.16C16.11 17.06 15.26 17.91 15.26 18.96ZM18.96 5.04H17.06V6.94C17.06 7.99 17.91 8.84 18.96 8.84C20.01 8.84 20.86 7.99 20.86 6.94C20.86 5.89 20.01 5.04 18.96 5.04ZM8.84 5.04H6.94V6.94C6.94 7.99 7.79 8.84 8.84 8.84C9.89 8.84 10.74 7.99 10.74 6.94V5.04H8.84ZM6.94 15.16H8.84V13.26C8.84 12.21 7.99 11.36 6.94 11.36C5.89 11.36 5.04 12.21 5.04 13.26V15.16H6.94ZM17.06 8.84H15.16V6.94C15.16 5.89 16.01 5.04 17.06 5.04C18.11 5.04 18.96 5.89 18.96 6.94V8.84H17.06ZM15.16 11.36H13.26V13.26C13.26 14.31 14.11 15.16 15.16 15.16C16.21 15.16 17.06 14.31 17.06 13.26V11.36H15.16Z" fill="#7b68ee" />
    </svg>
);

const FigmaIcon = () => (
    <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 24C5.433 24 7 22.433 7 20.5V17H3.5C1.567 17 0 18.567 0 20.5C0 22.433 1.567 24 3.5 24Z" fill="#0ACF83" />
        <path d="M0 13.5C0 11.567 1.567 10 3.5 10H7V17H3.5C1.567 17 0 15.433 0 13.5Z" fill="#A259FF" />
        <path d="M0 6.5C0 4.567 1.567 3 3.5 3H7V10H3.5C1.567 10 0 8.433 0 6.5Z" fill="#F24E1E" />
        <path d="M7 0H10.5C12.433 0 14 1.567 14 3.5C14 5.433 12.433 7 10.5 7H7V0Z" fill="#FF7262" />
        <path d="M14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z" fill="#1ABCFE" />
    </svg>
);

const DropboxIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3L1.5 7.5L7 12L12.5 7.5L7 3Z" fill="#0061FF" />
        <path d="M17 3L11.5 7.5L17 12L22.5 7.5L17 3Z" fill="#0061FF" />
        <path d="M1.5 16.5L7 21L12.5 16.5L7 12L1.5 16.5Z" fill="#0061FF" />
        <path d="M22.5 16.5L17 21L11.5 16.5L17 12L22.5 16.5Z" fill="#0061FF" />
        <path d="M7 12L12.5 16.5L18 12L12.5 7.5L7 12Z" fill="#0061FF" opacity="0.6" />
    </svg>
);

const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.372 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9.025 23.129 9.025 22.81C9.025 22.524 9.015 21.765 9.01 20.759C5.672 21.485 4.968 19.155 4.968 19.155C4.422 17.769 3.635 17.401 3.635 17.401C2.545 16.656 3.717 16.671 3.717 16.671C4.922 16.756 5.556 17.908 5.556 17.908C6.627 19.742 8.366 19.212 9.05 18.905C9.158 18.129 9.469 17.6 9.812 17.3C7.148 16.997 4.346 11.367 4.346 10.057 4.814 8.983 5.578 8.136C5.453 7.834 5.046 6.602 5.694 4.962C5.694 4.962 6.702 4.639 8.996 6.192C9.954 5.926 10.982 5.793 12.008 5.793C13.034 5.793 14.062 5.926 15.022 6.192C17.315 4.639 18.321 4.962 18.321 4.962C18.971 6.602 18.564 7.834 18.441 8.136C19.207 8.983 19.673 10.057 19.673 11.367C19.673 15.978 16.866 16.993 14.195 17.291C14.628 17.665 15.016 18.404 15.016 19.535C15.016 21.155 15.002 22.463 15.002 22.81C15.002 23.134 15.218 23.508 15.827 23.386C20.593 21.797 24 17.301 24 12C24 5.373 18.627 0 12 0Z" />
    </svg>
);

const DriveIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 17L5.5 22H18.5L21.5 17H8.5Z" fill="#0066DA" />
        <path d="M17 19.5H8.5L8.2 19L2.8 10L5.7 5L17 24.5V19.5Z" fill="#00AC47" />
        <path d="M5.5 5L0 14L8.5 19.5L14 10L14 10L5.5 5Z" fill="#EA4335" />
        <path d="M5.5 5H18.5L15.6 10H2.6L5.5 5Z" fill="#00AC47" />
        <path d="M18.5 5L24 14L15.5 28.5L10 19.5L18.5 5Z" fill="#FFBA00" />
        <path d="M13.9 14.1L18.5 22H5.5L10.1 14.1H13.9Z" fill="#0066DA" />
    </svg>
);

const JiraIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 10.5L12 2L2 14.5H12L11.5 22L22 9.5H11.5V10.5Z" fill="#0052CC" />
    </svg>
);

export default function WhiteboardsExecution() {
    const [flash, setFlash] = useState(false);
    const flashControls = useAnimation();

    const triggerFlash = async () => {
        setFlash(true);
        await flashControls.start({
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 1],
            transition: { duration: 0.4, ease: "easeOut" }
        });
        setFlash(false);
    };

    const logos = [
        <SlackIcon key="slack" />, <GithubIcon key="github" />, <FigmaIcon key="figma" />,
        <DropboxIcon key="dropbox" />, <DriveIcon key="drive" />, <JiraIcon key="jira" />,
        <NotionIcon key="notion" />
    ];

    // Randomized grid for background
    const bgLogos = [...Array(25)].map((_, i) => logos[i % logos.length]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                    <span className="text-[#7b68ee] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
                        BETTER TOGETHER
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-bold text-zinc-900 mb-6 font-sans">
                        Execute your ideas with ClickUp Whiteboards
                    </h2>
                    <p className="text-lg md:text-[20px] text-zinc-500 font-medium leading-[1.6]">
                        ClickUp Whiteboards seamlessly integrate with everything you do and leverage AI to connect it all together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 max-w-7xl mx-auto px-4">

                    {/* Left: Animated Puzzle Visual */}
                    <div className="lg:w-1/2 relative flex items-center justify-center py-20">
                        {/* Background App Icons (Actual Logos) */}
                        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-8 opacity-[0.08] pointer-events-none scale-110">
                            {bgLogos.map((logo, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: i * 0.02 }}
                                    className="flex items-center justify-center grayscale"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {logo}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Puzzle Container */}
                        <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[#7b68ee]/5 blur-[120px] rounded-full scale-125" />

                            {/* Electric Shock Flash Overlay */}
                            <motion.div
                                animate={flashControls}
                                initial={{ opacity: 0 }}
                                className="absolute inset-0 z-40 bg-white rounded-full blur-[100px] pointer-events-none"
                            />

                            <div className="relative w-full max-w-[440px] aspect-square z-10">
                                <motion.div
                                    initial={{ x: -60, y: -60, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    onAnimationComplete={() => triggerFlash()}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    className="absolute top-0 left-0 w-[60%] h-[60%] z-10"
                                >
                                    <div className="relative w-full h-full bg-gradient-to-br from-[#ff3366] to-[#ff5c8a] rounded-tl-[2.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] p-10 flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(255,51,102,0.4)] overflow-visible">
                                        {/* Puzzle Tabs */}
                                        <div className="absolute top-[50%] right-[-18px] translate-y-[-50%] w-10 h-10 rounded-full bg-[#ff4a7d]" />
                                        <div className="absolute bottom-[-18px] left-[50%] translate-x-[-50%] w-10 h-10 rounded-full bg-[#ff5585]" />

                                        <p className="text-white text-2xl font-bold leading-tight text-center relative z-10">Project<br />management</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 60, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    onAnimationComplete={() => triggerFlash()}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    className="absolute top-0 right-0 w-[42%] h-full z-10"
                                >
                                    <div className="relative w-full h-[95%] bg-gradient-to-b from-[#ffb142] to-[#ff6b6b] rounded-tr-[2.5rem] rounded-br-[2.5rem] rounded-tl-[1.5rem] rounded-bl-[1.5rem] p-10 flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(255,159,67,0.4)] overflow-visible">
                                        {/* Sockets for Top Left piece */}
                                        <div className="absolute top-[30%] left-[-18px] w-10 h-10 rounded-full bg-[#ff9e50]" />
                                        {/* Socket for Bottom piece */}
                                        <div className="absolute bottom-[20%] left-[-18px] w-10 h-10 rounded-full bg-[#ff7862]" />

                                        <p className="text-white text-3xl font-bold text-center relative z-10">Chat</p>
                                    </div>
                                </motion.div>

                                {/* Knowledge Management (Bottom horizontal piece) */}
                                <motion.div
                                    initial={{ y: 60, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    onAnimationComplete={() => triggerFlash()}
                                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 w-[60%] h-[42%] z-10"
                                >
                                    <div className="relative w-full h-[95%] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-bl-[2.5rem] rounded-tl-[1.5rem] rounded-tr-[1.5rem] rounded-br-[1.5rem] p-8 flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(58,123,213,0.4)] overflow-visible">
                                        {/* Socket for Top Left piece */}
                                        <div className="absolute top-[-18px] left-[50%] translate-x-[-50%] w-10 h-10 rounded-full bg-[#20ccfe]" />
                                        {/* Tab for Right piece */}
                                        <div className="absolute top-[50%] right-[-18px] translate-y-[-50%] w-10 h-10 rounded-full bg-[#3489e1]" />

                                        <p className="text-white text-2xl font-bold leading-tight text-center relative z-10">Knowledge<br />management</p>
                                    </div>
                                </motion.div>

                                {/* Central ClickUp Logo Unit */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    animate={{
                                        y: [0, -10, 0],
                                        boxShadow: [
                                            "0 10px 40px rgba(123, 104, 238, 0.3)",
                                            "0 30px 60px rgba(123, 104, 238, 0.5)",
                                            "0 10px 40px rgba(123, 104, 238, 0.3)"
                                        ]
                                    }}
                                    transition={{
                                        scale: { duration: 0.5, delay: 1.4, type: "spring" },
                                        opacity: { duration: 0.5, delay: 1.4 },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute left-[45%] top-[45%] translate-x-[-50%] translate-y-[-50%] w-28 h-28 bg-white rounded-[1.75rem] flex items-center justify-center z-30 shadow-2xl border border-zinc-50"
                                >
                                    <div className="w-14 h-14 relative flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#7b68ee]">
                                            <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5L7.5 12l4.5-4.5 4.5 4.5-4.5 4.5z" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="lg:w-1/2 space-y-12">
                        {[
                            {
                                title: "Connect to Tasks",
                                description: "The connection between Whiteboards and Tasks ensures every great idea is executed.",
                                icon: (
                                    <div className="bg-[#ff007f15] p-2.5 rounded-lg">
                                        <Layout className="w-6 h-6 text-[#ff007f]" />
                                    </div>
                                )
                            },
                            {
                                title: "Connect to Docs",
                                description: "Whiteboards lives right amongst your docs, lists and spaces.",
                                icon: (
                                    <div className="bg-[#4a9eff15] p-2.5 rounded-lg">
                                        <FileText className="w-6 h-6 text-[#4a9eff]" />
                                    </div>
                                )
                            },
                            {
                                title: "Connect to Chats",
                                description: "Chat directly inside a Whiteboard or embed your Whiteboards inside your chats.",
                                icon: (
                                    <div className="bg-[#ff9f4315] p-2.5 rounded-lg">
                                        <MessageSquare className="w-6 h-6 text-[#ff9f43]" />
                                    </div>
                                )
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-[#7b68ee] transition-colors">{item.title}</h3>
                                    <p className="text-[17px] text-zinc-500 font-medium leading-[1.5] max-w-md">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
