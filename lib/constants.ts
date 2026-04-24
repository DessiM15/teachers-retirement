export const SITE_CONFIG = {
  name: "Teacher's Pension",
  description:
    "Expert pension consulting and retirement planning for educators. Maximize your benefits and secure your future.",
  url: "https://tpensions.com",
  phone: "1-800-474-1440",
  email: "robert@tpension.com",
  agent: {
    name: "Rigoberto Cuellar",
    title: "Financial Educator",
    license: "1654718",
    directPhone: "682.557.9603",
    officePhone: "800.474.1440",
  },
  locations: [
    {
      name: "South Lake Office",
      address: "330 Morrison Park Dr",
      city: "South Lake",
      state: "TX",
      zip: "76092",
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Districts", href: "/districts" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
] as const;

export const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID";
