'use client';

import { motion } from 'framer-motion';

export default function FounderPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Founder's Message</h1>
            <p className="text-xl text-white/90">Vision for global trade excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-[#214156]/20 to-cyan-200 rounded-2xl flex items-center justify-center text-8xl">
                👔
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Rajesh Kumar Sharma</h2>
              <p className="text-lg text-[#214156] font-semibold mb-6">Founder & CEO</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When I founded Vihana Global Ventures in 2009, I had a simple but powerful vision: to democratize international trade. For too long, global commerce remained accessible only to large corporations with extensive resources. I saw an opportunity to change that.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small trading company to a leading force in import-export consulting. But our core mission remains unchanged—to help businesses of all sizes access global opportunities with confidence.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to integrity, our deep market expertise, and our genuine care for our clients' success. We don't just facilitate transactions; we build lasting partnerships based on trust and mutual growth.
                </p>
                <p>
                  Today, as we serve clients across 85+ countries, I'm proud that Vihana Global Ventures has become synonymous with reliability, innovation, and excellence in global trade. Our success is measured not just in numbers, but in the success stories of our clients.
                </p>
                <p>
                  Looking ahead, I'm excited about the future of global commerce. With emerging technologies and new market opportunities, we're positioned to lead the transformation of international trade into a seamless, transparent, and profitable endeavor for all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Leadership Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Client-First Mindset',
                description: 'Every decision is made with our clients\'s best interests in mind',
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve to meet changing market demands',
              },
              {
                title: 'Transparency',
                description: 'Honest communication and clear terms in all relationships',
              },
              {
                title: 'Excellence',
                description: 'We never compromise on quality or service standards',
              },
              {
                title: 'Team Empowerment',
                description: 'Investing in our people is investing in our future',
              },
              {
                title: 'Sustainable Growth',
                description: 'Building for long-term success, not short-term gains',
              },
              {
                title: 'Global Perspective',
                description: 'Understanding diverse markets and cultural nuances',
              },
              {
                title: 'Continuous Learning',
                description: 'Staying ahead of industry trends and best practices',
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 bg-white rounded-lg border border-gray-100 hover:border-[#214156]/30 transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              "Global trade is not just about moving goods—it's about connecting people, creating opportunities, and building a more prosperous world."
            </p>
            <p className="text-lg text-white/90">— Rajesh Kumar Sharma, Founder & CEO</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
