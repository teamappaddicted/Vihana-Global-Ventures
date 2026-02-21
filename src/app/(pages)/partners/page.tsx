'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function PartnersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Trusted Partners</h1>
            <p className="text-xl text-white/90">Global network of suppliers, clients, and strategic partners</p>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array(12).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#214156]/30 transition-all hover:shadow-lg"
              >
                <span className="text-4xl">🏢</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Global Trade Inc',
                testimonial: 'Vihana Global transformed our supply chain completely. Highly recommended!',
                author: 'John Smith, CEO',
                rating: 5,
              },
              {
                name: 'International Commerce',
                testimonial: 'Best trading partner we\'ve worked with. Professional and reliable.',
                author: 'Maria Garcia, Director',
                rating: 5,
              },
              {
                name: 'Asia Ventures',
                testimonial: 'Exceptional service, deep market knowledge. Perfect partner for growth.',
                author: 'David Chen, Manager',
                rating: 5,
              },
              {
                name: 'European Traders',
                testimonial: 'Their expertise in compliance saved us significant time and costs.',
                author: 'Sophie Laurent, Operations',
                rating: 5,
              },
              {
                name: 'African Exports Ltd',
                testimonial: 'Outstanding logistics coordination and market insights.',
                author: 'Ahmed Mohamed, Head',
                rating: 5,
              },
              {
                name: 'Pacific Logistics',
                testimonial: 'Reliable, professional, and always going the extra mile for us.',
                author: 'Lisa Wong, Procurement',
                rating: 5,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array(item.rating).fill(0).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{item.testimonial}&quot;</p>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Textile Manufacturer Goes Global',
                description: 'How we helped a regional textile manufacturer expand to 15 new countries',
                result: '250% revenue growth in 2 years',
              },
              {
                title: 'FMCG Distribution Success',
                description: 'Streamlining supply chain for consumer goods distribution network',
                result: '40% cost reduction, 98% on-time delivery',
              },
              {
                title: 'Chemical Import Optimization',
                description: 'Compliance and logistics solution for chemical imports',
                result: '80% faster clearance, zero violations',
              },
              {
                title: 'Agricultural Export Growth',
                description: 'Market entry and partnership strategy for agricultural exports',
                result: 'From local to 50+ countries in 18 months',
              },
            ].map((caseStudy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-gradient-to-br from-[#214156]/10 to-cyan-50 rounded-xl border border-[#214156]/20 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="p-4 bg-[#214156] text-white rounded-lg">
                  <p className="text-sm font-semibold">Result: {caseStudy.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
