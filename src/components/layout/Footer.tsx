import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Sparkles } from "lucide-react";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Sparkles size={18} className="text-primary" />
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Traffic, funnel, and automation — built into one engine.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="label-eyebrow text-muted-foreground">Pages</span>
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/resume" className="hover:text-primary">Resume</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="label-eyebrow text-muted-foreground">Connect</span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Mail size={14} /> {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
}
