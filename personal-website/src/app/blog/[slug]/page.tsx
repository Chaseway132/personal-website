import Link from "next/link";
import { notFound } from "next/navigation";

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
  readTime: string;
  content?: string;
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.title} | Peter's Portfolio`,
    description: post.excerpt,
  };
}

// Function to get blog post data
function getBlogPost(slug: string): BlogPost | undefined {
  // This is a mock database of blog posts
  // In a real application, you would fetch this data from a database or API
  const blogPosts: BlogPost[] = [
    {
      id: "understanding-ethical-hacking",
      title: "Understanding Ethical Hacking: A Beginner's Guide",
      excerpt: "Ethical hacking is a crucial aspect of cybersecurity. Learn about the principles, methodologies, and importance of ethical hacking in protecting digital assets.",
      date: "May 5, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-1.jpg",
      category: "Cybersecurity",
      readTime: "5 min read",
      content: `
        <h2>What is Ethical Hacking?</h2>
        <p>Ethical hacking, also known as penetration testing or white-hat hacking, is the practice of identifying and addressing security vulnerabilities in computer systems, networks, and applications. Unlike malicious hacking, ethical hacking is performed with the explicit permission of the system owner to improve security posture.</p>
        
        <h2>The Importance of Ethical Hacking</h2>
        <p>In today's digital landscape, organizations face an ever-growing number of cyber threats. Ethical hacking helps organizations:</p>
        <ul>
          <li>Identify vulnerabilities before malicious hackers do</li>
          <li>Strengthen security measures and protocols</li>
          <li>Protect sensitive data and customer information</li>
          <li>Comply with industry regulations and standards</li>
          <li>Build trust with customers and stakeholders</li>
        </ul>
        
        <h2>Key Methodologies in Ethical Hacking</h2>
        <p>Ethical hackers follow a structured approach to identify and address security vulnerabilities:</p>
        
        <h3>1. Reconnaissance</h3>
        <p>This initial phase involves gathering information about the target system. Ethical hackers use various techniques to collect data, including:</p>
        <ul>
          <li>Open-source intelligence (OSINT)</li>
          <li>Social engineering</li>
          <li>Network scanning</li>
          <li>Domain and subdomain enumeration</li>
        </ul>
        
        <h3>2. Scanning</h3>
        <p>After gathering information, ethical hackers scan the target system to identify potential entry points and vulnerabilities. This may involve:</p>
        <ul>
          <li>Port scanning</li>
          <li>Vulnerability scanning</li>
          <li>Network mapping</li>
        </ul>
        
        <h3>3. Gaining Access</h3>
        <p>In this phase, ethical hackers attempt to exploit identified vulnerabilities to gain access to the target system. This helps demonstrate the real-world impact of security weaknesses.</p>
        
        <h3>4. Maintaining Access</h3>
        <p>To simulate a real attack scenario, ethical hackers may maintain access to the system to determine how long they can remain undetected.</p>
        
        <h3>5. Analysis and Reporting</h3>
        <p>Finally, ethical hackers document their findings, including vulnerabilities discovered, methods used, and recommendations for remediation.</p>
        
        <h2>Ethical Hacking Tools</h2>
        <p>Ethical hackers use a variety of tools to identify and exploit vulnerabilities:</p>
        <ul>
          <li>Nmap: Network scanning and discovery</li>
          <li>Metasploit: Exploitation framework</li>
          <li>Wireshark: Network protocol analyzer</li>
          <li>Burp Suite: Web application security testing</li>
          <li>Aircrack-ng: Wireless network security assessment</li>
        </ul>
        
        <h2>Getting Started with Ethical Hacking</h2>
        <p>If you're interested in pursuing ethical hacking, consider these steps:</p>
        <ol>
          <li>Build a strong foundation in networking, operating systems, and programming</li>
          <li>Learn about common security vulnerabilities and attack vectors</li>
          <li>Practice in legal environments, such as CTF competitions and vulnerable virtual machines</li>
          <li>Pursue relevant certifications, such as Certified Ethical Hacker (CEH) or Offensive Security Certified Professional (OSCP)</li>
          <li>Stay updated on the latest security trends and vulnerabilities</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Ethical hacking plays a vital role in protecting organizations from cyber threats. By identifying and addressing security vulnerabilities before malicious hackers can exploit them, ethical hackers help create a safer digital environment for everyone.</p>
      `,
    },
    {
      id: "blockchain-voting-systems",
      title: "How Blockchain Can Revolutionize Voting Systems",
      excerpt: "Explore how blockchain technology can create more secure, transparent, and efficient voting systems, addressing many of the challenges faced by traditional voting methods.",
      date: "April 28, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-2.jpg",
      category: "Blockchain",
      readTime: "7 min read",
      content: `
        <h2>Introduction to Blockchain Voting</h2>
        <p>Traditional voting systems face numerous challenges, including security concerns, lack of transparency, and inefficiency. Blockchain technology offers a promising solution to these issues, providing a secure, transparent, and immutable platform for conducting elections.</p>
        
        <h2>Challenges with Traditional Voting Systems</h2>
        <p>Before exploring blockchain solutions, it's important to understand the limitations of current voting methods:</p>
        <ul>
          <li>Vulnerability to fraud and manipulation</li>
          <li>Lack of transparency in vote counting</li>
          <li>Difficulty in verifying results</li>
          <li>Limited accessibility for remote voters</li>
          <li>High administrative costs</li>
        </ul>
        
        <h2>How Blockchain Addresses Voting Challenges</h2>
        
        <h3>1. Enhanced Security</h3>
        <p>Blockchain's decentralized nature and cryptographic techniques provide robust security for voting systems:</p>
        <ul>
          <li>Each vote is encrypted and stored across multiple nodes</li>
          <li>Tampering with votes would require compromising the majority of the network</li>
          <li>Cryptographic techniques ensure vote integrity</li>
        </ul>
        
        <h3>2. Transparency and Verifiability</h3>
        <p>Blockchain creates a transparent voting process while maintaining voter privacy:</p>
        <ul>
          <li>All transactions are recorded on a public ledger</li>
          <li>Voters can verify their votes were counted correctly</li>
          <li>Election officials and observers can audit the entire process</li>
        </ul>
        
        <h3>3. Immutability</h3>
        <p>Once recorded on the blockchain, votes cannot be altered or deleted:</p>
        <ul>
          <li>Each block contains a cryptographic hash of the previous block</li>
          <li>Any attempt to modify a vote would be immediately detected</li>
          <li>Historical record of all votes is permanently maintained</li>
        </ul>
        
        <h3>4. Accessibility and Efficiency</h3>
        <p>Blockchain voting systems can increase participation and reduce costs:</p>
        <ul>
          <li>Remote voting becomes secure and reliable</li>
          <li>Reduced need for physical polling stations</li>
          <li>Faster vote counting and result verification</li>
          <li>Lower administrative costs in the long term</li>
        </ul>
        
        <h2>Implementing Blockchain Voting Systems</h2>
        
        <h3>Key Components</h3>
        <p>A blockchain voting system typically includes:</p>
        <ul>
          <li>Voter authentication mechanism</li>
          <li>Ballot creation and distribution system</li>
          <li>Vote recording and verification process</li>
          <li>Result tabulation and publication</li>
        </ul>
        
        <h3>Technical Considerations</h3>
        <p>When implementing blockchain voting, several technical aspects must be addressed:</p>
        <ul>
          <li>Choosing the appropriate blockchain platform (public vs. private)</li>
          <li>Designing smart contracts for vote processing</li>
          <li>Ensuring scalability to handle large numbers of voters</li>
          <li>Balancing transparency with voter privacy</li>
        </ul>
        
        <h2>Real-World Applications and Case Studies</h2>
        <p>Several countries and organizations have begun exploring blockchain voting:</p>
        <ul>
          <li>Estonia's digital voting system incorporates blockchain elements</li>
          <li>West Virginia's mobile voting pilot for military personnel overseas</li>
          <li>Sierra Leone's partial use of blockchain in national elections</li>
          <li>Various university and corporate governance elections</li>
        </ul>
        
        <h2>Challenges and Considerations</h2>
        <p>Despite its potential, blockchain voting faces several challenges:</p>
        <ul>
          <li>Digital divide and accessibility concerns</li>
          <li>Voter education and trust building</li>
          <li>Regulatory and legal frameworks</li>
          <li>Potential for new types of attacks</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Blockchain technology has the potential to revolutionize voting systems by enhancing security, transparency, and efficiency. While challenges remain, ongoing research and pilot implementations suggest that blockchain voting could become a viable solution for modern democracies seeking to improve their electoral processes.</p>
      `,
    },
    {
      id: "digital-forensics-basics",
      title: "Digital Forensics: The Basics Everyone Should Know",
      excerpt: "An introduction to digital forensics, its importance in cybersecurity investigations, and the fundamental techniques used to collect and analyze digital evidence.",
      date: "April 15, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-3.jpg",
      category: "Digital Forensics",
      readTime: "6 min read",
      content: `
        <h2>Introduction to Digital Forensics</h2>
        <p>Digital forensics is the process of uncovering and interpreting electronic data to preserve evidence in a manner that is legally admissible. It involves identifying, collecting, examining, and analyzing digital information to reconstruct events and actions related to security incidents, criminal activities, or disputes.</p>
        
        <h2>The Importance of Digital Forensics</h2>
        <p>In our increasingly digital world, digital forensics plays a crucial role in:</p>
        <ul>
          <li>Criminal investigations</li>
          <li>Corporate incident response</li>
          <li>Civil litigation support</li>
          <li>Regulatory compliance</li>
          <li>National security matters</li>
        </ul>
        
        <h2>Key Principles of Digital Forensics</h2>
        
        <h3>1. Chain of Custody</h3>
        <p>Maintaining a documented chain of custody is essential in digital forensics. This ensures that evidence is properly handled, tracked, and protected from tampering or contamination. A proper chain of custody documents:</p>
        <ul>
          <li>Who collected the evidence</li>
          <li>When and where it was collected</li>
          <li>Who has handled it</li>
          <li>How it has been stored and protected</li>
        </ul>
        
        <h3>2. Data Integrity</h3>
        <p>Preserving the integrity of digital evidence is paramount. Forensic investigators use various techniques to ensure data remains unchanged:</p>
        <ul>
          <li>Creating forensic images (bit-by-bit copies)</li>
          <li>Using write blockers to prevent modification</li>
          <li>Calculating and verifying hash values</li>
        </ul>
        
        <h3>3. Documentation</h3>
        <p>Thorough documentation of all processes and findings is critical for legal admissibility and case reconstruction:</p>
        <ul>
          <li>Detailed notes of all actions taken</li>
          <li>Screenshots and photographs</li>
          <li>Logs of tools used and commands executed</li>
          <li>Reports of findings and conclusions</li>
        </ul>
        
        <h2>The Digital Forensics Process</h2>
        
        <h3>1. Identification</h3>
        <p>The first step involves identifying potential sources of digital evidence:</p>
        <ul>
          <li>Computers and servers</li>
          <li>Mobile devices</li>
          <li>Storage media (hard drives, USB drives, memory cards)</li>
          <li>Network devices and logs</li>
          <li>Cloud storage and services</li>
        </ul>
        
        <h3>2. Preservation</h3>
        <p>Once identified, evidence must be properly preserved:</p>
        <ul>
          <li>Creating forensic images</li>
          <li>Documenting the state of devices</li>
          <li>Securing volatile data (RAM, running processes)</li>
          <li>Maintaining chain of custody</li>
        </ul>
        
        <h3>3. Analysis</h3>
        <p>The analysis phase involves examining the collected evidence:</p>
        <ul>
          <li>File system analysis</li>
          <li>Timeline reconstruction</li>
          <li>Recovering deleted files</li>
          <li>Examining metadata</li>
          <li>Analyzing user activity</li>
          <li>Searching for specific keywords or patterns</li>
        </ul>
        
        <h3>4. Documentation and Reporting</h3>
        <p>Finally, findings must be documented and reported in a clear, concise manner:</p>
        <ul>
          <li>Technical details of evidence examined</li>
          <li>Methodology used</li>
          <li>Findings and their significance</li>
          <li>Supporting exhibits and references</li>
        </ul>
        
        <h2>Common Digital Forensics Tools</h2>
        <p>Digital forensics professionals use a variety of specialized tools:</p>
        <ul>
          <li>EnCase: Comprehensive forensic suite</li>
          <li>FTK (Forensic Toolkit): Evidence processing and analysis</li>
          <li>Autopsy: Open-source digital forensics platform</li>
          <li>Volatility: Memory forensics framework</li>
          <li>Cellebrite: Mobile device forensics</li>
          <li>Wireshark: Network traffic analysis</li>
        </ul>
        
        <h2>Challenges in Digital Forensics</h2>
        <p>Digital forensics investigators face numerous challenges:</p>
        <ul>
          <li>Encryption and password protection</li>
          <li>Anti-forensics techniques</li>
          <li>Cloud-based evidence</li>
          <li>Rapidly evolving technology</li>
          <li>Large volumes of data</li>
          <li>Legal and jurisdictional issues</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Digital forensics is a critical discipline in today's digital world. By understanding the basic principles and processes involved, organizations and individuals can better appreciate the importance of proper evidence handling and the role of digital forensics in cybersecurity investigations and legal proceedings.</p>
      `,
    },
    {
      id: "mobile-app-security",
      title: "Essential Security Practices for Mobile App Development",
      excerpt: "Discover the key security considerations and best practices that every mobile app developer should implement to protect user data and prevent vulnerabilities.",
      date: "March 30, 2025",
      author: "Peter Mwangi",
      coverImage: "/blog-placeholder-4.jpg",
      category: "Mobile Development",
      readTime: "8 min read",
      content: `
        <h2>Introduction to Mobile App Security</h2>
        <p>With billions of mobile devices in use worldwide, mobile applications have become prime targets for attackers. Securing mobile apps is essential to protect user data, maintain privacy, and preserve trust. This article explores key security practices that every mobile app developer should implement.</p>
        
        <h2>Common Mobile App Security Threats</h2>
        <p>Before diving into security practices, it's important to understand the threats facing mobile applications:</p>
        <ul>
          <li>Data leakage</li>
          <li>Insecure data storage</li>
          <li>Weak server-side controls</li>
          <li>Insufficient transport layer protection</li>
          <li>Client-side injection</li>
          <li>Poor authentication and authorization</li>
          <li>Improper session handling</li>
          <li>Reverse engineering</li>
        </ul>
        
        <h2>Essential Security Practices</h2>
        
        <h3>1. Secure Data Storage</h3>
        <p>Properly securing sensitive data stored on mobile devices is crucial:</p>
        <ul>
          <li>Never store sensitive data in plaintext</li>
          <li>Use platform-specific secure storage options (Keychain for iOS, Keystore for Android)</li>
          <li>Implement proper encryption for sensitive data</li>
          <li>Minimize storage of sensitive information on the device</li>
          <li>Clear sensitive data from memory when no longer needed</li>
        </ul>
        
        <h3>2. Secure Communication</h3>
        <p>Protecting data in transit is essential for mobile app security:</p>
        <ul>
          <li>Always use HTTPS with TLS 1.2+ for all communications</li>
          <li>Implement certificate pinning to prevent man-in-the-middle attacks</li>
          <li>Validate server certificates</li>
          <li>Consider using additional encryption for highly sensitive data</li>
        </ul>
        
        <h3>3. Authentication and Authorization</h3>
        <p>Robust user authentication and authorization mechanisms are critical:</p>
        <ul>
          <li>Implement strong password policies</li>
          <li>Support multi-factor authentication</li>
          <li>Use OAuth 2.0 or OpenID Connect for third-party authentication</li>
          <li>Implement proper session management</li>
          <li>Use secure and expiring tokens</li>
          <li>Consider biometric authentication where appropriate</li>
        </ul>
        
        <h3>4. Code Protection</h3>
        <p>Protecting your app's code from reverse engineering and tampering:</p>
        <ul>
          <li>Obfuscate code to make reverse engineering more difficult</li>
          <li>Implement anti-tampering measures</li>
          <li>Use code signing</li>
          <li>Detect rooted or jailbroken devices</li>
          <li>Implement runtime application self-protection (RASP)</li>
        </ul>
        
        <h3>5. Input Validation</h3>
        <p>Proper input validation helps prevent injection attacks:</p>
        <ul>
          <li>Validate all input on both client and server sides</li>
          <li>Use parameterized queries for database operations</li>
          <li>Implement proper error handling without exposing sensitive information</li>
          <li>Sanitize user inputs to prevent XSS and other injection attacks</li>
        </ul>
        
        <h3>6. API Security</h3>
        <p>Securing the APIs your mobile app communicates with:</p>
        <ul>
          <li>Implement proper authentication for API access</li>
          <li>Use rate limiting to prevent abuse</li>
          <li>Validate and sanitize all API inputs</li>
          <li>Implement proper error handling</li>
          <li>Use HTTPS for all API communications</li>
        </ul>
        
        <h3>7. Third-Party Libraries</h3>
        <p>Managing the security risks of third-party dependencies:</p>
        <ul>
          <li>Regularly audit and update third-party libraries</li>
          <li>Use only reputable and actively maintained libraries</li>
          <li>Understand the permissions and access required by each library</li>
          <li>Implement a vulnerability management process</li>
        </ul>
        
        <h2>Platform-Specific Considerations</h2>
        
        <h3>Android Security</h3>
        <ul>
          <li>Use Android Keystore for secure key storage</li>
          <li>Implement proper permission handling</li>
          <li>Use ProGuard or R8 for code obfuscation</li>
          <li>Secure IPC mechanisms with proper intent filters</li>
          <li>Use SafetyNet Attestation API to detect device tampering</li>
        </ul>
        
        <h3>iOS Security</h3>
        <ul>
          <li>Use Keychain for secure storage</li>
          <li>Implement App Transport Security (ATS)</li>
          <li>Use Swift's memory safety features</li>
          <li>Implement proper entitlements and permissions</li>
          <li>Consider using App Attest for device integrity verification</li>
        </ul>
        
        <h2>Security Testing</h2>
        <p>Regular security testing is essential for mobile app security:</p>
        <ul>
          <li>Static Application Security Testing (SAST)</li>
          <li>Dynamic Application Security Testing (DAST)</li>
          <li>Penetration testing</li>
          <li>Vulnerability scanning</li>
          <li>Code reviews focused on security</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mobile app security is not a one-time effort but an ongoing process. By implementing these essential security practices, developers can significantly reduce the risk of security breaches and protect user data. Remember that security should be integrated throughout the development lifecycle, not added as an afterthought.</p>
      `,
    },
  ];
  
  return blogPosts.find(post => post.id === slug);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  // If post doesn't exist, return 404
  if (!post) {
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
          <Link href="/blog" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            Blog
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
        </nav>
        
        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm ml-4">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              PM
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">Blog Image</span>
          </div>
        </div>
        
        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-li:text-gray-600 dark:prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
        
        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">About the Author</h3>
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
              PM
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900 dark:text-white mb-1">{post.author}</p>
              <p className="text-gray-600 dark:text-gray-300">
                Peter is a cybersecurity professional and software engineer with expertise in penetration testing, digital forensics, and secure application development. He is currently pursuing a Master's in Information Systems Security at Strathmore University and works as a Research Scholar in the Cyber Security Department at @iLabAfrica.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 inline-block">
                  Cybersecurity
                </span>
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  Understanding Ethical Hacking: A Beginner's Guide
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  Ethical hacking is a crucial aspect of cybersecurity. Learn about the principles, methodologies, and importance of ethical hacking in protecting digital assets.
                </p>
                <Link 
                  href="/blog/understanding-ethical-hacking" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 inline-block">
                  Digital Forensics
                </span>
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  Digital Forensics: The Basics Everyone Should Know
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  An introduction to digital forensics, its importance in cybersecurity investigations, and the fundamental techniques used to collect and analyze digital evidence.
                </p>
                <Link 
                  href="/blog/digital-forensics-basics" 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
