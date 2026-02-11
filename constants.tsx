
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, LayoutDashboard, PenSquare, Calendar, BarChart3, Settings, UserCircle } from 'lucide-react';
import { Platform } from './types';

export const PLATFORM_ICONS = {
  [Platform.INSTAGRAM]: <Instagram className="w-5 h-5 text-pink-600" />,
  [Platform.FACEBOOK]: <Facebook className="w-5 h-5 text-blue-600" />,
  [Platform.TWITTER]: <Twitter className="w-5 h-5 text-sky-500" />,
  [Platform.LINKEDIN]: <Linkedin className="w-5 h-5 text-blue-700" />,
};

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'composer', label: 'Composer', icon: <PenSquare className="w-5 h-5" /> },
  { id: 'schedule', label: 'Schedule', icon: <Calendar className="w-5 h-5" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'accounts', label: 'Accounts', icon: <UserCircle className="w-5 h-5" /> },
];

export const MOCK_ACCOUNTS = [
  { id: '1', platform: Platform.INSTAGRAM, username: 'the_brand_official', avatarUrl: 'https://picsum.photos/seed/ig/100/100', followers: 12500, isConnected: true },
  { id: '2', platform: Platform.TWITTER, username: 'BrandX', avatarUrl: 'https://picsum.photos/seed/tw/100/100', followers: 8900, isConnected: true },
  { id: '3', platform: Platform.FACEBOOK, username: 'BrandGlobal', avatarUrl: 'https://picsum.photos/seed/fb/100/100', followers: 45200, isConnected: true },
  { id: '4', platform: Platform.LINKEDIN, username: 'The Brand Corp', avatarUrl: 'https://picsum.photos/seed/li/100/100', followers: 3200, isConnected: true },
];

export const MOCK_POSTS = [
  {
    id: 'post-1',
    platform: Platform.INSTAGRAM,
    content: 'Launching our summer collection tomorrow! Stay tuned for more updates. #summer #fashion',
    scheduledAt: '2024-05-20T10:00:00Z',
    status: 'scheduled',
    mediaUrl: 'https://picsum.photos/seed/summer/400/400'
  },
  {
    id: 'post-2',
    platform: Platform.TWITTER,
    content: 'Big news coming later today! 🚀 #LaunchDay',
    scheduledAt: '2024-05-19T14:30:00Z',
    status: 'published',
    metrics: { likes: 142, comments: 24, shares: 56, impressions: 3200 }
  }
];
