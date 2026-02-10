"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Apple, Monitor, User } from "lucide-react"; // Note: Lucide doesn't have a Windows/Linux icon by default usually, reusing generically or assuming basic icons.
// To make it better, I will use SVGs for logos if possible or Lucide approximations.

// Custom SVGs for platforms to look better
const WindowsIcon = () => (
    <svg viewBox="0 0 88 88" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.402l35.687-4.86.009 34.004-35.694.215V12.402zm35.679 33.32l-.004 34.822-35.673-4.896V45.73l35.677-.008zM40.386 5.86L87.974 0v41.527l-47.588.243V5.86zm47.584 39.9l-.01 42.22-47.59-6.53V45.75l47.6.01z" /></svg>
);

const AppleIcon = () => (
    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-54.5-127.1-54.5-127.1zM221.9 58.8c18.9-24.8 30.8-56.6 30.8-89.2 2.7-.5 24 14.4 32.4 21 23.5 24.5 21.7 65.8 21.7 65.8-22.6 1.9-51.9-26.2-71.3-40.4-12.7-18.2-22.3-43.9-13.6-43.9z" /></svg>
)

const LinuxIcon = () => (
    <svg viewBox="0 0 448 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M220.6 65.3c13.9 15.6 28.6 12 45.4-8.8C258.9 45.1 278 32 297 32c52.6 57.1 82.2 143.1 76.8 234.3-.6 10.3-6.7 19.3-16.1 23.5-29.2 13-39.6 12.5-56.1 12.3-15.6-.2-29.3 6.9-38.3 19.8-12.7 18.2-14.5 9.1 7.6 29.9 23.9 22.4 47.7 44.8 73.1 67 15.1 13.2 21.9 33.1 17.4 52.4-5.2 22.6-13.7 44.3-25.1 64.6-26.1 46.1-84.3 75.4-137.9 69.3-51.4-5.8-99.4-44.6-120.3-95.2-9-21.7-14.7-44.3-16.8-67.6-1.5-16.1 5.4-31.9 17.8-42 63.6-51.8 111.4-89.9 123.5-100.9 9.8-8.8 12.1-23.7 5.1-34.9-10.3-16.7-5.3-28.9-18.3-41-11.5-10.7-27.1-15.4-41.9-12.8-25.3 4.5-47.5 4.5-58.4 6-25.8 3.5-49.2-12.1-55.8-37C20 220 18.7 155.8 69.1 94.7c26-31.5 65.5-48.4 105.7-45.7 17.6 1.2 33 5.4 45.8 16.3z" /></svg>
)


export function DownloadPlatforms() {
    const platforms = [
        {
            name: "Mac",
            icon: AppleIcon,
            description: "macOS 10.14 or later",
            buttons: [
                { label: "Download Mac (Apple Silicon)", sub: "M1, M2, M3" },
                { label: "Download Mac (Intel)", sub: "" },
            ]
        },
        {
            name: "Windows",
            icon: WindowsIcon,
            description: "Windows 10 or later",
            buttons: [
                { label: "Download Windows", sub: "64-bit" },
                { label: "Download Windows", sub: "32-bit" },
            ]
        },
        {
            name: "Linux",
            icon: LinuxIcon,
            description: "Debian, Ubuntu, Fedora",
            buttons: [
                { label: "Download Linux", sub: ".AppImage" },
                { label: "Download Linux", sub: ".deb" },
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 text-[#292D34]">Desktop</h2>
                    <p className="text-gray-500">Native performance for your heavy lifting.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-800">
                                <platform.icon />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-[#292D34]">{platform.name}</h3>
                            <p className="text-sm text-gray-500 mb-8">{platform.description}</p>

                            <div className="space-y-3 w-full">
                                {platform.buttons.map((btn, idx) => (
                                    <Button key={idx} variant="outline" className="w-full justify-between h-auto py-3 text-left group hover:border-[#7b68ee] hover:bg-purple-50 hover:text-[#7b68ee]">
                                        <span className="font-semibold">{btn.label}</span>
                                        {btn.sub && <span className="text-xs text-gray-400 font-normal ml-2 group-hover:text-purple-400">{btn.sub}</span>}
                                    </Button>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
