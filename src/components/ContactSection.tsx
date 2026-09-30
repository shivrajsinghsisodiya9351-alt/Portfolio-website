import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid email address required';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message content is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitted(true);
    // Prepare mailto fallback link for user convenience
    const mailtoUri = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUri, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            LET'S CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-700 dark:from-cyan-300 dark:via-teal-200 dark:to-fuchsia-400 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-mono text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have a data project, BI role, or question? Feel free to reach out directly or send a message below.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl relative overflow-hidden bg-white dark:bg-slate-950/60">
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                Direct Contact
              </h3>
              <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider mb-6">
                AVAILABILITY: OPEN FOR DATA & BI ROLES
              </p>

              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Email Address</p>
                    <a
                      href={PERSONAL_INFO.emailUrl}
                      className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors break-all block mt-0.5"
                      id="contact-email-link"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Location</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">LinkedIn Profile</p>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors block mt-0.5"
                      id="contact-linkedin-link"
                    >
                      linkedin.com/in/shivraj-singh-sisodiya
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">GitHub Account</p>
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors block mt-0.5"
                      id="contact-github-link"
                    >
                      github.com/shivrajsinghsisodiya9351-alt
                    </a>
                  </div>
                </div>

              </div>

              {/* Quick Copy Email Action */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={copyEmailToClipboard}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-sm"
                  id="contact-copy-email-btn"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
                      Email Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Copy Email Address
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-2xl bg-white dark:bg-slate-950/60">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-300 mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-slate-100">
                    Message Prepared & Email Client Launched!
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-700 dark:text-cyan-300 font-bold">{formData.name}</span>! Your message has been formatted. You can send it directly or email me at <span className="text-cyan-700 dark:text-cyan-300 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold hover:border-cyan-500/50 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-2" htmlFor="form-name">
                      Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border ${
                        formErrors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-2" htmlFor="form-email">
                      Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border ${
                        formErrors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-2" htmlFor="form-subject">
                      Subject <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Data Analytics Collaboration / BI Inquiry"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border ${
                        formErrors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all`}
                    />
                    {formErrors.subject && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 uppercase mb-2" htmlFor="form-message">
                      Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Shivraj, I'd like to discuss a Data Analytics / Power BI project..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400'
                      } text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    id="contact-send-message-btn"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    Send Message
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
