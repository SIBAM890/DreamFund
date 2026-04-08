import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ScholarshipFinder from '@/components/ScholarshipFinder';

export default function Home() {
  return (
    <main className="bg-[#EAF4E6] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsRow />
      <HowItWorks />
      <Features />
      <ScholarshipFinder />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-[#1F2937] rounded-3xl p-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-3">
            Your Education Won't Wait
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Join 1.2 lakh students funded through DreamFund. Apply in 5 minutes. Approval in 24 hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/eligibility">
              <button className="bg-white text-[#6C4CF1] font-semibold px-8 py-3 rounded-full text-sm hover:scale-105 transition-transform">
                Apply for Loan →
              </button>
            </Link>
            <Link href="/scholarship-hub">
              <button className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full text-sm hover:border-white/70 transition-colors">
                Find Scholarships
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
