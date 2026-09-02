import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Pill, Package, FlaskConical, Clock, Shield, Info, Building2, TestTube, HeartPulse, Bug, Brain, Wind, Syringe, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';
import { UnderUpgrading } from '@/components/under-upgrading';

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

interface ProductsPageProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
    products?: any[];
}

export default function ProductsPage({ page, products }: ProductsPageProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Pharmaceutical Products';
    const heroSubtitle = hero?.subtitle || "NOVITA is developing a range of high-quality medicines to meet Myanmar's healthcare needs. Product information will be available following regulatory approval.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'OUR PRODUCTS';
    const isProductsEmpty = !products || products.length === 0;

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
                            <div className="text-sm font-bold text-amber-900 dark:text-amber-200">Regulatory Notice</div>
                            <div className="text-sm text-amber-800/80 dark:text-amber-200/80">Product information will be available following regulatory approval. All claims will comply with WHO Ethical Criteria and Myanmar FDA regulations.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">PRODUCT CATEGORIES</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Our Product Portfolio</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Focused on essential medicines in oral solid dosage forms.</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 shadow-sm hover:shadow-xl transition">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-novita to-blue-400" />
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-novita text-white flex items-center justify-center shadow"><Pill className="h-7 w-7" /></div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tablets</h3>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">Our OSD facility is designed to produce a variety of tablet formulations, including immediate-release and modified-release.</p>
                            <div className="mt-6 space-y-2">
                                {['Immediate-release tablets','Film-coated tablets','Modified-release formulations'].map((t) => (
                                    <div key={t} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="h-2 w-2 rounded-full bg-novita" />{t}</div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 shadow-sm hover:shadow-xl transition">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow"><Package className="h-7 w-7" /></div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hard Gelatin Capsules</h3>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">Manufacturing hard gelatin capsules with various fill formulations to meet different therapeutic needs.</p>
                            <div className="mt-6 space-y-2">
                                {['Powder-filled capsules','Pellet-filled capsules','Combination formulations'].map((t) => (
                                    <div key={t} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="h-2 w-2 rounded-full bg-emerald-500" />{t}</div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Therapeutic Categories */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">THERAPEUTIC FOCUS</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Main Therapeutic Categories</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Essential medicines across key therapeutic areas.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: HeartPulse, title: 'Cardiovascular', desc: 'Medicines for heart and circulatory conditions' },
                            { icon: Bug, title: 'Anti-Infective', desc: 'Medicines for bacterial and fungal infections' },
                            { icon: Brain, title: 'Central Nervous System', desc: 'Pain management and neurological conditions' },
                            { icon: Wind, title: 'Respiratory', desc: 'Medicines for respiratory system conditions' },
                        ].map((c) => (
                            <div key={c.title} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 text-center shadow-sm hover:shadow-lg transition">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-novita/10 dark:bg-novita/15 text-novita"><c.icon className="h-6 w-6" /></div>
                                <h4 className="mt-4 font-bold text-gray-900 dark:text-white">{c.title}</h4>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                            </div>
                        ))}
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
                                <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">DEVELOPMENT PIPELINE</div>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Products Under Development</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">Active pipeline focused on essential medicines — following strict quality protocols and regulatory requirements.</p>
                                <div className="mt-6 space-y-3">
                                    {[
                                        { icon: Clock, t: 'Regulatory Submission Phase', d: 'Multiple products in various stages of submission to Myanmar FDA.' },
                                        { icon: TestTube, t: 'Clinical Evaluation', d: 'Comprehensive quality testing and bioequivalence studies where required.' },
                                        { icon: Building2, t: 'Scale-Up Planning', d: 'Approved products will be scaled up at our new facility.' },
                                    ].map((item) => (
                                        <div key={item.t} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                            <div className="h-10 w-10 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-novita shrink-0"><item.icon className="h-5 w-5" /></div>
                                            <div><div className="text-sm font-bold text-gray-900 dark:text-white">{item.t}</div><div className="text-sm text-gray-600 dark:text-gray-400">{item.d}</div></div>
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
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">FUTURE PLANS</div>
                        <h2 className="mt-3 text-3xl font-bold">Future Product Portfolio</h2>
                        <p className="mt-3 text-white/60">Expanding as facility and approvals progress.</p>
                    </div>
                    {isProductsEmpty ? (
                        <UnderUpgrading title="Future Portfolio" message="Future portfolio information is currently being updated. Please check back soon." />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Syringe, title: 'Injectable Products', desc: 'Parenteral and ophthalmic preparations for hospital and clinical use.' },
                                { icon: Droplets, title: 'Liquid Dosage Forms', desc: 'Syrups, suspensions, and oral solutions.' },
                                { icon: Pill, title: 'Specialty Products', desc: 'Extended-release and combination formulations.' },
                            ].map((c) => (
                                <div key={c.title} className="rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 text-center hover:bg-white/[0.08] transition">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-900"><c.icon className="h-6 w-6 text-novita" /></div>
                                    <h4 className="mt-4 text-lg font-bold">{c.title}</h4>
                                    <p className="mt-2 text-sm text-white/60">{c.desc}</p>
                                </div>
                            ))}
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
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Regulatory Compliance</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">All product information, promotional materials, and marketing communications will be:</p>
                            <div className="mt-4 grid sm:grid-cols-2 gap-2">
                                {['Based on approved and verified information','Compliant with Myanmar FDA regulations','Aligned with WHO Ethical Criteria','Accurate, balanced, and not misleading'].map((t) => (
                                    <div key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><CheckCircleIcon className="h-4 w-4 text-emerald-500" />{t}</div>
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
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">Partner with NOVITA</h2><p className="mt-2 text-white/70">For partnership and product inquiries, contact us.</p></div>
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">Contact Us <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

function CheckCircleIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
