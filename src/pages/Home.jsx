import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import KeyStats from '../components/home/KeyStats';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio';
import Process from '../components/home/Process';
import TrustBar from '../components/home/TrustBar';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
    return (
        <>
            <SEO
                title="Signage, Branding & Printing in UAE"
                description="MAXPIX Advertising LLC is a premier creative production company in the UAE specializing in branding, outdoor signage, digital printing, and event visuals."
                schemaData={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "MAXPIX Advertising LLC",
                    "description": "Advertising, Signage, Branding & Digital Printing across the UAE.",
                    "telephone": "+971500000000",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Business Bay",
                        "addressLocality": "Dubai",
                        "addressRegion": "Dubai",
                        "addressCountry": "AE"
                    }
                }}
            />

            <HeroSection />
            <KeyStats />
            <TrustBar />
            <ServicesPreview />
            <FeaturedPortfolio />
            <Process />
            <CTABanner />
        </>
    );
};

export default Home;
