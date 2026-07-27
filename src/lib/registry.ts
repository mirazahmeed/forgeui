export interface PropDoc {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface ComponentItem {
  slug: string;
  name: string;
  category: "form" | "display" | "navigation" | "feedback" | "data" | "commerce" | "pages" | "admin" | "actions" | "layout" | "mockup";
  description: string;
  installCmd: string;
  variants: string[];
  props: PropDoc[];
  accessibility: string;
  code: string;
}

export const COMPONENT_REGISTRY: ComponentItem[] = [
  // FORM COMPONENTS
  {
    slug: "button",
    name: "Button",
    category: "form",
    description: "Interactive button primitive with primary, secondary, glow, outline, and icon variants.",
    installCmd: "npx forgeui add button",
    variants: ["primary", "secondary", "outline", "glow", "danger", "ghost"],
    props: [
      { name: "variant", type: "'primary' | 'secondary' | 'outline' | 'glow' | 'danger'", default: "'primary'", description: "Visual style variant." },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Button dimensions." },
      { name: "isLoading", type: "boolean", default: "false", description: "Shows animated loading spinner." },
    ],
    accessibility: "Full keyboard focus rings, role='button', and aria-disabled support.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glow" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      primary: "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950",
      secondary: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-950",
      outline: "border border-purple-500/50 text-purple-300 hover:bg-purple-950/40",
      glow: "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 text-white shadow-xl glow-purple animate-pulse",
      danger: "bg-red-600 hover:bg-red-500 text-white",
      ghost: "text-gray-300 hover:bg-gray-800 hover:text-white",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {isLoading && <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";`
  },

  {
    slug: "input",
    name: "Input",
    category: "form",
    description: "Styled text input with support for icons, error messages, and dark mode borders.",
    installCmd: "npx forgeui add input",
    variants: ["default", "filled", "error"],
    props: [
      { name: "label", type: "string", default: "undefined", description: "Top input label string." },
      { name: "error", type: "string", default: "undefined", description: "Validation error message." },
      { name: "icon", type: "ReactNode", default: "undefined", description: "Leading input icon." },
    ],
    accessibility: "Associated aria-describedby for error labels, aria-invalid attributes.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && <label className="block text-xs font-semibold text-gray-300">{label}</label>}
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3 text-gray-400">{icon}</div>}
          <input
            ref={ref}
            className={cn(
              "w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all",
              icon && "pl-10",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";`
  },

  {
    slug: "checkbox",
    name: "Checkbox",
    category: "form",
    description: "Animated checkbox with custom checkmark icon and purple accent states.",
    installCmd: "npx forgeui add checkbox",
    variants: ["default", "purple", "cyan"],
    props: [
      { name: "checked", type: "boolean", default: "false", description: "Controlled checked state." },
      { name: "label", type: "string", default: "undefined", description: "Checkbox label." },
    ],
    accessibility: "Native checkbox input wrapper for full screen reader accessibility.",
    code: `import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checkbox({ label, checked, onChange, className }: { label?: string; checked?: boolean; onChange?: (checked: boolean) => void; className?: string }) {
  return (
    <label className={cn("inline-flex items-center gap-2.5 cursor-pointer select-none", className)}>
      <div
        onClick={() => onChange?.(!checked)}
        className={cn(
          "w-5 h-5 rounded-lg border border-gray-700 bg-gray-900 flex items-center justify-center transition-all",
          checked && "bg-purple-600 border-purple-500 shadow-md shadow-purple-950"
        )}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      {label && <span className="text-xs font-medium text-gray-300">{label}</span>}
    </label>
  );
}`
  },

  {
    slug: "radio",
    name: "Radio Group",
    category: "form",
    description: "Radio options list with animated active indicators and optional descriptions.",
    installCmd: "npx forgeui add radio",
    variants: ["default", "card"],
    props: [
      { name: "options", type: "RadioOption[]", default: "[]", description: "List of radio options." },
      { name: "value", type: "string", default: "undefined", description: "Selected radio option value." },
    ],
    accessibility: "Full keyboard focus support and role='radiogroup'.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export function RadioGroup({ options, value, onChange }: { options: RadioOption[]; value?: string; onChange?: (val: string) => void }) {
  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt.value} onClick={() => onChange?.(opt.value)} className="flex items-start gap-3 p-3 rounded-xl border bg-gray-900/60 cursor-pointer">
          <div className={cn("w-4 h-4 rounded-full border border-gray-700 mt-0.5 flex items-center justify-center", value === opt.value && "border-purple-500 bg-purple-600")}>
            {value === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">{opt.label}</span>
            {opt.description && <span className="text-[10px] text-gray-400 block mt-0.5">{opt.description}</span>}
          </div>
        </label>
      ))}
    </div>
  );
}`
  },

  {
    slug: "select",
    name: "Select / Combobox",
    category: "form",
    description: "Custom dropdown select menu with animated popover and keyboard selection.",
    installCmd: "npx forgeui add select",
    variants: ["default", "dark"],
    props: [
      { name: "options", type: "SelectOption[]", default: "[]", description: "Available select options." },
      { name: "value", type: "string", default: "undefined", description: "Currently selected option." },
    ],
    accessibility: "Role='combobox' and keyboard navigation support.",
    code: `import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({ options, value, onChange, placeholder = "Select an option" }: { options: { value: string; label: string }[]; value?: string; onChange?: (v: string) => void; placeholder?: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value);
  return (
    <div className="relative w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-left text-gray-100 flex items-center justify-between">
        <span className={selected ? "text-white font-medium" : "text-gray-500"}>{selected ? selected.label : placeholder}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden py-1">
          {options.map((opt) => (
            <button key={opt.value} onClick={() => { onChange?.(opt.value); setIsOpen(false); }} className="w-full px-4 py-2 text-xs text-left flex items-center justify-between hover:bg-gray-800 text-gray-300">
              <span>{opt.label}</span>
              {opt.value === value && <Check className="w-3.5 h-3.5 text-purple-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`
  },

  {
    slug: "textarea",
    name: "Textarea",
    category: "form",
    description: "Styled multi-line textarea input with character counter and resize handle.",
    installCmd: "npx forgeui add textarea",
    variants: ["default", "resizable"],
    props: [
      { name: "label", type: "string", default: "undefined", description: "Input title label." },
      { name: "maxLength", type: "number", default: "undefined", description: "Character counter limit." },
    ],
    accessibility: "Full aria-label and character count screen reader support.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, { label?: string; maxLength?: number }>(
  ({ label, maxLength, ...props }, ref) => (
    <div className="w-full space-y-1.5">
      {label && <label className="block text-xs font-semibold text-gray-300">{label}</label>}
      <textarea ref={ref} maxLength={maxLength} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 min-h-[90px]" {...props} />
    </div>
  )
);
Textarea.displayName = "Textarea";`
  },

  {
    slug: "switch",
    name: "Switch / Toggle",
    category: "form",
    description: "Smooth toggle switch component with animated indicator.",
    installCmd: "npx forgeui add switch",
    variants: ["default", "purple", "cyan"],
    props: [
      { name: "checked", type: "boolean", default: "false", description: "Toggle state." },
      { name: "label", type: "string", default: "undefined", description: "Switch label." },
    ],
    accessibility: "Role='switch' aria-checked attribute.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export function Switch({ checked = false, onChange, label }: { checked?: boolean; onChange?: (c: boolean) => void; label?: string }) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <button role="switch" aria-checked={checked} onClick={() => onChange?.(!checked)} className={cn("w-10 h-6 rounded-full p-0.5 transition-colors", checked ? "bg-purple-600" : "bg-gray-800")}>
        <div className={cn("w-5 h-5 rounded-full bg-white transition-transform", checked ? "translate-x-4" : "translate-x-0")} />
      </button>
      {label && <span className="text-xs font-semibold text-gray-300">{label}</span>}
    </label>
  );
}`
  },

  {
    slug: "slider",
    name: "Slider",
    category: "form",
    description: "Range slider input with value badge and track highlight.",
    installCmd: "npx forgeui add slider",
    variants: ["default", "purple"],
    props: [
      { name: "value", type: "number", default: "50", description: "Slider current value." },
      { name: "min", type: "number", default: "0", description: "Minimum limit." },
      { name: "max", type: "number", default: "100", description: "Maximum limit." },
    ],
    accessibility: "Native range input for accessibility.",
    code: `import * as React from "react";

export function Slider({ value = 50, onChange, label, min = 0, max = 100 }: { value?: number; onChange?: (v: number) => void; label?: string; min?: number; max?: number }) {
  return (
    <div className="w-full space-y-1.5">
      <div className="flex justify-between text-xs font-semibold text-gray-300">
        {label && <span>{label}</span>}
        <span className="font-mono text-purple-400">{value}</span>
      </div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange?.(Number(e.target.value))} className="w-full accent-purple-500 bg-gray-800 rounded-lg cursor-pointer h-2" />
    </div>
  );
}`
  },

  // DISPLAY COMPONENTS
  {
    slug: "avatar",
    name: "Avatar",
    category: "display",
    description: "User avatar component supporting images, initials fallback, and status indicator dot.",
    installCmd: "npx forgeui add avatar",
    variants: ["circle", "rounded", "status-online"],
    props: [
      { name: "src", type: "string", default: "undefined", description: "Image source URL." },
      { name: "fallback", type: "string", default: "'UI'", description: "Initials text fallback." },
      { name: "status", type: "'online' | 'offline' | 'busy'", default: "undefined", description: "Presence dot status." },
    ],
    accessibility: "Includes alt attributes and status aria-labels.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ src, fallback = "UI", status, className }: { src?: string; fallback?: string; status?: "online" | "offline" | "busy"; className?: string }) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-md">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
          {src ? <img src={src} alt="Avatar" className="w-full h-full object-cover" /> : fallback}
        </div>
      </div>
      {status && (
        <span className={cn("absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-950", status === "online" && "bg-green-500", status === "offline" && "bg-gray-500", status === "busy" && "bg-red-500")} />
      )}
    </div>
  );
}`
  },

  {
    slug: "badge",
    name: "Badge",
    category: "display",
    description: "Pill and badge component for status indicators, counts, and feature flags.",
    installCmd: "npx forgeui add badge",
    variants: ["purple", "cyan", "success", "warning", "danger"],
    props: [
      { name: "variant", type: "'purple' | 'cyan' | 'success' | 'warning' | 'danger'", default: "'purple'", description: "Color theme variant." },
    ],
    accessibility: "Screen reader friendly content encapsulation.",
    code: `import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ variant = "purple", children, className }: { variant?: "purple" | "cyan" | "success" | "warning" | "danger"; children: React.ReactNode; className?: string }) {
  const styles = {
    purple: "bg-purple-950/80 border-purple-800/60 text-purple-300",
    cyan: "bg-cyan-950/80 border-cyan-800/60 text-cyan-300",
    success: "bg-green-950/80 border-green-800/60 text-green-300",
    warning: "bg-amber-950/80 border-amber-800/60 text-amber-300",
    danger: "bg-red-950/80 border-red-800/60 text-red-300",
  };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono border", styles[variant], className)}>
      {children}
    </span>
  );
}`
  },

  {
    slug: "alert",
    name: "Alert",
    category: "display",
    description: "System notification banner with icon, title, description, and dismiss action.",
    installCmd: "npx forgeui add alert",
    variants: ["info", "success", "warning", "danger"],
    props: [
      { name: "title", type: "string", default: "undefined", description: "Alert header text." },
      { name: "variant", type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: "Visual alert type." },
    ],
    accessibility: "role='alert' attribute for assistive technologies.",
    code: `import * as React from "react";
import { AlertCircle, CheckCircle2, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Alert({ title, children, variant = "info", onClose }: { title?: string; children: React.ReactNode; variant?: "info" | "success" | "warning" | "danger"; onClose?: () => void }) {
  const icons = { info: <Info className="w-4 h-4 text-cyan-400" />, success: <CheckCircle2 className="w-4 h-4 text-green-400" />, warning: <AlertTriangle className="w-4 h-4 text-amber-400" />, danger: <AlertCircle className="w-4 h-4 text-red-400" /> };
  const borders = { info: "border-cyan-500/30 bg-cyan-950/30", success: "border-green-500/30 bg-green-950/30", warning: "border-amber-500/30 bg-amber-950/30", danger: "border-red-500/30 bg-red-950/30" };
  return (
    <div className={cn("p-4 rounded-xl border flex items-start gap-3 relative", borders[variant])} role="alert">
      {icons[variant]}
      <div className="flex-1 space-y-1">
        {title && <h4 className="text-xs font-bold text-white">{title}</h4>}
        <div className="text-xs text-gray-300 leading-relaxed">{children}</div>
      </div>
      {onClose && <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-4 h-4" /></button>}
    </div>
  );
}`
  },

  {
    slug: "tooltip",
    name: "Tooltip",
    category: "display",
    description: "Hover popover tooltip component supporting top, bottom, left, and right directions.",
    installCmd: "npx forgeui add tooltip",
    variants: ["top", "bottom", "left", "right"],
    props: [
      { name: "content", type: "string", default: "undefined", description: "Tooltip popup text." },
      { name: "position", type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: "Placement position." },
    ],
    accessibility: "Aria-describedby tooltip relationship.",
    code: `import * as React from "react";

export function Tooltip({ content, children, position = "top" }: { content: string; children: React.ReactNode; position?: "top" | "bottom" | "left" | "right" }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className="absolute z-50 px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-700 text-white text-[11px] shadow-xl whitespace-nowrap">{content}</div>}
    </div>
  );
}`
  },

  {
    slug: "accordion",
    name: "Accordion",
    category: "display",
    description: "Collapsible content panel list with expand/collapse animations.",
    installCmd: "npx forgeui add accordion",
    variants: ["single", "multiple"],
    props: [
      { name: "items", type: "AccordionItemData[]", default: "[]", description: "Accordion panels array." },
      { name: "allowMultiple", type: "boolean", default: "false", description: "Allows multiple open items." },
    ],
    accessibility: "Aria-expanded and aria-controls attributes.",
    code: `import * as React from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { id: string; title: string; content: string }[] }) {
  const [openId, setOpenId] = React.useState(items[0]?.id);
  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden">
          <button onClick={() => setOpenId(openId === item.id ? "" : item.id)} className="w-full p-4 text-xs font-bold text-left text-white flex items-center justify-between">
            <span>{item.title}</span>
            <ChevronDown className="w-4 h-4 text-purple-400" />
          </button>
          {openId === item.id && <div className="px-4 pb-4 text-xs text-gray-400">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}`
  },

  {
    slug: "tabs",
    name: "Tabs",
    category: "display",
    description: "Tabbed content container with active border indicators.",
    installCmd: "npx forgeui add tabs",
    variants: ["underline", "pills"],
    props: [
      { name: "tabs", type: "TabItemData[]", default: "[]", description: "Tab definitions array." },
    ],
    accessibility: "Role='tablist' and role='tab' navigation.",
    code: `import * as React from "react";

export function Tabs({ tabs }: { tabs: { id: string; label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = React.useState(tabs[0]?.id);
  return (
    <div className="space-y-4">
      <div className="flex border-b border-gray-800 gap-2">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActive(t.id)} className={\`px-4 py-2 text-xs font-semibold border-b-2 \${active === t.id ? "border-purple-500 text-purple-300 font-bold" : "border-transparent text-gray-400"}\`}>
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}`
  },

  {
    slug: "timeline",
    name: "Timeline",
    category: "display",
    description: "Vertical event history timeline with glow indicators.",
    installCmd: "npx forgeui add timeline",
    variants: ["default", "glowing"],
    props: [
      { name: "items", type: "TimelineItemData[]", default: "[]", description: "Timeline milestone items." },
    ],
    accessibility: "Ordered list timeline structure.",
    code: `import * as React from "react";

export function Timeline({ items }: { items: { title: string; date: string; description: string }[] }) {
  return (
    <div className="relative border-l border-gray-800 ml-3 space-y-6 py-2">
      {items.map((item, i) => (
        <div key={i} className="relative pl-6">
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500" />
          <h4 className="text-xs font-bold text-white">{item.title} <span className="text-[10px] font-mono text-purple-400 ml-2">{item.date}</span></h4>
          <p className="text-xs text-gray-400 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}`
  },

  {
    slug: "progress",
    name: "Progress Bar",
    category: "display",
    description: "Progress bar indicator with percentage output and gradient fill.",
    installCmd: "npx forgeui add progress",
    variants: ["default", "gradient"],
    props: [
      { name: "value", type: "number", default: "0", description: "Completion value." },
      { name: "max", type: "number", default: "100", description: "Maximum value." },
    ],
    accessibility: "Role='progressbar' aria-valuenow attributes.",
    code: `import * as React from "react";

export function Progress({ value = 50 }: { value?: number }) {
  return (
    <div className="w-full space-y-1">
      <div className="text-right text-xs font-mono text-purple-400">{value}%</div>
      <div className="w-full h-2.5 bg-gray-900 border border-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-600 to-cyan-400 transition-all duration-300" style={{ width: \`\${value}%\` }} />
      </div>
    </div>
  );
}`
  },

  // NAVIGATION COMPONENTS
  {
    slug: "breadcrumb",
    name: "Breadcrumbs",
    category: "navigation",
    description: "Hierarchy link trail for section navigation.",
    installCmd: "npx forgeui add breadcrumb",
    variants: ["default", "chevron"],
    props: [
      { name: "items", type: "BreadcrumbItemData[]", default: "[]", description: "Navigation path items." },
    ],
    accessibility: "Aria-label='Breadcrumb' landmark navigation.",
    code: `import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-600" />}
          {item.href ? <Link href={item.href} className="hover:text-purple-300">{item.label}</Link> : <span className="text-white font-bold">{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}`
  },

  {
    slug: "dock",
    name: "Dock",
    category: "navigation",
    description: "macOS-style floating dock navigation bar with hover icon scaling.",
    installCmd: "npx forgeui add dock",
    variants: ["glass", "floating"],
    props: [
      { name: "items", type: "DockItem[]", default: "[]", description: "Dock item icons and routes." },
    ],
    accessibility: "Full keyboard focus support and role='navigation'.",
    code: `import * as React from "react";
import Link from "next/link";
import { Home, Layers, Sparkles, Settings } from "lucide-react";

export function Dock({ items }: { items: any[] }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gray-900/90 border border-gray-800 shadow-2xl">
      {items.map((item, idx) => (
        <Link key={idx} href={item.href} className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
          <item.icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}`
  },

  {
    slug: "link",
    name: "Link",
    category: "navigation",
    description: "Styled interactive text link primitive with animated underline and external indicators.",
    installCmd: "npx forgeui add link",
    variants: ["underline", "external", "purple"],
    props: [
      { name: "href", type: "string", default: "undefined", description: "Target URL." },
      { name: "variant", type: "'underline' | 'external' | 'purple'", default: "'underline'", description: "Link style variant." },
      { name: "external", type: "boolean", default: "false", description: "Opens in new tab." },
    ],
    accessibility: "Accessible anchor tags with aria-label and external link warnings.",
    code: `import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CustomLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 font-semibold text-xs text-purple-300 hover:text-white">
      <span>{children}</span>
      {external && <ArrowUpRight className="w-3.5 h-3.5" />}
    </Link>
  );
}`
  },

  {
    slug: "megamenu",
    name: "Megamenu",
    category: "navigation",
    description: "Full-width rich mega dropdown navigation grid panel with section headers and icons.",
    installCmd: "npx forgeui add megamenu",
    variants: ["grid", "rich"],
    props: [],
    accessibility: "Aria-haspopup='true' and keyboard trap navigation.",
    code: `import * as React from "react";
import Link from "next/link";

export function Megamenu() {
  return (
    <div className="p-6 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl">
      <h4 className="text-xs font-bold text-white uppercase">Megamenu Navigation</h4>
    </div>
  );
}`
  },

  {
    slug: "menu",
    name: "Menu",
    category: "navigation",
    description: "Interactive context and dropdown action menu.",
    installCmd: "npx forgeui add menu",
    variants: ["default", "icons"],
    props: [
      { name: "items", type: "MenuItemData[]", default: "[]", description: "Menu action items array." },
    ],
    accessibility: "Role='menu' and role='menuitem' accessibility.",
    code: `import * as React from "react";

export function Menu({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="w-48 bg-gray-900 border border-gray-800 rounded-xl p-1 shadow-2xl">
      {items.map((i) => <button key={i.id} className="w-full px-3 py-2 text-xs text-left text-gray-300 hover:bg-gray-800 rounded-lg">{i.label}</button>)}
    </div>
  );
}`
  },

  {
    slug: "navbar",
    name: "Navbar",
    category: "navigation",
    description: "Responsive dark-glassmorphism navigation header bar with mega menu dropdowns, mobile drawer, and CTA actions.",
    installCmd: "npx forgeui add navbar",
    variants: ["glass", "floating", "solid"],
    props: [
      { name: "brandName", type: "string", default: "'ForgeUI'", description: "Brand title label." },
      { name: "items", type: "NavItem[]", default: "[]", description: "Array of navigation items and dropdown children." },
      { name: "variant", type: "'glass' | 'floating' | 'solid'", default: "'glass'", description: "Navbar style variant." },
    ],
    accessibility: "Semantic header landmark tag, keyboard dropdown navigation, and mobile hamburger aria-expanded states.",
    code: `import * as React from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar({ brandName = "ForgeUI" }: { brandName?: string }) {
  return (
    <header className="w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 h-16 flex items-center justify-between px-4">
      <Link href="/" className="font-extrabold text-white text-base">{brandName}</Link>
      <Button variant="glow" size="sm">Get Started</Button>
    </header>
  );
}`
  },

  {
    slug: "stepper",
    name: "Stepper",
    category: "navigation",
    description: "Multi-step progress wizard with completed state badges.",
    installCmd: "npx forgeui add stepper",
    variants: ["default", "numbers"],
    props: [
      { name: "steps", type: "StepperStep[]", default: "[]", description: "Steps array." },
      { name: "currentStep", type: "number", default: "1", description: "Current active step." },
    ],
    accessibility: "Aria-current='step' indicator.",
    code: `import * as React from "react";
import { Check } from "lucide-react";

export function Stepper({ steps, currentStep = 1 }: { steps: { title: string }[]; currentStep?: number }) {
  return (
    <div className="flex items-center gap-3 w-full">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className={\`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold \${idx + 1 <= currentStep ? "bg-purple-600 text-white" : "border-gray-800 text-gray-500"}\`}>
            {idx + 1 < currentStep ? <Check className="w-4 h-4" /> : idx + 1}
          </div>
          <span className="text-xs text-white">{step.title}</span>
        </div>
      ))}
    </div>
  );
}`
  },

  // FEEDBACK COMPONENTS
  {
    slug: "modal",
    name: "Modal",
    category: "feedback",
    description: "Overlay dialog box for user confirmations, forms, and alerts with smooth entrance animations.",
    installCmd: "npx forgeui add modal",
    variants: ["default", "glass", "danger"],
    props: [
      { name: "isOpen", type: "boolean", default: "false", description: "Modal visibility state." },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close request handler." },
      { name: "title", type: "string", default: "undefined", description: "Modal header title." },
    ],
    accessibility: "Traps keyboard focus, closes on ESC key, role='dialog'.",
    code: `import * as React from "react";
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title?: string; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md shadow-2xl p-6 relative">
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-lg font-bold text-white">{title}</h3>}
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"><X className="w-5 h-5" /></button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}`
  },

  {
    slug: "toast",
    name: "Toast Notification",
    category: "feedback",
    description: "Floating toast stack with auto-dismiss and alert types.",
    installCmd: "npx forgeui add toast",
    variants: ["info", "success", "error"],
    props: [
      { name: "toasts", type: "ToastMessage[]", default: "[]", description: "Active toasts." },
    ],
    accessibility: "Role='status' aria-live='polite' announcements.",
    code: `import * as React from "react";

export function ToastContainer({ toasts }: { toasts: { id: string; title: string; type?: string }[] }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 space-y-2">
      {toasts.map((t) => <div key={t.id} className="p-4 rounded-2xl bg-gray-900 border border-purple-500/40 text-xs font-bold text-white shadow-2xl">{t.title}</div>)}
    </div>
  );
}`
  },

  {
    slug: "drawer",
    name: "Drawer / Side Sheet",
    category: "feedback",
    description: "Side-panel drawer overlay for mobile menus and filter panels.",
    installCmd: "npx forgeui add drawer",
    variants: ["left", "right"],
    props: [
      { name: "isOpen", type: "boolean", default: "false", description: "Drawer open state." },
      { name: "position", type: "'left' | 'right'", default: "'right'", description: "Slide origin." },
    ],
    accessibility: "Role='dialog' with backdrop overlay.",
    code: `import * as React from "react";

export function Drawer({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="bg-gray-900 border-l border-gray-800 w-full max-w-sm h-full p-6">{children}</div>
    </div>
  );
}`
  },

  {
    slug: "skeleton",
    name: "Skeleton Loader",
    category: "feedback",
    description: "Shimmer pulse loading placeholder block for async content.",
    installCmd: "npx forgeui add skeleton",
    variants: ["pulse", "wave"],
    props: [
      { name: "className", type: "string", default: "undefined", description: "Dimensions styling." },
    ],
    accessibility: "Aria-busy='true' loading indicator.",
    code: `import * as React from "react";

export function Skeleton({ className }: { className?: string }) {
  return <div className={\`bg-gray-800/80 animate-pulse rounded-xl \${className}\`} />;
}`
  },

  // DATA COMPONENTS
  {
    slug: "table",
    name: "Data Table",
    category: "data",
    description: "Styled data table grid with custom column renderers.",
    installCmd: "npx forgeui add table",
    variants: ["default", "striped"],
    props: [
      { name: "columns", type: "TableColumn[]", default: "[]", description: "Column schemas." },
      { name: "data", type: "any[]", default: "[]", description: "Row data array." },
    ],
    accessibility: "Semantic table, th, td structure.",
    code: `import * as React from "react";

export function DataTable({ columns, data }: { columns: { key: string; header: string }[]; data: any[] }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden">
      <table className="w-full text-left text-xs">
        <thead className="bg-gray-950 text-gray-400 font-mono"><tr>{columns.map((c) => <th key={c.key} className="py-3 px-4">{c.header}</th>)}</tr></thead>
        <tbody className="divide-y divide-gray-800/60">{data.map((row, i) => <tr key={i}>{columns.map((c) => <td key={c.key} className="py-3 px-4 text-gray-300">{row[c.key]}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}`
  },

  {
    slug: "stat-card",
    name: "Stat Card",
    category: "data",
    description: "Metric KPI display card with percentage trends and icons.",
    installCmd: "npx forgeui add stat-card",
    variants: ["default", "trend"],
    props: [
      { name: "title", type: "string", default: "undefined", description: "Metric title." },
      { name: "value", type: "string", default: "undefined", description: "Metric primary value." },
    ],
    accessibility: "Semantic stat display.",
    code: `import * as React from "react";

export function StatCard({ title, value, change }: { title: string; value: string; change?: string }) {
  return (
    <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 space-y-3">
      <span className="text-[11px] text-gray-400 uppercase font-semibold">{title}</span>
      <div className="flex items-end justify-between"><span className="text-2xl font-extrabold text-white">{value}</span>{change && <span className="text-xs text-green-400 font-semibold">{change}</span>}</div>
    </div>
  );
}`
  },

  {
    slug: "calendar",
    name: "Calendar",
    category: "data",
    description: "Interactive date picker calendar view grid.",
    installCmd: "npx forgeui add calendar",
    variants: ["default", "dark"],
    props: [],
    accessibility: "Keyboard date cell navigation.",
    code: `import * as React from "react";

export function Calendar() {
  return (
    <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-xs max-w-xs space-y-2">
      <div className="font-bold text-white">July 2026</div>
      <div className="grid grid-cols-7 gap-1 text-center font-mono text-gray-400">{Array.from({ length: 31 }, (_, i) => i + 1).map((d) => <span key={d} className="p-1 rounded hover:bg-gray-800">{d}</span>)}</div>
    </div>
  );
}`
  },

  // COMMERCE COMPONENTS
  {
    slug: "pricing",
    name: "Pricing Cards",
    category: "commerce",
    description: "High-converting pricing plan card with popular tags, feature checklist, and CTA button.",
    installCmd: "npx forgeui add pricing",
    variants: ["standard", "popular", "enterprise"],
    props: [
      { name: "plan", type: "string", default: "undefined", description: "Plan tier name." },
      { name: "price", type: "string", default: "undefined", description: "Formatted price string." },
    ],
    accessibility: "Semantic heading structure.",
    code: `import * as React from "react";
import { Button } from "@/components/ui/button";

export function PricingCard({ plan, price }: { plan: string; price: string }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4">
      <h3 className="text-sm font-semibold text-gray-400">{plan}</h3>
      <div className="text-4xl font-extrabold text-white">{price}</div>
      <Button variant="primary" className="w-full">Subscribe</Button>
    </div>
  );
}`
  },

  {
    slug: "product-card",
    name: "Product Card",
    category: "commerce",
    description: "E-commerce product tile with star ratings and add-to-cart button.",
    installCmd: "npx forgeui add product-card",
    variants: ["default", "badge"],
    props: [
      { name: "title", type: "string", default: "undefined", description: "Product name." },
      { name: "price", type: "string", default: "undefined", description: "Price tag." },
    ],
    accessibility: "Product image alt tags and star ratings.",
    code: `import * as React from "react";

export function ProductCard({ title, price }: { title: string; price: string }) {
  return (
    <div className="rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden p-4 space-y-3">
      <div className="h-36 bg-purple-950/60 rounded-xl" />
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="text-base font-extrabold text-white">{price}</div>
    </div>
  );
}`
  },

  {
    slug: "feature-grid",
    name: "Feature Grid",
    category: "commerce",
    description: "Responsive 3-column feature showcase block with icons.",
    installCmd: "npx forgeui add feature-grid",
    variants: ["default", "hover-glow"],
    props: [
      { name: "items", type: "FeatureGridItemData[]", default: "[]", description: "Features list." },
    ],
    accessibility: "Semantic section feature list.",
    code: `import * as React from "react";

export function FeatureGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-2">
          <h4 className="text-sm font-bold text-white">{item.title}</h4>
          <p className="text-xs text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}`
  },

  // PAGES COMPONENTS
  {
    slug: "hero-block",
    name: "Hero Block",
    category: "pages",
    description: "Full hero section block with headline, badge, and dual CTA buttons.",
    installCmd: "npx forgeui add hero-block",
    variants: ["centered", "split"],
    props: [
      { name: "title", type: "string", default: "undefined", description: "Main hero headline." },
    ],
    accessibility: "H1 heading structure.",
    code: `import * as React from "react";
import { Button } from "@/components/ui/button";

export function HeroBlock({ title = "Build Apps Faster" }: { title?: string }) {
  return (
    <div className="py-16 text-center space-y-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white">{title}</h1>
      <Button variant="glow">Get Started</Button>
    </div>
  );
}`
  },

  {
    slug: "auth-card",
    name: "Auth Card",
    category: "pages",
    description: "Login and signup card container with form inputs.",
    installCmd: "npx forgeui add auth-card",
    variants: ["login", "register"],
    props: [],
    accessibility: "Accessible form labeling.",
    code: `import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthCard() {
  return (
    <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 space-y-4 max-w-sm mx-auto">
      <h3 className="text-lg font-bold text-white">Sign In</h3>
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="glow" className="w-full">Continue</Button>
    </div>
  );
}`
  },

  // NEW TAXONOMY COMPONENTS
  {
    slug: "fab",
    name: "FAB / Speed Dial",
    category: "actions",
    description: "Floating action button with animated action menu dial.",
    installCmd: "npx forgeui add fab",
    variants: ["default", "compact"],
    props: [],
    accessibility: "Aria-expanded speed dial controls.",
    code: `import { Fab } from "@/components/ui/fab";\n\nexport default function Demo() { return <Fab />; }`
  },
  {
    slug: "swap",
    name: "Swap",
    category: "actions",
    description: "Interactive icon toggle swap element.",
    installCmd: "npx forgeui add swap",
    variants: ["sun-moon", "volume"],
    props: [],
    accessibility: "Keyboard clickable toggle button.",
    code: `import { Swap } from "@/components/ui/swap";\n\nexport default function Demo() { return <Swap />; }`
  },
  {
    slug: "theme-controller",
    name: "Theme Controller",
    category: "actions",
    description: "Dropdown selector for switching color theme presets.",
    installCmd: "npx forgeui add theme-controller",
    variants: ["dropdown"],
    props: [],
    accessibility: "Role='listbox' accessible theme selector.",
    code: `import { ThemeController } from "@/components/ui/theme-controller";\n\nexport default function Demo() { return <ThemeController />; }`
  },
  {
    slug: "loading",
    name: "Loading",
    category: "feedback",
    description: "Spinner, ring, dots loading animation indicators.",
    installCmd: "npx forgeui add loading",
    variants: ["spinner", "dots", "ring"],
    props: [],
    accessibility: "Aria-busy='true' loading indicator.",
    code: `import { Loading } from "@/components/ui/loading";\n\nexport default function Demo() { return <Loading variant="dots" />; }`
  },
  {
    slug: "radial-progress",
    name: "Radial Progress",
    category: "feedback",
    description: "Circular SVG percentage meter progress indicator.",
    installCmd: "npx forgeui add radial-progress",
    variants: ["default"],
    props: [],
    accessibility: "Role='progressbar' radial meter.",
    code: `import { RadialProgress } from "@/components/ui/radial-progress";\n\nexport default function Demo() { return <RadialProgress value={75} />; }`
  },
  {
    slug: "aura",
    name: "Aura",
    category: "display",
    description: "Glowing ambient glass background container card.",
    installCmd: "npx forgeui add aura",
    variants: ["purple", "cyan"],
    props: [],
    accessibility: "Container landmark wrapper.",
    code: `import { Aura } from "@/components/ui/aura";\n\nexport default function Demo() { return <Aura />; }`
  },
  {
    slug: "card",
    name: "Card",
    category: "display",
    description: "Versatile content surface card container.",
    installCmd: "npx forgeui add card",
    variants: ["default"],
    props: [],
    accessibility: "Article/section semantics.",
    code: `import { Card } from "@/components/ui/card";\n\nexport default function Demo() { return <Card title="Card Title" description="Card body text" />; }`
  },
  {
    slug: "carousel",
    name: "Carousel",
    category: "display",
    description: "Slide switcher component with next/prev buttons.",
    installCmd: "npx forgeui add carousel",
    variants: ["default"],
    props: [],
    accessibility: "Role='region' carousel slider.",
    code: `import { Carousel } from "@/components/ui/carousel";\n\nexport default function Demo() { return <Carousel />; }`
  },
  {
    slug: "chat-bubble",
    name: "Chat Bubble",
    category: "display",
    description: "Left/Right messaging speech bubble container.",
    installCmd: "npx forgeui add chat-bubble",
    variants: ["left", "right"],
    props: [],
    accessibility: "Chat log aria message structure.",
    code: `import { ChatBubble } from "@/components/ui/chat-bubble";\n\nexport default function Demo() { return <ChatBubble message="Hello!" />; }`
  },
  {
    slug: "collapse",
    name: "Collapse",
    category: "display",
    description: "Single expandable accordion panel container.",
    installCmd: "npx forgeui add collapse",
    variants: ["default"],
    props: [],
    accessibility: "Aria-expanded accordion panel.",
    code: `import { Collapse } from "@/components/ui/collapse";\n\nexport default function Demo() { return <Collapse title="Panel Title">Content</Collapse>; }`
  },
  {
    slug: "countdown",
    name: "Countdown",
    category: "display",
    description: "Timer countdown numbers widget.",
    installCmd: "npx forgeui add countdown",
    variants: ["default"],
    props: [],
    accessibility: "Role='timer' live region.",
    code: `import { Countdown } from "@/components/ui/countdown";\n\nexport default function Demo() { return <Countdown initialSeconds={3600} />; }`
  },
  {
    slug: "diff",
    name: "Diff",
    category: "display",
    description: "Before/After comparison slider view.",
    installCmd: "npx forgeui add diff",
    variants: ["default"],
    props: [],
    accessibility: "Keyboard interactive range slider.",
    code: `import { Diff } from "@/components/ui/diff";\n\nexport default function Demo() { return <Diff />; }`
  },
  {
    slug: "hover-3d-card",
    name: "Hover 3D Card",
    category: "display",
    description: "Mouse tilt 3D perspective card container.",
    installCmd: "npx forgeui add hover-3d-card",
    variants: ["default"],
    props: [],
    accessibility: "Interactive hover target.",
    code: `import { Hover3DCard } from "@/components/ui/hover-3d-card";\n\nexport default function Demo() { return <Hover3DCard />; }`
  },
  {
    slug: "hover-gallery",
    name: "Hover Gallery",
    category: "display",
    description: "Expanding horizontal hover image accordion grid.",
    installCmd: "npx forgeui add hover-gallery",
    variants: ["default"],
    props: [],
    accessibility: "Gallery image list.",
    code: `import { HoverGallery } from "@/components/ui/hover-gallery";\n\nexport default function Demo() { return <HoverGallery />; }`
  },
  {
    slug: "kbd",
    name: "Kbd",
    category: "display",
    description: "Keyboard shortcut key badge container.",
    installCmd: "npx forgeui add kbd",
    variants: ["default"],
    props: [],
    accessibility: "Keyboard element <kbd> tag.",
    code: `import { Kbd } from "@/components/ui/kbd";\n\nexport default function Demo() { return <Kbd>⌘ K</Kbd>; }`
  },
  {
    slug: "list",
    name: "List",
    category: "display",
    description: "Styled feature check item list.",
    installCmd: "npx forgeui add list",
    variants: ["default"],
    props: [],
    accessibility: "Semantic <ul> and <li> list elements.",
    code: `import { List } from "@/components/ui/list";\n\nexport default function Demo() { return <List />; }`
  },
  {
    slug: "status",
    name: "Status",
    category: "display",
    description: "Online / busy / offline status dot badge.",
    installCmd: "npx forgeui add status",
    variants: ["online", "busy"],
    props: [],
    accessibility: "Status live indicator.",
    code: `import { Status } from "@/components/ui/status";\n\nexport default function Demo() { return <Status state="online" />; }`
  },
  {
    slug: "text-rotate",
    name: "Text Rotate",
    category: "display",
    description: "Animated cycling headline text component.",
    installCmd: "npx forgeui add text-rotate",
    variants: ["default"],
    props: [],
    accessibility: "Headline text span.",
    code: `import { TextRotate } from "@/components/ui/text-rotate";\n\nexport default function Demo() { return <TextRotate words={["Fast", "Modern"]} />; }`
  },
  {
    slug: "fieldset",
    name: "Fieldset",
    category: "form",
    description: "Fieldset container with legend title.",
    installCmd: "npx forgeui add fieldset",
    variants: ["default"],
    props: [],
    accessibility: "<fieldset> and <legend> form grouping tags.",
    code: `import { Fieldset } from "@/components/ui/fieldset";\n\nexport default function Demo() { return <Fieldset legend="Credentials">Content</Fieldset>; }`
  },
  {
    slug: "file-input",
    name: "File Input",
    category: "form",
    description: "Drag-and-drop file upload picker dropzone.",
    installCmd: "npx forgeui add file-input",
    variants: ["dropzone"],
    props: [],
    accessibility: "Accessible file input label.",
    code: `import { FileInput } from "@/components/ui/file-input";\n\nexport default function Demo() { return <FileInput />; }`
  },
  {
    slug: "filter",
    name: "Filter",
    category: "form",
    description: "Pill bar filter selector component.",
    installCmd: "npx forgeui add filter",
    variants: ["pills"],
    props: [],
    accessibility: "Role='tablist' filter selector.",
    code: `import { Filter } from "@/components/ui/filter";\n\nexport default function Demo() { return <Filter />; }`
  },
  {
    slug: "label",
    name: "Label",
    category: "form",
    description: "Form input label component with indicator.",
    installCmd: "npx forgeui add label",
    variants: ["default"],
    props: [],
    accessibility: "HtmlFor linked form label.",
    code: `import { Label } from "@/components/ui/label";\n\nexport default function Demo() { return <Label required>Email</Label>; }`
  },
  {
    slug: "rating",
    name: "Rating",
    category: "form",
    description: "Star rating interactive selector.",
    installCmd: "npx forgeui add rating",
    variants: ["stars"],
    props: [],
    accessibility: "Accessible rating buttons.",
    code: `import { Rating } from "@/components/ui/rating";\n\nexport default function Demo() { return <Rating defaultValue={4} />; }`
  },
  {
    slug: "validator",
    name: "Validator",
    category: "form",
    description: "Live form field validation message wrapper.",
    installCmd: "npx forgeui add validator",
    variants: ["default"],
    props: [],
    accessibility: "Live error region.",
    code: `import { Validator } from "@/components/ui/validator";\n\nexport default function Demo() { return <Validator isValid={true}>Content</Validator>; }`
  },
  {
    slug: "otp",
    name: "OTP Input",
    category: "form",
    description: "Pin code multi-digit One Time Password input.",
    installCmd: "npx forgeui add otp",
    variants: ["4-digit", "6-digit"],
    props: [],
    accessibility: "Numeric password input sequence.",
    code: `import { OtpInput } from "@/components/ui/otp";\n\nexport default function Demo() { return <OtpInput length={4} />; }`
  },
  {
    slug: "divider",
    name: "Divider",
    category: "layout",
    description: "Horizontal and vertical divider separator line.",
    installCmd: "npx forgeui add divider",
    variants: ["horizontal", "vertical"],
    props: [],
    accessibility: "Role='separator' divider.",
    code: `import { Divider } from "@/components/ui/divider";\n\nexport default function Demo() { return <Divider label="OR" />; }`
  },
  {
    slug: "footer",
    name: "Footer",
    category: "layout",
    description: "Responsive website footer section block.",
    installCmd: "npx forgeui add footer",
    variants: ["default"],
    props: [],
    accessibility: "<footer> content landmark tag.",
    code: `import { Footer } from "@/components/ui/footer";\n\nexport default function Demo() { return <Footer />; }`
  },
  {
    slug: "indicator",
    name: "Indicator",
    category: "layout",
    description: "Top-right badge indicator wrapper.",
    installCmd: "npx forgeui add indicator",
    variants: ["top-right"],
    props: [],
    accessibility: "Badge overlay tag.",
    code: `import { Indicator } from "@/components/ui/indicator";\n\nexport default function Demo() { return <Indicator badge="NEW"><button className="p-3 bg-gray-900 border border-gray-800 rounded-xl">Inbox</button></Indicator>; }`
  },
  {
    slug: "join",
    name: "Join",
    category: "layout",
    description: "Joined input and action button control group.",
    installCmd: "npx forgeui add join",
    variants: ["default"],
    props: [],
    accessibility: "Grouped control layout.",
    code: `import { Join } from "@/components/ui/join";\n\nexport default function Demo() { return <Join />; }`
  },
  {
    slug: "mask",
    name: "Mask",
    category: "layout",
    description: "Shaped image / content mask container (squircle, circle).",
    installCmd: "npx forgeui add mask",
    variants: ["squircle", "circle"],
    props: [],
    accessibility: "Masked element container.",
    code: `import { Mask } from "@/components/ui/mask";\n\nexport default function Demo() { return <Mask shape="squircle" />; }`
  },
  {
    slug: "stack",
    name: "Stack",
    category: "layout",
    description: "Stacked card deck layer arrangement.",
    installCmd: "npx forgeui add stack",
    variants: ["default"],
    props: [],
    accessibility: "Layered card deck element.",
    code: `import { Stack } from "@/components/ui/stack";\n\nexport default function Demo() { return <Stack />; }`
  },
  {
    slug: "mockup-browser",
    name: "Browser Mockup",
    category: "mockup",
    description: "macOS / Chrome browser window frame wrapper.",
    installCmd: "npx forgeui add mockup-browser",
    variants: ["browser"],
    props: [],
    accessibility: "Mockup visual container.",
    code: `import { MockupBrowser } from "@/components/ui/mockup-browser";\n\nexport default function Demo() { return <MockupBrowser url="https://forgeui.dev" />; }`
  },
  {
    slug: "mockup-code",
    name: "Code Mockup",
    category: "mockup",
    description: "Terminal code window with line numbers and prompt.",
    installCmd: "npx forgeui add mockup-code",
    variants: ["terminal"],
    props: [],
    accessibility: "Code block formatting.",
    code: `import { MockupCode } from "@/components/ui/mockup-code";\n\nexport default function Demo() { return <MockupCode code="npx forgeui add button" />; }`
  },
  {
    slug: "mockup-phone",
    name: "Phone Mockup",
    category: "mockup",
    description: "Smartphone device frame mockup container.",
    installCmd: "npx forgeui add mockup-phone",
    variants: ["phone"],
    props: [],
    accessibility: "Smartphone mockup frame.",
    code: `import { MockupPhone } from "@/components/ui/mockup-phone";\n\nexport default function Demo() { return <MockupPhone />; }`
  },
  {
    slug: "mockup-window",
    name: "Window Mockup",
    category: "mockup",
    description: "macOS app desktop window frame container.",
    installCmd: "npx forgeui add mockup-window",
    variants: ["window"],
    props: [],
    accessibility: "App window wrapper.",
    code: `import { MockupWindow } from "@/components/ui/mockup-window";\n\nexport default function Demo() { return <MockupWindow title="ForgeUI App" />; }`
  },

  // ADMIN COMPONENTS
  {
    slug: "activity-log",
    name: "Activity Log",
    category: "admin",
    description: "Audit log activity feed with timestamp indicators.",
    installCmd: "npx forgeui add activity-log",
    variants: ["default", "compact"],
    props: [
      { name: "items", type: "ActivityItemData[]", default: "[]", description: "Activity log entries." },
    ],
    accessibility: "Activity timeline structure.",
    code: `import * as React from "react";

export function ActivityLog({ items }: { items: { action: string; item: string; time: string }[] }) {
  return (
    <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 space-y-3">
      <h4 className="text-xs font-bold text-white uppercase">Activity Log</h4>
      <div className="divide-y divide-gray-800">{items.map((i, idx) => <div key={idx} className="py-2 text-xs text-gray-300">{i.action} <span className="text-purple-400 font-bold">{i.item}</span></div>)}</div>
    </div>
  );
}`
  },

  // DROPDOWN (missing registry entry)
  {
    slug: "dropdown",
    name: "Dropdown",
    category: "actions",
    description: "Interactive context action dropdown menu with click-outside dismissal.",
    installCmd: "npx forgeui add dropdown",
    variants: ["default", "icons"],
    props: [
      { name: "trigger", type: "ReactNode", default: "undefined", description: "Element that triggers the dropdown." },
      { name: "items", type: "DropdownItemData[]", default: "[]", description: "Menu items array." },
    ],
    accessibility: "Keyboard navigable dropdown with click-outside close.",
    code: `import { Dropdown } from "@/components/ui/dropdown";\nimport { Button } from "@/components/ui/button";\n\nexport default function Demo() {\n  return (\n    <Dropdown\n      trigger={<Button variant="outline">Options</Button>}\n      items={[\n        { id: "1", label: "Profile" },\n        { id: "2", label: "Settings" },\n        { id: "3", label: "Sign Out", danger: true },\n      ]}\n    />\n  );\n}`
  },

  // PAGINATION (missing registry entry)
  {
    slug: "pagination",
    name: "Pagination",
    category: "navigation",
    description: "Page navigation control with numbered buttons and prev/next arrows.",
    installCmd: "npx forgeui add pagination",
    variants: ["default", "compact"],
    props: [
      { name: "currentPage", type: "number", default: "1", description: "Active page number." },
      { name: "totalPages", type: "number", default: "5", description: "Total number of pages." },
    ],
    accessibility: "Aria-current page navigation with disabled state buttons.",
    code: `import { Pagination } from "@/components/ui/pagination";\n\nexport default function Demo() {\n  return <Pagination currentPage={2} totalPages={5} />;\n}`
  }
];

