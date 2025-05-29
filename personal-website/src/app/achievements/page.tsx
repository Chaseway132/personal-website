import Image from "next/image";

export const metadata = {
  title: "Achievements | Peter's Portfolio",
  description: "My achievements, awards, and recognitions",
};

export default function Achievements() {
  // Achievements data based on CV
  const achievements = [
    {
      id: 1,
      title: "Certificate of Merit – 2nd position",
      organization: "Kenya Science and Engineering Fair",
      date: "2014",
      description: "Awarded 2nd position at both sub-county and County Level at the Kenya Science and Engineering Fair during high school.",
      image: "/achievement-placeholder-1.jpg",
    },
    {
      id: 2,
      title: "Guest Speaker Award",
      organization: "TEMS ICT EXPO",
      date: "2025",
      description: "Recognized as a guest speaker in the field of Cyber Security at the TEMS ICT EXPO.",
      image: "/achievement-placeholder-2.jpg",
    },
    {
      id: 3,
      title: "Co-founder of Visionary Youth Foundation",
      organization: "Murang'a County",
      date: "March 2018 - Present",
      description: "Co-founded a volunteer group that provides educational training and recreational activities for primary school students in Murang'a.",
      image: "/achievement-placeholder-1.jpg",
    },
    {
      id: 4,
      title: "Presidential Digital Talent Program Selection",
      organization: "ICT Authority",
      date: "2022",
      description: "Selected for the prestigious Presidential Digital Talent Program, contributing to government digitization initiatives.",
      image: "/achievement-placeholder-2.jpg",
    },
  ];

  // Certifications data based on CV
  const certifications = [
    {
      id: 1,
      title: "Certified Ethical Hacker (C|EH)",
      issuer: "EC Council",
      date: "2023",
      description: "Professional certification in ethical hacking and penetration testing methodologies.",
    },
    {
      id: 2,
      title: "HCIA-Storage",
      issuer: "Huawei",
      date: "2022",
      description: "Certification in storage technologies and infrastructure management.",
    },
    {
      id: 3,
      title: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      date: "2022",
      description: "Comprehensive training in system administration and IT infrastructure management.",
    },
    {
      id: 4,
      title: "IT Security: Defense against the digital dark arts",
      issuer: "Coursera",
      date: "2022",
      description: "Advanced training in IT security principles and defense mechanisms.",
    },
    {
      id: 5,
      title: "Cyber Security",
      issuer: "CISCO",
      date: "2021",
      description: "Certification in cybersecurity fundamentals and best practices.",
    },
    {
      id: 6,
      title: "Cyber Shujaa – Security Analyst",
      issuer: "Cyber Shujaa",
      date: "2023",
      description: "Specialized training in security analysis and threat detection.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Achievements & Certifications
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        A collection of my notable achievements, awards, and professional certifications.
      </p>

      {/* Achievements Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Awards & Recognitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Achievement</span>
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {achievement.organization} | {achievement.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Professional Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <div key={certification.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                {certification.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">
                {certification.issuer} | {certification.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {certification.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
