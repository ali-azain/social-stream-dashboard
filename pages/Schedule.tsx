
import React from 'react';
import { MOCK_POSTS, PLATFORM_ICONS } from '../constants';
import { Calendar as CalendarIcon, List, Filter, Search, MoreHorizontal } from 'lucide-react';

export const Schedule: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Timeline</h2>
          <p className="text-slate-500 font-medium">Your upcoming content roadmap.</p>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 glass border-white/60 rounded-2xl shadow-sm self-start sm:self-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-indigo-700 bg-white/60 rounded-xl shadow-sm">
            <List className="w-4 h-4" />
            List
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 rounded-xl transition-colors">
            <CalendarIcon className="w-4 h-4" />
            Calendar
          </button>
        </div>
      </div>

      <div className="glass rounded-[32px] shadow-xl shadow-indigo-500/5 overflow-hidden border border-white/60">
        <div className="p-6 border-b border-white/40 flex flex-col sm:flex-row gap-4 justify-between bg-white/20">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search timeline..."
              className="w-full pl-12 pr-4 py-3 text-sm bg-white/40 border border-white/60 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/5 placeholder:text-slate-400 font-medium"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-white/60 border border-white/60 rounded-2xl hover:bg-white transition-all">
              <Filter className="w-4 h-4" />
              Refine View
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/40">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Channel</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Story Draft</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Timeline</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              {MOCK_POSTS.map(post => (
                <tr key={post.id} className="hover:bg-white/30 transition-colors group">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/60 rounded-xl shadow-sm border border-white/60">{PLATFORM_ICONS[post.platform]}</div>
                      <span className="text-sm font-bold text-slate-800">{post.platform}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4 max-w-xs">
                      {post.mediaUrl && (
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/60 shadow-sm">
                          <img src={post.mediaUrl} className="w-full h-full object-cover" alt="Post" />
                        </div>
                      )}
                      <p className="text-sm text-slate-600 truncate font-semibold leading-relaxed">{post.content}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-800">
                        {new Date(post.scheduledAt).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'})}
                      </span>
                      <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">
                        At {new Date(post.scheduledAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right whitespace-nowrap">
                    <button className="p-2 hover:bg-white/60 rounded-xl transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-slate-400 hover:text-indigo-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
