
import React from 'react';
import { NAVIGATION_ITEMS } from '../constants';
import { Menu, X, Bell, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 glass border-r transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600/80 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-slate-800">SocialStream</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                ? 'bg-indigo-600/10 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:bg-white/40 hover:text-slate-700'
              }`}
            >
              <span className={`${activeTab === item.id ? 'text-indigo-600' : ''}`}>{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/20">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-rose-600 transition-colors rounded-xl hover:bg-rose-50/50">
            <LogOut className="w-5 h-5" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 glass-dark border-b flex items-center justify-between px-6 shrink-0 relative z-10">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-white/40 rounded-lg">
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-slate-400 text-sm">
            <span>Pages</span>
            <span>/</span>
            <span className="text-slate-600 font-bold capitalize tracking-wide">{activeTab}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-slate-800 relative transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/30">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800 leading-tight">Sarah Jenkins</p>
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Brand Manager</p>
              </div>
              <div className="p-0.5 border-2 border-indigo-200 rounded-full">
                <img src="https://picsum.photos/seed/sarah/80/80" className="w-8 h-8 rounded-full object-cover" alt="User" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};
