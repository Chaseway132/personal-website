import Link from "next/link";
import { notFound } from "next/navigation";

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  detailedDescription?: string;
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Peter's Portfolio`,
    description: project.description,
  };
}

// Function to get project data
function getProject(slug: string): Project | undefined {
  // This is a mock database of projects
  // In a real application, you would fetch this data from a database or API
  const projects: Project[] = [
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      detailedDescription: "The Electronic Voting Innovation Project was developed to address the challenges of traditional voting systems, including security concerns, lack of transparency, and inefficiency. By leveraging blockchain technology, this project creates a secure, transparent, and immutable platform for conducting elections."
    },
    {
      id: "psv-management",
      title: "PSV Management System",
      description: "A management system for the Public Service Vehicle (PSV) Sacco of Murang'a town that significantly improved operational efficiency, reduced manual errors, and enhanced overall management.",
      image: "/project-placeholder-2.jpg",
      technologies: ["Visual Basic", "Database Management", "UI/UX Design"],
      detailedDescription: "The PSV Management System was designed and implemented for the Public Service Vehicle (PSV) Sacco of Murang'a town. This system digitized and streamlined the operations of the Sacco, replacing manual record-keeping and processes with an efficient digital solution."
    },
    {
      id: "cyber-security-research",
      title: "Cyber Security Research",
      description: "Research projects focused on emerging threats, vulnerability assessments, and mitigation strategies in the field of cyber security.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Penetration Testing", "Digital Forensics", "Security Analysis", "Threat Modeling"],
      detailedDescription: "As part of my ongoing work in the field of cybersecurity, I have conducted various research projects focused on emerging threats, vulnerability assessments, and mitigation strategies. These projects aim to advance the understanding of cyber threats and develop effective countermeasures."
    },
    {
      id: "government-digitization",
      title: "Government Services Digitization",
      description: "Contributed to the digitization of 5,000 government services, streamlining operational workflows and implementing automated systems to reduce manual errors and save processing time.",
      image: "/project-placeholder-2.jpg",
      technologies: ["Process Automation", "System Integration", "Data Management", "Workflow Optimization"],
      detailedDescription: "As part of a national initiative to modernize government services, I contributed to the digitization of 5,000 government services. This massive undertaking involved transforming paper-based, manual processes into efficient digital workflows, making government services more accessible and efficient for citizens."
    },
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/project-placeholder-1.jpg",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      detailedDescription: "This dissertation project addresses the critical challenge of trust in charitable organizations in Kenya by leveraging blockchain technology and decentralized autonomous organization (DAO) principles. The platform creates a transparent, immutable record of donations and their utilization, allowing donors to track their contributions and ensuring that funds reach their intended beneficiaries."
    }
  ];

  return projects.find(project => project.id === slug);
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  // If project doesn't exist, return 404
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Home
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <Link href="/projects" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
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
          <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
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
            href="/projects"
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
}
