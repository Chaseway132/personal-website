"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import SkillBar from "@/components/SkillBar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <AnimatedText
            text="Hello, I'm Peter"
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Welcome to my personal portfolio website where I showcase my projects,
            achievements, and skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-4"
          >
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transform hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/peter-profile.jpeg"
              alt="Peter Mwangi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <AnimatedSection className="py-12">
        <AnimatedText
          text="My Skills"
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          <AnimatedCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" delay={0.1}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h3>
            <SkillBar name="Cyber Security" level={90} color="blue" />
            <SkillBar name="Software Development" level={85} color="green" />
            <SkillBar name="Web Development" level={80} color="indigo" />
            <SkillBar name="Mobile Development" level={75} color="purple" />
            <SkillBar name="Database Management" level={85} color="red" />
          </AnimatedCard>
          <AnimatedCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" delay={0.3}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Soft Skills</h3>
            <SkillBar name="Leadership" level={90} color="yellow" />
            <SkillBar name="Communication" level={85} color="pink" />
            <SkillBar name="Teamwork" level={95} color="teal" />
            <SkillBar name="Problem Solving" level={90} color="orange" />
            <SkillBar name="Adaptability" level={85} color="cyan" />
          </AnimatedCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" delay={0.1}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Cyber Security</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expertise in penetration testing, digital forensics, vulnerability assessment, and security analysis. Certified Ethical Hacker (C|EH) with experience as a SOC analyst.
            </p>
          </AnimatedCard>
          <AnimatedCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" delay={0.2}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Software Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proficient in SQL, Kotlin, JavaScript, HTML/CSS, Android development, and various programming languages. Experience in building secure and efficient applications.
            </p>
          </AnimatedCard>
          <AnimatedCard className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" delay={0.3}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Leadership & Communication</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Strong leadership skills demonstrated through co-founding the Visionary Youth Foundation and representing students. Effective communication and teamwork in cross-functional environments.
            </p>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection className="py-12 bg-gray-50 dark:bg-gray-900">
        <AnimatedText
          text="Latest from the Blog"
          className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Insights and tutorials on cybersecurity, software development, and technology
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md" delay={0.1}>
            <div className="p-6">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 inline-block">
                Cybersecurity
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Understanding Ethical Hacking: A Beginner's Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                Ethical hacking is a crucial aspect of cybersecurity. Learn about the principles, methodologies, and importance of ethical hacking.
              </p>
              <Link
                href="/blog/understanding-ethical-hacking"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group flex items-center"
              >
                Read more
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </AnimatedCard>
          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md" delay={0.2}>
            <div className="p-6">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 inline-block">
                Blockchain
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                How Blockchain Can Revolutionize Voting Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                Explore how blockchain technology can create more secure, transparent, and efficient voting systems.
              </p>
              <Link
                href="/blog/blockchain-voting-systems"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group flex items-center"
              >
                Read more
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </AnimatedCard>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 transform hover:scale-105"
          >
            View All Posts
          </Link>
        </motion.div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-12">
        <AnimatedText
          text="Featured Projects"
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md" delay={0.1}>
            <motion.div
              className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Trustworthy Charity DAO Platform</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A blockchain-based DAO platform enhancing transparency and trust in charitable organizations in Kenya.
              </p>
              <Link
                href="/projects/charity-dao-platform"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group flex items-center"
              >
                Learn more
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </AnimatedCard>
          <AnimatedCard className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md" delay={0.2}>
            <motion.div
              className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Project Image</span>
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Electronic Voting Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A secure blockchain-based voting system ensuring integrity and immutability of voting data.
              </p>
              <Link
                href="/projects/electronic-voting"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group flex items-center"
              >
                Learn more
                <motion.span
                  className="inline-block ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </AnimatedCard>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 transform hover:scale-105"
          >
            View All Projects
          </Link>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
