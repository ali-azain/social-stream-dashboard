
import React from 'react';
import { Users, MousePointer2, MessageSquare, Share2, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { MOCK_POSTS, PLATFORM_ICONS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CHART_DATA = [
  { name: 'Mon', followers: 4000, engagement: 2400 },
  { name: 'Tue', followers: 4200, engagement: 1398 },
  { name: 'Wed', followers: 4500, engagement: 9800 },
  { name: 'Thu', followers: 4700, engagement: 3908 },
  { name: 'Fri', followers: 5100, engagement: 4800 },
  { name: 'Sat', followers: 5800, engagement: 3800 },
  { name: 'Sun', followers: 6300, engagement: 4300 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Daily Overview</h2>
          <p className="text-slate-500 font-medium">Monitoring your social impact across all channels.</p>
        </div>
        <div className="hidden sm:block text-right">
          <p className="text-sm font-bold text-indigo-600">Today</p>
          <p className="text-xs text-slate-400">{new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Followers" value="65.4k" change={12.5} icon={<Users className="w-5 h-5" />} />
        <StatCard label="Engagement" value="4.8%" change={2.1} icon={<MousePointer2 className="w-5 h-5" />} />
        <StatCard label="Comments" value="1,284" change={-4.3} icon={<MessageSquare className="w-5 h-5" />} />
        <StatCard label="Shares" value="842" change={8.4} icon={<Share2 className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 glass p-8 rounded-3xl shadow-xl shadow-indigo-500/5 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Growth Overview</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Engagement & Reach</p>
            </div>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg">
                <TrendingUp className="w-3 h-3" /> +15.2%
              </span>
            </div>
          </div>
          <div className="h-80 -mx-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(203, 213, 225, 0.4)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="followers" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorFollowers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Posts */}
        <div className="glass p-8 rounded-3xl shadow-xl shadow-indigo-500/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
            <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700">View Feed</button>
          </div>
          <div className="space-y-6">
            {MOCK_POSTS.map(post => (
              <div key={post.id} className="flex gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-md group-hover:scale-105 transition-transform border border-white/40">
                  <img 
                    src={post.mediaUrl || `https://picsum.photos/seed/${post.id}/200/200`} 
                    className="w-full h-full object-cover" 
                    alt="Post"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="p-1 bg-white/50 rounded-lg">{PLATFORM_ICONS[post.platform]}</div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.platform}</span>
                  </div>
                  <p className="text-sm text-slate-800 font-bold truncate leading-tight">{post.content}</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">
                    {new Date(post.scheduledAt).toLocaleDateString()} • {new Date(post.scheduledAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
