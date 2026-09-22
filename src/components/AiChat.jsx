import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, HelpCircle } from 'lucide-react';
import { AI_SUGGESTIONS } from '../data/complianceData';

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am Checkora, your AI compliance assistant. Ask me anything about your compliance analysis.",
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

  const handleSendPrompt = (promptText) => {
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

    setTimeout(() => {
      let aiResponseText = "";
      const lower = promptText.toLowerCase();

      const matchedSuggestion = AI_SUGGESTIONS.find(s => 
        lower.includes(s.question.toLowerCase().replace('?', '')) ||
        s.question.toLowerCase().includes(lower.replace('?', ''))
      );

      if (matchedSuggestion) {
        aiResponseText = matchedSuggestion.answer;
      } else if (lower.includes('fix first') || lower.includes('priority')) {
        aiResponseText = "Based on the current analysis, the highest-priority issues are emergency-exit signage, fire-extinguisher inspection, and the missing emergency drill record. These were classified as high risk because the submitted evidence does not demonstrate that the requirements are satisfied.";
      } else if (lower.includes('emergency exit') || lower.includes('exit signage')) {
        aiResponseText = "The regulation requires clearly marked emergency exits, but no supporting evidence was found in the uploaded company report. Because this relates to emergency evacuation and safety, Checkora has classified it as high risk.";
      } else {
        aiResponseText = "Based on the Industrial Workplace Safety Standard 2026 analysis for Apex Manufacturing Pvt. Ltd., the organization has satisfied 67% of requirements. The 3 critical high-risk gaps are emergency exit signage, fire extinguisher inspection tags, and the annual emergency evacuation drill.";
      }

      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Ask Checkora
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Ask questions about your compliance analysis.
        </p>
      </div>

      {/* Suggested Questions */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Suggested Questions
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
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-500 w-fit">
            AI is thinking...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white rounded-2xl p-2.5 border border-slate-200 shadow-xs flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your compliance question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendPrompt(inputValue);
          }}
          className="flex-1 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
        />
        <button
          disabled={!inputValue.trim()}
          onClick={() => handleSendPrompt(inputValue)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
            inputValue.trim()
              ? 'bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700'
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          <span>Send</span>
          <Send className="w-3 h-3" />
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-400 text-center">
        AI-assisted analysis. Verify findings with the applicable regulation and a qualified compliance professional.
      </p>
    </div>
  );
}
