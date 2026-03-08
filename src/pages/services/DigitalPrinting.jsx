import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Printer, Layers, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import DigitalPrintingCTA from '../../components/services/DigitalPrintingCTA';

const DigitalPrinting = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Large Format Digital Printing Dubai | MAXPIX"
                description="High-resolution large format digital printing services in Dubai for banners, backdrops, outdoor signage, and exhibition graphics."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] min-h-[80vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/services/printing.jpg"
                        alt="Digital Printing Dubai"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <Link to="/services" className="text-[var(--color-primary-red)] font-bold tracking-widest uppercase text-xs mb-6 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                            <ArrowRight size={14} className="rotate-180" /> Back to Services
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8 uppercase">
                            Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                Printing
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
                            Massive scale, pixel-perfect precision. We utilize cutting-edge printing technology to produce high-definition outdoor backdrops and premium indoor brand graphics.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-[var(--color-primary-red)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[var(--color-primary-red)] transition-colors inline-flex items-center gap-2"
                            >
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-12 md:py-20 bg-white relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] tracking-tighter leading-tight mb-8"
                            >
                                Visual Impact <br />at Scale.
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="prose prose-lg text-gray-600 font-light"
                            >
                                <p className="mb-6">
                                    Quality printing is the foundation of physical brand visibility. At MAXPIX, we combine high-speed industrial printing with surgical attention to color accuracy. Whether it's a 20-meter building wrap or an elegant exhibition backdrop, we ensure every pixel reflects your brand's excellence.
                                </p>
                                <p>
                                    Our in-house production setup allows us to manage tight deadlines without compromising on durability, using premium UV-resistant inks and high-grade materials optimized for the GCC environment.
                                </p>

                                {/* Keywords Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                                    {[
                                        "Large Format Printing",
                                        "Vehicle Branding Dubai",
                                        "Indoor & Outdoor Banners",
                                        "Exhibition Graphics",
                                        "Custom Wallpaper Printing"
                                    ].map((keyword, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group">
                                            <div className="w-6 h-6 rounded bg-[var(--color-primary-red)] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(230,0,0,0.3)] group-hover:scale-110 transition-transform">
                                                <Check size={14} className="text-white stroke-[3px]" />
                                            </div>
                                            <span className="text-[var(--color-charcoal)] font-bold text-lg tracking-tight">{keyword}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/hero/4.jpg" alt="Large Format Printing" className="rounded-2xl w-full h-64 object-cover" />
                                <img src="/services/printing.jpg" alt="Exhibition Graphics" className="rounded-2xl w-full h-64 object-cover mt-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Offerings Grid */}
            <section className="py-12 md:py-20 bg-[var(--color-warm-gray)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter uppercase">Printing Solutions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Banners & Backdrops", desc: "Massive scale prints for events, trade shows, and outdoor advertising with reinforced finishings.", icon: <Printer size={32} /> },
                            { title: "Indoor Graphics", desc: "Wall murals, frosted glass vinyls, and high-definition photo prints for luxury interiors.", icon: <Image size={32} /> },
                            { title: "Exhibition Graphics", desc: "Stretch fabric prints, light-box inserts, and high-quality rigid board printing for booth design.", icon: <Layers size={32} /> },
                        ].map((offering, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-[var(--color-primary-red)]/10 text-[var(--color-primary-red)] rounded-2xl flex items-center justify-center mb-6">
                                    {offering.icon}
                                </div>
                                <h3 className="text-2xl font-black text-[var(--color-charcoal)] mb-4">{offering.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{offering.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-[var(--color-primary-red)] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-charcoal)] tracking-tighter uppercase">Precision workflow.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Artwork Audit", desc: "Technical review of your files to ensure resolution and color profile perfection." },
                            { step: "02", title: "Material Selection", desc: "Choosing the optimal substrate from high-grade vinyl to tension fabrics." },
                            { step: "03", title: "Industrial Print", desc: "High-speed, high-resolution production using our premium machine fleet." },
                            { step: "04", title: "Lamination & Finish", desc: "Protective coating and professional welding or eyelet application." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-6xl font-black text-gray-100 mb-4 group-hover:text-[var(--color-primary-red)] transition-colors duration-500">{item.step}</div>
                                <h4 className="text-xl font-black text-[var(--color-charcoal)] mb-3">{item.title}</h4>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <DigitalPrintingCTA />
        </div>
    );
};

export default DigitalPrinting;
