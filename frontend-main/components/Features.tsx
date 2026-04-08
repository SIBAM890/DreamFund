'use client';
import { motion } from 'framer-motion';

const features = [
  { icon: '🎓', bg: 'bg-[#EDE9FE]', title: 'Smart Loan Matching',  desc: 'Finds best rates from 20+ lenders for your profile.' },
  { icon: '📋', bg: 'bg-red-100',   title: 'Zero Paperwork',       desc: 'OCR-powered docs. Upload once, reuse everywhere.' },
  { icon: '✅', bg: 'bg-green-100', title: 'Instant Approval',     desc: 'Decision in 60s. Disbursal within 24 hours.' },
  { icon: '🔍', bg: 'bg-amber-100', title: 'Scholarship Scout',    desc: 'Agentic search across 500+ scholarships.' },
];

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-16">
      {/* AI banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#8B6CF5]
                   p-7 text-white mb-6 relative overflow-hidden">
        <span className="absolute right-6 top-5 text-5xl opacity-10">✦</span>
        <h3 className="font-heading text-xl font-bold mb-2">🤖 Agentic AI Engine</h3>
        <p className="text-sm opacity-85 mb-5 leading-relaxed max-w-lg">
          Autonomously processes applications, verifies documents, matches scholarships,
          and triggers disbursals — no human bottleneck.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Auto Doc Verification', 'Eligibility Scoring', 'Scholarship Matching',
            'Fraud Detection', 'Instant Disbursal'].map(t => (
            <span key={t} className="text-xs font-medium bg-white/15 border border-white/25
                                     px-3 py-1.5 rounded-full">{t}</span>
          ))}
        </div>
      </motion.div>

      {/* Feature grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-5 border border-gray-100
                       hover:border-[#C4B5FD] transition-all cursor-default shadow-sm">
            <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center text-lg mb-3`}>
              {f.icon}
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-1">{f.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
