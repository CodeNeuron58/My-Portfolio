import { ChevronDown, GitGraph, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">

          {/* Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
              Available for Hire
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-in-up delay-100">
            <span className="block text-slate-50 mb-2">Building</span>
            <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Intelligent Systems
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 mb-4 font-light animate-fade-in-up delay-200">
            AI & Machine Learning Enthusiast
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Crafting the future with data, algorithms, and immersive web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-500">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-full font-semibold shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-slate-300 rounded-full font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-700">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <GitGraph size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email Me"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-sky-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
