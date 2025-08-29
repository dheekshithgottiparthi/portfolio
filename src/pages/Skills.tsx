import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBrain,
  FaUsers,
  FaLightbulb,
  FaChartBar,
} from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiTableau } from "react-icons/si";
import { MdTimer, MdPsychology, MdRecordVoiceOver } from "react-icons/md";

export default function Skills() {
  const technicalSkills = [
    { name: "C", icon: <SiC className="text-white text-3xl" />, color: "from-blue-700 to-blue-500" },
    { name: "C++", icon: <SiCplusplus className="text-white text-3xl" />, color: "from-blue-500 to-blue-300" },
    { name: "Python", icon: <FaPython className="text-white text-3xl" />, color: "from-yellow-500 to-yellow-400" },
    { name: "Java", icon: <FaJava className="text-white text-3xl" />, color: "from-red-600 to-red-400" },
    { name: "SQL", icon: <SiMysql className="text-white text-3xl" />, color: "from-sky-600 to-sky-400" },
    { name: "HTML", icon: <FaHtml5 className="text-white text-3xl" />, color: "from-orange-500 to-orange-400" },
    { name: "CSS", icon: <FaCss3Alt className="text-white text-3xl" />, color: "from-blue-500 to-blue-400" },
    { name: "JavaScript", icon: <FaJsSquare className="text-white text-3xl" />, color: "from-yellow-500 to-yellow-400" },
    { name: "Power BI", icon: <FaChartBar className="text-white text-3xl" />, color: "from-green-500 to-green-400" },
    { name: "Machine Learning", icon: <FaBrain className="text-white text-3xl" />, color: "from-pink-500 to-pink-400" },
    { name: "Data Analysis", icon: <SiTableau className="text-white text-3xl" />, color: "from-sky-500 to-sky-400" },
  ];

  const softSkills = [
    { name: "Time Management", icon: <MdTimer className="text-white text-3xl" />, color: "from-purple-600 to-purple-400" },
    { name: "Quick Learner", icon: <FaLightbulb className="text-white text-3xl" />, color: "from-yellow-500 to-yellow-400" },
    { name: "Adaptability", icon: <MdPsychology className="text-white text-3xl" />, color: "from-green-500 to-green-400" },
    { name: "Teamwork", icon: <FaUsers className="text-white text-3xl" />, color: "from-blue-500 to-blue-400" },
    { name: "Problem Solving", icon: <FaBrain className="text-white text-3xl" />, color: "from-indigo-600 to-indigo-400" },
    { name: "Communication", icon: <MdRecordVoiceOver className="text-white text-3xl" />, color: "from-red-500 to-red-400" },
  ];

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">My Skills</h2>

      {/* Technical Skills */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-200 mb-6">Technical Skills</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technicalSkills.map(({ name, icon, color }, i) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.07, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`bg-gradient-to-r ${color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/25 mb-4">
                {icon}
              </div>
              <h4 className="text-white font-semibold text-lg">{name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold text-gray-200 mb-6">Soft Skills</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {softSkills.map(({ name, icon, color }, i) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.07, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`bg-gradient-to-r ${color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/25 mb-4">
                {icon}
              </div>
              <h4 className="text-white font-semibold text-lg">{name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
