import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const ChatFooter = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left Side: Logo */}
                    <div className="flex items-center">
                        <div className="w-24">
                            <svg viewBox="0 0 88 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M12.2 0C11.5 0 10.9 0.2 10.4 0.7L1.8 8.4C0.7 9.4 0.7 11.2 1.8 12.2L10.4 19.9C10.9 20.4 11.5 20.6 12.2 20.6C13.6 20.6 14.7 19.5 14.7 18.1V15.5H16.2C22 15.5 26.7 10.8 26.7 5H14.7V2.5C14.7 1.1 13.6 0 12.2 0Z" fill="url(#paint0_linear)" />
                                <path d="M10.4 11.8L1.8 4.1C1.3 3.6 0.9 3.1 0.6 2.5C0.2 3.1 0 3.8 0 4.5C0 5.6 0.4 6.6 1.1 7.3L9.7 15C10.2 15.5 10.8 15.7 11.5 15.7C12.9 15.7 14 14.6 14 13.2V11.8H10.4Z" fill="#7B68EE" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="1.7887" y1="2.46914" x2="21.0563" y2="18.9198" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF4081" />
                                        <stop offset="1" stopColor="#36C5F0" />
                                    </linearGradient>
                                </defs>
                                <path d="M50.4 17.5C48.6 17.5 47.1 16.1 47.1 14.2V9.6C47.1 7.7 48.6 6.3 50.4 6.3C52.2 6.3 53.7 7.7 53.7 9.6V14.2C53.7 16 52.2 17.5 50.4 17.5ZM53.7 0.8V3.8H50.4C47.2 3.8 44.6 6.4 44.6 9.6V14.2C44.6 17.4 47.2 20 50.4 20C52.2 20 53.7 19.2 54.8 17.9L55.2 19.6H58V0.8H53.7Z" fill="white" />
                                <path d="M38.8 19.6H41.6V0.8H37.3V19.6H38.8Z" fill="white" />
                                <path d="M32.8 5.7C34.3 5.7 35.6 7 35.6 8.5C35.6 10 34.3 11.3 32.8 11.3C31.3 11.3 30 10 30 8.5C30 7 31.3 5.7 32.8 5.7ZM32.8 17.5C31 17.5 29.5 16.1 29.5 14.2C29.5 12.3 31 10.9 32.8 10.9C34.6 10.9 36.1 12.3 36.1 14.2C36.1 16 34.6 17.5 32.8 17.5ZM39.6 20C38.6 21.6 36.8 22.6 34.8 22.6C30.9 22.6 27.7 19.4 27.7 15.5C27.7 11.6 30.9 8.4 34.8 8.4C36.6 8.4 38.3 9.2 39.4 10.5L37.9 12.8C37.3 12 36.4 11.6 35.5 11.6C33.7 11.6 32.2 13.1 32.2 14.9C32.2 16.7 33.7 18.2 35.5 18.2C36.6 18.2 37.5 17.7 38.1 16.8L39.6 20Z" fill="white" />
                                <path d="M64.4 9.1L68.8 13.9L64.4 19.6H69.9L72.2 16.5L74.8 19.6H79.7L74 13.5L78.6 8.6H73.3L70.8 11.4L68.5 8.6H64.4V9.1ZM60.2 19.6H64.2V0.8H60.2V19.6Z" fill="white" />
                                <path d="M84.4 14.2V3.8H80.1V14.2C80.1 16 81.6 17.5 83.4 17.5C85.2 17.5 86.7 16 86.7 14.2V3.8H91V14.2C91 17.4 88.4 20 85.2 20C82 20 79.4 17.4 79.4 14.2H84.4Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                    {/* Right Side: Socials & Links */}
                    <div className="flex flex-col items-end gap-6 text-white">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="hover:text-gray-300 transition-colors">
                                <XIcon className="text-white" />
                            </Link>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 text-xs text-white/70 font-medium">
                            <span>© 2025 ClickUp</span>
                            <Link href="#" className="hover:text-white transition-colors">Security</Link>
                            <Link href="#" className="hover:text-white transition-colors">Your Privacy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ChatFooter;
