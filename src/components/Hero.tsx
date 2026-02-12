import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { TypewriterEffect } from './ui/TypewriterEffect';

const BackgroundGradient = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-sky-500/20 blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, -90, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
      className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/20 blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 100, 0],
        opacity: [0.05, 0.1, 0.05],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
      className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-500/10 blur-[100px]"
    />
  </div>
);

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <BackgroundGradient />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 font-medium text-sm backdrop-blur-sm"
          >
            Available for Hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Intelligent</span>
            <br />
            <TypewriterEffect text="Systems & Solutions" className="text-slate-200" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            I'm a Full Stack Developer & AI Engineer crafting robust, scalable applications
            and intelligent systems that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-slate-300 rounded-full font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex gap-6"
          >
            {[Github, Linkedin, Mail, Download].map((Icon, index) => (
              <motion.a
                key={index}
                href={
                  Icon === Github ? SOCIAL_LINKS.github :
                    Icon === Linkedin ? SOCIAL_LINKS.linkedin :
                      Icon === Mail ? `mailto:${SOCIAL_LINKS.email}` :
                        "#" // Placeholder for Download
                }
                target={Icon !== Mail ? "_blank" : undefined}
                rel={Icon !== Mail ? "noopener noreferrer" : undefined}
                aria-label={
                  Icon === Github ? "GitHub Profile" :
                    Icon === Linkedin ? "LinkedIn Profile" :
                      Icon === Mail ? "Email Me" :
                        "Download Resume" // Placeholder for Download
                }
                whileHover={{ scale: 1.2, rotate: 5, color: '#38bdf8' }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-sky-400 transition-colors"
                onClick={(e) => {
                  if (Icon === Download) e.preventDefault(); // Placeholder action for Download
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-sky-400 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;

