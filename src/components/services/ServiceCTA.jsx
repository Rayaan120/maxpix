import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
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
                className="bg-black w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden origin-bottom"
            >
                {/* Abstract shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-red)]/20 rounded-full blur-[100px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Request a Quote</h2>
                    <h3 className="text-5xl md:text-7xl lg:text-[6vw] font-black text-white tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto">
                        READY TO SCALE <br />YOUR <span className="text-outline">PRESENCE?</span>
                    </h3>
                    <p className="text-xl text-gray-400 font-light mb-12">Submit your CAD drawings or brief for an immediate consultation.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 bg-[var(--color-primary-red)] text-white font-bold text-lg md:text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(230,0,0,0.4)]"
                    >
                        Initiate Project
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServiceCTA;
