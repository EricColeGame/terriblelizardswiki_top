import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Compass, Play, ScrollText, Skull, Users } from "lucide-react";

export type NavigationItem = {
  /** 翻译键（nav 命名空间），与分类 slug 一致 */
  key: string;
  /** 站内路径 */
  path: `/${string}`;
  /** 导航图标 */
  icon: LucideIcon;
  /** 是否为可生成列表页的内容类型 */
  isContentType: boolean;
};

// 分类真相源：关键词.json 的 categories，且与 articles/<locale>/ 子目录名一一对应。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Compass, isContentType: true },
  { key: "monsters", path: "/monsters", icon: Skull, isContentType: true },
  { key: "lore", path: "/lore", icon: ScrollText, isContentType: true },
  { key: "media", path: "/media", icon: Play, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
