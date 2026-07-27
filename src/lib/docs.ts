export interface DocSection {
  title: string;
  slug: string;
  items: DocPage[];
}

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  content: string; // Rich markdown-like content rendered in the UI
}

export const DOC_SECTIONS: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    items: [
      {
        slug: "introduction",
        title: "Introduction",
        description: "Learn what ForgeUI is and how it can accelerate your development workflow.",
        content: `## What is ForgeUI?

ForgeUI is a **premium, open-source UI ecosystem** designed for modern web applications. It provides a comprehensive collection of beautifully designed, accessible, and customizable React components, full-page templates, curated themes, animation primitives, and AI-powered tools.

### Why ForgeUI?

Building modern web interfaces from scratch is time-consuming. ForgeUI solves this by providing:

- **100+ Production-Ready Components** — Buttons, inputs, modals, pricing cards, data tables, and more
- **12 Full-Page Templates** — SaaS, Dashboard, Portfolio, E-Commerce, Blog, and more
- **10 Curated Themes** — From Modern Purple to Cyberpunk, each with exportable CSS variables
- **13+ Animation Primitives** — Framer Motion powered, copy-paste ready
- **AI Component Generator** — Describe what you need, get production code
- **CLI Tool** — \`npx forgeui add button\` installs components directly into your project

### Design Philosophy

ForgeUI combines the best ideas from the ecosystem:

| Inspiration | What We Took |
|---|---|
| **Tailwind CSS** | Utility-first styling approach |
| **shadcn/ui** | Copy-paste component philosophy |
| **DaisyUI** | Theme engine & preset system |
| **Magic UI** | Premium animation primitives |
| **Aceternity UI** | Visual polish & dark mode aesthetics |

### Core Principles

1. **Beautiful by Default** — Every component looks premium out of the box
2. **Developer-First** — Clean APIs, TypeScript support, copy-paste workflow
3. **Accessible** — WCAG 2.1 AA compliant, keyboard navigable, screen reader friendly
4. **Performance Focused** — Server Components by default, minimal client JS
5. **AI Friendly** — Components designed for AI-assisted development workflows

### Quick Start

The fastest way to get started is with the CLI:

\`\`\`bash
npx forgeui init
\`\`\`

Or browse the [Component Library](/components) to find what you need and copy the code directly.`,
      },
      {
        slug: "installation",
        title: "Installation",
        description: "Set up ForgeUI in your Next.js project in under 2 minutes.",
        content: `## Installation

ForgeUI is designed to work with **Next.js 15+**, **React 19+**, and **Tailwind CSS v4**.

### Prerequisites

Before installing ForgeUI, make sure you have:

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm** package manager
- A **Next.js 15** project (App Router recommended)
- **Tailwind CSS v4** configured

### Option 1: CLI (Recommended)

The ForgeUI CLI is the fastest way to add components to your project:

\`\`\`bash
# Initialize ForgeUI in your project
npx forgeui init

# This will:
# 1. Create a forgeui.config.ts file
# 2. Set up the design tokens in globals.css
# 3. Install required dependencies
# 4. Configure path aliases
\`\`\`

### Option 2: Manual Setup

If you prefer manual control, follow these steps:

#### Step 1: Install Dependencies

\`\`\`bash
npm install framer-motion lucide-react next-themes clsx tailwind-merge
\`\`\`

#### Step 2: Configure Path Aliases

Add to your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

#### Step 3: Add Design Tokens

Copy the ForgeUI design tokens into your \`globals.css\`. You can find the full token set on the [Themes](/themes) page or export them from the Theme Engine.

#### Step 4: Create Utility Helper

Create \`src/lib/utils.ts\`:

\`\`\`typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`

#### Step 5: Add Components

Now you can add individual components:

\`\`\`bash
npx forgeui add button
npx forgeui add input
npx forgeui add modal
\`\`\`

Or copy component source code directly from the [Component Library](/components).

### Verify Installation

Run your development server to verify everything works:

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` and you should see ForgeUI components rendering correctly.`,
      },
      {
        slug: "cli",
        title: "CLI Commands",
        description: "Full reference for the ForgeUI CLI tool.",
        content: `## CLI Reference

The ForgeUI CLI (\`forgeui\`) is a command-line tool for managing components, themes, and project configuration.

### Installation

The CLI runs via \`npx\` — no global install needed:

\`\`\`bash
npx forgeui <command>
\`\`\`

### Commands

#### \`init\` — Initialize Project

Sets up ForgeUI in an existing Next.js project:

\`\`\`bash
npx forgeui init
\`\`\`

**What it does:**
- Creates \`forgeui.config.ts\` configuration file
- Adds design tokens to \`globals.css\`
- Installs required npm dependencies
- Sets up the \`cn()\` utility helper
- Configures TypeScript path aliases

**Options:**
| Flag | Description | Default |
|---|---|---|
| \`--typescript\` | Use TypeScript templates | \`true\` |
| \`--src-dir\` | Source directory path | \`./src\` |
| \`--theme\` | Initial theme preset | \`modern\` |

---

#### \`add\` — Add Component

Installs a component into your project:

\`\`\`bash
npx forgeui add <component-name>

# Examples:
npx forgeui add button
npx forgeui add modal
npx forgeui add pricing
\`\`\`

**What it does:**
- Copies the component source file to \`src/components/ui/\`
- Installs any missing peer dependencies
- Warns if the component already exists

---

#### \`theme\` — Apply Theme

Switches your project's color theme:

\`\`\`bash
npx forgeui theme <theme-name>

# Examples:
npx forgeui theme cyberpunk
npx forgeui theme neon
npx forgeui theme minimal
\`\`\`

**Available themes:** modern, glass, neon, cyberpunk, luxury, corporate, minimal, nature, pastel, monochrome

---

#### \`list\` — List Available Resources

Lists all available components, templates, or themes:

\`\`\`bash
npx forgeui list components
npx forgeui list templates
npx forgeui list themes
\`\`\``,
      },
      {
        slug: "configuration",
        title: "Configuration",
        description: "Customize ForgeUI behavior with the configuration file.",
        content: `## Configuration

ForgeUI uses a \`forgeui.config.ts\` file in your project root to manage settings.

### Default Configuration

\`\`\`typescript
// forgeui.config.ts
import { defineConfig } from "forgeui";

export default defineConfig({
  // Where components are installed
  componentDir: "./src/components/ui",

  // Utility helper location
  utilsPath: "./src/lib/utils",

  // Active theme preset
  theme: "modern",

  // TypeScript support
  typescript: true,

  // Tailwind CSS version
  tailwind: "v4",

  // Include animations by default
  animations: true,

  // Default icon library
  icons: "lucide-react",
});
\`\`\`

### Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| \`componentDir\` | \`string\` | \`"./src/components/ui"\` | Directory where components are installed |
| \`utilsPath\` | \`string\` | \`"./src/lib/utils"\` | Path to the \`cn()\` utility |
| \`theme\` | \`string\` | \`"modern"\` | Active color theme preset |
| \`typescript\` | \`boolean\` | \`true\` | Generate TypeScript or JavaScript |
| \`tailwind\` | \`string\` | \`"v4"\` | Tailwind CSS version |
| \`animations\` | \`boolean\` | \`true\` | Include Framer Motion animations |
| \`icons\` | \`string\` | \`"lucide-react"\` | Icon library to use |

### Environment Variables

For the AI Generator feature, set your API key:

\`\`\`bash
# .env.local
FORGEUI_AI_KEY=your-api-key-here
\`\`\``,
      },
    ],
  },
  {
    title: "Customization",
    slug: "customization",
    items: [
      {
        slug: "theming",
        title: "Theming",
        description: "Customize colors, fonts, and design tokens to match your brand.",
        content: `## Theming

ForgeUI's design system is built on **CSS custom properties**, making it trivial to customize every aspect of the visual design.

### How Themes Work

All ForgeUI components reference CSS variables defined in your \`globals.css\`. Changing these variables instantly updates every component:

\`\`\`css
:root {
  --primary: #7C3AED;
  --secondary: #A855F7;
  --accent: #06B6D4;
  --background: #0A0A0A;
  --card: #111827;
  --text: #F9FAFB;
  --muted: #9CA3AF;
  --border: #1F2937;
  --radius: 12px;
}
\`\`\`

### Using Preset Themes

ForgeUI ships with **10 curated themes**. Apply one via CLI:

\`\`\`bash
npx forgeui theme cyberpunk
\`\`\`

Or visit the [Theme Engine](/themes) to preview and export CSS variables.

### Creating Custom Themes

You can create your own theme by overriding the CSS variables:

\`\`\`css
/* Custom brand theme */
:root {
  --primary: #FF6B35;
  --secondary: #F7C948;
  --accent: #1B998B;
  --background: #0D1117;
  --card: #161B22;
  --text: #E6EDF3;
}
\`\`\`

### Theme Tokens Reference

| Token | Purpose | Default |
|---|---|---|
| \`--primary\` | Primary brand color, buttons, links | \`#7C3AED\` |
| \`--secondary\` | Secondary actions, hover states | \`#A855F7\` |
| \`--accent\` | Accent highlights, badges | \`#06B6D4\` |
| \`--background\` | Page background | \`#0A0A0A\` |
| \`--card\` | Card & surface backgrounds | \`#111827\` |
| \`--text\` | Primary text color | \`#F9FAFB\` |
| \`--muted\` | Secondary text, placeholders | \`#9CA3AF\` |
| \`--border\` | Borders & dividers | \`#1F2937\` |
| \`--radius\` | Default border radius | \`12px\` |`,
      },
      {
        slug: "dark-mode",
        title: "Dark Mode",
        description: "ForgeUI's dark-first design system and theme switching.",
        content: `## Dark Mode

ForgeUI is designed **dark-first**. All components look premium in dark mode out of the box.

### How It Works

ForgeUI uses \`next-themes\` for seamless dark/light/system theme switching:

\`\`\`tsx
// src/components/shared/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
\`\`\`

### Using the Theme Toggle

The built-in \`ThemeSwitcher\` component provides a dropdown with Dark, Light, and System options:

\`\`\`tsx
import { ThemeSwitcher } from "@/components/shared/theme-switcher";

export function Header() {
  return (
    <nav>
      <ThemeSwitcher />
    </nav>
  );
}
\`\`\`

### Customizing Dark/Light Tokens

Override colors per theme using CSS media queries or class selectors:

\`\`\`css
:root {
  --background: #0A0A0A;
  --text: #F9FAFB;
}

.light {
  --background: #FFFFFF;
  --text: #111827;
}
\`\`\`

### Best Practices

1. **Test both modes** — Always verify components in light and dark themes
2. **Use opacity for borders** — \`border-gray-800/60\` works in both modes
3. **Avoid pure black** — Use \`#0A0A0A\` instead of \`#000\` for softer dark backgrounds
4. **Use CSS variables** — Reference \`var(--background)\` rather than hardcoded colors`,
      },
      {
        slug: "animations",
        title: "Animations",
        description: "Configuring and customizing Framer Motion animations.",
        content: `## Animations

ForgeUI uses **Framer Motion** for all animations, providing smooth, GPU-accelerated transitions.

### Installation

Framer Motion is a core dependency:

\`\`\`bash
npm install framer-motion
\`\`\`

### Basic Usage

Import motion components and apply animations:

\`\`\`tsx
import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
\`\`\`

### ForgeUI Animation Presets

Use the pre-built animation primitives from the [Animation Library](/animations):

| Animation | Use Case |
|---|---|
| Fade Up | Section reveals on scroll |
| Scale Bounce | Button & card interactions |
| Magnetic Button | Premium hover effects |
| Glow Pulse | Ambient background effects |
| Text Stagger | Hero headline reveals |
| 3D Flip | Card hover interactions |

### Custom CSS Animations

ForgeUI also provides CSS keyframe animations in \`globals.css\`:

\`\`\`css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
\`\`\`

### Performance Tips

1. **Use \`will-change\` sparingly** — Only on actively animating elements
2. **Prefer \`transform\` and \`opacity\`** — These are GPU-accelerated
3. **Use \`layout\` prop carefully** — It can cause reflows on complex layouts
4. **Lazy load animations** — Use intersection observers for scroll animations`,
      },
    ],
  },
  {
    title: "API Reference",
    slug: "api",
    items: [
      {
        slug: "reference",
        title: "API Reference",
        description: "Complete API documentation for ForgeUI utilities and hooks.",
        content: `## API Reference

### Utility Functions

#### \`cn(...inputs: ClassValue[])\`

Merges Tailwind CSS classes with conflict resolution:

\`\`\`typescript
import { cn } from "@/lib/utils";

// Basic usage
cn("text-red-500", "text-blue-500"); // → "text-blue-500"

// Conditional classes
cn("px-4 py-2", isActive && "bg-purple-600", className);

// Array input
cn(["rounded-xl", "border", condition && "border-purple-500"]);
\`\`\`

### Component Registry

The component registry (\`src/lib/registry.ts\`) is the single source of truth:

\`\`\`typescript
interface ComponentRegistryEntry {
  name: string;        // Display name
  slug: string;        // URL-safe identifier
  category: string;    // Category grouping
  description: string; // Short description
  variants: string[];  // Available visual variants
  props: PropDoc[];    // Prop documentation
  code: string;        // Raw source code
  installCmd: string;  // CLI install command
  accessibility: string; // A11y notes
}
\`\`\`

### Theme API

Themes are defined in \`src/lib/themes.ts\`:

\`\`\`typescript
interface ThemePreset {
  id: string;          // Theme identifier
  name: string;        // Display name
  primary: string;     // Primary color hex
  secondary: string;   // Secondary color hex
  accent: string;      // Accent color hex
  background: string;  // Background color
  cssVariables: string; // Exportable CSS
}
\`\`\`

### Animation API

Animations are cataloged in \`src/lib/animations.ts\`:

\`\`\`typescript
interface AnimationItem {
  slug: string;        // Animation identifier
  name: string;        // Display name
  category: string;    // Animation category
  framerCode: string;  // Copy-paste Framer Motion code
}
\`\`\``,
      },
    ],
  },
  {
    title: "Resources",
    slug: "resources",
    items: [
      {
        slug: "faq",
        title: "FAQ",
        description: "Frequently asked questions about ForgeUI.",
        content: `## Frequently Asked Questions

### Is ForgeUI free?

**Yes!** ForgeUI is 100% open-source and released under the MIT License. You can use it in personal and commercial projects without any cost.

### What frameworks does ForgeUI support?

ForgeUI is primarily designed for **Next.js 15** with **React 19** and **Tailwind CSS v4**. However, since components are plain React + Tailwind, they can be adapted to:

- Vite + React
- Remix
- Astro
- Any React-based framework

### Do I need to install all components?

**No.** ForgeUI uses a copy-paste / CLI-based approach. You only add the components you need:

\`\`\`bash
npx forgeui add button
npx forgeui add modal
\`\`\`

There's no monolithic package to install.

### How do I update components?

Re-run the CLI add command to get the latest version:

\`\`\`bash
npx forgeui add button --force
\`\`\`

Since components live in your project, you have full control to customize them.

### Can I use ForgeUI with JavaScript instead of TypeScript?

Yes. Set \`typescript: false\` in your \`forgeui.config.ts\` and the CLI will generate JavaScript files.

### How accessible are the components?

All ForgeUI components follow **WCAG 2.1 AA** guidelines:
- Keyboard navigation support
- ARIA attributes and roles
- Focus visible indicators
- Screen reader compatibility
- Color contrast compliance

### Does ForgeUI support SSR?

Yes! ForgeUI is built with **Next.js Server Components** in mind. Components use \`"use client"\` only when interactivity is required, minimizing client-side JavaScript.

### Can I contribute to ForgeUI?

Absolutely! ForgeUI is open-source and welcomes contributions. Check out our GitHub repository for contribution guidelines.`,
      },
      {
        slug: "changelog",
        title: "Changelog",
        description: "Release notes and version history.",
        content: `## Changelog

### v1.0.0 — Initial Release

**Release Date:** July 2026

🎉 **ForgeUI v1.0 is here!** The first stable release of the ForgeUI Ecosystem.

#### Components (100+)
- **Form:** Button, Input, Checkbox, Radio, Select, Textarea
- **Display:** Avatar, Badge, Alert, Tooltip, Accordion, Tabs, Carousel, Timeline
- **Navigation:** Breadcrumb, Pagination, Navbar, Sidebar, Dropdown
- **Feedback:** Toast, Modal, Drawer
- **Data:** Table, Charts
- **Commerce:** Pricing Cards, Testimonials

#### Templates (12)
- SaaS Landing, AI Startup, Dashboard, Portfolio, E-Commerce, Agency, Blog, Waitlist, Restaurant, Medical, Education, Travel

#### Themes (10)
- Modern Purple, Glassmorphism, Electric Neon, Cyberpunk, Royal Luxury, Enterprise Blue, Clean Minimal, Emerald Forest, Soft Pastel, Pure Monochrome

#### Animations (13+)
- Fade Up, Scale Bounce, Magnetic Button, Glow Pulse, Text Stagger, 3D Flip, and more

#### Developer Tools
- Theme Builder, Gradient Generator, Color Palette Generator, Shadow Generator, Border Radius Generator

#### AI Generator
- Prompt-to-component generation with multi-framework output

#### CLI
- \`npx forgeui init\` / \`add\` / \`theme\` / \`list\` commands

---

### Upcoming: v1.1.0

- 🆕 20 new components (DatePicker, CommandMenu, DataGrid, Charts)
- 🎨 5 new theme presets
- 🤖 Improved AI generation quality
- 📱 React Native component variants
- 🌐 Vue & Svelte adapter packages`,
      },
    ],
  },
];

// Helper to find a doc page by slug path
export function findDocPage(slugPath: string[]): { section: DocSection; page: DocPage } | null {
  if (!slugPath || slugPath.length === 0) {
    // Return first page as default
    return { section: DOC_SECTIONS[0], page: DOC_SECTIONS[0].items[0] };
  }

  for (const section of DOC_SECTIONS) {
    if (section.slug === slugPath[0]) {
      if (slugPath.length === 1) {
        return { section, page: section.items[0] };
      }
      const page = section.items.find((item) => item.slug === slugPath[1]);
      if (page) {
        return { section, page };
      }
    }
  }
  return null;
}

// Helper to get prev/next navigation
export function getDocNavigation(currentSectionSlug: string, currentPageSlug: string) {
  const allPages: { section: DocSection; page: DocPage }[] = [];
  for (const section of DOC_SECTIONS) {
    for (const page of section.items) {
      allPages.push({ section, page });
    }
  }

  const currentIdx = allPages.findIndex(
    (p) => p.section.slug === currentSectionSlug && p.page.slug === currentPageSlug
  );

  return {
    prev: currentIdx > 0 ? allPages[currentIdx - 1] : null,
    next: currentIdx < allPages.length - 1 ? allPages[currentIdx + 1] : null,
  };
}
