import { useState } from 'react';
import { Mail, Linkedin, Github, FileCode, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-sky-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:text-slate-200',
    },
    {
      name: 'Kaggle',
      icon: FileCode,
      url: 'https://kaggle.com/yourusername',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">
            Get In <span className="text-sky-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Interested in collaboration or have a question?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-50 mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, interesting
                projects, or potential collaborations. Whether you're a recruiter,
                professor, or fellow AI enthusiast, I'd love to hear from you!
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6">
              <h4 className="text-slate-50 font-semibold mb-4">
                Connect with me on:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-slate-400 ${link.color} transition-all p-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 hover:border-white/10`}
                    >
                      <Icon size={20} />
                      <span className="text-sm font-medium">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 rounded-2xl p-6">
              <h4 className="text-sky-400 font-semibold mb-2">
                Open to Opportunities
              </h4>
              <p className="text-slate-300 text-sm">
                Currently seeking internships and full-time positions in AI/ML,
                Data Science, and related fields.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/50"
            >
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-400 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-400 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-400 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : status === 'error' ? (
                    'Error - Try Again'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
