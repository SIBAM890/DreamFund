'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Loader2, Building, User, FileText, UploadCloud } from 'lucide-react';

export default function ApplyLoanPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    provider_name: 'HDFC Credila',
    student_name: '',
    university: '',
    profile_summary: 'Top 10% student with a rigorous technical track record.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    try {
      const resp = await fetch('http://localhost:8000/api/auto_apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await resp.json();
      setSuccessMsg(data.message || 'Application transmitted successfully.');
    } catch (error) {
      console.error(error);
      setSuccessMsg('Failed to process application. Is the backend agent running?');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-full w-full bg-[#f6f9f8] p-10 relative overflow-hidden flex flex-col items-center">
       {/* Background Aesthetics */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EDE9FE] rounded-full blur-3xl opacity-40 pointer-events-none"></div>

       <div className="max-w-2xl w-full z-10">
          <div className="mb-10 text-center">
             <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#6C4CF1] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                   <Send size={28} />
                </div>
             </div>
             <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Instant Application</h1>
             <p className="text-gray-500 max-w-md mx-auto">Deploy your unified financial profile instantly to our top-tier lending partners without filling out endless PDFs.</p>
          </div>

          {!successMsg ? (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <form onSubmit={handleSubmit} className="space-y-6">
                 
                 <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2"><Building size={14}/> Target Lender</label>
                    <select 
                       name="provider_name" value={formData.provider_name} onChange={handleChange}
                       className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-900 font-medium outline-none focus:border-[#6C4CF1] transition-colors appearance-none"
                    >
                       <option value="HDFC Credila">HDFC Credila (Pre-Approved)</option>
                       <option value="SBI Scholar Loan">SBI Scholar Loan</option>
                       <option value="Avanse Financial">Avanse Financial</option>
                    </select>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2"><User size={14}/> Full Legal Name</label>
                       <input 
                         required
                         name="student_name" value={formData.student_name} onChange={handleChange} placeholder="John Doe"
                         type="text" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
                       />
                    </div>
                    <div>
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2"><FileText size={14}/> University</label>
                       <input 
                         required
                         name="university" value={formData.university} onChange={handleChange} placeholder="IIT Bombay"
                         type="text" className="w-full border-b border-gray-200 pb-2 focus:border-[#6C4CF1] outline-none text-gray-900 bg-transparent transition-colors" 
                       />
                    </div>
                 </div>

                 <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">Personal Statement / Agent Summary</label>
                    <textarea 
                       name="profile_summary" value={formData.profile_summary} onChange={handleChange} rows={3}
                       className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 text-sm outline-none focus:border-[#6C4CF1] transition-colors resize-none"
                    ></textarea>
                 </div>

                 <div className="grid grid-cols-2 gap-6 pb-2">
                    <label className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#6C4CF1] hover:bg-[#F2EFFF] transition-all cursor-pointer group">
                       <input type="file" className="hidden" accept=".pdf,.jpeg,.jpg" />
                       <UploadCloud size={28} className="text-gray-400 group-hover:text-[#6C4CF1] mb-3 transition-colors" />
                       <span className="text-xs font-bold text-gray-700 mb-1">Parents' Income Certificate</span>
                       <span className="text-[10px] text-gray-400">PDF, JPG (Max 5MB)</span>
                    </label>
                    <label className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#6C4CF1] hover:bg-[#F2EFFF] transition-all cursor-pointer group">
                       <input type="file" className="hidden" accept=".pdf" />
                       <UploadCloud size={28} className="text-gray-400 group-hover:text-[#6C4CF1] mb-3 transition-colors" />
                       <span className="text-xs font-bold text-gray-700 mb-1">Personal Bank Statements</span>
                       <span className="text-[10px] text-gray-400">Last 3 Months (PDF)</span>
                    </label>
                 </div>

                 <div className="bg-[#f0edf9] rounded-xl p-4 flex items-center gap-3">
                     <ShieldCheck size={20} className="text-[#6C4CF1]" />
                     <p className="text-xs font-medium text-gray-600">Your data is secured via end-to-end encryption. Your score won't be impacted until final verification.</p>
                 </div>

                 <button 
                   type="submit" disabled={loading}
                   className="w-full bg-[#111827] text-white rounded-xl py-4 font-bold text-sm hover:bg-gray-800 transition-colors flex justify-center items-center gap-2 shadow-lg"
                 >
                   {loading ? <Loader2 className="animate-spin" size={18} /> : "Auto-Fill & Transmit Application"}
                 </button>

               </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAF4E6] text-center">
               <div className="w-20 h-20 bg-[#EAF4E6] rounded-full mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-600" />
               </div>
               <h2 className="text-2xl font-bold text-gray-900 mb-4">Transmission Successful</h2>
               <p className="text-gray-600 mb-8 font-mono text-sm bg-gray-50 p-4 rounded-xl border border-gray-100 break-words">{successMsg}</p>
               
               <button 
                 onClick={() => setSuccessMsg(null)}
                 className="bg-white border-2 border-gray-200 text-gray-700 rounded-xl py-3 px-8 font-bold text-sm hover:bg-gray-50 transition-colors"
               >
                 Submit Another Application
               </button>
            </div>
          )}
       </div>
    </div>
  );
}
