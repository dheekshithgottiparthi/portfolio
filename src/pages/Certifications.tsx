import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import { SiHackerrank, SiInfosys } from "react-icons/si";
import { MdAnalytics } from "react-icons/md"; // Business Analytics icon

const certificates = [
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/7d577cf96d68",
    icon: <SiHackerrank className="text-white text-3xl" />,
    color: "from-green-600 to-green-400",
  },
  {
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1hlzi5DjljrT556ylJzdfonYDEXADMzbg/view?usp=drivesdk",
    icon: <SiInfosys className="text-white text-3xl" />,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Understanding Business Analytics using Power BI",
    issuer: "GUVI",
    link: "https://drive.google.com/file/d/1M-JGvZEdsKzR3HEUqlMnHe8Jxc6ggf09/view?usp=drivesdk",
    icon: <MdAnalytics className="text-white text-3xl" />,
    color: "from-yellow-500 to-yellow-400",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/8de2146e0839",
    icon: <SiHackerrank className="text-white text-3xl" />,
    color: "from-green-500 to-green-300",
  },
  {
    title: "OG Prompt Engineer – 2nd Prize",
    issuer: "Vasavi College of Engineering",
    link: "https://drive.google.com/file/d/1Dn8Z66ghKMZw732p8SIUm_lawVIUrres/view?usp=drivesdk",
    icon: <FaUniversity className="text-white text-3xl" />,
    color: "from-indigo-600 to-indigo-400",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map(({ title, issuer, link, icon, color }, i) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`bg-gradient-to-r ${color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center`}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/25 mb-4">
              {icon}
            </div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{issuer}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              View Credential →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
