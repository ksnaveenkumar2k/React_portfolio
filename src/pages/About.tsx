import React from "react";
import ProfileImage from "../assets/I HUB ID CARD.jpg";
import IconCloud from "../components/ui/icon-cloud";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { Award } from "lucide-react";
import { Briefcase, Calendar, MapPin, CircleDot } from "lucide-react";
import Footer from "../components/Footer";

// Update the experience data array
const experiences = [
  {
    title: "Full stack Developer Intern",
    company: "SNS I HUB",
    location: "Remote",
    period: "Sep 2024 - Present",
    type: "Offsite",
    skills: ["React", "Python", "Node.js", "Flask", "Django"],
    icon: "💻",
    color: "blue",
  },
  {
    title: "Python Programming Intern",
    company: "InternPE",
    location: "Remote",
    period: "June 2024 - July 2024",
    type: "Offsite",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    icon: "🤖",
    color: "blue",
  },
  {
    title: "Student Intern",
    company: "MSME - Ministry of Micro, Small & Medium Enterprises",
    location: "On-site",
    period: "February 2023 - March 2023",
    type: "On-site",
    skills: ["Research", "Industry Analysis", "Documentation"],
    icon: "🏢",
    color: "purple",
  },
  {
    title: "Production Officer",
    company: "TATA Advanced Systems TCOE",
    location: "On-site",
    period: "July 2022 - December 2022",
    type: "On-site",
    skills: ["Production Management", "Quality Control", "Team Leadership"],
    icon: "⚙️",
    color: "pink",
  },
  {
    title: "CNC Machinist",
    company: "Sri Ranganther Valves and Controls Private Limited",
    location: "On-site",
    period: "May 2018 - May 2022",
    type: "On-site",
    skills: [
      "CNC Programming",
      "Quality Inspection",
      "Technical Documentation",
    ],
    icon: "🔧",
    color: "red",
  },
];
// Previous constants (slugs, skills, socialLinks) remain the same
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python - Django", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
  ],
  tools: [
    { name: "VS Code", level: 90 },
    { name: "GitHub", level: 85 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
  ],
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
    bgColor: "hover:bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourusername",
    bgColor: "hover:bg-sky-500",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
    bgColor: "hover:bg-red-500",
  },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
      />
    </div>
  </div>
);

