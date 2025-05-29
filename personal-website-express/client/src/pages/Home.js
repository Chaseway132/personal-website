import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from the API
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => {
        // Get the first two projects as featured projects
        setFeaturedProjects(data.slice(0, 2));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-12 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-xl mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Welcome to my personal portfolio website where I showcase my projects,
              achievements, and skills.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center"
                style={{ minWidth: 150 }}
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-md transition duration-300 text-center"
                style={{ minWidth: 150 }}
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
              <img src="/images/peter-profile.jpg" alt="Peter Mwangi" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-12 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-xl mb-12">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Cyber Security</span>
                    <span className="text-gray-700 dark:text-gray-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Software Development</span>
                    <span className="text-gray-700 dark:text-gray-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                    <span className="text-gray-700 dark:text-gray-300">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Soft Skills</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Leadership</span>
                    <span className="text-gray-700 dark:text-gray-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Communication</span>
                    <span className="text-gray-700 dark:text-gray-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Teamwork</span>
                    <span className="text-gray-700 dark:text-gray-300">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-xl">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          {loading ? (
            <div className="text-center">Loading projects...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center group"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <a
              href="/projects"
              style={{
                display: 'inline-block',
                backgroundColor: '#2563eb',
                color: 'white',
                fontWeight: '500',
                padding: '12px 32px',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              View All Projects
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
