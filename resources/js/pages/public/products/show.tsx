import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import { ArrowLeft, Check } from 'lucide-react';
import type { Product } from '@/types';

interface ProductShowProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductShow({ product, relatedProducts }: ProductShowProps) {
    return (
        <PublicLayout>
            <Head title={`${product.name} - NOVITA`} />

            <HeroSection
                title={product.name}
                subtitle={product.category}
            />

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Products
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Image */}
                        <div className="bg-gray-100 rounded-lg overflow-hidden">
                            {product.image_path && (
                                <img
                                    src={product.image_path}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
                                {product.sku && (
                                    <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                            {product.short_description && (
                                <p className="text-xl text-gray-600 mb-6">{product.short_description}</p>
                            )}

                            {product.description && (
                                <div className="prose prose-lg mb-8">
                                    {product.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            )}

                            {/* Features */}
                            {product.features && product.features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-600">
                                                <Check className="h-5 w-5 text-green-500 mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Specifications */}
                            {product.specifications && Object.keys(product.specifications).length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                                    <dl className="grid grid-cols-2 gap-4">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key}>
                                                <dt className="text-sm text-gray-500">{key}</dt>
                                                <dd className="text-gray-900">{String(value)}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            )}

                            <a
                                href="/contact"
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Request Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {relatedProducts.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/products/${item.slug}`}
                                    className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[4/3] bg-gray-100">
                                        {item.image_path && (
                                            <img
                                                src={item.image_path}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                            />
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.category}</p>
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
