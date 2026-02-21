'use client';

import { motion } from 'framer-motion';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '2024 Global Trade Outlook: Key Trends to Watch',
      date: 'January 15, 2024',
      category: 'Market Trends',
      excerpt: 'As we enter 2024, several key trends are shaping the landscape of international trade...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Navigating Trade Compliance in 2024',
      date: 'January 10, 2024',
      category: 'Compliance',
      excerpt: 'Understanding the latest changes in trade regulations and how to ensure full compliance...',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Supply Chain Resilience: Building a Stronger Network',
      date: 'January 5, 2024',
      category: 'Supply Chain',
      excerpt: 'Lessons learned from global disruptions and strategies to build resilience...',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'The Role of Technology in Modern Trade',
      date: 'December 28, 2023',
      category: 'Technology',
      excerpt: 'How digital transformation is revolutionizing international commerce and logistics...',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Emerging Markets: Opportunities for Expansion',
      date: 'December 20, 2023',
      category: 'Market Insights',
      excerpt: 'Which emerging markets offer the best opportunities for import-export businesses...',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Sustainable Trade Practices for Global Partners',
      date: 'December 15, 2023',
      category: 'Sustainability',
      excerpt: 'How sustainable practices are becoming essential in global supply chains...',
      readTime: '5 min read',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights & News</h1>
            <p className="text-xl text-white/90">Latest trends, market intelligence, and trading insights</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-[#214156]/10 to-cyan-100 rounded-xl mb-4 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  📰
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-block px-3 py-1 bg-[#214156]/10 text-[#214156] text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#214156] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-[#214156] font-semibold group-hover:translate-x-1 transition-transform">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-3 border-2 border-[#214156] text-[#214156] rounded-lg font-semibold hover:bg-[#214156]/5 transition-all">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#214156] to-[#2d5a73] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for weekly market insights and trade updates
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#214156] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
