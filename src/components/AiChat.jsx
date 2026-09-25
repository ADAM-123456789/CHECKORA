import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, HelpCircle } from 'lucide-react';
import { AI_SUGGESTIONS } from '../data/complianceData';
import { useLanguage } from '../context/LanguageContext';

export default function AiChat({ requirements = [], companyInfo = {} }) {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: t('chatWelcome'),
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendPrompt = async (promptText) => {
    if (!promptText.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    let aiResponseText = "";
    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: promptText,
          requirements: requirements,
          companyInfo: companyInfo
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          aiResponseText = data.reply;
        }
      }
    } catch (err) {
      console.warn("FastAPI chat unavailable, using local intelligence engine:", err);
    }

    // Fallback if backend didn't provide a reply
    if (!aiResponseText) {
      const lower = promptText.toLowerCase();
      const matchedSuggestion = AI_SUGGESTIONS.find(s => 
        lower.includes(s.question.toLowerCase().replace('?', '')) ||
        s.question.toLowerCase().includes(lower.replace('?', ''))
      );

      if (matchedSuggestion) {
        aiResponseText = matchedSuggestion.answer;
      } else if (lower.includes('fix first') || lower.includes('priority')) {
        aiResponseText = `Based on the risk analysis for ${companyInfo?.name || 'the facility'}, the highest-priority issues are emergency-exit signage, fire-extinguisher inspection, and the annual emergency evacuation drill. These require immediate physical remediation.`;
      } else if (lower.includes('emergency exit') || lower.includes('exit signage')) {
        aiResponseText = "The statutory safety standard requires clearly illuminated, unobstructed emergency exits. The internal audit report lacks verification logs for exit signs, creating critical egress liability.";
      } else {
        aiResponseText = `Based on the ${companyInfo?.standard || 'Safety Standard 2026'} analysis for ${companyInfo?.name || 'the audited facility'}, the organization has satisfied ${companyInfo?.complianceScore || 67}% of requirements. All identified gaps and recommended corrective actions are available in the master register.`;
      }
    }

    const aiMsg = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: aiResponseText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          {t('chatTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          {t('chatSubtitle')}
        </p>
      </div>

      {/* Suggested Questions */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          {t('suggestedQuestions')}
        </div>
        <div className="flex flex-wrap gap-2">
          {AI_SUGGESTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSendPrompt(item.question)}
              className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-slate-700 hover:text-indigo-700 text-xs font-semibold transition text-left cursor-pointer"
            >
              "{item.question}"
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 min-h-[340px] max-h-[460px] overflow-y-auto space-y-3">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                isAi 
                  ? 'bg-slate-50 border border-slate-200 text-slate-800' 
                  : 'bg-indigo-600 text-white'
              }`}>
                {msg.text}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-2 p-3 bg-slate-50 rounded-2xl max-w-24 text-slate-400 text-xs">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce delay-100">•</span>
            <span className="animate-bounce delay-200">•</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt(inputValue)}
          placeholder={t('chatPlaceholder')}
          className="flex-1 px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
        />
        <button
          onClick={() => handleSendPrompt(inputValue)}
          disabled={!inputValue.trim()}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t('sendPrompt')}</span>
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-400 text-center px-4 leading-relaxed">
        {t('chatDisclaimer')}
      </p>
    </div>
  );
}
