import { Head } from '@inertiajs/react';

interface SeoProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    jsonLd?: Record<string, any> | Record<string, any>[];
    noIndex?: boolean;
}

const SITE_NAME = 'NOVITA Pharmaceutical Co., Ltd.';
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://novita-myanmar.com.mm';
const DEFAULT_OG_IMAGE = '/og-default.png';

export function SeoHead({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType = 'website',
    jsonLd,
    noIndex = false,
}: SeoProps) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Better Health, Longer Life`;
    const ogUrl = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_URL);
    const ogImg = ogImage || DEFAULT_OG_IMAGE;

    return (
        <Head>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={ogImg.startsWith('http') ? ogImg : `${SITE_URL}${ogImg}`} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImg.startsWith('http') ? ogImg : `${SITE_URL}${ogImg}`} />

            {/* Geo - NOVITA is in Myanmar */}
            <meta name="geo.region" content="MM" />
            <meta name="geo.placename" content="Yangon" />
            <meta name="geo.position" content="16.7745;-96.1701" />
            <meta name="ICBM" content="16.7745, -96.1701" />

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            )}
        </Head>
    );
}

/* ── Schema Generators ── */

export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NOVITA Pharmaceutical Co., Ltd.',
        alternateName: 'NOVITA',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: 'NOVITA Pharmaceutical is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes.',
        foundingDate: '2024',
        industry: 'Pharmaceutical Manufacturing',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1',
            addressLocality: 'Yangon',
            addressRegion: 'Yangon',
            postalCode: '11181',
            addressCountry: 'MM',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+95-9-5000144',
                contactType: 'customer service',
                availableLanguage: ['English', 'Myanmar'],
            },
            {
                '@type': 'ContactPoint',
                telephone: '+95-9-977-225-001',
                contactType: 'sales',
                availableLanguage: ['English', 'Myanmar'],
            },
        ],
        email: 'info@novita-myanmar.com.mm',
        sameAs: [
            'https://facebook.com/novita',
            'https://linkedin.com/company/novita',
            'https://youtube.com/novita',
        ],
        member: {
            '@type': 'Organization',
            name: 'KTECG Group',
            url: 'https://www.kyawtharengg.com.mm',
        },
    };
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'NOVITA Pharmaceutical Co., Ltd.',
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
        })),
    };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function productSchema(product: {
    name: string;
    description: string;
    image?: string;
    category?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image || `${SITE_URL}/og-default.png`,
        brand: {
            '@type': 'Brand',
            name: 'NOVITA',
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'NOVITA Pharmaceutical Co., Ltd.',
        },
        category: product.category || 'Pharmaceutical Products',
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/PreOrder',
            priceCurrency: 'MMK',
            seller: {
                '@type': 'Organization',
                name: 'NOVITA Pharmaceutical Co., Ltd.',
            },
        },
    };
}

export function medicalWebPageSchema(page: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: page.name,
        description: page.description,
        url: page.url.startsWith('http') ? page.url : `${SITE_URL}${page.url}`,
        about: {
            '@type': 'Organization',
            name: 'NOVITA Pharmaceutical Co., Ltd.',
        },
        lastReviewed: new Date().toISOString().split('T')[0],
    };
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };
