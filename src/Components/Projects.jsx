import { motion } from 'framer-motion';
import { FaGithub, FaJsSquare } from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiOpenai,
  SiSolidity,
  SiIpfs,
  SiJsonwebtokens,
  SiExpress,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from 'react-icons/si';

const iconMap = {
  React: <SiReact title="React" className="text-lg sm:text-xl" />,
  'Node.js': <SiNodedotjs title="Node.js" className="text-lg sm:text-xl" />,
  MongoDB: <SiMongodb title="MongoDB" className="text-lg sm:text-xl" />,
  'OpenAI API': <SiOpenai title="OpenAI API" className="text-lg sm:text-xl" />,
  Solidity: <SiSolidity title="Solidity" className="text-lg sm:text-xl" />,
  IPFS: <SiIpfs title="IPFS" className="text-lg sm:text-xl" />,
  JWT: <SiJsonwebtokens title="JWT" className="text-lg sm:text-xl" />,
  Express: <SiExpress title="Express" className="text-lg sm:text-xl" />,
  Python: <SiPython title="Python" className="text-lg sm:text-xl" />,
  Html: <SiHtml5 title="HTML" className="text-lg sm:text-xl" />,
  CSS: <SiCss3 title="CSS" className="text-lg sm:text-xl" />,
  JS: <FaJsSquare title="JavaScript" className="text-lg sm:text-xl" />,
  Tailwind_CSS: <SiTailwindcss title="Tailwind CSS" className="text-lg sm:text-xl" />,
};

const projects = [
  {
    title: 'Blockchain Document Verification System',
    summary:
      'A decentralized web app to upload and verify academic documents securely using blockchain. Integrated IPFS for decentralized storage and Solidity smart contracts via Hardhat to ensure authenticity and immutability.',
    tech: ['React', 'IPFS', 'Solidity', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/gauravk2203/Document-Verification-Using-Blockchain',
  },
  {
    title: 'AI OS Assistant',
    summary:
      'An AI-powered desktop assistant that handles scheduling, information retrieval, file operations, and smart suggestions. Built using Python, Rasa NLP, and Tkinter with a custom backend logic engine for interactive support.',
    tech: ['Python', 'OpenAI API', 'MongoDB'],
    link: 'https://github.com/rj25031/RasaWindowsAssistant',
  },
  {
    title: 'Pharmacy Management System',
    summary:
      'A real-time inventory and prescription handling system for pharmacies. Features include automatic stock tracking, prescription automation, and customer record management with role-based access and secure data handling.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://github.com/gaurav/pharmacy-management',
  },
  {
    title: 'Frontend Mentor UI Challenges',
    summary:
      'A collection of pixel-perfect frontend components and layouts recreated from Frontend Mentor designs. Focused on responsiveness, accessibility, and clean HTML/CSS/Tailwind code.',
    tech: ['React', 'Tailwind_CSS', 'Html', 'JS', 'CSS'],
    link: 'https://github.com/gauravk2203/Frontend',
  },
  {
    title: 'MERN Practice Tasks',
    summary:
      'A compilation of real-world feature builds using the MERN stack — including user auth with JWT, CRUD dashboards, protected routes, and reusable backend API services.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://github.com/gauravk2203/MERN-Stack',
  },
];

export const Projects = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
      >
        Projects
      </motion.h2>

      <motion.ul
        className="space-y-12 sm:space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.01 }}
            className="border-l-4 border-black pl-4 sm:pl-6 transition-all rounded-lg p-4 bg-white shadow-sm hover:shadow-md"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
              {project.summary}
            </p>

            {/* Tech Stack Icons */}
            <div className="flex gap-3 flex-wrap text-gray-700 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="relative group">
                  {iconMap[tech] || <span className="text-sm">{tech}</span>}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                    {tech}
                  </span>
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm underline hover:text-gray-600"
            >
              <FaGithub className="text-base" /> View on GitHub
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
