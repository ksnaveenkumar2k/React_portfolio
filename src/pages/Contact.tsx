import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Phone, Github, Twitter, Linkedin } from "lucide-react";
import axios from "axios";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        formData
      );
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }); // Reset form after submission
    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const socialLinks = [
    { href: "https://github.com", Icon: Github },
    { href: "https://twitter.com", Icon: Twitter },
    { href: "https://linkedin.com", Icon: Linkedin },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -top-32 -right-32 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse delay-1000" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something extraordinary
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Mail us at</p>
                    <p className="text-white">ksnaveenkumar2k@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-purple-500/20 p-3 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us at</p>
                    <p className="text-white">+91 9894521011</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 mb-4">Follow us on</p>
                <div className="flex space-x-4">
                  {socialLinks.map(({ href, Icon }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white pl-12 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <User className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white pl-12 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                  </div>
                </div>

                {/* <div>
                  <label className="text-gray-300 text-sm mb-2 block">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white pl-12 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                  </div>
                </div> */}

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={isLoading} // Disable button when loading
                >
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  <Mail className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {status && (
        <p className="text-center mt-4 text-sm text-white">{status}</p>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
