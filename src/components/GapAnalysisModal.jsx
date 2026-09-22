import React from 'react';
import { 
  ArrowLeft, 
  AlertOctagon, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Search, 
  HelpCircle, 
  Wrench, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Tag,
  Check
} from 'lucide-react';

export default function GapAnalysisModal({ 
  requirement, 
  onClose, 
  onToggleResolve 
}) {
  if (!requirement) return null;

  const isResolved = requirement.resolved || requirement.status === 'Compliant';
  const isHighRisk = requirement.risk === 'High';
  const isMissing = requirement.status === 'Missing';

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">
            Clause: {requirement.clause}
          </span>
        </div>
      </div>

      {/* Main Detail Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                Requirement #{requirement.number}
              </span>
              <span className="text-xs font-medium text-slate-400">&bull;</span>
              <span className="text-xs font-semibold text-slate-500">
                {requirement.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {requirement.title}
            </h1>
          </div>

          {/* Badges & Resolve Action */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {isResolved ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Resolved</span>
                <span className="text-[10px] font-normal px-1.5 py-0.2 rounded bg-emerald-100/80 text-emerald-800 ml-1">
                  Demo State
                </span>
              </div>
            ) : (
              <>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${
                  isMissing 
                    ? 'bg-red-50 text-red-700 border-red-200' 
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  <AlertOctagon className="w-4 h-4" />
                  <span>{requirement.status}</span>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${
                  isHighRisk 
                    ? 'bg-red-50 text-red-700 border-red-200' 
                    : requirement.risk === 'Medium'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  <AlertTriangle className="w-4 h-4" />
                  <span>{requirement.risk} Risk</span>
                </div>
              </>
            )}

            {/* Mark as Resolved Demo Button */}
            <button
              onClick={() => onToggleResolve(requirement.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                isResolved
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-emerald-600/20'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isResolved ? 'Re-open Gap (Demo)' : 'Mark as Resolved'}</span>
            </button>
          </div>
        </div>

        {/* The Core Methodology Pipeline Visual */}
        <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Compliance Traceability Pipeline
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-[10px] uppercase font-bold text-slate-400">01 Rule</span>
              <span className="font-bold text-slate-800 truncate block mt-0.5">Mandatory</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-[10px] uppercase font-bold text-slate-400">02 Evidence</span>
              <span className={`font-bold truncate block mt-0.5 ${isMissing ? 'text-red-600' : 'text-amber-600'}`}>
                {isMissing ? 'No Records' : 'Incomplete'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-[10px] uppercase font-bold text-slate-400">03 Gap</span>
              <span className="font-bold text-amber-700 truncate block mt-0.5">Identified</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-[10px] uppercase font-bold text-slate-400">04 Risk</span>
              <span className={`font-bold truncate block mt-0.5 ${isHighRisk ? 'text-red-600' : 'text-amber-600'}`}>
                {requirement.risk} Severity
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 shadow-xs">
              <span className="block text-[10px] uppercase font-bold text-indigo-500">05 Action</span>
              <span className="font-bold text-indigo-700 truncate block mt-0.5">Recommended</span>
            </div>
          </div>
        </div>

        {/* 4 Core Detailed Sections */}
        <div className="space-y-6 pt-2">
          {/* Section 1: Requirement */}
          <div className="rounded-2xl p-5 bg-slate-50/70 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-indigo-900">
              <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">
                Requirement
              </h3>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed pl-6">
              "{requirement.requirement}"
            </p>
          </div>

          {/* Section 2: Evidence Found */}
          <div className="rounded-2xl p-5 bg-slate-50/70 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-slate-900">
              <Search className="w-4 h-4 text-slate-600 shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-700">
                Evidence Found
              </h3>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed pl-6">
              "{requirement.evidenceFound}"
            </p>
          </div>

          {/* Section 3: Why is this a problem? */}
          <div className="rounded-2xl p-5 bg-red-50/40 border border-red-200/80">
            <div className="flex items-center gap-2 mb-2 text-red-900">
              <HelpCircle className="w-4 h-4 text-red-600 shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-red-800">
                Why is this a problem?
              </h3>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed pl-6">
              "{requirement.whyProblem}"
            </p>
          </div>

          {/* Section 4: Recommended Action */}
          <div className="rounded-2xl p-5 bg-emerald-50/40 border border-emerald-200/80">
            <div className="flex items-center gap-2 mb-2 text-emerald-900">
              <Wrench className="w-4 h-4 text-emerald-600 shrink-0" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-emerald-800">
                Recommended Action
              </h3>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed pl-6">
              "{requirement.recommendedAction}"
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </button>

          {isResolved && (
            <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Marked as Resolved in this demo session</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
