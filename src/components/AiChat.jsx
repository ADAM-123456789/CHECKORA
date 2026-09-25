import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedAiSuggestions } from '../data/localizedRequirements';

export default function AiChat({ requirements = [], companyInfo = {} }) {
  const { t, lang } = useLanguage();
  const localizedSuggestions = getLocalizedAiSuggestions(lang);

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

  // Sync welcome greeting whenever user changes language
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'ai',
            text: t('chatWelcome'),
            timestamp: 'Just now'
          }
        ];
      }
      return prev;
    });
  }, [lang, t]);

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

    // 1. First check if it matches any localized suggestion in current language
    const lower = promptText.toLowerCase().trim();
    const matchedSuggestion = localizedSuggestions.find(s => 
      s.question.toLowerCase().trim() === lower ||
      lower.includes(s.question.toLowerCase().replace(/[?؟]/g, '').trim()) ||
      s.question.toLowerCase().replace(/[?؟]/g, '').trim().includes(lower)
    );

    if (matchedSuggestion) {
      aiResponseText = matchedSuggestion.answer;
    } else {
      // 2. Try FastAPI backend if running
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
        // Fallback to local localized intelligence
      }
    }

    // 3. Fallback to localized summary or priority answer
    if (!aiResponseText) {
      if (lower.includes('fix') || lower.includes('priority') || lower.includes('first') || lower.includes('पहले') || lower.includes('முதலில்') || lower.includes('ആദ്യം') || lower.includes('primero') || lower.includes('premier') || lower.includes('أولاً')) {
        aiResponseText = localizedSuggestions[1]?.answer || localizedSuggestions[0]?.answer;
      } else if (lower.includes('high') || lower.includes('risk') || lower.includes('जोखिम') || lower.includes('ஆபத்து') || lower.includes('അപകട') || lower.includes('riesgo') || lower.includes('risque') || lower.includes('خطورة')) {
        aiResponseText = localizedSuggestions[0]?.answer;
      } else if (lower.includes('missing') || lower.includes('गायब') || lower.includes('விடுபட்ட') || lower.includes('ഇല്ലാത്ത') || lower.includes('ausentes') || lower.includes('manquantes') || lower.includes('مفقودة')) {
        aiResponseText = localizedSuggestions[3]?.answer;
      } else {
        aiResponseText = localizedSuggestions[4]?.answer || localizedSuggestions[0]?.answer;
      }
    }

    setTimeout(() => {
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 350);
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
          {localizedSuggestions.map((item) => (
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
