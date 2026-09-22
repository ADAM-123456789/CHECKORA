import React from 'react';
import { ShieldCheck, Sparkles, Building2, RotateCcw, FileText } from 'lucide-react';

export default function Header({ currentView, onNavigate, onReset, companyName = "Apex Manufacturing Pvt. Ltd." }) {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Product Name */}
        <div 
          onClick={() => onNavigate('landing')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                CHECKORA
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                PROTOTYPE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium -mt-0.5">
              AI Compliance Assistant &bull; <span className="text-slate-400">Rules → Risk → Action</span>
            </p>
          </div>
        </div>

        {/* Status Indicator & Company Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          {currentView !== 'landing' && currentView !== 'upload' && currentView !== 'analyzing' && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span className="truncate max-w-[190px]">{companyName}</span>
            </div>
          )}

          {currentView !== 'landing' && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="hidden sm:inline">Analysis Ready</span>
              <span className="sm:hidden">Ready</span>
            </div>
          )}

          {/* Quick Actions */}
          {currentView !== 'landing' && (
            <button
              onClick={onReset}
              title="Reset Demo to Initial State"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition text-xs font-medium flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset Demo</span>
            </button>
          )}

          {currentView === 'landing' ? (
            <button
              onClick={() => onNavigate('upload')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Demo</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('report')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compliance Report</span>
              <span className="sm:hidden">Report</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
