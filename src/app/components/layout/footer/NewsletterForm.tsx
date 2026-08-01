"use client";

import { useState, type FormEvent } from "react";
import Icon from "../../ui/Icon";

type Status = "idle" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // The site is a static export, so there is no API route to post to.
  // Wire `handleSubmit` to your provider (Mailchimp/Resend/Buttondown) endpoint.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-pill border border-hairline bg-white p-1.5 shadow-xs transition-shadow focus-within:border-brand/40 focus-within:shadow-soft">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-ink outline-none placeholder:text-muted-2"
        />
        <button
          type="submit"
          aria-label="Subscribe to the newsletter"
          className="btn-glow grid h-10 w-10 shrink-0 place-items-center rounded-full bg-linear-to-r from-brand to-accent text-white shadow-glow transition-transform duration-300 hover:scale-105"
        >
          <Icon name="arrowRight" size={18} />
        </button>
      </div>

      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={`mt-2.5 min-h-5 px-1 text-[13px] ${
          status === "error" ? "text-rose-600" : "text-emerald-600"
        }`}
      >
        {status === "success" && "Thanks — check your inbox to confirm."}
        {status === "error" && "Please enter a valid email address."}
      </p>
    </form>
  );
}
