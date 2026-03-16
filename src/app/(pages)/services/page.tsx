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

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver a full suite of international trade services that connect global suppliers with Indian buyers, and help Indian exporters grow worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Import Consulting',
                desc: 'We assist Indian businesses in sourcing reliable products from international markets by connecting them with trusted global manufacturers and suppliers.',
              },
              {
                icon: Globe,
                title: 'Export Support',
                desc: 'We help Indian companies expand globally by facilitating export opportunities and connecting them with international buyers and business partners.',
              },
              {
                icon: Globe,
                title: 'International Sourcing',
                desc: 'Through our global network, we identify and connect businesses with reliable suppliers across China, Europe, and other international markets.',
              },
              {
                icon: MapPin,
                title: 'Market Entry Strategy',
                desc: 'We support international manufacturers who want to enter the Indian market by providing strategic guidance, industry connections, and business development support.',
              },
              {
                icon: FileText,
                title: 'Business Representation',
                desc: 'We represent global manufacturers as consultants or commission agents, helping them establish relationships with leading companies in India.',
              },
              {
                icon: ClipboardCheck,
                title: 'Global Trade Facilitation',
                desc: 'We simplify international trade processes by building partnerships between buyers and suppliers, ensuring smooth and efficient business collaboration.',
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
