import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaCompass,
  FaBolt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";

export const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 sm:gap-12"
      >
        {/* Intro */}
        <div className="text-gray-900 text-base sm:text-lg leading-relaxed space-y-3">
          <p>
            I’m Gaurav Kadam, a <strong>Full Stack Developer</strong> passionate
            about building impactful digital experiences. I thrive on solving
            real-world problems with a mix of full-stack development, design
            thinking, and curiosity.
          </p>
          <p>
            My projects span blockchain-based document verification, AI
            productivity tools, and inventory systems — each rooted in clean
            design and scalable architecture.
          </p>
          <p>
            I’m currently diving deeper into AI and machine learning, blending
            them with web development to create smarter, more adaptive user
            experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 border-l-2 border-black pl-4 sm:pl-6">
          {[
            {
              icon: <FaGraduationCap />,
              year: "2021 - Academic Foundations",
              desc: "Began B.Tech in Artificial Intelligence & Machine Learning. Built static websites with HTML, CSS, and JavaScript.",
            },
            {
              icon: <FaLaptopCode />,
              year: "2022 - Full Stack Development",
              desc: "Dived into the MERN stack. Gained hands-on experience building CRUD apps, REST APIs, and user authentication flows.",
            },
            {
              icon: <FaRocket />,
              year: "2023 - Real-World Projects",
              desc: "Built a blockchain-based document verification platform using Solidity, IPFS, and Hardhat. Integrated smart contracts with a MERN frontend.",
            },
            {
              icon: <FaCompass />,
              year: "2024 - AI Integration",
              desc: "Created an AI OS Assistant using Python, Rasa NLP, and Tkinter. Focused on intelligent interaction, task automation, and machine learning integration.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="text-lg sm:text-xl mt-1 text-gray-700">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-black text-sm sm:text-base">
                  {item.year}
                </h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              icon: <FaBolt />,
              color: "text-yellow-400",
              label: "Clean, scalable code",
              tooltip:
                "I write modular, efficient codebases you can grow with.",
            },
            {
              icon: <FaPaintBrush />,
              color: "text-pink-500",
              label: "Minimal UI/UX",
              tooltip: "Simple, intuitive designs that get out of the way.",
            },
            {
              icon: <FaRocket />,
              color: "text-blue-500",
              label: "Performance-driven",
              tooltip: "Speed matters – from load times to development cycles.",
            },
            {
              icon: <FaTools />,
              color: "text-green-500",
              label: "MERN Stack Expertise",
              tooltip: "MongoDB, Express, React, and Node – fully integrated.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover="hover"
              title={item.tooltip}
              className="group flex items-center gap-4 p-4 rounded-lg shadow-sm bg-neutral-900 border border-neutral-700 transition hover:shadow-md hover:-translate-y-1"
            >
              <motion.div
                variants={{
                  hover: {
                    rotate: [-5, 5, -5, 0],
                    scale: 1.2,
                    transition: { duration: 0.6 },
                  },
                }}
                className={`text-lg ${item.color}`}
              >
                {item.icon}
              </motion.div>
              <span className="text-sm font-medium text-white">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
