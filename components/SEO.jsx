import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.escalaecommerce.com.br" />
    {/* Estruturação de dados JSON-LD */}
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Consultoria E-commerce e Marketplaces',
        description,
        url: 'https://www.escalaecommerce.com.br',
        areaServed: 'Brasil',
        keywords,
        provider: {
          '@type': 'Person',
          name: 'Especialista Discretta',
        },
      })}
    </script>
  </Helmet>
);

export default SEO;
