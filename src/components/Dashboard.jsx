import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  AlertOctagon, 
  ChevronRight, 
  FileText 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Dashboard({ 
  companyInfo, 
  requirements, 
  onSelectRequirement, 
  onNavigate 
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

  // Dynamic priority issues sorted by risk severity
  const activeNonCompliant = requirements.filter(r => !r.resolved && r.status !== 'Compliant');
  const sortedByPriority = [...activeNonCompliant].sort((a, b) => {
    const scoreA = (a.risk === 'High' ? 10 : a.risk === 'Medium' ? 5 : 1) + (a.status === 'Missing' ? 5 : 0);
    const scoreB = (b.risk === 'High' ? 10 : b.risk === 'Medium' ? 5 : 1) + (b.status === 'Missing' ? 5 : 0);
    return scoreB - scoreA;
  });
  const priorityIssues = sortedByPriority.length > 0 ? sortedByPriority.slice(0, 4) : requirements.slice(0, 4);

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {t('complianceOverview')}
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            {t('companyLabel')}: <span className="font-bold text-slate-800">{companyInfo?.name || 'Enterprise Facility'}</span>
          </p>
        </div>

        <button
          onClick={() => onNavigate('report')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>{t('generateReport')}</span>
        </button>
      </div>

      {/* Large Score Card & Requirements Breakdown */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs text-center flex flex-col items-center justify-center">
        <div className="text-6xl font-black text-indigo-600 tracking-tight">
          {scorePercent}%
        </div>
        <div className="text-base font-bold text-slate-900 mt-1">
          {t('statutorySatisfied')}
        </div>
        <div className="text-xs text-slate-500 mt-2 font-medium">
          {total} {t('totalRequirements')} &bull; {compliantCount} {t('compliant')} &bull; {partialCount} {t('partial')} &bull; {missingCount} {t('missing')}
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
                {t('compliant')}
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
                {t('partial')}
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
                {t('missing')}
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300" />
        </div>
      </div>

      {/* Risk Summary */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4">
          {t('riskSummary')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
          <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2.5">
            <span className="text-base">🔴</span>
            <span>{highRiskCount} {t('highRisk')}</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-2.5">
            <span className="text-base">🟠</span>
            <span>{mediumRiskCount} {t('mediumRisk')}</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-2.5">
            <span className="text-base">🟢</span>
            <span>{lowRiskCount} {t('lowRisk')}</span>
          </div>
        </div>
      </div>

      {/* Priority Issues */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {t('priorityIssues')}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {t('priorityDesc')}
            </p>
          </div>
          <span className="text-xs text-indigo-600 font-semibold cursor-pointer" onClick={() => onNavigate('requirements')}>
            {t('viewAllRequirements')} →
          </span>
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
                      {isResolved ? t('resolved') : (issue.status === 'Compliant' ? t('compliant') : issue.status === 'Partial' ? t('partial') : t('missing'))} &bull; {issue.risk === 'High' ? t('highRisk') : issue.risk === 'Medium' ? t('mediumRisk') : t('lowRisk')}
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
