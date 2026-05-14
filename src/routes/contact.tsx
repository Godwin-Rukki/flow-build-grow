import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { FadeUp } from "@/components/effects/FadeUp";
import { SectionDecor } from "@/components/effects/SectionDecor";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Godwin Idiovo" },
      {
        name: "description",
        content:
          "Tell Godwin about your business and where you're stuck. He responds within 24 hours.",
      },
      { property: "og:title", content: "Let's Build Something | Godwin Idiovo" },
      {
        property: "og:description",
        content: "Tell me about your business. I'll tell you exactly how I can help.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.enum(["Media Buying", "Funnel Building", "Automation", "General"]),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { subject: "General" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      if (SITE.formspreeId === "REPLACE_ME") {
        // Placeholder | pretend success so the UI flow works in preview.
        await new Promise((r) => setTimeout(r, 700));
        toast.success("Message captured (placeholder). Add your Formspree ID to enable real sending.");
        reset();
        return;
      }
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent. I'll reply within 24 hours.");
      reset();
    } catch {
      toast.error("Something went wrong. Email me directly at " + SITE.email);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-28">
        <SectionDecor variant="bubbles" />
        <div className="relative mx-auto max-w-3xl px-6">
          <FadeUp>
            <span className="label-eyebrow text-peach">Contact</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold tracking-tight">
              Let's Build Something.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Tell me about your business and where you're stuck. I'll tell you
              exactly how I can help.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background pb-16">
        <SectionDecor variant="squares" />
        <div className="relative mx-auto max-w-3xl px-6">
          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl bg-card border border-card-border p-6 md:p-10 space-y-5"
            >
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="input-base"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  className="input-base"
                  placeholder="you@company.com"
                />
              </Field>

              <Field label="Subject" error={errors.subject?.message}>
                <select {...register("subject")} className="input-base">
                  <option>General</option>
                  <option>Media Buying</option>
                  <option>Funnel Building</option>
                  <option>Automation</option>
                </select>
              </Field>

              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={6}
                  className="input-base resize-y"
                  placeholder="What are you working on? Where's the friction?"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-peach-foreground transition-all hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? "Sending..." : "Send"} <Send size={14} />
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-surface py-16">
        <SectionDecor variant="flow" />
        <div className="relative mx-auto max-w-3xl px-6 grid gap-4 md:grid-cols-3">
          <FadeUp>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noreferrer"
              className="lift-card flex items-center gap-3 rounded-2xl bg-card border border-card-border p-5"
            >
              <Calendar className="text-primary" size={20} />
              <div>
                <div className="font-semibold">Book a call</div>
                <div className="text-xs text-muted-foreground">Free 30-minute call</div>
              </div>
            </a>
          </FadeUp>
          <FadeUp delay={0.05}>
            <a
              href={`mailto:${SITE.email}`}
              className="lift-card flex items-center gap-3 rounded-2xl bg-card border border-card-border p-5"
            >
              <Mail className="text-peach" size={20} />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-xs text-muted-foreground">{SITE.email}</div>
              </div>
            </a>
          </FadeUp>
          <FadeUp delay={0.1}>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="lift-card flex items-center gap-3 rounded-2xl bg-card border border-card-border p-5"
            >
              <Linkedin className="text-gold" size={20} />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-xs text-muted-foreground">Let's connect</div>
              </div>
            </a>
          </FadeUp>
        </div>
        <p className="relative mt-10 text-center text-sm text-muted-foreground">
          I respond to every message within 24 hours.
        </p>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-foreground/70">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
