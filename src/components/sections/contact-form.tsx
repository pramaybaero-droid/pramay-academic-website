"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/content/profile";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "Academic website inquiry");
    const message = String(formData.get("message") || "");
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Your email client should open with a drafted message.");
  };

  return (
    <form onSubmit={onSubmit} className="instrument-card grid gap-4 p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" name="name" required />
        <FormField label="Email" name="email" type="email" required />
      </div>
      <FormField label="Subject" name="subject" required />
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-foreground">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="focus-ring min-h-36 resize-y rounded-[8px] border border-line/50 bg-background/50 px-3 py-3 text-sm leading-6 text-foreground placeholder:text-muted"
          placeholder="Collaboration, research discussion, software demo, or academic inquiry"
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-cyan/60 bg-cyan/10 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-cyan hover:bg-cyan/20 sm:w-fit"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Send message
      </button>
      {status ? <p className="text-sm text-cyan">{status}</p> : null}
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="focus-ring h-11 rounded-[8px] border border-line/50 bg-background/50 px-3 text-sm text-foreground placeholder:text-muted"
      />
    </label>
  );
}
