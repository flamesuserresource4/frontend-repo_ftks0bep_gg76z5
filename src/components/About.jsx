import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-lg"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-4 text-slate-300">
            I’m Okta.afd — an AI content creator, educator, and full‑stack developer. My work explores how machine intelligence can amplify human creativity. I teach practical AI, build tools for storytellers, and ship playful experiments that feel like magic.
          </p>
          <p className="mt-3 text-slate-300">
            From interactive explainers to production‑ready apps, I bring ideas to life with modern web tech and state‑of‑the‑art AI models.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
