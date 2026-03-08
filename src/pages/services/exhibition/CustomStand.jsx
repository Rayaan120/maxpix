import React from 'react';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ServiceCTA from '../../../components/services/ServiceCTA';
import ExhibitionCTA from '../../../components/services/ExhibitionCTA';

const CustomStand = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Bespoke Custom Exhibition Stand Design Dubai | MAXPIX"
                description="Elevate your brand with unique, custom-built exhibition stands in Dubai. Specialist fabrication, 3D design, and end-to-end project management for trade shows."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[70vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/hero/1.jpg"
                        alt="Custom Exhibition Stand Design"
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
                            Custom <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Bespoke Stands
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            100% uniquely designed structures crafted from wood, metal, and acrylic to perfectly match your brand geometry and marketing objectives.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Start Your Project <ArrowRight size={18} />
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
                                Premium Custom Exhibition Stands <br /> Designed to Captivate Audiences.
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="prose prose-lg text-gray-600 font-light"
                            >
                                <p className="mb-6">
                                    Custom exhibition stand design is both a creative discipline and a strategic craft. At MAXPIX Advertising LLC, we specialize in developing visually striking exhibition stands that attract attention and create meaningful engagement with your audience. Our experience spans a wide range of industries, from globally recognized brands to emerging businesses seeking to establish a strong presence in Dubai and across the UAE. As a professional exhibition stand design and fabrication company, we understand how to translate your brand identity into impactful stand designs that resonate with your target audience.


                                </p>
                                <p>
                                    At MAXPIX, our strength lies in combining innovative design, precision fabrication, and efficient project management. This integrated approach enables us to deliver high-quality, detail-oriented, custom-built exhibition stands that enhance brand visibility and deliver real value at trade shows and exhibitions.

                                    An exhibition stand is more than a structure—it is a platform to communicate your message and strengthen your brand presence. With extensive experience across multiple sectors, we understand how to design exhibition environments that attract the right audience and convert engagement into business opportunities. Share your vision with us, and our experienced team will transform it into a powerful exhibition presence—carefully crafted to meet your goals, timeline, and budget.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Stand out from the crowd",
                                        "Convey your brand message effectively",
                                        "Unique impact on visitors",
                                        "Flexibility to be creative",

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
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/hero/7.jpg" alt="Bespoke Stand Fabrication" className="w-full h-[500px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                    <p className="text-white font-black text-2xl uppercase tracking-tighter">Precision Joinery</p>
                                    <p className="text-gray-300 text-sm">Dubai Production Facility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exhibition Services Showcase Section */}
            <section className="py-20 bg-[var(--color-warm-gray)]">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6"
                        >
                            EXHIBITION <span className="text-[var(--color-primary-red)]">SERVICES</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 font-light text-lg italic"
                        >
                            "We take pride in crafting bespoke exhibition stands that bring out the true essence of your exhibition."
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Exhibition Stand Contractor",
                                image: "/hero/4.jpg",
                                slug: "exhibition-stand-contractor"
                            },
                            {
                                title: "Exhibition Stand Designs",
                                image: "/services/exhibition.jpg",
                                slug: "exhibition-stand-designs"
                            },
                            {
                                title: "Exhibition Stand Builders",
                                image: "/services/event.jpg",
                                slug: "exhibition-stand-builders"
                            }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => navigate(`/services/${service.slug}`)}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-8 text-center bg-white">
                                        <h3 className="text-xl font-black text-[var(--color-charcoal)] uppercase tracking-tight group-hover:text-[var(--color-primary-red)] transition-colors">
                                            {service.title}
                                        </h3>
                                        <div className="mt-4 w-12 h-1 bg-gray-100 mx-auto group-hover:w-20 group-hover:bg-[var(--color-primary-red)] transition-all duration-500" />
                                    </div>
                                </div>
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

export default CustomStand;
