import { Code2, Database, Boxes, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'SQL', 'C++', 'R'],
    },
    {
      icon: Boxes,
      title: 'ML & AI',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'Hugging Face'],
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Jupyter', 'Docker', 'Google Colab'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-sky-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A comprehensive toolkit for building intelligent systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Icon className="text-purple-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-50 mb-4 group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Bars */}
        <div className="bg-slate-800/30 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-slate-50 mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { name: 'Machine Learning', level: 90 },
              { name: 'Python Programming', level: 95 },
              { name: 'Deep Learning', level: 85 },
              { name: 'Data Analysis', level: 90 },
              { name: 'Neural Networks', level: 80 },
              { name: 'NLP', level: 75 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium text-sm">
                    {skill.name}
                  </span>
                  <span className="text-sky-400 font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-sky-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
