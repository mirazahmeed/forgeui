/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COMPONENT_REGISTRY } from "@/lib/registry";
import { ArrowLeft, Copy, Check, Terminal, Shield, Sparkles, Code2, Eye, Sliders } from "lucide-react";
import {
  Button, Input, Checkbox, Avatar, Badge, Alert, Modal, PricingCard,
  RadioGroup, Select, Textarea, Switch, Slider, Tooltip, Accordion,
  Tabs, Timeline, Progress, Breadcrumb, Pagination, Dropdown, Stepper,
  ToastContainer, Drawer, Skeleton, DataTable, StatCard, Calendar,
  ProductCard, FeatureGrid, HeroBlock, AuthCard, ActivityLog, Navbar,
  Dock, CustomLink, Megamenu, Fab, Swap, ThemeController, Loading,
  RadialProgress, Aura, Card, Carousel, ChatBubble, Collapse, Countdown,
  Diff, Hover3DCard, HoverGallery, Kbd, List, Status, TextRotate,
  Fieldset, FileInput, Filter, Label, Rating, Validator, OtpInput,
  Divider, Footer, Indicator, Join, Mask, Stack, MockupBrowser,
  MockupCode, MockupPhone, MockupWindow
} from "@/components/ui";
import { ComponentSidebar } from "@/components/shared/component-sidebar";

