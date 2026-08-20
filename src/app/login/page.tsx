"use client";

import { useState } from "react";

import Link from "next/link";

import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedIn(true);
    }, 600);
  };

  return (
    <div className="bg-[#0b0d0e] text-white min-h-screen flex items-center justify-center p-5 py-20">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#15191c] p-8 shadow-2xl">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="grid size-9 place-items-center border-2 border-[#f3a329] text-xs font-black tracking-tighter text-[#f3a329]">
              PI
            </span>
            <span className="text-lg font-extrabold tracking-[0.18em] text-white">PIXELARA</span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">Client Portal Login</h1>
          <p className="mt-2 text-xs text-[#a7adb3]">Access order tracking, CAD drawings &amp; RFQ history</p>
        </div>

        {loggedIn ? (
          <div className="mt-8 text-center py-6">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#f3a329]/10 text-[#f3a329]">
              <ShieldCheck className="size-8" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-white">Welcome back, Client</h2>
            <p className="mt-2 text-xs text-[#a7adb3]">Your engineering dashboard session is active.</p>
            <Link
              href="/products"
              className="mt-6 block w-full bg-[#f3a329] py-3 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
            >
              EXPLORE CATALOG &amp; DRAWINGS
            </Link>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-xs font-bold text-[#c1c6ca] mb-1.5 uppercase">
                Business Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="login-password" className="block text-xs font-bold text-[#c1c6ca] uppercase">
                  Password
                </label>
                <a href="#" className="text-[11px] text-[#f3a329] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#f3a329] py-3.5 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm disabled:opacity-50"
            >
              {isSubmitting ? "AUTHENTICATING..." : "SIGN IN TO PORTAL"}
            </button>

            <div className="pt-4 text-center text-xs text-[#a7adb3]">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#f3a329] font-bold hover:underline">
                Register OEM Account
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
