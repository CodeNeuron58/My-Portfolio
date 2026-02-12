import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Layers, BarChart, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

import { ProjectDetail, Metric } from '../types';

// This would typically come from a data file or API
// For now, we'll mock it to demonstrate the template
const projectsData: Record<string, ProjectDetail> = {
    'student-performance': {
        title: 'Student Performance Predictor',
        subtitle: 'End-to-End Machine Learning Pipeline',
        description: 'A comprehensive system that predicts student academic performance based on demographic and behavioral data using ensemble methods.',
        tags: ['Python', 'Scikit-learn', 'XGBoost', 'Flask', 'Docker'],
        metrics: [
            { label: 'Accuracy', value: '92%' },
            { label: 'MSE Reduction', value: '15%' },
            { label: 'Inference Time', value: '<50ms' }
        ],
        github: 'https://github.com',
        demo: 'https://demo.com',
        date: 'Oct 2025',
        content: {
            problem: "Educational institutions struggle to identify at-risk students early enough to intervene effectively. Traditional methods often rely on lag indicators like mid-term grades, which may be too late.",
            solution: "I developed a predictive model that aggregates socio-economic data, study habits, and previous academic history to forecast future performance. The system provides actionable insights for educators to personalize support strategies.",
            challenges: [
                "Handling imbalanced datasets where checking for 'at-risk' students was the minority class.",
                "Feature engineering from categorical variables like 'parental education' and 'internet access'.",
                "Deploying the model as a real-time API with low latency."
            ],
            methodology: "I started with extensive EDA to understand correlations. I compared Logistic Regression, Random Forest, and XGBoost. XGBoost yielded the best ROC-AUC score. I used SMOTE to handle class imbalance and deployed the final model using a Flask container on AWS.",
        }
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = id ? projectsData[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold text-slate-50 mb-4">Project Not Found</h1>
                <Link to="/" className="text-sky-400 hover:text-sky-300 flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-950 min-h-screen">
            <SEO
                title={project.title}
                description={project.description}
                image={project.image} // Assuming project has an image field, otherwise fallback
            />
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                    <span className="text-slate-500 text-sm font-mono hidden sm:block">
                        CASE_STUDY: {id?.toUpperCase()}
                    </span>
                </div>
            </nav>

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Header */}
                <header className="mb-16 animate-fade-in-up">
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium flex items-center gap-2">
                            <Calendar size={14} /> {project.date}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-slate-50 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl font-light leading-relaxed">
                        {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                            <Github size={20} /> View Source
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center gap-2"
                            >
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* Metrics Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up delay-100">
                    {project.metrics.map((metric: Metric, idx: number) => (
                        <div key={idx} className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-sky-500/20 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-2">{metric.label}</p>
                            <p className="text-3xl font-bold text-slate-50">{metric.value}</p>
                        </div>
                    ))}
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12 animate-fade-in-up delay-200">
                        {/* The Challenge */}
                        <section className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-3">
                                <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
                                The Challenge
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                {project.content.problem}
                            </p>
                        </section>

                        {/* The Solution */}
                        <section className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-slate-50 mb-4 flex items-center gap-3">
                                <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                                The Solution
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                {project.content.solution}
                            </p>
                        </section>

                        {/* Methodology */}
                        <section className="bg-slate-900/30 border border-white/5 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-50 mb-6 flex items-center gap-2">
                                <Layers className="text-sky-400" /> Technical Approach
                            </h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {project.content.methodology}
                            </p>

                            <h4 className="text-slate-300 font-semibold mb-4">Key Challenges Overcome:</h4>
                            <ul className="space-y-3">
                                {project.content.challenges.map((challenge: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-400">
                                        <ChevronRight className="text-sky-500 mt-1 flex-shrink-0" size={16} />
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8 animate-fade-in-up delay-300">
                        {/* Tech Stack */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <Tag size={20} className="text-purple-400" /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string, idx: number) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-md text-sm text-slate-300 transition-colors cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Outcomes */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/10 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-50 mb-4 flex items-center gap-2">
                                <BarChart size={20} className="text-indigo-400" /> Impact
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                This project demonstrated the viability of using ensemble methods for educational data mining, achieving a 15% improvement over baseline linear models.
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