const SocialButton = ({ icon: Icon, url, name, bgColor }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center justify-center p-3 rounded-full ${bgColor} transition-colors duration-300`}
  >
    <Icon className="w-5 h-5 text-white" />
    <span className="sr-only">{name}</span>
  </motion.a>
);

const IconCloudDemo = () => (
  <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm px-20 pb-20 pt-8">
    <IconCloud iconSlugs={slugs} />
  </div>
);

const About = () => {
  return (
    <section className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Hero Section with enhanced gradients */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#1a365d,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_60%_60%,#3b0764,transparent)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02]" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 mt-5">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Photo Section with Enhanced Gradient Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mb-12 group"
            >
              {/* Orbital Rings Animation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse delay-100"></div>
              <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse delay-200"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20"></div>
                <img
                  src={ProfileImage}
                  alt="Naveenkumar"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl group-hover:border-white/20 transition duration-300"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                className="text-5xl sm:text-6xl font-bold text-white mb-6"
                animate={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 2, repeat: Infinity },
                }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200%" }}
                >
                  Naveenkumar
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A passionate Full Stack Developer specializing in AI-powered
                solutions. With expertise in Python, JavaScript, TypeScript,
                React.js, Node.js, and Express.js, I build seamless front-end
                and back-end integrations.
              </motion.p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social) => (
                  <SocialButton key={social.name} {...social} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-20 relative">
        {/* Background gradient for section */}
        <div className="absolute  bg-gradient-to-b from-[#030014] via-[#030014]/90 to-[#030014]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Education Journey
            </h2>
            <div className="w-24 h-1 "></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div
                className="p-8 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl 
                      hover:transform hover:scale-[1.02] transition-all duration-300 
                      border border-gray-800/50 hover:border-blue-500/50 
                      relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    SNS College of Technology
                  </h3>
                  <p className="text-lg text-gray-300">
                    <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      BE - Bachelor of Engineering
                    </span>
                    <br />
                    <span className="text-gray-400">
                      Major in Mechanical Engineering & Minor Degree in AI and
                      Data Science
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <span className="text-blue-400 font-medium">
                        GPA: 9.15/10.0
                      </span>
                    </div>
                    <div className="px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-purple-400 font-medium">
                        2022 - 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div
                className="p-8 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl 
                      hover:transform hover:scale-[1.02] transition-all duration-300 
                      border border-gray-800/50 hover:border-purple-500/50 
                      relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Sri Ranganather Institute of Polytechnic College
                  </h3>
                  <p className="text-lg text-gray-300">
                    <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      DME - Diploma in Mechanical Engineering
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-purple-400 font-medium">
                        70.15%
                      </span>
                    </div>
                    <div className="px-4 py-2 bg-pink-500/10 rounded-lg border border-pink-500/20">
                      <span className="text-pink-400 font-medium">
                        2015 - 2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 relative">
        {/* Background gradient */}
        <div className="absolute  bg-gradient-to-b from-[#030014] via-[#030014]/90 to-[#030014]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 mx-auto"></div>
          </motion.div>

          {/* Skills Grid - Now in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-colors duration-300 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800 text-center">
                Frontend Development
                <div className=""></div>
              </h3>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </motion.div>

            {/* Backend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-colors duration-300 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800  text-center">
                Backend Development
                <div className=""></div>
              </h3>
              {skills.backend.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-[#0A0A1F]/40 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-pink-500/50 transition-colors duration-300 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800  text-center">
                Development Tools
                <div className=""></div>
              </h3>
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </motion.div>
          </div>

          {/* Cloud Icon Demo - Now in separate row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex items-center justify-center bg-[]/40 rounded-xl p-8 border border-gray-800/50 max-w-6xl mx-auto"
          >
            <IconCloudDemo />
          </motion.div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#030014] via-[#030014]/90 to-[#030014]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Existing About Content */}
          {/* Awards & Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-500" />
                Awards & Certifications
              </h2>
              <div className=""></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Machine Learning",
                  issuer: "PREPINSTA Certification",
                  icon: "🤖",
                  color: "from-blue-500/20 to-blue-600/20",
                },
                {
                  title: "Automation in Manufacturing",
                  issuer: "NPTEL Certification",
                  icon: "⚙️",
                  color: "from-purple-500/20 to-purple-600/20",
                },
                {
                  title: "Python Programming",
                  issuer: "PREPINSTA Certification",
                  icon: "🐍",
                  color: "from-green-500/20 to-green-600/20",
                },
                {
                  title: "Mernstack Developer Course",
                  issuer: "PREPINSTA Certification",
                  icon: "💻",
                  color: "from-yellow-500/20 to-yellow-600/20",
                },
                {
                  title: "Internet of Things IOT",
                  issuer: "MSME Certification",
                  icon: "🌐",
                  color: "from-red-500/20 to-red-600/20",
                },
                {
                  title: "Mastering in Python",
                  issuer: "INFOSYS SPRINGBOARD Certification",
                  icon: "📚",
                  color: "from-indigo-500/20 to-indigo-600/20",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border border-gray-800/50 bg-gradient-to-br ${cert.color} backdrop-blur-sm
                  hover:border-blue-500/50 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* You can keep other sections of your About page below */}
          // Add this inside your About component
          <div className="py-12 sm:py-20 relative">
            {/* Background gradient */}
            <div className=" absolute bg-gradient-to-b from-[#030014] via-[#030014]/90 to-[#030014]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2 sm:gap-3">
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  Experience
                </h2>
                <div className=""></div>
              </motion.div>

              {/* Timeline Container */}
              <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline line - Hidden on mobile */}
                    {index !== experiences.length - 1 && (
                      <div className="hidden sm:block absolute left-[28px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                      {/* Timeline dot */}
                      <div className="relative flex sm:block items-center">
                        <CircleDot
                          className={`w-10 h-10 sm:w-14 sm:h-14 p-2 sm:p-3 rounded-full 
                bg-${exp.color}-500/20 text-${exp.color}-500 
                ring-2 ring-${exp.color}-500/50`}
                        />
                        {/* Mobile timeline line */}
                        {index !== experiences.length - 1 && (
                          <div className="sm:hidden flex-1 h-0.5 ml-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                        )}
                      </div>

                      {/* Content card */}
                      <div className="flex-1">
                        <div
                          className={`group p-4 sm:p-6 rounded-xl border border-gray-800/50 
                bg-[#0A0A1F]/40 backdrop-blur-sm
                hover:border-${exp.color}-500/50 transition-all duration-300
                hover:transform hover:scale-[1.01] sm:hover:scale-[1.02]
                relative overflow-hidden`}
                        >
                          {/* Animated gradient background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-${exp.color}-500/10 to-purple-600/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                              <div>
                                <h3
                                  className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 
                        transition-colors duration-300 flex items-center gap-2"
                                >
                                  <span className="text-xl sm:text-2xl">
                                    {exp.icon}
                                  </span>
                                  {exp.title}
                                </h3>
                                <p className="text-gray-400 font-medium mt-1 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                                  {exp.company}
                                </p>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2 sm:space-y-3 mb-4">
                              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{exp.type}</span>
                              </div>
                            </div>

                            {/* Skills tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm 
                          bg-${exp.color}-500/10 text-${exp.color}-400 
                          border border-${exp.color}-500/20
                          group-hover:bg-${exp.color}-500/20 
                          transition-colors duration-300`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
