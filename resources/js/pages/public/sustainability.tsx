import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Shield, Leaf, Droplets, Zap, Users, Heart, Scale, Recycle, TreePine, Factory } from 'lucide-react';

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

interface SustainabilityProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

function resolveImage(path: string | null | undefined, fallback: string) {
    if (!path) return fallback;
    if (path.startsWith('http') || path.startsWith('/')) return path;
    return `/storage/${path}`;
}

export default function SustainabilityPage({ page }: SustainabilityProps) {
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Environment, Health & Safety';
    const heroSubtitle = hero?.subtitle || 'NOVITA is committed to sustainable pharmaceutical manufacturing with comprehensive EHS systems designed to protect our employees, community, and environment.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Sustainability & EHS';

    // Overview - dynamic via page_sections
    const overviewSec = find(['overview', 'content', 'commitment', 'introduction']);
    const overviewBadge = (overviewSec?.meta as any)?.badge || overviewSec?.subtitle || 'Our Commitment';
    const overviewTitle = overviewSec?.title || 'Sustainable Manufacturing';
    const overviewContent1 = overviewSec?.content?.split('\n\n')[0] || 'As a pharmaceutical company committed to public health, NOVITA recognizes its responsibility to minimize environmental impact while ensuring the highest standards of employee safety and community wellbeing.';
    const overviewContent2 = overviewSec?.content?.split('\n\n')[1] || 'Our EHS systems are being designed and implemented in alignment with international standards and local regulatory requirements to ensure responsible and sustainable operations.';
    const overviewHighlight = (overviewSec?.meta as any)?.highlight || 'Our goal is to achieve zero environmental incidents and maintain a safe workplace for all employees.';
    const overviewImage = resolveImage(overviewSec?.image_path, '/images/sustainability-hero.jpg');

    // Employee Health & Safety
    const ehsSec = find(['employee_safety', 'health_safety', 'worker_protection', 'safety', 'ehs']);
    const ehsBadge = (ehsSec?.meta as any)?.badge || ehsSec?.subtitle || 'Worker Protection';
    const ehsTitle = ehsSec?.title || 'Employee Health & Safety';
    const ehsSubtitle = ehsSec?.content || 'Protecting our employees is our highest priority. Our EHS systems are designed to prevent workplace injuries and occupational illnesses.';
    const ehsFeatures: any[] = (ehsSec?.meta as any)?.features || (ehsSec?.meta as any)?.items || [
        { icon: Shield, title: 'Safety Management System', desc: 'Implementation of a comprehensive safety management system with clear policies, procedures, and responsibilities.' },
        { icon: Users, title: 'Risk Assessment', desc: 'Regular workplace risk assessments to identify hazards and implement appropriate control measures.' },
        { icon: Heart, title: 'Health Surveillance', desc: 'Employee health monitoring programs for early detection and prevention of occupational diseases.' },
        { icon: Shield, title: 'Personal Protective Equipment', desc: 'Appropriate PPE provided to all employees based on workplace hazard assessments.' },
        { icon: Users, title: 'Emergency Preparedness', desc: 'Emergency response plans and regular drills for fire, chemical spills, and medical emergencies.' },
        { icon: Users, title: 'Safety Training', desc: 'Comprehensive safety training programs for all employees including new hire orientation and refresher courses.' },
    ];

    // Environmental Management
    const envSec = find(['environment', 'environmental_management', 'environmental', 'stewardship']);
    const envBadge = (envSec?.meta as any)?.badge || envSec?.subtitle || 'Environmental Stewardship';
    const envTitle = envSec?.title || 'Environmental Management';
    const envSubtitle = envSec?.content || 'NOVITA is committed to minimizing environmental impact through responsible waste management and resource efficiency.';
    // env cards static but could be dynamic via meta

    // Energy Efficiency
    const energySec = find(['energy', 'energy_efficiency', 'resource_efficiency', 'efficiency']);
    const energyBadge = (energySec?.meta as any)?.badge || energySec?.subtitle || 'Resource Efficiency';
    const energyTitle = energySec?.title || 'Energy Efficiency';
    const energyDesc = energySec?.content || 'NOVITA is incorporating energy-efficient design and technologies to minimize energy consumption and reduce our carbon footprint.';
    const energyImage = resolveImage(energySec?.image_path, '/images/energy-efficiency.jpg');

    // Community & Ethics
    const communitySec = find(['community', 'ethics', 'social_responsibility', 'community_ethics']);
    const communityBadge = (communitySec?.meta as any)?.badge || communitySec?.subtitle || 'Social Responsibility';
    const communityTitle = communitySec?.title || 'Community & Ethical Practices';
    const communitySubtitle = communitySec?.content || 'NOVITA is committed to being a responsible corporate citizen and conducting business with the highest ethical standards.';

    // EHS Management System
    const frameworkSec = find(['framework', 'ehs_framework', 'ehs_management', 'management_system']);
    const frameworkTitle = frameworkSec?.title || 'EHS Management System';
    const frameworkSubtitle = frameworkSec?.content || 'Our EHS management system is being developed based on international standards to ensure systematic approach to environmental, health, and safety management.';

    // CTA
    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || 'Our Sustainability Commitment';
    const ctaSubtitle = ctaSec?.subtitle || ctaSec?.content || 'NOVITA is dedicated to sustainable pharmaceutical manufacturing that protects our employees, community, and environment.';
    const ctaBtnText = ctaSec?.link_text || 'Contact Us';
    const ctaBtnUrl = ctaSec?.link_url || '/contact';

    return (
        <PublicLayout>
            <Head title={page?.title ? `${page.title} - NOVITA Pharmaceutical Co., Ltd.` : `${heroTitle} - NOVITA Pharmaceutical Co., Ltd.`} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="text-green-300 font-semibold mb-2">{heroBadge}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {heroTitle}
                        </h1>
                        <p className="text-xl text-green-100">
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
                            <div className="text-green-600 font-semibold mb-2">{overviewBadge}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {overviewTitle}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {overviewContent1}
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                {overviewContent2}
                            </p>
                            <div className="flex items-center bg-green-50 rounded-lg p-4">
                                <Leaf className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                                <p className="text-green-800 font-medium">
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
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Health & Safety - Dynamic */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">{ehsBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {ehsTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {ehsSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ehsFeatures.map((f: any, idx: number) => {
                            const iconMap: Record<string, any> = { Shield, Users, Heart };
                            const Icon = f.icon ? (typeof f.icon === 'string' ? (iconMap[f.icon] || Shield) : f.icon) : [Shield, Users, Heart, Shield, Users, Users][idx % 6];
                            return (
                                <div key={f.title + idx} className="bg-card rounded-xl p-6 shadow-sm">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                                    <p className="text-muted-foreground">{f.desc || f.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Environmental Management - Static with DB fallback for title if exists */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">{envBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {envTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {envSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Recycle className="h-7 w-7 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Responsible Waste Management</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our waste management system is being designed to handle all waste streams responsibly, including pharmaceutical waste, general waste, and hazardous materials.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Waste segregation at source</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Proper storage and containment</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Licensed waste disposal partners</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Waste tracking and documentation</li>
                            </ul>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Droplets className="h-7 w-7 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Wastewater Treatment</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our facility will include a wastewater treatment system to ensure all discharged water meets environmental standards.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Pharmaceutical wastewater treatment</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />pH neutralization systems</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Biological treatment processes</li>
                                <li className="flex items-center"><div className="w-2 h-2 bg-green-400 rounded-full mr-3" />Continuous monitoring and compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Efficiency - Dynamic */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-green-600 font-semibold mb-2">{energyBadge}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {energyTitle}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {energyDesc}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start bg-green-50 rounded-lg p-4">
                                    <Zap className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground">Energy-Efficient Equipment</p>
                                        <p className="text-muted-foreground">Selection of high-efficiency HVAC systems, lighting, and manufacturing equipment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-green-50 rounded-lg p-4">
                                    <Factory className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground">Building Design</p>
                                        <p className="text-muted-foreground">Energy-efficient building insulation, natural lighting optimization, and thermal management.</p>
                                    </div>
                                </div>
                                <div className="flex items-start bg-green-50 rounded-lg p-4">
                                    <Zap className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-foreground">Monitoring Systems</p>
                                        <p className="text-muted-foreground">Energy monitoring systems to track consumption and identify efficiency opportunities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={energyImage}
                                alt={energyTitle}
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Community & Ethics - Dynamic title */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">{communityBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {communityTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {communitySubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TreePine className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Environmental Protection</h4>
                            <p className="text-muted-foreground">Minimizing environmental impact through responsible operations, pollution prevention, and continuous improvement in environmental performance.</p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Community Responsibility</h4>
                            <p className="text-muted-foreground">Engaging with local communities, supporting health initiatives, and contributing to the socioeconomic development of Myanmar.</p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Scale className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Ethical Business Practices</h4>
                            <p className="text-muted-foreground">Conducting business with integrity, transparency, and in compliance with all applicable laws and regulations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EHS Management System - Dynamic */}
            <section className="py-16 md:py-24 bg-green-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-300 font-semibold mb-2">Framework</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {frameworkTitle}
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            {frameworkSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-green-800 rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold mb-2">ISO 14001</div>
                            <p className="text-green-200">Environmental Management System</p>
                        </div>
                        <div className="bg-green-800 rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold mb-2">ISO 45001</div>
                            <p className="text-green-200">Occupational Health & Safety</p>
                        </div>
                        <div className="bg-green-800 rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold mb-2">GMP</div>
                            <p className="text-green-200">Environmental Controls</p>
                        </div>
                        <div className="bg-green-800 rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold mb-2">Local</div>
                            <p className="text-green-200">Regulatory Compliance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Dynamic */}
            <section className="py-16 md:py-24 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        {ctaSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={ctaBtnUrl}
                            className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
