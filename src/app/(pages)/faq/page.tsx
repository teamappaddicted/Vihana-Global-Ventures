'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the difference between trading and consulting services?',
      answer: 'Trading involves buying and selling goods internationally with direct handling of cargo. Consulting, specifically our indenting agent services, helps match buyers with suppliers and guides businesses through trade processes.',
    },
    {
      question: 'How do you ensure quality of imported goods?',
      answer: 'We conduct rigorous quality inspections at supplier facilities, during production, and before shipment. We also maintain relationships with certified suppliers and conduct regular audits.',
    },
    {
      question: 'What are your shipping and logistics capabilities?',
      answer: 'We handle all logistics including FCL (Full Container Load) and LCL (Less than Container Load) shipments, air cargo, and overland transport. We coordinate with ports, customs brokers, and transportation partners worldwide.',
    },
    {
      question: 'How long does the customs clearance process typically take?',
      answer: 'Clearance times vary by destination and product type, typically ranging from 1-7 days for well-documented shipments. We ensure all documentation is correct to minimize delays.',
    },
    {
      question: 'Do you handle documentation and compliance?',
      answer: 'Yes, we manage all documentation including certificates of origin, bills of lading, invoices, packing lists, and ensure full compliance with destination country regulations.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve agriculture, textiles, chemicals, machinery, FMCG, and industrial goods sectors globally. Our expertise spans multiple industries with tailored solutions for each.',
    },
    {
      question: 'Can you help small businesses enter international markets?',
      answer: 'Absolutely! We work with businesses of all sizes. Our consulting services help small businesses understand market requirements, find suppliers/buyers, and manage their first international transactions.',
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We typically work with various payment methods including T/T, L/C, D/A, D/P, and cash. Payment terms are negotiated based on transaction size and parties involved.',
    },
    {
      question: 'How do you handle disputes or quality issues?',
      answer: 'We have established procedures for dispute resolution, quality claims, and remedies. Our team works to resolve issues quickly while protecting both parties interests.',
    },
    {
      question: 'Do you provide insurance for shipments?',
      answer: 'Yes, we offer cargo insurance options for all shipments. We can arrange comprehensive coverage based on your requirements and risk assessment.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">Find answers to common questions about our services</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#214156]/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#214156]/2 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-[#214156] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <p className="px-6 py-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-[#214156]/10 to-cyan-50 rounded-2xl border border-[#214156]/20 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Didn't find your answer?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us directly for specific inquiries.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#214156] text-white rounded-lg font-semibold hover:bg-[#2d5a73] transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
