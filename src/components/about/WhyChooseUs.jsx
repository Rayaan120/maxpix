import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="py-10 md:py-14 bg-[#f2f0eb] relative overflow-hidden">
            {/* Abstract Parallax Elements - Higher contrast for premium feel */}
            <motion.div style={{ y: y1 }} className="absolute -left-20 top-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white opacity-50 rounded-full blur-[120px] pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute -right-20 bottom-20 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[var(--color-primary-red)]/5 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-[#0a0a0a] leading-[0.85] tracking-tighter mb-6">
                                WHY <br />
                                <span
                                    className="text-outline-dark block"
                                    style={{
                                        WebkitTextStroke: '2px rgba(10,10,10,0.3)',
                                        textShadow: '0 0 20px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    PARTNER
                                </span>
                                WITH US?
                            </h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 max-w-xl">
                                We own the entire process. No outsourcing, no excuses. From the moment you hand us the brief to the final safety sign-off, MAXPIX controls every millimeter of the production lifecycle.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                                    <span className="block text-6xl font-black text-[var(--color-primary-red)] tracking-tighter mb-2">10k<span className="text-2xl text-[#0a0a0a] lowercase">sq.ft</span></span>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">In-house Facility</p>
                                </div>
                                <div className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                                    <span className="block text-6xl font-black text-[var(--color-primary-red)] tracking-tighter mb-2">100%</span>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Process Control</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 w-full relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0a0a0a] aspect-square md:aspect-video lg:aspect-square">
                            <img
                                src="/hero/1.jpg"
                                alt="Fabrication process"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 pointer-events-none" />
                        </div>

                        {/* Floating Info card - Centered/Adjusted for Mobile */}
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute -bottom-8 left-8 right-8 md:right-auto md:-left-16 md:bottom-12 z-20 bg-white/90 backdrop-blur-2xl border border-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:max-w-xs"
                        >
                            <h4 className="font-black text-xl mb-2 text-[#0a0a0a] uppercase tracking-tighter">The MAXPIX Standard</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">Advanced manufacturing processes ensuring durability in demanding GCC climate conditions.</p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
