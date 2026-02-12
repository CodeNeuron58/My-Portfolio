import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import React from 'react';

const Experience = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, State',
      period: '2021 - 2025',
      details: [
        'Specialization in Artificial Intelligence and Machine Learning',
        'GPA: 3.8/4.0',
        'Relevant Coursework: Deep Learning, NLP, Computer Vision, Data Mining',
      ],
    },
  ];

  const experiences = [
    {
      title: 'AI Research Intern',
      company: 'Tech Research Lab',
      period: 'Summer 2024',
      details: [
        'Developed novel neural network architectures for image classification',
        'Improved model accuracy by 15% through hyperparameter optimization',
        'Published research findings in university conference',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Data Analytics Startup',
      period: 'Summer 2023',
      details: [
        'Built predictive models for customer churn analysis',
        'Implemented data preprocessing pipelines using Python and Pandas',
        'Collaborated with cross-functional teams on ML integration',
      ],
    },
    {
      title: 'Hackathon Participant',
      company: 'Various Tech Events',
      period: '2022 - Present',
      details: [
        'Won 1st place in University AI Hackathon 2024',
        'Developed innovative solutions using AI/ML technologies',
        'Led teams in rapid prototyping and project development',
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-sky-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mb-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20">
                <GraduationCap className="text-sky-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-sky-500/30 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-transparent opacity-50 rounded-l-2xl" />

                  <h4 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sky-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 text-sm mb-4">{edu.location}</p>

                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/5">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {edu.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-slate-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Briefcase className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemRight}
                  className="relative group bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-transparent opacity-50 rounded-l-2xl" />

                  <h4 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-purple-400 font-medium mb-4">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/5">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-slate-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
