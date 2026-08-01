"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Icon from "../ui/Icon";
import { Button } from "../ui/Button";

/** Same formsubmit.co endpoint the previous site used — kept working. */
const ENDPOINT = "https://formsubmit.co/ajax/trunoxtech@gmail.com";

const budgets = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
  "Not sure yet",
];

const serviceOptions = [
  "AI Development",
  "SaaS Development",
  "Custom Software",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud Solutions",
  "Business Automation",
  "API Integration",
  "AI Agents",
];

type Fields = {
  firstname: string;
  lastname: string;
  email: string;
  phnumber: string;
  company: string;
  budget: string;
  message: string;
};

const empty: Fields = {
  firstname: "",
  lastname: "",
  email: "",
  phnumber: "",
  company: "",
  budget: "",
  message: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.firstname.trim()) errors.firstname = "Please enter your first name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }
  if (values.message.trim().length < 20) {
    errors.message = "Tell us a little more — 20 characters minimum.";
  }
  return errors;
}

const fieldClass = (invalid?: boolean) =>
  `w-full rounded-2xl border bg-white px-4 py-3.5 text-[15px] text-ink shadow-xs outline-none transition-all duration-300 placeholder:text-muted-2 focus:ring-4 ${
    invalid
      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
      : "border-hairline focus:border-brand/50 focus:ring-brand/10"
  }`;

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [selected, setSelected] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">(
    "idle",
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleService = (service: string) =>
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: values.firstname,
          LastName: values.lastname,
          Email: values.email,
          PhoneNo: values.phnumber,
          Company: values.company,
          Budget: values.budget,
          Services: selected.join(", "),
          Message: values.message,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Submission rejected");

      setValues(empty);
      setSelected([]);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        className="flex min-h-[520px] flex-col items-center justify-center rounded-panel border border-hairline bg-white p-10 text-center shadow-soft"
      >
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
          <Icon name="check" size={32} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink">
          Message received
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
          Thanks for reaching out. One of our engineers will reply within one
          business day — usually much sooner.
        </p>
        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-panel border border-hairline bg-white p-6 shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstname" className="mb-2 block font-display text-sm font-semibold text-ink">
            First name <span className="text-brand">*</span>
          </label>
          <input
            id="firstname"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            autoComplete="given-name"
            placeholder="Priya"
            aria-invalid={Boolean(errors.firstname)}
            aria-describedby={errors.firstname ? "firstname-error" : undefined}
            className={fieldClass(Boolean(errors.firstname))}
          />
          {errors.firstname ? (
            <p id="firstname-error" className="mt-1.5 text-[13px] text-rose-600">
              {errors.firstname}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastname" className="mb-2 block font-display text-sm font-semibold text-ink">
            Last name
          </label>
          <input
            id="lastname"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            autoComplete="family-name"
            placeholder="Nair"
            className={fieldClass()}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-display text-sm font-semibold text-ink">
            Work email <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-[13px] text-rose-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phnumber" className="mb-2 block font-display text-sm font-semibold text-ink">
            Phone
          </label>
          <input
            id="phnumber"
            name="phnumber"
            type="tel"
            value={values.phnumber}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={fieldClass()}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block font-display text-sm font-semibold text-ink">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={handleChange}
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldClass()}
          />
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block font-display text-sm font-semibold text-ink">
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
            className={`${fieldClass()} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2364748b" stroke-width="1.6" stroke-linecap="round"><path d="m6 9.5 6 5.5 6-5.5"/></svg>')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-12`}
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services — chip multi-select */}
      <fieldset className="mt-7">
        <legend className="mb-3 font-display text-sm font-semibold text-ink">
          What do you need? <span className="font-normal text-muted">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const active = selected.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={active}
                className={`rounded-pill border px-3.5 py-2 text-[13.5px] font-medium transition-all duration-300 ${
                  active
                    ? "border-brand/30 bg-brand-tint text-brand shadow-xs"
                    : "border-hairline bg-white text-ink-soft hover:border-brand/25 hover:text-brand"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <label htmlFor="message" className="mb-2 block font-display text-sm font-semibold text-ink">
          Project details <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What are you building, who is it for, and what does success look like? Rough is fine — we'll ask the rest on the call."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass(Boolean(errors.message))} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-[13px] text-rose-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          icon={status === "sending" ? undefined : "arrowRight"}
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>

        <p className="flex items-center gap-2 text-[13px] text-muted">
          <Icon name="shield" size={16} className="text-brand" />
          We reply within one business day. NDA on request.
        </p>
      </div>

      <AnimatePresence>
        {status === "failed" ? (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] text-rose-700"
          >
            Something went wrong sending that. Please email us directly at{" "}
            <a href="mailto:trunoxtech@gmail.com" className="font-semibold underline">
              trunoxtech@gmail.com
            </a>
            .
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
