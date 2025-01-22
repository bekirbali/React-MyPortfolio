import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Next.js",
    "Django",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background-alt-light dark:bg-background-alt-dark transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-text-light dark:text-text-dark">
            {t("about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">
                {t("about.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("about.description")}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-light dark:text-text-dark">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background-light dark:bg-background-dark rounded-lg p-3 text-center hover:bg-hover-light dark:hover:bg-hover-dark transition-colors text-text-light dark:text-text-dark"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
