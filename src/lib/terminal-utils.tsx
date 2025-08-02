import React from "react";

export interface TerminalStep {
  text: string;
  delay: number;
  duration: number;
}

export interface StepGroup {
  name: string;
  steps: number[];
}

export const STEP_GROUPS: StepGroup[] = [
  { name: "Intro", steps: [0, 1] },
  { name: "Configuration", steps: [2, 3, 4] },
  { name: "Review", steps: [5] },
  { name: "Complete", steps: [6] },
];

export const TERMINAL_STEPS: TerminalStep[] = [
  {
    text: `
  ╔══════════════════════════╗
  ║                          ║
  ║   MVC Server Generator   ║
  ║                          ║
  ╚══════════════════════════╝`,
    delay: 0,
    duration: 0.5,
  },
  {
    text: `
┌────────────────────────────────────────────────┐
│ CONFIGURATION OPTIONS                          │
└────────────────────────────────────────────────┘`,
    delay: 0,
    duration: 0.6,
  },
  {
    text: `❯ Step 1/4: Project configuration

? How would you like to configure your project? › - Use arrow-keys. Return to submit.
    ◉ Choose individual components
❯  ◉ Select from available templates`,
    delay: 0,
    duration: 1,
  },
  {
    text: `✔ How would you like to configure your project? › ◉ Select from available templates
? Select a template: › - Use arrow-keys. Return to submit.
❯   pg-ts (Express + Postgres + TypeScript)
    pg (Express + Postgres + JavaScript)
    mongo-ts (Express + MongoDB + TypeScript)
    mongo (Express + MongoDB + JavaScript)
    mysql-ts (Express + MySQL + TypeScript)
    mysql (Express + MySQL + JavaScript)
    sqlite-ts (Express + SQLite + TypeScript)
    sqlite (Express + SQLite + JavaScript)
    hono-pg-ts (Hono + Postgres + TypeScript)
    hono-pg (Hono + Postgres + JavaScript)`,
    delay: 0,
    duration: 1,
  },
  {
    text: `? Project name: › mvc-server`,
    delay: 0,
    duration: 1,
  },
  {
    text: `❯ Step 3/4: Preparing project structure



   ╭────────────────────────────╮
   │                            │
   │   Your selections:         │
   │                            │
   │   ● Server: Express        │
   │   ● Database: Postgres     │
   │   ● Language: TypeScript   │
   │                            │
   │   Template: pg-ts          │
   │                            │
   ╰────────────────────────────╯

? Proceed with this configuration? › (Y/n)`,
    delay: 0,
    duration: 1,
  },
  {
    text: `✔ Proceed with this configuration? … yes

❯ Step 3.5/4: Creating project files

✔ Project created successfully!

❯ Step 4/4: Finalizing setup


   +----------------------------------------------+
   |                                              |
   |  Success! Project is ready.                  |
   |                                              |
   |  Next steps:                                 |
   |  > cd testing123                             |
   |  > npm install                               |
   |  > Optional: Initialize git with 'git init'  |
   |                                              |
   +----------------------------------------------+`,
    delay: 0,
    duration: 1,
  },
];

