"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, Link, Bell, Zap, Search, Layout, Users, Phone, Video, User, Mic, Plus, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ChatFeatures() {
    return (
        <div className="bg-black pb-20">
            {/* AI Agents Section */}
            <section className="py-32 bg-black overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 bg-[#1B1C20] border border-white/10 rounded-full px-3 py-1 mb-8">
                        <Bot className="w-4 h-4 text-white" />
                        <span className="text-white font-bold text-xs">Chat Agents</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                        See the power of AI in every Chat.<br />
                        Get started with a single click.
                    </h2>

                    <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                        Turn on AI agents in any Chat—use the ones created by the ClickUp team or set up your own with just a prompt.
                    </p>

                    {/* AI Agents Visual with Zoom Animation */}
                    <div className="bg-[#1a1b1e] rounded-3xl shadow-2xl p-2 md:p-4 border border-slate-800 relative overflow-hidden group">
                        <AiAgentsVisual />
                    </div>
                </div>
            </section>

            {/* Projects and Chats Bento Grid Section */}
            <section className="py-32 bg-black overflow-hidden border-t border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Projects and Chats are better together
                        </h2>
                        <p className="text-xl text-slate-400">
                            Context and clarity instead of chaos. Save more than one day every week with everything in one place.
                        </p>
                    </div>

                    <ProjectsChatBento />

                    <div className="mt-20 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group h-14"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative h-full px-10 flex items-center justify-center bg-black rounded-lg leading-none">
                                <span className="text-white font-bold text-lg">Try ClickUp Chat</span>
                            </div>
                        </motion.button>
                    </div>

                    {/* Slack Import Banner */}
                    <div className="mt-24 w-full">
                        <SlackImportBanner />
                    </div>
                </div>
            </section>

            {/* Core Features Grid Section */}
            <ChatExpectationsGrid />

            {/* AI Productivity Partner Section */}
            <AiProductivitySection />
        </div>
    );
}

function ProjectsChatBento() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* 1. Connect Tasks (Tall) */}
            <BentoCard
                className="lg:col-span-1 lg:row-span-2"
                title="Connect Tasks."
                description="Link tasks and messages together so context is never lost."
                hoverDescription="Instantly link any task to a message thread for perfect context."
                visual={<ConnectTasksVisual />}
            />

            {/* 2. Posts (Wide) */}
            <BentoCard
                className="lg:col-span-2 lg:row-span-1"
                title="Posts."
                description="Keep everyone in the loop on important announcements, updates, and discussions."
                hoverDescription="Replace messy email chains with organized team announcements."
                visual={<PostsVisual />}
            />

            {/* 3. FollowUps (Wide) */}
            <BentoCard
                className="lg:col-span-2 lg:row-span-1"
                title="FollowUps."
                description="Triage comments and turn them into actionable tasks, ensuring nothing slips through the cracks."
                hoverDescription="Never miss a request again. AI helps you triage follow-ups in seconds."
                visual={<FollowUpsVisual />}
            />

            {/* 4. Sync Threads (Small) */}
            <BentoCard
                className="lg:col-span-1 lg:row-span-1"
                title="Sync Threads to Tasks."
                description="Keep all of your conversations in sync across tasks and Chat."
                hoverDescription="Synchronize discussion history across your entire workspace."
                visual={<SyncThreadsVisual />}
            />

            {/* 5. Relationships (Small) */}
            <BentoCard
                className="lg:col-span-1 lg:row-span-1"
                title="Relationships and references."
                description="Get the complete picture across all your work right where the action is."
                hoverDescription="See how every conversation connects to your goals."
                visual={<RelationshipsVisual />}
            />

            {/* 6. Organize Spaces (Small) */}
            <BentoCard
                className="lg:col-span-1 lg:row-span-1"
                title="Organize Chats into Spaces."
                description="Structure your conversations the way you work and get things done."
                hoverDescription="Categorize chats by project, team, or interest."
                visual={<OrganizeSpacesVisual />}
            />
        </div>
    );
}

