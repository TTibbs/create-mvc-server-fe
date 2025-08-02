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
import {
  templates,
  filters,
  getDatabaseBadgeClass,
  getServerBadgeClass,
  getLanguageBadgeClass,
  getCommandExample,
  getFilterButtonClass,
  filterTemplates,
} from "@/lib/utils";

const Templates = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTemplates = filterTemplates(templates, activeFilter);

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
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={getFilterButtonClass(
                filter.key,
                activeFilter === filter.key
              )}
            >
              {filter.label}
            </Button>
          ))}
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
