export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  demoUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
    website?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Terrible Lizards Wiki",
  shortName: "Terrible Lizards",
  logoText: "TL",
  tagline: "Dinosaur Horror Parkour Guides, Creatures & Secrets",
  description: "Terrible Lizards Wiki provides dinosaur survival guides, creature information, gameplay tips, progression strategies, and essential resources for players exploring the prehistoric world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://terriblelizardswiki.top",
  supportEmail: "support@terriblelizardswiki.top",
  gameUrl: "https://store.steampowered.com/app/2920220/Terrible_Lizards/",
  demoUrl: "https://store.steampowered.com/app/5244130/Terrible_Lizards_Demo/",
  heroVideoId: "nAEerNJJwW0", // Terrible Lizards - Official Gameplay Trailer (WDR Studios)
  social: {
    discord: "https://discord.gg/WK9TNNDCPP",
    youtube: "https://www.youtube.com/@WDRStudios",
    twitter: "https://twitter.com/TerribleLzrds",
    tiktok: "https://www.tiktok.com/@wdrstudiosllc",
    reddit: "https://www.reddit.com/r/TerribleLizards",
    website: "https://www.terriblelizardsgame.com/",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
