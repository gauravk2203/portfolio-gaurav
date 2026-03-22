import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-5xl mx-auto" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 text-base sm:text-lg mb-6"
      >
        Let’s connect and create something meaningful together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-800 mb-6 text-base sm:text-lg">
          I'm open to <span className="font-medium">freelance work</span>,{" "}
          <span className="font-medium">full-time roles</span>, or just a conversation
          about ideas & tech.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-black text-white px-4 py-1 text-xs rounded-full">
            📍 Mumbai, Maharashtra
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-1 text-xs rounded-full">
            🟢 Available for work
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap mb-10">
          <a
            href="mailto:gauravk2205@gmail.com"
            className="w-full sm:w-auto border border-black px-6 py-3 rounded-lg text-sm text-center hover:bg-black hover:text-white transition"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/gauravk2205"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-black px-6 py-3 rounded-lg text-sm text-center hover:bg-black hover:text-white transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/gauravk2203"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-black px-6 py-3 rounded-lg text-sm text-center hover:bg-black hover:text-white transition"
          >
            💻 GitHub
          </a>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm w-full sm:w-fit">
          <p className="text-base font-medium mb-2">
            🚀 Let’s build something impactful.
          </p>
          <p className="text-sm text-gray-600 italic">
            I usually respond within 24 hours. Feel free to say hi or pitch your idea.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-10 italic text-center">
          “Every connection starts with a simple hello.”
        </p>
      </motion.div>
    </section>
  );
};
