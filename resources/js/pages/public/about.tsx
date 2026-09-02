import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Shield, Heart, Users, Target, Eye, Handshake, Lightbulb, Building2, BadgeCheck, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

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

interface AboutProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

export default function AboutPage({ page }: AboutProps) {
    const sections = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const hero = sections.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Our Story';
    const heroSubtitle = hero?.subtitle || 'NOVITA Pharmaceutical Co., Ltd., a member of KTECG Group, is dedicated to developing safe, effective, and accessible medicines for a healthier Myanmar.';
    const overviewSec = sections.find((s) => s.section_type === 'overview');
    const overviewImage = overviewSec?.image_path ? (overviewSec.image_path.startsWith('http') || overviewSec.image_path.startsWith('/') ? overviewSec.image_path : `/storage/${overviewSec.image_path}`) : '/images/about-company.jpg';
    const mdSec = sections.find((s) => s.section_type === 'md_message');
    const mdImage = mdSec?.image_path ? (mdSec.image_path.startsWith('http') || mdSec.image_path.startsWith('/') ? mdSec.image_path : `/storage/${mdSec.image_path}`) : '/images/md-portrait.jpg';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'ABOUT US';

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
                        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/20 px-3 py-1.5 text-xs font-semibold text-novita dark:text-blue-200"><Building2 className="h-3.5 w-3.5" />KTECG Group Member</span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200">20+ Years Pharma Construction</span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300"><BadgeCheck className="h-3.5 w-3.5" />Better Health, Longer Life</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">COMPANY OVERVIEW</div>
                            <h2 className="mt-3 text-3xl md:text-[34px] font-bold tracking-tight text-gray-900 dark:text-white">NOVITA Pharmaceutical Co., Ltd.</h2>
                            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                                <p><strong className="text-gray-900 dark:text-white">NOVITA Pharmaceutical Co., Ltd., a member of KTECG Group</strong>, is a leading pharmaceutical company established with the vision of providing high-quality, affordable medicines to the people of Myanmar.</p>
                                <p>Founded as part of KTECG Group's expansion into the pharmaceutical sector, NOVITA combines decades of construction and engineering expertise with modern pharmaceutical manufacturing capabilities.</p>
                                <div className="rounded-2xl border border-novita/15 bg-novita/[0.04] dark:bg-novita/10 p-4 flex gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center shrink-0"><Building2 className="h-5 w-5" /></div>
                                    <p className="text-sm text-gray-700 dark:text-gray-200">With KTECG Group's <strong>20+ years of pharmaceutical construction experience</strong>, NOVITA benefits from world-class facility design that meets international standards from day one.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src={overviewImage} alt="NOVITA Pharmaceutical" className="h-[380px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop'; }} />
                                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 dark:bg-gray-900/90 backdrop-blur border border-gray-100 dark:border-white/10 p-4 flex items-center gap-3 shadow-lg">
                                    <div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center"><Shield className="h-5 w-5" /></div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">Yangon • Under Development</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Modern OSD facility</div>
                                    </div>
                                    <span className="ml-auto h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Purpose & KTECG */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 shadow-sm hover:shadow-xl transition">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-novita to-blue-400" />
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-novita text-white shadow"><Target className="h-7 w-7" /></div>
                            <div className="mt-6 text-xs font-semibold tracking-widest text-novita">01 — OUR PURPOSE</div>
                            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">Founding Purpose</h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">NOVITA was established to bridge the gap in Myanmar's pharmaceutical market by providing safe, effective, and affordable medicines.</p>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">We deliver a locally-manufactured solution that meets international quality standards while remaining accessible to all.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 shadow-sm hover:shadow-xl transition">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow"><Users className="h-7 w-7" /></div>
                            <div className="mt-6 text-xs font-semibold tracking-widest text-emerald-600">02 — LEGACY</div>
                            <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">KTECG Group Legacy</h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">As part of KTECG Group, NOVITA leverages <strong className="text-gray-900 dark:text-white">20+ years of pharmaceutical construction experience</strong> building world-class facilities across the region.</p>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">This ensures our manufacturing facility is designed to the highest standards from the ground up.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Premium */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10 text-white">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-[50px]" />
                            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center"><Eye className="h-5 w-5" /></div><span className="text-xs font-semibold tracking-widest text-white/70">OUR VISION</span></div>
                            <p className="mt-6 text-xl md:text-2xl font-medium leading-relaxed">To become one of Myanmar's most trusted pharmaceutical companies, improving lives through quality, accessible, and reliable medicines.</p>
                            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"><BadgeCheck className="h-4 w-4" /> Better Health, Longer Life</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-8 md:p-10">
                            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center"><Target className="h-5 w-5" /></div><span className="text-xs font-semibold tracking-widest text-novita">OUR MISSION</span></div>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'To manufacture safe, effective, and consistently high-quality pharmaceutical products.',
                                    'To develop our operations in alignment with internationally recognized GMP and PIC/S principles.',
                                    'To make essential medicines more accessible and affordable for the people of Myanmar.',
                                    'To build a skilled, responsible, and quality-driven pharmaceutical team.',
                                    'To continuously improve through innovation and professional collaboration.',
                                    'To conduct business with integrity, accountability, and respect.',
                                ].map((t) => (
                                    <li key={t} className="flex gap-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-3">
                                        <Shield className="h-5 w-5 text-novita shrink-0 mt-0.5" /><span className="text-sm text-gray-700 dark:text-gray-300">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative py-14 md:py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-novita/20 blur-[80px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80">CORE VALUES</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
                        <p className="mt-3 text-white/60 max-w-2xl mx-auto">Guiding every decision and every process.</p>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: 'Quality First', desc: 'We place product quality and patient safety at the heart of every decision and every process.', color: 'from-novita to-blue-500' },
                            { icon: Heart, title: 'Integrity', desc: 'We conduct business honestly, ethically, and transparently, and take responsibility for our actions.', color: 'from-rose-500 to-pink-500' },
                            { icon: Handshake, title: 'Patient Commitment', desc: 'We remain focused on the health, safety, and well-being of the people who rely on our medicines.', color: 'from-emerald-500 to-teal-500' },
                            { icon: Lightbulb, title: 'Continuous Improvement', desc: 'We continually strengthen our people, systems, technology, and manufacturing practices.', color: 'from-amber-500 to-orange-500' },
                            { icon: Users, title: 'Collaboration', desc: 'Lasting success comes from teamwork, mutual respect, knowledge sharing, and strong partnerships.', color: 'from-violet-500 to-purple-500' },
                            { icon: Target, title: 'Social Responsibility', desc: "We contribute positively to Myanmar's healthcare sector, local communities, and the environment.", color: 'from-cyan-500 to-blue-500' },
                        ].map((v) => (
                            <motion.div key={v.title} variants={fadeInUp} className="group rounded-[24px] border border-white/10 bg-white/[0.06] backdrop-blur p-6 hover:bg-white/[0.08] hover:border-white/15 transition">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} text-white shadow`}> <v.icon className="h-6 w-6" /> </div>
                                <h4 className="mt-4 text-lg font-bold">{v.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* MD Message */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-4">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-xl">
                                <img src={mdImage} alt="U Maung Aye" className="h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop'; }} />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-6">
                                    <div className="text-white font-bold">U Maung Aye</div>
                                    <div className="text-xs tracking-widest text-white/70">MANAGING DIRECTOR</div>
                                    <div className="text-xs text-white/60">NOVITA Pharmaceutical Co., Ltd.</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">MESSAGE FROM THE MANAGING DIRECTOR</div>
                            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to NOVITA</h2>
                            <div className="relative mt-6 rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-6 md:p-8">
                                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-novita/20 bg-white dark:bg-gray-900 rounded-full p-1.5 border border-gray-200 dark:border-white/10" />
                                <div className="space-y-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                                    <p>NOVITA was established with a clear purpose: to contribute to the development of Myanmar's healthcare sector by providing safe, effective, high-quality, and accessible medicines. We believe that every patient deserves medicine they can trust, and this belief guides the way we plan, develop, and operate our business.</p>
                                    <p>Supported by the extensive pharmaceutical construction experience of KTECG Group, NOVITA is developing a modern pharmaceutical manufacturing facility with a strong focus on quality systems, appropriate technology, skilled personnel, and internationally recognized GMP and PIC/S principles. Our goal is not simply to manufacture products, but to build a responsible and sustainable company that earns long-term confidence of patients, healthcare professionals, and regulators.</p>
                                    <p>As we move forward, we will continue to invest in our people, strengthen our technical capabilities, and work closely with experienced local and international partners. With integrity, dedication, and an unwavering commitment to quality, we aim to make a meaningful contribution to public health and become a trusted pharmaceutical brand in Myanmar.</p>
                                    <p>Thank you for your interest in NOVITA Pharmaceutical Co., Ltd. We look forward to building a healthier future together.</p>
                                </div>
                                <div className="mt-8 flex items-center gap-4 border-t border-gray-200 dark:border-white/10 pt-6">
                                    <div className="h-12 w-12 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center font-bold">MA</div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">U Maung Aye</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Managing Director, NOVITA Pharmaceutical Co., Ltd.</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-16 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-12">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Partner with NOVITA</h2>
                                <p className="mt-2 text-white/70">Whether you're looking for quality medicines or partnership opportunities, we're here to help.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">View Our Products <ArrowRight className="h-4 w-4" /></Link>
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-bold text-white hover:bg-white/15 transition">Contact Us Today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
