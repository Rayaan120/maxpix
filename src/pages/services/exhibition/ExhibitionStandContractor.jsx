import React from 'react';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Factory, HardHat, ClipboardCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCTA from '../../../components/services/ServiceCTA';

const ExhibitionStandContractor = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Professional Exhibition Stand Contractor Dubai | UAE | MAXPIX"
                description="Hassle-free exhibition stand contracting services in Dubai. We manage all technical approvals, fabrication, and on-site logistics for your booth."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[70vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/services/exhibition.jpg"
                        alt="Exhibition Stand Contractor"
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
                            Exhibition Stand <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Contractors
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            Reliable, detail-oriented contracting services that take the stress out of your exhibition participation. We handle the heavy lifting while you focus on business.
                        </p>
                        <div className="flex wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Hire a Contractor <ArrowRight size={18} />
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
                                Exhibition Stand Contractors <br /> in UAE.
                            </motion.h2>
                            <div className="prose prose-lg text-gray-600 font-light">
                                <p className="mb-6">
                                    As a leading exhibition stand contractor in Dubai, MAXPIX manages the complex intersection of design, safety regulations, and venue logistics.
                                </p>
                                <p>
                                    Our contracting team ensures that every structural element meets local municipality codes and DWTC requirements, providing you with a safe and spectacular platform for your brand.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Technical Drawing Subs.",
                                        "Municipality Approvals",
                                        "MEP & Electrical Setup",
                                        "On-Site Safety Mgmt",
                                        "Logistics Coordination"
                                    ].map((keyword, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group">
                                            <div className="w-6 h-6 rounded bg-[var(--color-primary-red)] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(230,0,0,0.3)] group-hover:scale-110 transition-transform">
                                                <Check size={14} className="text-white stroke-[3px]" />
                                            </div>
                                            <span className="text-[var(--color-charcoal)] font-bold text-lg tracking-tight">{keyword}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <img src="/hero/4.jpg" alt="Contracting Excellence" className="rounded-2xl shadow-2xl h-[500px] w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reused Global CTA */}
            <ServiceCTA />
        </div>
    );
};

export default ExhibitionStandContractor;
