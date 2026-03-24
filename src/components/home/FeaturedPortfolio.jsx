import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useLayoutEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPortfolio = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Use a spring to smooth out the raw scroll input for a buttery feel on mobile
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Creative Signage",
            cat: "Production",
            img: isMobile ? "/portfolio/IMG-20250925-WA0009.jpg" : "/portfolio/IMG_20251027_213251.jpg"
        },
        {
            id: 2,
            title: "Exhibition Excellence",
            cat: "Exhibition",
            img: isMobile ? "/portfolio/IMG-20251123-WA0003.jpg" : "/portfolio/IMG_20251027_212825.jpg"
        },
        {
            id: 3,
            title: "Premium Branding",
            cat: "Branding",
            img: isMobile ? "/portfolio/IMG-20251210-WA0034.jpg" : "/portfolio/IMG20251026133146.jpg"
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#0a0a0a]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                <div className="absolute top-20 left-6 md:left-12 z-20 flex justify-between items-center w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter md:mix-blend-difference">Selected Works</h2>
                        <p className="text-gray-400 mt-2 font-light">Horizontal Scroll Experience</p>
                    </div>
                    <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors md:mix-blend-difference">
                        View All <ExternalLink size={16} />
                    </Link>
                </div>

                <motion.div style={{ x }} className="flex gap-10 px-6 md:px-32 pt-20 items-center h-full will-change-transform transform-gpu backface-visibility-hidden">
                    {projects.map((project, idx) => (
                        <div key={project.id} className="relative w-[300px] md:w-[500px] h-[400px] md:h-[600px] shrink-0 rounded-3xl overflow-hidden cursor-default transform-gpu">
                            <div className="absolute inset-0 bg-black/20 z-10" />
                            {isMobile ? (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                                    style={{ backgroundImage: `url(${project.img})` }}
                                />
                            ) : (
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform-gpu"
                                    loading="lazy"
                                    decoding="async"
                                />
                            )}

                            <div className="absolute bottom-10 left-10 z-20">
                                <span className="text-[var(--color-primary-red)] font-bold tracking-[0.2em] uppercase text-xs block mb-2">{project.cat}</span>
                                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{project.title}</h3>
                            </div>
                        </div>
                    ))}

                    <div className="w-[300px] shrink-0 flex items-center justify-center">
                        <Link to="/portfolio" className="text-white hover:text-[var(--color-primary-red)] transition-colors text-2xl font-bold flex flex-col items-center gap-4">
                            Explore More <ArrowRight size={40} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedPortfolio;
