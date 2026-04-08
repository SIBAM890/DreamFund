'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Settings, User, LayoutDashboard, GraduationCap, ArrowRightLeft, CheckSquare, HelpCircle, UserCircle, Zap, FileText, ShieldAlert, MoreVertical } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'TrustScholar', href: '/scholarship-hub', icon: GraduationCap },
  { name: 'Disbursal Pipeline', href: '/pipeline', icon: ArrowRightLeft },
  { name: 'Eligibility', href: '/eligibility', icon: CheckSquare },
  { name: 'CredFund', href: '/apply-loan', icon: FileText },
  { name: 'ScamShield', href: '/scamshield', icon: ShieldAlert },
];

export default function CommandCenterLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between">
        <div>
          <div className="p-6 flex items-center gap-3">
            <div className="bg-[#111827] text-white p-2 rounded-lg">
              <Zap size={20} className="fill-current text-[#A78BFA]" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 leading-tight">DreamFund</h1>
              <p className="text-[10px] text-gray-500 font-semibold tracking-wider">AI FINANCIAL AGENT</p>
            </div>
          </div>
          
          <nav className="mt-6 px-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-white shadow-sm border border-gray-100 text-[#6C4CF1]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-[#6C4CF1]' : 'text-gray-400'} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4">
          <nav className="space-y-1 mb-6 px-4">
            <Link href="/support" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <HelpCircle size={18} className="text-gray-400" />
              Support
            </Link>
            <Link href="/account" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <UserCircle size={18} className="text-gray-400" />
              Account
            </Link>
          </nav>

          <div className="p-3 border border-gray-100 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors mx-2 rounded-2xl mb-2 group shadow-sm bg-white">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6C4CF1] to-purple-400 flex items-center justify-center text-white font-bold text-xs shadow-sm ring-2 ring-white">
                 JD
               </div>
               <div className="flex flex-col">
                 <span className="text-sm font-bold text-gray-900 leading-tight">John Doe</span>
                 <span className="text-[10px] text-gray-500 font-medium tracking-wide">STUDENT TIER</span>
               </div>
             </div>
             <MoreVertical size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors mr-1" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10 w-full top-0">
          <div className="font-bold text-gray-900 text-lg tracking-tight">Command Center</div>
          
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium relative py-5 ${isActive ? 'text-[#6C4CF1]' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6C4CF1] rounded-t-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>
            
            <div className="flex items-center gap-4 ml-8 border-l border-gray-100 pl-8">
              <button className="text-gray-400 hover:text-gray-600"><Bell size={18} /></button>
              <button className="text-gray-400 hover:text-gray-600"><Settings size={18} /></button>
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                 <User size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
