'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MarqueeBanner() {
  const logos = [
    'Fortune 500 Traders',
    'Global Logistics Partners',
    'International Freight Co',
    'Trade Route Express',
    'Global Commerce Hub',
    'International Shipping',
    'Fortune 500 Traders',
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#214156] via-[#2d5a73] to-[#214156] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
      
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/80 mb-8 text-sm font-semibold uppercase tracking-wider"
        >
          Trusted By Leading Brands & Companies
        </motion.p>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 w-max"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 text-white font-semibold text-lg whitespace-nowrap backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 mb-4">Ready to become our next success story?</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#214156] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Start Your Journey Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
