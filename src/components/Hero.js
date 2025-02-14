import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import avatar from "../assets/myavatar.png";
import { Link } from "react-scroll";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img
              src={avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto shadow-lg bg-card-light dark:bg-card-dark"
            />
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("hero.greeting")} Bekir
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={50}
              href="#contact"
              className="inline-block bg-primary-light dark:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              {t("nav.contact")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
