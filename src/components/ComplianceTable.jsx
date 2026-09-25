import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Clock, 
  FileText,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ComplianceTable({ 
  requirements, 
  onSelectRequirement, 
  onNavigate 
}) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'All', label: t('filterAll'), count: requirements.length },
    { id: 'Compliant', label: t('filterCompliant'), count: requirements.filter(r => r.status === 'Compliant' || r.resolved).length },
    { id: 'Partial', label: t('filterPartial'), count: requirements.filter(r => r.status === 'Partial' && !r.resolved).length },
    { id: 'Missing', label: t('filterMissing'), count: requirements.filter(r => r.status === 'Missing' && !r.resolved).length },
    { id: 'High Risk', label: t('filterHighRisk'), count: requirements.filter(r => r.risk === 'High' && !r.resolved).length },
  ];

  const filteredRequirements = useMemo(() => {
    return requirements.filter(item => {
      // Filter tab condition
      let matchesFilter = true;
      if (activeFilter === 'Compliant') matchesFilter = item.status === 'Compliant' || item.resolved;
      else if (activeFilter === 'Partial') matchesFilter = item.status === 'Partial' && !item.resolved;
      else if (activeFilter === 'Missing') matchesFilter = item.status === 'Missing' && !item.resolved;
      else if (activeFilter === 'High Risk') matchesFilter = item.risk === 'High' && !item.resolved;

      // Search query condition
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.clause && item.clause.toLowerCase().includes(query)) ||
        (item.evidenceFound && item.evidenceFound.toLowerCase().includes(query)) ||
        (item.requirement && item.requirement.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [requirements, activeFilter, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>{t('masterRegister')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('allRequirementsTitle')}
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {t('matrixSubtitle')}
          </p>
        </div>

        <button
          onClick={() => onNavigate('chat')}
          className="px-4 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>{t('askAiAboutGaps')}</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100/70 hover:bg-slate-200 text-slate-600'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4 sm:px-6 w-12 text-center">{t('colNumber')}</th>
                <th className="py-3.5 px-4 sm:px-6">{t('colRequirement')}</th>
                <th className="py-3.5 px-4">{t('colStatus')}</th>
                <th className="py-3.5 px-4">{t('colRisk')}</th>
                <th className="py-3.5 px-4 sm:px-6">{t('colEvidence')}</th>
                <th className="py-3.5 px-4 text-right">{t('colAction')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredRequirements.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 text-xs">
                    {t('noRequirementsMatch')}
                  </td>
                </tr>
              ) : (
                filteredRequirements.map((item) => {
                  const isResolved = item.resolved;
                  const isHigh = item.risk === 'High';
                  const isMedium = item.risk === 'Medium';

                  return (
                    <tr
                      key={item.id}
                      onClick={() => onSelectRequirement(item)}
                      className="hover:bg-indigo-50/30 transition-colors cursor-pointer group"
                    >
                      {/* # Number */}
                      <td className="py-4 px-4 sm:px-6 text-center text-xs font-semibold text-slate-400">
                        {item.number}
                      </td>

                      {/* Requirement & Clause */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {item.clause}
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        {isResolved ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t('resolved')}
                          </span>
                        ) : item.status === 'Compliant' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {t('compliant')}
                          </span>
                        ) : item.status === 'Partial' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3.5 h-3.5" /> {t('partial')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                            <AlertOctagon className="w-3.5 h-3.5" /> {t('missing')}
                          </span>
                        )}
                      </td>

                      {/* Risk Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
                          isHigh 
                            ? 'bg-red-50 text-red-700 border-red-200' 
                            : isMedium
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {item.risk === 'High' ? t('highRisk') : item.risk === 'Medium' ? t('mediumRisk') : t('lowRisk')}
                        </span>
                      </td>

                      {/* Evidence Summary */}
                      <td className="py-4 px-4 sm:px-6 max-w-xs sm:max-w-md">
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.evidenceFound}
                        </p>
                      </td>

                      {/* Chevron Action */}
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                          <span className="hidden sm:inline">{t('viewGapAnalysis')}</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
