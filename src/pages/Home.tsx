import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion, useScroll } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import About from "./About";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // Hide after scrolling 100px
    setIsVisible(scrollY < threshold);
  };

  // Function to scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if no about section: scroll one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-purple-500/20 blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Greeting */}
            <div className="text-xl text-gray-300 sm:text-2xl">
              <Typical
                steps={[
                  "Hi, I'm Naveen 👋",
                  2000,
                  "Welcome to my portfolio 🚀",
                  2000,
                  "Let's build something amazing ✨",
                  2000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </div>

            {/* Title */}
            <GradualSpacing
              className="font-display text-center font-semibold -tracking-widest text-white dark:text-white 
              sm:text-2xl sm:leading-[2rem] 
              md:text-3xl md:leading-[3rem] 
              lg:text-4xl lg:leading-[4rem] 
              xl:text-4xl xl:leading-[4rem]"
              text="MERN Developer & AI Ethicist"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl"
            >
              I'm passionate about crafting seamless web applications with
              modern technologies. Specializing in React for frontend and
              Python/Django for backend, I deliver powerful, scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-lg text-white transition-all hover:opacity-90">
                <Download className="h-5 w-5" />
                Download CV
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="ml-1"
                >
                  →
                </motion.span>
              </button>
              <button className="group flex items-center gap-2 rounded-full border-2 border-gray-700 px-6 py-3 text-lg text-white transition-all hover:border-gray-500">
                <Briefcase className="h-5 w-5" />
                View Projects
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 left-0 right-0 mx-auto z-50 cursor-pointer flex justify-center"
                onClick={scrollToNextSection}
              >
                <motion.div className="flex flex-col items-center">
                  {/* Scroll text */}
                  <motion.span
                    animate={{
                      y: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-sm text-gray-400 font-medium mb-2 text-center"
                  >
                    Scroll to explore
                  </motion.span>
                  {/* Down arrow */}
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    <ArrowDown className="h-6 w-6 text-gray-400" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <About />
    </motion.section>
  );
};

export default Home;
