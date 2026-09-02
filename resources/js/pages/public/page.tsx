import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import HeroSection from '@/components/public/hero-section';
import ContentSection from '@/components/public/content-section';
import FeaturesSection from '@/components/public/features-section';
import StatsSection from '@/components/public/stats-section';
import type { Page } from '@/types';

interface PageProps {
    page: Page;
}

export default function DynamicPage({ page }: PageProps) {
    const renderSection = (section: NonNullable<Page['sections']>[0]) => {
        switch (section.section_type) {
            case 'hero':
                return (
                    <HeroSection
                        key={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        image={section.image_path}
                        linkUrl={section.link_url}
                        linkText={section.link_text}
                    />
                );
            case 'content':
                return (
                    <ContentSection
                        key={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        content={section.content}
                        image={section.image_path}
                        layout={section.meta?.layout || 'full'}
                    />
                );
            case 'features':
                return (
                    <FeaturesSection
                        key={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        features={section.meta?.features || []}
                        linkUrl={section.link_url}
                        linkText={section.link_text}
                    />
                );
            case 'stats':
                return (
                    <StatsSection
                        key={section.id}
                        title={section.title}
                        subtitle={section.subtitle}
                        stats={section.meta?.stats || []}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <PublicLayout>
            <Head title={page.meta_title || `${page.title} - NOVITA`} />

            {page.sections?.map(renderSection)}
        </PublicLayout>
    );
}
