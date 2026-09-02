interface Stat {
    label: string;
    value: string;
}

interface StatsSectionProps {
    title?: string | null;
    subtitle?: string | null;
    stats: Stat[];
}

export default function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
    return (
        <section className="py-16 md:py-24 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
                        {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
                    </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-blue-100">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
