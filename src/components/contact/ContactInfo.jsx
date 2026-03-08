import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-12 h-full">

            <div>
                <h2 className="text-4xl md:text-5xl font-black text-[var(--color-charcoal)] tracking-tighter mb-4">
                    HEADQUARTERS
                </h2>
                <p className="text-gray-600 font-light text-lg">
                    Our 10,000 sq.ft fabrication facility and creative studio.
                </p>
            </div>

            <div className="flex flex-col gap-8 flex-1">

                <div className="group flex items-start gap-6 p-6 rounded-[2rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary-red)]/10 text-[var(--color-primary-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-red)] group-hover:text-white transition-colors">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-[var(--color-charcoal)]/70 font-bold mb-1 uppercase tracking-widest text-xs">Facility Address</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            MAXPIX Advertising LLC<br />


                            Dubai, United Arab Emirates
                        </p>
                    </div>
                </div>

                <div className="group flex items-start gap-6 p-6 rounded-[2rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-black/5 text-[var(--color-charcoal)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-charcoal)] group-hover:text-white transition-colors">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-[var(--color-charcoal)]/70 font-bold mb-1 uppercase tracking-widest text-xs">Direct Lines</h4>
                        <div className="flex flex-col gap-1 text-gray-700 text-sm">
                            <a href="tel:+971585898520" className="hover:text-[var(--color-primary-red)] transition-colors">+971 58 589 8520 (Office)</a>
                            <a href="tel:+971585100816" className="hover:text-[var(--color-primary-red)] transition-colors">+971 58 510 0816 (Mobile)</a>
                        </div>
                    </div>
                </div>

                <div className="group flex items-start gap-6 p-6 rounded-[2rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-black/5 text-[var(--color-charcoal)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-charcoal)] group-hover:text-white transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-[var(--color-charcoal)]/70 font-bold mb-1 uppercase tracking-widest text-xs">Digital Comms</h4>
                        <a href="mailto:info@maxpix.ae" className="text-gray-700 text-sm hover:text-[var(--color-primary-red)] transition-colors flex items-center gap-1">
                            info@maxpixad.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                <div className="group flex items-start gap-6 p-6 rounded-[2rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-black/5 text-[var(--color-charcoal)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-charcoal)] group-hover:text-white transition-colors">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="text-[var(--color-charcoal)]/70 font-bold mb-1 uppercase tracking-widest text-xs">Operating Hours</h4>
                        <p className="text-gray-700 text-sm">
                            Mon - Fri: 8:00 AM - 6:00 PM<br />
                            Sat: 9:00 AM - 2:00 PM<br />
                            Sun: Facility Closed (Support Active)
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactInfo;
