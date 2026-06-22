'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Global Presence', href: '/global-presence' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-conditions' },
        { name: 'Disclaimer', href: '/disclaimer' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a3141] to-[#214156] text-white">
      {/* Glassmorphic decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-[#214156] bg-clip-text text-transparent mb-4">
                Vihana Global Ventures
              </h3>
              <p className="text-gray-300 mb-6">
                Connecting global markets with trust and excellence through innovative import-export trading and consulting solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={18} className="text-cyan-400" />
                  <span>O-402 SUN ATMOSPHERE NR O7 CLUB SHELA, SANAND, AHMEDABAD, GUJARAT - 380058</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-cyan-400" />
                  <span>+91 9904461301</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-cyan-400" />
                  <span>info@vihanaglobalventures.com</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-12" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Vihana Global Ventures. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/919904461301"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                💬
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 via-[#214156] to-purple-500" />
      </div>
    </footer>
  );
}
