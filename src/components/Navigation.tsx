import { useState, useEffect } from 'react';
import { Menu, X, Code2, User, Cpu, Briefcase, Mail, Home } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Exp' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-sky-500/10 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Dev.
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === item.id
                    ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl animate-fade-in-up">
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex flex-col items-center justify-center p-3 rounded-xl transition-all
                    ${activeSection === item.id
                      ? 'bg-sky-500/20 text-sky-400'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                  `}
                >
                  <item.icon size={20} className="mb-1" />
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
