import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const PortfolioCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

    return (
        <section ref={containerRef} className="pt-8 md:pt-12 pb-0 bg-[var(--color-warm-gray)] relative overflow-hidden">
            <motion.div
                style={{ scale, borderRadius }}
                className="bg-[#111] w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden origin-bottom border-t border-white/5"
            >
                {/* Cinematic Glow */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[var(--color-primary-red)]/10 to-transparent blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">The Archive</h2>
                    <h3 className="text-5xl md:text-7xl lg:text-[7vw] font-black text-white tracking-tighter leading-none mb-10">
                        EYEING A<br />
                        <span
                            className="inline-block"
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                                color: 'transparent',
                            }}
                        >
                            PARTNERSHIP?
                        </span>
                    </h3>
                    <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto italic">
                        From Burj Khalifa-scale branding to boutique retail interiors, let's discuss your next milestone project.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 bg-[var(--color-primary-red)] text-white font-bold text-lg md:text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(230,0,0,0.2)]"
                    >
                        Initiate Project
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortfolioCTA;
