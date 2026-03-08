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
        <section className="py-4 md:py-6 bg-transparent overflow-hidden flex flex-col items-center justify-center relative z-10">
            {/* Frosted Glass / Platinum Stage */}
            <div className="absolute inset-0 z-[-1] bg-white/70 backdrop-blur-3xl" />

            {/* Light-Catch Borders (Top & Bottom) */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
            <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-30" />

            {/* Subtle Surface Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}
            />

            <div className="relative z-10 flex flex-col items-center mb-2 md:mb-4">
                <span className="text-[var(--color-primary-red)] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Trusted by</span>
                <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter leading-none opacity-90 uppercase">Our Clients</h2>
                <div className="w-12 h-[2px] bg-[var(--color-primary-red)] mt-4 opacity-30" />
            </div>

            <div className="w-full relative flex items-center overflow-hidden h-32 md:h-44">
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
                                    className="h-20 md:h-32 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out brightness-[0.98] saturate-[1.1]"
                                    style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.08))" }}
                                />
                                {/* Soft Material Polish */}
                                <div className="absolute inset-x-[-20%] inset-y-[-10%] bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1]" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBar;
