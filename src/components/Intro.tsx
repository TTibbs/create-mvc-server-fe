import { motion } from "framer-motion";
import { FaNpm, FaGithub, FaServer } from "react-icons/fa";

const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
      >
        <FaServer className="w-20 h-20 text-white" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-semibold gradient-text"
      >
        create-mvc-server
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-base md:text-lg text-gray-300 max-w-2xl text-center mb-12"
      >
        A powerful CLI tool for scaffolding API projects. Simplify your workflow
        and get started with a clean, ready-to-go setup in JavaScript or
        TypeScript.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-5"
      >
        <a
          href="https://www.npmjs.com/package/create-mvc-server"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 ease-linear font-bold py-2 px-4 rounded"
        >
          <div className="flex items-center gap-2">
            <FaNpm />
            NPM
          </div>
        </a>
        <a
          href="https://github.com/TTibbs/create-mvc-server"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-200 hover:bg-zinc-400 text-zinc-800 transition-all duration-300 ease-linear font-bold py-2 px-4 rounded"
        >
          <div className="flex items-center gap-2">
            <FaGithub />
            GitHub
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
