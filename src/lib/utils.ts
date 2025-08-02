import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Template types
export interface Template {
  id: string;
  name: string;
  description: string;
  server: string;
  database: string;
  language: string;
  color: string;
}

// Template data
export const templates: Template[] = [
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

export const filters = [
  { key: "all", label: "All" },
  { key: "express", label: "Express" },
  { key: "hono", label: "Hono" },
  { key: "ts", label: "TypeScript" },
  { key: "js", label: "JavaScript" },
  { key: "pg", label: "PostgreSQL" },
  { key: "mongo", label: "MongoDB" },
  { key: "mysql", label: "MySQL" },
  { key: "sqlite", label: "SQLite" },
];

// Template utilities
export const getDatabaseBadgeClass = (database: string) => {
  const baseClasses =
    "rounded-md px-3 py-1 text-xs font-medium border-transparent";
  const databaseColors = {
    PostgreSQL: "bg-[#4169e1] text-white",
    MongoDB: "bg-[#47A248] text-white",
    MySQL: "bg-[#8957e5] text-white",
    SQLite: "bg-[#0dc9e6] text-white",
  };
  return cn(
    baseClasses,
    databaseColors[database as keyof typeof databaseColors] || baseClasses
  );
};

export const getServerBadgeClass = (server: string) => {
  const baseClasses =
    "rounded-md px-3 py-1 text-xs font-medium border-transparent";
  const serverColors = {
    Express: "bg-[#f7a957] text-white",
    Hono: "bg-[#f8e16f] text-black",
  };
  return cn(
    baseClasses,
    serverColors[server as keyof typeof serverColors] || baseClasses
  );
};

export const getLanguageBadgeClass = (language: string) => {
  const baseClasses =
    "rounded-md px-3 py-1 text-xs font-medium border-transparent";
  const languageColors = {
    TypeScript: "bg-[#3178c6] text-white",
    JavaScript: "bg-[#f7df1e] text-black",
  };
  return cn(
    baseClasses,
    languageColors[language as keyof typeof languageColors] || baseClasses
  );
};

export const getCommandExample = (templateId: string) => {
  return `npx create-mvc-server my-project --template ${templateId}`;
};

export const getFilterButtonClass = (filter: string, isActive: boolean) => {
  const baseClass = "px-4 py-2 rounded-md text-sm";

  if (!isActive) {
    return cn(baseClass, "bg-accent text-foreground hover:bg-accent/80");
  }

  const filterColors = {
    express: "bg-chart-3 text-white",
    hono: "bg-chart-5 text-white",
    ts: "bg-chart-1 text-white",
    js: "bg-chart-4 text-black",
    pg: "bg-chart-1 text-white",
    mongo: "bg-chart-2 text-white",
    mysql: "bg-chart-3 text-white",
    sqlite: "bg-chart-4 text-white",
  };

  return cn(
    baseClass,
    filterColors[filter as keyof typeof filterColors] ||
      "bg-primary text-primary-foreground"
  );
};

export const filterTemplates = (
  templates: Template[],
  activeFilter: string
) => {
  if (activeFilter === "all") return templates;

  return templates.filter((template) => {
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
};
