import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioGrid = () => {
    // Dynamic mapping for all 169 project images from public/portfolio/
    const portfolioImages = [
        "1.jpg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpeg",
        "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
        "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
        "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
        "IMG-20250925-WA0009.jpg", "IMG-20250925-WA0010.jpg", "IMG-20251008-WA0000.jpg", "IMG-20251017-WA0004.jpg",
        "IMG-20251017-WA0005.jpg", "IMG-20251017-WA0006.jpg", "IMG-20251017-WA0007.jpg", "IMG-20251017-WA0008.jpg",
        "IMG-20251017-WA0009.jpg", "IMG-20251017-WA0010.jpg", "IMG-20251017-WA0011.jpg", "IMG-20251017-WA0012.jpg",
        "IMG-20251017-WA0013.jpg", "IMG-20251017-WA0014.jpg", "IMG-20251017-WA0015.jpg", "IMG-20251017-WA0016.jpg",
        "IMG-20251017-WA0017.jpg", "IMG-20251017-WA0018.jpg", "IMG-20251017-WA0019.jpg", "IMG-20251017-WA0020.jpg",
        "IMG-20251017-WA0021.jpg", "IMG-20251017-WA0022.jpg", "IMG-20251017-WA0023.jpg", "IMG-20251017-WA0025.jpg",
        "IMG-20251017-WA0027.jpg", "IMG-20251017-WA0028.jpg", "IMG-20251017-WA0029.jpg", "IMG-20251017-WA0031.jpg",
        "IMG-20251017-WA0032.jpg", "IMG-20251017-WA0033.jpg", "IMG-20251017-WA0034.jpg", "IMG-20251017-WA0035.jpg",
        "IMG-20251017-WA0036.jpg", "IMG-20251017-WA0040.jpg", "IMG-20251017-WA0042.jpg", "IMG-20251017-WA0043.jpg",
        "IMG-20251017-WA0044.jpg", "IMG-20251017-WA0045.jpg", "IMG-20251017-WA0046.jpg", "IMG-20251123-WA0003.jpg",
        "IMG-20251123-WA0004.jpg", "IMG-20251123-WA0005.jpg", "IMG-20251123-WA0006.jpg", "IMG-20251123-WA0007.jpg",
        "IMG-20251210-WA0034.jpg", "IMG-20251210-WA0035.jpg", "IMG-20251210-WA0036.jpg", "IMG-20251210-WA0038.jpg",
        "IMG-20251210-WA0040.jpg", "IMG-20251210-WA0042.jpg",
        "IMG20241214153053.jpg", "IMG20241214153644_01.jpg", "IMG20241214153656.jpg", "IMG20250126151731.jpg",
        "IMG20250126153646.jpg", "IMG20250126173819.jpg", "IMG20250126180540.jpg", "IMG20250202143630.jpg",
        "IMG20250202143702.jpg", "IMG20250202143734.jpg", "IMG20250202163555.jpg", "IMG20250202171257.jpg",
        "IMG20250202171310.jpg", "IMG20250215200448.jpg", "IMG20250215212906.jpg", "IMG20250216120026.jpg",
        "IMG20250216120027.jpg", "IMG20250216121442.jpg", "IMG20250216123124.jpg", "IMG20250216123139.jpg",
        "IMG20250216123804.jpg", "IMG20250216150307.jpg", "IMG20250216160151.jpg", "IMG20250406131923.jpg",
        "IMG20250406144929.jpg", "IMG20250406163540.jpg", "IMG20250406181641.jpg", "IMG20250407192240.jpg",
        "IMG20250923221808.jpg", "IMG20250923221912.jpg", "IMG20251004211413.jpg", "IMG20251004214850.jpg",
        "IMG20251005114036.jpg", "IMG20251011221853.jpg", "IMG20251011221859.jpg", "IMG20251026133056.jpg",
        "IMG20251026133107.jpg", "IMG20251026133146.jpg", "IMG20251026133253.jpg", "IMG20251026133301.jpg",
        "IMG20251106053621.jpg", "IMG20251107033555.jpg", "IMG20251107033717.jpg", "IMG20251107034210.jpg",
        "IMG20251107034216.jpg", "IMG20251107034226.jpg", "IMG20251107034353.jpg", "IMG20251107034357.jpg",
        "IMG20251107034404.jpg", "IMG20251107034533.jpg", "IMG20251107034550.jpg", "IMG20251107034607.jpg",
        "IMG20251107034646.jpg", "IMG20251107034914.jpg", "IMG20251123164614.jpg", "IMG_20251027_212720.jpg",
        "IMG_20251027_212825.jpg", "IMG_20251027_212840.jpg", "IMG_20251027_212946.jpg", "IMG_20251027_213046.jpg",
        "IMG_20251027_213107.jpg", "IMG_20251027_213122.jpg", "IMG_20251027_213135.jpg", "IMG_20251027_213146.jpg",
        "IMG_20251027_213156.jpg", "IMG_20251027_213213.jpg", "IMG_20251027_213225.jpg", "IMG_20251027_213238.jpg",
        "IMG_20251027_213251.jpg", "IMG_20251027_213302.jpg", "IMG_20251027_213331.jpg", "IMG_20251027_213339.jpg",
        "IMG_20251027_213353.jpg", "IMG_20251027_213402.jpg", "IMG_20251027_213415.jpg", "IMG_20251027_213427.jpg",
        "IMG_20251027_213437.jpg", "IMG_20251027_213449.jpg", "IMG_20251027_213509.jpg"
    ];

    const projects = portfolioImages.map((fileName, index) => ({
        id: index + 1,
        image: `/portfolio/${fileName}`
    }));

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = useCallback(() => {
        setSelectedIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const handlePrev = useCallback(() => {
        setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [projects.length]);

    // Prevent background scrolling and handle key navigation
    useEffect(() => {
        if (selectedIndex !== null) {
            // Hard lock scroll for both html and body to ensure zero background movement
            const originalHtmlOverflow = document.documentElement.style.overflow;
            const originalBodyOverflow = document.body.style.overflow;
            const originalBodyHeight = document.body.style.height;

            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';

            const handleKeyDown = (e) => {
                if (e.key === 'ArrowRight') handleNext();
                if (e.key === 'ArrowLeft') handlePrev();
                if (e.key === 'Escape') setSelectedIndex(null);
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.documentElement.style.overflow = originalHtmlOverflow;
                document.body.style.overflow = originalBodyOverflow;
                document.body.style.height = originalBodyHeight;
            };
        }
    }, [selectedIndex, handleNext, handlePrev]);

    return (
        <>
            <section className="pt-20 pb-10 bg-[var(--color-warm-gray)] relative z-10 -mt-[3rem] rounded-t-[3rem]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-10">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                    >
                        <AnimatePresence>
                            {projects.map((project, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                                    key={project.id}
                                    className="relative overflow-hidden rounded-[2rem] bg-[#111] aspect-[3/2] group"
                                >
                                    <img
                                        src={project.image}
                                        alt={`Portfolio project ${project.id}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay / View Button */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                                        <button
                                            onClick={() => setSelectedIndex(idx)}
                                            className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-primary-red)] hover:text-white"
                                        >
                                            <Maximize2 size={18} />
                                            View Full Image
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightweight Image Lightbox with Navigation - Outside section for absolute positioning */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 mb-0"
                    >
                        <div
                            className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
                            onClick={() => setSelectedIndex(null)}
                        />

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="absolute left-4 md:left-8 z-[110] w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="absolute right-4 md:right-8 z-[110] w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.9, opacity: 0, x: -20 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center z-10"
                        >
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <img
                                src={projects[selectedIndex].image}
                                alt={`Full view ${selectedIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                            />
                        </motion.div>

                        {/* Image Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 border border-white/10 rounded-full text-white/70 text-sm font-mono tracking-tighter z-[110]">
                            {selectedIndex + 1} / {projects.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioGrid;
