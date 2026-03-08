import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
        title: "Custom Stand",
        image: "/hero/1.jpg",
        slug: "custom-stand"
    },
    {
        title: "Modular Stand",
        image: "/services/exhibition.jpg",
        slug: "modular-stand"
    },
    {
        title: "Trade Show Booth",
        image: "/hero/7.jpg",
        slug: "trade-show-booth"
    },
    {
        title: "Country Pavilion",
        image: "/services/event.jpg",
        slug: "country-pavilion"
    }
];

const ExhibitionStandCategoriesSection = () => {
    const navigate = useNavigate();

    return (
        <section className="pt-12 md:pt-16 pb-0 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header Area */}
                <div className="max-w-5xl mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter leading-[1.1] mb-8 uppercase"
                    >
                        We Stand as a Leading <br />
                        <span className="text-[var(--color-primary-red)] text-stroke-thin">Exhibition Stand Builder</span> in Dubai <br />
                        & Booth Design Experts
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl"
                    >
                        We deliver custom exhibition stands and trade show booth design services in Dubai. From concept development to final installation, our team creates visually striking stands that elevate brand presence at exhibitions and trade shows.
                    </motion.p>
                </div>

                {/* Offerings Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            onClick={() => navigate(`/services/${cat.slug}`)}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
                        >
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2 transition-transform duration-500 group-hover:-translate-y-2">
                                    {cat.title}
                                </h3>

                                <div className="absolute bottom-6 right-6">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-all duration-500 shadow-2xl">
                                        <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border-2 border-[var(--color-primary-red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibitionStandCategoriesSection;
