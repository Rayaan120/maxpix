import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExhibitionCTA from '../../components/services/ExhibitionCTA';
import ExhibitionStandCategoriesSection from '../../components/services/ExhibitionStandCategoriesSection';

const ExhibitionStandDesign = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Premium Exhibition Stand Design & Fabrication Dubai | MAXPIX"
                description="Award-winning custom exhibition stand builders in Dubai. We design, fabricate, and install immersive brand environments for global trade shows across the UAE."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[80vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero/1.jpg"
                        alt="Exhibition Stand Design Dubai"
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
                            Exhibition Stand <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Builders Dubai
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            We don't just build booths; we architect immersive environments. With our 10,000 sq.ft in-house facility in the UAE, we control every millimeter of your stand's precision.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Get a Free Proposal <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="pt-12 md:pt-20 pb-4 md:pb-6 bg-white relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] tracking-tighter leading-tight mb-8"
                            >
                                Architects of High-Impact Exhibition Stands for Dubai’s Global Trade Shows.
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-lg text-gray-600 font-light"
                            >
                                <p className="mb-6">
                                    MAXPIX Advertising LLC is a trusted custom exhibition stand design and fabrication company operating across Dubai and the UAE. We specialize in creating high-impact, tailor-made exhibition stands that help brands stand out at trade shows and industry events.
                                </p>
                                <p>
                                    At MAXPIX, we combine innovative design concepts, precision fabrication, and professional project management to deliver exceptional custom-built exhibition stands that elevate your brand presence and maximize your event impact.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Exhibition Stand Design",
                                        "Exhibition Stand Building",
                                        "Upgrading Your Shell Scheme",
                                        "Storage & Rebuilding",
                                        "Retail Kiosks"
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
                                <img src="/hero/7.jpg" alt="Custom Exhibition Stands" className="rounded-2xl w-full h-64 object-cover" />
                                <img src="/services/exhibition.jpg" alt="Modular Exhibition Booths" className="rounded-2xl w-full h-64 object-cover mt-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exhibition Categories Showcase */}
            <ExhibitionStandCategoriesSection />

            {/* Process Section */}
            <section className="pt-12 md:pt-16 pb-12 md:pb-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter uppercase">How we build it.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "3D Design & Strategy", desc: "Detailed 3D renders, spatial planning, and material selection." },
                            { step: "02", title: "Approvals", desc: "Handling all venue and municipality permits and technical layouts." },
                            { step: "03", title: "In-House Fabrication", desc: "Precision carpentry, painting, and CNC routing in our UAE facility." },
                            { step: "04", title: "On-Site Build", desc: "Flawless and safe installation, electronics integration, and handover." }
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

            {/* Reused Global CTA */}
            <ExhibitionCTA />
        </div>
    );
};

export default ExhibitionStandDesign;
