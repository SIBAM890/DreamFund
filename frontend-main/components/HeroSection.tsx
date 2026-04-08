'use client';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' as const },
});

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
      {/* Badge */}
      <motion.div {...fadeUp(0)}
        className="inline-flex items-center gap-2 bg-[#EDE9FE] text-[#5B3FD1]
                   text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#DDD6FE]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6C4CF1] animate-pulse" />
        AI-Powered Education Finance
      </motion.div>

      {/* Headline */}
      <motion.h1 {...fadeUp(0.1)}
        className="font-heading text-5xl md:text-6xl font-extrabold leading-tight mb-5">
        Fund Your Future with{' '}
        <span className="bg-gradient-to-r from-[#6C4CF1] via-[#A78BFA] to-[#6C4CF1]
                         bg-[length:200%] animate-shimmer bg-clip-text text-transparent">
          Smart AI
        </span>
      </motion.h1>

      <motion.p {...fadeUp(0.2)}
        className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
        Instant loan disbursals, agentic scholarship approvals, and personalized AI guidance
        — all in one student-first platform.
      </motion.p>

      {/* Buttons */}
      <motion.div {...fadeUp(0.3)} className="flex gap-3 justify-center flex-wrap mb-4">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="bg-[#6C4CF1] hover:bg-[#5B3FD1] text-white px-7 py-3
                     rounded-full text-sm font-semibold transition-colors shadow-lg shadow-[#6C4CF1]/25">
          Start Application →
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="bg-white border-2 border-[#6C4CF1] text-[#6C4CF1] px-7 py-3
                     rounded-full text-sm font-semibold hover:bg-[#F5F3FF] transition-colors">
          Explore Scholarships
        </motion.button>
      </motion.div>

      {/* 3D floating scene */}
      <HeroScene />
    </section>
  );
}
