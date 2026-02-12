import { Code2, Home, User, Cpu, Briefcase, Mail } from 'lucide-react';
import { Project, SkillCategory, SocialLinks, Section } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  email: 'biprayanc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/biprayanchoudhuri',
  github: 'https://github.com/CodeNeuron58',
};

export const SECTIONS: Section[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const PROJECTS: Project[] = [
  {
    id: 'video-rag-analyst',
    title: 'Video-RAG-Analyst',
    description: 'A production-grade RAG pipeline that transforms unstructured YouTube video content into a queryable knowledge base using LangChain, FAISS, and Cohere LLM.',
    tech: ['Python', 'LangChain', 'Cohere', 'FAISS', 'Streamlit'],
    github: 'https://github.com/CodeNeuron58/Video-RAG-Analyst',
    live: 'https://vidbrief-ai.streamlit.app',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'student-performance',
    title: 'Student Performance Predictor',
    description: 'Machine learning model that predicts student academic performance based on various factors using regression and classification algorithms.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Engine',
    description: 'NLP-powered application that analyzes sentiment in social media posts and reviews using transformer models and BERT architecture.',
    tech: ['Python', 'Hugging Face', 'PyTorch', 'Streamlit'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'image-classification',
    title: 'Image Classification System',
    description: 'Deep learning computer vision model that classifies images across multiple categories with high accuracy using CNNs.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Conversational AI system using GPT architecture for intelligent dialogue and task assistance with context awareness.',
    tech: ['Python', 'OpenAI API', 'LangChain', 'React'],
    github: 'https://github.com',
    live: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1535378437327-10ffb8b4e95f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'recommendation-system',
    title: 'Recommendation System',
    description: 'Collaborative filtering and content-based recommendation engine for personalized user experiences.',
    tech: ['Python', 'Scikit-learn', 'Surprise', 'FastAPI'],
    github: 'https://github.com',
    live: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 95, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "SQL", level: 85, color: "from-green-400 to-green-600" },
      { name: "C++", level: 80, color: "from-indigo-400 to-indigo-600" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", level: 92, color: "from-cyan-400 to-cyan-600" },
      { name: "PyTorch", level: 88, color: "from-orange-400 to-orange-600" },
      { name: "TensorFlow", level: 85, color: "from-orange-500 to-red-500" },
      { name: "LangChain", level: 90, color: "from-green-500 to-emerald-600" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Docker", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "Git", level: 95, color: "from-orange-600 to-red-600" },
      { name: "AWS", level: 80, color: "from-yellow-500 to-orange-500" },
      { name: "Linux", level: 90, color: "from-slate-400 to-slate-600" }
    ]
  },
  {
    category: "Data Science",
    items: [
      { name: "Pandas/NumPy", level: 95, color: "from-indigo-500 to-purple-500" },
      { name: "Scikit-learn", level: 92, color: "from-orange-400 to-orange-600" },
      { name: "Data Visualization", level: 90, color: "from-pink-500 to-rose-500" },
      { name: "Statistical Analysis", level: 85, color: "from-teal-400 to-teal-600" }
    ]
  }
];
