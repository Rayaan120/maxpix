import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Users, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventCTA from '../../components/services/EventCTA';

const EventManagement = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Corporate Event Management & Production Dubai | MAXPIX"
                description="Professional event planning and management services for corporate events, gala dinners, and product launches in Dubai and the UAE."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[80vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/services/event.jpg"
                        alt="Event Management Dubai"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <Link to="/services" className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-xs mb-6 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                            <ArrowRight size={14} className="rotate-180" /> Back to Services
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase">
                            Event <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Management
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            From high-stakes gala dinners to large-scale trade show logistics, we manage every detail of your corporate presence with creative brilliance and operational precision.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Plan Your Event <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-12 md:py-20 bg-white relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] tracking-tighter leading-tight mb-8"
                            >
                                Top Event <br />Production Company
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-lg text-gray-600 font-light"
                            >
                                <p className="mb-6">
                                    At MAXPIX, we believe that every event is a live brand touchpoint. Our goal is to ensure that your message is not just heard, but felt. We combine innovative conceptual design with rigorous project management to deliver events that are both visually stunning and operationally flawless.
                                </p>
                                <p>
                                    Whether it's a corporate gala, an international trade show participation, or a massive product launch, our team handles everything from venue sourcing and audio-visual production to on-site coordination and logistics.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Corporate Event Planning",
                                        "Gala Dinner Management",
                                        "Trade Show Logistics",
                                        "AV Production Dubai",
                                        "Product Launch Activation"
                                    ].map((keyword, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group">
                                            <div className="w-6 h-6 rounded bg-[var(--color-primary-red)] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(230,0,0,0.3)] group-hover:scale-110 transition-transform">
                                                <Check size={14} className="text-white stroke-[3px]" />
                                            </div>
                                            <span className="text-[var(--color-charcoal)] font-bold text-lg tracking-tight">{keyword}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/hero/2.jpg" alt="Corporate Gala Design" className="rounded-2xl w-full h-64 object-cover" />
                                <img src="/services/event.jpg" alt="Event Audio Visual" className="rounded-2xl w-full h-64 object-cover mt-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Offerings Grid */}
            <section className="py-12 md:py-20 bg-[var(--color-warm-gray)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter uppercase">Our Event Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Corporate Events & Galas", desc: "Elegant dinners, award ceremonies, and anniversaries managed with prestige and sophistication.", icon: <Users size={32} /> },
                            { title: "Trade Show Logistics", desc: "End-to-end management of your brand's presence at international exhibitions and conferences.", icon: <Calendar size={32} /> },
                            { title: "AV & Technical Production", desc: "State-of-the-art sound, lighting, and LED screen integration for high-impact stage presence.", icon: <Music size={32} /> },
                        ].map((offering, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-[var(--color-primary-red)]/10 text-[var(--color-primary-red)] rounded-2xl flex items-center justify-center mb-6">
                                    {offering.icon}
                                </div>
                                <h3 className="text-2xl font-black text-[var(--color-charcoal)] mb-4">{offering.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{offering.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter uppercase">Event Roadmap.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery & Concept", desc: "Understanding your brand objectives and crafting a unique event narrative." },
                            { step: "02", title: "Strategic Planning", desc: "Venue selection, budget management, and comprehensive timeline development." },
                            { step: "03", title: "On-Site Execution", desc: "Professional management of technical crews, catering, and guest experiences." },
                            { step: "04", title: "Post-Event Review", desc: "Detailed reporting, feedback analysis, and dismantling logistics." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-[var(--color-primary-red)] transition-colors duration-500">{item.step}</div>
                                <h4 className="text-xl font-black text-[var(--color-charcoal)] mb-3">{item.title}</h4>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <EventCTA />
        </div>
    );
};

export default EventManagement;
