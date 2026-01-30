import { Brain, Code, Sparkles, Target } from 'lucide-react';

const About = () => {
  const passionAreas = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural networks and advanced architectures',
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Creating intelligent content generation systems',
    },
    {
      icon: Code,
      title: 'NLP',
      description: 'Natural language understanding and processing',
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Image recognition and visual intelligence',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Side */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded-2xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Hello, I'm an AI Enthusiast
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a passionate Computer Science student specializing in
                  <span className="text-sky-400 font-medium"> Artificial Intelligence </span>
                  and
                  <span className="text-purple-400 font-medium"> Machine Learning</span>.
                  My journey in AI started with curiosity about how machines can learn and make
                  decisions, evolving into a commitment to building intelligent systems.
                </p>
                <p>
                  With a strong foundation in mathematics, statistics, and
                  programming, I focus on developing practical AI solutions that
                  bridge the gap between theoretical concepts and real-world
                  applications.
                </p>
                <p>
                  I'm constantly exploring new technologies, participating in
                  research projects, and contributing to open-source AI
                  initiatives to stay at the forefront of this rapidly evolving
                  field.
                </p>
              </div>
            </div>
          </div>

          {/* Interests Side */}
          <div>
            <h3 className="text-xl font-bold text-slate-50 mb-6 pl-2 border-l-4 border-sky-400">
              Areas of Passion
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {passionAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10"
                  >
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                      <Icon className="text-sky-400" size={24} />
                    </div>
                    <h4 className="text-slate-50 font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
