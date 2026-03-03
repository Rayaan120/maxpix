import { motion } from 'framer-motion';
import { Target, Shield, Zap, Users } from 'lucide-react';

const CoreValues = () => {
    return (
        <section className="py-32 bg-[#0a0a0a] text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <h2 className="text-[var(--color-primary-red)] text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Principles</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                        The DNA that drives our <span className="text-outline">execution.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Main Large Bento Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-[#111] p-10 flex flex-col justify-end min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary-red)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <Shield className="absolute top-10 right-10 text-white/5 w-64 h-64 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-[var(--color-primary-red)] bg-white/5 backdrop-blur-md mb-8">
                            <Shield size={32} />
                        </div>
                        <h4 className="text-4xl font-black tracking-tighter mb-4 relative z-10">Uncompromising Integrity</h4>
                        <p className="text-gray-400 max-w-lg text-lg relative z-10">We never cut corners. Our materials, structures, and business practices are built to last forever.</p>
                    </motion.div>

                    {/* Standard Bento Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative group overflow-hidden rounded-[2rem] bg-[#111] p-10 flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 mb-8 group-hover:border-[var(--color-primary-red)] group-hover:text-[var(--color-primary-red)] transition-colors">
                            <Target size={24} />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black tracking-tight mb-2">Precision Execution</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Exact measurements, millimeter-perfect fabrication.</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-primary-red)]/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                    </motion.div>

                    {/* Standard Bento Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group overflow-hidden rounded-[2rem] bg-[#111] p-10 flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 mb-8 group-hover:border-[var(--color-primary-red)] group-hover:text-[var(--color-primary-red)] transition-colors">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black tracking-tight mb-2">Agile Delivery</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">Meeting impossible deadlines without sacrificing quality.</p>
                        </div>
                    </motion.div>

                    {/* Main Large Bento Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] bg-[#111] p-10 flex flex-col justify-end min-h-[300px]"
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />

                        <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-md mb-6">
                            <Users size={24} />
                        </div>
                        <h4 className="text-4xl font-black tracking-tighter mb-4 relative z-10">Collaborative Partnership</h4>
                        <p className="text-gray-400 max-w-sm text-lg relative z-10">We operate as an extension of your team, not just a vendor.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CoreValues;
