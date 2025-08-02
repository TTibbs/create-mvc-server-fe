import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./components/ui/sonner";
import Features from "./components/Features";
import Templates from "./components/Templates";
import { FloatingDock } from "./components/ui/floating-dock";
import { linkData } from "./lib/dockLinks";
import { IconMoon, IconSun } from "@tabler/icons-react";
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

  // Add theme toggle to the dock items
  const floatingDockItems = [
    ...linkData,
    {
      title: "Theme",
      icon: mounted ? (
        theme === "dark" ? (
          <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        )
      ) : null,
      href: "#",
      onClick: toggleTheme,
    },
  ];

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
