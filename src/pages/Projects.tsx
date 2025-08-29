import React from "react";
import {
  FaGithub,
  FaFileAlt,
  FaMicrophone,
  FaUserShield,
  FaLanguage,
  FaDownload,
  FaSeedling,
  FaFlask,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Translingua – AI-Powered Multilingual Translator",
    description:
      "An advanced Generative AI-based web app that enables real-time multilingual translation with voice output, secure authentication, and export options in DOC, TXT, and PDF formats for professional usage.",
    tags: [
      "Generative AI",
      "Python",
      "Flask/Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Voice Output",
      "User Authentication",
    ],
    github: "https://github.com/dheekshithgottiparthi/Translingua",
    features: [
      { icon: <FaLanguage className="text-blue-400" />, text: "Real-time Multilingual Translation" },
      { icon: <FaUserShield className="text-green-400" />, text: "Secure User Authentication System" },
      { icon: <FaMicrophone className="text-pink-400" />, text: "Voice Output for Translated Text" },
      { icon: <FaDownload className="text-purple-400" />, text: "Export in DOC, TXT, PDF formats" },
    ],
  },
  {
    name: "Crop Yield Prediction System – ML Web App",
    description:
      "A farmer-friendly machine learning web app that predicts crop yield based on region, crop type, season, and soil type, while providing personalized recommendations on fertilizers, rainfall, temperature, and planting time to optimize productivity.",
    tags: [
      "Machine Learning",
      "Python",
      "Flask/Django",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/dheekshithgottiparthi/Crop-Yield-Prediction",
    features: [
      { icon: <FaSeedling className="text-green-400" />, text: "Predict Crop Yield (kg/ha)" },
      { icon: <FaFlask className="text-yellow-400" />, text: "Fertilizer & NPK Recommendations" },
      { icon: <FaChartLine className="text-blue-400" />, text: "Weather-based Productivity Forecasting" },
      { icon: <FaFileAlt className="text-purple-400" />, text: "Detailed Insights & Reports" },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">🚀 My Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-white"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.name}</h3>
            <p className="text-gray-300 mb-5">{project.description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <span className="text-gray-200">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700/40 text-sm px-3 py-1 rounded-full text-gray-200 border border-gray-600 hover:bg-blue-600 transition"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                <FaGithub /> View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
