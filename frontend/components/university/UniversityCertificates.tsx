import Link from 'next/link';
import { Award, CheckCircle2 } from 'lucide-react';

export default function UniversityCertificates() {
    return (
        <section id="certifications" className="py-24 bg-[#0A0B14] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B68EE]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="rounded-3xl bg-gradient-to-r from-[#1A1C29] to-[#0F111A] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 text-[#7B68EE] font-medium tracking-wide text-sm uppercase">
                            <Award className="w-4 h-4" />
                            Official Certification
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Prove your expertise with
                            <span className="text-[#7B68EE]"> ClickUp Certification</span>
                        </h2>

                        <p className="text-lg text-gray-400">
                            Earn an official badge to showcase your skills on LinkedIn and your resume. Stand out as a verified ClickUp expert.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Validate your ClickUp knowledge',
                                'Stand out in the job market',
                                'Join an exclusive community of experts',
                                'Get early access to new features'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Link href="#" className="inline-block px-8 py-4 rounded-xl bg-[#7B68EE] hover:bg-[#6851FF] text-white font-bold transition-all shadow-lg hover:shadow-[#7B68EE]/25">
                                Get Certified Now
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            {/* Decorative Circles */}
                            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

                            {/* Badge Placeholder */}
                            <div className="relative z-10 w-64 h-64 bg-gradient-to-br from-[#7B68EE] to-[#E01E5A] rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(123,104,238,0.3)]">
                                <div className="w-60 h-60 bg-[#0A0B14] rounded-2xl flex items-center justify-center border border-white/20">
                                    <div className="text-center -rotate-45">
                                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7B68EE] to-[#E01E5A] mb-2">
                                            EXPERT
                                        </div>
                                        <div className="text-white/60 font-medium tracking-widest text-sm">LEVEL 1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
