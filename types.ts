
export enum Platform {
  INSTAGRAM = 'Instagram',
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter/X',
  LINKEDIN = 'LinkedIn'
}

export interface Post {
  id: string;
  platform: Platform;
  content: string;
  mediaUrl?: string;
  scheduledAt: string;
  status: 'scheduled' | 'published' | 'draft';
  metrics?: {
    likes: number;
    comments: number;
    shares: number;
    impressions: number;
  };
}

export interface SocialAccount {
  id: string;
  platform: Platform;
  username: string;
  avatarUrl: string;
  followers: number;
  isConnected: boolean;
}

export interface AnalyticsData {
  date: string;
  followers: number;
  engagement: number;
}
