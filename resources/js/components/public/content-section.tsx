interface ContentSectionProps {
    title?: string | null;
    subtitle?: string | null;
    content?: string | null;
    image?: string | null;
    layout?: 'left-image' | 'right-image' | 'full';
}

export default function ContentSection({ title, subtitle, content, image, layout = 'full' }: ContentSectionProps) {
    const renderContent = (text: string) => {
        // Check if content is JSON (for mission/vision)
        try {
            const json = JSON.parse(text);
            if (json.mission || json.vision) {
                return (
                    <div className="space-y-6">
                        {json.mission && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h4>
                                <p className="text-gray-600">{json.mission}</p>
                            </div>
                        )}
                        {json.vision && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h4>
                                <p className="text-gray-600">{json.vision}</p>
                            </div>
                        )}
                        {json.values && (
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Values</h4>
                                <ul className="list-disc list-inside text-gray-600">
                                    {json.values.map((value: string, index: number) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            }
        } catch {
            // Not JSON, render as regular text
        }

        return text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
        ));
    };

    if (layout === 'full') {
        return (
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {(title || subtitle) && (
                        <div className="text-center mb-12">
                            {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
                            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
                        </div>
                    )}
                    {content && (
                        <div className="max-w-3xl mx-auto prose prose-lg">
                            {renderContent(content)}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${layout === 'right-image' ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={layout === 'right-image' ? 'lg:order-2' : ''}>
                        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
                        {subtitle && <p className="text-xl text-gray-600 mb-6">{subtitle}</p>}
                        {content && (
                            <div className="prose prose-lg">
                                {renderContent(content)}
                            </div>
                        )}
                    </div>
                    {image && (
                        <div className={layout === 'right-image' ? 'lg:order-1' : ''}>
                            <img
                                src={image}
                                alt={title || ''}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
