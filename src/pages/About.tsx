import React from "react";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      degree: "B.E. in Electronics & Communication Engineering",
      college: "Vasavi College of Engineering, Hyderabad",
      year: "2022 – 2026",
      score: "CGPA: 9.41 / 10",
      icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
      bg: "bg-indigo-900/30",
    },
    {
      degree: "Intermediate (MPC)",
      college: "Gurukrupa Junior College, Siddipet",
      year: "2020 – 2022",
      score: "Percentage: 97.9%",
      icon: <FaSchool className="text-green-400 text-3xl" />,
      bg: "bg-green-900/30",
    },
    {
      degree: "SSC (10th Grade)",
      college: "Meridian High School, Siddipet",
      year: "2019 – 2020",
      score: "CGPA: 10 / 10",
      icon: <FaBook className="text-blue-400 text-3xl" />,
      bg: "bg-blue-900/30",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6">
      {/* About Me Card */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I am an Electronics & Communication Engineering student passionate about
          <span className="font-semibold text-blue-400"> software development</span> and
          <span className="font-semibold text-blue-400"> data-driven problem-solving</span>.
          I enjoy building clean, efficient applications and exploring emerging technologies.
        </p>
      </motion.div>

      {/* Education Section */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 flex items-center justify-center rounded-full ${edu.bg} mb-4`}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              {edu.icon}
            </motion.div>

            {/* Education Info */}
            <h3 className="text-lg font-semibold text-blue-400">{edu.degree}</h3>
            <p className="mt-2 text-gray-300">{edu.college}</p>
            <p className="mt-1 text-sm text-gray-400">{edu.year}</p>
            <p className="mt-2 text-sm font-medium text-green-400">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
