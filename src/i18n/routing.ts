import { defineRouting } from "next-intl/routing";

// 最终语言集合（唯一真相源）——必须与 request.ts、language-switcher.tsx 的标签
// 以及 src/locales/*.json 文件集合保持一致。
export const locales = ["en", "es", "pt", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
