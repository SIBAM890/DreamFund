'use client';
import { motion } from 'framer-motion';

const steps = [
  { n: 1, title: 'Create Profile',  desc: 'Upload docs, academic & income details' },
  { n: 2, title: 'AI Evaluation',   desc: 'Agent scores eligibility in 60 seconds' },
  { n: 3, title: 'Match & Approve', desc: 'Best loan or scholarship matched instantly' },
  { n: 4, title: 'Funds Released',  desc: 'Direct to institution within 24 hours' },
];

export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-16">
      <p className="text-xs font-semibold text-[#6C4CF1] uppercase tracking-widest mb-2">How it works</p>
      <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">4 steps to funding</h2>
      <p className="text-sm text-gray-500 mb-10">Our agentic AI handles everything automatically.</p>

      <div className="relative grid grid-cols-4 gap-4">
        {/* Connector line */}
        <div className="absolute top-5 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#6C4CF1] to-[#A78BFA]" />

        {steps.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.12 }} className="text-center relative z-10">
            <div className="w-11 h-11 rounded-full bg-[#6C4CF1] text-white font-heading font-bold
                            text-sm flex items-center justify-center mx-auto mb-3 border-4 border-[#EAF4E6]">
              {s.n}
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-1">{s.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
