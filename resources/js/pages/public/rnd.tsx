import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { SeoHead, organizationSchema, breadcrumbSchema } from '@/components/seo-head';
import { ArrowRight, Beaker, FlaskConical, Microscope, TestTube, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface PageSection {
    id: number;
    section_type: string;
    title: string | null;
    subtitle: string | null;
    content: string | null;
    image_path: string | null;
    link_url: string | null;
    link_text: string | null;
    meta: any;
    sort_order?: number;
    is_active?: boolean;
}

interface RndProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

function resolveImage(path: string | null | undefined, fallback: string) {
    if (!path) return fallback;
    if (path.startsWith('http') || path.startsWith('/')) return path;
    return `/storage/${path}`;
}

export default function RndPage({ page }: RndProps) {
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Our R&D Direction';
    const heroSubtitle = hero?.subtitle || "NOVITA is building a research and development foundation focused on developing quality medicines that meet Myanmar's healthcare needs.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Innovation';

    // Overview - dynamic via page_sections 'overview' with fallback
    const overviewSec = find(['overview', 'content', 'vision', 'introduction']);
    const overviewBadge = (overviewSec?.meta as any)?.badge || overviewSec?.subtitle || 'Our Vision';
    const overviewTitle = overviewSec?.title || 'Building R&D Capabilities';
    const overviewContent1 = overviewSec?.content?.split('\n\n')[0] || 'NOVITA recognizes that a strong research and development function is essential for long-term success in the pharmaceutical industry. We are strategically building our R&D capabilities to support our mission of providing quality medicines.';
    const overviewContent2 = overviewSec?.content?.split('\n\n')[1] || 'While our R&D team is currently being established, we have defined clear strategic directions that will guide our product development efforts and innovation initiatives.';
    const overviewHighlight = (overviewSec?.meta as any)?.highlight || 'Our goal is to develop products that address the specific healthcare needs of Myanmar\'s population.';
    const overviewImage = resolveImage(overviewSec?.image_path, '/images/rnd-vision.jpg');

    // Focus Areas - dynamic via 'focus_areas' / 'features'
    const focusSec = find(['focus_areas', 'features', 'focus', 'development_areas', 'key_areas']);
    const focusBadge = (focusSec?.meta as any)?.badge || focusSec?.subtitle || 'Focus Areas';
    const focusTitle = focusSec?.title || 'Key Development Areas';
    const focusSubtitle = focusSec?.content || focusSec?.subtitle || 'Our R&D strategy focuses on these core areas to ensure product quality and market relevance.';
    const focusFeatures: any[] = (focusSec?.meta as any)?.features || (focusSec?.meta as any)?.items || [
        { icon: FlaskConical, title: 'Formulation Development', desc: 'Developing optimal drug formulations that ensure efficacy, stability, and patient compliance. Our focus includes solid oral dosage forms with potential expansion to other forms.' },
        { icon: Beaker, title: 'Analytical Method Development', desc: 'Establishing robust analytical methods for product testing, quality control, and stability assessment using modern analytical techniques.' },
        { icon: TrendingUp, title: 'Product Improvement', desc: 'Continuous enhancement of existing formulations to improve bioavailability, reduce side effects, and enhance patient experience.' },
        { icon: Lightbulb, title: 'Technology Transfer', desc: 'Adapting and implementing proven pharmaceutical technologies to our manufacturing processes for efficient scale-up.' },
        { icon: TestTube, title: 'Stability Studies', desc: 'Conducting comprehensive stability studies to establish product shelf life and storage conditions according to ICH guidelines.' },
        { icon: Users, title: 'Technical Partnerships', desc: 'Collaborating with international pharmaceutical companies and research institutions for knowledge transfer and capability building.' },
    ];

    // Approach - dynamic via 'approach' / 'development_approach'
    const approachSec = find(['approach', 'development_approach', 'strategic_approach', 'process', 'methodology']);
    const approachBadge = (approachSec?.meta as any)?.badge || approachSec?.subtitle || 'Our Approach';
    const approachTitle = approachSec?.title || 'Strategic Development Approach';
    const approachDesc = approachSec?.content || 'Our R&D strategy is built on a foundation of scientific rigor, regulatory compliance, and market needs assessment.';
    const approachImage = resolveImage(approachSec?.image_path, '/images/rnd-approach.jpg');
    const approachSteps: any[] = (approachSec?.meta as any)?.steps || (approachSec?.meta as any)?.items || [
        { title: 'Market Needs Assessment', desc: 'Identifying healthcare gaps and essential medicine needs in Myanmar.' },
        { title: 'Scientific Evaluation', desc: 'Feasibility studies and technical assessment of potential products.' },
        { title: 'Development & Validation', desc: 'Formulation development, analytical method validation, and stability studies.' },
        { title: 'Regulatory Submission', desc: 'Preparing and submitting dossiers to Myanmar FDA for approval.' },
    ];

    // Collaboration
    const collabSec = find(['collaboration', 'partnerships', 'partners', 'technical_partners']);
    const collabBadge = (collabSec?.meta as any)?.badge || collabSec?.subtitle || 'Partnerships';
    const collabTitle = collabSec?.title || 'Collaboration with Technical Partners';
    const collabSubtitle = collabSec?.content || 'NOVITA seeks to establish strategic partnerships to accelerate our R&D capabilities.';
    const collabCards: any[] = (collabSec?.meta as any)?.cards || (collabSec?.meta as any)?.features || (collabSec?.meta as any)?.items || [
        { icon: Microscope, title: 'Research Institutions', desc: 'Collaborating with universities and research centers for scientific expertise and knowledge exchange.' },
        { icon: FlaskConical, title: 'International Pharma Companies', desc: 'Technology transfer partnerships for proven formulations and manufacturing processes.' },
        { icon: Users, title: 'Industry Consultants', desc: 'Engaging expert consultants for specialized R&D projects and capability building.' },
    ];

    // CTA
    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || 'Interested in R&D Collaboration?';
    const ctaSubtitle = ctaSec?.subtitle || ctaSec?.content || 'We welcome opportunities to collaborate with research institutions and pharmaceutical partners.';
    const ctaBtnText = ctaSec?.link_text || 'Contact Us';
    const ctaBtnUrl = ctaSec?.link_url || '/contact';

    return (
        <PublicLayout>
            <SeoHead
                title={page?.title || 'Product Development'}
                description="NOVITA's research and product development initiatives - advancing pharmaceutical innovation for Myanmar's healthcare needs."
                keywords="pharmaceutical R&D, product development, drug research, innovation, Myanmar healthcare"
                canonical="/product-development"
                jsonLd={[organizationSchema(), breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Product Development', url: '/product-development' }])]}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-novita text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="text-gray-300 font-semibold mb-2">{heroBadge}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {heroTitle}
                        </h1>
                        <p className="text-xl text-gray-300">
                            {heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview - Dynamic */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-novita font-semibold mb-2">{overviewBadge}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {overviewTitle}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {overviewContent1}
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {overviewContent2}
                            </p>
                            <div className="flex items-center bg-novita/5 rounded-lg p-4">
                                <Target className="h-6 w-6 text-novita mr-3 flex-shrink-0" />
                                <p className="text-novita-dark font-medium">
                                    {overviewHighlight}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={overviewImage}
                                alt={overviewTitle}
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Focus Areas - Dynamic */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">{focusBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {focusTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {focusSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {focusFeatures.map((f: any, idx: number) => {
                            const iconMap: Record<string, any> = { FlaskConical, Beaker, TrendingUp, Lightbulb, TestTube, Users };
                            const Icon = f.icon ? (typeof f.icon === 'string' ? (iconMap[f.icon] || FlaskConical) : f.icon) : [FlaskConical, Beaker, TrendingUp, Lightbulb, TestTube, Users][idx % 6];
                            const title = f.title || `Feature ${idx+1}`;
                            const desc = f.desc || f.description || '';
                            return (
                                <div key={title + idx} className="bg-card rounded-xl p-6 shadow-sm">
                                    <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-novita" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                                    <p className="text-muted-foreground">{desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Development Approach - Dynamic */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src={approachImage}
                                alt={approachTitle}
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="text-novita font-semibold mb-2">{approachBadge}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {approachTitle}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {approachDesc}
                            </p>

                            <div className="space-y-4">
                                {approachSteps.map((s: any, idx: number) => (
                                    <div key={s.title + idx} className="flex items-start">
                                        <div className="w-10 h-10 bg-novita/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <span className="text-novita font-bold">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">{s.title}</p>
                                            <p className="text-muted-foreground">{s.desc || s.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration - Dynamic */}
            <section className="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-gray-300 font-semibold mb-2">{collabBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {collabTitle}
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            {collabSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {collabCards.map((c: any, idx: number) => {
                            const iconMap: Record<string, any> = { Microscope, FlaskConical, Users };
                            const Icon = c.icon ? (typeof c.icon === 'string' ? (iconMap[c.icon] || Users) : c.icon) : [Microscope, FlaskConical, Users][idx % 3];
                            return (
                                <div key={c.title + idx} className="bg-card dark:bg-gray-900 rounded-xl p-6 text-center">
                                    <div className="w-14 h-14 bg-novita rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
                                    <p className="text-muted-foreground">{c.desc || c.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Dynamic */}
            <section className="py-16 md:py-24 bg-novita text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        {ctaSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={ctaBtnUrl}
                            className="inline-flex items-center justify-center bg-white text-novita px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            {ctaBtnText}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
