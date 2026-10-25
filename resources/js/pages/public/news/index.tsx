import { Link, router } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import HeroSection from '@/components/public/hero-section';
import {
    SeoHead,
    organizationSchema,
    breadcrumbSchema,
    SITE_URL,
} from '@/components/seo-head';
import PublicLayout from '@/layouts/public/public-layout';
import type { News } from '@/types';

interface PageSection {
    section_type: string;
    title: string | null;
    subtitle: string | null;
}

interface NewsIndexProps {
    news: {
        data: News[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    categories: string[];
    filters: {
        category?: string;
        search?: string;
    };
    page?: {
        title: string;
        active_sections?: PageSection[];
        activeSections?: PageSection[];
    } | null;
}

const FALLBACK_IMAGE =
    'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=800&h=500&fit=crop';

function formatDate(dateString?: string | null): string {
    if (!dateString) {
        return '';
    }

    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Yangon',
    });
}

export default function NewsIndex({
    news,
    categories,
    filters,
    page,
}: NewsIndexProps) {
    const [search, setSearch] = useState(filters.search || '');
    const sections = page?.active_sections || page?.activeSections || [];
    const hero = sections.find((section) => section.section_type === 'hero');
    const heroTitle = hero?.title || page?.title || 'News & Media';
    const heroSubtitle =
        hero?.subtitle ||
        'Stay updated with the latest news, announcements, and media coverage from NOVITA.';
    const canonical =
        news.current_page > 1 ? `/news?page=${news.current_page}` : '/news';

    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'NOVITA News & Media',
        url: `${SITE_URL}/news`,
        numberOfItems: news.data.length,
        itemListElement: news.data.map((article, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: article.title,
            url: `${SITE_URL}/news/${article.slug}`,
        })),
    };

    const handleFilterChange = (key: string, value: string) => {
        router.get('/news', { ...filters, [key]: value }, { preserveState: true });
    };

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        handleFilterChange('search', search);
    };

    return (
        <PublicLayout>
            <SeoHead
                title={page?.title || 'News & Media'}
                description="Stay updated with the latest news, announcements, facility developments, and media coverage from NOVITA Pharmaceutical Co., Ltd. in Myanmar."
                keywords="NOVITA news, pharmaceutical news Myanmar, company announcements, facility updates"
                canonical={canonical}
                jsonLd={[
                    organizationSchema(),
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'News', url: '/news' },
                    ]),
                    itemListSchema,
                ]}
            />

            <HeroSection title={heroTitle} subtitle={heroSubtitle} />

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="mb-8 flex flex-col gap-4 md:flex-row">
                        <form onSubmit={handleSearch} className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search news..."
                                    aria-label="Search news"
                                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-novita"
                                />
                                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            </div>
                        </form>

                        <select
                            value={filters.category || 'all'}
                            onChange={(event) =>
                                handleFilterChange('category', event.target.value)
                            }
                            aria-label="Filter news by category"
                            className="rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-novita"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* News Grid */}
                    {news.data.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {news.data.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/news/${article.slug}`}
                                    className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800/50"
                                >
                                    <div className="aspect-[16/9] bg-gray-100">
                                        <img
                                            src={article.image_url || FALLBACK_IMAGE}
                                            alt={article.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                            onError={(event) => {
                                                event.currentTarget.src = FALLBACK_IMAGE;
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center text-sm text-gray-500">
                                            <span>{formatDate(article.published_at)}</span>
                                            {article.category && (
                                                <>
                                                    <span className="mx-2">·</span>
                                                    <span className="capitalize">
                                                        {article.category}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-novita dark:text-white">
                                            {article.title}
                                        </h2>
                                        <p className="line-clamp-2 text-gray-600 dark:text-gray-400">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <p className="text-gray-500">No news articles found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {news.last_page > 1 && (
                        <div className="mt-8 flex justify-center gap-2">
                            {Array.from({ length: news.last_page }, (_, index) => index + 1).map(
                                (page) => (
                                    <button
                                        key={page}
                                        onClick={() =>
                                            router.get(
                                                '/news',
                                                { ...filters, page },
                                                { preserveState: true },
                                            )
                                        }
                                        aria-current={page === news.current_page ? 'page' : undefined}
                                        className={`rounded-lg px-4 py-2 ${
                                            page === news.current_page
                                                ? 'bg-novita text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ),
                            )}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
