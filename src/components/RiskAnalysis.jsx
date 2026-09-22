import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  AlertOctagon, 
  CheckCircle2, 
  ChevronRight, 
  Flame, 
  Clock, 
  Layers,
  ArrowRight,
  TrendingDown,
  ShieldCheck
} from 'lucide-react';

export default function RiskAnalysis({ requirements, onSelectRequirement, onNavigate }) {
  const highRisk = requirements.filter(r => r.risk === 'High');
  const mediumRisk = requirements.filter(r => r.risk === 'Medium');
  const lowRisk = requirements.filter(r => r.risk === 'Low');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-red-50 text-red-700 text-xs font-bold mb-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Risk Prioritization Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Risk Analysis
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Severity ranking based on potential life-safety impact and regulatory citation risk.
          </p>
        </div>

        <button
          onClick={() => onNavigate('report')}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-2"
        >
          <span>View Remediation Report</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Summary Risk Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* High Risk Card */}
        <div className="bg-white rounded-3xl p-6 border border-red-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <AlertOctagon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                Critical (0-7 Days)
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {highRisk.length}
            </div>
            <h4 className="text-sm font-bold text-red-700">
              High Risk
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Immediate life-safety hazards: exit darkness, uncertified fire extinguishers, missing evacuation drills.
            </p>
          </div>
        </div>

        {/* Medium Risk Card */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Moderate (30 Days)
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {mediumRisk.length}
            </div>
            <h4 className="text-sm font-bold text-amber-700">
              Medium Risk
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Lapsed calibration certificates, unverified electrical panel scans, and incomplete respirator fit logs.
            </p>
          </div>
        </div>

        {/* Low Risk Card */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Managed
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">
              {lowRisk.length}
            </div>
            <h4 className="text-sm font-bold text-emerald-700">
              Low Risk
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Standard operating procedures verified or non-critical documentation updates.
            </p>
          </div>
        </div>
      </div>

      {/* Categorized Risk Lists */}
      <div className="space-y-6">
        {/* High Risk Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/70 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-lg font-extrabold text-slate-900">
              High Risk Liabilities ({highRisk.length})
            </h3>
          </div>

          <div className="space-y-3">
            {highRisk.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRequirement(item)}
                className="p-4 rounded-2xl bg-red-50/30 border border-red-200/70 hover:border-red-300 hover:bg-red-50/60 transition cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-red-700 transition">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                      {item.status}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Clause {item.clause.split(' - ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {item.whyProblem}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white border border-red-200 flex items-center justify-center text-red-600 shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medium Risk Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/70 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <h3 className="text-lg font-extrabold text-slate-900">
              Medium Risk Gaps ({mediumRisk.length})
            </h3>
          </div>

          <div className="space-y-3">
            {mediumRisk.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRequirement(item)}
                className="p-4 rounded-2xl bg-amber-50/30 border border-amber-200/70 hover:border-amber-300 hover:bg-amber-50/60 transition cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      {item.status}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Clause {item.clause.split(' - ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {item.whyProblem}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Risk Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/70 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="text-lg font-extrabold text-slate-900">
              Low Risk & Managed ({lowRisk.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lowRisk.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRequirement(item)}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div className="min-w-0">
                  <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 transition truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Status: {item.status} &bull; Clause {item.clause.split(' - ')[0]}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
