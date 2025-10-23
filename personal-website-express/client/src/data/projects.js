// Static project data for the portfolio
export const projects = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'A modern personal portfolio website built with Express.js and React',
    detailedDescription: 'A fully responsive personal portfolio website showcasing my projects and skills. Built with Express.js backend and React frontend, featuring smooth animations, dark mode support, and optimized performance. Deployed on GitHub Pages for static hosting.',
    image: '/personal-website/images/project-placeholder-1.jpg',
    technologies: ['React', 'Express.js', 'Tailwind CSS', 'Webpack'],
    link: '#'
  },
  {
    id: 2,
    title: 'Cybersecurity Project',
    description: 'Security analysis and penetration testing framework',
    detailedDescription: 'A comprehensive cybersecurity project focusing on network security analysis, vulnerability assessment, and penetration testing. Includes tools for security auditing and threat detection.',
    image: '/personal-website/images/project-placeholder-2.jpg',
    technologies: ['Python', 'Security', 'Networking', 'Linux'],
    link: '#'
  },
  {
    id: 3,
    title: 'Software Development Tool',
    description: 'Development utility for streamlining workflow',
    detailedDescription: 'A powerful development tool designed to streamline the software development workflow. Features include automated testing, code analysis, and deployment automation.',
    image: '/personal-website/images/project-placeholder-1.jpg',
    technologies: ['JavaScript', 'Node.js', 'CLI', 'Automation'],
    link: '#'
  },
  {
    id: 4,
    title: 'Web Application',
    description: 'Full-stack web application with real-time features',
    detailedDescription: 'A full-stack web application featuring real-time data synchronization, user authentication, and a responsive user interface. Built with modern web technologies and best practices.',
    image: '/personal-website/images/project-placeholder-2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: '#'
  },
  {
    id: 5,
    title: 'Mobile App',
    description: 'Cross-platform mobile application',
    detailedDescription: 'A cross-platform mobile application built with modern frameworks. Features include offline support, push notifications, and seamless synchronization across devices.',
    image: '/personal-website/images/project-placeholder-1.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    link: '#'
  },
  {
    id: 6,
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics and visualization platform',
    detailedDescription: 'An advanced analytics dashboard providing real-time insights and data visualization. Features interactive charts, custom reports, and data export capabilities.',
    image: '/personal-website/images/project-placeholder-2.jpg',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    link: '#'
  }
];

// Helper function to get a single project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Helper function to get featured projects (first 2)
export const getFeaturedProjects = () => {
  return projects.slice(0, 2);
};

