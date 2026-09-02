import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import type { News } from '@/types';

interface NewsShowProps {
    article: News;
    relatedNews: News[];
}

export default function NewsShow({ article, relatedNews }: NewsShowProps) {
    return (
        <PublicLayout>
            <Head title={`${article.title} - NOVITA`} />

            <HeroSection
                title={article.title}
                subtitle={article.category ? article.category.charAt(0).toUpperCase() + article.category.slice(1) : undefined}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to News
                    </Link>

                    {/* Article Meta */}
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        {article.published_at && (
                            <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {new Date(article.published_at).toLocaleDateString()}
                            </span>
                        )}
                        {article.author && (
                            <span className="flex items-center">
                                <User className="h-4 w-4 mr-2" />
                                {article.author}
                            </span>
                        )}
                        {article.category && (
                            <span className="flex items-center">
                                <Tag className="h-4 w-4 mr-2" />
                                <span className="capitalize">{article.category}</span>
                            </span>
                        )}
                    </div>

                    {/* Featured Image */}
                    {article.image_path && (
                        <div className="mb-8 rounded-lg overflow-hidden">
                            <img
                                src={article.image_path}
                                alt={article.title}
                                className="w-full h-auto"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {article.content?.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related News */}
            {relatedNews.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedNews.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/news/${item.slug}`}
                                    className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[16/9] bg-gray-100">
                                        {item.image_path && (
                                            <img
                                                src={item.image_path}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                            />
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {item.published_at ? new Date(item.published_at).toLocaleDateString() : ''}
                                        </div>
                                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{item.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </PublicLayout>
    );
}
