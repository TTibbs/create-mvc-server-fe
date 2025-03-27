import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./components/ui/sonner";
import Features from "./components/Features";
import Templates from "./components/Templates";
import { FloatingDock } from "./components/ui/floating-dock";
import { linkData } from "./lib/dockLinks";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMoon,
  IconNewSection,
  IconSun,
  IconTerminal2,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "./lib/ThemeProvider";

function AppContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const floatingDockItems = linkData.map((item) => {
    let icon;
    switch (item.iconType) {
      case "home":
        icon = (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      case "terminal":
        icon = (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      case "new-section":
        icon = (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      case "image":
        icon = (
          <img
            src="/icon.png"
            width={20}
            height={20}
            alt="Logo"
            className="h-full w-full"
          />
        );
        break;
      case "exchange":
        icon = (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      case "twitter":
        icon = (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      case "theme":
        icon = mounted ? (
          theme === "dark" ? (
            <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ) : (
            <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          )
        ) : null;
        break;
      case "github":
        icon = (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
        break;
      default:
        icon = (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        );
    }

    if (item.iconType === "theme") {
      return {
        ...item,
        icon,
        href: "#",
        onClick: toggleTheme,
      };
    }

    return {
      ...item,
      icon,
    };
  });

  return (
    <>
      <Hero />
      <Features />
      <Templates />
      <Footer />
      <FloatingDock
        items={floatingDockItems}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
      <Analytics />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
