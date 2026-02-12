import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS } from '../constants';

const ProgressBar = ({ level, color }: { level: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
};

const SkillItem = ({ skill, index }: { skill: typeof SKILLS[0]['items'][0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium group-hover:text-sky-400 transition-colors">
          {skill.name}
        </span>
        <span className="text-slate-500 text-sm">{skill.level}%</span>
      </div>
      <ProgressBar level={skill.level} color={skill.color} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-sky-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SKILLS.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-sky-400">
                  {/* Category dot/icon equivalent since we don't have lucide icons in constants */}
                  <div className="w-6 h-6 rounded-full bg-current opacity-20" />
                </span>
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((skill, index) => (
                  <SkillItem key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
