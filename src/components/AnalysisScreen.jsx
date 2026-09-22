import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Loader2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  FileSearch,
  Zap
} from 'lucide-react';

const ANALYSIS_STEPS = [
  { id: 1, label: "Reading regulations" },
  { id: 2, label: "Extracting requirements" },
  { id: 3, label: "Reading company evidence" },
  { id: 4, label: "Comparing requirements" },
  { id: 5, label: "Identifying gaps" },
  { id: 6, label: "Assessing risk" },
  { id: 7, label: "Generating corrective actions" }
];

export default function AnalysisScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Progress each step every 600ms
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < ANALYSIS_STEPS.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsCompleted(true);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  // When all steps are done, auto-redirect to dashboard after 1.2 seconds
  useEffect(() => {
    if (isCompleted) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, onComplete]);

  return (
    <div className="max-w-xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      {/* Central Card */}
      <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 rounded-full" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-4 glow-indigo">
            {isCompleted ? (
              <ShieldCheck className="w-9 h-9 text-emerald-600 transition-all scale-110" />
            ) : (
              <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
            )}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {isCompleted ? 'Analysis Complete' : 'Analyzing your compliance data...'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            {isCompleted 
              ? 'Compliance baseline established. Loading your executive overview...'
              : 'Cross-referencing statutory rules against documented operational evidence.'}
          </p>
        </div>

        {/* 7 Animated Steps */}
        <div className="space-y-3.5 my-8">
          {ANALYSIS_STEPS.map((step, idx) => {
            const isDone = currentStep > idx;
            const isCurrent = currentStep === idx;

            return (
              <div
                key={step.id}
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  isDone
                    ? 'bg-emerald-50/60 border border-emerald-200/70 text-slate-800'
                    : isCurrent
                    ? 'bg-indigo-50/80 border border-indigo-200 text-indigo-950 font-semibold shadow-xs scale-[1.01]'
                    : 'opacity-40 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-in zoom-in-50 duration-200" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    )}
                  </div>

                  <span className="text-sm font-medium">
                    {step.label}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-slate-400">
                  {isDone ? '✓' : isCurrent ? 'in progress...' : ''}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-6">
          <div 
            className={`h-full transition-all duration-500 ${isCompleted ? 'bg-emerald-500' : 'bg-indigo-600'}`}
            style={{ width: `${Math.min(100, Math.round((currentStep / ANALYSIS_STEPS.length) * 100))}%` }}
          />
        </div>

        {/* Completion or Skip */}
        <div className="flex justify-center">
          {isCompleted ? (
            <button
              onClick={onComplete}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition"
            >
              <Zap className="w-3 h-3 text-amber-500" />
              <span>Skip animation</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
