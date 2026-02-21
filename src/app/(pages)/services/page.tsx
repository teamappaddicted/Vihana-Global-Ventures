'use client';

import { motion } from 'framer-motion';
import { Truck, FileText, Globe, BarChart3, MapPin, ClipboardCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive solutions for all your international trade needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Import & Export Trading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Truck className="w-12 h-12 text-[#214156]" />
                <h2 className="text-4xl font-bold text-gray-900">Import & Export Trading</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                End-to-end trading solutions designed to streamline your international commerce operations.
              </p>
              <ul className="space-y-4">
                {[
                  'Global Sourcing & Supplier Network',
                  'Quality Assurance & Inspection',
                  'Customs Documentation & Clearance',
                  'Logistics Coordination',
                  'Price Negotiation & Contract Management',
                  'Risk Assessment & Mitigation',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#214156]/10 to-cyan-50 p-8 rounded-2xl border border-[#214156]/20"
            >
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-[#214156] mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 15+ years of trading expertise</li>
                <li>✓ Network of 500+ verified suppliers</li>
                <li>✓ Competitive pricing guarantee</li>
                <li>✓ Real-time shipment tracking</li>
                <li>✓ Dedicated account management</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Import-Export Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-50 to-[#214156]/10 p-8 rounded-2xl border border-cyan-200 order-2 lg:order-1"
            >
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-[#214156] mb-4">Consulting Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Trade compliance expertise</li>
                <li>✓ Market analysis & research</li>
                <li>✓ Buyer-supplier matching</li>
                <li>✓ Documentation guidance</li>
                <li>✓ Strategic advisory</li>
              </ul>
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="w-12 h-12 text-cyan-500" />
                <h2 className="text-4xl font-bold text-gray-900">Import-Export Consulting</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Expert indenting agent services with comprehensive trade solutions.
              </p>
              <ul className="space-y-4">
                {[
                  'Buyer-Supplier Matchmaking',
                  'Trade Compliance & Regulations',
                  'Documentation & Paperwork',
                  'Market Entry Strategy',
                  'Price & Quality Benchmarking',
                  'Dispute Resolution Support',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Specialized Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Market Intelligence',
                desc: 'In-depth market research, trend analysis, and price forecasting',
              },
              {
                icon: BarChart3,
                title: 'Trade Analytics',
                desc: 'Data-driven insights for strategic decision-making',
              },
              {
                icon: MapPin,
                title: 'Logistics Coordination',
                desc: 'End-to-end cargo management with tracking',
              },
              {
                icon: ClipboardCheck,
                title: 'Compliance Management',
                desc: 'Full regulatory compliance and documentation',
              },
              {
                icon: Truck,
                title: 'Cargo Clearance',
                desc: 'Expert customs clearance and port coordination',
              },
              {
                icon: FileText,
                title: 'Trade Advisory',
                desc: 'Strategic consulting for market expansion',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:border-[#214156]/30 shadow-sm hover:shadow-lg transition-all"
              >
                <service.icon className="w-12 h-12 text-[#214156] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ className }: { className: string }) {
  return <div className={className}>✓</div>;
}
