export const SITE_CONFIG = {
  name: "Teacher's Pension",
  description:
    "Expert pension consulting and retirement planning for educators. Maximize your benefits and secure your future.",
  url: "https://tpensions.com",
  agent: {
    name: "Rigoberto Cuellar",
    title: "Financial Educator",
    license: "1654718",
    directPhone: "469.831.2672",
    officePhone: "800.474.1440",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About & Services", href: "/about" },
  { label: "Pension Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
] as const;

export const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID";
