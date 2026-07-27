export interface ThemePreset {
  id: string;
  name: string;
  vibe: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  card: string;
  text: string;
  cssVariables: string;
}

export const THEMES: ThemePreset[] = [
  {
    id: "modern",
    name: "Modern Purple",
    vibe: "Default ForgeUI sleek aesthetic",
    primary: "#7C3AED",
    secondary: "#A855F7",
    accent: "#06B6D4",
    background: "#0A0A0A",
    card: "#111827",
    text: "#F9FAFB",
    cssVariables: `:root {
  --primary: #7C3AED;
  --secondary: #A855F7;
  --accent: #06B6D4;
  --background: #0A0A0A;
  --card: #111827;
  --text: #F9FAFB;
}`,
  },
  {
    id: "glass",
    name: "Glassmorphism",
    vibe: "Frosted glass overlays & blur depth",
    primary: "#A855F7",
    secondary: "#EC4899",
    accent: "#38BDF8",
    background: "#0F172A",
    card: "rgba(30, 41, 59, 0.7)",
    text: "#F8FAFC",
    cssVariables: `:root {
  --primary: #A855F7;
  --secondary: #EC4899;
  --accent: #38BDF8;
  --background: #0F172A;
  --card: rgba(30, 41, 59, 0.7);
  --backdrop-blur: 16px;
}`,
  },
  {
    id: "neon",
    name: "Electric Neon",
    vibe: "Vibrant neon glows on pitch black",
    primary: "#22D3EE",
    secondary: "#F43F5E",
    accent: "#A855F7",
    background: "#030712",
    card: "#0B0F19",
    text: "#F9FAFB",
    cssVariables: `:root {
  --primary: #22D3EE;
  --secondary: #F43F5E;
  --accent: #A855F7;
  --background: #030712;
  --card: #0B0F19;
  --glow-shadow: 0 0 25px #22D3EE;
}`,
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077",
    vibe: "Hot pink, neon yellow & futuristic grid",
    primary: "#FACC15",
    secondary: "#EC4899",
    accent: "#06B6D4",
    background: "#09090B",
    card: "#18181B",
    text: "#FAFAFA",
    cssVariables: `:root {
  --primary: #FACC15;
  --secondary: #EC4899;
  --accent: #06B6D4;
  --background: #09090B;
}`,
  },
  {
    id: "luxury",
    name: "Royal Luxury",
    vibe: "Gold accents on deep onyx black",
    primary: "#EAB308",
    secondary: "#CA8A04",
    accent: "#FDE047",
    background: "#050505",
    card: "#121212",
    text: "#FEF9C3",
    cssVariables: `:root {
  --primary: #EAB308;
  --secondary: #CA8A04;
  --accent: #FDE047;
  --background: #050505;
}`,
  },
  {
    id: "corporate",
    name: "Enterprise Blue",
    vibe: "Clean, authoritative blue & slate",
    primary: "#2563EB",
    secondary: "#3B82F6",
    accent: "#0EA5E9",
    background: "#0F172A",
    card: "#1E293B",
    text: "#F8FAFC",
    cssVariables: `:root {
  --primary: #2563EB;
  --secondary: #3B82F6;
  --accent: #0EA5E9;
  --background: #0F172A;
}`,
  },
  {
    id: "minimal",
    name: "Clean Minimal",
    vibe: "Monochrome white space & sharp borders",
    primary: "#E2E8F0",
    secondary: "#94A3B8",
    accent: "#38BDF8",
    background: "#020617",
    card: "#0F172A",
    text: "#F8FAFC",
    cssVariables: `:root {
  --primary: #E2E8F0;
  --secondary: #94A3B8;
  --background: #020617;
}`,
  },
  {
    id: "nature",
    name: "Emerald Forest",
    vibe: "Organic greens & earthy tones",
    primary: "#10B981",
    secondary: "#059669",
    accent: "#34D399",
    background: "#064E3B",
    card: "#065F46",
    text: "#ECFDF5",
    cssVariables: `:root {
  --primary: #10B981;
  --secondary: #059669;
  --background: #064E3B;
}`,
  },
  {
    id: "pastel",
    name: "Soft Pastel",
    vibe: "Calming lavender, mint & blush",
    primary: "#C084FC",
    secondary: "#F472B6",
    accent: "#818CF8",
    background: "#181825",
    card: "#1E1E2E",
    text: "#CDD6F4",
    cssVariables: `:root {
  --primary: #C084FC;
  --secondary: #F472B6;
  --background: #181825;
}`,
  },
  {
    id: "monochrome",
    name: "Pure Monochrome",
    vibe: "Strict black, silver & stark white",
    primary: "#FFFFFF",
    secondary: "#A3A3A3",
    accent: "#525252",
    background: "#000000",
    card: "#171717",
    text: "#FFFFFF",
    cssVariables: `:root {
  --primary: #FFFFFF;
  --secondary: #A3A3A3;
  --background: #000000;
}`,
  },
];
