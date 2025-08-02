import {
  IconBrandGithub,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconFile,
} from "@tabler/icons-react";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export interface DockLink {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export const linkData: DockLink[] = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
    onClick: () => smoothScrollTo("home"),
  },
  {
    title: "Installation",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#installation",
    onClick: () => smoothScrollTo("installation"),
  },
  {
    title: "Features",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#features",
    onClick: () => smoothScrollTo("features"),
  },
  {
    title: "Templates",
    icon: (
      <IconFile className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#templates",
    onClick: () => smoothScrollTo("templates"),
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/TTibbs/create-mvc-server",
    onClick: () =>
      window.open("https://github.com/TTibbs/create-mvc-server", "_blank"),
  },
];