export default function ComponentDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const component = COMPONENT_REGISTRY.find((c) => c.slug === slug);

  const [activeTab, setActiveTab] = React.useState<"preview" | "code" | "props">("preview");
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [selectedVariant, setSelectedVariant] = React.useState<string>(component?.variants[0] || "default");
  const [modalOpen, setModalOpen] = React.useState(false);

  if (!component) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white">Component Not Found</h2>
        <p className="text-gray-400 text-sm">The requested component does not exist in the registry.</p>
        <Link href="/components" className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold">
          Back to Components
        </Link>
      </div>
    );
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(component.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText(component.installCmd);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Navigation Sidebar matching requested sub-menu */}
        <ComponentSidebar />

        {/* Main Content Area */}
        <div className="flex-1 space-y-8 min-w-0">
        {/* Top Breadcrumb */}
        <Link
          href="/components"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Component Library</span>
        </Link>

        {/* Title Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-purple-950 text-purple-300 border border-purple-800/50 uppercase">
              {component.category}
            </span>
            <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> React 19 + TypeScript
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            {component.name}
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
            {component.description}
          </p>
        </div>

        {/* CLI Install Bar */}
        <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-between gap-4 font-mono text-xs shadow-inner">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="text-gray-500">$</span>
            <span className="text-purple-300 font-semibold">{component.installCmd}</span>
          </div>
          <button
            onClick={handleCopyCli}
            className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {copiedCli ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCli ? "Copied" : "Copy CLI"}</span>
          </button>
        </div>

        {/* Component Interactive Sandbox Box */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
          {/* Header Controls */}
          <div className="p-4 border-b border-gray-800 bg-gray-950 flex flex-wrap items-center justify-between gap-4">
            {/* Variant selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500 mr-1">Variant:</span>
              {component.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`text-xs font-mono px-2.5 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                    selectedVariant === v ? "bg-purple-600 text-white font-bold" : "bg-gray-850 text-gray-400 hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* View Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  activeTab === "preview" ? "bg-gray-800 text-purple-300 border border-purple-500/40" : "text-gray-400 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" /> Preview
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
                  activeTab === "code" ? "bg-gray-800 text-purple-300 border border-purple-500/40" : "text-gray-400 hover:text-white"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 inline mr-1" /> Code
              </button>

              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-200 text-xs hover:bg-purple-900/60 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
                <span>{copiedCode ? "Copied" : "Copy Code"}</span>
              </button>
            </div>
          </div>

          {/* Interactive Rendering Area */}
          <div className="p-10 min-h-[300px] flex items-center justify-center bg-gray-950/60">
            {activeTab === "preview" ? (
              <div className="w-full max-w-md flex flex-col items-center justify-center text-center">
                {slug === "button" && (
                  <Button variant={selectedVariant as any} size="lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    ForgeUI {selectedVariant} Button
                  </Button>
                )}

                {slug === "input" && (
                  <Input
                    label="Developer Email"
                    placeholder="dev@forgeui.dev"
                    error={selectedVariant === "error" ? "Please enter a valid developer email." : undefined}
                  />
                )}

                {slug === "checkbox" && (
                  <Checkbox label={selectedVariant === "labeled" ? "Labeled Checkbox Option" : "Accept ForgeUI Terms & License"} checked={selectedVariant === "default"} />
                )}

                {slug === "radio" && (
                  <RadioGroup
                    options={[
                      { value: "starter", label: "Starter Plan", description: "Free for open-source" },
                      { value: "pro", label: "Pro Plan", description: "For professional developers" },
                    ]}
                    value={selectedVariant === "card" ? "pro" : "starter"}
                  />
                )}

                {slug === "select" && (
                  <Select
                    options={[
                      { value: "react", label: "React 19" },
                      { value: "next", label: "Next.js 15" },
                      { value: "tailwind", label: "Tailwind CSS v4" },
                    ]}
                    value={selectedVariant === "dark" ? "tailwind" : "next"}
                  />
                )}

                {slug === "textarea" && (
                  <Textarea label="Project Feedback" placeholder="Describe your experience with ForgeUI..." maxLength={200} />
                )}

                {slug === "switch" && (
                  <Switch label={selectedVariant === "labeled" ? "Labeled Toggle Switch" : "Enable Dark Mode Glassmorphism"} checked={selectedVariant !== "disabled"} />
                )}

                {slug === "slider" && (
                  <Slider label="Component Opacity" value={75} />
                )}

                {slug === "avatar" && (
                  <Avatar fallback="FU" status={selectedVariant === "status-online" ? "online" : undefined} />
                )}

                {slug === "badge" && (
                  <Badge variant={selectedVariant as any}>
                    {selectedVariant.toUpperCase()} BADGE
                  </Badge>
                )}

                {slug === "alert" && (
                  <Alert title="System Notice" variant={selectedVariant as any}>
                    Component state updated successfully across dark mode tokens.
                  </Alert>
                )}

                {slug === "tooltip" && (
                  <Tooltip content="Tooltip overlay text" position={selectedVariant as any || "top"}>
                    <Button variant="outline">Hover over me</Button>
                  </Tooltip>
                )}

                {slug === "accordion" && (
                  <Accordion
                    className="w-full"
                    items={[
                      { id: "1", title: "What is ForgeUI?", content: "ForgeUI is a premium UI component ecosystem built for Next.js 15 and Tailwind CSS." },
                      { id: "2", title: "Is it open source?", content: "Yes! ForgeUI is completely free and open source under the MIT license." },
                    ]}
                  />
                )}

                {slug === "tabs" && (
                  <Tabs
                    className="w-full"
                    tabs={[
                      { id: "preview", label: "Preview", content: <div className="p-4 bg-gray-900 rounded-xl">Live preview tab content panel.</div> },
                      { id: "code", label: "Code", content: <div className="p-4 bg-gray-900 rounded-xl font-mono text-purple-300">Code tab content panel.</div> },
                    ]}
                  />
                )}

                {slug === "timeline" && (
                  <Timeline
                    className="w-full text-left"
                    items={[
                      { title: "v1.0 Released", date: "Jul 2026", description: "First public release of ForgeUI platform." },
                      { title: "AI Generator Beta", date: "Aug 2026", description: "Prompt-to-component AI integration." },
                    ]}
                  />
                )}

                {slug === "progress" && (
                  <Progress label="Installation Progress" value={78} className="w-full" />
                )}

                {slug === "breadcrumb" && (
                  <Breadcrumb
                    items={[
                      { label: "Home", href: "/" },
                      { label: "Components", href: "/components" },
                      { label: "Breadcrumb" },
                    ]}
                  />
                )}

                {slug === "pagination" && (
                  <Pagination currentPage={2} totalPages={5} />
                )}

                {slug === "dropdown" && (
                  <Dropdown
                    trigger={<Button variant="outline">Options Menu</Button>}
                    items={[
                      { id: "profile", label: "View Profile" },
                      { id: "settings", label: "Settings" },
                      { id: "logout", label: "Sign Out", danger: true },
                    ]}
                  />
                )}

                {slug === "dock" && (
                  <Dock className="w-full justify-center" />
                )}

                {slug === "link" && (
                  <div className="space-y-4">
                    <CustomLink href="/components" variant="underline">Standard Underline Link</CustomLink>
                    <div />
                    <CustomLink href="https://github.com" external variant="external">External Documentation Link</CustomLink>
                  </div>
                )}

                {slug === "megamenu" && (
                  <Megamenu className="w-full" />
                )}

                {slug === "menu" && (
                  <Dropdown
                    trigger={<Button variant="outline">Open Menu</Button>}
                    items={[
                      { id: "1", label: "Profile Settings" },
                      { id: "2", label: "Billing" },
                      { id: "3", label: "Log out", danger: true },
                    ]}
                  />
                )}

                {slug === "navbar" && (
                  <Navbar variant={selectedVariant as any || "glass"} className="w-full" />
                )}

                {slug === "fab" && <Fab />}
                {slug === "swap" && <Swap />}
                {slug === "theme-controller" && <ThemeController />}
                {slug === "loading" && <Loading variant={selectedVariant as any || "spinner"} size="lg" />}
                {slug === "radial-progress" && <RadialProgress value={85} size={90} />}
                {slug === "aura" && <Aura className="w-full max-w-md" />}
                {slug === "card" && <Card title="Enterprise Dashboard" description="Live analytics stream overview." className="w-full max-w-sm" />}
                {slug === "carousel" && <Carousel className="w-full max-w-md" />}
                {slug === "chat-bubble" && <ChatBubble message="ForgeUI primitives are fully interactive." position={selectedVariant as any || "left"} />}
                {slug === "collapse" && <Collapse title="Accordion Panel Overview" className="w-full max-w-md" />}
                {slug === "countdown" && <Countdown initialSeconds={4200} />}
                {slug === "diff" && <Diff className="w-full max-w-md" />}
                {slug === "hover-3d-card" && <Hover3DCard className="w-full max-w-sm" />}
                {slug === "hover-gallery" && <HoverGallery className="w-full max-w-md" />}
                {slug === "kbd" && <Kbd>⌘ Shift K</Kbd>}
                {slug === "list" && <List />}
                {slug === "status" && <Status state={selectedVariant as any || "online"} label={selectedVariant === "busy" ? "Server Under Load" : "All Systems Operational"} />}
                {slug === "text-rotate" && (
                  <div className="text-xl font-bold text-white flex gap-2">
                    ForgeUI is <TextRotate words={["Blazing Fast", "Glassmorphic", "Accessible", "AI Ready"]} />
                  </div>
                )}
                {slug === "fieldset" && <Fieldset legend="Account Identity" className="w-full max-w-md"><Input placeholder="Enter username..." /></Fieldset>}
                {slug === "file-input" && <FileInput className="w-full max-w-md" />}
                {slug === "filter" && <Filter />}
                {slug === "label" && <Label required>Corporate Email Address</Label>}
                {slug === "rating" && <Rating defaultValue={selectedVariant === "stars" ? 4 : 5} />}
                {slug === "validator" && <Validator isValid={selectedVariant !== "error"}><Input placeholder="Developer Email" /></Validator>}
                {slug === "otp" && <OtpInput length={selectedVariant === "6-digit" ? 6 : 4} />}
                {slug === "divider" && <Divider label="OR CONTINUE WITH" orientation={selectedVariant === "vertical" ? "vertical" : "horizontal"} className={selectedVariant === "vertical" ? "h-24" : "w-full max-w-md"} />}
                {slug === "footer" && <Footer className="w-full rounded-2xl" />}
                {slug === "indicator" && <Indicator badge="LIVE"><Button variant="glow">Activity Stream</Button></Indicator>}
                {slug === "join" && <Join />}
                {slug === "mask" && <Mask shape={selectedVariant as any || "squircle"} />}
                {slug === "stack" && <Stack />}
                {slug === "mockup-browser" && <MockupBrowser className="w-full max-w-lg" />}
                {slug === "mockup-code" && <MockupCode className="w-full max-w-lg" />}
                {slug === "mockup-phone" && <MockupPhone />}
                {slug === "mockup-window" && <MockupWindow className="w-full max-w-lg" />}

                {slug === "stepper" && (
                  <Stepper
                    className="w-full"
                    currentStep={2}
                    steps={[
                      { title: "Details" },
                      { title: "Payment" },
                      { title: "Complete" },
                    ]}
                  />
                )}

                {slug === "modal" && (
                  <div>
                    <Button onClick={() => setModalOpen(true)}>Open Modal Dialog</Button>
                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="ForgeUI Modal Dialog">
                      <p className="text-sm text-gray-300 mb-4">
                        This is an interactive dialog overlay component.
                      </p>
                      <Button onClick={() => setModalOpen(false)} className="w-full">
                        Close Modal
                      </Button>
                    </Modal>
                  </div>
                )}

                {slug === "toast" && (
                  <div className="space-y-3">
                    <Button onClick={() => setModalOpen(true)}>Trigger {selectedVariant} Toast</Button>
                    {modalOpen && (
                      <ToastContainer
                        toasts={[{ id: "1", title: selectedVariant === "error" ? "Error!" : selectedVariant === "info" ? "Info" : "Success!", description: "Component saved to library.", type: selectedVariant as any || "success" }]}
                        onDismiss={() => setModalOpen(false)}
                      />
                    )}
                  </div>
                )}

                {slug === "drawer" && (
                  <div>
                    <Button onClick={() => setModalOpen(true)}>Open Drawer</Button>
                    <Drawer isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Filter Settings">
                      <p className="text-xs text-gray-400">Side drawer overlay content panel.</p>
                    </Drawer>
                  </div>
                )}

                {slug === "skeleton" && (
                  <div className="w-full space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                )}

                {slug === "table" && (
                  <DataTable
                    className="w-full"
                    columns={[
                      { key: "name", header: "Name" },
                      { key: "role", header: "Role" },
                      { key: "status", header: "Status" },
                    ]}
                    data={[
                      { name: "Alex Chen", role: "Frontend Engineer", status: "Active" },
                      { name: "Sarah Miller", role: "UI Designer", status: "Active" },
                    ]}
                  />
                )}

                {slug === "stat-card" && (
                  <StatCard title="Total Downloads" value="142.8K" change="+24%" isPositive={true} className="w-full" />
                )}

                {slug === "calendar" && (
                  <Calendar />
                )}

                {slug === "pricing" && (
                  <PricingCard
                    plan={selectedVariant === "popular" ? "Enterprise" : "Developer Pro"}
                    price={selectedVariant === "popular" ? "$99" : "$29"}
                    features={selectedVariant === "popular" ? ["Unlimited Components", "Priority Support", "Custom Themes", "Team License"] : ["100+ Components", "12 Templates", "CLI Commands"]}
                    isPopular={selectedVariant === "popular"}
                  />
                )}

                {slug === "product-card" && (
                  <ProductCard title="ForgeUI Studio Kit" price="$49.00" category="Component Kit" className="w-full max-w-xs" />
                )}

                {slug === "feature-grid" && (
                  <FeatureGrid
                    className="w-full"
                    items={[
                      { title: "Fast Scaffolding", description: "CLI commands to add components instantly.", icon: Sparkles },
                      { title: "Fully Typed", description: "Built with TypeScript for maximum type safety.", icon: Code2 },
                    ]}
                  />
                )}

                {slug === "hero-block" && (
                  <HeroBlock className="w-full py-8" />
                )}

                {slug === "auth-card" && (
                  <AuthCard className="w-full" />
                )}

                {slug === "activity-log" && (
                  <ActivityLog
                    className="w-full text-left"
                    items={[
                      { action: "Created component", item: "Button", time: "5 min ago" },
                      { action: "Updated theme", item: "Royal Luxury", time: "1 hour ago" },
                    ]}
                  />
                )}
              </div>
            ) : (
              <pre className="w-full overflow-x-auto text-left font-mono text-xs text-purple-200 bg-gray-950 p-4 rounded-xl border border-gray-800">
                <code>{component.code}</code>
              </pre>
            )}
          </div>
        </div>

        {/* Props Documentation Table */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-heading">Props API</h3>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-950 text-purple-400 font-mono">
                  <th className="py-3 px-4">Prop</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Default</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80 text-gray-300">
                {component.props.map((p) => (
                  <tr key={p.name} className="hover:bg-gray-850/50">
                    <td className="py-3 px-4 font-mono font-bold text-white">{p.name}</td>
                    <td className="py-3 px-4 font-mono text-purple-300">{p.type}</td>
                    <td className="py-3 px-4 font-mono text-gray-400">{p.default}</td>
                    <td className="py-3 px-4 text-gray-400">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accessibility Notes Box */}
        <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-800/40 space-y-2">
          <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-400" /> Accessibility Standards
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed">
            {component.accessibility}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
