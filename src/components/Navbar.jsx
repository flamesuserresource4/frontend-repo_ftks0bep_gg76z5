import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white shadow-lg backdrop-blur-md">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="text-lg">Okta.afd</span>
            <span className="hidden text-xs text-slate-300 sm:inline">AI Storytelling</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#projects" className="text-sm text-slate-200 transition hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-slate-200 transition hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
