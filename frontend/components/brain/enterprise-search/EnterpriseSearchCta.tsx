"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export const EnterpriseSearchCta = () => {
    return (
        <section className="bg-black pt-20 pb-10 relative overflow-hidden">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 
                 {/* CTA Card */}
                 <div className="bg-gradient-to-r from-[#110518] to-black border border-white/10 rounded-3xl overflow-hidden relative max-w-6xl mx-auto mb-20 bg-[url('/noise.png')]">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-20">
                         <div className="relative z-10">
                              <div className="text-fuchsia-400 font-bold mb-4 text-sm uppercase tracking-wider">Your AI-Powered Workspace</div>
                              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                                  Dominate the AI era <br />
                                  with the everything <br />
                                  app, for work
                              </h2>
                              <button className="px-8 py-4 rounded-xl bg-fuchsia-600 text-white font-bold flex items-center gap-2 hover:bg-fuchsia-500 transition-colors shadow-lg shadow-fuchsia-900/40 text-lg">
                                  Get started with Brain <ArrowRight size={20} />
                              </button>
                         </div>
                         
                         <div className="relative h-[300px] md:h-[400px] w-full mt-8 md:mt-0 flex items-center justify-center">
                              {/* Mockup */}
                              <div className="w-full max-w-sm bg-[#0E0E12] border border-white/10 rounded-xl p-4 shadow-2xl skew-y-[-2deg] rotate-[-2deg] transform hover:rotate-0 transition-transform duration-500">
                                   <div className="flex items-center gap-2 mb-4">
                                       <div className="w-3 h-3 rounded-full bg-red-500"/>
                                       <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                                       <div className="w-3 h-3 rounded-full bg-green-500"/>
                                   </div>
                                   <div className="space-y-3">
                                       <div className="h-2 w-3/4 bg-white/10 rounded" />
                                       <div className="h-2 w-1/2 bg-white/10 rounded" />
                                       <div className="p-3 bg-fuchsia-900/10 border border-fuchsia-500/20 rounded-lg mt-4">
                                            <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-bold mb-2">
                                                <div className="w-2 h-2 bg-fuchsia-500 rounded-full" /> ClickUp Brain
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded mb-1" />
                                            <div className="h-2 w-5/6 bg-white/5 rounded" />
                                       </div>
                                   </div>
                              </div>
                              
                              {/* Background Glow */}
                              <div className="absolute inset-0 bg-fuchsia-600/10 blur-[90px] -z-10 rounded-full" />
                         </div>
                     </div>
                 </div>

                 {/* Footer Section */}
                 <div className="border-t border-white/10 pt-12 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl text-white">ClickUp</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Twitter} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium text-gray-500">
                        <div>
                            &copy; 2025 ClickUp • <Link href="#" className="hover:text-white transition-colors">Security</Link> • <Link href="#" className="hover:text-white transition-colors">Your Privacy</Link> • <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>

             </div>
        </section>
    );
};

function SocialIcon({ icon: Icon }: any) {
    return (
        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Icon size={16} />
        </a>
    );
}
