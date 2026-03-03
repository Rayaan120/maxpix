import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-b-[3rem] shadow-2xl z-20">
            {/* Cinematic Aurora Glow */}
            <div className="absolute inset-0 aurora opacity-60" />

            {/* Heavy Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] z-10 pointer-events-none" />

            {/* Main Content */}
            <motion.div style={{ y: y1, opacity, scale }} className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <h1 className="text-[14vw] font-black leading-none tracking-tighter text-outline-dark mix-blend-screen opacity-50 absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center selection:bg-transparent">
                        WE ARE
                    </h1>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mix-blend-difference relative z-10 mt-8 md:mt-12 w-full text-center">
                        DUBAI'S LEADING <br />
                        <span className="text-[var(--color-primary-red)]">CREATIVE AGENCY.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 max-w-2xl mx-auto"
                >
                    <p className="text-gray-400 text-lg md:text-xl font-light">
                        Dubai's premier destination for high-end branding, architectural signage, and premium fabrication. We transform the physical and digital landscape of elite brands across the Middle East.
                    </p>
                </motion.div>
            </motion.div>

            {/* Abstract Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </section>
    );
};

export default AboutHero;
