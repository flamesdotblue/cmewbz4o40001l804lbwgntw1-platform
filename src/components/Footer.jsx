import React from 'react';
import { Bot, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black/60 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,.1),transparent_50%)]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Bot className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-semibold">Axiom Robotics</p>
            <p className="text-sm text-white/60">Robots that work for you.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/80">
          <a href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/10" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="rounded-full border border-white/10 p-2 hover:bg-white/10" aria-label="Github">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:hello@axiomrobotics.ai" className="rounded-full border border-white/10 p-2 hover:bg-white/10" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Axiom Robotics. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
