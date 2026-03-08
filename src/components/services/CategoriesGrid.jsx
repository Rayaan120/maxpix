import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoriesGrid = () => {
    const [active, setActive] = useState(0);

    const categories = [
        {
            title: "Exhibition Stand Design",
            desc: "We don't just build booths; we architect immersive brand environments. Our in-house production facility in the UAE ensures every millimeter of your stand reflects the precision of your brand.",
            list: ["Custom Booth Design & 3D Visualization", "Modular & Double-Deck Stand Construction", "LED Walls & Interactive Display Integration", "On-Site Installation & Dismantling Services"],
            image: "/services/exhibition.jpg",
            color: "#E60000",
            slug: "exhibition-stand-design"
        },
        {
            title: "Event Management",
            desc: "From concept to curtain call, we manage every detail of your corporate presence. Our team specializes in high-stakes gala dinners and large-scale trade show logistics.",
            list: ["Corporate Events & Gala Dinners", "Exhibition & Trade Show Management", "Stage Design & Audio-Visual Production", "Venue Coordination & Logistics Management"],
            image: "/services/event.jpg",
            color: "#1a1a1a",
            slug: "event-management"
        },
        {
            title: "Digital Printing",
            desc: "High-definition visual impact that demands attention. We utilize cutting-edge printing technology to produce massive outdoor backdrops and pixel-perfect indoor graphics.",
            list: ["Banners, Backdrops & Roll-Up Stands", "Outdoor & Indoor Signage Printing", "Vehicle Branding & Vinyl Graphics", "Exhibition Graphics & Display Panels"],
            image: "/services/printing.jpg",
            color: "#333",
            slug: "digital-printing"
        },
        {
            title: "Vehicle Graphics",
            desc: "Turn your fleet into a mobile advertising powerhouse. Our professional wrapping service ensures durability and brand consistency across every commercial vehicle.",
            list: ["Full & Partial Vehicle Wraps", "Fleet Branding & Corporate Decals", "Reflective & Safety Vinyl Graphics", "Custom Design, Printing & Installation"],
            image: "/services/vehicle.jpg",
            color: "#222",
            slug: "vehicle-graphics"
        },
        {
            title: "Signage & Wayfinding",
            desc: "Visual landmarks that define your physical presence. We fabricate everything from 3D illuminated channel letters to sophisticated architectural wayfinding systems.",
            list: ["3D Illuminated Channel Letters", "Acrylic, Metal & LED Signboards", "Indoor & Outdoor Directional Signage", "Design, Fabrication & Professional Installation"],
            image: "/services/signage.jpg",
            color: "#E60000",
            slug: "signage-and-wayfinding"
        }
    ];

    return (
        <section className="bg-[var(--color-warm-gray)] py-24 md:py-32 relative z-10 -mt-[3rem] rounded-t-[3rem] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--color-primary-red)] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
                    >
                        Engineering Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--color-charcoal)] leading-[1.1] tracking-tighter"
                    >
                        Capabilities that <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-[var(--color-charcoal)]">redefine spaces.</span>
                    </motion.h2>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 max-w-sm text-lg"
                >
                    Explore our integrated divisions driving the region's most ambitious brand environments.
                </motion.p>
            </div>

            <div className="w-full max-w-[1800px] mx-auto h-[85vh] min-h-[600px] flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 gap-3 md:gap-4 relative z-10">
                {categories.map((cat, idx) => {
                    const isActive = active === idx;
                    return (
                        <div
                            key={idx}
                            onMouseEnter={() => setActive(idx)}
                            onClick={() => setActive(idx)}
                            style={{ flex: isActive ? 6 : 1 }}
                            className={`relative rounded-[2rem] overflow-hidden cursor-pointer group transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)] ${isActive ? 'shadow-[0_0_50px_rgba(230,0,0,0.15)] border border-[var(--color-primary-red)]/30' : 'border border-black/10 hover:border-black/20'}`}
                        >
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${isActive ? 'scale-105 brightness-[0.7]' : 'scale-100 brightness-[0.25] grayscale'}`}
                            />

                            {/* Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                            <div className={`absolute inset-0 transition-opacity duration-1000 mix-blend-multiply ${isActive ? 'bg-[var(--color-primary-red)]/20 opacity-100' : 'bg-black/80 opacity-0'}`} />

                            {/* Inactive Vertical Text (Desktop) */}
                            <div className={`absolute inset-0 hidden lg:flex flex-col items-center justify-end pb-12 transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-70 group-hover:opacity-100'}`}>
                                <h4 className="text-white text-3xl font-black tracking-tighter uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                    {cat.title}
                                </h4>
                            </div>

                            {/* Inactive Horizontal Text (Mobile) */}
                            <div className={`absolute inset-0 flex lg:hidden items-center justify-center p-6 transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-80'}`}>
                                <h4 className="text-white text-xl font-bold tracking-tight text-center">{cat.title}</h4>
                            </div>

                            {/* Active Content */}
                            <div className={`absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end transition-opacity duration-1000 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <motion.div
                                    initial={false}
                                    animate={{ y: isActive ? 0 : 40, opacity: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="bg-[var(--color-primary-red)] w-16 h-1.5 mb-4" />
                                    <h4 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-4 max-w-4xl drop-shadow-2xl">
                                        {cat.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-light leading-relaxed mb-6 max-w-2xl hidden md:block drop-shadow-lg">
                                        {cat.desc}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6 max-w-3xl hidden sm:grid">
                                        {cat.list.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white/90 text-sm md:text-base font-medium">
                                                <div className="w-2 h-2 rounded-full bg-[var(--color-primary-red)] shrink-0 shadow-[0_0_10px_rgba(230,0,0,1)]" />
                                                <span className="drop-shadow-md">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/services/${cat.slug}`}
                                        className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-[var(--color-primary-red)] border border-white/20 hover:border-[var(--color-primary-red)] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 w-fit group/btn backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                                    >
                                        View More
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default CategoriesGrid;
