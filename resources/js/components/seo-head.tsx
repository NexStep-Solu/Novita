import { Head, usePage } from '@inertiajs/react';

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
const SITE_URL = (import.meta.env.VITE_APP_URL || 'https://novita-myanmar.com.mm').replace(/\/$/, '');
const DEFAULT_OG_IMAGE = '/og-default.png';
const DEFAULT_TITLE = `${SITE_NAME} - Better Health, Longer Life`;
const DEFAULT_DESCRIPTION =
    'NOVITA Pharmaceutical Co., Ltd. is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes. A KTECG Group member.';

function absoluteUrl(value: string): string {
    if (/^https?:\/\//i.test(value)) {
        return value;
    }

    return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

function canonicalUrlFor(url: string): string {
    const [path, query = ''] = url.split('?');
    const params = new URLSearchParams(query);
    const page = params.get('page');

    return absoluteUrl(page && page !== '1' ? `${path || '/'}?page=${page}` : path || '/');
}

const PLACEHOLDER_SOCIAL_URLS = new Set([
    'https://facebook.com/novita',
    'https://www.facebook.com/novita',
    'https://linkedin.com/company/novita',
    'https://www.linkedin.com/company/novita',
    'https://youtube.com/novita',
    'https://www.youtube.com/novita',
    'https://twitter.com/novita',
    'https://x.com/novita',
    'https://instagram.com/novita',
]);

function socialUrlsFrom(social: Record<string, unknown> | undefined): string[] {
    if (!social) {
        return [];
    }

    return Object.values(social).filter((value): value is string => {
        if (typeof value !== 'string' || !/^https?:\/\//i.test(value.trim())) {
            return false;
        }

        const normalized = value.trim().replace(/\/+$/, '').toLowerCase();

        return !PLACEHOLDER_SOCIAL_URLS.has(normalized);
    });
}

function attachSocialProfiles(
    jsonLd: SeoProps['jsonLd'],
    socialUrls: string[],
): SeoProps['jsonLd'] {
    if (!jsonLd || socialUrls.length === 0) {
        return jsonLd;
    }

    const enrich = (node: unknown): unknown => {
        if (Array.isArray(node)) {
            return node.map(enrich);
        }

        if (!node || typeof node !== 'object') {
            return node;
        }

        const record = { ...(node as Record<string, any>) };

        if (
            record['@type'] === 'Organization' &&
            (record.name === SITE_NAME || record.url === SITE_URL)
        ) {
            record.sameAs = socialUrls;
        }

        for (const [key, value] of Object.entries(record)) {
            if (value && typeof value === 'object') {
                record[key] = enrich(value);
            }
        }

        return record;
    };

    return enrich(jsonLd) as SeoProps['jsonLd'];
}

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
    const page = usePage();
    const shared = page.props as Record<string, any>;
    const sharedSeo = (shared.seo || {}) as Record<string, string | undefined>;

    const pageTitle = title || sharedSeo.title || DEFAULT_TITLE;
    const pageDescription = description || sharedSeo.description || DEFAULT_DESCRIPTION;
    const pageKeywords = keywords || sharedSeo.keywords;

    // Avoid repeating the company name when a page already includes it.
    const fullTitle = pageTitle.includes('NOVITA')
        ? pageTitle
        : `${pageTitle} | ${SITE_NAME}`;

    const canonicalUrl = canonical
        ? absoluteUrl(canonical)
        : canonicalUrlFor(page.url || '/');
    const imageUrl = absoluteUrl(ogImage || DEFAULT_OG_IMAGE);
    const usesDefaultImage = !ogImage;
    const socialUrls = socialUrlsFrom(shared.social);
    const finalJsonLd = attachSocialProfiles(jsonLd, socialUrls);

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={pageDescription} />
            {pageKeywords && <meta name="keywords" content={pageKeywords} />}
            <link rel="canonical" href={canonicalUrl} />
            <meta
                name="robots"
                content={
                    noIndex
                        ? 'noindex, nofollow'
                        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                }
            />
            <meta name="author" content={SITE_NAME} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={imageUrl} />
            {usesDefaultImage && (
                <>
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </>
            )}
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={fullTitle} />

            {/* Geo - NOVITA is in Myanmar */}
            <meta name="geo.region" content="MM" />
            <meta name="geo.placename" content="Yangon" />
            <meta name="geo.position" content="16.7745;-96.1701" />
            <meta name="ICBM" content="16.7745, -96.1701" />
            <meta name="theme-color" content="#097F7C" />

            {/* JSON-LD Structured Data */}
            {finalJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(finalJsonLd).replace(
                            /</g,
                            '\\u003c',
                        ),
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
        name: SITE_NAME,
        alternateName: 'NOVITA',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description:
            'NOVITA Pharmaceutical is a leading pharmaceutical manufacturer in Myanmar, committed to quality, innovation, and better healthcare outcomes.',
        slogan: 'Better Health, Longer Life',
        industry: 'Pharmaceutical Manufacturing',
        areaServed: {
            '@type': 'Country',
            name: 'Myanmar',
        },
        knowsAbout: [
            'Pharmaceutical manufacturing',
            'Oral solid dosage forms',
            'Tablet manufacturing',
            'Hard gelatin capsules',
            'Quality control',
            'Good Manufacturing Practice (GMP)',
            'Myanmar FDA regulations',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress:
                'No. 216/222 Bo Myat Htun Housing, Room D3, Corner of 49 Street and Maharbandoola Road, Ward 1, Pazundaung Township',
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
                contactType: 'factory',
                availableLanguage: ['English', 'Myanmar'],
            },
        ],
        email: 'info@novita-myanmar.com.mm',
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
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'en',
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
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
    url?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image ? absoluteUrl(product.image) : `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        url: product.url ? absoluteUrl(product.url) : `${SITE_URL}/products`,
        brand: {
            '@type': 'Brand',
            name: 'NOVITA',
        },
        manufacturer: {
            '@type': 'Organization',
            name: SITE_NAME,
        },
        category: product.category || 'Pharmaceutical Products',
    };
}

export function newsArticleSchema(article: {
    headline: string;
    description?: string;
    url: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
    category?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.headline,
        description: article.description,
        image: article.image ? [absoluteUrl(article.image)] : [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
        url: absoluteUrl(article.url),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': absoluteUrl(article.url),
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        articleSection: article.category,
        author: {
            '@type': 'Organization',
            name: article.author || SITE_NAME,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`,
            },
        },
    };
}

