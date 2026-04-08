'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Briefcase, GraduationCap } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div className="min-h-full w-full bg-[#f6f9f8] p-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
         <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Welcome back, Student</h1>
            <p className="text-gray-500 mt-2">Here is a snapshot of your education finance ecosystem.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Metric 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-[#6C4CF1]">
                  <Sparkles size={24} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">CredPath Score</div>
                  <div className="text-2xl font-bold text-gray-900">720 <span className="text-xs text-green-500 font-bold ml-2">↑ +45</span></div>
               </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-[#EAF4E6] flex items-center justify-center text-green-600">
                  <Briefcase size={24} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Funds</div>
                  <div className="text-2xl font-bold text-gray-900">₹12,450</div>
               </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <ShieldCheck size={24} />
               </div>
               <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">ScamShield</div>
                  <div className="text-2xl font-bold text-gray-900">Protected</div>
               </div>
            </div>
         </div>

         <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/eligibility" className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-[#6C4CF1] hover:shadow-lg transition-all group cursor-pointer relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#EDE9FE] rounded-full blur-3xl group-hover:bg-[#6C4CF1]/20 transition-colors pointer-events-none"></div>
               <div className="w-12 h-12 rounded-full bg-[#6C4CF1] text-white flex items-center justify-center mb-6 shadow-md">
                 <Zap size={20} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Eligibility</h3>
               <p className="text-gray-500 text-sm mb-6 max-w-sm">Use our AI assessment framework to sync your core data and instantly match with partner lenders.</p>
               <div className="flex items-center text-[#6C4CF1] font-bold text-sm gap-2">
                 Start Assessment <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
               </div>
            </Link>

            <Link href="/scholarship-hub" className="bg-[#111827] rounded-3xl p-8 shadow-md border border-gray-800 hover:border-gray-700 transition-all group cursor-pointer relative overflow-hidden">
               <div className="absolute right-0 top-0 w-64 h-64 bg-[#6C4CF1]/20 rounded-full blur-3xl pointer-events-none"></div>
               <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center mb-6 border border-gray-700">
                 <GraduationCap size={20} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Scholarship Hub</h3>
               <p className="text-gray-400 text-sm mb-6 max-w-sm">Deploy autonomous agents to scan 4,200+ global funding opportunities tailored to your profile.</p>
               <div className="flex items-center text-white font-bold text-sm gap-2">
                 Launch Agent <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
               </div>
            </Link>
         </div>

      </div>
    </div>
  );
}
