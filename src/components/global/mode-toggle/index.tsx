"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    if (theme) setLocalTheme(theme);
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = localTheme === "dark" ? "light" : "dark";
    setLocalTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center">
      <motion.div
        className="relative w-14 h-8 bg-gray-300 dark:bg-primary-80 rounded-full p-1 flex items-center cursor-pointer"
        onClick={toggleTheme}
      >
        <motion.div
          className={`absolute top-1 w-6 h-6 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-md`}
          animate={{ x: localTheme === "light" ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {localTheme === "dark" ? (
             <Moon className="w-4 h-4 text-gray-300" />
          ) : (
           
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
