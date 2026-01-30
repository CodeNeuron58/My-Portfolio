import { ExternalLink, Github, ArrowUpRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'student-performance',
      title: 'Student Performance Predictor',
      description:
        'Machine learning model that predicts student academic performance based on various factors using regression and classification algorithms.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'from-sky-400 to-blue-600',
    },
    {
      title: 'Sentiment Analysis Engine',
      description:
        'NLP-powered application that analyzes sentiment in social media posts and reviews using transformer models and BERT architecture.',
      tech: ['Python', 'Hugging Face', 'PyTorch', 'Streamlit'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'from-purple-500 to-sky-500',
    },
    {
      title: 'Image Classification System',
      description:
        'Deep learning computer vision model that classifies images across multiple categories with high accuracy using CNNs.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'from-emerald-400 to-sky-500',
    },
    {
      title: 'AI Chatbot Assistant',
      description:
        'Conversational AI system using GPT architecture for intelligent dialogue and task assistance with context awareness.',
      tech: ['Python', 'OpenAI API', 'LangChain', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Recommendation System',
      description:
        'Collaborative filtering and content-based recommendation engine for personalized user experiences.',
      tech: ['Python', 'Scikit-learn', 'Surprise', 'FastAPI'],
      github: 'https://github.com',
      demo: null,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Time Series Forecasting',
      description:
        'LSTM-based neural network for predicting time series data with applications in stock market and weather forecasting.',
      tech: ['Python', 'PyTorch', 'Pandas', 'Matplotlib'],
      github: 'https://github.com',
      demo: null,
      gradient: 'from-indigo-500 to-sky-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            Featured <span className="text-sky-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Showcasing practical AI/ML applications and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.2)] flex flex-col"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-50 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-medium group-hover:bg-sky-500/10 group-hover:border-sky-500/20 group-hover:text-sky-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {project.id && (
                    <Link
                      to={`/project/${project.id}`}
                      className="ml-auto flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-bold"
                    >
                      <BookOpen size={16} />
                      <span>Case Study</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
