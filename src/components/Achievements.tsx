import { Award, Trophy, GitBranch, Medal } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      name: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2024',
      icon: Award,
    },
    {
      name: 'Machine Learning Engineering',
      issuer: 'Google Cloud',
      date: '2024',
      icon: Award,
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      date: '2023',
      icon: Award,
    },
    {
      name: 'Natural Language Processing',
      issuer: 'Coursera',
      date: '2023',
      icon: Award,
    },
  ];

  const achievements = [
    {
      title: '1st Place - University AI Hackathon',
      description:
        'Led team to develop an innovative AI-powered healthcare diagnostic tool',
      icon: Trophy,
      color: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Top 5% - Kaggle Competition',
      description:
        'Achieved top ranking in machine learning competition with 10,000+ participants',
      icon: Medal,
      color: 'from-sky-400 to-blue-500',
    },
    {
      title: 'Open Source Contributor',
      description:
        'Active contributor to major ML libraries including TensorFlow and PyTorch',
      icon: GitBranch,
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            Achievements & <span className="text-purple-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-sky-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-8 flex items-center gap-3">
              <Trophy className="text-purple-400" size={28} />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${achievement.color} bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-50 mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-8 flex items-center gap-3">
              <Award className="text-sky-400" size={28} />
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-sky-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-sky-500/20 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-50 mb-1 group-hover:text-sky-400 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-slate-400 text-sm font-medium mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-slate-600 text-xs font-mono">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-900/30 border border-white/5 rounded-3xl p-10 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            Continuous Learning
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Committed to staying at the forefront of AI and Machine Learning
            through continuous education, hands-on projects, and active
            participation in the global AI community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
