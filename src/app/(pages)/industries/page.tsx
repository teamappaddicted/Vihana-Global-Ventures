'use client';

import { motion } from 'framer-motion';
import { Leaf, Wind, Droplets, Cog, ShoppingCart, Zap } from 'lucide-react';

export default function IndustriesPage() {
  const industries = [
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Global sourcing of agricultural products, grains, and organic produce',
      items: ['Grains & Cereals', 'Fresh Produce', 'Spices', 'Organic Products'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Wind,
      title: 'Textiles & Apparel',
      description: 'Premium fabric sourcing and garment manufacturing partnerships',
      items: ['Raw Fabrics', 'Finished Garments', 'Home Textiles', 'Technical Fabrics'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Droplets,
      title: 'Chemicals & Pharma',
      description: 'Specialized trading in chemicals, pharmaceuticals, and raw materials',
      items: ['Industrial Chemicals', 'Pharmaceuticals', 'Cosmetics', 'Safety Products'],
      color: 'from-[#214156] to-cyan-600',
    },
    {
      icon: Cog,
      title: 'Machinery & Equipment',
      description: 'Industrial machinery, equipment, and spare parts procurement',
      items: ['Heavy Machinery', 'Industrial Equipment', 'Spare Parts', 'Tech Devices'],
      color: 'from-gray-600 to-slate-700',
    },
    {
      icon: ShoppingCart,
      title: 'FMCG Products',
      description: 'Fast-moving consumer goods for retail and distribution',
      items: ['Beverages', 'Snacks', 'Personal Care', 'Household Items'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Industrial Goods',
      description: 'Comprehensive industrial supplies and bulk materials',
      items: ['Steel & Metals', 'Plastics', 'Electronics', 'Energy Products'],
      color: 'from-yellow-500 to-orange-600',
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Specialized expertise across diverse global markets and sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-[#214156]/30 transition-all duration-300"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${industry.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{industry.description}</p>
                
                <ul className="space-y-2">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="inline-block w-1.5 h-1.5 bg-[#214156]/60 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Partner With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Supplier Network' },
              { number: '85+', label: 'Countries Covered' },
              { number: '2500+', label: 'Active Clients' },
              { number: '99.8%', label: 'On-Time Delivery' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-xl border border-gray-100"
              >
                <div className="text-4xl font-bold text-[#214156] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
