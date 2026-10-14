"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { subscribeToAlmanac } from "@/lib/newsletter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    subscribeToAlmanac(email);
    toast.success(
      "Welcome to the maison. Watch your inbox for the season's first blooms.",
    );
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
        className="flex-1 border border-border bg-background px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="bg-foreground px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Subscribe
      </button>
    </form>
  );
}
