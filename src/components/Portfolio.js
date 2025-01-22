import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import weemeagencygif from "../assets/weemeagencygif.gif";
import karakasgif from "../assets/karakasgif.gif";
import marboluxegif from "../assets/marboluxegif.gif";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "WeeMe Agency",
      description: "A website for a digital agency",
      image: weemeagencygif,
      bgColor: "bg-blue-100 dark:bg-blue-900",
      technologies: ["React", "Tailwindcss", "Framer Motion"],
      liveDemo: "https://weemeagency.vercel.app/",
      github: "https://github.com/bekirbali/React-WeeMeeAgency",
    },
    {
      title: "Karakas Otomotiv",
      description: "A website for spare parts store",
      image: karakasgif,
      bgColor: "bg-green-100 dark:bg-green-900",
      technologies: ["React", "Tailwindcss", "Swiper"],
      liveDemo: "https://react-karakas-oto.vercel.app/",
      github: "https://github.com/bekirbali/React-KarakasOTO",
    },
    {
      title: "Marboluxe",
      description: "A website for a marble company",
      image: marboluxegif,
      bgColor: "bg-purple-100 dark:bg-purple-900",
      technologies: ["React", "Tailwindcss", "Swiper"],
      liveDemo: "https://marboluxe.vercel.app/",
      github: "https://github.com/bekirbali/React-Marboluxe",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
            {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className={`w-full h-48 ${project.bgColor} flex items-center justify-center transition-colors duration-200`}
                >
                  {/* <svg
                    className="w-24 h-24 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 15l-5-5L5 20"
                    />
                  </svg> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-hover-light dark:bg-hover-dark rounded-full text-sm text-text-light dark:text-text-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {t("projects.viewProject")}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gray-800 dark:bg-gray-900 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-light dark:bg-primary-dark hover:opacity-90 transition-opacity"
            >
              See All My Projects
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
