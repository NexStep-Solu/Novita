import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { SeoHead, organizationSchema, breadcrumbSchema } from '@/components/seo-head';
import { ArrowRight, Shield, CheckCircle, FlaskConical, Users, FileCheck, GraduationCap, Leaf, Heart, Award, Lock, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

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

interface QualityProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

function resolveImage(path: string | null | undefined, fallback: string) {
    if (!path) return fallback;
    if (path.startsWith('http') || path.startsWith('/')) return path;
    return `/storage/${path}`;
}

export default function QualityPage({ page }: QualityProps) {
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Quality Commitment';
    const heroSubtitle = hero?.subtitle || 'Quality is at the heart of everything we do. Our unwavering commitment ensures every medicine meets the highest standards of safety, efficacy, and reliability.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'QUALITY';

    // Quality Policy - dynamic, supports legacy 'content'
    const policySec = find(['quality_policy', 'policy', 'content', 'quality', 'overview']);
    const policyBadge = (policySec?.meta as any)?.badge || policySec?.subtitle || 'QUALITY POLICY';
    const policyTitle = policySec?.title || 'Our Quality Policy';
    const policyDesc = policySec?.content?.split('\n\n')[0] || 'At NOVITA, we are committed to manufacturing pharmaceutical products of the highest quality that meet or exceed expectations and regulatory requirements.';
    const policyDesc2 = policySec?.content?.split('\n\n')[1] || '';
    const policyPillars: string[] = (policySec?.meta as any)?.pillars || (policySec?.meta as any)?.features || [
        'Compliance with all applicable regulatory requirements',
        'Adherence to international quality standards',
        'Continuous improvement of our quality management system',
        'Employee training and competency development',
    ];
    const policyImage = resolveImage(policySec?.image_path, '/images/quality-policy.jpg');
    const policyGmpNote = (policySec?.meta as any)?.gmp_note || 'Aligned with GMP principles where applicable';

    // Patient Safety
    const safetySec = find(['patient_safety', 'safety', 'patient', 'commitment']);
    const safetyTitle = safetySec?.title || 'Patient Safety Commitment';
    const safetySubtitle = safetySec?.subtitle || safetySec?.content || 'Patient safety is our top priority — from raw material sourcing to final delivery.';
    const safetyCards: any[] = (safetySec?.meta as any)?.cards || (safetySec?.meta as any)?.features || [
        { icon: Shield, title: 'Safety First', desc: 'Every product undergoes rigorous safety testing before reaching patients.' },
        { icon: CheckCircle, title: 'Efficacy Guaranteed', desc: 'We ensure our medicines deliver the intended therapeutic benefits.' },
        { icon: Lock, title: 'Product Integrity', desc: 'Maintaining product quality throughout the entire supply chain.' },
    ];

    // Compliance Ready / GMP
    const gmpSec = find(['gmp', 'compliance', 'compliance_ready', 'certifications', 'features', 'gmp_standards', 'international_standards']);
    const gmpBadge = (gmpSec?.meta as any)?.badge || gmpSec?.subtitle || 'COMPLIANCE READY';
    const gmpTitle = gmpSec?.title || 'International Quality Standards';
    const gmpSubtitle = gmpSec?.subtitle && gmpSec?.subtitle !== gmpBadge ? gmpSec.subtitle : (gmpSec?.content || 'Designed to meet international quality standards.');
    // gmp main card: title, desc
    const gmpMainTitle = (gmpSec?.meta as any)?.main_title || 'Quality System Aligned';
    const gmpMainDesc = (gmpSec?.meta as any)?.main_desc || (gmpSec?.content?.split('\n\n')[0]) || 'The facility is being planned and developed to meet international quality standards. This ensures our manufacturing processes meet the highest global standards.';
    const gmpNote = (gmpSec?.meta as any)?.gmp_note || 'Aligned with GMP principles';
    // if gmpSec is legacy 'features' with ISO cards, then we need to handle that as fallback for features section? But we have separate quality systems; for gmp we have 4 cards subtle
    const gmpFeatures: any[] = (gmpSec?.meta as any)?.features ? (
        // if features contains ISO cards (with icon award, leaf etc), those are probably for certifications; we need to distinguish. For quality page, legacy features is ISO certs. We should detect: if features has ISO titles, use fallback gmp cards instead.
        ((gmpSec?.meta as any).features.some((f: any) => f.title?.includes('ISO')) ? [
            { t: 'Quality Management System', d: 'Comprehensive QMS covering all aspects from raw material to finished product release.' },
            { t: 'Documentation Control', d: 'Robust document management ensuring procedures and records are controlled.' },
            { t: 'Change Control', d: 'Systematic approach to managing changes that may impact quality or compliance.' },
            { t: 'Deviation Management', d: 'Effective system for identifying, investigating, and resolving deviations.' },
        ] : (gmpSec?.meta as any).features)
    ) : [
        { t: 'Quality Management System', d: 'Comprehensive QMS covering all aspects from raw material to finished product release.' },
        { t: 'Documentation Control', d: 'Robust document management ensuring procedures and records are controlled.' },
        { t: 'Change Control', d: 'Systematic approach to managing changes that may impact quality or compliance.' },
        { t: 'Deviation Management', d: 'Effective system for identifying, investigating, and resolving deviations.' },
    ];

    // Quality Systems - Dark
    const systemsSec = find(['quality_systems', 'systems', 'framework', 'comprehensive_quality', 'quality_framework']);
    const systemsBadge = (systemsSec?.meta as any)?.badge || systemsSec?.subtitle || 'QUALITY SYSTEMS';
    const systemsTitle = systemsSec?.title || 'Comprehensive Quality Framework';
    const systemsSubtitle = systemsSec?.content || '';
    const systemsCards: any[] = (systemsSec?.meta as any)?.cards || (systemsSec?.meta as any)?.features || (systemsSec?.meta as any)?.items || [
        { icon: FlaskConical, title: 'Quality Control Laboratory', desc: 'HPLC, dissolution testing, and stability chambers for comprehensive product testing.' },
        { icon: Lock, title: 'Data Integrity', desc: 'ALCOA+ principles ensuring data is Attributable, Legible, Contemporaneous, Original, Accurate.' },
        { icon: FileCheck, title: 'Supplier Qualification', desc: 'Rigorous evaluation ensuring raw materials meet our quality standards.' },
        { icon: GraduationCap, title: 'Employee Training', desc: 'Comprehensive quality, safety, and job-specific programs for workforce competency.' },
        { icon: FileCheck, title: 'Validation & Qualification', desc: 'Equipment, process, cleaning, and computer system validation for consistency.' },
        { icon: RefreshCw, title: 'Continuous Improvement', desc: 'CAPA, trend analysis, and management review for system enhancement.' },
    ];

    // EHS
    const ehsSec = find(['ehs', 'environment', 'environmental', 'health_safety', 'ehs_commitment']);
    const ehsBadge = (ehsSec?.meta as any)?.badge || ehsSec?.subtitle || 'EHS COMMITMENT';
    const ehsTitle = ehsSec?.title || 'Environmental, Health & Safety';
    const ehsSubtitle = ehsSec?.content?.split('\n\n')[0] || ehsSec?.subtitle || 'Protecting environment, ensuring health & safety, being a responsible corporate citizen.';
    const ehsDesc = ehsSec?.content?.split('\n\n')[1] || '';
    const ehsImage = resolveImage(ehsSec?.image_path, '/images/ehs.jpg');
    const ehsItems: any[] = (ehsSec?.meta as any)?.items || (ehsSec?.meta as any)?.features || [
        { icon: Leaf, color: 'text-emerald-600', title: 'Environmental Protection', desc: 'Waste management, emission control, and sustainable practices.' },
        { icon: Shield, color: 'text-novita', title: 'Occupational Safety', desc: 'Safe working conditions preventing workplace injuries.' },
        { icon: Heart, color: 'text-rose-500', title: 'Employee Health', desc: 'Regular health monitoring and wellness programs.' },
    ];

    // CTA
    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || 'Quality You Can Trust';
    const ctaSubtitle = ctaSec?.subtitle || ctaSec?.content || 'Learn more about our products and commitment to excellence.';
    const ctaPrimaryText = ctaSec?.link_text || 'View Our Products';
    const ctaPrimaryUrl = ctaSec?.link_url || '/products';
    const ctaSecondaryText = (ctaSec?.meta as any)?.secondary_text || (ctaSec?.meta as any)?.secondaryText || 'Contact Us';
    const ctaSecondaryUrl = (ctaSec?.meta as any)?.secondary_url || (ctaSec?.meta as any)?.secondaryUrl || '/contact';

    return (
        <PublicLayout>
            <SeoHead
                title={page?.title || 'Quality Assurance'}
                description="NOVITA's commitment to pharmaceutical quality - GMP compliance, quality systems, patient safety, and environmental health & safety."
                keywords="pharmaceutical quality, GMP, quality assurance, patient safety, EHS, quality management"
                canonical="/quality"
                jsonLd={[organizationSchema(), breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Quality', url: '/quality' }])]}
            />

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

            {/* Quality Policy - Dynamic */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{policyBadge}</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{policyTitle}</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{policyDesc}</p>
                            {policyDesc2 && <p className="mt-3 text-gray-600 dark:text-gray-300">{policyDesc2}</p>}
                            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm font-medium">Our pillars:</p>
                            <div className="mt-5 space-y-3">
                                {policyPillars.map((t: any) => {
                                    const title = typeof t === 'string' ? t : (t.title || t.label || '');
                                    const desc = typeof t === 'string' ? '' : (t.desc || t.description || '');
                                    return (
                                        <div key={title} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-3">
                                            <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-sm text-gray-700 dark:text-gray-300">{title}{desc ? ` — ${desc}` : ''}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="mt-2 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">{policyGmpNote}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src={policyImage} alt={policyTitle} className="h-[400px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop'; }} />
                                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 dark:bg-gray-900/90 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20 shadow flex items-center gap-2 text-gray-600 dark:text-gray-300"><Shield className="h-4 w-4 text-gray-500" /> Quality System Aligned</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Patient Safety - Dynamic */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-500/15 text-rose-600 border border-rose-100 dark:border-rose-500/20"><Heart className="h-6 w-6" /></div>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{safetyTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{safetySubtitle}</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {safetyCards.map((c: any, idx: number) => {
                            const iconMap: Record<string, any> = { Shield, CheckCircle, Lock, Heart, Award };
                            const title = c.title || `Card ${idx+1}`;
                            const desc = c.desc || c.description || '';
                            const Icon = c.icon ? (typeof c.icon === 'string' ? (iconMap[c.icon] || Shield) : c.icon) : [Shield, CheckCircle, Lock][idx % 3];
                            return (
                                <motion.div key={title + idx} variants={fadeUp} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 text-center shadow-sm hover:shadow-xl transition">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-novita/10 dark:bg-novita/15 text-novita"><Icon className="h-7 w-7" /></div>
                                    <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Compliance Ready - Dynamic */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.03] p-6 md:p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-gray-600 dark:text-gray-300">{gmpBadge}</div>
                            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{gmpTitle}</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{gmpSubtitle}</p>
                        </div>
                        <div className="mx-auto max-w-4xl">
                            <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 shadow-sm flex gap-4">
                                <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0"><Award className="h-5 w-5" /></div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{gmpMainTitle}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{gmpMainDesc}</p>
                                    <p className="mt-1 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">{gmpNote}</p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {gmpFeatures.map((c: any) => {
                                    const t = c.t || c.title || '';
                                    const d = c.d || c.desc || c.description || '';
                                    return (
                                        <div key={t} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-5">
                                            <h4 className="font-bold text-gray-900 dark:text-white">{t}</h4>
                                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{d}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Systems - Dark - Dynamic */}
            <section className="relative py-14 md:py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">{systemsBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold">{systemsTitle}</h2>
                        {systemsSubtitle && <p className="mt-3 text-white/60 max-w-2xl mx-auto">{systemsSubtitle}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {systemsCards.map((c: any, idx: number) => {
                            const iconMap: Record<string, any> = { FlaskConical, Lock, FileCheck, GraduationCap, RefreshCw, Shield, Award };
                            const Icon = c.icon ? (typeof c.icon === 'string' ? (iconMap[c.icon] || FlaskConical) : c.icon) : [FlaskConical, Lock, FileCheck, GraduationCap, FileCheck, RefreshCw][idx % 6];
                            const title = c.title || `System ${idx+1}`;
                            const desc = c.desc || c.description || '';
                            return (
                                <div key={title + idx} className="rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.08] transition">
                                    <div className="h-12 w-12 rounded-xl bg-novita text-white flex items-center justify-center"><Icon className="h-6 w-6" /></div>
                                    <h4 className="mt-4 text-lg font-bold">{title}</h4>
                                    <p className="mt-2 text-sm text-white/60">{desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* EHS - Dynamic */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-100 dark:border-emerald-500/20 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 dark:text-emerald-300">{ehsBadge}</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{ehsTitle}</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">{ehsSubtitle}</p>
                            {ehsDesc && <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">{ehsDesc}</p>}
                            <div className="mt-6 space-y-3">
                                {ehsItems.map((item: any, idx: number) => {
                                    const iconMap: Record<string, any> = { Leaf, Shield, Heart };
                                    const Icon = item.icon ? (typeof item.icon === 'string' ? (iconMap[item.icon] || Leaf) : item.icon) : [Leaf, Shield, Heart][idx % 3];
                                    const color = item.color || ['text-emerald-600','text-novita','text-rose-500'][idx % 3];
                                    const title = item.title || `EHS ${idx+1}`;
                                    const desc = item.desc || item.description || '';
                                    return (
                                        <div key={title} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                            <Icon className={`h-6 w-6 ${color} shrink-0 mt-0.5`} />
                                            <div><div className="text-sm font-bold text-gray-900 dark:text-white">{title}</div><div className="text-sm text-gray-600 dark:text-gray-400">{desc}</div></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src={ehsImage} alt={ehsTitle} className="h-[380px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop'; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Dynamic */}
            <section className="py-12 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">{ctaTitle}</h2><p className="mt-2 text-white/70">{ctaSubtitle}</p></div>
                            <div className="flex gap-3">
                                <Link href={ctaPrimaryUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">{ctaPrimaryText} <ArrowRight className="h-4 w-4" /></Link>
                                <Link href={ctaSecondaryUrl} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 text-sm font-bold text-white hover:bg-white/15 transition">{ctaSecondaryText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
