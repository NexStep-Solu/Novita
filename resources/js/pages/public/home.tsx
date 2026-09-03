import { Head, Link, usePage } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Shield, Beaker, Factory, Award, CheckCircle, Heart, Users, Sparkles, Building2, FlaskConical, BadgeCheck, Pencil } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
};

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
    sort_order: number;
    is_active: boolean;
}
interface HomeProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
    featuredProducts?: any[];
    latestNews?: any[];
    settings?: any;
}

export default function HomePage({ page }: HomeProps) {
    const { props } = usePage();
    const auth = (props as any).auth;
    const sections: PageSection[] = ((page as any)?.active_sections as PageSection[]) || ((page as any)?.activeSections as PageSection[]) || [];
    const hero = sections.find((s) => s.section_type === 'hero');
    console.log(hero);
    
    const heroTitle = hero?.title || 'Building Trust Through Quality Medicines';
    const heroSubtitle = hero?.subtitle || 'NOVITA Pharmaceutical Co., Ltd. is committed to developing safe, effective, and accessible medicines for a healthier Myanmar — from OSD manufacturing to rigorous quality control.';
    const heroSlogan = hero?.meta?.slogan || 'Better Health, Longer Life';
    const heroBadge = hero?.meta?.badge || 'Member of KTECG Group • 20+ Years';
    const heroImage = hero?.image_path ? (hero.image_path.startsWith('http') || hero.image_path.startsWith('/') ? hero.image_path : `/storage/${hero.image_path}`) : '/images/hero-factory.jpg';
    const ctaPrimaryText = hero?.link_text || 'Learn More';
    const ctaPrimaryUrl = hero?.link_url || '/about-us';
    const ctaSecondaryText = hero?.meta?.cta_secondary_text || 'Contact Us';
    const ctaSecondaryUrl = hero?.meta?.cta_secondary_url || '/contact';

    const vm = sections.find((s) => s.section_type === 'vision_mission');
    const vmSectionTitle = vm?.title || 'Vision & Mission';
    const vmVisionTitle = (vm?.meta as any)?.vision_title || 'Our Vision';
    const vmVisionDesc = (vm?.meta as any)?.vision_desc || 'To be a trusted pharmaceutical company in Myanmar, providing quality medicines that improve healthcare outcomes and contribute to a healthier nation.';
    const vmMissionTitle = (vm?.meta as any)?.mission_title || 'Our Mission';
    const vmMissionDesc = (vm?.meta as any)?.mission_desc || 'To develop, manufacture, and supply safe, effective, and affordable medicines through quality manufacturing processes, regulatory compliance, and continuous improvement.';

    const qualitySec = sections.find((s) => s.section_type === 'quality');
    const qualityTitle = qualitySec?.title || 'Commitment to Quality';
    const qualityBadge = qualitySec?.subtitle || 'Quality First';
    const qualityDesc = qualitySec?.content || 'Quality is at the heart of everything we do. Our manufacturing facility is designed to meet international GMP standards, and we are committed to obtaining PIC/S GMP certification.';
    const qualityFeatures: string[] = (qualitySec?.meta as any)?.features || ['International Quality Standards', 'Quality System Aligned', 'Rigorous Quality Control Testing'];
    const qualityLinkText = qualitySec?.link_text || 'Learn about our quality commitment';
    const qualityLinkUrl = qualitySec?.link_url || '/quality';
    const qualityImage = qualitySec?.image_path ? (qualitySec.image_path.startsWith('http') || qualitySec.image_path.startsWith('/') ? qualitySec.image_path : `/storage/${qualitySec.image_path}`) : '/images/quality-lab.jpg';

    const facilitySec = sections.find((s) => s.section_type === 'facility');
    const facilityTitle = facilitySec?.title || 'Manufacturing Excellence';
    const facilityBadge = facilitySec?.subtitle || 'Our Facility';
    const facilityDesc = facilitySec?.content || 'Our state-of-the-art facility is being developed to meet international pharmaceutical manufacturing standards.';
    const facilityCards: any[] = (facilitySec?.meta as any)?.cards || [
        { title: 'OSD Manufacturing', desc: 'Tablets and hard gelatin capsules production with modern equipment.' },
        { title: 'Quality Control', desc: 'Fully equipped QC laboratory for comprehensive product testing.' },
        { title: 'Compliance Ready', desc: 'Designed to meet international quality standards.' },
    ];
    const facilityLinkText = facilitySec?.link_text || 'Explore our facility';
    const facilityLinkUrl = facilitySec?.link_url || '/our-facility';

    const whySec = sections.find((s) => s.section_type === 'why' || s.section_type === 'features');
    const whyTitle = whySec?.title || 'Your Trusted Pharmaceutical Partner';
    const whySubtitle = whySec?.subtitle || 'Why NOVITA';
    const whyFeatures: any[] = (whySec?.meta as any)?.features || [
        { title: 'Patient Safety', description: 'Every product undergoes rigorous testing to ensure safety and efficacy for patients.' },
        { title: 'Expert Team', description: 'Our experienced professionals are dedicated to pharmaceutical excellence.' },
        { title: 'Quality Systems', description: 'Built with robust quality systems for reliable and consistent results.' },
    ];

    const statsSec = sections.find((s) => s.section_type === 'stats');
    const statsItems: any[] = (statsSec?.meta as any)?.stats || [
        { value: '20+', label: 'Years of Experience', sub: 'KTECG Group' },
        { value: '100+', label: 'Team Members', sub: 'Growing' },
        { value: '50+', label: 'Product Lines', sub: 'Planned' },
        { value: '1M+', label: 'Patients Served', sub: 'Goal' },
    ];

    const ctaSec = sections.find((s) => s.section_type === 'cta');
    const ctaTitle = ctaSec?.title || 'Partner with NOVITA';
    const ctaSubtitle = ctaSec?.subtitle || "We're looking for partners who share our vision of providing quality medicines for Myanmar.";
    const ctaBtnText = ctaSec?.link_text || 'Business Partnership';
    const ctaBtnUrl = ctaSec?.link_url || '/partnership';
    const ctaSecondaryBtnText = (ctaSec?.meta as any)?.cta_secondary_text || 'Contact Us';
    const ctaSecondaryBtnUrl = (ctaSec?.meta as any)?.cta_secondary_url || '/contact';

    const renderHeroTitle = () => {
        // Highlight "Quality Medicines" if present
        if (heroTitle.includes('Quality Medicines')) {
            const parts = heroTitle.split('Quality Medicines');
            return (
                <>
                    {parts[0]}
                    <span className="bg-gradient-to-r from-novita to-blue-500 bg-clip-text text-transparent dark:from-[#5A8DEF] dark:to-[#3B63AF]">Quality Medicines</span>
                    {parts[1]}
                </>
            );
        }
        return heroTitle;
    };

    return (
        <PublicLayout>
            <Head title="NOVITA - Better Health, Longer Life" />

            {/* Admin Edit Link - visible only when logged in */}
            {auth?.user && page?.id && (
                <div className="sticky top-[64px] z-30 -mb-px">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between rounded-full border border-amber-200 dark:border-amber-500/30 bg-amber-50/90 dark:bg-amber-500/10 backdrop-blur px-4 py-2 text-xs">
                            <span className="font-medium text-amber-900 dark:text-amber-200 flex items-center gap-2"><Pencil className="h-3.5 w-3.5" /> Admin Preview — you are viewing the live Home page</span>
                            <Link href={`/admin/pages/${page.id}/edit`} className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 text-xs font-bold hover:opacity-90">
                                <Pencil className="h-3.5 w-3.5" /> Edit Home Content
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section - Premium Light/Dark */}
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                {/* Background decorations */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-novita/[0.07] dark:bg-novita/20 blur-[90px]" />
                    <div className="absolute left-[-120px] top-[280px] h-[520px] w-[520px] rounded-full bg-blue-200/40 dark:bg-blue-600/10 blur-[90px]" />
                    <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="lg:col-span-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Eyebrow */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] backdrop-blur px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-novita/30 hover:text-novita transition">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                    </span>
                                    {heroBadge} ↗
                                </a>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-novita/10 dark:bg-novita/20 px-3 py-1.5 text-xs font-semibold tracking-wide text-novita dark:text-blue-200">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {heroSlogan}
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[0.95] text-gray-900 dark:text-white">
                                {renderHeroTitle()}
                            </h1>

                            <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-gray-600 dark:text-gray-300">
                                {heroSubtitle}
                            </p>

                            {/* CTAs */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={ctaPrimaryUrl}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-novita px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(59,99,175,0.25)] hover:bg-novita-dark transition-colors"
                                >
                                    {ctaPrimaryText}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href={ctaSecondaryUrl}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-novita px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(59,99,175,0.25)] hover:bg-novita-dark transition-colors"
                                >
                                    {ctaSecondaryText}
                                </Link>
                            </div>

                            {/* Trust strip */}
                            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <BadgeCheck className="h-4 w-4 text-novita" /> GMP & PIC/S Aligned
                                </div>
                                <span className="h-4 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <Shield className="h-4 w-4 text-novita" /> Quality First
                                </div>
                                <span className="h-4 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <Building2 className="h-4 w-4 text-novita" /> Yangon • Under Development
                                </div>
                            </div>
                            <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                Part of <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="font-medium text-novita hover:underline">Kyaw Thar Engineering & Construction Group</a> —{' '}
                                <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="underline decoration-novita/30 hover:decoration-novita">www.kyawtharengg.com.mm ↗</a>
                            </div>
                        </motion.div>

                        {/* Right Visual */}
                        <motion.div
                            className="lg:col-span-6 relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="relative mx-auto max-w-[560px] lg:ml-auto">
                                {/* Main image card */}
                                <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900 shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={heroImage}
                                            alt="NOVITA Pharmaceutical Facility"
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=900&h=700&fit=crop';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent dark:from-black/40" />
                                        {/* Top pill */}
                                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-gray-900 dark:text-white shadow">
                                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                            Facility Under Development
                                        </div>
                                        {/* Bottom metric */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur px-4 py-3 shadow-lg border border-gray-100 dark:border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-novita text-white">
                                                    <Factory className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Phase 1 • OSD</div>
                                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Tablets & Capsules</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Progress</div>
                                                <div className="text-sm font-bold text-novita">68%</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="h-1.5 w-full bg-gray-100 dark:bg-white/10">
                                        <div className="h-full w-[68%] bg-novita" />
                                    </div>
                                </div>

                                {/* Floating QC card - desktop */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute -right-2 lg:-right-6 -top-4 hidden sm:flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 shadow-xl"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                        <FlaskConical className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Quality Control Lab</div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">Fully Equipped</div>
                                    </div>
                                    <CheckCircle className="h-5 w-5 text-emerald-500 ml-2" />
                                </motion.div>

                                {/* Floating GMP card */}
                                <motion.div
                                    animate={{ y: [0, 6, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                                    className="absolute -left-4 lg:-left-8 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 px-4 py-3 shadow-xl"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-novita/10 dark:bg-novita/20 text-novita">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 dark:text-white">GMP Standards</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">International • PIC/S Aligned</div>
                                    </div>
                                </motion.div>

                                {/* Mobile bottom cards */}
                                <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
                                    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-3 shadow">
                                        <FlaskConical className="h-5 w-5 text-emerald-600 mb-2" />
                                        <div className="text-xs font-bold text-gray-900 dark:text-white">QC Lab Ready</div>
                                        <div className="text-[11px] text-gray-500 dark:text-gray-400">Comprehensive testing</div>
                                    </div>
                                    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-3 shadow">
                                        <Shield className="h-5 w-5 text-novita mb-2" />
                                        <div className="text-xs font-bold text-gray-900 dark:text-white">GMP Aligned</div>
                                        <div className="text-[11px] text-gray-500 dark:text-gray-400">PIC/S principles</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Premium */}
            <section className="relative py-16 md:py-24 bg-gray-50/70 dark:bg-[#0B1220] overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                    <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-novita/5 dark:bg-novita/10 blur-[70px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-novita/15 bg-novita/5 dark:bg-novita/10 px-3 py-1 text-xs font-semibold tracking-widest text-novita">OUR PURPOSE</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{vmSectionTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{vm?.subtitle || 'Guided by quality, driven by care — building a healthier Myanmar.'}</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 md:p-9 shadow-sm hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-novita to-blue-400" />
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-novita/5 dark:bg-novita/10 blur-2xl group-hover:bg-novita/10 transition" />
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-novita text-white shadow-lg">
                                <Award className="h-7 w-7" />
                            </div>
                            <div className="mt-6 text-xs font-semibold tracking-widest text-novita">01 — VISION</div>
                            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{vmVisionTitle}</h3>
                            <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                                {vmVisionDesc}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Long-term healthcare impact
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-8 md:p-9 shadow-sm hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all">
                            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/10 transition" />
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                                <Shield className="h-7 w-7" />
                            </div>
                            <div className="mt-6 text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400">02 — MISSION</div>
                            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{vmMissionTitle}</h3>
                            <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                                {vmMissionDesc}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-novita" /> Quality • Compliance • Access
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quality Commitment - Premium Split */}
            <section className="relative py-16 md:py-24 bg-white dark:bg-[#070E1F] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        <motion.div
                            className="lg:col-span-6 relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img
                                    src={qualityImage}
                                    alt="Quality Control Laboratory"
                                    className="h-[420px] w-full object-cover"
                                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                                <div className="absolute left-4 top-4 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur px-3 py-1.5 text-xs font-bold text-gray-900 dark:text-white shadow border border-gray-100 dark:border-white/10 flex items-center gap-2">
                                    <Beaker className="h-4 w-4 text-novita" /> QC Laboratory
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-2 lg:right-6 hidden sm:block rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-4 shadow-xl w-[300px]"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-8 w-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/15 flex items-center justify-center text-emerald-600"><BadgeCheck className="h-5 w-5" /></div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">Quality Checks</span>
                                    <span className="ml-auto text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/15 px-2 py-1 rounded-full">100% Tested</span>
                                </div>
                                <div className="space-y-2">
                                    {['International GMP Standards','PIC/S Aligned','Rigorous QC Testing'].map((t) => (
                                        <div key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" /> {t}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{qualityBadge}</div>
                            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{qualityTitle}</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                {qualityDesc}
                            </p>
                            <div className="mt-8 grid gap-3">
                                {qualityFeatures.map((item: any, idx: number) => {
                                    const title = typeof item === 'string' ? item : item.title;
                                    const desc = typeof item === 'string' ? '' : item.desc;
                                    return (
                                        <div key={title + idx} className="flex gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-novita"><CheckCircle className="h-5 w-5" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900 dark:text-white">{title}</div>
                                                {desc && <div className="text-sm text-gray-600 dark:text-gray-400">{desc}</div>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <Link href={qualityLinkUrl} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-gray-900 hover:opacity-90 transition">
                                {qualityLinkText} <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Facility Development - Premium Cards */}
            <section className="relative py-16 md:py-24 bg-gray-50/70 dark:bg-[#0B1220] overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{facilityBadge}</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{facilityTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{facilityDesc}</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {facilityCards.map((card: any, idx: number) => {
                            const icons = [Factory, Beaker, Shield];
                            const grads = ['from-novita to-blue-500', 'from-emerald-500 to-teal-500', 'from-violet-500 to-purple-500'];
                            const Icon = icons[idx % icons.length] as any;
                            const grad = grads[idx % grads.length];
                            const n = String(idx + 1).padStart(2, '0');
                            return (
                                <motion.div key={card.title + idx} variants={fadeInUp} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition-all">
                                    <div className={`h-1.5 w-full bg-gradient-to-r ${grad}`} />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <span className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500">{n}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{card.desc}</p>
                                    <div className="mt-4 h-px bg-gray-100 dark:bg-white/10" />
                                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready for Phase 1</div>
                                </div>
                            </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.div className="text-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <Link href={facilityLinkUrl} className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition">
                            {facilityLinkText} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose NOVITA - Premium */}
            <section className="relative py-16 md:py-24 bg-white dark:bg-[#070E1F] overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_90%)]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-3 py-1 text-xs font-semibold tracking-widest text-white dark:text-gray-900">{whySubtitle}</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{whyTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{whySec?.content || 'Three pillars that define our commitment to you.'}</p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                        {whyFeatures.map((item: any, idx: number) => {
                            const icons = [Heart, Users, Shield];
                            const Icon = icons[idx % icons.length] as any;
                            const title = item.title || item.label || 'Feature';
                            const desc = item.description || item.desc || '';
                            return (
                                <motion.div key={title + idx} variants={fadeInUp} className="group rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-8 text-center hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-lg transition">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-sm group-hover:scale-105 transition">
                                        <Icon className="h-8 w-8 text-novita" />
                                    </div>
                                    <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section - Premium */}
            <section className="relative overflow-hidden bg-novita dark:bg-[#0E1E3E] py-16 md:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                    <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[80px]" />
                    <div className="absolute -bottom-32 left-0 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[80px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
                        {statsItems.map((s: any) => (
                            <motion.div key={s.label || s.l} variants={scaleIn} className="rounded-[20px] border border-white/15 bg-white/10 backdrop-blur p-6 text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white">{s.value || s.v}</div>
                                <div className="mt-1 text-sm font-semibold text-white">{s.label || s.l}</div>
                                <div className="text-xs text-blue-100/80">{s.sub || ''}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA — Minimalism Swiss, Logo Hero */}
            <section className="py-16 md:py-24 bg-white dark:bg-[#070E1F] border-y border-gray-100 dark:border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/40 shadow-sm">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 bg-gray-50/50 dark:bg-white/[0.03] p-8 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-novita/[0.04] dark:bg-novita/10 blur-2xl rounded-full scale-110" />
                                    <img src="/logo.png" alt="NOVITA Pharmaceutical Co., Ltd." fetchPriority="high" className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain bg-white p-6 rounded-[32px] shadow-[0_8px_32px_rgba(15,23,42,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.3)] border border-gray-200 dark:border-white/15" onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                                </div>
                                <div className="mt-5 text-center">
                                    <div className="text-base font-bold tracking-tight text-gray-900 dark:text-white">NOVITA</div>
                                    <div className="text-xs tracking-[0.2em] text-gray-500 dark:text-gray-400">PHARMACEUTICAL CO., LTD.</div>
                                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">● Better Health, Longer Life</div>
                                </div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-3 py-1 text-xs font-semibold tracking-widest text-white dark:text-gray-900">PARTNER WITH US</div>
                                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>{ctaTitle}</h2>
                                <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl">{ctaSubtitle}</p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href={ctaSecondaryBtnUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-novita px-7 py-3 text-sm font-bold text-white hover:bg-novita-dark transition shadow">
                                        {ctaSecondaryBtnText} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a href="https://www.kyawtharengg.com.mm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 px-7 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition">
                                        Visit KTECG Group ↗
                                    </a>
                                </div>
                                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Part of KTECG Group • 20+ years pharmaceutical construction</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Fixed Admin Edit Button */}
            {auth?.user && page?.id && (
                <Link
                    href={`/admin/pages/${page.id}/edit`}
                    className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 text-sm font-bold shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:opacity-90 transition"
                >
                    <Pencil className="h-4 w-4" /> Edit Home
                </Link>
            )}
        </PublicLayout>
    );
}
