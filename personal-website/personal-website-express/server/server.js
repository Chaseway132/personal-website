const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/public')));

// API routes for projects
app.get('/api/projects', (req, res) => {
  // Return projects data
  res.json([
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      detailedDescription: "This dissertation project addresses the critical challenge of trust in charitable organizations in Kenya by leveraging blockchain technology and decentralized autonomous organization (DAO) principles. The platform creates a transparent, immutable record of donations and their utilization, allowing donors to track their contributions and ensuring that funds reach their intended beneficiaries."
    },
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      detailedDescription: "The Electronic Voting Innovation Project was developed to address the challenges of traditional voting systems, including security concerns, lack of transparency, and inefficiency. By leveraging blockchain technology, this project creates a secure, transparent, and immutable platform for conducting elections."
    },
    {
      id: "psv-management",
      title: "PSV Management System",
      description: "A management system for the Public Service Vehicle (PSV) Sacco of Murang'a town that significantly improved operational efficiency, reduced manual errors, and enhanced overall management.",
      image: "/images/project-placeholder-2.jpg",
      technologies: ["Visual Basic", "Database Management", "UI/UX Design"],
      detailedDescription: "The PSV Management System was designed and implemented for the Public Service Vehicle (PSV) Sacco of Murang'a town. This system digitized and streamlined the operations of the Sacco, replacing manual record-keeping and processes with an efficient digital solution."
    },
    {
      id: "cyber-security-research",
      title: "Cyber Security Research",
      description: "Research projects focused on emerging threats, vulnerability assessments, and mitigation strategies in the field of cyber security.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Penetration Testing", "Digital Forensics", "Security Analysis", "Threat Modeling"],
      detailedDescription: "As part of my ongoing work in the field of cybersecurity, I have conducted various research projects focused on emerging threats, vulnerability assessments, and mitigation strategies. These projects aim to advance the understanding of cyber threats and develop effective countermeasures."
    },
    {
      id: "government-digitization",
      title: "Government Services Digitization",
      description: "Contributed to the digitization of 5,000 government services, streamlining operational workflows and implementing automated systems to reduce manual errors and save processing time.",
      image: "/images/project-placeholder-2.jpg",
      technologies: ["Process Automation", "System Integration", "Data Management", "Workflow Optimization"],
      detailedDescription: "As part of a national initiative to modernize government services, I contributed to the digitization of 5,000 government services. This massive undertaking involved transforming paper-based, manual processes into efficient digital workflows, making government services more accessible and efficient for citizens."
    }
  ]);
});

// API route for a specific project
app.get('/api/projects/:id', (req, res) => {
  const projects = [
    {
      id: "charity-dao-platform",
      title: "Building Trustworthy Charity Platforms in Kenya: A Decentralised Approach with DAO",
      description: "A blockchain-based decentralized autonomous organization (DAO) platform designed to enhance transparency, accountability, and trust in charitable organizations operating in Kenya.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Blockchain", "Smart Contracts", "React", "Node.js", "Express", "JavaScript", "TypeScript", "Solidity", "Web3.js", "IPFS"],
      detailedDescription: "This dissertation project addresses the critical challenge of trust in charitable organizations in Kenya by leveraging blockchain technology and decentralized autonomous organization (DAO) principles. The platform creates a transparent, immutable record of donations and their utilization, allowing donors to track their contributions and ensuring that funds reach their intended beneficiaries."
    },
    {
      id: "electronic-voting",
      title: "Electronic Voting Innovation Project",
      description: "A secure and transparent voting system utilizing blockchain technology to ensure integrity and immutability of voting data, eliminating the possibility of tampering or fraud.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Web3", "Truffle", "Ganache", "JavaScript", "MetaMask", "NodeJS", "Ethereum"],
      detailedDescription: "The Electronic Voting Innovation Project was developed to address the challenges of traditional voting systems, including security concerns, lack of transparency, and inefficiency. By leveraging blockchain technology, this project creates a secure, transparent, and immutable platform for conducting elections."
    },
    {
      id: "psv-management",
      title: "PSV Management System",
      description: "A management system for the Public Service Vehicle (PSV) Sacco of Murang'a town that significantly improved operational efficiency, reduced manual errors, and enhanced overall management.",
      image: "/images/project-placeholder-2.jpg",
      technologies: ["Visual Basic", "Database Management", "UI/UX Design"],
      detailedDescription: "The PSV Management System was designed and implemented for the Public Service Vehicle (PSV) Sacco of Murang'a town. This system digitized and streamlined the operations of the Sacco, replacing manual record-keeping and processes with an efficient digital solution."
    },
    {
      id: "cyber-security-research",
      title: "Cyber Security Research",
      description: "Research projects focused on emerging threats, vulnerability assessments, and mitigation strategies in the field of cyber security.",
      image: "/images/project-placeholder-1.jpg",
      technologies: ["Penetration Testing", "Digital Forensics", "Security Analysis", "Threat Modeling"],
      detailedDescription: "As part of my ongoing work in the field of cybersecurity, I have conducted various research projects focused on emerging threats, vulnerability assessments, and mitigation strategies. These projects aim to advance the understanding of cyber threats and develop effective countermeasures."
    },
    {
      id: "government-digitization",
      title: "Government Services Digitization",
      description: "Contributed to the digitization of 5,000 government services, streamlining operational workflows and implementing automated systems to reduce manual errors and save processing time.",
      image: "/images/project-placeholder-2.jpg",
      technologies: ["Process Automation", "System Integration", "Data Management", "Workflow Optimization"],
      detailedDescription: "As part of a national initiative to modernize government services, I contributed to the digitization of 5,000 government services. This massive undertaking involved transforming paper-based, manual processes into efficient digital workflows, making government services more accessible and efficient for citizens."
    }
  ];

  const project = projects.find(p => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
});

// The "catchall" handler: for any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
