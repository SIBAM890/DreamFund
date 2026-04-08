'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6C4CF1] animate-pulse" />
          <span className="font-heading font-bold text-xl text-[#6C4CF1]">DreamFund</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          {[
            { name: 'Dashboard', href: '/dashboard' },
            { name: 'Agentic Scholarship Hub', href: '/scholarship-hub' },
            { name: 'Eligibility', href: '/eligibility' },
            { name: 'Disbursal Pipeline', href: '/pipeline' }
          ].map(l => (
            <Link key={l.name} href={l.href}
              className="hover:text-[#6C4CF1] transition-colors">{l.name}</Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/dashboard">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="bg-[#6C4CF1] text-white px-5 py-2 rounded-full text-sm font-semibold">
            Apply Now →
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}
