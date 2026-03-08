import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ServicesHero = () => {
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
            <div className="absolute inset-0 aurora opacity-70" />

            {/* Heavy Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_80%)] z-10 pointer-events-none" />

            {/* Main Content */}
            <motion.div style={{ y: y1, opacity, scale }} className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-[12vw] font-black leading-none tracking-tighter text-outline-dark mix-blend-screen opacity-50 absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center uppercase">
                        STAND BUILDERS & SIGNAGE
                    </h1>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter relative z-10 mt-10 uppercase">
                        DUBAI'S BEST <br />
                        <span className="text-[var(--color-primary-red)] text-4xl md:text-6xl">EXHIBITION STAND BUILDERS</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 max-w-3xl mx-auto"
                >
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        The ultimate destination for exhibition stand builders in Dubai. We specialize in 3D signage fabrication, vehicle branding UAE, and large format digital printing to elevate your brand's presence across the Middle East.
                    </p>
                </motion.div>
            </motion.div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>
    );
};

export default ServicesHero;
