'use client';

import React, { useState } from 'react';
import { Zap, ShieldCheck, Lock, UploadCloud, Loader2 } from 'lucide-react';

export default function EligibilityPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    tenth_marks: '',
    twelfth_marks: '',
    university: '',
    tier: '3',
    amount_needed: '10000',
    purpose: 'Tuition Fee'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const resp = await fetch('http://localhost:8000/api/scan_student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          tenth_marks: parseFloat(formData.tenth_marks || '0'),
          twelfth_marks: parseFloat(formData.twelfth_marks || '0'),
          university: formData.university,
          tier: parseInt(formData.tier, 10),
          amount_needed: parseInt(formData.amount_needed, 10),
          purpose: formData.purpose
        })
      });
      const data = await resp.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({ error: "Failed to connect to backend AI agent." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-full w-full bg-[#f6f9f8] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute left-10 top-20 w-96 h-96 bg-[#EAF4E6] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute right-10 bottom-20 w-96 h-96 bg-[#EDE9FE] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {!result ? (
        <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 max-w-2xl w-full z-10 relative">
          <div className="flex items-center gap-2 text-xs font-bold text-[#6C4CF1] bg-[#EDE9FE] w-fit px-3 py-1.5 rounded-full mb-6">
            <Zap size={14} className="fill-current" />
            ELIGIBILITY CHECK
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Framework</h2>
          <p className="text-gray-500 mb-8 font-medium">Enter your core data to sync with the scholarship ecosystem.</p>

          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Full Legal Name</label>
              <input 
                name="name" value={formData.name} onChange={handleChange}
                type="text" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">10th Grade Score (%)</label>
                <input 
                  name="tenth_marks" value={formData.tenth_marks} onChange={handleChange}
                  type="number" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">12th Grade Score (%)</label>
                <input 
                  name="twelfth_marks" value={formData.twelfth_marks} onChange={handleChange}
                  type="number" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">University</label>
                <input 
                  name="university" value={formData.university} onChange={handleChange}
                  type="text" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">University Tier</label>
                <select 
                  name="tier" value={formData.tier} onChange={handleChange}
                  className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors appearance-none"
                >
                  <option value="1">Tier 1 (IIT/NIT/BITS)</option>
                  <option value="2">Tier 2</option>
                  <option value="3">Tier 3</option>
                </select>
              </div>
            </div>

            <div className="bg-[#f0edf9] rounded-xl p-4 flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                 <div className="bg-white p-2 rounded-lg shadow-sm">
                    <ShieldCheck size={18} className="text-[#6C4CF1]" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-gray-900">AI Data Sync</h4>
                   <p className="text-xs text-gray-500">Enable autonomous scholarship matching</p>
                 </div>
              </div>
              {/* Fake Toggle */}
              <div className="w-10 h-6 bg-[#6C4CF1] rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow"></div>
              </div>
            </div>

            <button 
              onClick={handleCalculate}
              disabled={loading}
              className="w-full bg-[#111827] text-white rounded-xl py-4 font-bold text-sm mt-4 hover:bg-gray-800 transition-colors flex justify-center items-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : "Calculate Eligibility"}
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 max-w-3xl w-full z-10 relative">
           <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Eligibility Profile Analyzed</h2>
           
           <div className="mt-8 flex items-center justify-center gap-12 border-b border-gray-100 pb-8 mb-8">
              <div className="text-center">
                 <div className="text-5xl font-bold text-[#6C4CF1] mb-2">{result.credpath_score || '--'}</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">CredPath Score</div>
              </div>
           </div>

           <div className="space-y-4">
             <h3 className="font-bold text-gray-900 text-lg">Top Auto-Matched Lenders</h3>
             <div className="grid gap-3">
               {result.recommendations?.map((rec: any, idx: number) => (
                 <div key={idx} className="border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:border-[#6C4CF1] transition-colors">
                    <div>
                      <div className="text-xs font-bold text-[#6C4CF1] mb-1">{rec.category || 'Loan'}</div>
                      <h4 className="font-bold text-sm text-gray-900">{rec.metadata?.Provider || rec.metadata?.Scheme || 'Partner Institution'}</h4>
                    </div>
                    <button className="bg-[#EDE9FE] text-[#6C4CF1] text-xs font-bold px-4 py-2 rounded-lg">Auto-Apply</button>
                 </div>
               ))}
               {(!result.recommendations || result.recommendations.length === 0) && (
                 <div className="bg-gray-50 p-4 rounded-xl text-center text-sm text-gray-500">No immediate matches found.</div>
               )}
             </div>
           </div>

           <button 
              onClick={() => setResult(null)}
              className="w-full border-2 border-gray-100 text-gray-600 rounded-xl py-3 font-bold text-sm mt-8 hover:bg-gray-50 transition-colors"
            >
              Recalculate
            </button>
        </div>
      )}

      <div className="absolute bottom-6 flex gap-6 text-xs text-gray-400 font-medium z-10">
         <div className="flex items-center gap-2"><Lock size={14} /> End-to-end encryption</div>
         <div className="flex items-center gap-2"><ShieldCheck size={14} /> Institutional standards</div>
      </div>
    </div>
  );
}
