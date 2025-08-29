import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileImage from "../assets/profile.jpg"; // <-- Add your image here

export default function Home() {
  const navigate = useNavigate();

  // Handle "Hire Me" button click → Go to Contact page
  const handleHireMe = () => {
    navigate("/contact");
  };

  return (
    <section className="container-responsive py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 md:pl-24">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white-800 dark:text-white mb-4">
            Hi, I'm <span className="text-green-600">Dheekshith Gottiparthi</span>
          </h1>

          {/* Short Intro */}
          <p className="text-lg md:text-xl text-white-600 dark:text-white-300 max-w-xl leading-relaxed mb-8">
            A passionate{" "}
            <span className="font-semibold text-green-600">Software Developer</span>{" "}
            who loves building clean, efficient, and innovative applications 💡.
          </p>

          {/* Social Icons + Hire Me Button */}
          <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/dheekshithgottiparthi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub size={22} /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dheekshith-gottiparthi-6791bb322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>

            {/* Hire Me Button */}
            <button
              onClick={handleHireMe}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              🚀 Hire Me
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-72 h-72 rounded-full border-4 border-green-500 shadow-lg object-cover object-[center_33%]"
          />
        </div>
      </div>
    </section>
  );
}
