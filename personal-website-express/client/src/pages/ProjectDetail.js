import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load project from static data
    const foundProject = getProjectById(slug);
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      setLoading(false);
      // Redirect to projects page if project not found
      navigate('/projects');
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-300">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-300">Project not found.</p>
        <Link
          to="/projects"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Home
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <Link to="/projects" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Projects
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300">{project.title}</span>
        </nav>

        {/* Project Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
