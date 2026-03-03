import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProcessStrip = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        { num: '01', title: "Consultation & Audit", desc: "We map out your spatial and visual requirements, identifying friction points in your current brand presence and defining the structural scope.", color: "#111" },
        { num: '02', title: "Technical Blueprinting", desc: "Detailed CAD drawings, material stress-testing, and 3D architectural renders to ensure the vision survives physical fabrication.", color: "#1a1a1a" },
        { num: '03', title: "Precision Fabrication", desc: "Our 10,000 sq.ft facility utilizes CNC routers, laser cutters, and premium-grade steel/acrylic to forge your assets.", color: "#222" },
        { num: '04', title: "Deployment & Setup", desc: "Our certified installation teams execute the rollout across any environment, strictly adhering to international safety protocols.", color: "#E60000" }
    ];

    return (
        <section ref={containerRef} className="py-20 relative bg-[#0a0a0a] min-h-[400vh]">

            <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-[100px] pb-8 md:pb-12">
                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 md:mb-12 text-center">
                        THE <span className="text-[var(--color-primary-red)]">METHOD.</span>
                    </h2>

                    <div className="relative w-full max-w-4xl mx-auto h-[360px] md:h-[400px]">
                        {steps.map((step, idx) => {
                            // Each card arrives in its own 25% window
                            const start = idx * 0.25;
                            const end = (idx + 1) * 0.25;

                            // Scale down slightly as scroll continues after the card has arrived
                            const targetScale = 1 - ((steps.length - 1 - idx) * 0.03);
                            const stepScale = useTransform(scrollYProgress, [start, 1], [1, targetScale]);

                            // Move from bottom (100%) to top (0%) during its window
                            const yOffset = useTransform(scrollYProgress, [start - 0.1, start], ["100%", "0%"]);
                            const opacity = useTransform(scrollYProgress, [start - 0.1, start], [0, 1]);

                            return (
                                <motion.div
                                    key={step.num}
                                    style={{
                                        scale: stepScale,
                                        y: idx === 0 ? 0 : yOffset,
                                        opacity: idx === 0 ? 1 : opacity,
                                        zIndex: 10 + idx,
                                        backgroundColor: step.color,
                                        transformOrigin: 'top center'
                                    }}
                                    className="absolute inset-0 w-full h-full rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between border border-white/5 overflow-hidden"
                                >
                                    {/* Glass reflection effect */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                                    <div className="flex justify-between items-start relative z-10">
                                        <span className={`text-6xl md:text-8xl font-black ${idx === steps.length - 1 ? 'text-white' : 'text-white/10'}`}>
                                            {step.num}
                                        </span>
                                        {idx === steps.length - 1 && (
                                            <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                                        )}
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                                        <p className={`text-lg md:text-xl font-light ${idx === steps.length - 1 ? 'text-white/90' : 'text-gray-400'} max-w-2xl`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Background Typography */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-5">
                    <h2 className="text-[20vw] font-black leading-none text-white tracking-tighter mix-blend-overlay">PROCESS</h2>
                </div>
            </div>

        </section>
    );
};

export default ProcessStrip;
