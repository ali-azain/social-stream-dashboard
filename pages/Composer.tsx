
import React, { useState } from 'react';
import { Platform } from '../types';
import { PLATFORM_ICONS, MOCK_ACCOUNTS } from '../constants';
import { Sparkles, Calendar, Image as ImageIcon, Send, Loader2, Info } from 'lucide-react';
import { generateCaptionSuggestions } from '../services/geminiService';

export const Composer: React.FC = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([Platform.INSTAGRAM]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<{text: string, hashtags: string[]}[]>([]);

  const handleAiAssist = async () => {
    if (!content.trim()) return;
    setIsGenerating(true);
    const results = await generateCaptionSuggestions(content, selectedPlatforms[0]);
    setSuggestions(results);
    setIsGenerating(false);
  };

  const applySuggestion = (text: string, hashtags: string[]) => {
    setContent(`${text}\n\n${hashtags.join(' ')}`);
    setSuggestions([]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 animate-in slide-in-from-bottom duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Creative Studio</h2>
          <p className="text-slate-500 font-medium">Craft the perfect message with AI assistance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Post Editor */}
          <div className="glass rounded-[32px] shadow-xl shadow-indigo-500/5 overflow-hidden border border-white/60">
            <div className="p-5 border-b border-white/40 flex items-center justify-between bg-white/20">
              <div className="flex gap-2.5">
                {MOCK_ACCOUNTS.map(acc => (
                  <button 
                    key={acc.id}
                    onClick={() => {
                      if (selectedPlatforms.includes(acc.platform)) {
                        setSelectedPlatforms(selectedPlatforms.filter(p => p !== acc.platform));
                      } else {
                        setSelectedPlatforms([...selectedPlatforms, acc.platform]);
                      }
                    }}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      selectedPlatforms.includes(acc.platform)
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : 'bg-white/40 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {PLATFORM_ICONS[acc.platform]}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/40 rounded-full border border-white/40">
                <span className={`text-[10px] font-black ${content.length > 280 ? 'text-rose-500' : 'text-slate-400'}`}>
                  {content.length} / 280
                </span>
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's the story for today?"
              className="w-full h-56 p-8 text-xl text-slate-800 placeholder-slate-400 focus:outline-none resize-none bg-transparent"
            />
            <div className="p-5 bg-white/20 border-t border-white/40 flex items-center justify-between">
              <div className="flex gap-3">
                <button className="group flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-600 bg-white/80 border border-white/60 rounded-2xl hover:bg-white transition-all">
                  <ImageIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  Media Library
                </button>
                <button 
                  onClick={handleAiAssist}
                  disabled={isGenerating || !content}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-indigo-700 bg-indigo-100/50 rounded-2xl hover:bg-indigo-100 transition-all disabled:opacity-50"
                >
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  Generate Ideas
                </button>
              </div>
            </div>
          </div>

          {/* AI Suggestions */}
          {suggestions.length > 0 && (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="flex items-center gap-2 px-1">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Optimized Variations</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {suggestions.map((s, idx) => (
                  <div key={idx} className="glass p-6 rounded-3xl shadow-sm hover:translate-x-1 transition-transform cursor-pointer group" onClick={() => applySuggestion(s.text, s.hashtags)}>
                    <p className="text-slate-700 mb-4 font-medium leading-relaxed">{s.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.hashtags.map(h => (
                        <span key={h} className="text-[10px] font-black text-indigo-600 bg-white/80 px-2 py-1 rounded-lg border border-indigo-100">{h}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Preview & Actions */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-[32px] shadow-xl shadow-indigo-500/5">
            <h3 className="text-lg font-black text-slate-800 mb-6">Device Preview</h3>
            <div className="aspect-[9/16] rounded-3xl border-8 border-slate-900/5 bg-slate-100 relative overflow-hidden shadow-inner">
              <div className="absolute inset-x-0 top-0 h-6 bg-slate-900/5 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-900/10 rounded-full" />
              </div>
              {content ? (
                <div className="w-full h-full bg-white flex flex-col p-4 animate-in zoom-in-95 duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-slate-200 rounded" />
                      <div className="w-12 h-1.5 bg-slate-100 rounded" />
                    </div>
                  </div>
                  <div className="flex-1 text-sm text-slate-700 leading-relaxed font-medium overflow-y-auto pr-2 scrollbar-hide">
                    {content}
                  </div>
                  <div className="h-40 bg-slate-50 rounded-xl mt-4 border border-slate-100 flex items-center justify-center">
                     <ImageIcon className="w-8 h-8 text-slate-200" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8 text-center">
                  <p className="text-slate-400 text-sm font-medium italic">Compose your masterpiece to see how it looks on mobile.</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <button className="flex items-center justify-center gap-2 w-full py-5 bg-indigo-600 text-white font-black text-lg rounded-[24px] hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all active:scale-[0.98]">
              <Send className="w-6 h-6" />
              Push Live
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-4 bg-white/60 text-slate-800 font-bold rounded-[24px] border border-white/60 hover:bg-white transition-all">
              <Calendar className="w-5 h-5" />
              Schedule Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