export const formatTerminalLine = (
  text: string,
  stepIndex: number
): React.ReactElement[] => {
  const lines = text.split("\n");

  return lines.map((line, lineIndex) => {
    // ASCII art title box (green)
    if (stepIndex === 0) {
      return (
        <pre key={lineIndex} className="text-green-400 font-mono">
          {line}
        </pre>
      );
    }
    // Config options header (cyan)
    else if (stepIndex === 1) {
      return (
        <pre key={lineIndex} className="text-cyan-400 font-mono">
          {line}
        </pre>
      );
    }
    // Step line
    else if (line.includes("❯ Step")) {
      return (
        <pre key={lineIndex} className="text-green-400 font-mono">
          {line}
        </pre>
      );
    }
    // Completed step with checkmark
    else if (line.includes("✔")) {
      return (
        <pre key={lineIndex} className="font-mono">
          <span className="text-green-400">✔ </span>
          <span className="text-white">
            {line.substring(1).split("›")[0] + "›"}
          </span>
          {line.includes("›") && (
            <span className="text-violet-400">{line.split("›")[1]}</span>
          )}
        </pre>
      );
    }
    // Question mark lines
    else if (line.includes("?")) {
      return (
        <pre key={lineIndex} className="font-mono">
          <span className="text-yellow-400">? </span>
          <span className="text-white">
            {line.substring(1).split("›")[0] + "›"}
          </span>
          {line.includes("›") && (
            <span className="text-gray-400">{line.split("›")[1]}</span>
          )}
        </pre>
      );
    }
    // Selected option (with ❯)
    else if (line.includes("❯")) {
      if (line.includes("pg-ts")) {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">❯ </span>
            <span className="text-blue-400"> pg-ts</span>
            <span className="text-gray-400">
              {" "}
              (Express + Postgres + TypeScript)
            </span>
          </pre>
        );
      } else if (line.includes("cd")) {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">❯ </span>
            <span className="text-white">{line.substring(1)}</span>
          </pre>
        );
      } else {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">❯ </span>
            <span className="text-white">{line.substring(1)}</span>
          </pre>
        );
      }
    }
    // Template options
    else if (
      line.trim().startsWith("pg") ||
      line.trim().startsWith("mongo") ||
      line.trim().startsWith("mysql") ||
      line.trim().startsWith("sqlite") ||
      line.trim().startsWith("hono")
    ) {
      const parts = line.trim().split(" ");
      const templateName = parts[0];
      const description = line.substring(line.indexOf("("));

      let templateColor = "text-blue-400";
      if (templateName.includes("pg")) templateColor = "text-blue-400";
      if (templateName.includes("mongo")) templateColor = "text-green-400";
      if (templateName.includes("mysql")) templateColor = "text-violet-400";
      if (templateName.includes("sqlite")) templateColor = "text-cyan-400";
      if (templateName.includes("hono")) templateColor = "text-yellow-400";

      return (
        <pre key={lineIndex} className="font-mono">
          <span className="text-white"> </span>
          <span className={templateColor}>{templateName}</span>
          <span className="text-gray-400">{" " + description}</span>
        </pre>
      );
    }
    // Selection boxes (Step 3/4)
    else if (line.includes("╭─") || line.includes("╰─") || line.includes("│")) {
      return (
        <pre key={lineIndex} className="text-cyan-400 font-mono">
          {line}
        </pre>
      );
    }
    // Success box (with + and -)
    else if (line.includes("+----") || line.includes("|")) {
      // Border lines
      if (line.trim().startsWith("+") || line.includes("----")) {
        return (
          <pre key={lineIndex} className="text-green-400 font-mono">
            {line}
          </pre>
        );
      }
      // Success! line
      else if (line.includes("Success!")) {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">
              {line.substring(0, line.indexOf("Success!"))}
            </span>
            <span className="text-green-400">Success! Project is ready.</span>
            <span className="text-green-400">
              {line.substring(line.indexOf("ready.") + "ready.".length)}
            </span>
          </pre>
        );
      }
      // Next steps line
      else if (line.includes("Next steps:")) {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">
              {line.substring(0, line.indexOf("Next"))}
            </span>
            <span className="text-white">Next steps:</span>
            <span className="text-green-400">
              {line.substring(line.indexOf("steps:") + "steps:".length)}
            </span>
          </pre>
        );
      }
      // Command lines with >
      else if (line.includes(">")) {
        return (
          <pre key={lineIndex} className="font-mono">
            <span className="text-green-400">
              {line.substring(0, line.indexOf(">"))}
            </span>
            <span className="text-green-400">{">"}</span>
            <span className="text-green-400">
              {line.substring(line.indexOf(">") + 1)}
            </span>
          </pre>
        );
      }
      // Other lines inside the box (empty lines)
      else {
        return (
          <pre key={lineIndex} className="text-green-400 font-mono">
            {line}
          </pre>
        );
      }
    }
    // Bullet points in selection box
    else if (line.includes("●")) {
      let coloredLine = line;
      if (line.includes("Server:")) {
        coloredLine = line.replace(
          "●",
          "<span class='text-violet-400'>●</span>"
        );
      } else if (line.includes("Database:")) {
        coloredLine = line.replace(
          "●",
          "<span class='text-green-400'>●</span>"
        );
      } else if (line.includes("Language:")) {
        coloredLine = line.replace(
          "●",
          "<span class='text-yellow-400'>●</span>"
        );
      }

      return (
        <pre
          key={lineIndex}
          className="font-mono text-white"
          dangerouslySetInnerHTML={{ __html: coloredLine }}
        />
      );
    }
    // Template: pg-ts line
    else if (line.includes("Template:")) {
      return (
        <pre key={lineIndex} className="font-mono">
          <span className="text-white"> Template: </span>
          <span className="text-blue-400">pg-ts</span>
        </pre>
      );
    }

    // Default rendering
    return (
      <pre key={lineIndex} className="text-white font-mono">
        {line}
      </pre>
    );
  });
};

export const getStepsToShow = (
  activeGroupIndex: number,
  showAllSteps: boolean
) => {
  if (showAllSteps) {
    return TERMINAL_STEPS.map((step, index) => ({ step, index }));
  }

  return STEP_GROUPS[activeGroupIndex].steps.map((stepIndex) => ({
    step: TERMINAL_STEPS[stepIndex],
    index: stepIndex,
  }));
};
