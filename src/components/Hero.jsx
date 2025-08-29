import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YQKqRR3YKHyCU2s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,.25),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,.1),rgba(0,0,0,.6))]"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md"
        >
          Next‑gen Robotics by Axiom Labs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          Meet the robots that work, learn, and inspire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          From autonomous helpers to precision industrial units — engineered with safety, intelligence, and style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-black transition hover:bg-cyan-400"
          >
            <ShoppingCart className="h-5 w-5" />
            Shop Robots
          </a>
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
          >
            Explore Features
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
