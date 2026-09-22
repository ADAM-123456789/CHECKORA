import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  AlertOctagon, 
  ChevronRight, 
  FileText 
} from 'lucide-react';

export default function Dashboard({ 
  companyInfo, 
  requirements, 
  onSelectRequirement, 
  onNavigate 
}) {
  const total = requirements.length;
  const compliantCount = requirements.filter(r => r.status === 'Compliant').length;
  const partialCount = requirements.filter(r => r.status === 'Partial').length;
  const missingCount = requirements.filter(r => r.status === 'Missing').length;

  const highRiskCount = requirements.filter(r => r.risk === 'High' && r.status !== 'Compliant').length;
  const mediumRiskCount = requirements.filter(r => r.risk === 'Medium' && r.status !== 'Compliant').length;
  const lowRiskCount = requirements.filter(r => r.risk === 'Low' || r.status === 'Compliant').length;

  const scorePercent = Math.round(((compliantCount + partialCount) / total) * 100);

  // 4 Priority Issues
  const priorityIssueIds = ['req-3', 'req-2', 'req-8', 'req-5'];
  const priorityIssues = priorityIssueIds
    .map(id => requirements.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Compliance Overview
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Company: <span className="font-bold text-slate-800">{companyInfo.name}</span>
          </p>
        </div>

        <button
          onClick={() => onNavigate('report')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Generate Compliance Report</span>
        </button>
      </div>

      {/* Large Score Card & Requirements Breakdown */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center">
        <div className="text-6xl font-black text-indigo-600 tracking-tight">
          {scorePercent}%
        </div>
        <div className="text-base font-bold text-slate-900 mt-1">
          Requirements Satisfied
        </div>
        <div className="text-xs text-slate-500 mt-2 font-medium">
          {total} Total Requirements &bull; {compliantCount} Compliant &bull; {partialCount} Partial &bull; {missingCount} Missing
        </div>
      </div>

      {/* Three Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Compliant Card */}
        <div 
          onClick={() => onNavigate('requirements')}
          className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-emerald-300 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🟢</span>
            <div>
              <div className="text-2xl font-black text-slate-900 leading-none">
                {compliantCount}
              </div>
              <div className="text-xs font-bold text-emerald-800 mt-1">
                Compliant
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>

        {/* Partial Card */}
        <div 
          onClick={() => onNavigate('requirements')}
          className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-amber-300 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🟠</span>
            <div>
              <div className="text-2xl font-black text-slate-900 leading-none">
                {partialCount}
              </div>
              <div className="text-xs font-bold text-amber-800 mt-1">
                Partial
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>

        {/* Missing Card */}
        <div 
          onClick={() => onNavigate('requirements')}
          className="bg-white rounded-2xl p-5 border border-red-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-red-300 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔴</span>
            <div>
              <div className="text-2xl font-black text-slate-900 leading-none">
                {missingCount}
              </div>
              <div className="text-xs font-bold text-red-800 mt-1">
                Missing
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>
      </div>

      {/* Risk Summary */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">
          Risk Summary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
          <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2.5">
            <span className="text-base">🔴</span>
            <span>{highRiskCount} High Risk</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-2.5">
            <span className="text-base">🟠</span>
            <span>{mediumRiskCount} Medium Risk</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-2.5">
            <span className="text-base">🟢</span>
            <span>{lowRiskCount} Low Risk</span>
          </div>
        </div>
      </div>

      {/* Priority Issues */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900">
            Priority Issues
          </h3>
          <span className="text-xs text-slate-400">Click to view gap analysis</span>
        </div>

        <div className="space-y-2.5">
          {priorityIssues.map((issue, index) => {
            const isHigh = issue.risk === 'High';
            const isResolved = issue.resolved || issue.status === 'Compliant';

            return (
              <div
                key={issue.id}
                onClick={() => onSelectRequirement(issue)}
                className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                  isResolved
                    ? 'bg-emerald-50/40 border-emerald-200'
                    : isHigh
                    ? 'bg-red-50/30 border-red-200 hover:border-red-300'
                    : 'bg-amber-50/30 border-amber-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-bold text-slate-400 w-4">
                    {index + 1}.
                  </span>
                  <span className="text-base shrink-0">
                    {isResolved ? '🟢' : isHigh ? '🔴' : '🟠'}
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-sm text-slate-900 block truncate">
                      {issue.title}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {isResolved ? 'Resolved' : issue.status} &bull; {issue.risk} Risk
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
