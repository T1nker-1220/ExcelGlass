import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-md
        dark:bg-gray-800 bg-white shadow-lg dark:shadow-blue-500/20 
        hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-600 group-hover:text-blue-500 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}
