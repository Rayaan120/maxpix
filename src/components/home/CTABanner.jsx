import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

    return (
        <section ref={containerRef} className="pt-10 md:pt-16 pb-0 bg-[var(--color-warm-gray)] relative overflow-hidden">
            <motion.div
                style={{ scale, borderRadius }}
                className="bg-[var(--color-primary-red)] w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden origin-bottom"
            >
                {/* Abstract shapes */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-black text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
                        PREMIER EXHIBITION <br />
                        <span
                            className="inline-block"
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.7)',
                                color: 'rgba(255, 255, 255, 0.1)',
                                textShadow: '0 0 30px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            STAND BUILDER
                        </span>
                    </h2>
                    <p className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-medium tracking-tight leading-relaxed drop-shadow-lg">
                        Innovative exhibition stand design, custom signage fabrication, and corporate event production services across Dubai & the UAE.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 bg-white text-[var(--color-charcoal)] font-bold text-lg md:text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                        Get a Free Proposal
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTABanner;
