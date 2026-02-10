"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2, Circle, MessageSquare, BrainCircuit, Bot,
  Zap, Clock, Calendar, FileText, LayoutDashboard, Plus,
  Search, Bell, HelpCircle, ChevronRight, MoreHorizontal,
  Home as HomeIcon, Inbox, ListTodo, CalendarDays, Hash, Users, FolderOpen
} from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WorkSprawl } from "@/components/WorkSprawl";
import { ConvergedPlatform } from "@/components/ConvergedPlatform";
import { SuperAgents } from "@/components/SuperAgents";
import { BrainSection } from "@/components/BrainSection";
import { AiSolutions } from "@/components/AiSolutions";
import { RoiStats } from "@/components/RoiStats";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { EnterpriseGrade } from "@/components/EnterpriseGrade";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left Column: Content */}
            <div className="lg:w-[45%] pt-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-[#292D34]"
              >
                Maximize human productivity
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-lg"
              >
                Replace all your software. Every app, AI agent, and human in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 mb-16"
              >
                <Button className="h-16 px-8 bg-[#292D34] hover:bg-black text-white text-xl font-bold rounded-xl shadow-lg transition-transform hover:scale-105">
                  Get started. It's FREE!
                </Button>
                <div className="text-sm text-gray-500 font-medium">
                  <div className="text-gray-900 font-bold mb-0.5">Free forever.</div>
                  <div>No credit card.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                  <span>Get 400% more done</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Customize your workspace</span>
                </div>

                  <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Projects", icon: CheckCircle2, active: true, color: "text-blue-500" },
                    { label: "Chat", icon: MessageSquare },
                    { label: "BrainGPT", icon: BrainCircuit },
                    { label: "AI Agents", icon: Bot },
                    { label: "Sprints", icon: Zap },
                    { label: "Time Tracking", icon: Clock },
                    { label: "Calendar", icon: Calendar },
                    { label: "Docs", icon: FileText },
                    { label: "Whiteboards", icon: LayoutDashboard },
                    { label: "More", icon: Plus, dashed: true },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "px-4 py-2.5 rounded-full border text-sm font-bold flex items-center gap-2 transition-all cursor-pointer",
                        item.active
                          ? "bg-blue-50 border-blue-200 text-blue-600 shadow-sm"
                          : item.dashed
                            ? "border-dashed border-gray-300 text-gray-400 hover:border-gray-400"
                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                      )}
                    >
                      {item.icon && <item.icon size={16} className={item.color} />}
                      {item.label}
                      {item.active && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* Right Column: UI Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[55%] relative"
            >
              {/* Mockup Container */}
              <div className="rounded-xl border border-gray-200 shadow-2xl bg-white overflow-hidden flex h-[600px] select-none pointer-events-none sm:pointer-events-auto">
                {/* Sidebar */}
                <div className="w-64 bg-[#F7F8F9] border-r border-gray-200 flex flex-col p-3 hidden sm:flex">
                  <div className="flex items-center justify-between mb-6 px-2">
                    <div className="flex items-center gap-2 font-bold text-gray-700">
                      <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-500" />
                      Home
                    </div>
                    <div className="p-1 hover:bg-gray-200 rounded cursor-pointer">
                      <Plus size={16} className="text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-1 mb-6">
                    <SidebarItem icon={Inbox} label="Inbox" badge="3" />
                    <SidebarItem icon={Users} label="My Tasks" />
                    <SidebarItem icon={CalendarDays} label="Schedule" />
                  </div>
                  <div className="text-xs font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">Creative Team</div>
                  <div className="space-y-1 mb-6">
                    <SidebarItem icon={ListTodo} label="Product Backlog" />
                    <SidebarItem icon={Hash} label="Creative" />
                  </div>
                  <div className="space-y-3 px-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-yellow-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                      </div>
                      Dean P.
                      <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 rounded-full">1</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-pink-200 flex items-center justify-center text-[10px] text-pink-700 font-bold">AI</div>
                      Campaign Agent
                      <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 rounded-full">3</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-200 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zeb" alt="User" />
                      </div>
                      Zeb E.
                    </div>
                  </div>
                  <div className="text-xs font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">Spaces</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-gray-200/60 rounded text-sm text-gray-900 font-bold">
                      <div className="w-4 h-4 rounded bg-red-500 text-white flex items-center justify-center text-[10px]">M</div>
                      Marketing
                    </div>
                    <SidebarItem icon={FolderOpen} label="Campaigns" muted />
                    <SidebarItem icon={FileText} label="Blogs" muted />
                  </div>
                </div>
                {/* Main Content Area */}
                <div className="flex-1 bg-white flex flex-col min-w-0">
                  {/* Mockup Header */}
                  <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <div className="w-4 h-4 rounded bg-red-500 text-white flex items-center justify-center text-[10px]">M</div>
                      Marketing
                      <ChevronRight size={14} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex text-xs font-medium bg-gray-50 rounded-lg p-1">
                        <div className="px-3 py-1 bg-white rounded shadow-sm text-gray-900">List</div>
                        <div className="px-3 py-1 text-gray-500">Board</div>
                        <div className="px-3 py-1 text-gray-500">Calendar</div>
                      </div>
                    </div>
                  </div>
                  {/* Task List */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    {/* Group: Done */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3 group">
                        <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        <span className="px-2 py-0.5 rounded bg-green-500 text-white text-[10px] font-bold uppercase">Done</span>
                        <span className="text-gray-400 text-xs">5</span>
                      </div>
                      <TaskItem title="Social campaign" status="green" />
                    </div>
                    {/* Group: Website Assets */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <ChevronRight size={14} className="text-gray-400 rotate-90" />
                        <span className="px-2 py-0.5 rounded bg-green-500 text-white text-[10px] font-bold uppercase">Done</span>
                        <span className="text-gray-700 font-bold text-sm">Website assets</span>
                        <span className="text-gray-400 text-xs">2</span>
                      </div>
                      <div className="pl-6 space-y-2">
                        <SubTaskItem title="Landing page" />
                        <SubTaskItem title="About page" />
                      </div>
                    </div>
                    {/* Group: Mobile Assets */}
                    <div className="mb-6">
                      <TaskItem title="Mobile assets" status="green" />
                      <div className="pl-8 mt-2 flex items-center gap-2 text-gray-400 text-sm hover:text-gray-600 cursor-pointer">
                        <Plus size={14} /> Add task
                      </div>
                    </div>
                    {/* Group: In Progress */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <ChevronRight size={14} className="text-gray-400 rotate-90" />
                        <span className="px-2 py-0.5 rounded bg-blue-500 text-white text-[10px] font-bold uppercase">In Progress</span>
                        <span className="text-gray-400 text-xs">3</span>
                      </div>
                      <div className="space-y-2">
                        <TaskItem title="Market Research Analysis" icon={Zap} color="text-blue-500" />
                        <TaskItem title="Competitor Benchmarking" icon={Users} color="text-blue-400" faded />
                        <TaskItem title="Brand Positioning Strategy" icon={HomeIcon} color="text-blue-300" faded />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gradient Glare Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
        <WorkSprawl/>
        <ConvergedPlatform/>
        <BrainSection/>
        <AiSolutions/>
        <RoiStats/>
        <VideoTestimonials/>
        <EnterpriseGrade/>
      </main>

      <Footer />
    </div>
  );
}

// Sub-components for Mockup
function SidebarItem({ icon: Icon, label, badge, muted }: { icon: any, label: string, badge?: string, muted?: boolean }) {
  return (
    <div className={cn(
      "flex items-center gap-2 px-2 py-1.5 rounded text-sm font-medium cursor-pointer transition-colors",
      muted ? "text-gray-400" : "text-gray-600 hover:bg-gray-200"
    )}>
      <Icon size={16} className={muted ? "text-gray-300" : "text-gray-500"} />
      {label}
      {badge && <span className="ml-auto text-[10px] font-bold text-white bg-red-500 px-1.5 py-0.5 rounded-full">{badge}</span>}
    </div>
  )
}

function TaskItem({ title, status, icon: Icon, color, faded }: { title: string, status?: string, icon?: any, color?: string, faded?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 py-1.5 px-2 hover:bg-gray-50 rounded group", faded && "opacity-60")}>
      <div className="flex-shrink-0">
        {status === 'green' && <CheckCircle2 size={16} className="text-green-500" />}
        {Icon && <Icon size={16} className={color} />}
      </div>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  )
}
function SubTaskItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 py-1 pl-2">
      <div className="w-3 h-3 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow" style={{ animationDuration: '3s' }} />
      <span className="text-sm text-gray-600">{title}</span>
    </div>
  )
}
