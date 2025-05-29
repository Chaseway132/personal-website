import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Peter's Portfolio",
  description: "Read my thoughts and insights on cybersecurity, software development, and technology",
};

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
  readTime: string;
}

export default function Blog() {
  // Sample blog posts - you can replace these with your actual blog posts
  const blogPosts: BlogPost[] = [
    {
      id: "understanding-ethical-hacking",
      title: "Understanding Ethical Hacking: A Beginner's Guide",
      excerpt: "Ethical hacking is a crucial aspect of cybersecurity. Learn about the principles, methodologies, and importance of ethical hacking in protecting digital assets.",
      date: "May 5, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-1.jpg",
      category: "Cybersecurity",
      readTime: "5 min read",
    },
    {
      id: "blockchain-voting-systems",
      title: "How Blockchain Can Revolutionize Voting Systems",
      excerpt: "Explore how blockchain technology can create more secure, transparent, and efficient voting systems, addressing many of the challenges faced by traditional voting methods.",
      date: "April 28, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-2.jpg",
      category: "Blockchain",
      readTime: "7 min read",
    },
    {
      id: "digital-forensics-basics",
      title: "Digital Forensics: The Basics Everyone Should Know",
      excerpt: "An introduction to digital forensics, its importance in cybersecurity investigations, and the fundamental techniques used to collect and analyze digital evidence.",
      date: "April 15, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-3.jpg",
      category: "Digital Forensics",
      readTime: "6 min read",
    },
    {
      id: "mobile-app-security",
      title: "Essential Security Practices for Mobile App Development",
      excerpt: "Discover the key security considerations and best practices that every mobile app developer should implement to protect user data and prevent vulnerabilities.",
      date: "March 30, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-4.jpg",
      category: "Mobile Development",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Blog
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        Thoughts, insights, and tutorials on cybersecurity, software development, and technology
      </p>

      {/* Featured Post */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Post</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Blog Image</span>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  PM
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{blogPosts[0].author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{blogPosts[0].date}</p>
                </div>
              </div>
              <Link 
                href={`/blog/${blogPosts[0].id}`} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Read full article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-48">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Blog Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-3">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                      PM
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">{post.date}</p>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
