import { motion } from "framer-motion";
import Intro from "./Intro";
import Installation from "./Installation";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-col items-center gap-8 w-full px-4 sm:px-6 lg:px-8 mx-auto"
    >
      <Intro />
      <Installation />
    </motion.section>
  );
};

export default Hero;
