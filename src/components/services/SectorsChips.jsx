import { motion } from 'framer-motion';
import { useState, useLayoutEffect } from 'react';

const SectorsChips = () => {
    const sectors = [
        "RETAIL & FRANCHISE", "HOSPITALITY", "CORPORATE FLEETS", "EXHIBITIONS", "GOVERNMENT", "REAL ESTATE", "F&B OUTLETS"
    ];

    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displaySectors = isMobile ? [...sectors, ...sectors] : [...sectors, ...sectors, ...sectors];

    return (
        <section className="pt-4 md:pt-6 pb-8 md:pb-12 bg-[var(--color-warm-gray)] overflow-hidden flex flex-col gap-12 border-y border-white/10">
            <div className="container mx-auto px-6 md:px-12 text-center mb-10">
                <h2 className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Sectors Engaged</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] leading-tight tracking-tighter">
                    Built for every environment.
                </h3>
            </div>

            <div className="w-full relative flex items-center overflow-hidden">
                <motion.div
                    animate={{ x: isMobile ? [0, -1000] : [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: isMobile ? 15 : 30 }}
                    className="flex whitespace-nowrap will-change-transform transform-gpu"
                >
                    {/* Forward Scroll */}
                    {displaySectors.map((sector, idx) => (
                        <div key={idx} className="flex items-center">
                            <span className={`text-5xl md:text-8xl font-black text-outline-dark mx-8 tracking-widest select-none cursor-default transition-all duration-300 ${isMobile ? '' : 'hover:text-[var(--color-charcoal)] hover:-webkit-text-stroke-[0px]'}`}>
                                {sector}
                            </span>
                            <span className="text-[var(--color-primary-red)] text-4xl">&bull;</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="w-full relative flex items-center overflow-hidden">
                <motion.div
                    animate={{ x: isMobile ? [-1000, 0] : [-2000, 0] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: isMobile ? 20 : 40 }}
                    className="flex whitespace-nowrap will-change-transform transform-gpu"
                >
                    {/* Reverse Scroll */}
                    {displaySectors.map((sector, idx) => (
                        <div key={`rev-${idx}`} className="flex items-center">
                            <span className={`text-5xl md:text-8xl font-black text-outline-dark mx-8 tracking-widest select-none cursor-default transition-all duration-300 opacity-50 ${isMobile ? '' : 'hover:text-[var(--color-charcoal)] hover:-webkit-text-stroke-[0px]'}`}>
                                {sector}
                            </span>
                            <span className="text-[var(--color-primary-red)] text-4xl opacity-50">&bull;</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SectorsChips;
