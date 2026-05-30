"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Loader2, PawPrint } from "lucide-react";
import OtpInput from "@/components/OtpInput";
 
type Mode = "input" | "otp";
type Method = "email" | "phone";
 
export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/";
 
  const [mode, setMode] = useState<Mode>("input");
  const [method, setMethod] = useState<Method>("email");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const sendOtp = async () => {
    if (!value.trim()) return setError("Please enter your " + (method === "email" ? "email" : "phone number"));
    setError("");
    setLoading(true);
    await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [method]: value }),
    });
    setLoading(false);
    setMode("otp");
  };
 
  const verifyOtp = async (otp: string) => {
    setLoading(true);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [method]: value, otp }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/" + redirect);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };
 
  return (
    <div className="min-h-screen bg-[#FDF8F3] flex items-center justify-center px-4">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');`}</style>
 
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <PawPrint size={28} className="text-[#C4621D]" fill="#C4621D" />
            <span className="text-3xl font-bold text-[#C4621D]" style={{ fontFamily: "'Playfair Display', serif" }}>
              PawBite
            </span>
          </div>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {mode === "input" ? "Sign in to continue" : "Enter the code we sent you"}
          </p>
        </div>
 
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-orange-100 p-8 border border-orange-50">
          {mode === "input" ? (
            <>
              <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Welcome back
              </h1>
 
              {/* Method Toggle */}
              <div className="flex bg-amber-50 rounded-2xl p-1 mb-6">
                {(["email", "phone"] as Method[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => { setMethod(m); setValue(""); setError(""); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      method === m
                        ? "bg-white shadow-sm text-[#C4621D]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {m === "email" ? <Mail size={15} /> : <Phone size={15} />}
                    {m === "email" ? "Email" : "Phone"}
                  </button>
                ))}
              </div>
 
              {/* Input */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  {method === "email" ? "Email Address" : "Phone Number"}
                </label>
                <input
                  type={method === "email" ? "email" : "tel"}
                  value={value}
                  onChange={(e) => { setValue(e.target.value); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                  placeholder={method === "email" ? "you@example.com" : "+91 98765 43210"}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#C4621D] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
              </div>
 
              <button
                onClick={sendOtp}
                disabled={loading}
                className="w-full bg-[#C4621D] hover:bg-[#a84f17] disabled:opacity-60 text-white font-bold py-4 rounded-2xl
                  flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : "Send OTP"}
              </button>
 
              <p className="text-center text-sm text-gray-500 mt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Don't have an account?{" "}
                <Link href={`/signup?redirect=${redirect}`} className="text-[#C4621D] font-semibold hover:underline">
                  Sign up
                </Link>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={() => { setMode("input"); setError(""); }}
                className="flex items-center gap-1 text-gray-400 hover:text-[#C4621D] text-sm mb-6 transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
 
              <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Enter OTP
              </h1>
              <p className="text-sm text-gray-500 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We sent a 6-digit code to <span className="font-semibold text-[#1a1a1a]">{value}</span>
              </p>
 
              <OtpInput length={6} onComplete={verifyOtp} loading={loading} />
              {error && <p className="text-red-500 text-xs mt-3 text-center">{error}</p>}
 
              <button
                onClick={sendOtp}
                disabled={loading}
                className="w-full text-sm text-gray-500 hover:text-[#C4621D] mt-6 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Didn't receive it? <span className="font-semibold">Resend OTP</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}