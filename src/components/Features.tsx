import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  IconServer,
  IconDatabase,
  IconCode,
  IconTemplate,
  IconCircleCheck,
  IconPackage,
} from "@tabler/icons-react";

const Features = () => {
  const features = [
    {
      title: "Framework Selection",
      description:
        "Choose between Express or Hono (for PostgreSQL) to build your server application.",
      link: "#framework",
      icon: <IconServer className="h-8 w-8" />,
    },
    {
      title: "Multiple Database Options",
      description:
        "Choose from PostgreSQL, MongoDB, MySQL, or SQLite to match your project requirements.",
      link: "#database",
      icon: <IconDatabase className="h-8 w-8" />,
    },
    {
      title: "Language Options",
      description:
        "Generate your project in either JavaScript or TypeScript with proper typings.",
      link: "#language",
      icon: <IconCode className="h-8 w-8" />,
    },
    {
      title: "Template System",
      description:
        "Choose from pre-configured templates or select individual components for your project.",
      link: "#templates",
      icon: <IconTemplate className="h-8 w-8" />,
    },
    {
      title: "Package Name Validation",
      description:
        "Automatic validation of package names for npm compatibility to avoid common errors.",
      link: "#package",
      icon: <IconCircleCheck className="h-8 w-8" />,
    },
    {
      title: "Package Manager Support",
      description:
        "Support for multiple package managers including npm and yarn.",
      link: "#manager",
      icon: <IconPackage className="h-8 w-8" />,
    },
  ];

  const hoverItems = features.map((feature) => ({
    title: feature.title,
    description: feature.description,
    link: feature.link,
    icon: feature.icon,
  }));

  return (
    <section id="features" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold gradient-text sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-foreground lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to build MVC server applications quickly and
            efficiently
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HoverEffect items={hoverItems} />
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Button asChild variant="default" className="gap-2">
            <a
              href="https://github.com/TTibbs/create-mvc-server#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
