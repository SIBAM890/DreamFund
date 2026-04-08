"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Rocket, Pause, Play, ArrowRight, GraduationCap, DollarSign, Filter, Activity, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoansPage() {
    const router = useRouter();
    const [isAgentRunning, setIsAgentRunning] = useState(true);
    const [scanResults, setScanResults] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Call our backend
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/scan_student', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: "Rahul M.",
                        tenth_marks: 88,
                        twelfth_marks: 92,
                        university: "NIT Rourkela",
                        tier: 1,
                        amount_needed: 500000,
                        purpose: "B.Tech Tuition"
                    })
                });
                const data = await res.json();
                setScanResults(data);
                setIsLoading(false);
            } catch (err) {
                console.error("Backend not running?", err);
                setIsLoading(false);
            }
        };

        const timer = setTimeout(fetchMatches, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#F0F7F0] font-sans text-gray-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white/50 backdrop-blur-xl border-r border-[#E0EBE0] p-6 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <img src="https://ui-avatars.com/api/?name=User&background=6C4CF1&color=fff" className="w-10 h-10 rounded-lg shadow-lg rotate-3" alt="Avatar" />
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Welcome back</p>
                        <p className="font-bold text-sm">Academic Year 2024</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavItem icon={<Filter size={18}/>} label="Home" onClick={() => router.push('/')} />
                    <NavItem icon={<DollarSign size={18}/>} label="My Loans" active />
                    <NavItem icon={<GraduationCap size={18}/>} label="Education" />
                    <NavItem icon={<Search size={18}/>} label="Support" />
                    <NavItem icon={<Filter size={18}/>} label="Documents" />
                </nav>

                <div className="mt-auto flex flex-col gap-4">
                    <button className="w-full py-3 bg-brand-purple/10 text-brand-purple rounded-xl font-bold text-sm hover:bg-brand-purple/20 transition-all">Consult Advisor</button>
                    <button className="flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-black transition-all px-4"><Play size={16} className="rotate-180"/> Logout</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <header className="flex justify-between items-center mb-10">
                    <div className="flex gap-6 text-sm font-bold text-gray-400">
                        <button className="hover:text-black">Dashboard</button>
                        <button className="text-brand-purple border-b-2 border-brand-purple pb-1">Tuition Loans</button>
                        <button className="hover:text-black">Savings</button>
                        <button className="hover:text-black">Courses</button>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-brand-purple text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-brand-purple/20">Apply Now</button>
                    </div>
                </header>

                <div className="max-w-6xl text-left">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 inline-block">AI-Powered Hub</span>
                            <h1 className="text-5xl font-heading font-black mb-4">Agentic Scholarship Hub</h1>
                            <p className="text-gray-500 font-medium max-w-xl leading-relaxed text-left">Your autonomous education agents are scanning 4,200+ global funding opportunities to match your academic profile.</p>
                        </div>
                        <button className="flex items-center gap-3 bg-brand-purple text-white px-8 py-5 rounded-3xl font-bold text-lg shadow-2xl shadow-brand-purple/30 group">
                           <Rocket size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> Deploy New Agent
                        </button>
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                        {/* Live Action Feed (Terminal Look) */}
                        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 text-left">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#4A5E4D] opacity-80 uppercase">
                                    <span className="w-1.5 h-1.5 bg-[#4A5E4D] rounded-full"></span> Live Action Feed
                                </span>
                                <span className="text-[10px] font-bold text-[#4A5E4D] opacity-40 uppercase tracking-widest">Active</span>
                            </div>
                            
                            <div className="bg-[#0A0D0B] rounded-2xl p-6 h-[450px] font-mono text-xs overflow-hidden relative border border-white/5">
                                <div className="space-y-4">
                                    <p className="text-gray-500">Initializing scholarship_agent_v2.0...</p>
                                    <p className="text-blue-400">[info] Authenticated via Academic Gateway</p>
                                    <p className="text-yellow-500">[search] Querying: "STEM grants for graduate research 2024"</p>
                                    <p className="text-green-500 underline">[match] Found: Global Excellence Merit Scholarship</p>
                                    <div className="pl-4 border-l border-gray-800 space-y-1">
                                        <p className="text-gray-400">[action] Scraping eligibility requirements...</p>
                                        <p className="text-green-400 opacity-60">• GPA {'>'} 3.8: PASSED</p>
                                        <p className="text-green-400 opacity-60">• Residency: PASSED</p>
                                        <p className="text-green-400 opacity-60">• Major: Mech Engineering: PASSED</p>
                                    </div>
                                    <p className="text-blue-400">[info] Generating draft essay based on "Research Portfolio 2023"...</p>
                                    <div className="animate-pulse flex gap-1">
                                        <div className="w-1 h-3 bg-brand-purple"></div>
                                        <div className="w-1 h-3 bg-brand-purple delay-75"></div>
                                        <div className="w-1 h-3 bg-brand-purple delay-150"></div>
                                    </div>
                                </div>

                                {/* Floating Agent Control */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                                   <div className="bg-brand-purple text-white px-6 py-3 rounded-full flex items-center gap-4 text-xs font-bold shadow-2xl">
                                      <span className="flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span> Agent Alpha Running
                                      </span>
                                      <div className="w-px h-4 bg-white/20"></div>
                                      <button onClick={() => setIsAgentRunning(!isAgentRunning)} className="hover:opacity-80 flex items-center gap-2">
                                        {isAgentRunning ? <Pause size={14} /> : <Play size={14}/>} {isAgentRunning ? 'PAUSE AGENT' : 'RESUME'}
                                      </button>
                                   </div>
                                </div>
                            </div>
                        </div>

                        {/* Recommendations Grid */}
                        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 text-left">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold">Top Recommendations</h3>
                                <span className="text-[10px] font-bold text-brand-purple bg-white px-3 py-1 rounded-full uppercase tracking-widest border border-brand-purple/10">Score: High to Low</span>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {isLoading ? (
                                    <div className="col-span-2 py-20 text-center text-gray-400 font-bold uppercase tracking-widest">Agents scanning database...</div>
                                ) : (
                                    scanResults?.recommendations?.map((item: any, i: number) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-white rounded-[2rem] p-6 shadow-sm border border-white hover:shadow-xl transition-all group"
                                        >
                                            <div className="relative h-40 bg-gray-100 rounded-3xl overflow-hidden mb-6">
                                                <div className="flex items-center justify-center h-full">
                                                    {item.category === 'Loan' ? <DollarSign className="text-brand-purple/20" size={64}/> : <GraduationCap className="text-brand-purple/20" size={64}/>}
                                                </div>
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-brand-purple flex items-center gap-1">
                                                    {Math.floor(Math.random() * 20) + 80}% MATCH
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-lg mb-2 line-clamp-1">{item.metadata?.Provider || item.metadata?.Scheme_Name || "Global Excellence"}</h4>
                                            <p className="text-xs text-gray-500 font-medium mb-6 line-clamp-2 leading-relaxed text-left">Exclusive funding for students demonstrating top percentile academic performance.</p>
                                            <div className="flex gap-2 mb-8">
                                                <span className="px-3 py-1 bg-brand-purple/5 text-brand-purple text-[8px] font-black uppercase tracking-widest rounded-full">STEM</span>
                                                <span className="px-3 py-1 bg-brand-purple/5 text-brand-purple text-[8px] font-black uppercase tracking-widest rounded-full">Full-Ride</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-2xl font-heading font-black text-brand-purple">{item.metadata?.Max_Loan_Amount ? `₹${item.metadata?.Max_Loan_Amount}` : '$45,000'}</span>
                                                <button 
                                                    onClick={() => router.push('/pipeline')}
                                                    className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-brand-purple group-hover:text-white transition-all shadow-sm"
                                                >
                                                    <ArrowRight size={20}/>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                )}

                                {/* Broaden Search Card */}
                                <div className="bg-[#E9F0E6] rounded-[2rem] p-6 border border-white border-dashed flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/50 transition-all">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                        <Search size={22} className="text-brand-purple" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">Broaden Search</h4>
                                    <p className="text-xs text-gray-500 font-medium max-w-[150px] text-center">Update your agent parameters to find more matches.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, onClick, active = false }: { icon: any, label: string, onClick?: () => void, active?: boolean }) {
    return (
        <button onClick={onClick} className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${active ? 'bg-white shadow-lg shadow-black/5 text-black' : 'text-gray-400 hover:text-black hover:bg-white/30'}`}>
            {icon}
            {label}
        </button>
    );
}
