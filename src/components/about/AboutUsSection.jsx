import { motion } from 'framer-motion';

const AboutUsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative z-30 -mt-16 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="/hero/6.jpg"
                                alt="MAXPIX Workspace"
                                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                        {/* decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-primary-red)] rounded-2xl -z-10 hidden md:block" />
                    </motion.div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-sm mb-6"
                        >
                            Who We Are
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] leading-[1.1] tracking-tighter mb-8"
                        >
                            Bridging the gap between <br />
                            Vision and Reality.
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-light">
                                Maxpix Advertising LLC is a leading Dubai-based exhibition stand design company specializing in custom booth fabrication, corporate event management, and high-resolution digital printing services.
                            </p>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                                We provide end-to-end branding solutions, including creative concept development, 3D stand design, production, installation, and on-site execution—helping businesses maximize visibility, strengthen brand presence, and deliver impactful experiences at trade shows, exhibitions, and corporate events across the UAE.
                            </p>

                            <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100 w-full">
                                <div>
                                    <h4 className="text-3xl font-black text-[var(--color-charcoal)] mb-1 uppercase tracking-tighter">Production</h4>
                                    <p className="text-sm font-bold text-[var(--color-primary-red)] uppercase tracking-[0.2em]">In-House</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-black text-[var(--color-charcoal)] mb-1 uppercase tracking-tighter">Delivery</h4>
                                    <p className="text-sm font-bold text-[var(--color-primary-red)] uppercase tracking-[0.2em]">Fast-Track</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
