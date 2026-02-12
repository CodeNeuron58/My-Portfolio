import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />

            <div className="relative mb-8">
                <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full" />
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 relative z-10">
                    404
                </h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not <span className="text-sky-400">Found</span>
            </h2>

            <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 group backdrop-blur-sm"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
