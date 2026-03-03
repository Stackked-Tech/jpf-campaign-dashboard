"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Role = "admin" | "dev";

export default function LoginPage() {
  const [step, setStep] = useState<"role" | "password">("role");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleRoleSelect(role: Role) {
    setSelectedRole(role);
    setStep("password");
    setError("");
    setPassword("");
  }

  function handleBack() {
    setStep("role");
    setSelectedRole(null);
    setPassword("");
    setError("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole, password }),
      });

      if (res.ok) {
        router.push(selectedRole === "admin" ? "/campaigns" : "/dev");
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const roleLabel = selectedRole === "admin" ? "Administration" : "Development Team";

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-lg p-8">
          {/* Brand */}
          <div className="text-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
              alt="Jobs Partnership of Florida"
              className="h-10 mx-auto mb-3"
            />
            <h1 className="text-lg font-semibold text-foreground">
              JPF Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {step === "role"
                ? "Select your role to continue"
                : `Sign in as ${roleLabel}`}
            </p>
          </div>

          {/* Step 1: Role Selection */}
          {step === "role" && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleRoleSelect("admin")}
                className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span className="text-sm font-medium">Administration</span>
              </button>

              <button
                onClick={() => handleRoleSelect("dev")}
                className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
                <span className="text-sm font-medium">Development Team</span>
              </button>
            </div>
          )}

          {/* Step 2: Password Entry */}
          {step === "password" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter password"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-pill w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                &larr; Back to role selection
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
