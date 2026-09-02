interface CTASectionProps {
    title?: string | null;
    subtitle?: string | null;
    linkUrl?: string | null;
    linkText?: string | null;
}

export default function CTASection({ title, subtitle, linkUrl, linkText }: CTASectionProps) {
    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
                {subtitle && <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>}
                {linkUrl && linkText && (
                    <a
                        href={linkUrl}
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                    >
                        {linkText}
                    </a>
                )}
            </div>
        </section>
    );
}
