import React from 'react';
import { motion } from 'framer-motion';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-[var(--color-primary-red)] opacity-20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

const TestimonialCard = ({ testimonial }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
        >
            <QuoteIcon />
            {/* Rating */}
            <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8 flex-grow relative z-10">
                "{testimonial.quote}"
            </p>

            {/* Client Info */}
            <div className="flex items-center mt-auto border-t border-gray-100 pt-6">
                {/* Optional logo or avatar initials */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-charcoal)] text-white flex items-center justify-center font-bold text-xl mr-4 uppercase">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-[var(--color-charcoal)]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.company}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
