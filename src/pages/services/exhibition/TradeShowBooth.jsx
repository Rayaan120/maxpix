import React from 'react';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Target, Lightbulb, PenTool, Layout, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCTA from '../../../components/services/ServiceCTA';
import TradeShowBoothCTA from '../../../components/services/TradeShowBoothCTA';

const TradeShowBooth = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Impactful Trade Show Booth Design Dubai | MAXPIX"
                description="Expert trade show booth designers in Dubai. We create high-engagement booths for GITEX, Arab Health, and major trade shows in the UAE."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[70vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero/7.jpg"
                        alt="Trade Show Booth Excellence"
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
                        <Link to="/services/exhibition-stand-design" className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-xs mb-6 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                            <ArrowRight size={14} className="rotate-180" /> Back to Exhibition Design
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase">
                            Trade Show <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Impact Booths
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            Strategic booth concepts designed to drive lead generation, enhance audience engagement, and dominate the show floor at Dubai's biggest events.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Drive Your Presence <ArrowRight size={18} />
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
                                Architecture That <br />Converts Visitors.
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="prose prose-lg text-gray-600 font-light"
                            >
                                <p className="mb-6">
                                    At MAXPIX, we view every trade show booth as a performance stage. We analyze traffic flow, branding sightlines, and touchpoint interaction to ensure your booth isn't just pretty—it's productive.
                                </p>
                                <p>
                                    Our booth designs specifically target engagement. From integrated LED walls and demo stations to private meeting capsules, we provide the infrastructure needed to turn a passerby into a lead.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Lead Gen. Focus Design",
                                        "Audience Engagement Tech",
                                        "Show Floor Dominance",
                                        "Product Activation Hubs",
                                        "Strategic Traffic Flow"
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
                                <div className="space-y-4">
                                    <img src="/hero/5.jpg" alt="Active Trade Show Booth" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
                                    <div className="bg-[var(--color-primary-red)] p-8 rounded-2xl text-white">
                                        <Target size={32} className="mb-4" />
                                        <p className="font-bold text-xl uppercase leading-tight">Conversion Driven</p>
                                        <p className="text-white/80 text-sm mt-2">Designed to ROI.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-12">
                                    <div className="bg-gray-100 p-8 rounded-2xl">
                                        <TrendingUp size={32} className="text-[var(--color-primary-red)] mb-4" />
                                        <p className="font-bold text-xl uppercase text-[var(--color-charcoal)] leading-tight">Scale Your Lead Volume</p>
                                    </div>
                                    <img src="/hero/2.jpg" alt="Booth Engagement" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inclusions */}
            <section className="py-20 bg-[var(--color-charcoal)] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-tighter">Full Support Spectrum</h2>
                        <div className="w-24 h-1 bg-[var(--color-primary-red)] mt-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Concept Brainstorm", icon: <PenTool /> },
                            { title: "Smart Layouts", icon: <Layout /> },
                            { title: "Interactive Tech", icon: <Lightbulb /> },
                            { title: "Show Management", icon: <Handshake /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
                            >
                                <div className="text-[var(--color-primary-red)] mb-4">{item.icon}</div>
                                <h3 className="font-bold uppercase mb-2">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reused Global CTA */}
            <TradeShowBoothCTA />
        </div>
    );
};

export default TradeShowBooth;
