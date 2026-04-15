export const SITE_CONFIG = {
  name: "Teacher's Pension",
  description:
    "Expert pension consulting and retirement planning for educators. Maximize your benefits and secure your future.",
  url: "https://tpensions.com",
  phone: "1-800-474-1440",
  email: "contact@tpensions.com",
  agent: {
    name: "Rigoberto Cuellar",
    title: "Financial Educator",
    license: "1654718",
    directPhone: "469.831.2672",
    officePhone: "800.474.1440",
  },
  locations: [
    {
      name: "Corporate Headquarters",
      address: "213 South Sierra Ave",
      city: "Oakdale",
      state: "CA",
      zip: "95361",
    },
    {
      name: "Sacramento Office",
      city: "Sacramento",
      state: "CA",
    },
    {
      name: "Salinas Office",
      city: "Salinas",
      state: "CA",
    },
    {
      name: "Colorado Office",
      address: "1140 38th Ave",
      city: "Greeley",
      state: "CO",
      zip: "80634",
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
