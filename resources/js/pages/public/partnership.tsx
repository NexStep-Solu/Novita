import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Handshake, Settings, Package, Truck, Mail, Send, CheckCircle, Award, Globe, Users } from 'lucide-react';
import PublicLayout from '@/layouts/public/public-layout';
import { SeoHead, organizationSchema, breadcrumbSchema } from '@/components/seo-head';
import type { PageSection } from '@/types';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const oppIcons = [Handshake, Settings, Package, Truck];

interface PartnershipProps {
    page: any;
}

export default function PartnershipPage({ page }: PartnershipProps) {
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Business Partnership';
    const heroSubtitle = hero?.subtitle || 'NOVITA seeks to build strategic partnerships with companies that share our vision of providing quality medicines for Myanmar.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'Partnerships';

    const oppSec = find(['opportunities', 'partnership_opportunities']);
    const oppBadge = (oppSec?.meta as any)?.badge || oppSec?.subtitle || 'Opportunities';
    const oppTitle = oppSec?.title || 'Partnership Opportunities';
    const oppContent = oppSec?.content || 'We are looking for partners who can help us achieve our mission of providing quality medicines.';
    const oppItems: any[] = (oppSec?.meta as any)?.items || [
        { title: 'Technical Collaboration', desc: 'Partner with NOVITA to provide technical expertise in pharmaceutical manufacturing, quality systems, and regulatory compliance.', features: ['Manufacturing process optimization', 'Quality management system development', 'Regulatory consulting', 'Training and knowledge transfer'] },
        { title: 'Equipment & Technology Partners', desc: 'Supply pharmaceutical manufacturing equipment, analytical instruments, and technology solutions for our facility.', features: ['Manufacturing equipment', 'Quality control instruments', 'HVAC and utility systems', 'Packaging machinery'] },
        { title: 'Raw & Packaging Material Suppliers', desc: 'Supply pharmaceutical-grade raw materials, active pharmaceutical ingredients (APIs), and packaging materials.', features: ['Active Pharmaceutical Ingredients (APIs)', 'Excipients and raw materials', 'Primary packaging materials', 'Secondary and tertiary packaging'] },
        { title: 'Distribution Partnerships', desc: 'Partner with us to distribute NOVITA products across Myanmar and regional markets.', features: ['National distribution network', 'Hospital and clinic supply', 'Pharmacy chain partnerships', 'Regional market expansion'] },
    ];

    const cmSec = find(['contract_manufacturing', 'contract_mfg']);
    const cmTitle = cmSec?.title || 'Contract Manufacturing';
    const cmSubtitle = cmSec?.subtitle || 'Future Opportunity';
    const cmContent = cmSec?.content || 'In the future, NOVITA plans to offer contract manufacturing services to pharmaceutical companies looking for a reliable manufacturing partner in Myanmar.';
    const cmHighlight = (cmSec?.meta as any)?.highlight || 'Contract manufacturing services will be available once our facility is fully operational and regulatory approvals are in place.';

    const whySec = find(['why_partner', 'why_partnership', 'benefits']);
    const whyBadge = (whySec?.meta as any)?.badge || whySec?.subtitle || 'Benefits';
    const whyTitle = whySec?.title || 'Why Partner with NOVITA';
    const whyItems: any[] = (whySec?.meta as any)?.items || [
        { title: 'Quality Commitment', desc: 'We maintain the highest quality standards in pharmaceutical manufacturing, ensuring reliable partnerships.' },
        { title: 'International Standards', desc: 'Our facility is designed to meet international GMP standards, ensuring compatibility with global partners.' },
        { title: 'KTECG Group Support', desc: "Backed by KTECG Group's 20+ years of experience in pharmaceutical construction." },
    ];
    const whyIcons = [Award, Globe, Users];

    const inqSec = find(['inquiry_info', 'inquiry', 'form_info']);
    const inqBadge = (inqSec?.meta as any)?.badge || inqSec?.subtitle || 'Get in Touch';
    const inqTitle = inqSec?.title || 'Partnership Inquiry';
    const inqContent = inqSec?.content || 'Interested in partnering with NOVITA? Fill out the form below and our business development team will contact you.';
    const inqEmail = (inqSec?.meta as any)?.email || 'partnerships@novita.com';
    const inqTypes: string[] = (inqSec?.meta as any)?.types || ['Technical Collaboration', 'Equipment & Technology Supply', 'Raw & Packaging Material Supply', 'Distribution Partnership'];

    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || "Let's Build Together";
    const ctaSubtitle = ctaSec?.subtitle || 'Join NOVITA in our mission to provide quality medicines for Myanmar.';
    const ctaText = ctaSec?.link_text || 'Contact Us';
    const ctaUrl = ctaSec?.link_url || 'mailto:partnerships@novita.com';

    const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', partnershipType: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

    return (
        <PublicLayout>
            <SeoHead
                title={page?.title || 'Business Partnership'}
                description="Partner with NOVITA Pharmaceutical - contract manufacturing, distribution opportunities, and business collaborations in Myanmar."
                keywords="pharmaceutical partnership, contract manufacturing, business collaboration, Myanmar distribution"
                canonical="/partnership"
                jsonLd={[organizationSchema(), breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Partnership', url: '/partnership' }])]}
            />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-novita text-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="text-gray-300 font-semibold mb-2">{heroBadge}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>
                        <p className="text-xl text-gray-300">{heroSubtitle}</p>
                    </div>
                </div>
            </section>

            {/* Opportunities */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">{oppBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{oppTitle}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{oppContent}</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {oppItems.map((item: any, idx: number) => {
                            const Icon = oppIcons[idx % oppIcons.length];
                            return (
                                <motion.div key={item.title + idx} variants={fadeUp} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-14 h-14 bg-novita/10 rounded-xl flex items-center justify-center"><Icon className="h-7 w-7 text-novita" /></div>
                                        <h3 className="text-2xl font-bold text-foreground ml-4">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                                    {item.features && (
                                        <ul className="space-y-2 text-muted-foreground">
                                            {item.features.map((f: string) => (
                                                <li key={f} className="flex items-center"><div className="w-2 h-2 bg-novita rounded-full mr-3" />{f}</li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Contract Manufacturing */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-novita font-semibold mb-2">{cmSubtitle}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{cmTitle}</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{cmContent}</p>
                            <div className="bg-novita/5 rounded-lg p-4"><p className="text-novita-dark font-medium">{cmHighlight}</p></div>
                        </div>
                        <div className="relative">
                            <img src="/images/contract-manufacturing.jpg" alt="Contract Manufacturing" className="rounded-2xl shadow-lg w-full h-auto object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'; }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="text-novita font-semibold mb-2">{whyBadge}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{whyTitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyItems.map((item: any, idx: number) => {
                            const Icon = whyIcons[idx % whyIcons.length];
                            return (
                                <div key={item.title + idx} className="bg-card rounded-xl p-6 shadow-sm text-center">
                                    <div className="w-14 h-14 bg-novita/10 rounded-full flex items-center justify-center mx-auto mb-4"><Icon className="h-7 w-7 text-novita" /></div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="text-novita font-semibold mb-2">{inqBadge}</div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{inqTitle}</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{inqContent}</p>
                            <div className="bg-novita/5 rounded-xl p-6 mb-6">
                                <div className="flex items-center mb-4">
                                    <Mail className="h-6 w-6 text-novita mr-3" />
                                    <div><p className="font-semibold text-foreground">Or email us directly:</p><a href={`mailto:${inqEmail}`} className="text-novita hover:underline">{inqEmail}</a></div>
                                </div>
                            </div>
                            <div className="bg-muted/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Partnership Types:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    {inqTypes.map((t: string) => (
                                        <li key={t} className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            {submitted ? (
                                <div className="bg-green-50 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                                    <p className="text-muted-foreground">Your partnership inquiry has been received. Our business development team will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm space-y-6">
                                    <div><label className="block text-sm font-medium text-foreground mb-2">Company Name *</label><input type="text" required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} /></div>
                                    <div><label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label><input type="text" required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                                    <div><label className="block text-sm font-medium text-foreground mb-2">Email Address *</label><input type="email" required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                                    <div><label className="block text-sm font-medium text-foreground mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Partnership Type *</label>
                                        <select required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" value={formData.partnershipType} onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}>
                                            <option value="">Select partnership type</option>
                                            <option value="technical">Technical Collaboration</option>
                                            <option value="equipment">Equipment & Technology Supply</option>
                                            <option value="raw-material">Raw & Packaging Material Supply</option>
                                            <option value="distribution">Distribution Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div><label className="block text-sm font-medium text-foreground mb-2">Message *</label><textarea rows={4} required className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-novita focus:border-transparent" placeholder="Tell us about your company and partnership proposal..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></div>
                                    <button type="submit" className="w-full bg-novita text-white px-8 py-4 rounded-lg font-semibold hover:bg-novita-dark transition-colors inline-flex items-center justify-center">Submit Inquiry <Send className="ml-2 h-5 w-5" /></button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-novita text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">{ctaSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={ctaUrl} className="inline-flex items-center justify-center bg-white text-novita px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">{ctaText} <Mail className="ml-2 h-5 w-5" /></a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
