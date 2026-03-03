import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <footer ref={container} className="relative bg-[#0a0a0a] text-white overflow-hidden clip-path-footer">
            <motion.div style={{ y }} className="w-full relative min-h-screen flex flex-col justify-end pt-32 pb-8">

                {/* Glow Effects */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[var(--color-primary-red)]/20 rounded-t-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center mb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="max-w-xl">
                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Ready to make your brand <span className="text-[var(--color-primary-red)] italic">impossible</span> to ignore?
                            </h3>
                            <p className="text-xl text-gray-400 mb-12">
                                Drop us a line or visit our fabrication facility in Dubai.
                            </p>

                            <a href="mailto:info@maxpixad.com" className="inline-flex items-center gap-4 text-2xl md:text-3xl hover:text-[var(--color-primary-red)] transition-colors group">
                                info@maxpixad.com
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--color-primary-red)] transition-colors">
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-8 text-sm md:text-base text-gray-400">
                            <div className="flex flex-col gap-4">
                                <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Navigate</span>
                                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Socials</span>
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-white transition-colors">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Typography */}
                <div className="w-full relative flex items-center justify-center overflow-hidden h-[20vh] md:h-[40vh] border-t border-white/5 pt-8 z-10">
                    <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white opacity-90 select-none text-center">
                        MAXPIX
                    </h1>
                    {/* Outline overlay */}
                    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-8 text-[15vw] font-black leading-none tracking-tighter text-outline select-none pointer-events-none w-full text-center">
                        MAXPIX
                    </h1>
                </div>

                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-8 relative z-10">
                    <p>&copy; {new Date().getFullYear()} MAXPIX Advertising LLC.</p>
                    <div className="flex gap-4">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>

            </motion.div>
        </footer>
    );
};

export default Footer;
