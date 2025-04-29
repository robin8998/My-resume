import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <div className="w-full bg-gradient-to-r from-[#807e77] to-gray-500 py-16 px-4 rounded-lg shadow-2xl">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-Monoton font-bold text-white mb-8 tracking-[0.5em] sm:text-3xl md:text-4xl">
          Get In Touch
        </h2>

        <p className="text-gray-600 mb-10 text-lg sm:text-base">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of these channels.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=robinsr889@gmail.com&su=Hello&body=I saw your portfolio and would love to connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-purple-900 px-6 py-4 rounded-lg font-medium hover:bg-purple-100 transition-all duration-300 shadow-lg group w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Email Me</span>
          </a>

          <a
            href="https://linkedin.com/in/robin-singh8998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg group w-full sm:w-auto"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
            <span className="text-white">LinkedIn</span>
          </a>

          <a
            href="https://github.com/robin8998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-900 transition-all duration-300 shadow-lg group w-full sm:w-auto"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-16 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Robin Singh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
