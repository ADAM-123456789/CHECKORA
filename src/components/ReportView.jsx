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
import { useLanguage } from '../context/LanguageContext';

export default function ReportView({ 
  companyInfo, 
  requirements, 
  onBack 
}) {
  const { t } = useLanguage();

  const total = requirements.length;
  const compliantCount = requirements.filter(r => r.status === 'Compliant' || r.resolved).length;
  const partialCount = requirements.filter(r => r.status === 'Partial' && !r.resolved).length;
  const missingCount = requirements.filter(r => r.status === 'Missing' && !r.resolved).length;

  const highRiskCount = requirements.filter(r => r.risk === 'High' && r.status !== 'Compliant' && !r.resolved).length;
  const mediumRiskCount = requirements.filter(r => r.risk === 'Medium' && r.status !== 'Compliant' && !r.resolved).length;
  const lowRiskCount = requirements.filter(r => (r.risk === 'Low' || r.status === 'Compliant' || r.resolved)).length;

  const scorePercent = companyInfo?.complianceScore !== undefined
    ? companyInfo.complianceScore
    : Math.round(((compliantCount * 100 + partialCount * 50) / (total || 1)));

  // Dynamic high-priority critical items
  const criticalItems = requirements
    .filter(r => !r.resolved && r.risk === 'High')
    .slice(0, 3);
  const displayCritical = criticalItems.length > 0 
    ? criticalItems 
    : requirements.filter(r => !r.resolved && r.status !== 'Compliant').slice(0, 3);

  // Dynamic recommended actions
  const actionableItems = requirements
    .filter(r => !r.resolved && r.status !== 'Compliant')
    .slice(0, 3);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Action Bar (Hidden on print) */}
      <div className="no-print flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('backToDashboard')}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t('printReport')}</span>
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
              <span className="text-xs font-semibold text-slate-400">| {t('complianceIntelligence')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              {t('reportTitle')}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {t('statutoryBenchmark')}: {companyInfo?.standard || 'Statutory Workplace Safety Standard'}
            </p>
          </div>

          <div className="text-left sm:text-right space-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('auditedOrganization')}
            </div>
            <div className="font-extrabold text-slate-900 text-base">
              {companyInfo?.name || 'Enterprise Facility'}
            </div>
            <div className="text-xs text-slate-500">
              {t('facilityLabel')}: {companyInfo?.location || 'Plant Operational Facility'}
            </div>
            <div className="text-xs text-slate-500">
              {t('auditDateLabel')}: {companyInfo?.auditDate || 'Current Period'} &bull; <span className="font-semibold text-emerald-600">{t('officialDemo')}</span>
            </div>
          </div>
        </div>

        {/* Executive Score & KPI Matrix */}
        <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
              {t('complianceScore')}
            </span>
            <span className="text-3xl font-black text-indigo-950 mt-1 block">
              {scorePercent}%
            </span>
            <span className="text-[10px] text-indigo-700/80">
              {compliantCount + partialCount} / {total} {t('compliant')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              {t('totalRequirements')}
            </span>
            <span className="text-3xl font-black text-slate-900 mt-1 block">
              {total}
            </span>
            <span className="text-[10px] text-slate-400">
              {t('statutoryBenchmark')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block">
              {t('highRisk')}
            </span>
            <span className="text-3xl font-black text-red-950 mt-1 block">
              {highRiskCount}
            </span>
            <span className="text-[10px] text-red-600">
              {t('priorityDesc')}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
              {t('compliant')}
            </span>
            <span className="text-3xl font-black text-emerald-950 mt-1 block">
              {compliantCount}
            </span>
            <span className="text-[10px] text-emerald-600">
              {t('resolved')}
            </span>
          </div>
        </div>

        {/* Summary Breakdown Grid */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Status Breakdown */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40">
            <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-slate-500" />
              {t('requirementsBreakdown')}
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-emerald-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> {t('compliant')}
                </span>
                <span className="font-extrabold text-slate-800">{compliantCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-amber-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> {t('partial')}
                </span>
                <span className="font-extrabold text-slate-800">{partialCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-red-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> {t('missing')}
                </span>
                <span className="font-extrabold text-slate-800">{missingCount}</span>
              </div>
            </div>
          </div>

          {/* Risk Summary */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/40">
            <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-slate-500" />
              {t('riskSummary')}
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-red-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> {t('highRisk')}
                </span>
                <span className="font-extrabold text-slate-800">{highRiskCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-amber-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> {t('mediumRisk')}
                </span>
                <span className="font-extrabold text-slate-800">{mediumRiskCount}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-100">
                <span className="font-semibold text-emerald-700 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> {t('lowRisk')}
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
            {t('criticalLiabilitiesTitle')}
          </h3>
          <div className="space-y-3">
            {displayCritical.length === 0 ? (
              <p className="text-xs text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                ✓ No high-risk compliance liabilities detected.
              </p>
            ) : (
              displayCritical.map((item, idx) => (
                <div key={item.id} className="p-4 rounded-xl border border-red-200 bg-red-50/30">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">
                      {idx + 1}. {item.title}
                    </span>
                    <span className="text-xs font-bold text-red-700 px-2 py-0.5 rounded bg-red-100">
                      {item.status === 'Missing' ? t('missing') : t('partial')} &bull; {item.risk === 'High' ? t('highRisk') : t('mediumRisk')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {t('theRequirement')}: {item.requirement}
                  </p>
                  <p className="text-xs text-red-800/90 font-medium mt-1">
                    {t('evidenceFound')}: {item.evidenceFound}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mb-8">
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {t('remediationRoadmapTitle')}
          </h3>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            {actionableItems.length === 0 ? (
              <p className="text-slate-500">All compliance items have been satisfactorily resolved.</p>
            ) : (
              actionableItems.map((item, idx) => (
                <div key={item.id} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-bold text-slate-900">{item.title}:</span>
                    <p className="text-slate-600 mt-0.5">
                      {item.recommendedAction}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Auditor Sign-Off Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p className="font-bold text-slate-800">{t('generatedBy')}</p>
            <p>Pipeline: Rule → Evidence → Gap → Risk → Action</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-semibold text-slate-700">{t('leadAuditorLabel')}: Checkora AI</p>
            <p>{t('officialDemo')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
