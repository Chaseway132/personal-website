import React from 'react';
import Achievements from '../components/Achievements';
import { motion } from 'framer-motion';

const About = () => {
  // Education data
  const education = [
    {
      id: 1,
      degree: "Masters of Science in Information Systems Security",
      institution: "Strathmore University",
      location: "Madaraka Estate, Nairobi",
      period: "Currently pursuing - Expected May 2025",
      description: "Advanced studies in cybersecurity, focusing on emerging threats, vulnerability assessments, and security frameworks.",
    },
    {
      id: 2,
      degree: "Major in Software Engineering",
      institution: "Murang'a University of Science and Technology",
      location: "Kiharu, Murang'a",
      period: "August 2017 - December 2021",
      description: "Relevant coursework: Software Engineering, Operating Systems, Algorithms, Computer Networking, System Design, Artificial Intelligence, Cyber Security, Mobile Application Development – Android, Web Application Development.",
    },
  ];

  // Achievements data
  const achievements = [
    {
      title: "Guest Speaker Award – Cyber Security",
      organization: "TEMS ICT EXPO 2025",
      year: "2025",
      description: "Recognized for expertise and contributions in the field of cybersecurity."
    },
    {
      title: "Certificate of Merit – 2nd position at both sub-county and County Level",
      organization: "Kenya Science and Engineering Fair",
      year: "2014",
      description: "Awarded during high school for excellence in science and engineering projects."
    },
    {
      title: "Certified Ethical Hacker (C|EH)",
      organization: "EC Council",
      year: "2023",
      description: "Professional certification demonstrating expertise in ethical hacking and cybersecurity."
    },
    {
      title: "Cyber Shujaa – Security Analyst",
      organization: "Cyber Shujaa Program",
      year: "2023"
    },
    {
      title: "Fortinet Cybersecurity Associate",
      organization: "Fortinet",
      year: "2023"
    }
  ];

  // Experience data
  const experience = [
    {
      id: 1,
      position: "Research Scholar, Cyber Security Department",
      company: "@iLabAfrica",
      location: "Nairobi, Kenya",
      period: "July 2023 - Present",
      description: "Conducting cutting-edge research in cyber security and collaborating with multidisciplinary teams to develop innovative solutions.",
      responsibilities: [
        "Conducting research on emerging threats, vulnerability assessments, and mitigation strategies",
        "Collaborating with teams to develop innovative solutions against cyber threats",
        "Investigating and analyzing cyber incidents, identifying patterns, and developing recommendations",
        "Providing training in penetration testing, CEH, Digital Forensics, and Security Awareness",
        "Working as a Security Operations Center (SOC) analyst",
        "Business Continuity and Disaster Recovery Awareness",
        "IT Policy Development and Review – NIST, COBIT, ISO 27000 series"
      ],
    },
    {
      id: 2,
      position: "Research Assistant – Digital Forensics",
      company: "Scratch and Script Ltd",
      location: "Nairobi, Kenya",
      period: "December 2022 - July 2023",
      description: "Developed digital forensics training materials and engaged with industry professionals.",
      responsibilities: [
        "Research and Analysis – Created self-paced online instructor & coursework material videos",
        "Developed self-paced videos on lab demos for the online platform",
        "Stakeholder Engagement – Engaged industry professionals for Q & A interviews",
        "Created course trailers and published Q & A interviews with professionals",
        "Digital Forensics Training Course Development"
      ],
    },
    {
      id: 3,
      position: "Presidential Digital Talent Program (PDTP) Intern",
      company: "ICT Authority",
      location: "Nairobi, Kenya",
      period: "December 2022 - July 2023",
      description: "Contributed to government digitization efforts and system improvements.",
      responsibilities: [
        "Digitization of 5,000 Government Services – Streamlined operational workflows and implemented automated systems",
        "Reduced manual errors by 40% and saved 20+ hours per week in data entry and processing tasks",
        "Prepared daily, weekly, and monthly reports on the status of digitization",
        "Collaborated with government departments to identify opportunities for digitization",
        "KASNEB Deployment – Successfully upgraded software systems, improving functionality and security",
        "Implemented network improvements, resulting in a 30% reduction in network downtime",
        "Conducted regular maintenance activities, reducing system errors by 15%"
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h1>

      {/* Personal Introduction */}
      <motion.section
        className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <img src="/personal-website/images/peter-profile.jpg" alt="Peter Mwangi" className="w-full h-full object-cover" />
          </div>
          <div className="absolute mt-64 pt-4 flex flex-col items-center">
            <a
              href="https://github.com/Chaseway132/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-400 mt-2"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/peter-mwangi-b123b7213/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-400 mt-2"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:petermwangi7752@gmail.com"
              className="flex items-center text-gray-300 hover:text-blue-400 mt-2"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Hello, I&apos;m Peter
          </h2>
          <p className="text-gray-300 mb-4">
            I am a cybersecurity professional and software engineer based in Nairobi, Kenya.
            With expertise in cyber security, digital forensics, and software development,
            I am passionate about creating secure and innovative solutions.
          </p>
          <p className="text-gray-300 mb-4">
            My journey in technology began with a fascination for how systems work and how they can be
            secured against threats. This curiosity led me to pursue formal education in software engineering
            and specialize in information security.
          </p>
          <p className="text-gray-300">
            Beyond my professional work, I am committed to community development and youth empowerment.
            I co-founded the Visionary Youth Foundation to mentor and support young people in pursuing
            careers in technology and entrepreneurship.
          </p>
        </div>
      </motion.section>

      {/* Education Section */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-1 text-white">
                {edu.degree}
              </h3>
              <p className="text-blue-400 mb-2">
                {edu.institution}, {edu.location} | {edu.period}
              </p>
              <p className="text-gray-300">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={exp.id} className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600/50">
              <h3 className="text-xl font-semibold mb-1 text-white">
                {exp.position}
              </h3>
              <p className="text-blue-400 mb-3">
                {exp.company}, {exp.location} | {exp.period}
              </p>
              <p className="text-gray-300 mb-4">
                {exp.description}
              </p>
              <h4 className="font-medium text-white mb-2">
                Key Responsibilities:
              </h4>
              <ul className="list-disc pl-5 text-gray-300">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Achievements & Awards
        </h2>
        <div>
          <Achievements achievements={achievements} />
        </div>
      </section>

      {/* Community Involvement Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-white">
          Community Involvement
        </h2>
        <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600/50">
          <h3 className="text-xl font-semibold mb-1 text-white">
            Visionary Youth Foundation
          </h3>
          <p className="text-blue-400 mb-3">
            Murang'a County | March 2018 - Present
          </p>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Co-founded a group of dedicated volunteers and successfully recruited and trained a team of 20 volunteers.</li>
            <li>Organized and conducted educational training sessions for over 20 primary school students in Murang'a, covering various subjects and study skills.</li>
            <li>Actively engaged with the children by organizing weekly recreational activities, such as sports events, arts and crafts sessions, and educational field trips.</li>
            <li>Developed and implemented ICT training programs for volunteers and students, enhancing their digital literacy skills and empowering them to utilize technology effectively.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
