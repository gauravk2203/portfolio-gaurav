import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSolidity, SiPython,
  SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiTypescript, SiGithub , SiRedux, SiPostgresql, SiDocker
} from "react-icons/si";

const floatingIcons = [
  { icon: SiReact, color: "text-blue-500", className: "top-0 left-[45%]" },
  { icon: SiNodedotjs, color: "text-green-600", className: "top-10 left-10" },
  { icon: SiMongodb, color: "text-green-800", className: "top-20 right-8" },
  { icon: SiExpress, color: "text-gray-600", className: "top-[60%] left-4" },
  { icon: SiSolidity, color: "text-purple-600", className: "bottom-4 left-[48%]" },
  { icon: SiPython, color: "text-yellow-600", className: "top-[75%] right-6" },
  { icon: SiTailwindcss, color: "text-cyan-500", className: "top-[30%] right-[10%]" },
  { icon: SiJavascript, color: "text-yellow-400", className: "top-[15%] left-[20%]" },
  { icon: SiHtml5, color: "text-orange-600", className: "bottom-[20%] left-[12%]" },
  { icon: SiCss3, color: "text-blue-600", className: "bottom-[15%] right-[14%]" },
  { icon: SiTypescript, color: "text-blue-700", className: "top-[40%] left-[75%]" },
  { icon: SiGithub, color: "text-black", className: "bottom-[10%] right-[50%]" },
  { icon: SiRedux, color: "text-purple-700", className: "top-[10%] right-[30%]" },
  { icon: SiPostgresql, color: "text-blue-900", className: "bottom-[30%] right-[20%]" },
  { icon: SiDocker, color: "text-blue-500", className: "top-[50%] left-[10%]" },
];

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      let next;
      do {
        next = Math.floor(Math.random() * floatingIcons.length);
      } while (next === activeIndex);
      setActiveIndex(next);
      setAnimationKey(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
          Crafting Digital Experiences <br />
          with <span className="text-gray-800">Code & Creativity</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          I'm <span className="font-semibold text-black">Gaurav Kadam</span>, a full-stack developer focused on
          building scalable systems, elegant interfaces, and tech that solves real
          problems — from <span className="relative group font-medium text-blue-500">
            AI
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-blue-500 transition-all duration-300"></span>
          </span>{" "}
          to <span className="relative group font-medium text-purple-500">
            blockchain
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-purple-500 transition-all duration-300"></span>
          </span>{" "}
          and beyond.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm hover:scale-[1.03] transition-transform"
          >
            Let’s Talk
          </a>
          <a
            href="../Gaurav_Kadam_FullStack_Developer_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="border border-black text-black px-6 py-3 rounded-lg text-sm hover:bg-black hover:text-white hover:scale-[1.03] transition-transform"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => {
        const Icon = item.icon;
        const isActive = idx === activeIndex;
        return (
          <motion.div
            key={`${animationKey}-${idx}`}
            className={`absolute text-2xl md:text-3xl ${
              isActive ? `${item.color} drop-shadow-md` : "text-gray-300"
            } ${item.className}`}
            animate={
              isActive
                ? {
                    x: [0, -2, 2, -2, 2, 0],
                    y: [0, -2, 2, -2, 2, 0],
                    scale: 1.05,
                  }
                : {
                    y: [0, -3, 0],
                    x: [0, 2, 0],
                    scale: [1, 1.01, 1],
                  }
            }
            transition={{
              duration: isActive ? 0.3 : 5 + Math.random() * 3,
              repeat: isActive ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </section>
  );
};
