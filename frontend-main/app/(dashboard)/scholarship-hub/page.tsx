'use client';

import React, { useEffect, useState } from 'react';
import { Rocket, Terminal, Pause, Play, ChevronRight, Search } from 'lucide-react';

const mockLogs = [
  "Initializing scholarship_agent_v2.0...",
  "[info] Authenticated via Academic Gateway",
  "[search] Querying: 'STEM grants for graduate research 2024'",
  "[match] Found: Global Excellence Merit Scholarship",
  "[action] Scraping eligibility requirements...",
  " - GPA > 3.8: PASSED",
  " - Residency: PASSED",
  " - Major: Mechanical Engineering: PASSED",
  "[info] Generating draft essay based on 'Research Portfolio 2023'..."
];

export default function ScholarshipHub() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < mockLogs.length) {
        setLogs(prev => [...prev, mockLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-full w-full bg-[#EAF4E6] p-10 relative overflow-hidden">
       <div className="max-w-6xl mx-auto z-10 relative">
          
          <div className="flex justify-between items-end mb-10">
             <div>
                <div className="flex items-center gap-3 mb-4">
                   <span className="bg-[#EDE9FE] text-[#6C4CF1] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">AI-Powered Hub</span>
                   <span className="text-gray-500 text-sm font-medium">Last synced: 2 minutes ago</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">Agentic TrustScholar Hub</h1>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Your autonomous education agents are scanning 4,200+ global funding opportunities to match your academic profile.
                </p>
             </div>
             
             <button 
                onClick={() => setIsDeployModalOpen(true)}
                className="bg-[#6C4CF1] text-white hover:bg-[#5B3FD1] transition-all px-6 py-4 rounded-full font-bold shadow-lg shadow-purple-500/30 flex items-center gap-3 transform hover:-translate-y-1">
                <Rocket size={20} />
                Deploy New Agent
             </button>
          </div>

          <div className="grid grid-cols-12 gap-8">
             {/* Left Column: Terminal */}
             <div className="col-span-12 lg:col-span-5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                   <Terminal className="text-[#6C4CF1]" size={20} />
                   <h3 className="font-bold text-gray-900 text-lg">Live Action Feed</h3>
                   <div className="ml-auto flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-green-600 uppercase">Active</span>
                   </div>
                </div>

                <div className="bg-[#0D1117] rounded-3xl p-6 h-[400px] shadow-2xl relative border border-gray-800 overflow-y-auto font-mono text-sm">
                   {/* Terminal Window Header Dots */}
                   <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>

                   <div className="space-y-3 text-gray-300">
                     {logs.map((log, i) => {
                       if (!log) return null;
                       return (
                         <div key={i} className="animate-fade-in text-[13px] leading-relaxed">
                           {log.startsWith('[info]') && <span className="text-blue-400 font-bold mr-2">[info]</span>}
                           {log.startsWith('[search]') && <span className="text-yellow-400 font-bold mr-2">[search]</span>}
                           {log.startsWith('[match]') && <span className="text-green-400 font-bold mr-2">[match]</span>}
                           {log.startsWith('[action]') && <span className="text-purple-400 font-bold mr-2">[action]</span>}
                           {log.replace(/\[.*?\]\s*/, '')}
                         </div>
                       );
                     })}
                     {logs.length < mockLogs.length && !isPaused && (
                         <div className="w-2 h-4 bg-white animate-pulse inline-block mt-2"></div>
                     )}
                   </div>

                   {/* Floating Controls */}
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#6C4CF1] bg-opacity-90 backdrop-blur text-white flex items-center rounded-full p-1 shadow-lg shadow-purple-900/50">
                      <div className="px-4 text-xs font-bold border-r border-white/20">Agent Alpha Running</div>
                      <button 
                        onClick={() => setIsPaused(!isPaused)} 
                        className="px-4 py-2 hover:bg-white/20 rounded-full transition text-xs font-bold flex items-center gap-2 uppercase tracking-wide"
                      >
                         {isPaused ? <Play size={14} className="fill-current" /> : <Pause size={14} className="fill-current" />}
                         {isPaused ? 'Resume' : 'Pause Agent'}
                      </button>
                   </div>
                </div>
             </div>

             {/* Right Column: Cards */}
             <div className="col-span-12 lg:col-span-7">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="font-bold text-gray-900 text-lg">Top Recommendations</h3>
                   <span className="bg-white text-xs font-bold px-3 py-1 rounded-lg text-gray-500 shadow-sm border border-gray-100">Score: High to Low</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   {/* Card 1 */}
                   <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer">
                      <div>
                        <div className="bg-gray-100 h-32 rounded-2xl mb-4 overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&q=80" alt="University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute top-3 right-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">98% MATCH</div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Global Leadership Initiative</h4>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Full tuition coverage for students demonstrating exceptional leadership in technology.</p>
                      </div>
                      <div className="flex items-end justify-between mt-auto">
                         <div className="text-2xl font-bold text-[#6C4CF1]">₹45,000</div>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6C4CF1] group-hover:text-white transition-colors">
                            <ChevronRight size={16} />
                         </div>
                      </div>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer">
                      <div>
                        <div className="bg-gray-100 h-32 rounded-2xl mb-4 overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" alt="Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute top-3 right-3 bg-[#6C4CF1] text-white text-[10px] font-bold px-2 py-1 rounded-full">88% MATCH</div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">FinTech Innovators Grant</h4>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Supporting the next generation of financial technology entrepreneurs.</p>
                      </div>
                      <div className="flex items-end justify-between mt-auto">
                         <div className="text-2xl font-bold text-[#6C4CF1]">₹12,500</div>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6C4CF1] group-hover:text-white transition-colors">
                            <ChevronRight size={16} />
                         </div>
                      </div>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer">
                      <div>
                        <div className="bg-gray-100 h-32 rounded-2xl mb-4 overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80" alt="Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute top-3 right-3 bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">92% MATCH</div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Women in Tech Fellowship</h4>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Exclusive funding for female innovators pursuing computer science and engineering degrees.</p>
                      </div>
                      <div className="flex items-end justify-between mt-auto">
                         <div className="text-2xl font-bold text-[#6C4CF1]">₹25,000</div>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6C4CF1] group-hover:text-white transition-colors">
                            <ChevronRight size={16} />
                         </div>
                      </div>
                   </div>

                   {/* Card 4 */}
                   <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer">
                      <div>
                        <div className="bg-gray-100 h-32 rounded-2xl mb-4 overflow-hidden relative">
                           <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80" alt="Students learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute top-3 right-3 bg-[#6C4CF1] text-white text-[10px] font-bold px-2 py-1 rounded-full">85% MATCH</div>
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">First-Gen Scholars Fund</h4>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Comprehensive support package for first-generation university students demonstrating potential.</p>
                      </div>
                      <div className="flex items-end justify-between mt-auto">
                         <div className="text-2xl font-bold text-[#6C4CF1]">₹15,000</div>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6C4CF1] group-hover:text-white transition-colors">
                            <ChevronRight size={16} />
                         </div>
                      </div>
                   </div>

                   {/* Card 5 */}
                   <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Academic Excellence Award</h4>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Merit-based scholarships for the top 5% of students in any engineering discipline.</p>
                      </div>
                      <div className="flex items-end justify-between mt-auto">
                         <div className="text-2xl font-bold text-[#6C4CF1]">₹5,000</div>
                         <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#6C4CF1] group-hover:text-white transition-colors">
                            <ChevronRight size={16} />
                         </div>
                      </div>
                   </div>
                   
                   {/* Broaden Search Button */}
                   <button className="border-2 border-dashed border-gray-300 rounded-3xl p-5 hover:bg-white hover:border-[#6C4CF1] hover:text-[#6C4CF1] transition-all group flex flex-col items-center justify-center text-center text-gray-500 min-h-[200px]">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#EDE9FE] transition-colors">
                         <Search size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-[#6C4CF1] transition-colors mb-1">Broaden Search</h4>
                      <p className="text-xs max-w-[150px]">Update your agent parameters to find more matches.</p>
                   </button>
                </div>
             </div>
          </div>
       </div>

        {/* Deploy Agent Modal */}
        {isDeployModalOpen && (
           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsDeployModalOpen(false)}></div>
              <div className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-white">
                 <button onClick={() => setIsDeployModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">✕</button>
                 
                 <div className="w-12 h-12 bg-[#EDE9FE] rounded-2xl flex items-center justify-center text-[#6C4CF1] mb-6">
                    <Rocket size={24} />
                 </div>
                 
                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Configure Agent</h2>
                 <p className="text-gray-500 text-sm mb-6">Deploy a new specialized agent to scrape alternative funding databases.</p>
                 
                 <div className="space-y-4">
                    <div>
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Target Focus Area</label>
                       <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 text-sm font-medium outline-none focus:border-[#6C4CF1] transition-colors appearance-none">
                          <option>STEM & Research Grants</option>
                          <option>Women in Tech Scholarships</option>
                          <option>Need-based Core Tuition</option>
                          <option>Study Abroad Fellowships</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Additional Context Array</label>
                       <input type="text" placeholder="e.g. 'First generation', 'Robotics'" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 text-sm font-medium outline-none focus:border-[#6C4CF1] transition-colors" />
                    </div>
                    <button 
                       onClick={() => setIsDeployModalOpen(false)}
                       className="w-full bg-[#111827] text-white rounded-xl py-3 font-bold text-sm hover:bg-gray-800 transition-colors mt-4"
                    >
                       Initialize Agent Launch →
                    </button>
                 </div>
              </div>
           </div>
        )}
    </div>
  );
}
