import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Peter's Portfolio",
  description: "Explore my projects and work",
};

export default function Projects() {
  // Project data based on CV
  const projects = [
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      link: "/projects/charity-dao-platform",
    },
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      link: "/projects/electronic-voting",
    },
    {
      id: "psv-management",
      title: "PSV Management System",
      description: "A management system for the Public Service Vehicle (PSV) Sacco of Murang'a town that significantly improved operational efficiency, reduced manual errors, and enhanced overall management.",
      image: "/project-placeholder-2.jpg",
      technologies: ["Visual Basic", "Database Management", "UI/UX Design"],
      link: "/projects/psv-management",
    },
    {
      id: "cyber-security-research",
      title: "Cyber Security Research",
      description: "Research projects focused on emerging threats, vulnerability assessments, and mitigation strategies in the field of cyber security.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Penetration Testing", "Digital Forensics", "Security Analysis", "Threat Modeling"],
      link: "/projects/cyber-security-research",
    },
    {
      id: "government-digitization",
      title: "Government Services Digitization",
      description: "Contributed to the digitization of 5,000 government services, streamlining operational workflows and implementing automated systems to reduce manual errors and save processing time.",
      image: "/project-placeholder-2.jpg",
      technologies: ["Process Automation", "System Integration", "Data Management", "Workflow Optimization"],
      link: "/projects/government-digitization",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        My Projects
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
