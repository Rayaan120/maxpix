import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // BACKGROUND SLIDES
    const slides = [
        {
            url: "/hero/1.jpg",
            caption: "The UAE's Premium Creative Agency",
            title: <>Custom Exhibition Stand Builders & Contractors in <br /> Dubai, UAE</>,
            description: "Top-rated exhibition stand design and build company in Dubai offering custom booth fabrication, modular exhibition stands, LED walls, and turnkey trade show solutions across UAE."
        },
        {
            url: "/hero/2.jpg",
            caption: "Innovative Signage Solutions",
            title: <>Turnkey Exhibition Stand Design, Fabrication & Event Production Services in  <br /> Dubai, UAE</>,
            description: "Professional exhibition stand design and build company in Dubai specializing in custom booth fabrication, modular stands, LED walls, and full-service event production across UAE."
        },
        {
            url: "/hero/3.jpg",
            caption: "Strategic Brand Identity",
            title: <>Corporate Events & Live Stage Production Services Across  <br /> Dubai, UAE</>,
            description: "Dubai-based corporate event production company providing full-service event planning, stage design, audio-visual production, exhibition management, and logistics solutions in UAE."
        },
        {
            url: "/hero/4.jpg",
            caption: "Advanced Fabrication",
            title: <>Bespoke Custom Stand Design that define  <br />your brand</>,
            description: "Custom-designed exhibition stands that transform your brand into a powerful trade show experience, integrating creative booth design, innovative display solutions, and premium stand fabrication for maximum impact."
        },
        {
            url: "/hero/5.jpg",
            caption: "Your Vision, Our Reality",
            title: <>Professional Exhibition Stand Fabrication Company in  <br />Dubai, UAE</>,
            description: "Precision Fabrication for High-Impact Exhibition & Brand Environments in UAE."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, [slides.length]);

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
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
            <motion.div
                style={{ y: y1, opacity: opacityTransform, scale: scaleTransform }}
                className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full"
            >
                <div className="relative w-full max-w-6xl h-[400px] flex items-center justify-center">
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(20px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, scale: 1.05, filter: "blur(20px)" }}
                            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 drop-shadow-md">
                                {slides[currentIndex].caption}
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-[5.5vw] font-black text-white leading-[0.9] tracking-tighter mb-6 relative drop-shadow-2xl">
                                {slides[currentIndex].title}
                            </h1>
                            <p className="text-gray-100/80 text-base md:text-lg max-w-2xl font-light drop-shadow-lg mx-auto">
                                {slides[currentIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
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
