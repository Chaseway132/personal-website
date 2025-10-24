import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  
  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Blog
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Insights on blockchain, cybersecurity, and information systems security
      </motion.p>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600/50'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-gray-700/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ translateY: -5 }}
          >
            {/* Blog Image */}
            <div className="w-full h-48 bg-gray-600 overflow-hidden">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Blog Image</span>
                </div>
              )}
            </div>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block bg-blue-900 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4 border-t border-gray-600/50 pt-4">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              {/* Read More Link */}
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No posts message */}
      {filteredBlogs.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-lg">No blog posts found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;

