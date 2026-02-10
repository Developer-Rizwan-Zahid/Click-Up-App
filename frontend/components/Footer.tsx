import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, Youtube, ShieldCheck, Lock, Globe } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white py-16 border-t border-gray-100 text-[#292D34]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Logo Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2">
                        {/* ClickUp Logo SVG */}
                       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 10C4 10 4 17 12 17C20 17 20 10 20 10" stroke="#7B68EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8L12 3L17 8" stroke="#E348B4" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                 <span className="font-walsheim font-black text-2xl tracking-tight text-[#292D34]">ClickUp</span>
                    </div>
                </div>

                {/* Links Grid - 5 Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 mb-20 text-sm">

                    {/* Column 1: AI & Download */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="font-bold text-[#292D34] mb-4">AI</h4>
                            <ul className="space-y-3 text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-blue-500">Brain</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Super Agents</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Ambient Agents</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Notetaker</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Enterprise Search</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Talk to Text</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-[#292D34] mb-4">Download</h4>
                            <ul className="space-y-3 text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-blue-500">iOS & Android</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">Mac & Windows</Link></li>
                                <li><Link href="#" className="hover:text-blue-500">BrainGPT</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="font-bold text-[#292D34] mb-4">Product</h4>
                        <ul className="space-y-3 text-gray-500 font-medium">
                            <li><Link href="#" className="hover:text-blue-500">Chat</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Projects</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Docs & Wikis</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Calendar</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Dashboards</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Time Tracking</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Gantt Charts</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Automations</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Whiteboards</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">API</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Compare */}
                    <div>
                        <h4 className="font-bold text-[#292D34] mb-4">Compare</h4>
                        <ul className="space-y-3 text-gray-500 font-medium">
                            <li><Link href="#" className="hover:text-blue-500">vs Monday</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Notion</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Asana</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Jira</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Trello</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Slack</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs MS Project</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Smartsheet</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Airtable</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Basecamp</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">vs Todoist</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="font-bold text-[#292D34] mb-4">Company</h4>
                        <ul className="space-y-3 text-gray-500 font-medium">
                            <li><Link href="#" className="hover:text-blue-500">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Customers</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Affiliates</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Events</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Partners</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Consultants</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Reviews</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Press</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Brand</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Roadmap</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Help */}
                    <div>
                        <h4 className="font-bold text-[#292D34] mb-4">Help</h4>
                        <ul className="space-y-3 text-gray-500 font-medium">
                            <li><Link href="#" className="hover:text-blue-500">24/7 Support</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Get a Demo</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Import</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Templates</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Community</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">ClickUp University</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Webinars</Link></li>
                            <li><Link href="#" className="hover:text-blue-500">Blog</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section: Social & Badges */}
                <div className="border-t border-gray-100 pt-12 pb-8 flex flex-col lg:flex-row justify-between items-center gap-8">

                    {/* Left: Social Icons */}
                    <div className="flex items-center gap-6">
                        <SocialIcon icon={Linkedin} />
                        <SocialIcon icon={Facebook} />
                        <SocialIcon icon={Instagram} />
                        <SocialIcon icon={Twitter} />
                    </div>

                    {/* Right: Security Badges */}
                    <div className="flex flex-wrap justify-center gap-8 items-center bg-gray-50/50 px-6 py-3 rounded-full border border-gray-100/50">
                        <FooterBadge label="SOC 2" sub="CERTIFIED" icon={ShieldCheck} />
                        <FooterBadge label="ISO 27001" sub="CERTIFIED" icon={Lock} />
                        <FooterBadge label="GDPR" sub="COMPLIANT" icon={Globe} />
                        <FooterBadge label="HIPAA" sub="COMPLIANT" icon={ShieldCheck} />
                    </div>
                </div>

                {/* Copyright & Legal */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
                    <div>
                        © 2025 ClickUp
                    </div>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-blue-500 transition-colors">99.9% Uptime</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Security</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

function SocialIcon({ icon: Icon }: any) {
    return (
        <a href="#" className="text-gray-400 hover:text-[#7B68EE] transition-colors p-2 hover:bg-gray-50 rounded-full">
            <Icon size={20} />
        </a>
    )
}

function FooterBadge({ label, sub, icon: Icon }: any) {
    return (
        <div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                <Icon size={14} className="text-gray-600" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-400">{label}</span>
                <span className="text-[8px] font-bold text-gray-300">{sub}</span>
            </div>
        </div>
    )
}
