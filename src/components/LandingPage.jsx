import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LandingPage({ onStartCheck }) {
  const { t } = useLanguage();

  const steps = [
    { emoji: '📄', key: 'step1', descKey: 'step1desc' },
    { emoji: '🤖', key: 'step2', descKey: 'step2desc' },
    { emoji: '⚠️', key: 'step3', descKey: 'step3desc' },
    { emoji: '🛠️', key: 'step4', descKey: 'step4desc' },
  ];

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Brand Name & Tagline */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            CHECKORA
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-indigo-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          {t('landingSubtitle')}
        </p>

        {/* Visual Pipeline */}
        <div className="py-6 px-4 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-800">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
              📄 {t('step1')}
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              🤖 {t('step2')}
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700">
              ⚠️ {t('step3')}
            </span>
            <span className="text-slate-400">→</span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
              🛠️ {t('step4')}
            </span>
          </div>
        </div>

        {/* Step Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs">
              <div className="text-xl mb-1">{step.emoji}</div>
              <div className="text-xs font-bold text-slate-800">{t(step.key)}</div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{t(step.descKey)}</div>
            </div>
          ))}
        </div>

        {/* Main CTA Button */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            onClick={onStartCheck}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>{t('startCheck')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <p className="text-xs text-slate-500 font-medium">
            {t('tagline')}
          </p>
        </div>
      </div>
    </div>
  );
}
