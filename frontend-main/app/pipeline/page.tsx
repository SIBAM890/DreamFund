"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CloudDownload, GraduationCap, DollarSign, Filter, Info, Play, User, Activity, ArrowRight, Share2, Wallet } from 'lucide-react';

export default function CashflowJourney() {
    return (
        <div className="min-h-screen bg-[#F0F7F0] font-sans text-gray-900 flex">
            {/* Sidebar (Matching Scholarship Hub) */}
            <aside className="w-64 bg-white/50 backdrop-blur-xl border-r border-[#E0EBE0] p-6 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <img src="https://ui-avatars.com/api/?name=User&background=6C4CF1&color=fff" className="w-10 h-10 rounded-lg shadow-lg rotate-3" alt="Avatar" />
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Welcome back</p>
                        <p className="font-bold text-sm">Academic Year 2024</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavItem icon={<Filter size={18}/>} label="Home" />
                    <NavItem icon={<DollarSign size={18}/>} label="My Loans" active />
                    <NavItem icon={<GraduationCap size={18}/>} label="Education" />
                    <NavItem icon={<Share2 size={18}/>} label="Support" />
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
                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="p-2 border border-gray-200 rounded-full"><Activity size={18}/></div>
                        <div className="p-2 border border-gray-200 rounded-full"><Wallet size={18}/></div>
                        <button className="bg-brand-purple text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-brand-purple/20">Apply Now</button>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 inline-block font-mono">Disbursal Pipeline</span>
                            <h1 className="text-6xl font-heading font-black mb-4">The Cashflow Journey</h1>
                            <p className="text-gray-500 font-medium max-w-xl leading-relaxed">Tracing your Semester 2 Tuition from approval to enrollment. Real-time visualization of fund movement across institutional nodes.</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Total Amount</p>
                            <div className="flex items-center gap-4">
                                <h2 className="text-5xl font-heading font-black text-brand-purple">$12,450.00</h2>
                                <button className="p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all text-gray-600">
                                    <CloudDownload size={24}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pipeline Visualization Card */}
                    <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-12 border border-white mb-10 h-[400px] flex items-center justify-center relative shadow-2xl shadow-black/5">
                        <div className="absolute inset-0 bg-[#EAF7EC]/30 rounded-[3rem] -z-10"></div>
                        
                        {/* Interactive Node Visualization */}
                        <div className="w-full relative flex items-center justify-between px-20">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2"></div>
                            
                            <PipelineNode label="Lending Vault" status="Approved & In-flight" />
                            <PipelineNode label="Clearing House" status="AQB Processing" />
                            <div className="relative">
                                <PipelineNode label="Moving Funds..." status="IN TRANSIT" active />
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-3 whitespace-nowrap">
                                    <span className="w-2 h-2 bg-brand-purple rounded-full animate-ping"></span>
                                    <span className="text-[10px] font-black font-mono">VERIFYING UNIVERSITY NODE</span>
                                </div>
                            </div>
                            <PipelineNode label="University Portal" status="Awaiting Settlement" />
                            <PipelineNode label="Enrollment Confirmed" status="Final Settlement" disabled />
                        </div>

                        {/* System Status Pill */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                            <div className="flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-md border border-white rounded-full shadow-sm">
                                <span className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold tracking-widest text-[#4A5E4D] uppercase">System Status: Pipeline Optimized & Secure</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-white">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-brand-purple mb-6"><Activity size={24}/></div>
                            <h4 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">Latest Event</h4>
                            <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Today, 09:42 AM</p>
                            <p className="font-bold text-xl leading-tight">Handshake protocol accepted by University of Excellence.</p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-white">
                            <div className="w-12 h-12 bg-[#F0F7F0] rounded-2xl flex items-center justify-center text-green-600 mb-6"><Activity size={24}/></div>
                            <h4 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">ETA Completion</h4>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-heading font-black text-black">14</span>
                                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Hours remaining</span>
                                <div className="flex-1 ml-4 h-1 bg-gray-100 rounded-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-[70%] bg-brand-purple rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#E9F0E6] p-10 rounded-[2.5rem] shadow-sm border border-white flex flex-col justify-between">
                            <div>
                                <h4 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">Pipeline Metrics</h4>
                                <div className="space-y-4">
                                    <MetricItem label="Protocol" value="ISO-20022 Digital" />
                                    <MetricItem label="Gas Fees" value="$0.00 (Subsidized)" />
                                    <MetricItem label="Encrypted Key" value="LX - 882 . . . A49" />
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mt-6 hover:translate-x-1 transition-transform">
                                View Full Log <ArrowRight size={14}/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function PipelineNode({ label, status, active = false, disabled = false }: { label: string, status: string, active?: boolean, disabled?: boolean }) {
    return (
        <div className={`flex flex-col items-center gap-3 transition-opacity ${disabled ? 'opacity-30' : 'opacity-100'}`}>
            <div className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all ${
                active ? 'bg-brand-purple border-brand-purple/20 scale-150 shadow-[0_0_20px_rgba(108,76,241,0.4)]' : 
                'bg-white border-gray-100'
            }`}>
               <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-white' : 'bg-gray-200'}`}></div>
            </div>
            <div className="text-center">
                <p className={`text-[10px] font-black uppercase tracking-widest ${active ? 'text-brand-purple' : 'text-gray-900'}`}>{label}</p>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{status}</p>
            </div>
        </div>
    );
}

function MetricItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-gray-400 uppercase tracking-widest">{label}</span>
            <span className="text-black">{value}</span>
        </div>
    );
}

function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${active ? 'bg-white shadow-lg shadow-black/5 text-black' : 'text-gray-400 hover:text-black hover:bg-white/30'}`}>
            {icon}
            {label}
        </button>
    );
}
