import React from 'react';
import { Bot, Camera, Cpu, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'AX-Home Assist',
    tagline: 'Companion & Home Robotics',
    price: '$1,999',
    Icon: Bot,
    gradient: 'from-cyan-400/20 via-sky-500/10 to-transparent',
    specs: ['Voice + Gesture', 'SLAM Navigation', '8 hrs runtime'],
  },
  {
    name: 'AX-Inspect Pro',
    tagline: 'Vision‑Powered Inspection',
    price: '$4,799',
    Icon: Camera,
    gradient: 'from-violet-400/20 via-fuchsia-500/10 to-transparent',
    specs: ['4K Stereo Vision', 'Anomaly Detection', 'IP65'],
  },
  {
    name: 'AX-Factory One',
    tagline: 'Industrial Automation',
    price: '$8,499',
    Icon: Cpu,
    gradient: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    specs: ['6‑DOF Arm', 'Payload 12kg', 'ROS 2 Ready'],
  },
  {
    name: 'AX-Secure Patrol',
    tagline: 'Autonomous Security',
    price: '$6,299',
    Icon: Shield,
    gradient: 'from-amber-400/20 via-orange-500/10 to-transparent',
    specs: ['Thermal + RGB', '24/7 Docking', 'LTE/5G'],
  },
];

const ProductCard = ({ p, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.06, duration: 0.6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="mt-1 text-white/70">{p.tagline}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">
          <p.Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 text-xs text-white/80">
        {p.specs.map((s) => (
          <div key={s} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-center">
            {s}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between">
        <span className="text-2xl font-semibold">{p.price}</span>
        <a
          href="#buy"
          className="inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition hover:bg-white/90"
        >
          Pre‑Order
        </a>
      </div>

      <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative w-full bg-gradient-to-b from-[#050510] to-black py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose your mission</h2>
          <p className="mt-4 text-white/70">Four platforms. Infinite possibilities. Built for homes, campuses, and factories.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
