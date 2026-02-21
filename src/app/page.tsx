'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import ServicesGrid from '@/components/ServicesGrid';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import AnimatedGlobe3D from '@/components/AnimatedGlobe3D';
import ScrollingShip2D from '@/components/ScrollingShip2D';

const CargoShip3D = dynamic(() => import('@/components/CargoShip3D'), { ssr: false });
const AirplaneAnimation3D = dynamic(() => import('@/components/AirplaneAnimation3D'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#214156]/5 to-cyan-50">
        {/* 3D Airplane Animation */}
        <div className="absolute inset-0 top-0 h-full">
          <div className="w-full h-full">
            <AirplaneAnimation3D />
          </div>
        </div>

        {/* 3D Cargo Ship Background Element */}
        <div className="absolute inset-0 top-0 h-full">
          <div className="w-full h-full">
            <CargoShip3D />
          </div>
        </div>

        {/* 2D Scrolling Ship */}
        <ScrollingShip2D />

        {/* Gradient Overlays - Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />

        {/* Animated background shapes - subtle */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#214156]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#214156]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#214156] text-white rounded-full text-sm font-semibold shadow-lg">
              🌍 Welcome to Global Trade Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-[#214156] via-[#2d5a73] to-[#1a3141] bg-clip-text text-transparent drop-shadow-lg">
              Connecting Global Markets
            </span>
            <br />
            <span className="text-white drop-shadow-xl">With Trust & Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-900 font-medium mb-10 max-w-2xl drop-shadow-lg"
          >
            Premier international import-export trading and consulting solutions for businesses worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/services"
              className="group px-8 py-4 bg-gradient-to-r from-[#214156] to-[#2d5a73] text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Explore Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#214156] bg-white text-[#214156] rounded-lg font-semibold hover:bg-[#214156]/5 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <Play size={18} />
              Contact Us
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-900 font-semibold text-sm drop-shadow-lg"
          >
            ↓ Scroll to explore more ↓
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Vihana Global Ventures
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                With over 15 years of expertise in international trade, Vihana Global Ventures has established itself as a trusted partner for businesses seeking to expand globally.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in comprehensive import-export trading solutions and expert consulting services, helping companies navigate complex international markets with confidence and ease.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#214156] text-white rounded-lg font-semibold hover:bg-[#2d5a73] transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>

            {/* Right 3D Globe */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 md:h-full"
            >
              <AnimatedGlobe3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Vision & Mission Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-gray-600">Driving global commerce forward</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#214156]/5 to-cyan-50 rounded-2xl border border-[#214156]/10 hover:border-[#214156]/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#214156] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative global trading partner, recognized for excellence in connecting businesses across borders and enabling seamless international commerce.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-cyan-50 to-[#214156]/5 rounded-2xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#214156] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with comprehensive trading solutions, expert consulting, and unparalleled market intelligence, making global trade accessible and profitable for all our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#214156] to-[#2d5a73] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let us help you navigate international markets with confidence
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#214156] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
