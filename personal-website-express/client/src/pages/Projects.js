import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load projects from static data
    setProjectList(projects);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
      </motion.p>

      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-700/50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105 border border-gray-600/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative h-48 bg-gray-600 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-400">Project Image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-900 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
