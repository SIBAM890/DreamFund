"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Upload, Info, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EligibilityAssessment() {
    const router = useRouter();
    const [step, setStep] = useState(3);
    const [aiSync, setAiSync] = useState(true);

    const steps = [
        { id: 1, name: 'PROFILE' },
        { id: 2, name: 'ACADEMIC' },
        { id: 3, name: 'FINANCIAL' },
        { id: 4, name: 'LEGAL' },
        { id: 5, name: 'REVIEW' },
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
            {/* Header / Nav */}
            <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
                <div className="flex items-center gap-8">
                    <span className="font-heading font-bold text-xl tracking-tight">Command Center</span>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
                        <button className="hover:text-black transition-colors">Dashboard</button>
                        <button className="hover:text-black transition-colors">Scholarship Hub</button>
                        <button className="hover:text-black transition-colors">Disbursal Pipeline</button>
                        <button className="text-brand-purple border-b-2 border-brand-purple pb-1">Eligibility</button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400"><Info size={20}/></button>
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=User" alt="User" />
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto py-12 px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-heading font-bold mb-2">Eligibility Assessment</h1>
                    <p className="text-gray-500 font-medium">Step 3 of 5: Financial Documentation</p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-between relative mb-16 max-w-2xl mx-auto">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
                    {steps.map((s) => (
                        <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                                s.id < step ? 'bg-black border-black text-white' : 
                                s.id === step ? 'bg-brand-purple border-brand-purple text-white shadow-[0_0_15px_rgba(108,76,241,0.3)]' : 
                                'bg-white border-gray-100 text-gray-300'
                            }`}>
                                {s.id < step ? <Check size={18} /> : <span>{s.id}</span>}
                            </div>
                            <span className={`text-[10px] font-bold tracking-widest ${s.id === step ? 'text-brand-purple' : 'text-gray-400'}`}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* AI Sync Toggle */}
                <div className="flex justify-end mb-6">
                    <div className="bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-brand-purple/10 flex items-center justify-center rounded-full">
                                <ActivityPulse />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-gray-500">AI SYNC ACTIVE</span>
                        </div>
                        <button 
                            onClick={() => setAiSync(!aiSync)}
                            className={`w-10 h-5 rounded-full relative transition-colors ${aiSync ? 'bg-brand-purple' : 'bg-gray-200'}`}
                        >
                            <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${aiSync ? 'right-1' : 'left-1'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Form Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-10 shadow-sm border border-gray-50 mb-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 tracking-widest mb-2 uppercase">Annual Household Income</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input 
                                    type="text" 
                                    defaultValue="84,500" 
                                    className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-4 pl-10 pr-4 font-medium transition-all outline-none" 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-gray-400 tracking-widest mb-2 uppercase">Primary Funding Source</label>
                            <select className="w-full bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-4 px-4 font-medium transition-all outline-none appearance-none">
                                <option>Institutional Grant</option>
                                <option>Personal Savings</option>
                                <option>Education Loan</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 tracking-widest mb-2 uppercase">Upload Tax Returns (2023-24)</label>
                        <div className="border-2 border-dashed border-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50/30 group hover:bg-gray-50/50 transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="text-brand-purple" size={24} />
                            </div>
                            <p className="font-bold text-lg mb-1">Drag and drop file here</p>
                            <p className="text-sm text-gray-400 font-medium">PDF, JPG or PNG up to 10MB</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-50">
                        <button className="px-8 py-4 text-sm font-bold tracking-widest text-gray-500 hover:text-black transition-colors">Save Draft</button>
                        <div className="flex gap-4">
                            <button className="px-10 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold transition-all hover:bg-gray-200">Back</button>
                            <button 
                                onClick={() => router.push('/scholarship-hub')}
                                className="px-12 py-4 bg-black text-white rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-all group"
                            >
                                Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex gap-4 items-start">
                        <div className="p-2 bg-brand-purple/10 rounded-lg"><Info size={20} className="text-brand-purple"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1">Verification Speed</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">Financial data synced via AI typically clears within 2-4 business hours, whereas manual uploads may take up to 48 hours.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex gap-4 items-start">
                        <div className="p-2 bg-brand-purple/10 rounded-lg"><ShieldCheck size={20} className="text-brand-purple"/></div>
                        <div>
                            <h4 className="font-bold text-sm mb-1">Data Privacy</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">Your documents are encrypted and stored in compliance with the highest federal institutional standards.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function ActivityPulse() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 bg-brand-purple rounded-full z-10"></div>
            <div className="absolute w-2 h-2 bg-brand-purple rounded-full animate-ping opacity-75"></div>
        </div>
    );
}