function BentoCard({ title, description, hoverDescription, visual, className }: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cn(
                "group relative bg-[#111215] rounded-3xl border border-white/5 overflow-hidden flex flex-col p-8 transition-all duration-500",
                isHovered ? "border-white/20 bg-[#16171b]" : "",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative z-20 mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <motion.p
                    animate={{ opacity: isHovered ? 1 : 0.6 }}
                    className="text-slate-400 font-medium"
                >
                    {isHovered ? hoverDescription : description}
                </motion.p>
            </div>

            <div className="flex-1 relative z-10 w-full h-full">
                {visual}
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}

// --- High Fidelity Bento Visuals ---

function ConnectTasksVisual() {
    return (
        <div className="w-full h-full relative p-2">
            <div className="bg-[#0f1012] rounded-xl border border-white/5 h-full overflow-hidden flex flex-col">
                <div className="p-4 border-b border-white/5 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-xs font-bold">IV</div>
                        <div className="flex-1">
                            <div className="h-2 w-24 bg-white/10 rounded"></div>
                            <div className="h-1.5 w-16 bg-white/5 rounded mt-2"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-x-4 top-1/3 z-30 bg-[#1a1b1e] border border-white/10 rounded-xl shadow-2xl p-4"
                >
                    <div className="text-xs font-bold text-slate-500 mb-3 uppercase">Connect to</div>
                    <div className="bg-white/5 rounded-lg px-3 py-2 text-slate-400 text-xs mb-4 flex items-center gap-2">
                        <Search className="w-3 h-3" /> Search tasks...
                    </div>
                    <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-white/5 flex items-center gap-3">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-xs text-white font-medium">Dynamic Banner</span>
                        </div>
                        <div className="p-2 rounded-lg hover:bg-white/5 flex items-center gap-3 transition-colors">
                            <Check className="w-4 h-4 text-slate-600" />
                            <span className="text-xs text-slate-300">SSD Login issue</span>
                        </div>
                        <div className="p-2 rounded-lg hover:bg-white/5 flex items-center gap-3 transition-colors">
                            <Check className="w-4 h-4 text-slate-600" />
                            <span className="text-xs text-slate-300">2024 Campaign</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function PostsVisual() {
    return (
        <div className="w-full h-full flex flex-col p-2">
            <div className="flex-1 bg-[#0f1012] rounded-xl border border-white/5 p-4 space-y-4">
                <div className="flex gap-4 text-xs font-medium text-slate-500 border-b border-white/5 pb-2">
                    <span className="text-white border-b border-white pb-2">Announcements</span>
                    <span>Updates</span>
                    <span>Ideas</span>
                    <span>Meetings</span>
                </div>
                <div className="flex gap-4 pt-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20"></div>
                    <div className="space-y-3 flex-1">
                        <div className="h-2 w-32 bg-white/20 rounded"></div>
                        <div className="h-5 w-full bg-white/5 rounded flex items-center px-4">
                            <span className="text-sm font-bold text-white">Project Update: Q3 Milestones Achieved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FollowUpsVisual() {
    return (
        <div className="w-full h-full flex flex-col p-2">
            <div className="flex-1 bg-[#0f1012] rounded-xl border border-white/5 p-4 relative">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-sm font-bold">ZD</div>
                    <div className="space-y-1">
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                        <div className="h-1.5 w-16 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="absolute right-4 top-4 flex gap-2">
                    {["👍", "👀", "✅"].map((e, i) => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-sm">{e}</div>
                    ))}
                    <div className="bg-purple-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold self-center ml-2">Create Task</div>
                </div>

                <div className="space-y-2 mt-4">
                    <div className="h-2 w-full bg-white/10 rounded"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                </div>
            </div>
        </div>
    );
}

function SyncThreadsVisual() {
    return (
        <div className="w-full h-full p-2">
            <div className="h-full bg-[#0f1012] rounded-xl border border-white/5 p-4 flex flex-col">
                <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20"></div>
                    <div className="h-2 w-20 bg-white/20 rounded mt-2"></div>
                </div>
                <div className="mt-auto bg-white/5 rounded-lg p-3 border border-white/5 text-center">
                    <span className="text-xs text-white font-bold tracking-tight">View Connected Task</span>
                </div>
            </div>
        </div>
    );
}

function RelationshipsVisual() {
    return (
        <div className="w-full h-full p-2">
            <div className="h-full bg-[#0f1012] rounded-xl border border-white/5 p-4 flex flex-col">
                <div className="flex border-b border-white/5 mb-4">
                    <span className="text-xs text-white pb-2 border-b border-white">Chat</span>
                    <span className="text-xs text-slate-500 ml-4 pb-2">Posts</span>
                </div>
                <div className="space-y-4">
                    <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-400"></div>
                        <div className="h-1.5 w-16 bg-white/10 rounded mt-2"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                        <div className="h-1.5 w-24 bg-white/10 rounded mt-2"></div>
                    </div>
                </div>
                <div className="mt-auto h-4 w-full bg-white/5 rounded-full flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
            </div>
        </div>
    );
}

function OrganizeSpacesVisual() {
    return (
        <div className="w-full h-full p-2">
            <div className="h-full bg-[#0f1012] rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="bg-[#1a1b1e] p-2 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Chat Product</span>
                </div>
                <div className="p-3 space-y-3">
                    <div className="flex gap-4 text-[10px] text-slate-500">
                        <span className="text-white">Chat</span>
                        <span>Posts</span>
                        <span>List</span>
                        <span>Docs</span>
                    </div>
                    <div className="space-y-2">
                        <div className="p-2 rounded bg-purple-600/10 border border-purple-500/20 flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                            <div className="h-1.5 w-20 bg-purple-300/40 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Core Features Grid ---

function ChatExpectationsGrid() {
    const features = [
        { title: "Chats & Channels", visual: <ChatsChannelsVisual /> },
        { title: "Direct messages", visual: <DirectMessagesVisual /> },
        { title: "Threads", visual: <ThreadsVisual /> },
        { title: "Voice & Video Calls", visual: <VoiceVideoVisual /> },
        { title: "Activity feed", visual: <ActivityFeedVisual /> },
        { title: "Push Notifications", visual: <PushNotificationsVisual /> },
        { title: "Reminders", visual: <RemindersVisual /> },
        { title: "Custom sidebar", visual: <CustomSidebarVisual /> },
        { title: "Drafts & Sent", visual: <DraftsSentVisual /> },
        { title: "Integrations", visual: <IntegrationsVisual /> }
    ];

    return (
        <section className="py-32 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-[#1B1C20] border border-white/10 rounded-full px-4 py-1.5 mb-8">
                        <Layout className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-bold text-xs">Core features</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Everything you&apos;d expect from Chat
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {features.map((feature, i) => (
                        <ExpectationCard key={i} title={feature.title}>
                            {feature.visual}
                        </ExpectationCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExpectationCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#0f1012] rounded-3xl border border-white/5 overflow-hidden flex flex-col items-center justify-between p-6 h-[220px] group transition-all duration-300 hover:border-white/20 hover:bg-[#16171b]"
        >
            <div className="w-full relative flex-1 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                {children}
            </div>
            <h3 className="text-lg font-bold text-white text-center mt-4 group-hover:text-purple-400 transition-colors">
                {title}
            </h3>
        </motion.div>
    );
}

// --- Grid Sub-Visuals ---

function ChatsChannelsVisual() {
    return (
        <div className="w-full space-y-2 px-4">
            <div className="h-2 w-full bg-white/5 rounded" />
            <div className="h-8 w-full bg-white/10 rounded-lg flex items-center px-3 gap-2 border border-white/5 shadow-xl">
                <div className="w-4 h-4 rounded-md bg-purple-500/20 flex items-center justify-center">
                    <Layout className="w-2.5 h-2.5 text-purple-400" />
                </div>
                <div className="h-1.5 w-20 bg-white/20 rounded" />
            </div>
            <div className="h-2 w-3/4 bg-white/5 rounded" />
        </div>
    );
}

function DirectMessagesVisual() {
    return (
        <div className="w-full px-4 text-center">
            <div className="flex justify-center -space-x-2 mb-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-tr from-slate-700 to-slate-500" />
                ))}
            </div>
            <div className="flex justify-center gap-1.5">
                {['🎁', '🚀', '🎂', '👾'].map((e, i) => (
                    <span key={i} className="text-xs bg-white/5 rounded-full px-1.5 border border-white/5">{e} 1</span>
                ))}
            </div>
        </div>
    );
}

function ThreadsVisual() {
    return (
        <div className="w-full px-4 flex flex-col gap-2">
            <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-white/10" />
                <div className="h-2 w-16 bg-white/20 rounded mt-1.5" />
            </div>
            <div className="ml-6 border-l border-white/10 pl-3 py-1 space-y-2">
                <div className="text-[8px] text-slate-500 font-bold">1 reply</div>
                <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-700" />
                    <div className="h-1.5 w-12 bg-white/10 rounded mt-1.5" />
                </div>
            </div>
        </div>
    );
}

function VoiceVideoVisual() {
    return (
        <div className="bg-slate-800/50 rounded-lg p-2 border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-red-500 transform rotate-135" />
            </div>
            <div className="flex -space-x-1">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full border border-black bg-slate-600" />
                ))}
            </div>
        </div>
    );
}

function ActivityFeedVisual() {
    return (
        <div className="w-full px-4 space-y-3">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/20" />
                <span className="text-[10px] text-purple-400 font-bold">@AK</span>
                <div className="h-1 w-12 bg-white/5 rounded" />
            </div>
            <div className="flex items-center gap-2 opacity-40">
                <div className="w-4 h-4 rounded-full bg-blue-500/20" />
                <span className="text-[10px] text-blue-400 font-bold">@Zeb</span>
                <div className="h-1 w-8 bg-white/5 rounded" />
            </div>
        </div>
    );
}

function PushNotificationsVisual() {
    return (
        <div className="relative">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10 shadow-2xl scale-125">
                <MessageSquare className="w-6 h-6 text-purple-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0f1012]" />
            </div>
        </div>
    );
}

function RemindersVisual() {
    return (
        <div className="bg-slate-800/30 rounded-full px-4 py-2 border border-white/5 flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-purple-400" />
            <div className="h-1 w-8 bg-purple-500/50 rounded-full overflow-hidden">
                <motion.div animate={{ x: [-24, 24] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-full bg-purple-400" />
            </div>
        </div>
    );
}

function CustomSidebarVisual() {
    return (
        <div className="w-32 bg-[#1a1b1e] rounded-lg border border-white/5 overflow-hidden">
            <div className="p-2 border-b border-white/5 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-red-500/50" />
                <div className="w-1 h-1 rounded-full bg-yellow-500/50" />
                <div className="w-1 h-1 rounded-full bg-green-500/50" />
            </div>
            <div className="p-2 space-y-2">
                <div className="flex items-center gap-2 bg-purple-600/20 p-1 rounded">
                    <div className="w-3 h-3 rounded bg-purple-500" />
                    <div className="h-1 w-8 bg-purple-200/50 rounded" />
                </div>
                <div className="flex items-center gap-2 px-1">
                    <div className="w-3 h-3 rounded bg-white/5" />
                    <div className="h-1 w-12 bg-white/5 rounded" />
                </div>
            </div>
        </div>
    );
}

function DraftsSentVisual() {
    return (
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                <MessageSquare className="w-3 h-3" />
                Drafting...
            </div>
            <div className="h-2 w-24 bg-white/10 rounded mt-2" />
        </div>
    );
}

function IntegrationsVisual() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5 border border-white/5">
                <Zap className="w-3.5 h-3.5 text-yellow-500" />
                <span className="text-[10px] text-white font-bold">Zapier</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5 border border-white/5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                <span className="text-[10px] text-white font-bold">Github</span>
            </div>
        </div>
    );
}

// --- Slack Import Banner Component ---
function SlackImportBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] p-[1px] bg-gradient-to-r from-purple-500/20 via-white/10 to-pink-500/20"
        >
            <div className="bg-[#0f1012] rounded-[39px] px-8 md:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute left-0 top-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none" />
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-600/10 blur-[100px] pointer-events-none" />

                {/* Left Side: Logos and Toggle */}
                <div className="flex items-center gap-6 md:gap-10 shrink-0">
                    {/* Slack Logo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center grayscale opacity-80">
                        <svg viewBox="0 0 122.8 122.8" className="w-full h-full">
                            <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#E01E5A" />
                            <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36C5F0" />
                            <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3z" fill="#2EB67D" />
                            <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ECB22E" />
                        </svg>
                    </div>

                    {/* Toggle Switch */}
                    <div className="relative w-24 h-12 md:w-28 md:h-14 bg-[#1EBC61] rounded-full p-1.5 flex items-center shadow-[0_0_20px_rgba(30,188,97,0.3)]">
                        <motion.div
                            animate={{ x: [0, 52, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full shadow-lg"
                        />
                    </div>

                    {/* ClickUp Logo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            <path d="M50 15c-15.5 0-28 12.5-28 28h12c0-8.8 7.2-16 16-16s16 7.2 16 16H80c0-15.5-12.5-28-28-28zM22 55c0 15.5 12.5 28 28 28s28-12.5 28-28H66c0 8.8-7.2 16-16 16s-16-7.2-16-16H22z" />
                        </svg>
                    </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 text-center lg:text-left px-4">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to switch?</h3>
                    <p className="text-slate-400 text-lg max-w-md">
                        Import your channels, message history, team members and custom emojis in one click.
                    </p>
                </div>

                {/* Right Side: CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="shrink-0 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all"
                >
                    Import from Slack
                </motion.button>
            </div>
        </motion.div>
    );
}

// --- AI Productivity Partner Section ---

function AiProductivitySection() {
    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            {/* Ultra-High-Fidelity Circuit Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Central Purple Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/15 blur-[120px] rounded-full" />

                <svg width="100%" height="100%" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* SVG Filters for Glow */}
                    <defs>
                        <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Background Grid Layer (very subtle) */}
                    <path d="M0 400h1400M700 0v800" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" />

                    {/* Main Circuit Paths - Primary Opacity */}
                    <g filter="url(#circuit-glow)">
                        {/* Left Main */}
                        <path d="M0 300h150l70-70h120v200h80l40-40" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
                        <path d="M0 320h130l60 60h150" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />
                        <path d="M200 0v120l-40 40h-80" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Right Main */}
                        <path d="M1400 500h-150l-70 70h-120v-200h-80l-40 40" stroke="white" strokeWidth="1.2" strokeOpacity="0.4" />
                        <path d="M1400 480h-130l-60-60h-150" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.3" />
                        <path d="M1200 800v-120l40-40h80" stroke="white" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Middle Branching */}
                        <path d="M600 0l-100 100v100h-100" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                        <path d="M800 800l100-100v-100h100" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
                    </g>

                    {/* Glowy Joints (Higher Visibility) */}
                    <circle cx="150" cy="300" r="3" fill="white" fillOpacity="0.6" className="animate-pulse" />
                    <circle cx="220" cy="230" r="3" fill="#a855f7" fillOpacity="0.6" />
                    <circle cx="1250" cy="500" r="3" fill="white" fillOpacity="0.6" className="animate-pulse" />
                    <circle cx="1180" cy="570" r="3" fill="#ec4899" fillOpacity="0.6" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-2 bg-black border border-white/10 rounded-full px-4 py-1.5 shadow-xl">
                            <Bot className="w-4 h-4 text-purple-400" />
                            <span className="text-white font-bold text-sm tracking-tight flex items-center gap-1">
                                ClickUp <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Brain</span>
                            </span>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                        Get 10x more done with AI that&apos;s<br />
                        your productivity partner
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AiProductivityCard
                        title="Ask AI."
                        description="Get the right answer right away, using knowledge from ClickUp and any connected apps."
                        visual={<AskAiVisual />}
                    />
                    <AiProductivityCard
                        title="AI Task Creation."
                        description="Action items automatically created, assigned, and linked."
                        visual={<TaskCreationVisual />}
                    />
                    <AiProductivityCard
                        title="AI CatchUp."
                        description="Get up to speed instantly on important topics and action items."
                        visual={<CatchUpVisual />}
                    />
                </div>
            </div>
        </section>
    );
}

function AiProductivityCard({ title, description, visual }: any) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#0c0d0f] rounded-[32px] border border-white/5 p-8 flex flex-col h-[480px] group transition-all duration-300 hover:border-white/10 hover:bg-[#111216]"
        >
            <div className="flex-1 w-full bg-[#08090b] rounded-[24px] mb-8 overflow-hidden relative border border-white/5 flex items-center justify-center p-4">
                {visual}
            </div>
            <div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

function AskAiVisual() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Center Star Logo */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)] z-10"
            >
                <div className="relative">
                    <Bot className="w-10 h-10 text-white" />
                    {/* Sparkles */}
                    <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-2 -right-2 text-white">✦</motion.div>
                </div>
            </motion.div>

            {/* Orbiting App Icons */}
            <AppOrbit delay={0} xOffset={120} yOffset={0}><svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></AppOrbit>
            <AppOrbit delay={2} xOffset={-100} yOffset={60}><div className="bg-[#4285F4] w-full h-full rounded flex items-center justify-center font-black text-[10px] text-white">G</div></AppOrbit>
            <AppOrbit delay={4} xOffset={-100} yOffset={-60}><div className="bg-orange-500 w-full h-full rounded flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div></AppOrbit>
            <AppOrbit delay={6} xOffset={0} yOffset={100}><div className="bg-green-600 w-full h-full rounded flex items-center justify-center font-bold text-xs">Drive</div></AppOrbit>

            {/* Connection Lines (High Fidelity) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="50%" x2="72%" y2="50%" stroke="url(#line-grad-1)" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="50%" y1="50%" x2="38%" y2="68%" stroke="url(#line-grad-2)" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="50%" y1="50%" x2="38%" y2="32%" stroke="url(#line-grad-2)" strokeWidth="1.5" strokeOpacity="0.4" />

                <defs>
                    <linearGradient id="line-grad-1" x1="50%" y1="50%" x2="72%" y2="50%">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="line-grad-2" x1="50%" y1="50%" x2="38%" y2="68%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

function AppOrbit({ children, delay, xOffset, yOffset }: any) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: xOffset, y: yOffset }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            className="absolute w-12 h-12 rounded-xl bg-[#16171b] border border-white/10 flex items-center justify-center p-2.5 shadow-2xl z-20 cursor-default"
        >
            {children}
        </motion.div>
    );
}

function TaskCreationVisual() {
    return (
        <div className="w-full h-full flex items-center justify-center p-6 bg-[#08090b]">
            <div className="w-full max-w-[260px] aspect-[4/3] bg-[#0c0d0f] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col">
                <div className="p-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="h-1.5 w-12 bg-white/10 rounded" />
                        <div className="h-1.5 w-6 bg-white/5 rounded" />
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                        className="bg-white text-black px-8 py-3 rounded-xl font-black flex items-center gap-2 shadow-2xl cursor-default"
                    >
                        <div className="bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center">✦</div>
                        <span>Create Task</span>
                    </motion.div>
                    <div className="space-y-3 w-full max-w-[160px]">
                        <div className="h-1.5 w-full bg-white/5 rounded-full" />
                        <div className="h-1.5 w-2/3 bg-white/5 rounded-full mx-auto" />
                    </div>
                </div>
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                        {[...Array(36)].map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CatchUpVisual() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-8">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-default"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#111216] border border-white/10 px-10 py-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                    <div className="relative">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute -top-1 -right-1 text-white text-[10px]"
                        >✦</motion.div>
                    </div>
                    <span className="text-white font-black text-lg">Catch me up</span>
                </div>
            </motion.div>

            <div className="w-full space-y-4 max-w-[280px]">
                {[1, 2].map(i => (
                    <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-black uppercase tracking-widest">
                            <span>Summary Point {i}</span>
                            <span className="text-purple-400">✦</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: i === 1 ? "90%" : "75%" }}
                                transition={{ duration: 2, delay: i * 0.3, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-purple-500/30 via-pink-500/40 to-transparent"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AiAgentsVisual() {
    return (
        <div className="w-full aspect-[4/3] md:aspect-video bg-black rounded-2xl overflow-hidden relative border border-slate-800">
            {/* Animated Container */}
            <motion.div
                className="w-full h-full origin-bottom-center"
                initial={{ scale: 1, y: 0 }}
                whileInView={{
                    scale: [1, 1.5, 1.5, 1],
                    y: ["0%", "10%", "10%", "0%"]
                }}
                viewport={{ once: false }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.8, 1]
                }}
            >
                {/* Chat Interface Mockup */}
                <div className="w-full h-full flex flex-col p-6 md:p-10">

                    {/* Message 1 */}
                    <div className="flex gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                            {/* Fallback if image fails */}
                            <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold">I</div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="font-bold text-white">Isaac</span>
                                <span className="text-xs text-slate-500">Mar 6 at 2:51 AM</span>
                            </div>
                            <p className="text-slate-300 text-left text-lg leading-relaxed">
                                What&apos;s up <span className="text-purple-400">@Eric C.</span> Is there a task where we can track deliverables for the upcoming sprint?
                            </p>
                        </div>
                    </div>

                    {/* Message 2 */}
                    <div className="flex gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center overflow-hidden shrink-0">
                            <div className="w-full h-full bg-red-500 text-white flex items-center justify-center font-bold">C</div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="font-bold text-white">Cass Chan</span>
                                <span className="text-xs text-slate-500">5:13 PM</span>
                            </div>
                            <p className="text-slate-300 text-left text-lg leading-relaxed">
                                When are we launching the new landing page?
                            </p>
                        </div>
                    </div>

                    {/* Input Area (Focus Area) */}
                    <div className="mt-auto">
                        <div className="border border-slate-700 rounded-xl bg-[#1a1b1e] overflow-hidden shadow-2xl">
                            {/* Tabs */}
                            <div className="flex border-b border-slate-700 px-4 pt-3 gap-6">
                                <div className="text-white border-b-2 border-white pb-3 font-medium text-sm">Message</div>
                                <div className="text-slate-500 pb-3 font-medium text-sm">Post</div>
                            </div>

                            {/* Text Area */}
                            <div className="p-4 min-h-[100px] text-left">
                                <span className="text-slate-500 text-lg">Write to marketing-team</span>
                                {/* Simulated Cursor */}
                                <motion.div
                                    className="inline-block w-[2px] h-5 bg-purple-500 ml-1 align-middle"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </div>

                            {/* Toolbar */}
                            <div className="px-4 py-3 bg-[#151619] border-t border-slate-800 flex items-center gap-4 text-slate-400">
                                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white text-xs"><Plus className="w-4 h-4" /></div>
                                <Bot className="w-5 h-5 text-purple-500 animate-pulse" />
                                <Link className="w-5 h-5" />
                                <Users className="w-5 h-5" />
                                <div className="flex-1" />
                                <Mic className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Mouse Cursor Animation */}
            <motion.div
                className="absolute z-20 pointer-events-none"
                initial={{ x: "80%", y: "80%", opacity: 0 }}
                whileInView={{
                    x: ["80%", "40%", "42%", "80%"],
                    y: ["80%", "70%", "72%", "80%"],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatDelay: 2,
                    times: [0, 0.2, 0.8, 1]
                }}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3L11.5 26.5L15.5 17.5L25 15L6 3Z" fill="white" stroke="black" strokeWidth="2" />
                </svg>
            </motion.div>

        </div>
    )
}
