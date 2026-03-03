import { motion } from 'framer-motion';

const TrustBar = () => {
    // Expected logo paths in public/logos/
    const partners = [
        { id: 1, name: "Partner 1", logo: "/logos/1.png" },
        { id: 2, name: "Partner 2", logo: "/logos/2.png" },
        { id: 3, name: "Partner 3", logo: "/logos/3.png" },
        { id: 4, name: "Partner 4", logo: "/logos/4.png" },
        { id: 5, name: "Partner 5", logo: "/logos/5.png" },
        { id: 6, name: "Partner 6", logo: "/logos/6.png" },
        { id: 7, name: "Partner 7", logo: "/logos/7.png" },
        { id: 8, name: "Partner 8", logo: "/logos/8.png" },
        { id: 9, name: "Partner 9", logo: "/logos/9.png" },
        { id: 10, name: "Partner 10", logo: "/logos/10.png" },
        { id: 11, name: "Partner 11", logo: "/logos/11.png" },
        { id: 12, name: "Partner 12", logo: "/logos/12.png" },
        { id: 13, name: "Partner 13", logo: "/logos/13.png" },
        { id: 14, name: "Partner 14", logo: "/logos/14.png" },
        { id: 15, name: "Partner 15", logo: "/logos/15.png" },
        { id: 16, name: "Partner 16", logo: "/logos/16.png" },
        { id: 17, name: "Partner 17", logo: "/logos/17.png" }
    ];

    return (
        <section className="py-4 md:py-6 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center border-y border-white/5 relative z-10">
            <div className="w-full relative flex items-center overflow-hidden h-40 md:h-56">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                    className="flex whitespace-nowrap items-center"
                >
                    {/* Double arrays for seamless looping: 0% to -50% covers one full set */}
                    {[...partners, ...partners].map((partner, idx) => (
                        <div key={`trust-${idx}`} className="flex items-center group px-20 md:px-32 min-w-[350px] md:min-w-[500px] justify-center">
                            <div className="relative">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-20 md:h-32 w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                {/* Subtle Glow on hover */}
                                <div className="absolute inset-0 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;
