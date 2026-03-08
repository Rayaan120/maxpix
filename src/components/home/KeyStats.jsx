import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const KeyStats = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    const stats = [
        { title: "1000+", desc: "Happy Clients" },
        { title: "3000+", desc: "Projects" },
        { title: "10+", desc: "Years in UAE" },
        { title: "24/7", desc: "Support Model" },
    ];

    return (
        <section ref={containerRef} className="py-12 md:py-16 bg-[var(--color-warm-gray)] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background massive stroke text moving with scroll */}
            <motion.div style={{ x: x1 }} className="absolute whitespace-nowrap opacity-10 pointer-events-none top-10">
                <h2 className="text-[15vw] font-black text-outline-dark tracking-tighter">
                    METRICS OF TRUST &bull; METRICS OF TRUST
                </h2>
            </motion.div>
            <motion.div style={{ x: x2 }} className="absolute whitespace-nowrap opacity-10 pointer-events-none bottom-10">
                <h2 className="text-[15vw] font-black text-outline-dark tracking-tighter">
                    PROVEN EXPERTISE &bull; PROVEN EXPERTISE
                </h2>
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center">
                {stats.map((stat, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                        key={stat.title}
                        className="flex flex-col text-center"
                    >
                        <h3 className="text-5xl md:text-7xl font-black text-[var(--color-charcoal)] mb-4 tracking-tighter hover:text-[var(--color-primary-red)] transition-colors cursor-default">
                            {stat.title}
                        </h3>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">{stat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyStats;
