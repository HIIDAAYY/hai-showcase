import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface CostData {
  name: string;
  traditional: number;
  ai: number;
}
