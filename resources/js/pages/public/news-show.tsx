import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Tag,
    Building2,
    Award,
    Users,
    Briefcase,
    Milestone,
    Facebook,
    Linkedin,
    Mail,
    User,
} from 'lucide-react';
import {
    SeoHead,
    organizationSchema,
    breadcrumbSchema,
    newsArticleSchema,
    SITE_URL,
} from '@/components/seo-head';
import PublicLayout from '@/layouts/public/public-layout';
import type { News } from '@/types';

interface NewsShowProps {
    article: News;
    relatedNews?: News[];
}

const FALLBACK_IMAGE =
    'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1200&h=600&fit=crop';

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

function normalizeCategory(category?: string | null): string {
    if (!category) {
        return 'News';
    }

    return category.charAt(0).toUpperCase() + category.slice(1);
}

function getCategoryIcon(category: string) {
    switch (category.toLowerCase()) {
        case 'company':
        case 'milestone':
            return <Milestone className="h-5 w-5" />;
        case 'industry':
        case 'factory update':
            return <Building2 className="h-5 w-5" />;
        case 'product':
            return <Briefcase className="h-5 w-5" />;
        case 'event':
        case 'exhibition':
        case 'partnership':
            return <Users className="h-5 w-5" />;
        case 'award':
            return <Award className="h-5 w-5" />;
        default:
            return <Tag className="h-5 w-5" />;
    }
}

function getCategoryColor(category: string): string {
    switch (category.toLowerCase()) {
        case 'company':
        case 'milestone':
            return 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300';
        case 'industry':
        case 'factory update':
            return 'bg-novita/10 text-novita-dark dark:bg-novita/15 dark:text-novita-light';
        case 'product':
            return 'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300';
        case 'event':
        case 'exhibition':
        case 'partnership':
            return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300';
        case 'award':
            return 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300';
        default:
            return 'bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300';
    }
}

function imageFor(article: News): string {
    return article.image_url || FALLBACK_IMAGE;
}

export default function NewsShowPage({ article, relatedNews = [] }: NewsShowProps) {
    const category = normalizeCategory(article.category);
    const articleUrl = `/news/${article.slug}`;
    const absoluteArticleUrl = `${SITE_URL}${articleUrl}`;
    const content = (article.content || article.excerpt || '').replace(/\\n/g, '\n');
    const paragraphs = content.split(/\n{2,}/).filter((paragraph) => paragraph.trim() !== '');

    const shareText = encodeURIComponent(article.title);
    const shareUrl = encodeURIComponent(absoluteArticleUrl);

    return (
        <PublicLayout>
            <SeoHead
                title={article.title}
                description={article.excerpt || article.title}
                keywords={`NOVITA news, ${category}, Myanmar, ${article.title}`}
                canonical={articleUrl}
                ogImage={article.image_url || undefined}
                ogType="article"
                jsonLd={[
                    organizationSchema(),
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'News', url: '/news' },
                        { name: article.title, url: articleUrl },
                    ]),
                    newsArticleSchema({
                        headline: article.title,
                        description: article.excerpt || undefined,
                        url: articleUrl,
                        image: article.image_url || undefined,
                        datePublished: article.published_at || undefined,
                        dateModified: article.updated_at || undefined,
                        author: article.author || undefined,
                        category,
                    }),
                ]}
            />

            {/* Hero Section */}
            <section className="relative bg-gray-900 text-white dark:bg-gray-950">
                <div className="relative aspect-video overflow-hidden md:aspect-[21/9]">
                    <img
                        src={imageFor(article)}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                            event.currentTarget.src = FALLBACK_IMAGE;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="mx-auto max-w-7xl">
                            <Link
                                href="/news"
                                className="mb-4 inline-flex items-center text-gray-300 transition-colors hover:text-white"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to News
                            </Link>
                            <span
                                className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(category)}`}
                            >
                                {getCategoryIcon(category)}
                                <span className="ml-2">{category}</span>
                            </span>
                            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                                {article.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300">
                                {article.published_at && (
                                    <span className="inline-flex items-center">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {formatDate(article.published_at)}
                                    </span>
                                )}
                                {article.author && (
                                    <span className="inline-flex items-center">
                                        <User className="mr-2 h-4 w-4" />
                                        {article.author}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <article className="prose prose-lg max-w-none dark:prose-invert">
                                {paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="mb-6 whitespace-pre-line leading-relaxed text-foreground"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Share */}
                            <div className="mb-8 rounded-xl bg-muted/50 p-6">
                                <h3 className="mb-4 text-lg font-semibold text-foreground">
                                    Share This Article
                                </h3>
                                <div className="flex space-x-3">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on Facebook"
                                        className="rounded-lg bg-card p-2 shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        <Facebook className="h-5 w-5 text-novita" />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Share on LinkedIn"
                                        className="rounded-lg bg-card p-2 shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        <Linkedin className="h-5 w-5 text-novita-dark" />
                                    </a>
                                    <a
                                        href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                                        aria-label="Share by email"
                                        className="rounded-lg bg-card p-2 shadow-sm transition-shadow hover:shadow-md"
                                    >
                                        <Mail className="h-5 w-5 text-muted-foreground" />
                                    </a>
                                </div>
                            </div>

                            {/* Related News */}
                            {relatedNews.length > 0 && (
                                <div className="rounded-xl bg-muted/50 p-6">
                                    <h3 className="mb-4 text-lg font-semibold text-foreground">
                                        Related News
                                    </h3>
                                    <div className="space-y-4">
                                        {relatedNews.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/news/${item.slug}`}
                                                className="group block"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <img
                                                        src={imageFor(item)}
                                                        alt={item.title}
                                                        className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                                        onError={(event) => {
                                                            event.currentTarget.src = FALLBACK_IMAGE;
                                                        }}
                                                    />
                                                    <div>
                                                        <p className="line-clamp-2 text-sm font-medium text-foreground transition-colors group-hover:text-novita">
                                                            {item.title}
                                                        </p>
                                                        <p className="mt-1 text-xs text-muted-foreground">
                                                            {formatDate(item.published_at)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-novita py-12 text-white md:py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">Stay Updated</h2>
                    <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-100">
                        Follow our journey as we build Myanmar's pharmaceutical manufacturing
                        capabilities.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/news"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-novita transition-colors hover:bg-gray-50"
                        >
                            View All News
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
