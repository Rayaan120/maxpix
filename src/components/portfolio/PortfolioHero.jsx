import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-b-[3rem] shadow-2xl z-20">
            {/* Cinematic Aurora Glow */}
            <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-[var(--color-primary-red)]/20 to-transparent blur-[80px]" />

            {/* Heavy Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] z-10 pointer-events-none" />

            {/* Main Content */}
            <motion.div style={{ y: y1, opacity, scale }} className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-6">Explore the Archive</p>
                    <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-black text-white leading-[0.8] tracking-tighter mb-6">
                        OUR <span className="text-outline">LEGACY.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 max-w-2xl mx-auto"
                >
                    <p className="text-gray-400 text-lg md:text-xl font-light">
                        A curated index of structural signage, architectural environments, and high-impact visual campaigns executed across the Middle East.
                    </p>
                </motion.div>
            </motion.div>

            {/* Abstract Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </section>
    );
};

export default PortfolioHero;
