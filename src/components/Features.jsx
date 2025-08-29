import React from 'react';
import { Cpu, Shield, Zap, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Adaptive Intelligence',
    desc: 'On‑device AI for real‑time perception, navigation, and manipulation in dynamic environments.',
    icon: Cpu,
    color: 'from-cyan-500/30 to-cyan-300/10',
  },
  {
    title: 'Human‑Safe by Design',
    desc: 'Redundant sensing, torque limiting, and ISO‑compliant safety layers.',
    icon: Shield,
    color: 'from-emerald-500/30 to-emerald-300/10',
  },
  {
    title: 'Hyper‑Efficient Power',
    desc: 'Regenerative drives and smart battery orchestration for all‑day deployments.',
    icon: Zap,
    color: 'from-amber-500/30 to-amber-300/10',
  },
  {
    title: 'Modular Platforms',
    desc: 'Swappable end‑effectors and payload bays to match your mission.',
    icon: Bot,
    color: 'from-violet-500/30 to-violet-300/10',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-[#050510] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,.15),transparent_55%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Engineering that feels like magic</h2>
          <p className="mt-4 text-white/70">
            Purpose‑built systems that combine reliability, intelligence, and world‑class design.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${f.color} p-3`}> 
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
