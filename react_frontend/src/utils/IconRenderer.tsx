import { iconMap, type IconName } from "./icons";

interface IconRendererProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function IconRenderer({ name, size = 24, className = "" }: IconRendererProps) {
  const Icon = iconMap[name];
  return Icon ? <Icon size={size} className={className} /> : null;
}
