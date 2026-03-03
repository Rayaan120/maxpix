import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Signage & Wayfinding',
        budget: 'Under 10k AED',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const services = [
        "Signage & Wayfinding",
        "Corporate Branding",
        "Events & Exhibitions",
        "Digital Printing",
        "Retail Fit-out",
        "Other"
    ];

    const budgets = [
        "Under 10k AED",
        "10k - 50k AED",
        "50k - 100k AED",
        "100k+ AED"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-12 bg-[#111] rounded-[2rem] border border-white/10 text-center min-h-[600px]"
            >
                <div className="w-24 h-24 rounded-full bg-[var(--color-primary-red)]/20 flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} className="text-[var(--color-primary-red)]" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Received.</h3>
                <p className="text-gray-400 text-lg max-w-sm">
                    Our engineering team has received your brief. We will run the preliminary numbers and contact you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-red)]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="mb-10 relative z-10">
                <h3 className="text-3xl font-black text-white tracking-tighter mb-2">Project Brief</h3>
                <p className="text-gray-400 text-sm">Provide the core details of your requirement below.</p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors"
                            placeholder="Acme Corp"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors"
                            placeholder="+971 50 123 4567"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Primary Service *</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors appearance-none cursor-pointer"
                        >
                            {services.map(s => <option key={s} value={s} className="bg-[#111]">{s}</option>)}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Estimated Budget *</label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors appearance-none cursor-pointer"
                        >
                            {budgets.map(b => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Details *</label>
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary-red)] transition-colors resize-none"
                        placeholder="Describe your requirements, dimensions, or specific materials needed..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full bg-[var(--color-primary-red)] text-white font-bold py-4 rounded-xl hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Transmitting...' : 'Submit Brief'}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>

            </form>
        </div>
    );
};

export default ContactForm;
