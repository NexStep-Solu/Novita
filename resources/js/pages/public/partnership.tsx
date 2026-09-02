import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Handshake, Settings, Package, Truck, Factory, Mail, Send, CheckCircle, Globe, Users, Award, Building2 } from 'lucide-react';

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

interface PartnershipProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

export default function PartnershipPage({ page }: PartnershipProps) {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Business Partnership';
    const heroSubtitle = hero?.subtitle || 'NOVITA seeks to build strategic partnerships with companies that share our vision of providing quality medicines for Myanmar.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Partnerships';

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

            {/* Partnership Opportunities */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">Opportunities</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Partnership Opportunities
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We are looking for partners who can help us achieve our mission of providing quality medicines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Technical Collaboration */}
                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-novita/10 rounded-xl flex items-center justify-center">
                                    <Handshake className="h-7 w-7 text-novita" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Technical Collaboration</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Partner with NOVITA to provide technical expertise in pharmaceutical manufacturing, quality systems, and regulatory compliance.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Manufacturing process optimization
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Quality management system development
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Regulatory consulting
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Training and knowledge transfer
                                </li>
                            </ul>
                        </div>

                        {/* Equipment & Technology Partners */}
                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-novita/10 rounded-xl flex items-center justify-center">
                                    <Settings className="h-7 w-7 text-novita" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Equipment & Technology Partners</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Supply pharmaceutical manufacturing equipment, analytical instruments, and technology solutions for our facility.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Manufacturing equipment
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Quality control instruments
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    HVAC and utility systems
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Packaging machinery
                                </li>
                            </ul>
                        </div>

                        {/* Raw & Packaging Material Suppliers */}
                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-novita/10 rounded-xl flex items-center justify-center">
                                    <Package className="h-7 w-7 text-novita" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Raw & Packaging Material Suppliers</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Supply pharmaceutical-grade raw materials, active pharmaceutical ingredients (APIs), and packaging materials.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Active Pharmaceutical Ingredients (APIs)
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Excipients and raw materials
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Primary packaging materials
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Secondary and tertiary packaging
                                </li>
                            </ul>
                        </div>

                        {/* Distribution Partnerships */}
                        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="w-14 h-14 bg-novita/10 rounded-xl flex items-center justify-center">
                                    <Truck className="h-7 w-7 text-novita" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground ml-4">Distribution Partnerships</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Partner with us to distribute NOVITA products across Myanmar and regional markets.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    National distribution network
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Hospital and clinic supply
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Pharmacy chain partnerships
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-novita rounded-full mr-3" />
                                    Regional market expansion
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contract Manufacturing - Future */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-novita font-semibold mb-2">Future Opportunity</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Contract Manufacturing
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                In the future, NOVITA plans to offer contract manufacturing services to pharmaceutical companies looking for a reliable manufacturing partner in Myanmar.
                            </p>
                            <div className="bg-novita/5 rounded-lg p-4">
                                <p className="text-novita-dark font-medium">
                                    Contract manufacturing services will be available once our facility is fully operational and regulatory approvals are in place.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/contract-manufacturing.jpg"
                                alt="Contract Manufacturing"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner with NOVITA */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">Benefits</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why Partner with NOVITA
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-novita/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-7 w-7 text-novita" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">Quality Commitment</h4>
                            <p className="text-muted-foreground">
                                We maintain the highest quality standards in pharmaceutical manufacturing, ensuring reliable partnerships.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-novita/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-7 w-7 text-novita" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">International Standards</h4>
                            <p className="text-muted-foreground">
                                Our facility is designed to meet international GMP standards, ensuring compatibility with global partners.
                            </p>
                        </div>

                        <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                            <div className="w-14 h-14 bg-novita/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-7 w-7 text-novita" />
                            </div>
                            <h4 className="text-xl font-semibold text-foreground mb-2">KTECG Group Support</h4>
                            <p className="text-muted-foreground">
                                Backed by KTECG Group's 20+ years of experience in pharmaceutical construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Inquiry Form */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form Info */}
                        <div>
                            <div className="text-novita font-semibold mb-2">Get in Touch</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Partnership Inquiry
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Interested in partnering with NOVITA? Fill out the form below and our business development team will contact you.
                            </p>

                            <div className="bg-novita/5 rounded-xl p-6 mb-6">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-novita mr-3" />
                                    <div>
                                        <p className="font-semibold text-foreground">Or email us directly:</p>
                                        <a href="mailto:partnerships@novita.com" className="text-novita hover:underline">
                                            partnerships@novita.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Partnership Types:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        Technical Collaboration
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        Equipment & Technology Supply
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        Raw & Packaging Material Supply
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        Distribution Partnership
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div>
                            {submitted ? (
                                <div className="bg-green-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                                    <p className="text-muted-foreground">
                                        Your partnership inquiry has been received. Our business development team will contact you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Company Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Contact Person *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Partnership Type *
                                        </label>
                                        <select
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            value={formData.partnershipType}
                                            onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                                        >
                                            <option value="">Select partnership type</option>
                                            <option value="technical">Technical Collaboration</option>
                                            <option value="equipment">Equipment & Technology Supply</option>
                                            <option value="raw-material">Raw & Packaging Material Supply</option>
                                            <option value="distribution">Distribution Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent"
                                            placeholder="Tell us about your company and partnership proposal..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-novita text-white px-8 py-4 rounded-lg font-semibold hover:bg-novita-dark transition-colors inline-flex items-center justify-center"
                                    >
                                        Submit Inquiry
                                        <Send className="ml-2 h-5 w-5" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-novita text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's Build Together
                    </h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        Join NOVITA in our mission to provide quality medicines for Myanmar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:partnerships@novita.com"
                            className="inline-flex items-center justify-center bg-white text-novita px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Contact Us
                            <Mail className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
