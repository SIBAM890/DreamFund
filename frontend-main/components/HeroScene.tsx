'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroScene() {
  return (
    <div className="relative w-full max-w-2xl mx-auto my-10 h-[340px] overflow-hidden rounded-3xl select-none">

      {/* ── Layer 1: Background (pastel geometry) ── */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.04, 1], x: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' as const }}
      >
        <Image
          src="/hero/bg-geometry.png"
          alt="Pastel geometry background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* ── Layer 2: Radial glow / light gradient ── */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 0.7, 0.45, 0.7], scale: [0.6, 1.1, 1.0, 1.1] }}
        transition={{
          delay: 1,
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[320px] h-[320px] rounded-full
                        bg-gradient-radial from-[#F5E6C8]/70 via-[#EDE9FE]/30 to-transparent
                        blur-2xl" />
      </motion.div>

      {/* ── Layer 3: Graduation cap (float in + perpetual float) ── */}
      <motion.div
        className="absolute z-20 left-1/2 top-1/2"
        initial={{ opacity: 0, y: 60, x: '-50%', translateY: '-50%' }}
        animate={{
          opacity: 1,
          y: [0, -14, 0],
          x: '-50%',
          translateY: '-50%',
        }}
        transition={{
          opacity: { delay: 0.5, duration: 0.8 },
          y: { delay: 1.3, duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
        }}
      >
        <Image
          src="/hero/grad-cap.png"
          alt="3D Graduation Cap"
          width={280}
          height={280}
          className="drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* ── Layer 4: Loan card (slide in from right + hover tilt) ── */}
      <motion.div
        className="absolute z-30 right-4 bottom-6"
        initial={{ opacity: 0, x: 120, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          ease: 'easeOut' as const,
        }}
        whileHover={{ y: -8, rotate: -2, scale: 1.03 }}
      >
        <div className="relative">
          <Image
            src="/hero/loan-card.png"
            alt="Student Loan Approved Card"
            width={220}
            height={160}
            className="drop-shadow-xl rounded-xl"
            style={{ width: 'auto', height: 'auto' }}
          />
          {/* Pulse dot on card */}
          <motion.div
            className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-green-400 border-2 border-white"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* ── Floating info cards (kept from original) ── */}
      {/* Approval card — left */}
      <motion.div
        className="absolute z-30 left-4 top-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg
                   border border-gray-100 flex items-center gap-3"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          x: { delay: 1.4, duration: 0.6 },
          y: { delay: 2, duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const },
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm">✓</div>
        <div>
          <p className="text-[10px] font-bold text-green-600">APPROVED</p>
          <p className="text-xs font-medium text-gray-700">Loan ₹2.5L disbursed</p>
        </div>
      </motion.div>

      {/* AI match card — top right */}
      <motion.div
        className="absolute z-30 right-4 top-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg
                   border border-gray-100 flex items-center gap-3"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          x: { delay: 1.6, duration: 0.6 },
          y: { delay: 2.2, duration: 5, repeat: Infinity, ease: 'easeInOut' as const },
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] flex items-center justify-center text-sm">🤖</div>
        <div>
          <p className="text-[10px] font-bold text-[#6C4CF1]">AI MATCH</p>
          <p className="text-xs font-medium text-gray-700">3 scholarships found</p>
        </div>
      </motion.div>
    </div>
  );
}
