import React from 'react';
import { 
  Printer, 
  Download, 
  ArrowLeft, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  Calendar,
  FileText,
  AlertOctagon,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ReportView({ 
  companyInfo, 
  requirements, 
  onBack 
}) {
  const total = requirements.length;
  const compliantCount = requirements.filter(r => r.status === 'Compliant').length;
  const partialCount = requirements.filter(r => r.status === 'Partial').length;
  const missingCount = requirements.filter(r => r.status === 'Missing').length;

  const highRiskCount = requirements.filter(r => r.risk === 'High' && r.status !== 'Compliant').length;
  const mediumRiskCount = requirements.filter(r => r.risk === 'Medium' && r.status !== 'Compliant').length;
  const lowRiskCount = requirements.filter(r => r.risk === 'Low' || r.status === 'Compliant').length;

  const scorePercent = Math.round(((compliantCount + partialCount) / total) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Action Bar (Hidden on print) */}
      <div className="no-print flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold shadow-md transition flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Report Document Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md text-slate-800 print:border-none print:shadow-none print:p-0">
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-black text-xl tracking-tight text-slate-900">
                CHECKORA
              </span>
              <span className="text-xs font-semibold text-slate-400">| Compliance Intelligence</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              CHECKORA COMPLIANCE REPORT
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Statutory Benchmark: {companyInfo.standard}
            </p>
          </div>

          <div className="text-left sm:text-right space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Audited Organization
            </div>
            <div className="font-extrabold text-slate-900 text-base">
              {companyInfo.name}
            </div>
            <div className="text-xs text-slate-500">
              Facility: {companyInfo.location}
            </div>
            <div className="text-xs text-slate-500">
              Audit Date: March 2026 &bull; Status: <span className="font-semibold text-emerald-600">Official Demo</span>
            </div>
          </div>
        </div>

        {/* Executive Score & KPI Matrix */}
        <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
              Compliance Score
            </span>
            <span className="text-3xl font-black text-indigo-950 mt-1 block">
              {scorePercent}%
            </span>
            <span className="text-[10px] text-indigo-700/80">
              {compliantCount + partialCount} of {total} requirements met
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Total Requirements
            </span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              {total}
            </span>
            <span className="text-[10px] text-slate-400">
              Scope of Standard 2026
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block">
              High Risk Findings
            </span>
            <span className="text-3xl font-black text-red-950 mt-1 block">
              {highRiskCount}
            </span>
            <span className="text-[10px] text-red-600">
              Immediate life-safety liabilities
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
              Compliant Clauses
            </span>
            <span className="text-3xl font-black text-emerald-950 mt-1 block">
              {compliantCount}
            </span>
            <span className="text-[10px] text-emerald-600">
              Zero non-conformities
            </span>
          </div>
        </div>

        {/* Summary Breakdown Grid */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Status Breakdown */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40">
            <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
              Requirements Classification
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-emerald-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Compliant
                </span>
                <span className="font-extrabold text-slate-800">{compliantCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-amber-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Partial
                </span>
                <span className="font-extrabold text-slate-800">{partialCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-red-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Missing
                </span>
                <span className="font-extrabold text-slate-800">{missingCount}</span>
              </div>
            </div>
          </div>

          {/* Risk Summary */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40">
            <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-slate-500" />
              Risk Severity Profile
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-red-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> High Risk
                </span>
                <span className="font-extrabold text-slate-800">{highRiskCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-amber-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Medium Risk
                </span>
                <span className="font-extrabold text-slate-800">{mediumRiskCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-emerald-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Low Risk
                </span>
                <span className="font-extrabold text-slate-800">{lowRiskCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Issues Section */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <AlertOctagon className="w-4 h-4 text-red-600" />
            Critical Issues (High Priority Non-Conformities)
          </h3>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">
                  1. Emergency Exit Signage
                </span>
                <span className="text-xs font-bold text-red-700 px-2 py-0.5 rounded bg-red-100">
                  Missing &bull; High Risk
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Requirement: Emergency exits must be clearly marked and easily visible.
              </p>
              <p className="text-xs text-red-800/90 font-medium mt-1">
                Finding: No supporting evidence found in plant documentation.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">
                  2. Fire Extinguisher Inspection
                </span>
                <span className="text-xs font-bold text-red-700 px-2 py-0.5 rounded bg-red-100">
                  Missing &bull; High Risk
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Requirement: Semi-annual hydrostatic inspection and vendor recertification tags.
              </p>
              <p className="text-xs text-red-800/90 font-medium mt-1">
                Finding: Last inspection was more than 6 months ago (expired August 2025 tags).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">
                  3. Emergency Drill
                </span>
                <span className="text-xs font-bold text-red-700 px-2 py-0.5 rounded bg-red-100">
                  Missing &bull; High Risk
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Requirement: Documented whole-facility evacuation drill every 12 months.
              </p>
              <p className="text-xs text-red-800/90 font-medium mt-1">
                Finding: Zero drills conducted in the preceding 12 calendar months.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Recommended Corrective Actions
          </h3>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </span>
              <div>
                <span className="font-bold text-slate-900">Verify and install emergency exit signage:</span>
                <p className="text-slate-600 mt-0.5">
                  Procure self-illuminated or battery-backed signs for all shop floor egress doors and update electrical walkthrough checklist.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </span>
              <div>
                <span className="font-bold text-slate-900">Schedule fire extinguisher inspection:</span>
                <p className="text-slate-600 mt-0.5">
                  Book immediate vendor recertification for all 14 cylinder units across Shop Floors A & B with newly stamped collar tags.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </span>
              <div>
                <span className="font-bold text-slate-900">Conduct emergency evacuation drill:</span>
                <p className="text-slate-600 mt-0.5">
                  Execute plant-wide simulation within 14 calendar days, timing egress and recording roll call muster sheets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Auditor Sign-Off Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p className="font-bold text-slate-800">Generated by CHECKORA AI Compliance Assistant</p>
            <p>Traceability engine: Rule → Evidence → Gap → Risk → Action</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-semibold text-slate-700">Digital Audit Hash: #CK-2026-APX-8419</p>
            <p>Certified for Hackathon Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
