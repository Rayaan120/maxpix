import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Maximize, Printer, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const ServicesPreview = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Background Accent Text */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <h2 className="text-[25vw] font-black leading-none tracking-tighter whitespace-nowrap">
                    EXPERTISE &bull; EXPERTISE &bull; EXPERTISE
                </h2>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.3em] mb-6 block"
                        >
                            Core Expertise
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black text-[var(--color-charcoal)] leading-[0.85] tracking-tighter"
                        >
                            A comprehensive suite of production & creative services.
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/services" className="relative group flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-gray-200 hover:border-[var(--color-charcoal)] transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--color-charcoal)] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                            <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors text-center leading-tight">
                                Explore <br /> Full <br /> Catalog
                            </span>
                            <ArrowUpRight className="absolute top-1/4 right-1/4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-white" size={20} />
                        </Link>
                    </motion.div>
                </div>

                {/* Cinematic Asymmetric Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 auto-rows-fr">

                    {/* Block 1: Main Large Featured Service (Exhibitions) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] min-h-[500px] cursor-pointer"
                    >
                        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%]">
                            <img
                                src="/hero/7.jpg"
                                alt="Exhibition management"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 z-10">
                            <div className="w-20 h-20 rounded-2xl border border-white/20 flex items-center justify-center text-[var(--color-primary-red)] bg-white/5 backdrop-blur-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Maximize size={40} />
                            </div>
                            <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">Exhibitions Mgt & <br /> Stand Builder</h4>
                            <p className="text-gray-300 max-w-xl text-lg md:text-xl font-light leading-relaxed">
                                Custom exhibition stand design and fabrication services delivering innovative, branded, high-impact displays for global trade shows.
                            </p>
                        </div>
                        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white">
                                <ArrowUpRight size={28} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 2: Secondary Service (Event Planning) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] min-h-[350px] cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
                        <div className="absolute inset-0">
                            <img
                                src="/hero/8.jpg"
                                alt="Event Management"
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-70 group-hover:opacity-100"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:bg-[var(--color-primary-red)] group-hover:border-[var(--color-primary-red)] transition-all duration-500">
                                    <Palette size={28} />
                                </div>
                                <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-black tracking-tight text-white mb-4 uppercase leading-none">Event Planning & <br /> Management</h4>
                                <p className="text-gray-300 text-lg font-light">Professional corporate event planning services.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Block 3: Secondary Service (Digital Printing) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-4 group relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] min-h-[350px] cursor-pointer"
                    >
                        <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-[120%] opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                            <img
                                src="/hero/9.jpg"
                                alt="Digital Printing"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:bg-white group-hover:text-[var(--color-primary-red)] transition-all duration-500">
                                    <Printer size={28} />
                                </div>
                                <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={24} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-black tracking-tight mb-4 uppercase leading-none">Large Format <br /> Digital Printing</h4>
                                <p className="text-white/80 text-lg font-light leading-snug">High-quality digital printing services for high-visibility branding assets.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
