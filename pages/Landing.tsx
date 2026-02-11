
import React from 'react';
import { 
  Instagram, Facebook, Twitter, Linkedin, Github, 
  ArrowRight, CheckCircle2, Zap, BarChart3, Users, 
  MessageSquare, Sparkles, Globe, Heart
} from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">SocialStream</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#analytics" className="hover:text-indigo-600 transition-colors">Analytics</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onLogin} className="px-5 py-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Log in</button>
            <button onClick={onLogin} className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-black rounded-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-[0.98]">
              Get started for free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
          <Instagram className="absolute top-[20%] left-[10%] w-12 h-12 text-pink-500 animate-bounce" style={{ animationDuration: '3s' }} />
          <Twitter className="absolute top-[30%] right-[15%] w-10 h-10 text-sky-400 animate-pulse" />
          <Linkedin className="absolute bottom-[20%] left-[15%] w-14 h-14 text-blue-700" />
          <Facebook className="absolute top-[60%] right-[10%] w-12 h-12 text-blue-600 animate-bounce" style={{ animationDuration: '4s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Your social media <br />
            <span className="text-indigo-600">workspace</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Plan, collaborate, and publish thumb-stopping content that drives meaningful growth for your brand. Share consistently without the chaos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="w-full sm:w-auto flex p-1 glass rounded-2xl border-white/60 shadow-xl shadow-indigo-500/5">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="bg-transparent px-6 py-3 w-full sm:w-64 focus:outline-none font-medium text-slate-700"
              />
              <button onClick={onLogin} className="whitespace-nowrap px-8 py-3 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
                Get started
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-[40px] text-center space-y-2">
            <h2 className="text-4xl font-black text-slate-900">191,726</h2>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Creators</p>
          </div>
          <div className="glass p-10 rounded-[40px] text-center space-y-2">
            <h2 className="text-4xl font-black text-slate-900">7,858,881</h2>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Posts Published</p>
          </div>
          <div className="glass p-10 rounded-[40px] text-center space-y-2">
            <h2 className="text-4xl font-black text-slate-900">11+</h2>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Platforms Integrated</p>
          </div>
        </div>
      </section>

      {/* Feature Grids */}
      <section id="features" className="py-24 px-6 space-y-24">
        {/* Feature 1 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shadow-sm">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">The most complete set of publishing tools</h2>
            <p className="text-lg text-slate-500 font-medium">Schedule your content to the most popular platforms including Facebook, Instagram, TikTok, LinkedIn, Threads, Bluesky, and X. All from one elegant glass dashboard.</p>
            <ul className="space-y-4">
              {['Direct Scheduling', 'Visual Planner', 'Custom Tailoring'].map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-8 rounded-[40px] shadow-2xl shadow-indigo-500/10 rotate-2 hover:rotate-0 transition-transform duration-500 bg-rose-50/30">
            <img src="https://picsum.photos/seed/dashboard1/800/600" className="rounded-2xl shadow-lg border border-white/40" alt="Feature" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="glass p-8 rounded-[40px] shadow-2xl shadow-indigo-500/10 -rotate-2 hover:rotate-0 transition-transform duration-500 bg-indigo-50/30 lg:order-1 order-2">
            <img src="https://picsum.photos/seed/dashboard2/800/600" className="rounded-2xl shadow-lg border border-white/40" alt="Feature" />
          </div>
          <div className="space-y-6 lg:order-2 order-1">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Turn any idea into the perfect post</h2>
            <p className="text-lg text-slate-500 font-medium">Whether you're flying solo or working with a team, SocialStream has the features to help you create, organize, and repurpose your content for any channel. Built-in AI Assistant included.</p>
            <button onClick={onLogin} className="group flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-sm pt-4">
              Explore Composer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* AI Assistant Promo */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto glass p-16 rounded-[60px] relative overflow-hidden text-center bg-indigo-600 shadow-2xl shadow-indigo-200">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Meet your new AI sidekick</h2>
            <p className="text-xl text-indigo-100 font-medium max-w-2xl mx-auto opacity-90">
              Brainstorm ideas, rewrite content for different platforms, and generate the perfect hashtags with our Gemini-powered AI assistant.
            </p>
            <button onClick={onLogin} className="px-10 py-5 bg-white text-indigo-600 font-black rounded-[24px] shadow-xl hover:scale-105 transition-all text-lg active:scale-[0.98]">
              Try AI Magic for Free
            </button>
          </div>
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-24 px-6 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          <div className="col-span-2 space-y-6">
             <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">SocialStream</span>
            </div>
            <p className="max-w-xs font-medium leading-relaxed">The only social media management tool you'll ever need. Built for creators, by creators.</p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Publishing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Analytics</li>
              <li className="hover:text-white cursor-pointer transition-colors">Engagement</li>
              <li className="hover:text-white cursor-pointer transition-colors">Start Page</li>
              <li className="hover:text-white cursor-pointer transition-colors">AI Assistant</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">API Docs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Academy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Customers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Transparency</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community</li>
              <li className="hover:text-white cursor-pointer transition-colors">Status</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-slate-800 text-center">
          <p className="text-xs font-bold uppercase tracking-widest">© 2024 SocialStream. All rights reserved. Made with <Heart className="inline w-3 h-3 text-rose-500" /> worldwide.</p>
        </div>
      </footer>
    </div>
  );
};
