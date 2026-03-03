import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const OurStory = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-[var(--color-warm-gray)] relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Sticky or static Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4"
                        >
                            The MAXPIX Methodology
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-charcoal)] leading-[1.1] tracking-tighter mb-8"
                        >
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-charcoal)] to-gray-400">
                                Brand Spaces.
                            </span>
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-lg text-gray-600 font-light"
                        >
                            <p className="mb-6">
                                We do not just build exhibition stands; we architect immersive environments. Our methodology is rooted in the seamless integration of bold commercial design and uncompromising fabrication quality.
                            </p>
                            <p className="mb-8">
                                From premium corporate events across the UAE to large-scale structural signage, our approach ensures your physical presence is as powerful as your brand's ambitions. We deploy cutting-edge production technology and meticulous on-site execution to deliver spaces that demand attention and drive engagement.
                            </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-3">
                            {["Custom Fabrication", "Exhibition Design", "Brand Environments", "Event Production"].map((tag, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="px-5 py-2.5 rounded-full border border-gray-300 text-[var(--color-charcoal)] text-sm font-bold uppercase tracking-wider hover:border-[var(--color-primary-red)] hover:text-[var(--color-primary-red)] transition-colors cursor-default bg-white/50"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract Cinematic Visuals */}
                    <div className="relative h-[500px] md:h-[600px] w-full rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden group shadow-2xl">
                        <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
                            <img
                                src="/hero/2.jpg"
                                alt="Premium Exhibition Stand Fabrication and Design in UAE"
                                className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-red)]/30 to-transparent mix-blend-multiply" />

                        {/* Glassmorphism Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-8 right-8 left-8 md:left-auto bg-black/40 backdrop-blur-xl border border-white/20 p-8 rounded-2xl md:min-w-[300px]"
                        >
                            <div className="text-white text-3xl font-black tracking-tight mb-2">Unmatched Scale</div>
                            <div className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
                                Integrated UAE <br /> Production Facility
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;
