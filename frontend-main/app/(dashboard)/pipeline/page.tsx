'use client';

import React from 'react';
import { Download, Clock, Zap, CheckCircle2, Building, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export default function DisbursalPipeline() {
  return (
    <div className="min-h-full w-full bg-[#f6f9f8] p-10 relative overflow-hidden">
       <div className="max-w-5xl mx-auto z-10 relative">
          
          <div className="flex justify-between items-end mb-8">
             <div>
                <span className="bg-[#EDE9FE] text-[#6C4CF1] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">Disbursal Pipeline</span>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">The Cashflow Journey</h1>
                <p className="text-gray-500 text-md max-w-xl leading-relaxed">
                  Tracing your Semester 2 Tuition from approval to enrollment. Real-time visualization of fund movement across institutional nodes.
                </p>
             </div>
             
             <div className="text-right">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Amount</div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-[#6C4CF1]">₹12,450.00</div>
                  <button className="bg-white border border-gray-200 text-[#6C4CF1] p-3 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                    <Download size={20} />
                  </button>
                </div>
             </div>
          </div>

          {/* Pipeline Visualization Area */}
          <div className="bg-[#EAF4E6] rounded-3xl p-12 mb-8 relative border border-[#d5ead0] h-64 flex items-center shadow-inner overflow-hidden">
             
             {/* Decorative Background Lines */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6C4CF1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             <div className="w-full relative flex items-center justify-between z-10 px-8">
                {/* Connecting Line Base */}
                <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-white -translate-y-1/2 z-0 shadow-sm rounded-full"></div>
                {/* Active Progress Line */}
                <div className="absolute top-1/2 left-10 w-[60%] h-1 bg-[#6C4CF1] -translate-y-1/2 z-0 rounded-full shadow-[0_0_10px_rgba(108,76,241,0.5)]"></div>

                {/* Node 1 */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-md mb-4 border-2 border-[#6C4CF1]">
                      <Building size={20} className="text-[#6C4CF1]" />
                   </div>
                   <div className="bg-white/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-700 shadow-sm">Lending Vault</div>
                   <div className="text-[10px] text-gray-500 mt-1 font-semibold">Approved & Verified</div>
                </div>

                {/* Node 2 */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-md mb-4 border-2 border-[#6C4CF1]">
                      <FileText size={20} className="text-[#6C4CF1]" />
                   </div>
                   <div className="bg-white/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-700 shadow-sm">Clearing House</div>
                   <div className="text-[10px] text-gray-500 mt-1 font-semibold">ACH Processing</div>
                </div>

                {/* Node 3 (Active) */}
                <div className="relative z-10 flex flex-col items-center transform scale-110">
                   {/* Glowing background */}
                   <div className="absolute w-20 h-20 bg-white/40 rounded-full blur-md flex items-center justify-center -z-10 animate-pulse"></div>
                   
                   <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-xl mb-4 border-4 border-[#6C4CF1] relative overflow-hidden">
                      <Zap size={24} className="text-[#6C4CF1] z-10" />
                      <div className="absolute inset-0 bg-[#EDE9FE] translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                   </div>
                   <div className="bg-[#6C4CF1] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">IN TRANSIT</div>
                   <div className="text-xs text-[#6C4CF1] mt-2 font-bold flex items-center gap-1">Moving Funds <span className="flex gap-1 animate-pulse"><span className="w-1 h-1 bg-current rounded-full"></span><span className="w-1 h-1 bg-current rounded-full"></span><span className="w-1 h-1 bg-current rounded-full"></span></span></div>
                </div>

                {/* Node 4 */}
                <div className="relative z-10 flex flex-col items-center opacity-60">
                   <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-sm mb-4 border-2 border-transparent">
                      <GraduationCapIcon />
                   </div>
                   <div className="bg-white/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-500 shadow-sm">University Portal</div>
                   <div className="text-[10px] text-gray-400 mt-1 font-semibold">Awaiting Settlement</div>
                </div>

             </div>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-12 gap-6">
             
             {/* Latest Event Card */}
             <div className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                   <div className="flex items-center gap-2 text-[#6C4CF1] bg-[#EDE9FE] w-fit px-3 py-1 rounded-full text-xs font-bold mb-4">
                      <Clock size={14} /> Latest Event
                   </div>
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">TODAY, 09:42 AM</div>
                   <h3 className="text-gray-900 font-bold text-lg leading-tight">Handshake protocol accepted by University of Excellence.</h3>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 w-fit px-3 py-1.5 rounded-full uppercase tracking-wider">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   SYSTEM STATUS: PIPELINE OPTIMIZED & SECURE
                </div>
             </div>

             {/* ETA Card */}
             <div className="col-span-12 md:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                   <div className="flex items-center gap-2 text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full text-xs font-bold mb-4">
                      <Clock size={14} /> ETA Completion
                   </div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl font-bold text-gray-900">14</span>
                     <span className="text-gray-500 font-medium">hours remaining</span>
                   </div>
                </div>
                
                <div className="mt-8">
                   <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[60%] h-full bg-[#6C4CF1] rounded-full"></div>
                   </div>
                </div>
             </div>

             {/* Metrics Card */}
             <div className="col-span-12 md:col-span-4 bg-[#EAF4E6] rounded-3xl p-6 shadow-sm border border-[#d5ead0]">
                <h3 className="font-bold text-gray-900 mb-4">Pipeline Metrics</h3>
                
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-sm border-b border-[#d5ead0]/50 pb-2">
                      <span className="text-gray-600 font-medium">Protocol</span>
                      <span className="text-gray-900 font-bold">ISO-20022 Digital</span>
                   </div>
                   <div className="flex justify-between items-center text-sm border-b border-[#d5ead0]/50 pb-2">
                      <span className="text-gray-600 font-medium">Gas Fees</span>
                      <span className="text-[#6C4CF1] font-bold bg-[#EDE9FE] px-2 py-0.5 rounded">₹0.00 <span className="font-medium text-xs">(Subsidized)</span></span>
                   </div>
                   <div className="flex justify-between items-center text-sm border-b border-[#d5ead0]/50 pb-2">
                      <span className="text-gray-600 font-medium">Encrypted Key</span>
                      <span className="text-gray-900 font-mono text-xs bg-white px-2 py-1 rounded border border-gray-200">LX-882...A49</span>
                   </div>
                </div>
                
                <button className="w-full text-center text-sm font-bold text-gray-600 mt-6 hover:text-gray-900 flex items-center justify-center gap-1 transition-colors">
                   View Full Log <ArrowRight size={14} />
                </button>
             </div>

          </div>
       </div>
    </div>
  );
}

// Simple icon for the portal since GraduationCap from lucide a bit thin sometimes
function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <path d="M21.42 10.922a2 2 0 0 1-.01 2.833l-7.1 7.1a2 2 0 0 1-2.82 0l-7.1-7.1a2 2 0 0 1 .01-2.833L12 2l7.42 8.922z"/>
      <path d="M12 22v-9"/>
      <path d="M15 22v-4"/>
      <path d="M9 22v-4"/>
    </svg>
  );
}
