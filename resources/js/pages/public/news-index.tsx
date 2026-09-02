import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Calendar, MapPin, Tag, ChevronRight, Building2, Users, Briefcase, Milestone } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    image: string;
    location?: string;
    featured?: boolean;
}

const newsItems: NewsItem[] = [
    { id: 1, title: 'NOVITA Pharmaceutical Facility - Groundbreaking Ceremony', slug: 'groundbreaking-ceremony', excerpt: 'Official groundbreaking ceremony marks the beginning of NOVITA\'s state-of-the-art pharmaceutical manufacturing facility in Yangon Industrial Zone.', content: 'The groundbreaking ceremony was attended by government officials, industry leaders, and international partners.', category: 'Milestone', date: '2024-01-15', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop', location: 'Yangon, Myanmar', featured: true, },
    { id: 2, title: 'CPHI China 2024 - Shanghai', slug: 'cphi-china-2024', excerpt: 'NOVITA participated in CPHI China 2024, connecting with global pharmaceutical suppliers and exploring latest technologies.', content: 'Our team visited CPHI China to explore partnerships.', category: 'Exhibition', date: '2024-06-19', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop', location: 'Shanghai, China', },
    { id: 3, title: 'Factory Development Progress - Phase 1 Construction', slug: 'factory-development-phase-1', excerpt: 'Significant progress on Phase 1 construction including OSD manufacturing area, QC lab, and warehouse facilities.', content: 'Construction progressing well. Phase 1 includes installation of equipment.', category: 'Factory Update', date: '2024-03-20', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop', location: 'Yangon, Myanmar', featured: true, },
    { id: 4, title: 'CPHI Thailand 2024 - Bangkok', slug: 'cphi-thailand-2024', excerpt: 'NOVITA attended CPHI Thailand to strengthen regional partnerships.', content: 'Our participation allowed us to connect with regional companies.', category: 'Exhibition', date: '2024-07-17', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop', location: 'Bangkok, Thailand', },
    { id: 5, title: 'Technical Partnership Agreement Signed', slug: 'technical-partnership', excerpt: 'NOVITA signed a technical partnership agreement with international consultants.', content: 'This partnership will provide technical expertise.', category: 'Partnership', date: '2024-04-10', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop', location: 'Yangon, Myanmar', },
    { id: 6, title: 'Now Hiring - Pharmaceutical Professionals', slug: 'recruitment-pharmaceutical-professionals', excerpt: 'NOVITA is seeking experienced pharmaceutical professionals to join our growing team.', content: 'We are looking for qualified candidates.', category: 'Recruitment', date: '2024-05-01', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop', featured: true, },
    { id: 7, title: 'BIO Asia-Taiwan 2024', slug: 'bio-asia-taiwan-2024', excerpt: 'NOVITA participated in BIO Asia-Taiwan to explore biotechnology partnerships.', content: 'Our team attended BIO Asia-Taiwan.', category: 'Exhibition', date: '2024-08-21', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop', location: 'Taipei, Taiwan', },
    { id: 8, title: 'ISPE Singapore Pharma Symposium', slug: 'ispe-singapore-2024', excerpt: 'NOVITA representatives attended the ISPE Singapore Pharma Symposium.', content: 'The symposium provided valuable insights.', category: 'Exhibition', date: '2024-09-12', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop', location: 'Singapore', },
    { id: 9, title: 'PHARMA MachTech Expo India 2024', slug: 'pharma-machtech-expo-india', excerpt: 'NOVITA explored pharmaceutical manufacturing equipment at MachTech Expo in Mumbai.', content: 'Our team visited the expo.', category: 'Exhibition', date: '2024-10-05', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop', location: 'Mumbai, India', },
    { id: 10, title: 'Facility Equipment Installation Begins', slug: 'equipment-installation', excerpt: 'Installation of major manufacturing equipment has commenced at our Yangon facility.', content: 'Installation of tablet presses etc is underway.', category: 'Factory Update', date: '2024-11-15', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop', location: 'Yangon, Myanmar', featured: true, },
    { id: 11, title: 'Company Milestone - Regulatory Pre-Submission Meeting', slug: 'regulatory-presubmission', excerpt: 'NOVITA held a pre-submission meeting with Myanmar FDA.', content: 'This meeting established clear guidelines.', category: 'Milestone', date: '2024-12-01', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop', location: 'Naypyidaw, Myanmar', },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
function getCategoryIcon(category: string) {
    switch (category) {
        case 'Milestone': return <Milestone className="h-3.5 w-3.5" />;
        case 'Factory Update': return <Building2 className="h-3.5 w-3.5" />;
        case 'Exhibition': return <Tag className="h-3.5 w-3.5" />;
        case 'Partnership': return <Users className="h-3.5 w-3.5" />;
        case 'Recruitment': return <Briefcase className="h-3.5 w-3.5" />;
        default: return <Tag className="h-3.5 w-3.5" />;
    }
}
function getCategoryStyle(category: string): string {
    switch (category) {
        case 'Milestone': return 'bg-purple-500 text-white';
        case 'Factory Update': return 'bg-novita text-white';
        case 'Exhibition': return 'bg-emerald-600 text-white';
        case 'Partnership': return 'bg-orange-500 text-white';
        case 'Recruitment': return 'bg-rose-600 text-white';
        default: return 'bg-gray-900 dark:bg-white text-white dark:text-gray-900';
    }
}

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

interface NewsIndexProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

export default function NewsPage({ page }: NewsIndexProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'News & Updates';
    const heroSubtitle = hero?.subtitle || 'Stay updated with facility developments, exhibition visits, and company milestones.';
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'NEWS & UPDATES';

    const featuredNews = newsItems.filter(item => item.featured);
    const regularNews = newsItems.filter(item => !item.featured);
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
                        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Featured */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center"><Tag className="h-5 w-5" /></div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured News</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {featuredNews.map((item) => (
                            <Link key={item.id} href={`/news/${item.slug}`} className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition">
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=800&h=500&fit=crop'; }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow border border-white/20 backdrop-blur bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-bold ${getCategoryStyle(item.category)}`}>{getCategoryIcon(item.category)}{item.category}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{formatDate(item.date)}</span>
                                        {item.location && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{item.location}</span>}
                                    </div>
                                    <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white group-hover:text-novita transition line-clamp-2">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{item.excerpt}</p>
                                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-novita">Read More <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All News */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-10 w-10 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center"><Building2 className="h-5 w-5" /></div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent News</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularNews.map((item) => (
                            <Link key={item.id} href={`/news/${item.slug}`} className="group overflow-hidden rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition flex flex-col">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=800&h=500&fit=crop'; }} />
                                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-gray-900/90 backdrop-blur px-2.5 py-1 text-xs font-bold border border-white/20 shadow text-gray-900 dark:text-white">{getCategoryIcon(item.category)}{item.category}</div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"><Calendar className="h-3.5 w-3.5" />{formatDate(item.date)}{item.location && <><span className="h-1 w-1 rounded-full bg-gray-300" /><MapPin className="h-3 w-3" />{item.location}</>}</div>
                                    <h3 className="mt-3 text-[15px] font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-novita transition">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1">{item.excerpt}</p>
                                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-novita">Read More <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" /></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">Stay Connected</h2><p className="mt-2 text-white/70">Follow us for facility and company updates.</p></div>
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">Contact Us <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
