import SEO from '../components/SEO';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Our Portfolio"
                description="View the selected works and projects from MAXPIX Advertising LLC across various industries in the UAE."
            />

            <PortfolioHero />
            <PortfolioGrid />
            <PortfolioCTA />
        </>
    );
};

export default Portfolio;
