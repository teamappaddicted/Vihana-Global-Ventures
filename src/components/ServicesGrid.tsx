'use client';

import { motion } from 'framer-motion';
import { Truck, Package, Globe, FileText } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Truck,
      title: 'Import Consulting',
      description:
        'We assist Indian businesses in sourcing reliable products from international markets by connecting them with trusted global manufacturers and suppliers.',
      features: ['Supplier Identification', 'Quality Vetting', 'Negotiation Support', 'Cost Optimization'],
    },
    {
      icon: Globe,
      title: 'Export Support',
      description:
        'We help Indian companies expand globally by facilitating export opportunities and connecting them with international buyers and business partners.',
      features: ['Buyer Outreach', 'Export Documentation', 'Regulatory Guidance', 'Market Matching'],
    },
    {
      icon: Globe,
      title: 'International Sourcing',
      description:
        'Through our global network, we identify and connect businesses with reliable suppliers across China, Europe, and other international markets.',
      features: ['Global Supplier Network', 'Quality Assurance', 'Logistics Coordination', 'Supplier Audits'],
    },
    {
      icon: MapPin,
      title: 'Market Entry Strategy',
      description:
        'We support international manufacturers who want to enter the Indian market by providing strategic guidance, industry connections, and business development support.',
      features: ['Market Research', 'Partner Identification', 'Entry Planning', 'Local Networking'],
    },
    {
      icon: FileText,
      title: 'Business Representation',
      description:
        'We represent global manufacturers as consultants or commission agents, helping them establish relationships with leading companies in India.',
      features: ['Agency Support', 'Sales Enablement', 'Local Liaison', 'Contract Facilitation'],
    },
    {
      icon: ClipboardCheck,
      title: 'Global Trade Facilitation',
      description:
        'We simplify international trade processes by building partnerships between buyers and suppliers, ensuring smooth and efficient business collaboration.',
      features: ['Process Coordination', 'Compliance Oversight', 'Stakeholder Alignment', 'Risk Management'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import-export solutions tailored to your global business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#214156]/30 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Glassmorphism effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#214156]/0 to-cyan-500/0 group-hover:from-[#214156]/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-block p-4 bg-gradient-to-br from-[#214156]/20 to-cyan-100 rounded-lg mb-4"
                >
                  <service.icon className="w-6 h-6 text-[#214156]" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="inline-block w-1.5 h-1.5 bg-[#214156]/60 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#214156]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />
    </section>
  );
}
