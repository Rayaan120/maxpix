const ContactMap = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.2345!2d55.3105!3d25.273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ae68ee17ea630b1%3A0xaff6c317a2e6237!2sMaxpix%20Advertising%20LLC!5e1!3m2!1sen!2sae!4v1772514564023!5m2!1sen!2sae";
    const googleMapsUrl = "https://www.google.com/maps/dir//Maxpix+Advertising+LLC/@25.2730616,55.3105295,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ae68ee17ea630b1:0xaff6c317a2e6237!2m2!1d55.3105295!2d25.2730616";

    return (
        <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[50vw] min-h-[400px] max-h-[800px] bg-[#0a0a0a] relative overflow-hidden group cursor-pointer"
        >
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-[1.2] group-hover:scale-100 pointer-events-none"
                title="Office Location"
            />

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700" />

            {/* Dynamic UI Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="bg-[#111] border border-white/10 backdrop-blur-md px-8 py-5 rounded-full shadow-2xl mb-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[0.16, 1, 0.3, 1] whitespace-nowrap">
                    <p className="text-white font-black text-sm uppercase tracking-widest text-center">OPEN IN GOOGLE MAPS</p>
                    <p className="text-gray-400 text-xs text-center font-medium mt-1 uppercase tracking-tight">Warehouse 4, Street 22, Al Qusais Industrial Area 1</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-red)] shadow-[0_0_40px_rgba(230,0,0,0.8)] border-4 border-[#0a0a0a] relative group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-[var(--color-primary-red)] rounded-full animate-ping opacity-40" />
                </div>
            </div>
        </a>
    );
};

export default ContactMap;
