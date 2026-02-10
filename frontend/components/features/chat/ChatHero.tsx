"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, MessageSquare, Hash, Bell, Search, Image as ImageIcon, Smile, Paperclip, MoreHorizontal, User, CheckCircle2, Plus, Users } from "lucide-react";

export default function ChatHero() {
    const [isPlaying, setIsPlaying] = useState(false);

    // Parallax effect for the hero text
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="pt-32 pb-32 bg-black overflow-hidden relative min-h-screen flex flex-col items-center justify-start">
            {/* Background Animations (Professional Style) */}
            <ProfessionalBackground />

            <motion.div
                style={{ y: y1 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 bg-[#1B1C20] border border-white/10 rounded-full px-4 py-1.5 mb-8 shadow-xl"
                >
                    <div className="w-5 h-5 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                            <path d="M50 15c-15.5 0-28 12.5-28 28h12c0-8.8 7.2-16 16-16s16 7.2 16 16H80c0-15.5-12.5-28-28-28zM22 55c0 15.5 12.5 28 28 28s28-12.5 28-28H66c0 8.8-7.2 16-16 16s-16-7.2-16-16H22z" />
                        </svg>
                    </div>
                    <span className="text-sm font-bold text-white tracking-tight">ClickUp Chat</span>
                    <span className="text-[10px] bg-[#2C2D33] text-purple-400 px-1.5 py-0.5 rounded font-black border border-purple-500/20 uppercase">New</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-[6.5rem] font-black text-white mb-6 tracking-tight leading-[0.9]"
                >
                    Chat, Meet Work.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-medium tracking-tight"
                >
                    Unlock unparalleled productivity with the world&apos;s first Everything App.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-6 mb-24"
                >
                    <button className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-12 py-5 bg-gradient-to-r from-[#F94C85] to-[#7F38F4] text-white font-black rounded-2xl text-2xl flex items-center gap-3 transition-transform group-hover:scale-105 active:scale-95">
                            Try ClickUp Chat
                        </div>
                    </button>
                    <p className="text-xs text-gray-500 font-bold tracking-wide opacity-60">It&apos;s free. No credit card required*</p>
                </motion.div>

                {/* Video/Interface Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full relative group perspective-1000"
                >
                    {/* Multi-layered Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#7F38F4] via-[#F94C85] to-[#7F38F4] rounded-[24px] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#7F38F4] via-[#F94C85] to-[#7F38F4] rounded-[24px] opacity-50 blur-[2px]" />

                    <div className="relative bg-[#0A0A0A] rounded-[22px] overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[21/9] flex items-center justify-center ring-1 ring-white/10">
                        {/* Video Background Effect (Warp Lines inside) */}
                        <VideoBackgroundEffects />

                        {!isPlaying ? (
                            <div className="relative w-full h-full z-10">
                                {/* Detailed Chat Interface Replica */}
                                <ChatInterfaceReplica />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] transition-colors hover:bg-black/30">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-20" />
                                        <button
                                            onClick={() => setIsPlaying(true)}
                                            className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-105 hover:bg-white/15 transition-all duration-300 group/play z-10 shadow-2xl"
                                        >
                                            <Play className="w-9 h-9 fill-white pl-1 group-hover/play:scale-110 transition-transform shadow-lg" />
                                        </button>
                                        <div className="mt-4 text-white font-bold text-center drop-shadow-lg">Watch Demo</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full bg-[#0A0A0A] relative overflow-hidden z-20">
                                <ProductWalkthrough onComplete={() => setIsPlaying(false)} />
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

// --- Video Background Effects (Colorful Warp Lines) ---
function VideoBackgroundEffects() {
    const [lines, setLines] = useState<Array<{
        id: string;
        top: string;
        width: string;
        duration: number;
        delay: number;
        color: string;
    }>>([]);

    useEffect(() => {
        const newLines = [];
        for (let i = 0; i < 12; i++) {
            // Mix of purple and pink/red colors
            const isPink = Math.random() > 0.5;
            const color = isPink
                ? 'from-[#F94C85]' // Pink
                : 'from-[#7F38F4]'; // Purple

            newLines.push({
                id: `v-line-${i}`,
                top: `${10 + Math.random() * 80}%`, // Spread vertically
                width: `${10 + Math.random() * 30}%`, // Random lengths
                duration: 2 + Math.random() * 3, // Faster speed
                delay: Math.random() * 2,
                color
            });
        }
        setLines(newLines);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
            {/* Left flowing lines */}
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    className={`absolute h-[2px] rounded-full bg-gradient-to-r ${line.color} to-transparent`}
                    style={{
                        top: line.top,
                        left: -100, // Start off-screen
                        width: line.width,
                    }}
                    animate={{
                        x: ['0%', '2000%'], // Move across
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: line.delay
                    }}
                />
            ))}
            {/* Right flowing lines (for variety) */}
            {lines.map((line) => (
                <motion.div
                    key={`r-${line.id}`}
                    className={`absolute h-[2px] rounded-full bg-gradient-to-l ${line.color === 'from-[#F94C85]' ? 'from-purple-500' : 'from-blue-500'} to-transparent`}
                    style={{
                        top: line.top,
                        right: -100, // Start off-screen right
                        width: line.width,
                    }}
                    animate={{
                        x: ['0%', '-2000%'], // Move across
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: line.duration * 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: line.delay + 1
                    }}
                />
            ))}
        </div>
    )
}

// --- Professional Background (Horizontal Speed Streaks) ---
function ProfessionalBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
            {/* Ambient Base Glows - More Colorful */}
            <div className="absolute top-0 right-[10%] w-[1000px] h-[1000px] bg-purple-600/15 blur-[180px] opacity-50 translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-[10%] w-[1000px] h-[1000px] bg-pink-600/10 blur-[180px] opacity-40 -translate-x-1/4 translate-y-1/4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-900/5 blur-[200px] opacity-20" />

            {/* Horizontal Light Streaks (Space Animation) */}
            <div className="absolute inset-0">
                <HorizontalStreaks />
            </div>

            {/* Vibrancy Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 mix-blend-overlay" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        </div>
    )
}

function HorizontalStreaks() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return null;

    const lines = 40; // Increased count
    return (
        <>
            {[...Array(lines)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: '-20%',
                        width: `${20 + Math.random() * 50}%`,
                        opacity: 0.05 + Math.random() * 0.2
                    }}
                    animate={{
                        x: ['0%', '300%'], // Move further
                    }}
                    transition={{
                        duration: 1 + Math.random() * 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
            {/* Colorful Vibrant Streaks */}
            {[...Array(25)].map((_, i) => {
                const colors = ['via-purple-500/60', 'via-pink-500/60', 'via-blue-500/50', 'via-indigo-500/50'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                return (
                    <motion.div
                        key={`c-${i}`}
                        className={`absolute h-[2px] bg-gradient-to-r from-transparent ${color} to-transparent`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: '-40%',
                            width: `${30 + Math.random() * 70}%`,
                        }}
                        animate={{
                            x: ['0%', '250%'],
                        }}
                        transition={{
                            duration: 0.4 + Math.random() * 1.2, // Faster and more variety
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 4
                        }}
                    />
                );
            })}
        </>
    );
}

// --- Product Walkthrough (Advanced Simulated Video) ---
function ProductWalkthrough({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isMuted, setIsMuted] = useState(false);
    const typingAudioRef = useRef<HTMLAudioElement | null>(null);
    const musicAudioRef = useRef<HTMLAudioElement | null>(null);
    const fullText = "Hey team, just connected our project tasks directly to this chat! Our productivity is about to skyrocket with this new AI context. 🚀";

    useEffect(() => {
        // Initialize Audio Samples
        typingAudioRef.current = new Audio("https://www.soundjay.com/communication/sounds/typewriter-key-1.mp3");
        musicAudioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/02/22/audio_d0c6ff1bab.mp3?filename=lofi-study-112191.mp3");

        if (typingAudioRef.current) typingAudioRef.current.volume = 0.15;
        if (musicAudioRef.current) {
            musicAudioRef.current.volume = 0.1;
            musicAudioRef.current.loop = true;
        }

        return () => {
            typingAudioRef.current?.pause();
            musicAudioRef.current?.pause();
            typingAudioRef.current = null;
            musicAudioRef.current = null;
        };
    }, []);

    // Sync Audio with Mute State and Step
    useEffect(() => {
        if (musicAudioRef.current) {
            if (isMuted || step === 0) {
                musicAudioRef.current.pause();
            } else {
                musicAudioRef.current.play().catch(() => { });
            }
        }
    }, [isMuted, step]);

    useEffect(() => {
        // Step 0: Typing Animation (Fast & Professional)
        if (step === 0) {
            let i = 0;
            const interval = setInterval(() => {
                setTypedText(fullText.slice(0, i));

                // Play Sound on Every Key (if not muted)
                if (typingAudioRef.current && !isMuted && i % 2 === 0) { // Play every 2nd char for better rhythm
                    const sound = typingAudioRef.current.cloneNode() as HTMLAudioElement;
                    sound.volume = 0.08;
                    sound.play().catch(() => { });
                }

                i++;
                if (i > fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => setStep(1), 2000);
                }
            }, 65);
            return () => clearInterval(interval);
        }

        // Step 1: Navigating to Tasks View
        if (step === 1) {
            const timer = setTimeout(() => setStep(2), 15000); // 15s
            return () => clearTimeout(timer);
        }

        // Step 2: AI Summarization Feature
        if (step === 2) {
            const timer = setTimeout(() => setStep(3), 15000); // 15s
            return () => clearTimeout(timer);
        }

        // Step 3: Final Productivity Dashboard
        if (step === 3) {
            const timer = setTimeout(() => setStep(4), 20000); // 20s
            return () => clearTimeout(timer);
        }

    }, [step, isMuted]);

    return (
        <div className="w-full h-full flex flex-col bg-[#050607] relative p-8 md:p-12 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-pink-950/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full" />

            {/* Header / Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-6 z-50">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all text-xs font-bold text-white/60"
                >
                    <div className="flex gap-0.5 items-end h-3">
                        {!isMuted ? (
                            <>
                                <motion.div animate={{ height: [2, 10, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-purple-500 rounded-full" />
                                <motion.div animate={{ height: [6, 2, 8] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-purple-500 rounded-full" />
                                <motion.div animate={{ height: [4, 8, 2] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-purple-500 rounded-full" />
                            </>
                        ) : (
                            <div className="w-4 h-[2px] bg-red-500 rotate-45 translate-y-1" />
                        )}
                    </div>
                    {isMuted ? "Sound Off" : "Sound On"}
                </button>
                <button onClick={onComplete} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all">
                    <Plus className="w-5 h-5 rotate-45" />
                </button>
            </div>

            <div className="relative z-10 flex flex-col h-full items-center justify-center">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="scene-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            className="w-full max-w-3xl"
                        >
                            <SceneTitle number="01" title="Real-time Collaboration" />
                            <div className="bg-[#111215] p-10 rounded-[40px] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F94C85] to-[#7F38F4]" />
                                    <div>
                                        <div className="text-xl font-bold text-white">Project Lead</div>
                                        <div className="text-sm text-purple-400 font-mono">Typing now...</div>
                                    </div>
                                </div>
                                <div className="text-3xl text-white font-medium leading-[1.4] tracking-tight min-h-[140px]">
                                    {typedText}
                                    <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.4 }} className="inline-block w-2.5 h-10 bg-[#7F38F4] ml-2 translate-y-2 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="scene-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="w-full max-w-5xl space-y-8"
                        >
                            <SceneTitle number="02" title="Unified Task Management" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#111215] p-8 rounded-[30px] border border-white/5 h-64 flex flex-col justify-center">
                                    <div className="text-slate-500 font-mono text-sm mb-4">ACTIVE PROJECT</div>
                                    <div className="text-2xl font-bold text-white mb-2 italic">&quot;Mobile App Design&quot;</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} transition={{ duration: 2 }} className="h-full bg-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold text-blue-500">68%</span>
                                    </div>
                                </div>
                                <div className="bg-[#111215] p-8 rounded-[30px] border border-white/5 h-64 flex flex-col justify-center gap-4">
                                    {[1, 2, 3].map(i => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            <span className="text-sm text-slate-300 font-medium tracking-tight">Requirement Review Task {i}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="scene-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                            <SceneTitle number="03" title="Powered by ClickUp Brain" />
                            <div className="relative mt-12">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500 via-white to-pink-500 blur-3xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                                <div className="bg-[#1A1B1E] p-12 rounded-[50px] border border-white/10 shadow-2xl relative z-10 flex flex-col items-center gap-6">
                                    <div className="w-20 h-20 rounded-[25px] bg-[#7F38F4] flex items-center justify-center text-3xl font-black italic">AI</div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white mb-2">Generating Summary...</p>
                                        <p className="text-slate-500 text-sm">Analyzing 150+ messages from the last 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step >= 3 && (
                        <motion.div key="scene-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-10">
                            <h2 className="text-7xl md:text-[8rem] font-black text-white tracking-tighter leading-none mb-4">
                                Context <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">Instead of Chaos.</span>
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onComplete}
                                className="px-12 py-5 bg-gradient-to-r from-[#F94C85] to-[#7F38F4] rounded-2xl text-xl font-black text-white shadow-2xl"
                            >
                                Get Started Free
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Global Timeline / Video Scrubber */}
            <div className="absolute bottom-12 left-12 right-12 z-50">
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 60, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-[#F94C85] to-[#7F38F4]"
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-8">
                        <TimelineMarker active={step === 0} label="CHAT" />
                        <TimelineMarker active={step === 1} label="TASKS" />
                        <TimelineMarker active={step === 2} label="AI" />
                        <TimelineMarker active={step >= 3} label="DASHBOARD" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">01:00 PRODUCT DEMO</span>
                </div>
            </div>
        </div>
    );
}

function SceneTitle({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-white/10 font-mono tracking-tighter">{number}</span>
            <div className="h-[1px] w-12 bg-purple-500/30" />
            <span className="text-sm font-black text-slate-400 tracking-[0.3em] uppercase">{title}</span>
        </div>
    )
}

function TimelineMarker({ active, label }: { active: boolean; label: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div className={`h-[4px] w-16 rounded-full transition-all duration-500 ${active ? 'bg-white' : 'bg-white/10'}`} />
            <span className={`text-[9px] font-bold tracking-widest ${active ? 'text-white' : 'text-slate-700'}`}>{label}</span>
        </div>
    )
}

// --- Detailed Chat Interface Replica ---
function ChatInterfaceReplica() {
    return (
        <div className="w-full h-full bg-[#0B0C0E] flex text-gray-300 font-sans md:flex-row flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            {/* 1. Primary App Sidebar (Extreme Left) */}
            <div className="w-16 bg-[#0B0C0E] border-r border-white/10 flex flex-col items-center py-4 gap-6 hidden md:flex shrink-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mb-2">
                    <svg viewBox="0 0 100 100" className="w-5 h-5 fill-white"><path d="M50 15c-15.5 0-28 12.5-28 28h12c0-8.8 7.2-16 16-16s16 7.2 16 16H80c0-15.5-12.5-28-28-28zM22 55c0 15.5 12.5 28 28 28s28-12.5 28-28H66c0 8.8-7.2 16-16 16s-16-7.2-16-16H22z" /></svg>
                </div>
                <SidebarIcon icon={<div className="w-5 h-5 border-2 border-slate-600 rounded-sm" />} label="Home" />
                <SidebarIcon icon={<Bell className="w-5 h-5 text-slate-500" />} label="Inbox" />
                <SidebarIcon icon={<MessageSquare className="w-5 h-5 text-purple-400" />} label="Chat" active />
                <SidebarIcon icon={<Hash className="w-5 h-5 text-slate-500" />} label="Docs" />
                <SidebarIcon icon={<Users className="w-5 h-5 text-slate-500" />} label="Teams" />
                <div className="mt-auto">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white/10" />
                </div>
            </div>

            {/* 2. Chat Navigation Sidebar */}
            <div className="w-[240px] bg-[#0F1014] border-r border-white/5 flex flex-col hidden md:flex">
                <div className="h-14 flex items-center px-4 border-b border-white/5 justify-between">
                    <span className="font-bold text-white text-sm">Chat</span>
                    <Plus className="w-4 h-4 text-purple-400 cursor-pointer" />
                </div>
                <div className="flex-1 p-2 space-y-6 overflow-y-auto">
                    <div className="space-y-0.5">
                        <SidebarItem icon={<MessageSquare className="w-3.5 h-3.5" />} label="Replies" count={12} />
                        <SidebarItem icon={<Bell className="w-3.5 h-3.5" />} label="Activity" />
                        <SidebarItem icon={<CheckCircle2 className="w-3.5 h-3.5" />} label="FollowUps" count={8} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase italic">Pinned</span>
                        </div>
                        <div className="space-y-0.5 opacity-80">
                            <SidebarItem icon={<div className="w-3 h-3 rounded-full bg-blue-500" />} label="UI Team" />
                            <SidebarItem icon={<div className="w-3 h-3 rounded-full bg-green-500" />} label="Feedback" active />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Main Chat Interface */}
            <div className="flex-1 flex flex-col bg-[#0B0C0E] overflow-hidden">
                {/* Chat Header */}
                <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-[#0F1014]/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-[10px] font-black overflow-hidden">F</div>
                        <span className="text-white font-bold text-sm">Feedback</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-1.5 opacity-60">
                            {[1, 2, 3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-slate-700 border border-[#0B0C0E]" />)}
                        </div>
                        <Search className="w-4 h-4 text-slate-500" />
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-500 flex items-center justify-center font-bold text-xs">L</div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2"><span className="text-white font-bold text-xs">Leo</span> <span className="text-[10px] text-slate-600">11:43 am</span></div>
                            <p className="text-sm text-slate-300">Users are absolutely loving the new Chat! 🚀</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-xs">Z</div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2"><span className="text-white font-bold text-xs">Zeb</span> <span className="text-[10px] text-slate-600">11:46 am</span></div>
                            <p className="text-sm text-slate-300">Dean, let&apos;s push the new update tonight.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarIcon({ icon, label, active }: any) {
    return (
        <div className={`flex flex-col items-center gap-1 cursor-pointer group`}>
            <div className={`p-2 rounded-xl transition-all ${active ? 'bg-purple-500/10 text-purple-400' : 'text-slate-500 group-hover:bg-white/5'}`}>
                {icon}
            </div>
            <span className={`text-[9px] font-bold tracking-tight uppercase ${active ? 'text-purple-400' : 'text-slate-600'}`}>{label}</span>
        </div>
    )
}

function SidebarItem({ icon, label, count, active }: any) {
    return (
        <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${active ? 'bg-purple-500/10 border border-purple-500/20 grayscale-0' : 'hover:bg-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'}`}>
            <div className="shrink-0">{icon}</div>
            <span className={`text-xs font-medium ${active ? 'text-white' : 'text-slate-400 hover:text-white'}`}>{label}</span>
            {count && <span className="ml-auto text-[10px] bg-slate-800 text-slate-400 px-1 rounded-sm">{count}</span>}
        </div>
    )
}
