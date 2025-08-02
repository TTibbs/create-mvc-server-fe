import { useState } from "react";
import { motion } from "framer-motion";
import {
  STEP_GROUPS,
  formatTerminalLine,
  getStepsToShow,
} from "../lib/terminal-utils.tsx";
import { Button } from "./ui/button";

interface TerminalProps {
  title?: string;
}

const MacTerminal = ({ title = "Terminal" }: TerminalProps) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [showAllSteps, setShowAllSteps] = useState(false);

  // Navigation handlers
  const goToNextGroup = () => {
    if (activeGroupIndex < STEP_GROUPS.length - 1) {
      setActiveGroupIndex(activeGroupIndex + 1);
    }
  };

  const goToPreviousGroup = () => {
    if (activeGroupIndex > 0) {
      setActiveGroupIndex(activeGroupIndex - 1);
    }
  };

  const toggleShowAll = () => {
    setShowAllSteps(!showAllSteps);
  };

  const stepsToShow = getStepsToShow(activeGroupIndex, showAllSteps);

  return (
    <div className="flex flex-col gap-4">
      <motion.div
        className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl glass-effect p-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 h-8 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-150" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-150" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-150" />
          </div>
          <div className="text-xs text-gray-400 mx-auto">{title}</div>
        </div>

        <div className="bg-[#111] h-[450px] p-6 relative overflow-y-auto md:w-auto w-full">
          <div className="text-left">
            {stepsToShow.map(({ step, index }) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay:
                    0.1 * (index % STEP_GROUPS[activeGroupIndex].steps.length),
                  ease: "easeOut",
                }}
                className="mb-6"
              >
                {formatTerminalLine(step.text, index)}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Step navigation */}
      <div className="flex justify-between items-center w-full max-w-3xl mx-auto">
        <Button
          onClick={goToPreviousGroup}
          disabled={activeGroupIndex === 0}
          variant={activeGroupIndex === 0 ? "secondary" : "default"}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {STEP_GROUPS.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveGroupIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === activeGroupIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to ${group.name}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button onClick={toggleShowAll} variant="secondary">
            {showAllSteps ? "Show Steps" : "Show All"}
          </Button>

          <Button
            onClick={goToNextGroup}
            disabled={activeGroupIndex === STEP_GROUPS.length - 1}
            variant={
              activeGroupIndex === STEP_GROUPS.length - 1
                ? "secondary"
                : "default"
            }
          >
            Next
          </Button>
        </div>
      </div>

      {/* Step indicator */}
      <div className="text-center text-sm text-gray-600">
        {showAllSteps
          ? "Showing all steps"
          : `Step: ${STEP_GROUPS[activeGroupIndex].name}`}
      </div>
    </div>
  );
};

export default MacTerminal;
