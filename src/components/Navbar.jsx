import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle dark mode logic based on route for the dock blending
    const isDarkPage = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/services';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    const textColor = isScrolled || !isDarkPage ? 'text-white' : 'text-white';
    const inactiveTextColor = isScrolled || !isDarkPage ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white';

    const handleNavClick = (path) => {
        setMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <>
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[92%] md:w-auto">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-center justify-between gap-6 md:gap-12 px-2 py-2 rounded-full transition-all duration-700 ${isScrolled
                        ? 'bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]'
                        : 'bg-black/20 backdrop-blur-md border border-white/5'
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group pl-4">
                        <motion.div
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="w-8 h-8 rounded-full bg-[var(--color-primary-red)] flex items-center justify-center text-white font-bold text-sm"
                        >
                            MA
                        </motion.div>
                        <span className={`text-lg font-black tracking-tighter ${textColor} leading-none hidden sm:block pt-1`}>MAXPIX</span>
                    </Link>

                    {/* Desktop Nav with Magnetic Active State */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.name} className="relative">
                                        <Link
                                            to={link.path}
                                            className={`relative z-10 px-5 py-2.5 flex items-center text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-white' : inactiveTextColor
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNavIndicator"
                                                className="absolute inset-0 bg-white/10 border border-white/10 rounded-full z-0 pointer-events-none"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* CTA / Menu Button */}
                    <div className="flex items-center gap-2 pr-2">
                        <Link
                            to="/contact"
                            className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-primary-red)] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Start Project <ArrowUpRight size={14} />
                        </Link>

                        <button
                            className={`md:hidden p-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md transition-colors hover:bg-white/20 ${textColor}`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </motion.div>
            </header>

            {/* Premium Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] bg-[#050505] flex flex-col justify-between px-8 py-12 overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute inset-0 aurora opacity-20 pointer-events-none" />

                        {/* Header */}
                        <div className="flex justify-between items-center relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-red)] flex items-center justify-center text-white font-bold text-sm">
                                    MA
                                </div>
                                <span className="text-white text-lg font-black tracking-tighter pt-1">MAXPIX</span>
                            </div>
                            <button
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex flex-col gap-6 mt-12 relative z-10 flex-1 justify-center">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <button
                                            onClick={() => handleNavClick(link.path)}
                                            className={`text-5xl sm:text-7xl font-black tracking-tighter flex items-center gap-6 group transition-colors text-left w-full ${isActive ? 'text-white' : 'text-gray-600 hover:text-gray-300'
                                                }`}
                                        >
                                            <span className={`text-sm font-bold tracking-[0.3em] font-sans uppercase mb-4 transition-colors ${isActive ? 'text-[var(--color-primary-red)]' : 'text-gray-700 group-hover:text-gray-500'}`}>
                                                0{i + 1}
                                            </span>
                                            {link.name}
                                        </button>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* Footer Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                            className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-4"
                        >
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Inquiries</p>
                                <a href="mailto:info@maxpixad.com" className="text-white text-sm hover:text-[var(--color-primary-red)] transition-colors">info@maxpixad.com</a>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Call Us</p>
                                <a href="tel:+97144528333" className="text-white text-sm hover:text-[var(--color-primary-red)] transition-colors">+971 4 452 8333</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
