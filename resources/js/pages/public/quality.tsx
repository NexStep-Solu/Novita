import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
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

export default function QualityPage({ page }: QualityProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Quality Commitment';
    const heroSubtitle = hero?.subtitle || 'Quality is at the heart of everything we do. Our unwavering commitment ensures every medicine meets the highest standards of safety, efficacy, and reliability.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'QUALITY';

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

            {/* Quality Policy */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">QUALITY POLICY</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Quality Policy</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">At NOVITA, we are committed to manufacturing pharmaceutical products of the highest quality that meet or exceed expectations and regulatory requirements.</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">Our pillars:</p>
                            <div className="mt-5 space-y-3">
                                {[
                                    'Compliance with all applicable regulatory requirements',
                                    'Adherence to international quality standards',
                                    'Continuous improvement of our quality management system',
                                    'Employee training and competency development',
                                ].map((t) => (
                                    <div key={t} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-3">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-sm text-gray-700 dark:text-gray-300">{t}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-2 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">Aligned with GMP principles where applicable</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src="/images/quality-policy.jpg" alt="Quality Policy" className="h-[400px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop'; }} />
                                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 dark:bg-gray-900/90 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20 shadow flex items-center gap-2 text-gray-600 dark:text-gray-300"><Shield className="h-4 w-4 text-gray-500" /> Quality System Aligned</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Patient Safety */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-500/15 text-rose-600 border border-rose-100 dark:border-rose-500/20"><Heart className="h-6 w-6" /></div>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Patient Safety Commitment</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Patient safety is our top priority — from raw material sourcing to final delivery.</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: 'Safety First', desc: 'Every product undergoes rigorous safety testing before reaching patients.' },
                            { icon: CheckCircle, title: 'Efficacy Guaranteed', desc: 'We ensure our medicines deliver the intended therapeutic benefits.' },
                            { icon: Lock, title: 'Product Integrity', desc: 'Maintaining product quality throughout the entire supply chain.' },
                        ].map((c) => (
                            <motion.div key={c.title} variants={fadeUp} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 text-center shadow-sm hover:shadow-xl transition">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-novita/10 dark:bg-novita/15 text-novita"><c.icon className="h-7 w-7" /></div>
                                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Compliance Ready - subtle, toned down */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.03] p-6 md:p-8">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-gray-600 dark:text-gray-300">COMPLIANCE READY</div>
                            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">International Quality Standards</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Designed to meet international quality standards.</p>
                        </div>
                        <div className="mx-auto max-w-4xl">
                            <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 shadow-sm flex gap-4">
                                <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0"><Award className="h-5 w-5" /></div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">Quality System Aligned</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">The facility is being planned and developed to meet international quality standards. This ensures our manufacturing processes meet the highest global standards.</p>
                                    <p className="mt-1 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">Aligned with GMP principles</p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { t: 'Quality Management System', d: 'Comprehensive QMS covering all aspects from raw material to finished product release.' },
                                    { t: 'Documentation Control', d: 'Robust document management ensuring procedures and records are controlled.' },
                                    { t: 'Change Control', d: 'Systematic approach to managing changes that may impact quality or compliance.' },
                                    { t: 'Deviation Management', d: 'Effective system for identifying, investigating, and resolving deviations.' },
                                ].map((c) => (
                                    <div key={c.t} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-5">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{c.t}</h4>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{c.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Systems - Dark */}
            <section className="relative py-14 md:py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">QUALITY SYSTEMS</div>
                        <h2 className="mt-3 text-3xl font-bold">Comprehensive Quality Framework</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: FlaskConical, title: 'Quality Control Laboratory', desc: 'HPLC, dissolution testing, and stability chambers for comprehensive product testing.' },
                            { icon: Lock, title: 'Data Integrity', desc: 'ALCOA+ principles ensuring data is Attributable, Legible, Contemporaneous, Original, Accurate.' },
                            { icon: FileCheck, title: 'Supplier Qualification', desc: 'Rigorous evaluation ensuring raw materials meet our quality standards.' },
                            { icon: GraduationCap, title: 'Employee Training', desc: 'Comprehensive quality, safety, and job-specific programs for workforce competency.' },
                            { icon: FileCheck, title: 'Validation & Qualification', desc: 'Equipment, process, cleaning, and computer system validation for consistency.' },
                            { icon: RefreshCw, title: 'Continuous Improvement', desc: 'CAPA, trend analysis, and management review for system enhancement.' },
                        ].map((c) => (
                            <div key={c.title} className="rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.08] transition">
                                <div className="h-12 w-12 rounded-xl bg-novita text-white flex items-center justify-center"><c.icon className="h-6 w-6" /></div>
                                <h4 className="mt-4 text-lg font-bold">{c.title}</h4>
                                <p className="mt-2 text-sm text-white/60">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EHS */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-100 dark:border-emerald-500/20 px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 dark:text-emerald-300">EHS COMMITMENT</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Environmental, Health & Safety</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">Protecting environment, ensuring health & safety, being a responsible corporate citizen.</p>
                            <div className="mt-6 space-y-3">
                                {[
                                    { icon: Leaf, color: 'text-emerald-600', title: 'Environmental Protection', desc: 'Waste management, emission control, and sustainable practices.' },
                                    { icon: Shield, color: 'text-novita', title: 'Occupational Safety', desc: 'Safe working conditions preventing workplace injuries.' },
                                    { icon: Heart, color: 'text-rose-500', title: 'Employee Health', desc: 'Regular health monitoring and wellness programs.' },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                        <item.icon className={`h-6 w-6 ${item.color} shrink-0 mt-0.5`} />
                                        <div><div className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</div><div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src="/images/ehs.jpg" alt="EHS" className="h-[380px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop'; }} />
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
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">Quality You Can Trust</h2><p className="mt-2 text-white/70">Learn more about our products and commitment to excellence.</p></div>
                            <div className="flex gap-3">
                                <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">View Our Products <ArrowRight className="h-4 w-4" /></Link>
                                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-6 py-3 text-sm font-bold text-white hover:bg-white/15 transition">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
