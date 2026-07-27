# ForgeUI — Craft Beautiful Interfaces

Premium, open-source UI ecosystem for modern web development. Built for Next.js 15, React 19, and Tailwind CSS v4.

## Features

- **100+ Production Components** — Accessible, dark-mode first React 19 components with full source code, variants, and props documentation.
- **12 Full-Page Templates** — Complete landing pages, SaaS apps, dashboards, portfolios, and e-commerce stores ready to deploy.
- **10 Preset Themes & Builder** — Glass, Neon, Cyberpunk, Luxury, Monochrome, and more. Live CSS variable editor.
- **Framer Motion Primitives** — Magnetic buttons, card stacks, scroll reveals, particle effects, and mouse-follow animations.
- **CLI Component Installer** — Run `npx forgeui add button` directly from your terminal. Zero config, instant integration.
- **AI UI Generator** — Prompt-to-UI engine that crafts React, Tailwind, HTML, Vue, and Svelte code on demand.
- **Developer Tools** — Color palette generator, gradient generator, shadow generator, border-radius playground, animation playground, and code playground.

## Installation

Add ForgeUI to your existing project:

```bash
npm install @forgeui/react
# or
yarn add @forgeui/react
# or
pnpm add @forgeui/react
```

## Usage

```tsx
import { Button, Card, Badge } from "@forgeui/react";

export default function Dashboard() {
  return (
    <Card className="p-6">
      <Badge variant="purple">Revenue</Badge>
      <h2 className="text-3xl font-bold">$48,200</h2>
      <Button>Deploy Now</Button>
    </Card>
  );
}
```

## CLI

Install individual components without bloating your bundle:

```bash
npx forgeui add button
npx forgeui add card
npx forgeui add modal
```

## Tech Stack

- [Next.js 15](https://nextjs.org) — React framework with App Router
- [React 19](https://react.dev) — UI library
- [Tailwind CSS v4](https://tailwindcss.com) — Utility-first CSS
- [Framer Motion](https://motion.dev) — Animation library
- [TypeScript](https://typescriptlang.org) — Type safety
- [Lucide](https://lucide.dev) — Icons
- [next-themes](https://github.com/pacocoursey/next-themes) — Theme switching

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── components/   # Component library browser
│   ├── templates/    # Full-page template previews
│   ├── themes/       # Theme showcase and builder
│   ├── animations/   # Animation playground
│   ├── ai/           # AI UI generator
│   ├── docs/         # Documentation pages
│   ├── tools/        # Developer tools
│   └── admin/        # Admin dashboard
├── components/
│   ├── ui/           # Core UI components
│   ├── marketing/    # Marketing page sections
│   ├── shared/       # Shared layout components
│   └── docs/         # Documentation components
└── lib/              # Utilities and data
```
