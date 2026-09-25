import React from 'react';
import { 
  LayoutDashboard, 
  ListChecks, 
  MessageSquare, 
  Camera, 
  FileText 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Sidebar({ currentView, onNavigate, companyName = "Apex Manufacturing Pvt. Ltd." }) {
  const { t } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: t('navDashboard'), icon: LayoutDashboard },
    { id: 'requirements', label: t('navRequirements'), icon: ListChecks },
    { id: 'chat', label: t('navChat'), icon: MessageSquare },
    { id: 'visual-evidence', label: t('navVisualEvidence'), icon: Camera },
    { id: 'report', label: t('navReport'), icon: FileText }
  ];

  return (
    <aside className="no-print w-60 bg-white border-r border-slate-200 flex flex-col shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Navigation Links */}
      <div className="p-4 flex-1 space-y-1">
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {t('navigation')}
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Footer Demo Company */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/60">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {t('demoCompany')}
        </div>
        <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">
          {companyName}
        </div>
      </div>
    </aside>
  );
}
