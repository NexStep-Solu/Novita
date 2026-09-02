import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, MapPin, Ruler, Building2, FlaskConical, Warehouse, Wrench, TrendingUp, Clock, CheckCircle, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { UnderUpgrading } from '@/components/under-upgrading';

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

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

interface FacilityProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

export default function FacilityPage({ page }: FacilityProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Our New Manufacturing Facility';
    const heroSubtitle = hero?.subtitle || 'State-of-the-art pharmaceutical manufacturing facility designed to meet international quality standards — built for today, scalable for tomorrow.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'OUR FACILITY';
    const activeSections = (((page as any)?.active_sections || (page as any)?.activeSections) as PageSection[] | undefined) || [];
    const expansionSection = activeSections.find((s) => s.section_type === 'expansion' || s.section_type === 'future_expansion' || s.section_type === 'future_plans');
    const constructionSection = activeSections.find((s) => s.section_type === 'construction' || s.section_type === 'construction_progress');
    const isExpansionPlaceholder = !expansionSection || (expansionSection as any)?.meta?.is_placeholder || (expansionSection as any)?.meta?.under_upgrading;
    const isConstructionPlaceholder = !constructionSection || (constructionSection as any)?.meta?.is_placeholder || (constructionSection as any)?.meta?.under_upgrading;
    // When no dedicated expansion/construction sections exist, treat as placeholder to satisfy spec fallback
    const showExpansionFallback = isExpansionPlaceholder;
    const showConstructionFallback = isConstructionPlaceholder;

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
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow"><span className="h-2 w-2 rounded-full bg-white animate-pulse" />Under Development</div>
                        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">PROJECT OVERVIEW</div>
                            <h2 className="mt-3 text-3xl md:text-[34px] font-bold tracking-tight text-gray-900 dark:text-white">Building the Future of Pharmaceutical Manufacturing</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">NOVITA is currently developing a new state-of-the-art manufacturing facility designed to produce high-quality pharmaceutical products that meet international standards.</p>
                            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">This facility represents our commitment to providing safe, effective, and affordable medicines to Myanmar. With modern equipment and world-class infrastructure, we are building for decades to come.</p>
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {[
                                    { icon: MapPin, t: 'Strategic Location' },
                                    { icon: Ruler, t: 'Modern Infrastructure' },
                                    { icon: Building2, t: 'International Standards' },
                                    { icon: TrendingUp, t: 'Future Expansion Ready' },
                                ].map((item) => (
                                    <div key={item.t} className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] px-4 py-3">
                                        <div className="h-9 w-9 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-novita"><item.icon className="h-5 w-5" /></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src="/images/facility-render.jpg" alt="Facility Rendering" className="h-[380px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=600&fit=crop'; }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 dark:bg-gray-900/90 backdrop-blur px-4 py-2 text-sm font-medium text-gray-900 dark:text-white border border-white/20 shadow">Master Plan Rendering</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">PROJECT DETAILS</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Facility Specifications</h2>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: MapPin, title: 'Project Location', desc: "Strategically located in Myanmar's industrial zone with easy access to major transportation networks." },
                            { icon: Ruler, title: 'Factory Site Area', desc: 'Spacious facility designed to accommodate current production needs and future expansion plans.' },
                            { icon: Clock, title: 'Production Capacity', desc: 'Two-shift production plan to maximize output while maintaining highest quality standards.' },
                            { icon: Shield, title: 'Compliance Ready', desc: 'Designed to meet international quality standards.', gmpNote: 'Aligned with GMP principles' },
                        ].map((c) => (
                            <motion.div key={c.title} variants={fadeUp} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 shadow-sm hover:shadow-xl transition">
                                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${c.title === 'Compliance Ready' ? 'bg-muted bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10' : 'bg-novita/10 dark:bg-novita/15 text-novita'}`}><c.icon className="h-6 w-6" /></div>
                                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                                {(c as any).gmpNote && <p className="mt-1 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">{(c as any).gmpNote}</p>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Phase 1 */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 order-2 lg:order-1">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src="/images/facility-phase1.jpg" alt="Phase 1 OSD" className="h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=600&fit=crop'; }} />
                                <div className="absolute left-4 top-4 rounded-full bg-novita text-white px-3 py-1.5 text-xs font-bold shadow">Phase 1 • OSD Facility</div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">PHASE 1</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Oral Solid Dosage Facility</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">The first phase focuses on Oral Solid Dosage (OSD) forms, specifically <strong className="text-gray-900 dark:text-white">tablets and hard gelatin capsules</strong>, to meet immediate healthcare needs.</p>
                            <div className="mt-6 grid gap-3">
                                {[
                                    { t: 'Tablet Manufacturing', d: 'Modern tablet press machines for various formulations' },
                                    { t: 'Capsule Manufacturing', d: 'Automated hard gelatin capsule filling and polishing' },
                                    { t: 'Planned Annual Production', d: 'Capacity designed to meet growing domestic demand' },
                                    { t: 'Two-Shift Operation', d: 'Optimized production schedule for maximum efficiency' },
                                ].map((item) => (
                                    <div key={item.t} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div><div className="text-sm font-bold text-gray-900 dark:text-white">{item.t}</div><div className="text-sm text-gray-600 dark:text-gray-400">{item.d}</div></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Facility Areas - Dark Premium */}
            <section className="relative py-14 md:py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-novita/20 blur-[80px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">FACILITY AREAS</div>
                        <h2 className="mt-3 text-3xl font-bold">Comprehensive Manufacturing Zones</h2>
                        <p className="mt-3 text-white/60 max-w-2xl mx-auto">Distinct areas for each stage of pharmaceutical manufacturing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Building2, title: 'Production Area', desc: 'Controlled environment for tablet and capsule production.' },
                            { icon: Warehouse, title: 'Warehouse', desc: 'Raw material and finished goods storage with inventory systems.' },
                            { icon: FlaskConical, title: 'QC Laboratory', desc: 'Modern analytical instruments for product testing.' },
                            { icon: Wrench, title: 'Utility Areas', desc: 'HVAC, water treatment, and supporting utility systems.' },
                        ].map((a) => (
                            <div key={a.title} className="rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.08] transition">
                                <div className="h-12 w-12 rounded-xl bg-novita text-white flex items-center justify-center"><a.icon className="h-6 w-6" /></div>
                                <h4 className="mt-4 text-lg font-bold">{a.title}</h4>
                                <p className="mt-2 text-sm text-white/60">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expansion */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {showExpansionFallback ? (
                        <UnderUpgrading title="Facility Expansion" message="Facility expansion details are currently being updated. Please check back soon." />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-3 py-1 text-xs font-semibold tracking-widest text-white dark:text-gray-900">FUTURE PLANS</div>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Expansion Roadmap</h2>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">Master plan includes provisions for future expansion to meet growing needs.</p>
                                <div className="mt-8 space-y-4">
                                    {[
                                        { n: '1', t: 'Phase 1: Oral Solid Dosage', d: 'Tablets and capsules (Current Development)', active: true },
                                        { n: '2', t: 'Phase 2: Liquid Dosage Forms', d: 'Syrups, suspensions, and oral solutions', active: false },
                                        { n: '3', t: 'Phase 3: Injectable Products', d: 'Parenteral and ophthalmic preparations', active: false },
                                        { n: '4', t: 'Phase 4: Export-Ready Facility', d: 'International market expansion capabilities', active: false },
                                    ].map((p) => (
                                        <div key={p.n} className={`flex gap-4 rounded-2xl border p-4 ${p.active ? 'border-novita/20 bg-novita/5 dark:bg-novita/10' : 'border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04]'}`}>
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold shrink-0 ${p.active ? 'bg-novita text-white' : 'bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-500'}`}>{p.n}</div>
                                            <div><div className="text-sm font-bold text-gray-900 dark:text-white">{p.t}</div><div className="text-sm text-gray-600 dark:text-gray-400">{p.d}</div></div>
                                            {p.active && <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500 animate-pulse mt-2" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-6">
                                <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-xl">
                                    <img src="/images/facility-masterplan.jpg" alt="Master Plan" className="h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop'; }} />
                                    <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 dark:bg-gray-900/90 backdrop-blur px-4 py-2 text-sm font-medium border border-white/20 shadow">Facility Expansion Master Plan</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Construction Progress */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">CONSTRUCTION PROGRESS</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Building in Progress</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Follow our journey building a world-class facility.</p>
                    </div>
                    {showConstructionFallback ? (
                        <UnderUpgrading title="Facility Expansion" message="Construction progress information is currently being updated. Please check back soon." />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { img: '/images/construction-1.jpg', fallback: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', k: 'Site Preparation', v: 'Foundation Work' },
                                { img: '/images/construction-2.jpg', fallback: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop', k: 'Structural Work', v: 'Building Construction' },
                                { img: '/images/construction-3.jpg', fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop', k: 'Equipment Installation', v: 'Machinery Setup' },
                            ].map((c) => (
                                <div key={c.v} className="group overflow-hidden rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition">
                                    <div className="overflow-hidden"><img src={c.img} alt={c.v} className="h-48 w-full object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.currentTarget.src = c.fallback; }} /></div>
                                    <div className="p-4"><div className="text-xs font-medium text-gray-500 dark:text-gray-400">{c.k}</div><div className="text-sm font-bold text-gray-900 dark:text-white">{c.v}</div></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">Interested in Our Facility?</h2><p className="mt-2 text-white/70">Learn more about our products and partnership opportunities.</p></div>
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
