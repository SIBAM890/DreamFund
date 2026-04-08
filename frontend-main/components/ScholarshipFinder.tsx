'use client';
import { motion } from 'framer-motion';

const scholarships = [
  { emoji: '🏆', name: 'AICTE National Merit', amount: '₹1,20,000', deadline: 'Jul 15', match: 98, featured: true },
  { emoji: '🔬', name: 'STEM Women Award',     amount: '₹80,000',   deadline: 'Jul 30', match: 91, featured: false },
  { emoji: '🌱', name: 'Rural Excellence Fund', amount: '₹60,000',  deadline: 'Aug 10', match: 85, featured: false },
  { emoji: '💡', name: 'Innovation Leaders',    amount: '₹50,000',  deadline: 'Aug 20', match: 79, featured: false },
];

export default function ScholarshipFinder() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-16">
      <p className="text-xs font-semibold text-[#6C4CF1] uppercase tracking-widest mb-2">AI Scholarship Finder</p>
      <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">Matched for You</h2>
      <p className="text-sm text-gray-500 mb-8">Based on your profile — high-probability picks only.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {scholarships.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} whileHover={{ y: -3 }}
            className={`relative bg-white rounded-2xl p-4 border cursor-pointer transition-all
                        ${s.featured ? 'border-[#6C4CF1] bg-[#FAFAFE]' : 'border-gray-100 hover:border-[#6C4CF1]'}`}>
            {/* Match badge */}
            <span className="absolute top-2.5 right-2.5 bg-[#EDE9FE] text-[#6C4CF1]
                             text-[10px] font-bold px-2 py-0.5 rounded-lg">
              {s.match}% match
            </span>
            <div className="text-2xl mb-2">{s.emoji}</div>
            <p className="text-xs font-semibold text-gray-800 mb-1">{s.name}</p>
            <p className="font-heading text-lg font-bold text-[#6C4CF1] mb-1">{s.amount}</p>
            <p className="text-xs text-gray-400">Deadline: {s.deadline}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
