"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AuthCard({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={cn("p-6 sm:p-8 rounded-3xl bg-gray-900 border border-gray-800 space-y-6 max-w-sm w-full shadow-2xl", className)}>
      <div className="space-y-1 text-center">
        <h3 className="text-xl font-extrabold text-white font-heading">Welcome Back</h3>
        <p className="text-xs text-gray-400">Enter your credentials to access your account</p>
      </div>

      <div className="space-y-4">
        <Input label="Email Address" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Button variant="primary" className="w-full">
        Sign In
      </Button>

      <div className="text-center text-[11px] text-gray-500">
        Don&apos;t have an account? <span className="text-purple-400 font-semibold cursor-pointer hover:underline">Sign up</span>
      </div>
    </div>
  );
}
