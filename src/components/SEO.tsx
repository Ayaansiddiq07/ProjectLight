import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title = "PROJECT LIGHT - Connecting Hearts Globally",
  description = "A global platform that connects people in need with people who want to help—bringing transparency, trust, and real impact to social giving.",
  keywords = "social impact, charity, NGO, donate, help, verified causes, global giving, transparency, trust, community support",
  canonical = "https://projectlight.com",
  ogImage = "https://projectlight.com/og-image.jpg",
}: SEOProps) => {
  const fullTitle = title.includes("PROJECT LIGHT") ? title : `${title} | PROJECT LIGHT`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="PROJECT LIGHT" />
    </Helmet>
  );
};

export default SEO;
