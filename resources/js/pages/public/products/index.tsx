import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import { Search } from 'lucide-react';
import type { Product } from '@/types';

interface ProductsProps {
    products: {
        data: Product[];
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
}

export default function ProductsIndex({ products, categories, filters }: ProductsProps) {
    const [search, setSearch] = useState(filters.search || '');

    const handleFilterChange = (key: string, value: string) => {
        router.get('/products', { ...filters, [key]: value }, { preserveState: true });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        handleFilterChange('search', search);
    };

    return (
        <PublicLayout>
            <Head title="Products - NOVITA" />

            <HeroSection
                title="Our Products"
                subtitle="Explore our comprehensive range of high-quality products designed for various industries."
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search */}
                        <form onSubmit={handleSearch} className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search products..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                        </form>

                        {/* Category Filter */}
                        <select
                            value={filters.category || 'all'}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    {/* Products Grid */}
                    {products.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.data.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.slug}`}
                                    className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[4/3] bg-gray-100">
                                        {product.image_path && (
                                            <img
                                                src={product.image_path}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-blue-600">{product.category}</span>
                                            {product.sku && (
                                                <span className="text-xs text-gray-500">SKU: {product.sku}</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                                        <p className="text-gray-600 line-clamp-2">{product.short_description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No products found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {products.last_page > 1 && (
                        <div className="mt-8 flex justify-center gap-2">
                            {Array.from({ length: products.last_page }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => router.get('/products', { ...filters, page }, { preserveState: true })}
                                    className={`px-4 py-2 rounded-lg ${
                                        page === products.current_page
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
