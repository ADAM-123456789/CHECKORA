import React, { useState, useRef } from 'react';
import { 
  FileText, 
  ClipboardCheck, 
  Camera, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  X,
  FileCheck,
  Download
} from 'lucide-react';
import { DEMO_FILES } from '../data/complianceData';

export default function UploadPage({ onStartAnalysis, onBackToHome }) {
  const [rulesFile, setRulesFile] = useState(null);
  const [reportFile, setReportFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDemoLoaded, setIsDemoLoaded] = useState(false);

  const rulesInputRef = useRef(null);
  const reportInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleRulesUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setRulesFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        isCustom: true
      });
      setIsDemoLoaded(false);
    }
  };

  const handleReportUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setReportFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        isCustom: true
      });
      setIsDemoLoaded(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile({
        name: file.name,
        size: `${(file.size / 1024).toFixed(0)} KB`,
        isCustom: true
      });
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setIsDemoLoaded(false);
    }
  };

  const handleLoadDemo = () => {
    setRulesFile(DEMO_FILES.rules);
    setReportFile(DEMO_FILES.report);
    setImageFile(DEMO_FILES.image);
    setImagePreview("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80");
    setIsDemoLoaded(true);
  };

  const canAnalyze = rulesFile && reportFile;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Start a Compliance Check
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Upload your rules and company evidence. Checkora will compare them automatically.
        </p>

        {/* Action Buttons: 1-Click Fill + Download Real Test PDFs */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleLoadDemo}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-2 cursor-pointer ${
              isDemoLoaded 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>{isDemoLoaded ? '✓ Demo Documents Loaded' : 'Use Demo Documents'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            <a
              href="/demo_documents/Industrial_Workplace_Safety_Standard_2026.pdf"
              download="Industrial_Workplace_Safety_Standard_2026.pdf"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 transition border border-slate-200"
              title="Download test regulation PDF"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Rules PDF</span>
            </a>

            <a
              href="/demo_documents/Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf"
              download="Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 transition border border-slate-200"
              title="Download test company report PDF"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Report PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Upload Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1: Rules / Regulation */}
        <div className={`relative bg-white rounded-2xl p-6 border transition shadow-xs flex flex-col justify-between ${
          rulesFile ? 'border-emerald-300 bg-emerald-50/10' : 'border-slate-200'
        }`}>
          <div>
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-bold text-base text-slate-900 mb-1">
              Rules / Regulation
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Upload the document containing the requirements.
            </p>
          </div>

          <div>
            <input
              type="file"
              ref={rulesInputRef}
              accept=".pdf"
              onChange={handleRulesUpload}
              className="hidden"
            />

            {rulesFile ? (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate" title={rulesFile.name}>
                      {rulesFile.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{rulesFile.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => setRulesFile(null)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => rulesInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Choose PDF</span>
              </button>
            )}
          </div>
        </div>

        {/* Card 2: Company Report */}
        <div className={`relative bg-white rounded-2xl p-6 border transition shadow-xs flex flex-col justify-between ${
          reportFile ? 'border-emerald-300 bg-emerald-50/10' : 'border-slate-200'
        }`}>
          <div>
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-base text-slate-900 mb-1">
              Company Report
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Upload inspection reports, checklists, policies or records.
            </p>
          </div>

          <div>
            <input
              type="file"
              ref={reportInputRef}
              accept=".pdf"
              onChange={handleReportUpload}
              className="hidden"
            />

            {reportFile ? (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate" title={reportFile.name}>
                      {reportFile.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{reportFile.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => setReportFile(null)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => reportInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Choose PDF</span>
              </button>
            )}
          </div>
        </div>

        {/* Card 3: Visual Evidence */}
        <div className={`relative bg-white rounded-2xl p-6 border transition shadow-xs flex flex-col justify-between ${
          imageFile ? 'border-emerald-300 bg-emerald-50/10' : 'border-slate-200'
        }`}>
          <div>
            <div className="text-3xl mb-3">📸</div>
            <h3 className="font-bold text-base text-slate-900 mb-1">
              Visual Evidence
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Optional — upload a photo as supporting evidence.
            </p>
          </div>

          <div>
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {imageFile ? (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  {imagePreview ? (
                    <img 
                      src={imagePreview} 
                      alt="Thumbnail" 
                      className="w-8 h-8 rounded object-cover border border-slate-200" 
                    />
                  ) : (
                    <Camera className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate" title={imageFile.name}>
                      {imageFile.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{imageFile.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => imageInputRef.current?.click()}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Image</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center">
        <button
          disabled={!canAnalyze}
          onClick={() => onStartAnalysis({ rulesFile, reportFile, imageFile, imagePreview })}
          className={`px-10 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-md ${
            canAnalyze
              ? 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white cursor-pointer shadow-indigo-600/25'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
          }`}
        >
          <span>Analyze with Checkora</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
