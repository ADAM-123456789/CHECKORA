import React, { useState } from 'react';
import { 
  Camera, 
  Upload, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Scan, 
  Info,
  Maximize2,
  RefreshCw,
  Eye
} from 'lucide-react';
import { DEMO_FILES } from '../data/complianceData';
import { useLanguage } from '../context/LanguageContext';

export default function VisualEvidence() {
  const { t } = useLanguage();
  const [imageSrc, setImageSrc] = useState(DEMO_FILES.image.url);
  const [imageName, setImageName] = useState(DEMO_FILES.image.name);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  const handleUseDemoImage = () => {
    setIsScanning(true);
    setScanComplete(false);
    setImageSrc("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80");
    setImageName(DEMO_FILES.image.name);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 750);
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      setIsScanning(true);
      setScanComplete(false);

      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setTimeout(() => {
          setIsScanning(false);
          setScanComplete(true);
        }, 900);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-bold mb-1">
            <Camera className="w-3.5 h-3.5" />
            <span>{t('visionBadge')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('visualEvidenceTitle')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {t('visualEvidenceSubtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleUseDemoImage}
            className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('useDemoImage')}</span>
          </button>

          <label className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
            <Upload className="w-3.5 h-3.5" />
            <span>{t('uploadImage')}</span>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleCustomUpload} 
              className="hidden" 
            />
          </label>
        </div>
      </div>

      {/* Main Vision Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Image with Bounding Box Overlay */}
        <div className="md:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between">
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 flex items-center justify-center border border-slate-200">
            <img
              src={imageSrc}
              alt="Audited Facility Area"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isScanning ? 'opacity-50 blur-[1px]' : 'opacity-100'
              }`}
            />

            {/* Scanning Line Animation */}
            {isScanning && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent absolute top-1/2 -translate-y-1/2 animate-pulse shadow-lg shadow-amber-500/50" />
                <div className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{t('scanningVisual')}</span>
                </div>
              </div>
            )}

            {/* AI Bounding Box Overlay */}
            {scanComplete && !isScanning && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Detected Fire Extinguisher Box */}
                <div 
                  className="absolute border-2 border-emerald-400 rounded-lg bg-emerald-500/10 shadow-lg shadow-emerald-500/20 animate-in fade-in zoom-in-95 duration-500"
                  style={{
                    top: '28%',
                    left: '32%',
                    width: '38%',
                    height: '52%'
                  }}
                >
                  {/* Floating Tag */}
                  <div className="absolute -top-7 left-0 bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <span>🧯 {t('fireExtinguisher')}</span>
                    <span className="bg-emerald-700 px-1 py-0.2 rounded text-[9px]">94%</span>
                  </div>

                  {/* Corner Reticles */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-300" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-300" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-300" />
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="truncate max-w-[200px]">{imageName}</span>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('objectVerification')}</span>
            </span>
          </div>
        </div>

        {/* Right Column: AI Visual Analysis Results */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-base text-slate-900">
                {t('objectVerification')}
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {t('statusInspected')}
              </span>
            </div>

            <div className="space-y-4">
              {/* Detection Item 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t('detectedObject')}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                    <span>🧯</span>
                    <span>{t('fireExtinguisher')}</span>
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Type-ABC Cylinder
                  </span>
                </div>
              </div>

              {/* Confidence & Properties */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('confidence')}
                  </span>
                  <span className="text-lg font-black text-emerald-600 mt-0.5 block">
                    94.2%
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('status')}
                  </span>
                  <span className="text-xs font-bold text-slate-700 mt-1 block">
                    {t('compliant')}
                  </span>
                </div>
              </div>

              {/* Verification Checklist */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t('inspectionTagValid')}</span>
                  </span>
                  <span className="font-bold text-emerald-600">✓ Verified</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t('mountingHeightVerified')}</span>
                  </span>
                  <span className="font-bold text-emerald-600">✓ 1.2m AG</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pressure Gauge Reading</span>
                  </span>
                  <span className="font-bold text-emerald-600">✓ Green Zone</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>{t('visionModelTag')}</span>
              <span>Inference: 42ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
