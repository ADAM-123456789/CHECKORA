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

export default function VisualEvidence() {
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
            <span>Computer Vision Audit</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visual Evidence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Photographic equipment verification supporting compliance assessments.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleUseDemoImage}
            className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Use Demo Image</span>
          </button>

          <label className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs">
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Image</span>
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
                  <span>Running Computer Vision Detection...</span>
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
                    <span>🧯 Fire Extinguisher</span>
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
              <span>Bounding Box Active</span>
            </span>
          </div>
        </div>

        {/* Right Column: AI Visual Analysis Results */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-base text-slate-900">
                AI Visual Evidence
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Processed
              </span>
            </div>

            <div className="space-y-4">
              {/* Detection Item 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Object Detected
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                    <span>🧯</span>
                    <span>Fire Extinguisher</span>
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Type-ABC Cylinder
                  </span>
                </div>
              </div>

              {/* Confidence Metric */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Detection Confidence
                  </p>
                  <span className="font-extrabold text-base text-emerald-600">
                    94%
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>

              {/* Result Assessment */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Assessment Result
                </p>
                <p className="font-bold text-sm text-slate-900 mt-1">
                  Required equipment appears to be present.
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Confirms physical mounting along access pathway per Section 4.1.2 requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Card */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold">Important Disclaimer</p>
                <p className="text-xs text-amber-800/90 mt-0.5 leading-relaxed">
                  "Visual evidence supports the assessment but does not independently prove legal compliance."
                </p>
                <p className="text-[11px] text-amber-700 mt-1">
                  Physical tags, hydrostatic pressure certificates, and inspection dates must still be validated via statutory paper logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
