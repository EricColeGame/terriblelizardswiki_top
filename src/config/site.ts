export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Terrible Lizards Wiki",
  shortName: "Terrible Lizards",
  logoText: "TL",
  tagline: "Dinosaur Survival Guides, Creatures & Gameplay Tips",
  description: "Terrible Lizards Wiki provides dinosaur survival guides, creature information, gameplay tips, progression strategies, and essential resources for players exploring the prehistoric world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://terriblelizardswiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://terriblelizardswiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2920220/Terrible_Lizards/",
  heroVideoId: "nAEerNJJwW0", // Terrible Lizards - Official Gameplay Trailer (WDR Studios)
  social: {
    youtube: "https://www.youtube.com/@WDRStudios",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
