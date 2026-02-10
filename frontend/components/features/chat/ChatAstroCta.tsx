"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChatAstroCta() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-black relative overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="py-24 flex justify-center">
        <div className="max-w-[1200px] w-full px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[2/1] md:aspect-[2.4/1]
            rounded-[36px] overflow-hidden border border-white/10 bg-black
            shadow-[0_0_80px_rgba(139,49,255,0.15)]"
          >
            {mounted && <BackgroundStars />}

            {/* LEFT CONTENT */}
            <div className="absolute inset-0 flex items-center px-8 md:px-16 z-40">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl relative"
              >
                <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]
                font-extrabold leading-tight mb-8 tracking-tight text-white">
                  The most powerful
                  <br />
                  <span className="block text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-400 to-pink-500">
                    productivity platform
                  </span>
                  <span className="block mt-2 text-slate-300">
                    in the universe.
                  </span>
                </h1>

                <button
                  className="relative z-50 inline-flex items-center gap-2
                  px-8 py-4 rounded-xl text-base font-semibold text-white
                  bg-gradient-to-r from-purple-500 to-pink-500
                  shadow-[0_10px_40px_rgba(168,85,247,0.45)]
                  hover:brightness-110
                  hover:shadow-[0_12px_50px_rgba(236,72,153,0.55)]
                  active:scale-95 transition-all duration-200"
                >
                  Try ClickUp Chat
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>

            {/* RIGHT ASTRONAUT */}
            <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none z-0">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                animate={{ y: [-10, 10, -10] }}
                className="absolute inset-0 flex items-center justify-center translate-x-[8%]"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-[115%]"
                >
                  <Image
                    src="/images/astronaut_cta.png"
                    alt="Astronaut"
                    fill
                    priority
                    quality={100}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="pb-28 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              quote="Times have changed. The way we work hasn't – and it's about time it did."
              author="Zeb Evans, CEO"
            />

            <Testimonial
              quote="ClickUp takes on Slack and Teams with its AI-powered everything app."
              author="VentureBeat"
            />
          </div>
              <p className="text-center text-sm text-slate-500 mt-10">
            *ClickUp Chat is free for now. Certain restrictions may apply later.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Testimonial({ quote, author }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[28px] border border-white/10
      bg-[#0b0b10] p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br
        from-[#1a1a24] to-[#0b0b10]" />

      <div className="relative z-10">
        <p className="text-xl text-white leading-relaxed mb-6">
          “{quote}”
        </p>
        <div className="text-slate-300 font-semibold">
          {author}
        </div>
      </div>
    </motion.div>
  );
}

function BackgroundStars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 2 + 1;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
