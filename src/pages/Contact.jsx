import SEO from '../components/SEO';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with MAXPIX Advertising LLC for your next branding, signage, or printing project in the UAE."
            />

            <ContactHero />

            <section className="py-24 bg-[var(--color-warm-gray)]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-5 gap-16">
                        <div className="lg:col-span-3 order-2 lg:order-1">
                            <ContactForm />
                        </div>
                        <div className="lg:col-span-2 order-1 lg:order-2">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />
        </>
    );
};

export default Contact;
