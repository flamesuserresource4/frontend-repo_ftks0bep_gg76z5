import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s collaborate</h2>
          <p className="mt-3 text-slate-300">Have an idea, brief, or project in mind? Drop a message.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Tell me about your project"
            className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" /> Send message
            </button>
            {status && <span className="text-sm text-cyan-300">{status}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
