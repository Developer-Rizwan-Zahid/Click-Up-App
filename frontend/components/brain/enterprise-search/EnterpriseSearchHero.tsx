"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Database, FileText, Image as ImageIcon, MoreHorizontal } from "lucide-react";

export const EnterpriseSearchHero = () => {
    return (
        <section className="bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto text-center relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-white font-bold mb-6 text-[15px] tracking-wide">Enterprise AI Search</h2>
                    <h1 className="text-5xl md:text-[80px] font-black text-white mb-8 tracking-tight leading-[1.1]">
                        Your entire company, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E9E] via-[#D864FF] to-[#8F00FF]">one search</span> away.
                    </h1>
                    <p className="text-[22px] font-medium text-gray-400 max-w-3xl mx-auto">
                        A single place for AI-powered deep search and contextual answers.
                    </p>
                </motion.div>

                {/* App Icons Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-24"
                >
                    {/* Logos */}
                    <LogoWrapper name="Notion"><NotionIcon /></LogoWrapper>
                    <LogoWrapper name="Asana" glow><AsanaIcon /></LogoWrapper>
                    <LogoWrapper name="Salesforce"><SalesforceIcon /></LogoWrapper>
                    <LogoWrapper name="Figma" glow><FigmaIcon /></LogoWrapper>
                    <LogoWrapper name="Slack"><SlackIcon /></LogoWrapper>
                    <LogoWrapper name="GitHub"><GithubIcon /></LogoWrapper>
                    <LogoWrapper name="Dropbox" glow><DropboxIcon /></LogoWrapper>
                    <LogoWrapper name="HubSpot"><HubSpotIcon /></LogoWrapper>
                    <LogoWrapper name="Drive" glow><DriveIcon /></LogoWrapper>
                </motion.div>

                {/* Search Interface Mockup */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative max-w-4xl mx-auto mb-16"
                >
                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-fuchsia-600/20 blur-[100px] rounded-full opacity-50" />

                    <div className="relative bg-[#0b0b0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-left bg-gradient-to-b from-[#18181b] to-[#0b0b0f]">
                        {/* Search Bar Area */}
                        <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between pl-2">
                                <div className="text-[19px] text-[#E4E4E5] font-normal flex items-center">
                                    Where is the onboarding doc for new eng
                                    <span className="ml-[1px] w-[2px] h-6 bg-[#3B82F6] animate-pulse" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="text-gray-400 hover:text-white transition-colors">
                                        <span className="sr-only">Clear</span>
                                        <div className="text-xl">×</div>
                                    </button>
                                    <button className="px-3 py-1.5 bg-[#2C1A38] border border-fuchsia-500/30 rounded-lg text-fuchsia-300 text-sm font-medium flex items-center gap-2 hover:bg-[#3d244d] transition-colors shadow-[0_0_10px_rgba(217,70,239,0.15)]">
                                        <span className="w-4 h-4 flex items-center justify-center">✨</span>
                                        Search with AI
                                    </button>
                                </div>
                            </div>

                            {/* Filter Bar */}
                            <div className="flex items-center gap-2 text-[13px] text-gray-500 overflow-x-auto pb-1 scrollbar-hide border-b border-white/5 pb-4">
                                <span className="text-fuchsia-400 font-medium border-b-2 border-fuchsia-500 pb-1 px-1">All</span>
                                <div className="w-[1px] h-4 bg-white/10 mx-2" />

                                <FilterIcon icon={<BoxIcon />} active />
                                <FilterIcon icon={<DropboxIcon size={14} />} />
                                <FilterIcon icon={<FigmaIcon size={14} />} />
                                <FilterIcon icon={<GithubIcon size={14} />} />
                                <FilterIcon icon={<SalesforceIcon size={14} />} />
                                <FilterIcon icon={<NotionIcon size={14} />} />
                                <FilterIcon icon={<SlackIcon size={14} />} />
                                <FilterIcon icon={<JiraIcon />} />

                                <div className="px-2 py-1 border border-white/10 rounded-md text-xs flex items-center gap-1 hover:bg-white/5 cursor-pointer ml-1 text-gray-400">
                                    <Database size={12} /> Apps
                                </div>
                            </div>
                        </div>


                        {/* Search Results Mock */}
                        <div className="min-h-[200px] bg-[#0b0b0f] px-2 pb-2">
                            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Results</div>
                            {/* Result Items */}
                            <div className="space-y-0.5">
                                <ResultItem
                                    icon={<FileText size={16} className="text-[#FF5D5D]" />}
                                    title="Agents Landing Page Copy"
                                    avatars={[1]}
                                />
                                <ResultItem
                                    icon={<FigmaIcon size={16} />}
                                    title="Agents LP Design"
                                    avatars={[2, 3]}
                                />
                                <ResultItem
                                    icon={<div className="w-3.5 h-3.5 border-2 border-gray-400 rounded-full" />}
                                    title="Agents Landing Page"
                                    avatars={[1, 2]}
                                    active
                                />
                            </div>

                            {/* Footer */}
                            <div className="mt-12 flex justify-between items-center text-[11px] text-gray-500 border-t border-white/5 pt-3 px-4 pb-1">
                                <div className="flex gap-4 font-mono items-center">
                                    <span className="flex items-center gap-1.5"><span className="text-gray-600">&gt;</span> Type <span className="text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">/</span> to view available commands, hit <span className="text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">tab</span> on a selected item to see additional actions</span>
                                </div>
                                <div className="flex items-center gap-1 hover:text-gray-300 cursor-pointer transition-colors">
                                    <Settings size={12} /> Settings
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-3.5 rounded-xl bg-[#c124e0] text-white font-bold flex items-center gap-2 hover:bg-[#a61ac2] transition-all shadow-[0_0_20px_rgba(193,36,224,0.4)] hover:shadow-[0_0_30px_rgba(193,36,224,0.6)]">
                        Get Started <ArrowRight size={18} />
                    </button>
                    <button className="px-8 py-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors">
                        Book a demo
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

// Components
const LogoWrapper = ({ name, children, glow }: { name: string, children: React.ReactNode, glow?: boolean }) => (
    <div className={`w-[52px] h-[52px] bg-[#1a1a1a] rounded-xl flex items-center justify-center transition-all cursor-pointer hover:bg-[#2a2a2a] group relative ${glow ? 'border border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.2)]' : 'border border-white/10 hover:border-white/20'}`}>
        <div className="transition-all duration-300 transform group-hover:scale-110">
            {children}
        </div>
    </div>
);

const FilterIcon = ({ icon, active, grayscale }: { icon: React.ReactNode, active?: boolean, grayscale?: boolean }) => (
    <div className={`p-1.5 rounded transition-colors cursor-pointer ${active ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-500 hover:text-gray-300'}`}>
        <div className={grayscale ? 'grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' : ''}>
            {icon}
        </div>
    </div>
);

const ResultItem = ({ icon, title, avatars, active }: { icon: React.ReactNode, title: string, avatars: number[], active?: boolean }) => (
    <div className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${active ? 'bg-white/10' : 'hover:bg-white/5'}`}>
        <div className="w-5 flex justify-center text-gray-400 group-hover:text-gray-300">
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <div className={`text-sm font-medium truncate ${active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {title}
            </div>
        </div>

        {/* Avatars Mock */}
        <div className="flex -space-x-2 mr-4 opacity-70 group-hover:opacity-100 transition-opacity">
            {avatars.map(i => (
                <div key={i} className="w-5 h-5 rounded-full border border-[#0b0b0f] bg-gray-600 flex items-center justify-center text-[8px] text-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    </div>
);


// Icons
const NotionIcon = ({ size = 24, grayscale }: { size?: number, grayscale?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.367 19.34L8.537 1.583C8.636 1.157 9.855 1.096 9.855 1.096L18.736 1.05C19.231 1.047 19.566 1.517 19.467 1.944L15.297 19.701C15.198 20.127 13.979 20.188 13.979 20.188L5.098 20.234C4.603 20.237 4.268 19.767 4.367 19.34Z" fill="white" />
        <path d="M15.462 20.228L6.444 20.275C6.444 20.275 6.068 20.134 6.257 19.33L10.514 1.206L19.432 1.159C19.432 1.159 19.808 1.3 19.619 2.105L15.362 20.229H15.462Z" fill="black" />
        <path d="M9.825 3.528L8.695 8.353L12.565 8.332L9.825 3.528ZM12.78 12.375L12.553 13.344L13.883 14.996L12.78 12.375ZM8.085 10.963L7.73 12.469L8.74 12.463L8.085 10.963ZM6.908 15.968L6.554 17.474L7.564 17.469L6.908 15.968ZM11.603 17.448L12.934 19.099L11.751 16.29L14.49 4.613L16.215 4.605L12.593 20.04L10.358 17.264L9.198 22.203L6.155 22.219L10.224 4.887L11.949 4.878L9.088 17.062L11.518 17.049L11.603 17.448Z" fill="white" />
    </svg>
);

const AsanaIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#F06A6A" fillOpacity="0.0" />
        <circle cx="12" cy="6" r="3.5" fill="#F06A6A" />
        <circle cx="17.5" cy="16" r="3.5" fill="#F06A6A" />
        <circle cx="6.5" cy="16" r="3.5" fill="#F06A6A" />
    </svg>
);

const SalesforceIcon = ({ size = 28 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9 8.3C16.9 6.2 15.2 4.5 13.1 4.5C12.4 4.5 11.7 4.7 11.2 5.1C10.7 3.5 9.2 2.4 7.5 2.4C5.4 2.4 3.7 4.1 3.7 6.2C3.7 6.4 3.7 6.6 3.8 6.8C2.2 7.3 1 8.8 1 10.6C1 12.8 2.8 14.6 5 14.6H16.9C19 14.6 20.8 12.8 20.8 10.6C20.8 9.9 20.6 9.3 20.2 8.8C20.3 8.6 20.3 8.4 20.3 8.2C20.3 6.1 18.2 8.3 16.9 8.3Z" fill="#00A1E0" />
    </svg>
);

const FigmaIcon = ({ size = 24, grayscale }: { size?: number, grayscale?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={grayscale ? 'grayscale' : ''}>
        <path d="M3.5 24C5.433 24 7 22.433 7 20.5V17H3.5C1.567 17 0 18.567 0 20.5C0 22.433 1.567 24 3.5 24Z" fill="#0ACF83" />
        <path d="M0 13.5C0 11.567 1.567 10 3.5 10H7V17H3.5C1.567 17 0 15.433 0 13.5Z" fill="#A259FF" />
        <path d="M0 6.5C0 4.567 1.567 3 3.5 3H7V10H3.5C1.567 10 0 8.433 0 6.5Z" fill="#F24E1E" />
        <path d="M7 0H10.5C12.433 0 14 1.567 14 3.5C14 5.433 12.433 7 10.5 7H7V0Z" fill="#FF7262" />
        <path d="M14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z" fill="#1ABCFE" />
    </svg>
);

const SlackIcon = ({ size = 24, grayscale }: { size?: number, grayscale?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={grayscale ? 'grayscale' : ''}>
        <path d="M5.04 15.26C3.99 15.26 3.14 16.11 3.14 17.16C3.14 18.21 3.99 19.06 5.04 19.06H6.94V17.16C6.94 16.11 6.09 15.26 5.04 15.26ZM5.04 5.04C3.99 5.04 3.14 5.89 3.14 6.94C3.14 7.99 3.99 8.84 5.04 8.84H6.94V6.94C6.94 5.89 6.09 5.04 5.04 5.04ZM15.26 18.96C15.26 20.01 16.11 20.86 17.16 20.86C18.21 20.86 19.06 20.01 19.06 18.96V17.06H17.16C16.11 17.06 15.26 17.91 15.26 18.96ZM18.96 5.04H17.06V6.94C17.06 7.99 17.91 8.84 18.96 8.84C20.01 8.84 20.86 7.99 20.86 6.94C20.86 5.89 20.01 5.04 18.96 5.04ZM8.84 5.04H6.94V6.94C6.94 7.99 7.79 8.84 8.84 8.84C9.89 8.84 10.74 7.99 10.74 6.94V5.04H8.84ZM6.94 15.16H8.84V13.26C8.84 12.21 7.99 11.36 6.94 11.36C5.89 11.36 5.04 12.21 5.04 13.26V15.16H6.94ZM17.06 8.84H15.16V6.94C15.16 5.89 16.01 5.04 17.06 5.04C18.11 5.04 18.96 5.89 18.96 6.94V8.84H17.06ZM15.16 11.36H13.26V13.26C13.26 14.31 14.11 15.16 15.16 15.16C16.21 15.16 17.06 14.31 17.06 13.26V11.36H15.16Z" fill="white" className={grayscale ? 'fill-gray-400' : ''} />
        <path d="M8.84 10.74H10.74V8.84H8.84V10.74Z" fill="#E01E5A" />
        <path d="M13.26 8.84H15.16V10.74H13.26V8.84Z" fill="#36C5F0" />
        <path d="M13.26 13.26H15.16V15.16H13.26V13.26Z" fill="#2EB67D" />
        <path d="M8.84 13.26H10.74V15.16H8.84V13.26Z" fill="#ECB22E" />
    </svg>
);

const GithubIcon = ({ size = 24, grayscale }: { size?: number, grayscale?: boolean }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className={grayscale ? 'fill-gray-400' : 'fill-white'}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9.025 23.129 9.025 22.81C9.025 22.524 9.015 21.765 9.01 20.759C5.672 21.485 4.968 19.155 4.968 19.155C4.422 17.769 3.635 17.401 3.635 17.401C2.545 16.656 3.717 16.671 3.717 16.671C4.922 16.756 5.556 17.908 5.556 17.908C6.627 19.742 8.366 19.212 9.05 18.905C9.158 18.129 9.469 17.6 9.812 17.3C7.148 16.997 4.346 15.967 4.346 11.367C4.346 10.057 4.814 8.983 5.578 8.136C5.453 7.834 5.046 6.602 5.694 4.962C5.694 4.962 6.702 4.639 8.996 6.192C9.954 5.926 10.982 5.793 12.008 5.793C13.034 5.793 14.062 5.926 15.022 6.192C17.315 4.639 18.321 4.962 18.321 4.962C18.971 6.602 18.564 7.834 18.441 8.136C19.207 8.983 19.673 10.057 19.673 11.367C19.673 15.978 16.866 16.993 14.195 17.291C14.628 17.665 15.016 18.404 15.016 19.535C15.016 21.155 15.002 22.463 15.002 22.81C15.002 23.134 15.218 23.508 15.827 23.386C20.593 21.797 24 17.301 24 12C24 5.373 18.627 0 12 0Z" />
    </svg>
);

const DropboxIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3L1.5 7.5L7 12L12.5 7.5L7 3Z" fill="#0061FF" />
        <path d="M17 3L11.5 7.5L17 12L22.5 7.5L17 3Z" fill="#0061FF" />
        <path d="M1.5 16.5L7 21L12.5 16.5L7 12L1.5 16.5Z" fill="#0061FF" />
        <path d="M22.5 16.5L17 21L11.5 16.5L17 12L22.5 16.5Z" fill="#0061FF" />
        <path d="M7 12L12.5 16.5L18 12L12.5 7.5L7 12Z" fill="#0061FF" opacity="0.6" />
    </svg>
);

const HubSpotIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 7.5C20.3284 7.5 21 6.82843 21 6C21 5.17157 20.3284 4.5 19.5 4.5C18.6716 4.5 18 5.17157 18 6C18 6.82843 18.6716 7.5 19.5 7.5Z" fill="#FF7A59" />
        <path d="M19.5 19.5C20.3284 19.5 21 18.8284 21 18C21 17.1716 20.3284 16.5 19.5 16.5C18.6716 16.5 18 17.1716 18 18C18 18.8284 18.6716 19.5 19.5 19.5Z" fill="#FF7A59" />
        <path d="M4.5 12C4.5 12.8284 3.82843 13.5 3 13.5C2.17157 13.5 1.5 12.8284 1.5 12C1.5 11.1716 2.17157 10.5 3 10.5C3.82843 10.5 4.5 11.1716 4.5 12Z" fill="#FF7A59" />
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#FF7A59" />
        <path d="M12 15V18" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 12H18" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M9 12H6" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

const DriveIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 17L5.5 22H18.5L21.5 17H8.5Z" fill="#0066DA" />
        <path d="M17 19.5H8.5L8.2 19L2.8 10L5.7 5L17 24.5V19.5Z" fill="#00AC47" />
        <path d="M5.5 5L0 14L8.5 19.5L14 10L14 10L5.5 5Z" fill="#EA4335" />
        <path d="M5.5 5H18.5L15.6 10H2.6L5.5 5Z" fill="#00AC47" />
        <path d="M18.5 5L24 14L15.5 28.5L10 19.5L18.5 5Z" fill="#FFBA00" />
        <path d="M13.9 14.1L18.5 22H5.5L10.1 14.1H13.9Z" fill="#0066DA" />
    </svg>
);

const BoxIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
        <path d="M21.5 12L12 17.5L2.5 12L12 6.5L21.5 12ZM12 18.5L2.5 13V18L12 23.5V18.5ZM12 18.5V23.5L21.5 18V13L12 18.5Z" fill="currentColor" />
    </svg>
);

const JiraIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 10.5L12 2L2 14.5H12L11.5 22L22 9.5H11.5V10.5Z" fill="#0052CC" />
    </svg>
);
