import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = "https://maxpix.com", type = "website", schemaData = null }) => {
    const fullTitle = `${title} | MAXPIX Advertising LLC`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            {/* Placeholder image for OG */}
            <meta property="og:image" content={`${url}/og-image.jpg`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* JSON-LD Schema */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
