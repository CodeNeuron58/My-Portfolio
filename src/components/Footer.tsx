import { Heart, Github, Linkedin, Mail, FileCode } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Dev.
            </button>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xs">
              Building intelligent systems and immersive web experiences with AI, machine learning, and modern web technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-50 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-slate-50 font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Mail, href: 'mailto:your.email@example.com' },
                { icon: FileCode, href: 'https://kaggle.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all font-medium"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm text-center md:text-left">
              © {currentYear} AI Portfolio. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm flex items-center gap-2">
              Made with <Heart size={14} className="text-sky-500 fill-sky-500" /> and AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
