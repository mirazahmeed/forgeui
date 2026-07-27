import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ForgeUI — Craft Beautiful Interfaces",
    template: "%s | ForgeUI",
  },
  description: "Premium, open-source UI ecosystem featuring 100+ components, templates, themes, animations, AI tools, and CLI scaffolding for Next.js 15.",
  keywords: ["Tailwind CSS", "React Components", "Next.js 15", "UI Library", "Framer Motion", "Design System", "Component Library", "Open Source"],
  authors: [{ name: "ForgeUI Team", url: "https://forgeui.dev" }],
  creator: "ForgeUI",
  category: "Technology",
  metadataBase: new URL("https://forgeui.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "ForgeUI — Craft Beautiful Interfaces",
    description: "Craft modern web applications faster with beautifully designed components, templates, and animations.",
    url: "https://forgeui.dev",
    siteName: "ForgeUI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForgeUI — Craft Beautiful Interfaces",
    description: "Premium open-source UI ecosystem for modern web development.",
    creator: "@forgeui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100 font-sans antialiased selection:bg-purple-600 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
