import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">Contact Me</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-white"
        >
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:dheekshi0123@gmail.com" className="underline">
                dheekshi0123@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+917702883998" className="underline">
                +91 7702883998
              </a>
            </li>
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/dheekshith-gottiparthi/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                /in/dheekshith-gottiparthi
              </a>
            </li>
            <li>
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/dheekshithgottiparthi"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @dheekshithgottiparthi
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-white grid gap-4"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              className="mt-1 min-h-[120px] w-full rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg hover:bg-white/90 transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
