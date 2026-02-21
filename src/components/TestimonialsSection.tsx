'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Mitchell',
      company: 'Global Retail Corp',
      content: 'Vihana Global Ventures transformed our supply chain. Their expertise in logistics and trade compliance saved us thousands.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Sarah Chen',
      company: 'Tech Manufacturing Ltd',
      content: 'Outstanding service! Their indenting agent services connected us with reliable suppliers worldwide.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Ahmed Hassan',
      company: 'Agricultural Exports Inc',
      content: 'Professional, reliable, and always responsive. Best trading partner we could ask for.',
      rating: 5,
      image: '👨‍🌾',
    },
    {
      name: 'Emma Rodriguez',
      company: 'Fashion Imports EU',
      content: 'Their market intelligence reports have been invaluable for our business strategy.',
      rating: 5,
      image: '👩‍💼',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-[#214156]/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
