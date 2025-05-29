import Image from "next/image";

export const metadata = {
  title: "About Me | Peter's Portfolio",
  description: "Learn more about me, my background, and my journey",
};

export default function About() {
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
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Murang'a University of Science and Technology",
      location: "Kiharu, Murang'a",
      period: "Aug 2017 - Dec 2021",
      description: "Studied Software Engineering, Operating Systems, Algorithms, Computer Networking, System Design, Artificial Intelligence, Cyber Security, Mobile Application Development, and Web Application Development.",
    },
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
        "Providing training in penetration testing, CEH, and Digital Forensics",
        "Working as a Security Operations Center (SOC) analyst"
      ],
    },
    {
      id: 2,
      position: "Research Assistant – Digital Forensics",
      company: "Scratch and Script Ltd",
      location: "Nairobi, Kenya",
      period: "2022 - 2023",
      description: "Developed educational content and engaged with industry professionals for digital forensics training.",
      responsibilities: [
        "Created self-paced online instructor videos and coursework materials",
        "Developed lab demonstration videos for the platform",
        "Engaged industry professionals for Q&A interviews",
        "Produced course trailers and published professional interviews"
      ],
    },
    {
      id: 3,
      position: "Presidential Digital Talent Program (PDTP) Intern",
      company: "ICT Authority",
      location: "Nairobi, Kenya",
      period: "Dec 2022 - July 2023",
      description: "Contributed to the digitization of government services and implemented network improvements.",
      responsibilities: [
        "Participated in digitizing 5,000 government services, reducing manual errors by 40%",
        "Prepared daily, weekly, and monthly reports on digitization status",
        "Collaborated with government departments to identify digitization opportunities",
        "Upgraded software systems at KASNEB, improving operational efficiency by 20%",
        "Implemented network improvements, reducing downtime by 30%",
        "Conducted regular maintenance, reducing system errors by 15%"
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        About Me
      </h1>

      {/* Personal Introduction */}
      <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/peter-profile.jpeg"
              alt="Peter Mwangi"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Hello, I&apos;m Peter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am a cybersecurity professional and software engineer based in Nairobi, Kenya.
            With expertise in cyber security, digital forensics, and software development,
            I am passionate about creating secure and innovative solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My journey in technology began with a Bachelor's degree in Software Engineering from Murang'a University,
            and I am currently pursuing a Master's in Information Systems Security at Strathmore University.
            I have developed skills in various programming languages, cybersecurity tools, and methodologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Beyond my professional work, I am committed to community service through the Visionary Youth Foundation,
            which I co-founded. I believe in continuous learning and applying my technical skills to make a positive impact
            in both the digital and physical world.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                {edu.institution}, {edu.location} | {edu.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                {exp.position}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">
                {exp.company}, {exp.location} | {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <h4 className="font-medium text-gray-800 dark:text-white mb-2">
                Key Responsibilities:
              </h4>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
