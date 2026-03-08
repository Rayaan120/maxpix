import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const steps = [
        { num: "01", title: "Discovery & Blueprint", desc: "We begin by dissecting your brand DNA..." },
        { num: "02", title: "Strategic Design", desc: "Translating concepts into structurally sound 3D renders..." },
        { num: "03", title: "In-House Fabrication", desc: "Our state-of-the-art production facility is equipped with advanced precision machinery..." },
        { num: "04", title: "Installation & Handover", desc: "Rigorous safety checks and flawless on-site execution..." }
    ];

    return (
        <section ref={containerRef} className="pt-16 md:pt-20 pb-10 bg-[var(--color-warm-gray)] relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-left mb-10 md:mb-12 max-w-3xl">
                    <h2 className="text-[var(--color-primary-red)] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Execution Engine</h2>
                    <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-[var(--color-charcoal)] leading-tight">
                        How we turn raw concepts into physical reality.
                    </h3>
                </div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-[39px] md:left-[59px] top-0 bottom-0 w-0.5 bg-gray-300 rounded-full">
                        <motion.div
                            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                            className="w-full h-full bg-[var(--color-primary-red)]"
                        />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-16">
                        {steps.map((step, idx) => (
                            <ProcessStep key={step.num} step={step} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, index }) => {
    const stepRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stepRef,
        offset: ["start 60%", "end 40%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const bg = useTransform(scrollYProgress, [0, 0.5, 1], ["#fff", "#0a0a0a", "#fff"]);
    const color = useTransform(scrollYProgress, [0, 0.5, 1], ["#0a0a0a", "#fff", "#0a0a0a"]);

    return (
        <motion.div ref={stepRef} style={{ opacity, scale }} className="flex items-start gap-8 md:gap-16 relative">
            <motion.div
                style={{ backgroundColor: bg, color }}
                className="w-20 h-20 md:w-32 md:h-32 shrink-0 rounded-full flex items-center justify-center font-black text-2xl md:text-5xl tracking-tighter border border-gray-200 z-10 transition-colors duration-300"
            >
                {step.num}
            </motion.div>
            <div className="pt-4 md:pt-8 w-full max-w-2xl">
                <h4 className="text-3xl md:text-4xl font-black text-[var(--color-charcoal)] mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{step.desc}</p>
            </div>
        </motion.div>
    );
};

export default Process;
