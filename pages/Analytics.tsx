
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Award, Clock, Target } from 'lucide-react';
import { StatCard } from '../components/StatCard';

const PERFORMANCE_DATA = [
  { name: 'Jan', reach: 4000, interactions: 2400 },
  { name: 'Feb', reach: 3000, interactions: 1398 },
  { name: 'Mar', reach: 2000, interactions: 9800 },
  { name: 'Apr', reach: 2780, interactions: 3908 },
  { name: 'May', reach: 1890, interactions: 4800 },
  { name: 'Jun', reach: 2390, interactions: 3800 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Performance Hub</h2>
          <p className="text-slate-500 font-medium">Measuring the gravity of your digital presence.</p>
        </div>
        <div className="flex gap-3">
          <select className="px-5 py-3 glass border-white/60 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none shadow-sm cursor-pointer hover:bg-white/60 transition-all">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last Year</option>
          </select>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-indigo-600/20 active:scale-[0.98] transition-all">Export Data</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Reach" value="12.4k" change={5.2} icon={<TrendingUp className="w-5 h-5" />} />
        <StatCard label="Leader" value="Video" change={12.1} icon={<Award className="w-5 h-5" />} />
        <StatCard label="Prime Time" value="10 AM" change={0} icon={<Clock className="w-5 h-5" />} />
        <StatCard label="Conversion" value="3.2%" change={1.4} icon={<Target className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reach vs Interactions */}
        <div className="glass p-8 rounded-[32px] shadow-xl shadow-indigo-500/5">
          <div className="flex flex-col mb-8">
             <h3 className="text-lg font-black text-slate-800">Activity Distribution</h3>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Growth Analysis</p>
          </div>
          <div className="h-80 -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PERFORMANCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(203, 213, 225, 0.4)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(12px)'}}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '30px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase'}} />
                <Bar dataKey="reach" fill="#6366f1" radius={[8, 8, 0, 0]} barSize={24} />
                <Bar dataKey="interactions" fill="#f472b6" radius={[8, 8, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Trend */}
        <div className="glass p-8 rounded-[32px] shadow-xl shadow-indigo-500/5">
          <div className="flex flex-col mb-8">
             <h3 className="text-lg font-black text-slate-800">Engagement Momentum</h3>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rolling Engagement Metrics</p>
          </div>
          <div className="h-80 -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PERFORMANCE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(203, 213, 225, 0.4)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(12px)'}}
                />
                <Line type="monotone" dataKey="interactions" stroke="#8b5cf6" strokeWidth={5} dot={{fill: '#8b5cf6', strokeWidth: 3, r: 6, stroke: '#fff'}} activeDot={{r: 8, strokeWidth: 0}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
