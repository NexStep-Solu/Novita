import { Award, Leaf, Clock, Users, Shield, CheckCircle, TrendingUp, BookOpen, Heart } from 'lucide-react';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface FeaturesSectionProps {
    title?: string | null;
    subtitle?: string | null;
    features: Feature[];
    linkUrl?: string | null;
    linkText?: string | null;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    award: Award,
    leaf: Leaf,
    clock: Clock,
    users: Users,
    shield: Shield,
    'check-circle': CheckCircle,
    'trending-up': TrendingUp,
    'book-open': BookOpen,
    heart: Heart,
};

export default function FeaturesSection({ title, subtitle, features, linkUrl, linkText }: FeaturesSectionProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
                        {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || Award;
                        return (
                            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                                    <IconComponent className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
                {linkUrl && linkText && (
                    <div className="text-center mt-12">
                        <a
                            href={linkUrl}
                            className="inline-block text-blue-600 font-semibold hover:text-blue-700"
                        >
                            {linkText} →
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
