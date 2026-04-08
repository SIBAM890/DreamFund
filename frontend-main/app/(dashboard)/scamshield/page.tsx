'use client';

import React, { useState } from 'react';
import { ShieldAlert, ScanLine, Loader2, AlertTriangle, CheckCircle, Smartphone, Link as LinkIcon, Database } from 'lucide-react';

export default function ScamShieldPage() {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("URGENT: Pre-approved GOVT scholarship scheme ₹2 Lakhs guaranteed! Click http://bit.ly/govt-scholar-scheme immediately before link expires! Forward to 5 friends.");
  const [result, setResult] = useState<any>(null);

  const handleScan = async () => {
    setLoading(true);
    setResult(null);
    try {
      const resp = await fetch('http://localhost:8000/api/scam_shield', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           message_text: inputText,
           forward_count: 5 // Simulated High Forward count
        })
      });
      const data = await resp.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({
        is_scam: true,
        risk_score: 99,
        rationale: ["Failed to connect to scanner API.", "Assuming maximum risk due to network anomaly."],
        simhash: "N/A"
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-full w-full bg-[#f8fafc] p-10 relative overflow-hidden flex flex-col items-center">
       {/* Scanner UI Background Elements */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

       <div className="max-w-3xl w-full z-10">
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
             <div>
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                      <ShieldAlert size={20} />
                   </div>
                   <h1 className="text-3xl font-bold text-gray-900 tracking-tight">ScamShield RAG Scanner</h1>
                </div>
                <p className="text-gray-500 text-sm ml-14">Paste suspicious WhatsApp messages or links to verify lender authenticity.</p>
             </div>
             
             <div className="bg-white border-2 border-gray-100 px-4 py-2 rounded-xl flex flex-col items-end shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Database DB</span>
                <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                   <Database size={14} className="text-blue-500" />
                   14,204 Verified Entitites
                </span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Left Column: Input */}
             <div className="space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative group">
                   <div className="absolute right-6 top-6 flex gap-2 text-gray-400">
                      <Smartphone size={16} />
                      <LinkIcon size={16} />
                   </div>
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 block">Suspicious Payload</label>
                   <textarea 
                     value={inputText} onChange={e => setInputText(e.target.value)}
                     rows={8}
                     className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-gray-700 text-sm outline-none focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all resize-none font-mono leading-relaxed"
                     placeholder="Paste WhatsApp message or unverified loan application link here..."
                   ></textarea>
                   
                   <button 
                     onClick={handleScan}
                     disabled={loading || inputText.length === 0}
                     className="w-full bg-[#111827] text-white rounded-xl py-4 font-bold text-sm hover:bg-gray-800 transition-colors flex justify-center items-center gap-3 mt-4 disabled:opacity-50"
                   >
                     {loading ? <Loader2 className="animate-spin" size={18} /> : <ScanLine size={18} />}
                     {loading ? "Agentic Verification in Progress..." : "Run Deep Verification Scan"}
                   </button>
                </div>
             </div>

             {/* Right Column: Output */}
             <div>
                {!result && !loading && (
                   <div className="h-full bg-transparent border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                     <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                        <ScanLine size={24} />
                     </div>
                     <h3 className="font-bold text-gray-600 mb-2">Awaiting Payload</h3>
                     <p className="text-xs text-gray-400 max-w-[200px]">Waiting for raw link or structural text payload to analyze.</p>
                   </div>
                )}

                {loading && (
                   <div className="h-full bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20">
                         <div className="h-full bg-red-500 w-1/3 animate-[slide_1.5s_ease-in-out_infinite]"></div>
                      </div>
                      <ScanLine size={48} className="text-[#6C4CF1] mb-6 animate-pulse" />
                      <h3 className="font-bold text-gray-900 mb-2">Querying Gemini RAG...</h3>
                      <div className="text-xs text-gray-400 space-y-2 w-full max-w-[200px]">
                         <div className="flex items-center gap-2"><Loader2 size={10} className="animate-spin"/> Checking URL structural signature</div>
                         <div className="flex items-center gap-2"><Loader2 size={10} className="animate-spin"/> Computing viral SimHash</div>
                         <div className="flex items-center gap-2"><Loader2 size={10} className="animate-spin"/> Cross-referencing RBI lists</div>
                      </div>
                   </div>
                )}

                {result && !loading && (
                   <div className={`h-full bg-white rounded-3xl p-6 shadow-2xl border ${result.is_scam ? 'border-red-200 border-t-8 border-t-red-500' : 'border-green-200 border-t-8 border-t-green-500'} relative`}>
                      <div className="flex items-start justify-between mb-6">
                         <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Threat Status</div>
                            <h2 className={`text-2xl font-bold flex items-center gap-2 ${result.is_scam ? 'text-red-600' : 'text-green-600'}`}>
                               {result.is_scam ? <AlertTriangle size={24} /> : <CheckCircle size={24} />}
                               {result.is_scam ? "CRITICAL RISK FRAUD" : "VERIFIED LEGITIMATE"}
                            </h2>
                         </div>
                         <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm ${result.is_scam ? 'border-red-100 text-red-600' : 'border-green-100 text-green-600'}`}>
                            {result.risk_score}
                         </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">AI Agent Rationale</div>
                         <ul className="space-y-3">
                            {result.rationale?.map((r: string, i: number) => (
                               <li key={i} className="text-xs text-gray-700 flex items-start gap-2 leading-relaxed">
                                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${result.is_scam ? 'bg-red-400' : 'bg-green-400'} flex-shrink-0`}></div>
                                  {r}
                               </li>
                            ))}
                         </ul>
                      </div>

                      <div className="flex items-center justify-between bg-[#111827] text-white p-4 rounded-xl text-xs font-mono">
                         <div>
                            <span className="text-gray-500 mr-2">SimHash:</span>
                            {result.simhash}
                         </div>
                         <div className="flex items-center gap-1 text-red-500">
                            <ShieldAlert size={12} />
                            Reported Block
                         </div>
                      </div>
                   </div>
                )}
             </div>

          </div>
       </div>
       <style dangerouslySetInnerHTML={{__html: `\n        @keyframes slide {\n          0% { transform: translateX(-100%); }\n          100% { transform: translateX(300%); }\n        }\n      `}} />
    </div>
  );
}
