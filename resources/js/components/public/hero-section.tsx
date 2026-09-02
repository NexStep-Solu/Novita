import { ReactNode } from 'react';

interface HeroSectionProps {
    title: string | null;
    subtitle?: string | null;
    image?: string | null;
    linkUrl?: string | null;
    linkText?: string | null;
    children?: ReactNode;
}

export default function HeroSection({ title, subtitle, image, linkUrl, linkText, children }: HeroSectionProps) {
    return (
        <section
            className="relative bg-gray-900 text-white py-24 md:py-32"
            style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        >
            <div className="absolute inset-0 bg-gray-900/70" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    {subtitle && (
                        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
                    )}
                    {linkUrl && linkText && (
                        <a
                            href={linkUrl}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {linkText}
                        </a>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
