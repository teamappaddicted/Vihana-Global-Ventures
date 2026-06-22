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

    </div>
  );
}
