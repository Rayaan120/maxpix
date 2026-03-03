import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // BACKGROUND IMAGES - User will replace these with uploaded images
    // Example if you named them 1.jpg, 2.jpg... inside a 'hero' folder
    const images = [
        "/hero/1.jpg",
        "/hero/2.jpg",
        "/hero/3.jpg",
        "/hero/4.jpg",
        "/hero/5.jpg"
    ];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, [images.length]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
            {/* Slideshow Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                </AnimatePresence>
            </div>

            {/* Cinematic Aurora Glow */}
            <div className="absolute inset-0 aurora opacity-40 z-1" />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/40 z-5" />

            {/* Heavy Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)] z-10 pointer-events-none" />

            {/* Main Content */}
            <motion.div style={{ y: y1, opacity: opacityTransform, scale: scaleTransform }} className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
                        The UAE's Premium Creative Agency
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-black text-white leading-[0.9] tracking-tighter mb-6 relative drop-shadow-2xl">
                        WE ENGINEER <br />
                        <span
                            className="inline-block"
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
                                color: 'rgba(255, 255, 255, 0.1)',
                                textShadow: '0 0 40px rgba(255, 255, 255, 0.15)'
                            }}
                        >
                            ATTENTION.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-gray-100/80 text-lg md:text-xl max-w-2xl font-light drop-shadow-lg"
                >
                    Bridging the gap between visionary design and flawless physical fabrication. Branding, signage & monumental structures.
                </motion.p>
            </motion.div>

            {/* Scroll Down Island Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Scroll</span>
                <div className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/50 transition-colors bg-white/5 backdrop-blur-md">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-[var(--color-primary-red)] rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
