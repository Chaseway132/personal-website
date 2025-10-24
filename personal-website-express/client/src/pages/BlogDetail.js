import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 font-medium">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
          ← Back to Blog
        </Link>
      </motion.div>

      {/* Blog Header */}
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {blog.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-gray-300 mb-6">
          <span className="inline-block bg-blue-900 text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span>By {blog.author}</span>
        </div>
      </motion.header>

      {/* Featured Image */}
      <motion.div
        className="mb-8 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-full h-96 bg-gray-600 overflow-hidden">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-400">Blog Image</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="prose prose-invert max-w-none">
          {blog.content.split('\n').map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            // Handle subheadings
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-blue-400 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            // Handle bullet points
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-gray-300 ml-6 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            // Handle empty lines
            if (paragraph.trim() === '') {
              return <div key={index} className="mb-4" />;
            }
            // Regular paragraphs
            return (
              <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </motion.div>

      {/* Author Info */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-600/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-400">PM</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{blog.author}</h3>
            <p className="text-gray-300">Master's in Information Systems Security</p>
          </div>
        </div>
      </motion.div>

      {/* Related Posts */}
      <motion.div
        className="max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs
            .filter(b => b.id !== blog.id)
            .slice(0, 2)
            .map(relatedBlog => (
              <Link
                key={relatedBlog.id}
                to={`/blog/${relatedBlog.id}`}
                className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                  {relatedBlog.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
              </Link>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;

