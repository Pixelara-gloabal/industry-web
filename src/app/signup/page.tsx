"use client";

import { useState } from "react";

import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);
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
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">Register OEM Account</h1>
          <p className="mt-2 text-xs text-[#a7adb3]">Get instant access to CAD downloads &amp; volume pricing</p>
        </div>

        {registered ? (
          <div className="mt-8 text-center py-6">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#f3a329]/10 text-[#f3a329]">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-white">Account Created Successfully</h2>
            <p className="mt-2 text-xs text-[#a7adb3]">Your engineering credentials have been activated.</p>
            <Link
              href="/login"
              className="mt-6 block w-full bg-[#f3a329] py-3 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm"
            >
              PROCEED TO LOGIN
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="mt-8 space-y-4">
            <div>
              <label htmlFor="signup-name" className="block text-xs font-bold text-[#c1c6ca] mb-1.5 uppercase">
                Full Name *
              </label>
              <input
                id="signup-name"
                type="text"
                required
                placeholder="John Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-xs font-bold text-[#c1c6ca] mb-1.5 uppercase">
                Business Email *
              </label>
              <input
                id="signup-email"
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <div>
              <label htmlFor="signup-company" className="block text-xs font-bold text-[#c1c6ca] mb-1.5 uppercase">
                Company / Organization *
              </label>
              <input
                id="signup-company"
                type="text"
                required
                placeholder="Apex Mining Corp"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-xs font-bold text-[#c1c6ca] mb-1.5 uppercase">
                Create Password *
              </label>
              <input
                id="signup-password"
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded border border-white/15 bg-[#0b0d0e] px-4 py-3 text-sm text-white focus:border-[#f3a329] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#f3a329] py-3.5 text-center text-xs font-bold tracking-widest text-[#0b0d0e] hover:bg-[#ffc368] transition-colors rounded-sm disabled:opacity-50"
            >
              {isSubmitting ? "CREATING ACCOUNT..." : "CREATE CLIENT ACCOUNT"}
            </button>

            <div className="pt-4 text-center text-xs text-[#a7adb3]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#f3a329] font-bold hover:underline">
                Log In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