export function jobPostingSchema(job: {
    title: string;
    description?: string | null;
    datePosted: string;
    validThrough?: string | null;
    employmentType?: string | null;
    location?: string | null;
    department?: string | null;
    salaryRange?: string | null;
    requirements?: string[] | null;
    benefits?: string[] | null;
}) {
    const descriptionParts = [
        job.description,
        job.requirements?.length
            ? `Requirements:\n${job.requirements.map((item) => `- ${item}`).join('\n')}`
            : null,
        job.benefits?.length
            ? `Benefits:\n${job.benefits.map((item) => `- ${item}`).join('\n')}`
            : null,
    ].filter(Boolean);

    const employmentTypeMap: Record<string, string> = {
        'full-time': 'FULL_TIME',
        'part-time': 'PART_TIME',
        contract: 'CONTRACTOR',
        internship: 'INTERN',
    };

    const salaryNumbers = (job.salaryRange || '')
        .match(/\d[\d,.]*/g)
        ?.map((value) => Number(value.replace(/,/g, '')))
        .filter((value) => Number.isFinite(value)) ?? [];

    return {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: descriptionParts.join('\n\n') || job.title,
        datePosted: job.datePosted,
        ...(job.validThrough ? { validThrough: job.validThrough } : {}),
        employmentType:
            employmentTypeMap[(job.employmentType || '').toLowerCase()] || 'FULL_TIME',
        hiringOrganization: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location || 'Yangon',
                addressCountry: 'MM',
            },
        },
        ...(job.department ? { occupationalCategory: job.department } : {}),
        ...(salaryNumbers.length > 0
            ? {
                  baseSalary: {
                      '@type': 'MonetaryAmount',
                      currency: 'MMK',
                      value:
                          salaryNumbers.length > 1
                              ? {
                                    '@type': 'QuantitativeValue',
                                    minValue: Math.min(...salaryNumbers),
                                    maxValue: Math.max(...salaryNumbers),
                                    unitText: 'MONTH',
                                }
                              : {
                                    '@type': 'QuantitativeValue',
                                    value: salaryNumbers[0],
                                    unitText: 'MONTH',
                                },
                  },
              }
            : {}),
        industry: 'Pharmaceutical Manufacturing',
    };
}

export function medicalWebPageSchema(page: {
    name: string;
    description: string;
    url: string;
    lastReviewed?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: page.name,
        description: page.description,
        url: page.url.startsWith('http') ? page.url : `${SITE_URL}${page.url}`,
        about: {
            '@type': 'Organization',
            name: SITE_NAME,
        },
        ...(page.lastReviewed ? { lastReviewed: page.lastReviewed } : {}),
    };
}

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE };
