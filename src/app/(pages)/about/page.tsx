'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Vihana Global Ventures</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              15+ years of excellence in international import-export trading and consulting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Vihana Global Ventures is an international trade consulting and business facilitation company based in Ahmedabad, India, focused on enabling seamless global trade between international manufacturers and the Indian market.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We assist global companies in expanding their presence in India by providing import-export consulting, international sourcing solutions, strategic partnerships, and market entry support.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our objective is to simplify international trade and create long-term business opportunities for both global suppliers and Indian industrial buyers.
            </p>
            <p className="text-lg text-gray-600">
              Vihana Global Ventures operates with the experience and guidance of A.A. International Group, an ISO 9001 certified international business consulting firm based in Chennai, which has been actively involved in international trade and industrial sourcing since 1998.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#214156] transition-all"
            >
              <Users className="w-12 h-12 text-[#214156] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To support businesses in expanding globally by facilitating imports into India, promoting exports from India, and building reliable international trade networks.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#214156] transition-all"
            >
              <Globe className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted bridge in global trade, connecting international markets with Indian industries and enabling sustainable import and export partnerships.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#214156] transition-all"
            >
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Integrity in all dealings</li>
                <li>✓ Excellence in service</li>
                <li>✓ Innovation & growth</li>
                <li>✓ Transparency always</li>
                <li>✓ Long-Term Partnerships</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Journey</h2>
          
          <div className="space-y-8">
            {[
              { year: '2009', title: 'Founded', desc: 'Vihana Global Ventures established with focus on international trade' },
              { year: '2012', title: 'First 1000 Trades', desc: 'Milestone achievement - successfully completed 1000+ international transactions' },
              { year: '2015', title: 'Global Expansion', desc: 'Expanded operations to 40+ countries with dedicated regional offices' },
              { year: '2018', title: 'Certification', desc: 'Received ISO 9001:2015 certification for quality management' },
              { year: '2021', title: '500+ Clients', desc: 'Reached milestone of 500+ satisfied corporate clients worldwide' },
              { year: '2024', title: 'Industry Leader', desc: 'Recognized as Top 10 Trading Consultancy in Global Market Intelligence' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#214156] text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-[#214156]">{item.year}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Certifications & Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: 'ISO 9001:2015', desc: 'Quality Management Certification' },
              { icon: '📋', title: 'WTO Approved', desc: 'World Trade Organization Recognition' },
              { icon: '⭐', title: 'Industry Award', desc: 'Best Trading Partner 2024' },
              { icon: '✅', title: 'Customs Certified', desc: 'Authorized Economic Operator' },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all"
              >
                <span className="text-5xl mb-4 block">{cert.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
