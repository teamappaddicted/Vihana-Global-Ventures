'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const AnimatedGlobe3D = dynamic(() => import('@/components/AnimatedGlobe3D'), { ssr: false });

export default function GlobalPresencePage() {
  const regions = [
    { name: 'North America', countries: 12, headquarters: 'New York, USA', trades: '450+' },
    { name: 'Europe', countries: 18, headquarters: 'London, UK', trades: '680+' },
    { name: 'Asia-Pacific', countries: 28, headquarters: 'Singapore', trades: '890+' },
    { name: 'Middle East & Africa', countries: 15, headquarters: 'Dubai, UAE', trades: '320+' },
    { name: 'South America', countries: 8, headquarters: 'São Paulo, Brazil', trades: '180+' },
    { name: 'Oceania', countries: 4, headquarters: 'Sydney, Australia', trades: '95+' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Presence</h1>
            <p className="text-xl text-white/90">Operating in 85+ countries with regional expertise</p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Globe */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Trade Routes & Network</h2>
          
          <div className="h-96 w-full rounded-2xl border-2 border-[#214156]/20 overflow-hidden">
            <AnimatedGlobe3D />
          </div>

          <p className="text-center text-gray-600 mt-6">
            Interactive map showing our global trade routes and network connectivity
          </p>
        </div>
      </section>

      {/* Regional Information */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Regional Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:border-[#214156]/30 shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.name}</h3>
                
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="text-sm font-semibold text-[#214156]">Countries Served</p>
                    <p className="text-lg font-bold">{region.countries}+</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-[#214156]">Headquarters</p>
                    <p className="text-base">{region.headquarters}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-[#214156]">Successful Trades</p>
                    <p className="text-lg font-bold">{region.trades}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Corridors */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Major Trade Corridors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                from: 'Asia',
                to: 'Europe',
                description: 'Primary manufacturing to consumer markets route',
                trades: '45% of volume',
              },
              {
                from: 'Americas',
                to: 'Europe',
                description: 'Agricultural and raw materials trade',
                trades: '25% of volume',
              },
              {
                from: 'Africa',
                to: 'Asia',
                description: 'Emerging market opportunities corridor',
                trades: '18% of volume',
              },
              {
                from: 'Intra-Asia',
                to: 'Regional Trade',
                description: 'High-volume inter-regional commerce',
                trades: '12% of volume',
              },
            ].map((corridor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gradient-to-br from-[#214156]/10 to-cyan-50 rounded-xl border border-[#214156]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-900">{corridor.from}</span>
                  <span className="text-2xl">→</span>
                  <span className="text-lg font-bold text-gray-900">{corridor.to}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{corridor.description}</p>
                
                <div className="inline-block px-3 py-1 bg-[#214156] text-white text-sm font-semibold rounded-full">
                  {corridor.trades}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Capabilities */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Network Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Logistics Network',
                features: ['20+ ports', 'Inland terminals', 'Cold chain facilities', 'Bonded warehouses'],
              },
              {
                title: 'Partner Network',
                features: ['500+ suppliers', 'Customs brokers', 'Freight forwarders', 'Quality inspectors'],
              },
              {
                title: 'Financial Services',
                features: ['LC facilitation', 'Payment terms', 'Risk insurance', 'Trade financing'],
              },
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{capability.title}</h3>
                
                <ul className="space-y-3">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="inline-block w-2 h-2 bg-[#214156]/60 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
