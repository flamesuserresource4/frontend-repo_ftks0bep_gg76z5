import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Video, Code, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Narrative AI Studio',
    icon: Brain,
    description:
      'An interactive toolkit for crafting branching storylines powered by LLMs and dynamic prompts.',
    tags: ['LLM', 'Prompt Design', 'React'],
  },
  {
    title: 'Generative Video Toolkit',
    icon: Video,
    description:
      'Automates B‑roll creation and scene transitions using image diffusion and motion models.',
    tags: ['GenAI', 'Diffusion', 'Automation'],
  },
  {
    title: 'AI Dev Playbook',
    icon: Code,
    description:
      'A curated set of patterns, code recipes, and best practices for full‑stack AI apps.',
    tags: ['Full‑stack', 'FastAPI', 'Vite'],
  },
  {
    title: 'Realtime AI Companion',
    icon: Cpu,
    description:
      'Voice‑first assistant that blends retrieval, reasoning, and emotion‑aware responses.',
    tags: ['WebRTC', 'RAG', 'TTS/STT'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured Work</h2>
          <p className="mt-3 text-slate-300">
            A selection of experiments and products that merge code and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-cyan-300">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
