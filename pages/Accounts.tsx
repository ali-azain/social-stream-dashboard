
import React from 'react';
import { MOCK_ACCOUNTS, PLATFORM_ICONS } from '../constants';
import { Plus, CheckCircle2, ShieldCheck, RefreshCw } from 'lucide-react';

export const Accounts: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Channel Hub</h2>
          <p className="text-slate-500 font-medium">Control center for all your social identities.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all">
          <Plus className="w-5 h-5" />
          Link New Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_ACCOUNTS.map(acc => (
          <div key={acc.id} className="glass p-8 rounded-[40px] shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 group relative">
            <div className="flex items-start justify-between mb-8">
              <div className="w-20 h-20 rounded-3xl p-1.5 glass-dark border-2 border-white/60 relative shadow-lg">
                <img src={acc.avatarUrl} className="w-full h-full rounded-2xl object-cover" alt={acc.username} />
                <div className="absolute -bottom-2 -right-2 p-2 bg-white rounded-2xl shadow-md border border-slate-100 transition-transform group-hover:scale-110">
                  {PLATFORM_ICONS[acc.platform]}
                </div>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-700 rounded-xl flex items-center gap-1.5 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Active</span>
              </div>
            </div>
            
            <div className="space-y-1 mb-8">
              <h3 className="text-xl font-black text-slate-900 leading-tight">{acc.username}</h3>
              <p className="text-xs text-indigo-600 font-black uppercase tracking-widest opacity-60">@{acc.username.toLowerCase().replace(/\s/g, '_')}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/40 mb-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Audience</p>
                <p className="text-2xl font-black text-slate-900">{(acc.followers / 1000).toFixed(1)}k</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</p>
                <p className="text-2xl font-black text-slate-900">Brand</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-black uppercase tracking-widest text-slate-700 bg-white/60 rounded-2xl hover:bg-white border border-white/60 transition-all">
                <RefreshCw className="w-4 h-4" />
                Sync
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-black uppercase tracking-widest text-slate-700 bg-white/60 rounded-2xl hover:bg-white border border-white/60 transition-all">
                <ShieldCheck className="w-4 h-4" />
                Privacy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
