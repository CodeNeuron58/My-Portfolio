import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Code, Sparkles, Target } from 'lucide-react';
import React, { useRef } from 'react';

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
};

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
    <section id="about" className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mb-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded-2xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">
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
          </motion.div>

          {/* Interests Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 pl-2 border-l-4 border-sky-400">
              Areas of Passion
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {passionAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="perspective-1000"
                  >
                    <TiltCard className="h-full bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
                      <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                        <Icon className="text-sky-400" size={24} />
                      </div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
