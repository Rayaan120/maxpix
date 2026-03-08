import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const DigitalPrintingCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

    return (
        <section ref={containerRef} className="pt-0 pb-0 bg-[var(--color-warm-gray)] relative overflow-hidden">
            <motion.div
                style={{ scale, borderRadius }}
                className="bg-[#0a0a0a] w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden origin-bottom"
            >
                {/* Abstract high-end visual elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-red)]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.4em] mb-6">Pixel-Perfect Scale</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-10 drop-shadow-2xl uppercase">
                        Large Format <br />
                        <span
                            className="inline-block"
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
                                color: 'transparent',
                                textShadow: '0 0 30px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            Digital Printing Solutions
                        </span>
                        <br /> in Dubai
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-400 font-light mb-12 max-w-4xl mx-auto tracking-tight leading-relaxed">
                        Bring your ideas to life with high-quality large format digital printing. Share your printing requirements with our team for a quick consultation and tailored printing solutions.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 bg-[var(--color-primary-red)] text-white font-bold text-lg md:text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(230,0,0,0.4)]"
                    >
                        Request a Printing Quote
                    </Link>
                </motion.div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-red)]/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default DigitalPrintingCTA;
