import hero from "./assets/hero.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "PHP"],
    Database: ["MongoDB", "MySQL", "SQL"],
    Languages: ["C", "C++", "Java", "Python", "JavaScript"],
    Tools: ["Git", "GitHub", "REST APIs", "jQuery"],
  };

  const projects = [
    {
      title: "Stock Prediction System",
      desc: "Machine learning based stock prediction system using LSTM, technical indicators, and data visualization.",
      tech: "Python • LSTM • Pandas • Matplotlib",
      github: "https://github.com/Abhayraj008",
      live: "#",
    },
    {
      title: "Library Management System",
      desc: "Web-based library management system with authentication, CRUD operations, and database handling.",
      tech: "HTML • CSS • JavaScript • jQuery • PHP • MySQL",
      github: "https://github.com/Abhayraj008",
      live: "#",
    },
    {
      title: "OneCart Ecommerce Platform",
      desc: "Modern ecommerce platform with responsive UI and full stack architecture.",
      tech: "React.js • Node.js • Express.js • MongoDB",
      github: "https://github.com/Abhayraj008",
      live: "#",
    },
    {
      title: "Tic Tac Toe AI",
      desc: "AI-based Tic Tac Toe game developed in C++ using intelligent move generation.",
      tech: "C++",
      github: "https://github.com/Abhayraj008",
      live: "#",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-blue-500">
            Abhay Raj
          </h1>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-gray-200 font-semibold text-lg">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#dsa" className="hover:text-blue-400 transition">
              DSA
            </a>

            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>

            <a
              href="#certifications"
              className="hover:text-blue-400 transition"
            >
              Certifications
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            download
            className="hidden lg:block border-2 border-white px-6 py-3 rounded-2xl text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 ${
            isOpen ? "right-0" : "-right-full"
          } h-screen w-[75%] sm:w-[55%] bg-black border-l border-gray-800 transition-all duration-500 z-50 lg:hidden`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold text-blue-500">Menu</h1>

            <button onClick={() => setIsOpen(false)}>
              <X size={34} className="text-white" />
            </button>
          </div>

          <div className="flex flex-col p-8 gap-8 text-xl font-semibold text-gray-200">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>

            <a href="#dsa" onClick={() => setIsOpen(false)}>
              DSA
            </a>

            <a href="#education" onClick={() => setIsOpen(false)}>
              Education
            </a>

            <a
              href="#certifications"
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-center py-3 rounded-2xl mt-4"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white font-sans overflow-hidden">

        {/* Hero */}
        <section className="pt-32 sm:pt-36 md:pt-40 px-5 sm:px-8 md:px-20 py-14 md:py-20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-400 text-xl sm:text-2xl font-semibold mb-4 tracking-wide">
                Welcome to my portfolio ✨
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Hi, I’m <span className="text-blue-500">Abhay Raj</span>
              </h1>

              <div className="mt-6 text-lg sm:text-2xl md:text-3xl text-gray-300 font-medium min-h-[80px]">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "Competitive Programmer",
                    1500,
                    "MERN Stack Developer",
                    1500,
                    "Problem Solver",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-6 text-gray-400 leading-8 text-base sm:text-lg max-w-2xl">
                I build scalable web applications, solve complex DSA problems,
                and create modern full stack projects using MERN Stack and C++.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <a
                  href="https://github.com/Abhayraj008"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-2xl font-semibold text-base transition duration-300 shadow-lg hover:scale-105 text-center"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/abhayrajgiri"
                  target="_blank"
                  className="border border-gray-600 hover:border-blue-500 px-7 py-3 rounded-2xl font-semibold text-base transition duration-300 hover:scale-105 text-center"
                >
                  LinkedIn
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="bg-white text-black hover:bg-gray-300 px-7 py-3 rounded-2xl font-semibold text-base transition duration-300 shadow-lg hover:scale-105 text-center"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src={hero}
                alt="profile"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-5 sm:px-8 md:px-20 py-20 border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-blue-500">
              About Me
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-9 max-w-5xl">
              I am a passionate Full Stack Developer and Competitive Programmer
              with a strong interest in web development, backend systems, and
              problem solving. I completed my MCA from VIT Bhopal with a CGPA
              of 8.84 and solved 400+ DSA problems across coding platforms.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="px-5 sm:px-8 md:px-20 py-20 border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-14 text-blue-500">
              Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={category}
                  className="bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-5 text-white">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30 text-sm sm:text-base font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="px-5 sm:px-8 md:px-20 py-20 border-b border-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-14 text-blue-500">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={project.title}
                  className="bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition duration-300 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-5 text-base">
                    {project.desc}
                  </p>

                  <p className="text-blue-400 font-semibold text-base mb-5">
                    {project.tech}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition text-center"
                    >
                      Source Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="border border-gray-600 hover:border-blue-500 px-5 py-3 rounded-xl font-medium transition text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
     
 <section
  id="experience"
  className="px-6 md:px-20 py-24 border-b border-gray-800"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-blue-500 tracking-tight">
      Experience
    </h2>

    <div className="bg-gray-900/70 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 shadow-xl hover:border-blue-500 transition duration-300">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Software Trainee
          </h3>

          <p className="text-blue-400 text-lg mt-2">
            Seculabs Pvt. Ltd • Ludhiana
          </p>
        </div>

        <div className="text-gray-400 text-lg">
          Jan 2026 – Jun 2026
        </div>
      </div>

      <p className="text-gray-400 mt-8 leading-8 text-lg">
        Worked on industrial live projects focused on web development,
        backend systems, scalable applications, and software development
        practices. Collaborated on real-world deployment-based projects
        and enhanced problem-solving and development skills.
      </p>
       <div className="flex flex-wrap gap-4 mt-8">
  <a
  href="/training-letter.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition duration-300 shadow-lg hover:scale-105"
>
  Download Training Letter
</a>

  <a
  href="/training-letter.pdf"
  target="_blank"
  className="border border-gray-600 hover:border-blue-500 px-5 py-3 rounded-xl font-medium transition duration-300 hover:scale-105"
>
  View Certificate
</a>
</div>

{/* Skills tags below */}
<div className="flex flex-wrap gap-4 mt-8"></div>
      <div className="flex flex-wrap gap-4 mt-8">
        <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
          Web Development
        </span>

        <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
          Backend Development
        </span>

        <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
          Industrial Training
        </span>

        <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
          Software Development
        </span>
      </div>
    </div>
  </div>
</section>
 <section id="dsa" className="px-6 md:px-20 py-24 border-b border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-500 tracking-tight">
              DSA & Competitive Programming
            </h2>

            <div className="bg-gray-900/70 backdrop-blur-lg rounded-3xl p-12 border border-gray-800 shadow-xl">
              <h3 className="text-4xl font-extrabold text-blue-400 mb-5">
                400+
              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-9 max-w-4xl mx-auto">
                Solved 400+ Data Structures and Algorithms problems focused on arrays, linked lists, trees, graphs, sliding window, recursion, and dynamic programming.
              </p>
            </div>
          </div>
        </section>
{/* Education */}
        <section id="education" className="px-6 md:px-20 py-24 border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-blue-500 tracking-tight">
              Education
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900/70 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 shadow-xl hover:border-blue-500 transition duration-300">
                <h3 className="text-2xl font-bold">
                  Master of Computer Applications (MCA)
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  VIT Bhopal University
                </p>

                <p className="text-blue-400 mt-4 font-semibold text-lg">
                  CGPA: 8.84/10
                </p>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-lg p-10 rounded-3xl border border-gray-800 shadow-xl hover:border-blue-500 transition duration-300">
                <h3 className="text-2xl font-bold">
                  Bachelor of Computer Applications (BCA)
                </h3>

                <p className="text-gray-400 mt-3 text-lg">
                  Gujranwala Guru Nanak Institute of Management and Technology
                </p>

                 <p className="text-blue-400 mt-4 font-semibold text-lg">
                  CGPA: 8.01/10
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*certifiactions */}
      {/* ================= CERTIFICATIONS SECTION ================= */}

<section
  id="certifications"
  className="px-6 md:px-20 py-24 border-b border-gray-800"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6">
      Certifications & Achievements
    </h2>

    {/* Description */}
    <p className="text-gray-400 text-lg mb-14 max-w-3xl leading-8">
      Certified in programming, DSA, SQL, backend development,
      and modern software engineering technologies.
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Java Certificate */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">
        <h3 className="text-2xl font-bold text-white">
          Java Standard Edition
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Completed 3 months training in Java Standard Edition
          focused on OOPs, core Java concepts, and problem solving.
        </p>

        <a
          href="/java-certificate.pdf"
          target="_blank"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium transition"
        >
          View Certificate
        </a>
      </div>

      {/* DSA Bootcamp */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">
        <h3 className="text-2xl font-bold text-white">
          C++ & DSA Bootcamp
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Successfully completed bootcamp covering C++, DSA,
          IoT concepts, and interview preparation.
        </p>

        <a
          href="/dsa-bootcamp.pdf"
          target="_blank"
          className="inline-block mt-6 border border-gray-600 hover:border-blue-500 px-5 py-3 rounded-xl font-medium transition"
        >
          View Certificate
        </a>
      </div>

      {/* SQL Certificate */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">
        <h3 className="text-2xl font-bold text-white">
          SQL Certification
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Earned HackerRank SQL certification demonstrating
          strong understanding of database queries and SQL fundamentals.
        </p>

        <a
          href="/sql-certificate.pdf"
          target="_blank"
          className="inline-block mt-6 border border-gray-600 hover:border-blue-500 px-5 py-3 rounded-xl font-medium transition"
        >
          View Certificate
        </a>
      </div>

      {/* Nexus Certificate */}
      <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl">
        <h3 className="text-2xl font-bold text-white">
          Nexus Development Program
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          Successfully completed development program covering
          blockchain, development fundamentals, and DSA.
        </p>

        <a
          href="/nexus-certificate.pdf"
          target="_blank"
          className="inline-block mt-6 border border-gray-600 hover:border-blue-500 px-5 py-3 rounded-xl font-medium transition"
        >
          View Certificate
        </a>
      </div>

    </div>
  </div>
</section>

        {/* Contact */}
        <section id="contact" className="px-6 md:px-20 py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-blue-500 tracking-tight">
              Contact
            </h2>

            <p className="text-gray-400 text-xl mb-10">
              Let’s connect and build something amazing together.
            </p>

            <div className="flex flex-col gap-5 text-lg md:text-xl text-gray-300">
              <a href="mailto:your-email@example.com">
                📧 AbhayRajgiri456@gmail.com
              </a>

              <a href="https://github.com/Abhayraj008" target="_blank">
                💻 github.com/Abhayraj008
              </a>

              <a href="https://linkedin.com/in/abhayrajgiri" target="_blank">
                🔗 linkedin.com/in/abhayrajgiri
              </a>
            </div>

            <p className="mt-20 text-gray-600 text-lg">
              Built with React + Tailwind CSS • Designed & Developed by Abhay Raj 🚀
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

   

       