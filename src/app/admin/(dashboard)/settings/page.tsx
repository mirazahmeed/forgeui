"use client";

import * as React from "react";
import { Settings, Save, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  const [saved, setSaved] = React.useState(false);
  const [siteName, setSiteName] = React.useState("ForgeUI");
  const [siteUrl, setSiteUrl] = React.useState("https://forgeui.dev");
  const [adminEmail, setAdminEmail] = React.useState("admin@forgeui.dev");
  const [githubUrl, setGithubUrl] = React.useState("https://github.com/forgeui");
  const [aiKey, setAiKey] = React.useState("");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-extrabold text-white font-heading flex items-center gap-2">
          <Settings className="w-6 h-6 text-purple-400" /> Settings
        </h1>
        <p className="text-xs text-gray-400 mt-1">Configure your ForgeUI ecosystem</p>
      </div>

      <div className="space-y-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
        <h3 className="text-sm font-bold text-white border-b border-gray-800 pb-3">General</h3>
        <Input label="Site Name" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
        <Input label="Site URL" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
        <Input label="Admin Email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
        <Input label="GitHub Repository URL" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
      </div>

      <div className="space-y-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
        <h3 className="text-sm font-bold text-white border-b border-gray-800 pb-3">AI Generator</h3>
        <Input label="AI API Key" type="password" value={aiKey} onChange={(e) => setAiKey(e.target.value)} placeholder="sk-..." />
        <p className="text-[10px] text-gray-500">Required for the AI Component Generator feature. Supports OpenAI and Anthropic API keys.</p>
      </div>

      <div className="space-y-6 p-6 rounded-2xl bg-gray-900 border border-gray-800">
        <h3 className="text-sm font-bold text-white border-b border-gray-800 pb-3">Danger Zone</h3>
        <div className="flex items-center justify-between p-4 rounded-xl bg-red-950/30 border border-red-800/40">
          <div>
            <span className="text-xs font-bold text-red-300">Reset All Data</span>
            <p className="text-[10px] text-red-400/70 mt-0.5">This will permanently delete all custom data.</p>
          </div>
          <Button variant="danger" size="sm">Reset</Button>
        </div>
      </div>

      <Button onClick={handleSave} variant="primary" size="lg" className="w-full">
        {saved ? <Check className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
        {saved ? "Settings Saved!" : "Save Settings"}
      </Button>
    </div>
  );
}
