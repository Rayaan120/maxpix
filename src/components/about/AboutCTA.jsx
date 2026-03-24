import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    const motionStyle = isMobile ? { scale: 1, borderRadius: "0px" } : { scale, borderRadius };

    return (
        <section ref={containerRef} className="pt-8 md:pt-12 pb-0 bg-[#f2f0eb] relative overflow-hidden">
            <motion.div
                style={motionStyle}
                className={`bg-[#0a0a0a] w-full min-h-[70vh] md:h-[80vh] flex flex-col items-center justify-center text-center p-6 py-20 md:py-6 relative overflow-hidden origin-bottom will-change-transform transform-gpu ${isMobile ? 'rounded-none' : ''}`}
            >
                {/* Abstract shapes - Disabled on Mobile */}
                {!isMobile && (
                    <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-red)]/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    </>
                )}

                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <h2 className="text-[var(--color-primary-red)] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">Partner with the Experts</h2>
                    <h3 className="text-4xl md:text-7xl lg:text-[7.5vw] font-black text-white tracking-tighter leading-none mb-6 md:mb-10 drop-shadow-2xl uppercase">
                        DUBAI'S BEST <br />
                        <span
                            className="inline-block"
                            style={{
                                WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
                                color: 'transparent',
                                textShadow: '0 0 30px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            STAND BUILDER
                        </span>
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto tracking-tight">
                        Looking for the most reliable exhibition stand builders in Dubai? From premium signage solutions to large format printing, we are your ultimate partner for high-impact branding in the UAE.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-12 py-4 md:py-5 bg-[var(--color-primary-red)] text-white font-bold text-lg md:text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(230,0,0,0.3)]"
                    >
                        Get a Free Quote
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutCTA;
