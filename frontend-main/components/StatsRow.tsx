'use client';
import { motion } from 'framer-motion';

const stats = [
  { num: '₹840Cr+', label: 'Loans Disbursed' },
  { num: '1.2L+',   label: 'Students Funded' },
  { num: '96%',     label: 'Approval Rate' },
  { num: '24hr',    label: 'Avg Disbursal' },
];

export default function StatsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-6 mb-16">
      {stats.map((s, i) => (
        <motion.div key={s.label}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="bg-white border border-gray-100 rounded-xl px-6 py-4 text-center shadow-sm">
          <p className="font-heading text-2xl font-bold text-[#6C4CF1]">{s.num}</p>
          <p className="text-xs text-gray-500 mt-1">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
