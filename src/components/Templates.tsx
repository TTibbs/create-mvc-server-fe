import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const Templates = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const templates = [
    {
      id: "pg-ts",
      name: "PostgreSQL + TypeScript",
      description: "Express server with PostgreSQL database in TypeScript",
      server: "Express",
      database: "PostgreSQL",
      language: "TypeScript",
      color: "blue",
    },
    {
      id: "pg",
      name: "PostgreSQL + JavaScript",
      description: "Express server with PostgreSQL database in JavaScript",
      server: "Express",
      database: "PostgreSQL",
      language: "JavaScript",
      color: "blue",
    },
    {
      id: "mongo-ts",
      name: "MongoDB + TypeScript",
      description: "Express server with MongoDB database in TypeScript",
      server: "Express",
      database: "MongoDB",
      language: "TypeScript",
      color: "green",
    },
    {
      id: "mongo",
      name: "MongoDB + JavaScript",
      description: "Express server with MongoDB database in JavaScript",
      server: "Express",
      database: "MongoDB",
      language: "JavaScript",
      color: "green",
    },
    {
      id: "mysql-ts",
      name: "MySQL + TypeScript",
      description: "Express server with MySQL database in TypeScript",
      server: "Express",
      database: "MySQL",
      language: "TypeScript",
      color: "purple",
    },
    {
      id: "mysql",
      name: "MySQL + JavaScript",
      description: "Express server with MySQL database in JavaScript",
      server: "Express",
      database: "MySQL",
      language: "JavaScript",
      color: "purple",
    },
    {
      id: "sqlite-ts",
      name: "SQLite + TypeScript",
      description: "Express server with SQLite database in TypeScript",
      server: "Express",
      database: "SQLite",
      language: "TypeScript",
      color: "cyan",
    },
    {
      id: "sqlite",
      name: "SQLite + JavaScript",
      description: "Express server with SQLite database in JavaScript",
      server: "Express",
      database: "SQLite",
      language: "JavaScript",
      color: "cyan",
    },
    {
      id: "hono-pg-ts",
      name: "Hono + PostgreSQL + TypeScript",
      description: "Hono server with PostgreSQL database in TypeScript",
      server: "Hono",
      database: "PostgreSQL",
      language: "TypeScript",
      color: "yellow",
    },
    {
      id: "hono-pg",
      name: "Hono + PostgreSQL + JavaScript",
      description: "Hono server with PostgreSQL database in JavaScript",
      server: "Hono",
      database: "PostgreSQL",
      language: "JavaScript",
      color: "yellow",
    },
  ];

  const filteredTemplates =
    activeFilter === "all"
      ? templates
      : templates.filter((template) => {
          if (activeFilter === "express") return template.server === "Express";
          if (activeFilter === "hono") return template.server === "Hono";
          if (activeFilter === "ts") return template.language === "TypeScript";
          if (activeFilter === "js") return template.language === "JavaScript";
          if (activeFilter === "pg") return template.database === "PostgreSQL";
          if (activeFilter === "mongo") return template.database === "MongoDB";
          if (activeFilter === "mysql") return template.database === "MySQL";
          if (activeFilter === "sqlite") return template.database === "SQLite";
          return true;
        });

  const getDatabaseBadgeClass = (database: string) => {
    const baseClasses =
      "rounded-md px-3 py-1 text-xs font-medium border-transparent";
    switch (database) {
      case "PostgreSQL":
        return cn(baseClasses, "bg-[#4169e1] text-white");
      case "MongoDB":
        return cn(baseClasses, "bg-[#47A248] text-white");
      case "MySQL":
        return cn(baseClasses, "bg-[#8957e5] text-white");
      case "SQLite":
        return cn(baseClasses, "bg-[#0dc9e6] text-white");
      default:
        return baseClasses;
    }
  };

  const getServerBadgeClass = (server: string) => {
    const baseClasses =
      "rounded-md px-3 py-1 text-xs font-medium border-transparent";
    switch (server) {
      case "Express":
        return cn(baseClasses, "bg-[#f7a957] text-white");
      case "Hono":
        return cn(baseClasses, "bg-[#f8e16f] text-black");
      default:
        return baseClasses;
    }
  };

  const getLanguageBadgeClass = (language: string) => {
    const baseClasses =
      "rounded-md px-3 py-1 text-xs font-medium border-transparent";
    switch (language) {
      case "TypeScript":
        return cn(baseClasses, "bg-[#3178c6] text-white");
      case "JavaScript":
        return cn(baseClasses, "bg-[#f7df1e] text-black");
      default:
        return baseClasses;
    }
  };

  const getCommandExample = (templateId: string) => {
    return `npx create-mvc-server my-project --template ${templateId}`;
  };

  const getFilterButtonClass = (filter: string) => {
    const isActive = activeFilter === filter;
    let baseClass = "px-4 py-2 rounded-md ";

    if (isActive) {
      switch (filter) {
        case "express":
          return baseClass + "bg-chart-3 text-white";
        case "hono":
          return baseClass + "bg-chart-5 text-white";
        case "ts":
          return baseClass + "bg-chart-1 text-white";
        case "js":
          return baseClass + "bg-chart-4 text-black";
        case "pg":
          return baseClass + "bg-chart-1 text-white";
        case "mongo":
          return baseClass + "bg-chart-2 text-white";
        case "mysql":
          return baseClass + "bg-chart-3 text-white";
        case "sqlite":
          return baseClass + "bg-chart-4 text-white";
        default:
          return baseClass + "bg-primary text-primary-foreground";
      }
    } else {
      return baseClass + "bg-accent text-foreground hover:bg-accent/80";
    }
  };

  return (
    <section id="templates" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold gradient-text sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Available Templates
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-foreground lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose from these pre-configured templates to jumpstart your project
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center mt-8 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className="text-sm"
          >
            All
          </Button>
          <Button
            onClick={() => setActiveFilter("express")}
            className={getFilterButtonClass("express") + " text-sm"}
          >
            Express
          </Button>
          <Button
            onClick={() => setActiveFilter("hono")}
            className={getFilterButtonClass("hono") + " text-sm"}
          >
            Hono
          </Button>
          <Button
            onClick={() => setActiveFilter("ts")}
            className={getFilterButtonClass("ts") + " text-sm"}
          >
            TypeScript
          </Button>
          <Button
            onClick={() => setActiveFilter("js")}
            className={getFilterButtonClass("js") + " text-sm"}
          >
            JavaScript
          </Button>
          <Button
            onClick={() => setActiveFilter("pg")}
            className={getFilterButtonClass("pg") + " text-sm"}
          >
            PostgreSQL
          </Button>
          <Button
            onClick={() => setActiveFilter("mongo")}
            className={getFilterButtonClass("mongo") + " text-sm"}
          >
            MongoDB
          </Button>
          <Button
            onClick={() => setActiveFilter("mysql")}
            className={getFilterButtonClass("mysql") + " text-sm"}
          >
            MySQL
          </Button>
          <Button
            onClick={() => setActiveFilter("sqlite")}
            className={getFilterButtonClass("sqlite") + " text-sm"}
          >
            SQLite
          </Button>
        </motion.div>

        {/* Template cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <Card className="h-full glass-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-card-foreground">
                    {template.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={getDatabaseBadgeClass(template.database)}>
                      {template.database}
                    </Badge>
                    <Badge className={getServerBadgeClass(template.server)}>
                      {template.server}
                    </Badge>
                    <Badge className={getLanguageBadgeClass(template.language)}>
                      {template.language}
                    </Badge>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <div className="bg-card/50 rounded p-2 overflow-x-auto">
                      <code className="text-xs text-muted-foreground">
                        {getCommandExample(template.id)}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredTemplates.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground">
              No templates match the selected filter.
            </p>
          </motion.div>
        )}

        {/* Custom templates info */}
        <motion.div
          className="mt-16 glass-effect rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold gradient-text">
            Create Your Own Templates
          </h3>
          <p className="mt-2 text-muted-foreground">
            You can contribute by creating custom templates. Follow the naming
            convention:
            <code className="mx-2 px-2 py-1 bg-card/50 rounded text-sm">
              template-[server]-[database]-[language]
            </code>
          </p>
          <p className="mt-4 text-muted-foreground">
            Learn more about creating templates in the
            <a
              href="https://github.com/TTibbs/create-mvc-server#contributing"
              className="text-primary hover:text-primary/90 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              contribution guidelines
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;
