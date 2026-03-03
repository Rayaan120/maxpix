import SEO from '../components/SEO';
import AboutHero from '../components/about/AboutHero';
import AboutUsSection from '../components/about/AboutUsSection';
import OurStory from '../components/about/OurStory';
import CoreValues from '../components/about/CoreValues';
import WhyChooseUs from '../components/about/WhyChooseUs';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about MAXPIX Advertising LLC, our story, core values, and why we are the leading creative agency in the UAE."
            />
            <AboutHero />
            <AboutUsSection />
            <OurStory />
            <CoreValues />
            <WhyChooseUs />
            <AboutCTA />
        </>
    );
};

export default About;
