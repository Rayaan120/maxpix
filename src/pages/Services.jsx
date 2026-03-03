import SEO from '../components/SEO';
import ServicesHero from '../components/services/ServicesHero';
import CategoriesGrid from '../components/services/CategoriesGrid';
import ProcessStrip from '../components/services/ProcessStrip';
import SectorsChips from '../components/services/SectorsChips';
import ServiceCTA from '../components/services/ServiceCTA';

const Services = () => {
    return (
        <>
            <SEO
                title="Our Services"
                description="Explore MAXPIX Advertising LLC's comprehensive services including branding, large format printing, signage, and exhibition displays."
            />
            <ServicesHero />
            <CategoriesGrid />
            <ProcessStrip />
            <SectorsChips />
            <ServiceCTA />
        </>
    );
};

export default Services;
