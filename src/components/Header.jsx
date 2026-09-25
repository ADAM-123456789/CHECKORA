import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Sparkles, Building2, RotateCcw, FileText, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ currentView, onNavigate, onReset, companyName = "Apex Manufacturing Pvt. Ltd." }) {
  const { t, lang, setLang, currentLang, LANGUAGES } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

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
                {t('prototype')}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium -mt-0.5">
              {t('tagline')} &bull; <span className="text-slate-400">{t('subtitle')}</span>
            </p>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* ── LANGUAGE SWITCHER ── */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(prev => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition-all shadow-sm"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="text-sm">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-44 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  {t('selectLanguage')}
                </div>
                {LANGUAGES.map(language => (
                  <button
                    key={language.code}
                    onClick={() => { setLang(language.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium transition-colors text-left ${
                      lang === language.code
                        ? 'bg-indigo-50 text-indigo-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base">{language.flag}</span>
                    <span>{language.label}</span>
                    {lang === language.code && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Company Pill */}
          {currentView !== 'landing' && currentView !== 'upload' && currentView !== 'analyzing' && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-xs text-slate-700 font-medium">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span className="truncate max-w-[160px]">{companyName}</span>
            </div>
          )}

          {/* Analysis Ready Badge */}
          {currentView !== 'landing' && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="hidden sm:inline">{t('analysisReady')}</span>
            </div>
          )}

          {/* Reset Demo Button */}
          {currentView !== 'landing' && (
            <button
              onClick={onReset}
              title="Reset Demo"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition text-xs font-medium flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t('resetDemo')}</span>
            </button>
          )}

          {/* Launch Demo / Compliance Report Button */}
          {currentView === 'landing' ? (
            <button
              onClick={() => onNavigate('upload')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('launchDemo')}</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('report')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('complianceReport')}</span>
              <span className="sm:hidden">Report</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
