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

export default function SustainabilityPage({ page }: SustainabilityProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Environment, Health & Safety';
    const heroSubtitle = hero?.subtitle || 'NOVITA is committed to sustainable pharmaceutical manufacturing with comprehensive EHS systems designed to protect our employees, community, and environment.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Sustainability & EHS';

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

            {/* Overview */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-green-600 font-semibold mb-2">Our Commitment</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Sustainable Manufacturing
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                As a pharmaceutical company committed to public health, NOVITA recognizes its responsibility to minimize environmental impact while ensuring the highest standards of employee safety and community wellbeing.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Our EHS systems are being designed and implemented in alignment with international standards and local regulatory requirements to ensure responsible and sustainable operations.
                            </p>
                            <div className="flex items-center bg-green-50 rounded-lg p-4">
                                <Leaf className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                                <p className="text-green-800 font-medium">
                                    Our goal is to achieve zero environmental incidents and maintain a safe workplace for all employees.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/sustainability-hero.jpg"
                                alt="Sustainability"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Health & Safety */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">Worker Protection</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Employee Health & Safety
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Protecting our employees is our highest priority. Our EHS systems are designed to prevent workplace injuries and occupational illnesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Safety Management System</h3>
                            <p className="text-muted-foreground">
                                Implementation of a comprehensive safety management system with clear policies, procedures, and responsibilities.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Risk Assessment</h3>
                            <p className="text-muted-foreground">
                                Regular workplace risk assessments to identify hazards and implement appropriate control measures.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Heart className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Health Surveillance</h3>
                            <p className="text-muted-foreground">
                                Employee health monitoring programs for early detection and prevention of occupational diseases.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Personal Protective Equipment</h3>
                            <p className="text-muted-foreground">
                                Appropriate PPE provided to all employees based on workplace hazard assessments.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Preparedness</h3>
                            <p className="text-muted-foreground">
                                Emergency response plans and regular drills for fire, chemical spills, and medical emergencies.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Safety Training</h3>
                            <p className="text-muted-foreground">
                                Comprehensive safety training programs for all employees including new hire orientation and refresher courses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environmental Management */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">Environmental Stewardship</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Environmental Management
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            NOVITA is committed to minimizing environmental impact through responsible waste management and resource efficiency.
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
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Waste segregation at source
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Proper storage and containment
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Licensed waste disposal partners
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Waste tracking and documentation
                                </li>
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
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Pharmaceutical wastewater treatment
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    pH neutralization systems
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Biological treatment processes
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                                    Continuous monitoring and compliance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Energy Efficiency */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-green-600 font-semibold mb-2">Resource Efficiency</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Energy Efficiency
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                NOVITA is incorporating energy-efficient design and technologies to minimize energy consumption and reduce our carbon footprint.
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
                                src="/images/energy-efficiency.jpg"
                                alt="Energy Efficiency"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Community & Ethics */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-600 font-semibold mb-2">Social Responsibility</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Community & Ethical Practices
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            NOVITA is committed to being a responsible corporate citizen and conducting business with the highest ethical standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TreePine className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Environmental Protection</h4>
                            <p className="text-muted-foreground">
                                Minimizing environmental impact through responsible operations, pollution prevention, and continuous improvement in environmental performance.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Community Responsibility</h4>
                            <p className="text-muted-foreground">
                                Engaging with local communities, supporting health initiatives, and contributing to the socioeconomic development of Myanmar.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Scale className="h-7 w-7 text-green-600" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Ethical Business Practices</h4>
                            <p className="text-muted-foreground">
                                Conducting business with integrity, transparency, and in compliance with all applicable laws and regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EHS Management System */}
            <section className="py-16 md:py-24 bg-green-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-green-300 font-semibold mb-2">Framework</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            EHS Management System
                        </h2>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Our EHS management system is being developed based on international standards to ensure systematic approach to environmental, health, and safety management.
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

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Sustainability Commitment
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        NOVITA is dedicated to sustainable pharmaceutical manufacturing that protects our employees, community, and environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
