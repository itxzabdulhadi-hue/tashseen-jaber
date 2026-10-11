/**
 * Single source of truth for every social / messaging link on the site.
 *
 * To add, remove or re-point a channel, edit ONLY this file — the icons are
 * rendered wherever `SocialLinks` is used (navigation, contact section and
 * footer).
 *
 * Placeholder handles are marked with `// TODO:` so they are easy to find.
 * Replace them with the real profile URLs before going live.
 */

export type SocialKey =
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "linkedin"
  | "x"
  | "youtube"
  | "tiktok";

export interface SocialLink {
  /** Icon to render. */
  key: SocialKey;
  /** English accessible label / tooltip. */
  label: string;
  /** Arabic accessible label / tooltip. */
  labelAr: string;
  /** Full profile URL that opens in a new tab. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: "facebook",
    label: "Facebook",
    labelAr: "فيسبوك",
    href: "https://www.facebook.com/Tahseenjaber.Coldstorage?mibextid=wwXIfr&rdid=326uZ0kFUuFoyAfF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19xUcfxzZj%2F%3Fmibextid%3DwwXIfr",
  },
  {
    key: "instagram",
    label: "Instagram",
    labelAr: "إنستغرام",
    href: "https://www.instagram.com/tahseenjaber.coldstorage?obrf=cHBvdGg3Njl6cHFn",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    labelAr: "واتساب",
    href: "https://api.whatsapp.com/send/?phone=9647768677775&text&type=phone_number&app_absent=0",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    labelAr: "لينكدإن",
    href: "https://www.linkedin.com/company/tahseenjaber", // TODO: real LinkedIn page
  },
  {
    key: "x",
    label: "X (Twitter)",
    labelAr: "إكس (تويتر)",
    href: "https://x.com/tahseenjaber", // TODO: real X profile
  },
  {
    key: "youtube",
    label: "YouTube",
    labelAr: "يوتيوب",
    href: "https://www.youtube.com/@tahseenjaber", // TODO: real YouTube channel
  },
  {
    key: "tiktok",
    label: "TikTok",
    labelAr: "تيك توك",
    href: "https://www.tiktok.com/@tahseenjaber", // TODO: real TikTok profile
  },
];

/** Canonical site URL — used for canonical tags and structured data. */
export const siteUrl = "https://tahseenjaber.com";

/** Social profiles shown in the desktop header row. */
export const headerSocialKeys: SocialKey[] = [
  "facebook",
  "instagram",
  "whatsapp",
];

/* -------------------------------------------------------------------------- */
/*  Contact channels (already used across the site)                           */
/* -------------------------------------------------------------------------- */

export const contactInfo = {
  phone: "+9647768677775",
  phoneDisplay: "+964 776 867 7775",
  email: "info@tahseenjaber.com",
  emailAlt: "Shuaib@tahseenjaber.com",
} as const;
