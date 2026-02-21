'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

function Counter({ target, label, suffix = '+' }: CounterProps) {
  const countRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(target);

  useEffect(() => {
    let currentValue = 0;
    const increment = target / 50;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= target) {
        currentValue = target;
        clearInterval(interval);
      }
      if (countRef.current) {
        countRef.current.textContent = Math.floor(currentValue) + suffix;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div ref={countRef} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#214156] to-cyan-500 bg-clip-text text-transparent mb-3">
        0{suffix}
      </div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Impact & Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our extensive network spans across continents, serving clients with unparalleled expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <Counter target={85} label="Countries Served" />
          <Counter target={500} label="Successful Trades" suffix="+" />
          <Counter target={15} label="Years Experience" suffix="+" />
          <Counter target={2500} label="Happy Clients" suffix="+" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-[#214156]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>
    </section>
  );
}
