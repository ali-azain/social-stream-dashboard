
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <div className="glass p-6 rounded-3xl shadow-lg shadow-indigo-500/5 hover:translate-y-[-4px] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2.5 bg-white/60 rounded-xl text-indigo-600 shadow-sm border border-white/40">
          {icon}
        </div>
        <div className={`flex items-center gap-0.5 text-[10px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-700 border border-rose-500/20'}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{label}</p>
        <h3 className="text-3xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
    </div>
  );
};
