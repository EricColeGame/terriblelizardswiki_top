import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  /** 翻译键（nav 命名空间） */
  key: string;
  /** 站内路径 */
  path: string;
  /** 导航图标 */
  icon: LucideIcon;
  /** 是否为可生成列表页的内容类型 */
  isContentType: boolean;
};

// 旧主题导航已清空，内容导航将在后续 Part 按新游戏重建。
export const NAVIGATION_CONFIG = [] as NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
