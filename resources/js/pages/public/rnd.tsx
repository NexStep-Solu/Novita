import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
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

export default function RndPage({ page }: RndProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Our R&D Direction';
    const heroSubtitle = hero?.subtitle || "NOVITA is building a research and development foundation focused on developing quality medicines that meet Myanmar's healthcare needs.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Innovation';

    return (
        <PublicLayout>
            <Head title={page?.title ? `${page.title} - NOVITA Pharmaceutical Co., Ltd.` : `${heroTitle} - NOVITA Pharmaceutical Co., Ltd.`} />

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

            {/* Overview */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-novita font-semibold mb-2">Our Vision</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Building R&D Capabilities
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                NOVITA recognizes that a strong research and development function is essential for long-term success in the pharmaceutical industry. We are strategically building our R&D capabilities to support our mission of providing quality medicines.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                While our R&D team is currently being established, we have defined clear strategic directions that will guide our product development efforts and innovation initiatives.
                            </p>
                            <div className="flex items-center bg-novita/5 rounded-lg p-4">
                                <Target className="h-6 w-6 text-novita mr-3 flex-shrink-0" />
                                <p className="text-novita-dark font-medium">
                                    Our goal is to develop products that address the specific healthcare needs of Myanmar's population.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/rnd-vision.jpg"
                                alt="R&D Vision"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Focus Areas */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">Focus Areas</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Key Development Areas
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our R&D strategy focuses on these core areas to ensure product quality and market relevance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <FlaskConical className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Formulation Development</h3>
                            <p className="text-muted-foreground">
                                Developing optimal drug formulations that ensure efficacy, stability, and patient compliance. Our focus includes solid oral dosage forms with potential expansion to other forms.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <Beaker className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Analytical Method Development</h3>
                            <p className="text-muted-foreground">
                                Establishing robust analytical methods for product testing, quality control, and stability assessment using modern analytical techniques.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Product Improvement</h3>
                            <p className="text-muted-foreground">
                                Continuous enhancement of existing formulations to improve bioavailability, reduce side effects, and enhance patient experience.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <Lightbulb className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Technology Transfer</h3>
                            <p className="text-muted-foreground">
                                Adapting and implementing proven pharmaceutical technologies to our manufacturing processes for efficient scale-up.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <TestTube className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Stability Studies</h3>
                            <p className="text-muted-foreground">
                                Conducting comprehensive stability studies to establish product shelf life and storage conditions according to ICH guidelines.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-novita/10 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-novita" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Technical Partnerships</h3>
                            <p className="text-muted-foreground">
                                Collaborating with international pharmaceutical companies and research institutions for knowledge transfer and capability building.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Approach */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/images/rnd-approach.jpg"
                                alt="R&D Approach"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="text-novita font-semibold mb-2">Our Approach</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Strategic Development Approach
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our R&D strategy is built on a foundation of scientific rigor, regulatory compliance, and market needs assessment.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-novita/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-novita font-bold">1</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Market Needs Assessment</p>
                                        <p className="text-muted-foreground">Identifying healthcare gaps and essential medicine needs in Myanmar.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-novita/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-novita font-bold">2</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Scientific Evaluation</p>
                                        <p className="text-muted-foreground">Feasibility studies and technical assessment of potential products.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-novita/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-novita font-bold">3</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Development & Validation</p>
                                        <p className="text-muted-foreground">Formulation development, analytical method validation, and stability studies.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-novita/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-novita font-bold">4</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Regulatory Submission</p>
                                        <p className="text-muted-foreground">Preparing and submitting dossiers to Myanmar FDA for approval.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration */}
            <section className="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-gray-300 font-semibold mb-2">Partnerships</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Collaboration with Technical Partners
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            NOVITA seeks to establish strategic partnerships to accelerate our R&D capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card dark:bg-gray-900 rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-novita rounded-full flex items-center justify-center mx-auto mb-4">
                                <Microscope className="h-7 w-7" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Research Institutions</h4>
                            <p className="text-muted-foreground">Collaborating with universities and research centers for scientific expertise and knowledge exchange.</p>
                        </div>

                        <div className="bg-card dark:bg-gray-900 rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-novita rounded-full flex items-center justify-center mx-auto mb-4">
                                <FlaskConical className="h-7 w-7" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">International Pharma Companies</h4>
                            <p className="text-muted-foreground">Technology transfer partnerships for proven formulations and manufacturing processes.</p>
                        </div>

                        <div className="bg-card dark:bg-gray-900 rounded-xl p-6 text-center">
                            <div className="w-14 h-14 bg-novita rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Industry Consultants</h4>
                            <p className="text-muted-foreground">Engaging expert consultants for specialized R&D projects and capability building.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-novita text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in R&D Collaboration?
                    </h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        We welcome opportunities to collaborate with research institutions and pharmaceutical partners.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-novita px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
