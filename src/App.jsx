import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import UploadPage from './components/UploadPage';
import AnalysisScreen from './components/AnalysisScreen';
import Dashboard from './components/Dashboard';
import GapAnalysisModal from './components/GapAnalysisModal';
import ComplianceTable from './components/ComplianceTable';
import AiChat from './components/AiChat';
import VisualEvidence from './components/VisualEvidence';
import ReportView from './components/ReportView';
import { COMPANY_INFO } from './data/complianceData';
import { useLanguage } from './context/LanguageContext';
import { getLocalizedRequirements, getLocalizedCompanyInfo } from './data/localizedRequirements';

export default function App() {
  const { lang } = useLanguage();
  const [currentView, setCurrentView] = useState('landing');
  const [previousView, setPreviousView] = useState('dashboard');
  const [resolvedMap, setResolvedMap] = useState({});
  const [isCustomUpload, setIsCustomUpload] = useState(false);

  const [companyInfo, setCompanyInfo] = useState(() => ({
    ...COMPANY_INFO,
    ...getLocalizedCompanyInfo(lang)
  }));
  const [requirements, setRequirements] = useState(() => getLocalizedRequirements(lang, {}));
  const [selectedRequirement, setSelectedRequirement] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);

  // Automatically re-localize requirements and company info when language changes
  useEffect(() => {
    if (!isCustomUpload) {
      const nextReqs = getLocalizedRequirements(lang, resolvedMap);
      setRequirements(nextReqs);

      const locComp = getLocalizedCompanyInfo(lang);
      setCompanyInfo(prev => ({
        ...prev,
        ...locComp
      }));

      // Also update selectedRequirement if gap-detail modal is open
      setSelectedRequirement(prev => {
        if (!prev) return null;
        return nextReqs.find(r => r.id === prev.id) || prev;
      });
    }
  }, [lang, resolvedMap, isCustomUpload]);

  // Navigate between views smoothly
  const handleNavigate = (viewId) => {
    if (currentView !== 'gap-detail') {
      setPreviousView(currentView);
    }
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start analysis trigger from upload screen
  const handleStartAnalysis = (files) => {
    setUploadedData(files);
    const isCustom = Boolean(
      files && !files.isDemo && (files.rulesFile?.isCustom || files.reportFile?.isCustom)
    );
    setIsCustomUpload(isCustom);
    setCurrentView('analyzing');
  };

  // Analysis complete -> update requirements & companyInfo
  const handleAnalysisComplete = (analyzedResult) => {
    if (isCustomUpload && analyzedResult?.requirements && analyzedResult.requirements.length > 0) {
      setRequirements(analyzedResult.requirements);
      if (analyzedResult?.companyInfo) {
        setCompanyInfo(analyzedResult.companyInfo);
      }
    } else {
      // Demo analysis uses localized requirements in the current language
      setRequirements(getLocalizedRequirements(lang, resolvedMap));
      const locComp = getLocalizedCompanyInfo(lang);
      setCompanyInfo(prev => ({
        ...COMPANY_INFO,
        ...(analyzedResult?.companyInfo || {}),
        ...locComp
      }));
    }
    setCurrentView('dashboard');
  };

  // Select requirement to open Gap Analysis
  const handleSelectRequirement = (req) => {
    setSelectedRequirement(req);
    setPreviousView(currentView);
    setCurrentView('gap-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle "Mark as Resolved" for demo
  const handleToggleResolve = (reqId) => {
    setResolvedMap(prev => ({
      ...prev,
      [reqId]: !prev[reqId]
    }));

    if (isCustomUpload) {
      setRequirements((prev) =>
        prev.map((r) => {
          if (r.id === reqId) {
            const nextResolved = !r.resolved;
            return {
              ...r,
              resolved: nextResolved,
              status: nextResolved ? 'Compliant' : (r.number === 2 || r.number === 3 || r.number === 8 || r.number === 12 ? 'Missing' : 'Partial')
            };
          }
          return r;
        })
      );

      setSelectedRequirement((prev) => {
        if (prev && prev.id === reqId) {
          const nextResolved = !prev.resolved;
          return {
            ...prev,
            resolved: nextResolved,
            status: nextResolved ? 'Compliant' : (prev.number === 2 || prev.number === 3 || prev.number === 8 || prev.number === 12 ? 'Missing' : 'Partial')
          };
        }
        return prev;
      });
    }
  };

  // Reset demo back to initial state
  const handleResetDemo = () => {
    setIsCustomUpload(false);
    setResolvedMap({});
    setRequirements(getLocalizedRequirements(lang, {}));
    setCompanyInfo({
      ...COMPANY_INFO,
      ...getLocalizedCompanyInfo(lang)
    });
    setSelectedRequirement(null);
    setCurrentView('dashboard');
  };

  // Determine if sidebar should be shown
  const showSidebar = [
    'dashboard',
    'requirements',
    'chat',
    'visual-evidence',
    'report',
    'gap-detail'
  ].includes(currentView);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Universal Header */}
      <Header 
        currentView={currentView}
        onNavigate={handleNavigate}
        onReset={handleResetDemo}
        companyName={companyInfo.name}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex w-full">
        {/* Persistent Sidebar in Application Mode */}
        {showSidebar && (
          <Sidebar 
            currentView={currentView === 'gap-detail' ? previousView : currentView}
            onNavigate={handleNavigate}
            companyName={companyInfo.name}
          />
        )}

        {/* Dynamic Page Views */}
        <main className={`flex-1 min-w-0 transition-all ${
          showSidebar ? 'p-4 sm:p-6 lg:p-8' : ''
        }`}>
          {currentView === 'landing' && (
            <LandingPage 
              onStartCheck={() => handleNavigate('upload')}
            />
          )}

          {currentView === 'upload' && (
            <UploadPage 
              onStartAnalysis={handleStartAnalysis}
              onBackToHome={() => handleNavigate('landing')}
            />
          )}

          {currentView === 'analyzing' && (
            <AnalysisScreen 
              onComplete={handleAnalysisComplete}
              uploadedData={uploadedData}
            />
          )}

          {currentView === 'dashboard' && (
            <Dashboard 
              companyInfo={companyInfo}
              requirements={requirements}
              onSelectRequirement={handleSelectRequirement}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'gap-detail' && (
            <GapAnalysisModal 
              requirement={selectedRequirement}
              onClose={() => handleNavigate(previousView === 'gap-detail' ? 'dashboard' : previousView)}
              onToggleResolve={handleToggleResolve}
            />
          )}

          {currentView === 'requirements' && (
            <ComplianceTable 
              requirements={requirements}
              onSelectRequirement={handleSelectRequirement}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'chat' && (
            <AiChat 
              requirements={requirements}
              companyInfo={companyInfo}
            />
          )}

          {currentView === 'visual-evidence' && (
            <VisualEvidence />
          )}

          {currentView === 'report' && (
            <ReportView 
              companyInfo={companyInfo}
              requirements={requirements}
              onBack={() => handleNavigate('dashboard')}
            />
          )}
        </main>
      </div>
    </div>
  );
}
