import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, Package, HeartPulse, Bug, Brain, Wind, Clock, TestTube, Building2, FlaskConical, Syringe, Droplets, Shield, Info } from 'lucide-react';
import PublicLayout from '@/layouts/public/public-layout';
import { UnderUpgrading } from '@/components/under-upgrading';
import type { PageSection } from '@/types';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const iconMap: Record<string, any> = { Pill, Package, HeartPulse, Bug, Brain, Wind, Clock, TestTube, Building2, FlaskConical, Syringe, Droplets, Shield, Info };

interface ProductsPageProps {
    page: any;
    products?: any[];
}

export default function ProductsPage({ page, products }: ProductsPageProps) {
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Pharmaceutical Products';
    const heroSubtitle = hero?.subtitle || "NOVITA is developing a range of high-quality medicines to meet Myanmar's healthcare needs. Product information will be available following regulatory approval.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'OUR PRODUCTS';

    const noticeSec = find(['notice', 'regulatory_notice', 'disclaimer']);
    const noticeTitle = noticeSec?.title || 'Regulatory Notice';
    const noticeContent = noticeSec?.content || 'Product information will be available following regulatory approval. All claims will comply with WHO Ethical Criteria and Myanmar FDA regulations.';

    const catSec = find(['product_categories', 'categories', 'dosage_forms']);
    const catBadge = (catSec?.meta as any)?.badge || catSec?.subtitle || 'PRODUCT CATEGORIES';
    const catTitle = catSec?.title || 'Our Product Portfolio';
    const catSubtitle = catSec?.subtitle || catSec?.content || 'Focused on essential medicines in oral solid dosage forms.';
    const catItems: any[] = (catSec?.meta as any)?.items || [
        { title: 'Tablets', desc: 'Our OSD facility is designed to produce a variety of tablet formulations, including immediate-release and modified-release.', features: ['Immediate-release tablets', 'Film-coated tablets', 'Modified-release formulations'] },
        { title: 'Hard Gelatin Capsules', desc: 'Manufacturing hard gelatin capsules with various fill formulations to meet different therapeutic needs.', features: ['Powder-filled capsules', 'Pellet-filled capsules', 'Combination formulations'] },
    ];

    const therSec = find(['therapeutic_categories', 'therapeutic', 'therapeutic_focus']);
    const therBadge = (therSec?.meta as any)?.badge || therSec?.subtitle || 'THERAPEUTIC FOCUS';
    const therTitle = therSec?.title || 'Main Therapeutic Categories';
    const therSubtitle = therSec?.subtitle || therSec?.content || 'Essential medicines across key therapeutic areas.';
    const therItems: any[] = (therSec?.meta as any)?.items || [
        { title: 'Cardiovascular', desc: 'Medicines for heart and circulatory conditions' },
        { title: 'Anti-Infective', desc: 'Medicines for bacterial and fungal infections' },
        { title: 'Central Nervous System', desc: 'Pain management and neurological conditions' },
        { title: 'Respiratory', desc: 'Medicines for respiratory system conditions' },
    ];

    const pipelineSec = find(['pipeline', 'development_pipeline', 'products_under_development']);
    const pipelineBadge = (pipelineSec?.meta as any)?.badge || pipelineSec?.subtitle || 'DEVELOPMENT PIPELINE';
    const pipelineTitle = pipelineSec?.title || 'Products Under Development';
    const pipelineContent = pipelineSec?.content || 'Active pipeline focused on essential medicines — following strict quality protocols and regulatory requirements.';
    const pipelineItems: any[] = (pipelineSec?.meta as any)?.items || [
        { title: 'Regulatory Submission Phase', desc: 'Multiple products in various stages of submission to Myanmar FDA.' },
        { title: 'Clinical Evaluation', desc: 'Comprehensive quality testing and bioequivalence studies where required.' },
        { title: 'Scale-Up Planning', desc: 'Approved products will be scaled up at our new facility.' },
    ];

    const futureSec = find(['future_portfolio', 'future_products', 'expansion_portfolio']);
    const futureBadge = (futureSec?.meta as any)?.badge || futureSec?.subtitle || 'FUTURE PLANS';
    const futureTitle = futureSec?.title || 'Future Product Portfolio';
    const futureContent = futureSec?.subtitle || futureSec?.content || 'Expanding as facility and approvals progress.';
    const futureItems: any[] = (futureSec?.meta as any)?.items || [
        { title: 'Injectable Products', desc: 'Parenteral and ophthalmic preparations for hospital and clinical use.' },
        { title: 'Liquid Dosage Forms', desc: 'Syrups, suspensions, and oral solutions.' },
        { title: 'Specialty Products', desc: 'Extended-release and combination formulations.' },
    ];

    const compSec = find(['compliance', 'regulatory_compliance']);
    const compTitle = compSec?.title || 'Regulatory Compliance';
    const compContent = compSec?.content || 'All product information, promotional materials, and marketing communications will be compliant with international standards.';
    const compItems: string[] = (compSec?.meta as any)?.items || ['Based on approved and verified information', 'Compliant with Myanmar FDA regulations', 'Aligned with WHO Ethical Criteria', 'Accurate, balanced, and not misleading'];

    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || 'Partner with NOVITA';
    const ctaSubtitle = ctaSec?.subtitle || ctaSec?.content || 'For partnership and product inquiries, contact us.';
    const ctaText = ctaSec?.link_text || 'Contact Us';
    const ctaUrl = ctaSec?.link_url || '/contact';

    const isProductsEmpty = !products || products.length === 0;
    const therIcons = [HeartPulse, Bug, Brain, Wind];

    return (
        <PublicLayout>
            <Head title={page?.title ? `${page.title} - NOVITA Pharmaceutical Co., Ltd.` : `${heroTitle} - NOVITA Pharmaceutical Co., Ltd.`} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-novita/[0.07] dark:bg-novita/20 blur-[90px]" />
                    <div className="absolute bottom-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{heroBadge}</div>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{heroTitle}</h1>
                        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Notice */}
            <section className="py-6 bg-amber-50/70 dark:bg-amber-500/10 border-b border-amber-200/50 dark:border-amber-500/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-white dark:bg-amber-500/5 p-4">
                        <div className="h-10 w-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0"><Info className="h-5 w-5" /></div>
                        <div>
                            <div className="text-sm font-bold text-amber-900 dark:text-amber-200">{noticeTitle}</div>
                            <div className="text-sm text-amber-800/80 dark:text-amber-200/80">{noticeContent}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{catBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{catTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{catSubtitle}</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {catItems.map((cat: any, idx: number) => (
                            <motion.div key={cat.title + idx} variants={fadeUp} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 shadow-sm hover:shadow-xl transition">
                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-novita to-blue-400" />
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-2xl bg-novita text-white flex items-center justify-center shadow">{idx === 0 ? <Pill className="h-7 w-7" /> : <Package className="h-7 w-7" />}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{cat.desc}</p>
                                {cat.features && (
                                    <div className="mt-6 space-y-2">
                                        {cat.features.map((t: string) => (
                                            <div key={t} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="h-2 w-2 rounded-full bg-novita" />{t}</div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Therapeutic Categories */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{therBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{therTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{therSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {therItems.map((c: any, idx: number) => {
                            const Icon = therIcons[idx % therIcons.length];
                            return (
                                <div key={c.title + idx} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 text-center shadow-sm hover:shadow-lg transition">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-novita/10 dark:bg-novita/15 text-novita"><Icon className="h-6 w-6" /></div>
                                    <h4 className="mt-4 font-bold text-gray-900 dark:text-white">{c.title}</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pipeline */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {isProductsEmpty ? (
                        <UnderUpgrading title="Products Under Development" message="Product information is being updated. Detailed product portfolio will be available following regulatory approval." />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{pipelineBadge}</div>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{pipelineTitle}</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{pipelineContent}</p>
                                <div className="mt-6 space-y-3">
                                    {pipelineItems.map((item: any) => (
                                        <div key={item.title} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                            <div className="h-10 w-10 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-novita shrink-0"><Clock className="h-5 w-5" /></div>
                                            <div><div className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</div><div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                    <img src="/images/products-development.jpg" alt="Product Development" className="h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop'; }} />
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur border border-white/20 p-4 flex items-center gap-3 shadow">
                                        <div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center"><FlaskConical className="h-5 w-5" /></div>
                                        <div><div className="text-sm font-bold text-gray-900 dark:text-white">Development Lab</div><div className="text-xs text-gray-500 dark:text-gray-400">Formulation & analytical</div></div>
                                        <span className="ml-auto text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/15 px-2 py-1 rounded-full">In Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Future Portfolio - Dark */}
            <section className="relative py-14 md:py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-novita/20 blur-[80px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">{futureBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold">{futureTitle}</h2>
                        <p className="mt-3 text-white/60">{futureContent}</p>
                    </div>
                    {isProductsEmpty ? (
                        <UnderUpgrading title="Future Portfolio" message="Future portfolio information is currently being updated. Please check back soon." />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {futureItems.map((c: any) => {
                                const futIcons = [Syringe, Droplets, Pill];
                                const fIdx = futureItems.indexOf(c);
                                const FIcon = futIcons[fIdx % futIcons.length];
                                return (
                                    <div key={c.title} className="rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 text-center hover:bg-white/[0.08] transition">
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-900"><FIcon className="h-6 w-6 text-novita" /></div>
                                        <h4 className="mt-4 text-lg font-bold">{c.title}</h4>
                                        <p className="mt-2 text-sm text-white/60">{c.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Compliance */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-8 md:p-10 flex flex-col md:flex-row gap-6">
                        <div className="h-12 w-12 rounded-xl bg-novita text-white flex items-center justify-center shrink-0"><Shield className="h-6 w-6" /></div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{compTitle}</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{compContent}</p>
                            <div className="mt-4 grid sm:grid-cols-2 gap-2">
                                {compItems.map((t: string) => (
                                    <div key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">{ctaTitle}</h2><p className="mt-2 text-white/70">{ctaSubtitle}</p></div>
                            <Link href={ctaUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">{ctaText} <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
