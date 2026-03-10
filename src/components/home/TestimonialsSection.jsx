import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        id: 1,
        quote: "We recently worked with this amazing team for our wall branding at the Accessibilities Expo, and they truly delivered beyond expectations!",
        name: "AMAL TECHNOLOGIES",
        company: "Google Review"
    },
    {
        id: 2,
        quote: "We got printing while we were in Pakistan. It was a very smooth experience and reasonable price and the team was always available to respond to our queries. Thank you maxpix!",
        name: "Khola Lakhani",
        company: "Google Review"
    },
    {
        id: 3,
        quote: "We have been taking service from Maxpix for 3 years for the Ism Middle East show and we are satisfied with the results.",
        name: "celal alçınkaya",
        company: "Google Review"
    },
    {
        id: 4,
        quote: "We recently worked with Maxpix Advertising LLC for our ArabPlast 2025 Expo preparations, and they exceeded our expectations. They provided us with high-quality vinyl pasting, a stunning TV set, and other essential materials for the event.",
        name: "Indpro Engineering",
        company: "Google Review"
    },
    {
        id: 5,
        quote: "Had the pleasure of getting my Beauty World Stall fabrication by Maxipix LLC. Very professional and timely work has been done for me. Definitely suggested for good quality work.",
        name: "Waqar Chohan",
        company: "Google Review"
    },
    {
        id: 6,
        quote: "I can't say enough positive things about Maxpix. They offer a fantastic selection of products that cater to a variety of needs. The staff was incredibly friendly and approachable, readily available to answer my questions...",
        name: "Business 4Extrov",
        company: "Google Review"
    },
    {
        id: 7,
        quote: "Exhibition Stands provided outstanding value and service Maxpix Advertising. Proactive guidance, excellent support, and positive feedback from colleagues. Will use again.",
        name: "Adeel Ahmad",
        company: "Google Review"
    },
    {
        id: 8,
        quote: "Reliable, timely, and delivered exactly what we needed—well done!",
        name: "Marketing Transwind",
        company: "Google Review"
    },
    {
        id: 9,
        quote: "I was completely impressed with their professionalism and customer service.",
        name: "Ηλέκτρα Ανδαράκη",
        company: "Google Review"
    },
    {
        id: 10,
        quote: "Everything on time, everything perfect",
        name: "Jimmy Boyd",
        company: "Google Review"
    }
];

const TestimonialsSection = () => {
    // Duplicate the array to create a seamless infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-[var(--color-warm-gray)] relative overflow-hidden">
            {/* Very subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-16 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] mb-6 tracking-tight"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-600 font-medium"
                    >
                        Trusted by brands across Dubai and the UAE for exhibition stands, event production, and brand environments. Real success stories from our amazing clients.
                    </motion.p>
                </div>
            </div>

            {/* Free-flowing infinite marquee slider */}
            <div className="relative w-full overflow-hidden flex pt-4 pb-12 cursor-grab active:cursor-grabbing">
                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-[15%] rounded-r-[50%] bg-gradient-to-r from-[var(--color-warm-gray)] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-[15%] rounded-l-[50%] bg-gradient-to-l from-[var(--color-warm-gray)] to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex shrink-0 gap-8 items-stretch pr-8"
                    animate={{
                        x: ['0%', '-50%']
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 50,
                        repeat: Infinity,
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <div key={`${testimonial.id}-${index}`} className="w-[350px] md:w-[450px] shrink-0 h-full">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
