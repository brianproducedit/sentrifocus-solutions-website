import {
  Video,
  ShoppingCart,
  AlertCircle,
  Wifi,
  Home,
  Network,
  TrendingUp,
  CheckCircle,
  Gauge,
  Zap,
  Code,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  Globe,
  Mail,
  Share2,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Video,
  ShoppingCart,
  AlertCircle,
  Wifi,
  Home,
  Network,
  TrendingUp,
  CheckCircle,
  Gauge,
  Zap,
  Code,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  Globe,
  Mail,
  Share2,
  MessageCircle,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName) {
  return iconMap[name] || null;
}
