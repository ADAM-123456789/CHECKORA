import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage({ onStartCheck }) {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Brand Name & Tagline */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            CHECKORA
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-indigo-600">
            From Rules → Risk → Action
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          AI-powered compliance analysis that compares regulations with real organizational evidence, identifies gaps, prioritizes risks, and recommends corrective actions.
        </p>

        {/* Visual Pipeline */}
        <div className="py-6 px-4 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-800">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
              📄 Rules
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              🔍 AI Analysis
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
              ⚠️ Risk
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
              🛠️ Action
            </span>
          </div>
        </div>

        {/* Main CTA Button & Secondary Subtext */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            onClick={onStartCheck}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Start Compliance Check</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <p className="text-xs text-slate-500 font-medium">
            AI-assisted compliance analysis
          </p>
        </div>
      </div>
    </div>
  );
}
