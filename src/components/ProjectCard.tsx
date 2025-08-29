"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  link?: string;
  repoUrl?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  link,
  repoUrl,
  tags,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 p-6 flex flex-col"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
        {description}
      </p>

      {/* Tags */}
      {tags && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        {link && link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Github size={16} /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
