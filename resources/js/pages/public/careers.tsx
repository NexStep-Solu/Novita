import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import { ArrowRight, Heart, Users, BookOpen, Briefcase, Mail, Upload, CheckCircle, Building2, Globe, Award, TrendingUp, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PageSection } from '@/types';

const stagger = { animate: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

const whyIcons = [Heart, TrendingUp, Globe, Award];

interface CareersProps {
    page?: any;
}

export default function CareersPage({ page }: CareersProps) {
    const careersEmail = (usePage().props as any).careersEmail || 'careers@novita-myanmar.com.mm';
    const sections: PageSection[] = ((page as any)?.active_sections || (page as any)?.activeSections || []) as PageSection[];
    const find = (types: string[]) => sections.find((s) => types.includes(s.section_type));

    const hero = find(['hero']);
    const heroTitle = hero?.title || 'Join Our Team';
    const heroSubtitle = hero?.subtitle || "Be part of Myanmar's pharmaceutical future. Help us build world-class manufacturing capabilities.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'CAREERS';

    const whySec = find(['why_work', 'why_novita', 'benefits']);
    const whyBadge = (whySec?.meta as any)?.badge || whySec?.subtitle || 'WHY NOVITA';
    const whyTitle = whySec?.title || 'Why Work With NOVITA';
    const whyContent = whySec?.content || "Making a difference in Myanmar's healthcare landscape.";
    const whyItems: any[] = (whySec?.meta as any)?.items || [
        { title: 'Meaningful Work', desc: 'Contribute to providing quality medicines that improve healthcare outcomes.' },
        { title: 'Growth Opportunities', desc: 'Join a growing company with career advancement and development.' },
        { title: 'International Exposure', desc: 'Work with international partners and global best practices.' },
        { title: 'Professional Development', desc: 'Training programs and skill development opportunities.' },
    ];

    const cultureSec = find(['culture', 'company_culture']);
    const cultureBadge = (cultureSec?.meta as any)?.badge || cultureSec?.subtitle || 'OUR CULTURE';
    const cultureTitle = cultureSec?.title || 'Company Culture';
    const cultureContent = cultureSec?.content || 'We foster integrity, innovation, and collaboration — united by a shared mission for a healthier Myanmar.';
    const cultureItems: any[] = (cultureSec?.meta as any)?.items || [
        { title: 'Quality First', desc: 'Committed to highest standards in everything we do.' },
        { title: 'Team Collaboration', desc: 'We work together to achieve common goals.' },
        { title: 'Continuous Improvement', desc: 'We encourage learning and innovation at all levels.' },
        { title: 'Integrity & Ethics', desc: 'Business with honesty and transparency.' },
    ];

    const posSec = find(['positions', 'available_positions', 'open_positions']);
    const posBadge = (posSec?.meta as any)?.badge || posSec?.subtitle || 'OPPORTUNITIES';
    const posTitle = posSec?.title || 'Available Positions';
    const posContent = posSec?.content || 'Career opportunities will be announced as our organization continues to grow.';
    const posNote = (posSec?.meta as any)?.note || 'As NOVITA expands, we will look for talented individuals. Check back regularly.';
    const posCta = (posSec?.meta as any)?.cta || 'In the meantime, send your CV for future opportunities.';

    const trainSec = find(['training', 'training_development', 'growth']);
    const trainBadge = (trainSec?.meta as any)?.badge || trainSec?.subtitle || 'GROWTH';
    const trainTitle = trainSec?.title || 'Training & Development';
    const trainContent = trainSec?.content || 'Investing in our people through comprehensive programs.';
    const trainItems: any[] = (trainSec?.meta as any)?.items || [
        { title: 'On-the-Job Training', desc: 'Hands-on training with experienced professionals in manufacturing and QC.' },
        { title: 'GMP Training', desc: 'Comprehensive training on GMP and international quality standards.' },
        { title: 'Leadership Development', desc: 'Programs to develop future leaders within the organization.' },
    ];
    const trainIcons = [BookOpen, Users, Building2];

    const cvSec = find(['cv_form', 'application', 'send_cv']);
    const cvBadge = (cvSec?.meta as any)?.badge || cvSec?.subtitle || 'SUBMIT YOUR CV';
    const cvTitle = cvSec?.title || 'Send Your CV';
    const cvContent = cvSec?.content || 'Interested in joining NOVITA? Send your CV to our HR department.';
    const cvIncludes: string[] = (cvSec?.meta as any)?.includes || ['Updated CV/Resume', 'Cover letter', 'Educational certificates', 'Professional certifications (if any)'];

    const ctaSec = find(['cta']);
    const ctaTitle = ctaSec?.title || 'Ready to Make a Difference?';
    const ctaSubtitle = ctaSec?.subtitle || "Join NOVITA and be part of Myanmar's pharmaceutical future.";
    const ctaText = ctaSec?.link_text || 'Send Your CV';
    const ctaUrl = ctaSec?.link_url || `mailto:${careersEmail}`;

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', message: '' });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

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

            {/* Why Work */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{whyBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{whyTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{whyContent}</p>
                    </div>
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyItems.map((c: any, idx: number) => {
                            const Icon = whyIcons[idx % whyIcons.length];
                            return (
                                <motion.div key={c.title + idx} variants={fadeUp} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-6 text-center hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-lg transition">
                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 text-novita shadow-sm"><Icon className="h-7 w-7" /></div>
                                    <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Culture */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{cultureBadge}</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{cultureTitle}</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">{cultureContent}</p>
                            <div className="mt-6 space-y-3">
                                {cultureItems.map((item: any) => (
                                    <div key={item.title} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-4">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div><div className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</div><div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                                <img src="/images/company-culture.jpg" alt="Company Culture" className="h-[420px] w-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'; }} />
                                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 dark:bg-gray-900/90 backdrop-blur px-4 py-2 text-sm font-medium border border-white/20 shadow flex items-center gap-2 text-gray-900 dark:text-white"><Users className="h-4 w-4 text-novita" /> Collaborative • Quality-Driven</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Positions */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">{posBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{posTitle}</h2>
                    </div>
                    <div className="mx-auto max-w-3xl rounded-[28px] border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 to-white dark:from-white/[0.04] dark:to-white/[0.02] p-8 md:p-10 text-center shadow-sm">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-novita text-white"><Briefcase className="h-7 w-7" /></div>
                        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{posContent}</h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{posNote}</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{posCta}</p>
                    </div>
                </div>
            </section>

            {/* Training */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-3 py-1 text-xs font-semibold tracking-widest text-white dark:text-gray-900">{trainBadge}</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{trainTitle}</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">{trainContent}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {trainItems.map((c: any, idx: number) => {
                            const Icon = trainIcons[idx % trainIcons.length];
                            return (
                                <div key={c.title + idx} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 shadow-sm hover:shadow-lg transition">
                                    <div className="h-12 w-12 rounded-xl bg-novita/10 dark:bg-novita/15 flex items-center justify-center text-novita"><Icon className="h-6 w-6" /></div>
                                    <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CV + Form */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">{cvBadge}</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{cvTitle}</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">{cvContent}</p>
                            <div className="mt-6 rounded-[24px] border border-novita/15 bg-novita/[0.04] dark:bg-novita/10 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-novita text-white flex items-center justify-center"><Mail className="h-5 w-5" /></div>
                                    <div><div className="text-sm font-bold text-gray-900 dark:text-white">Email your CV to:</div><a href={`mailto:${careersEmail}`} className="text-sm font-semibold text-novita hover:underline">{careersEmail}</a></div>
                                </div>
                                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Include CV, cover letter, and area of interest.</p>
                            </div>
                            <div className="mt-6 rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.04] p-6">
                                <h3 className="font-bold text-gray-900 dark:text-white">What to Include:</h3>
                                <div className="mt-3 space-y-2">
                                    {cvIncludes.map((t: string) => (
                                        <div key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><CheckCircle className="h-4 w-4 text-emerald-500" />{t}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Job Application</h2>
                                {submitted ? (
                                    <div className="mt-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 p-8 text-center">
                                        <CheckCircle className="h-14 w-14 text-emerald-500 mx-auto" />
                                        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">Your application has been received. We will review and get back if there's a match.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div><label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label><input type="text" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                                            <div><label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label><input type="email" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                                        </div>
                                        <div><label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label><input type="tel" className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} /></div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Area of Interest</label>
                                            <select className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })}>
                                                <option value="">Select an area</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="quality">Quality Assurance/Control</option>
                                                <option value="regulatory">Regulatory Affairs</option>
                                                <option value="rd">Research & Development</option>
                                                <option value="warehouse">Warehouse & Logistics</option>
                                                <option value="admin">Administration</option>
                                            </select>
                                        </div>
                                        <div><label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label><textarea rows={4} className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" placeholder="Tell us about yourself..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Upload CV (PDF)</label>
                                            <div className="mt-1 relative flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.03] hover:border-novita/50 transition">
                                                <div className="text-center"><Upload className="h-8 w-8 text-gray-400 mx-auto" /><p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{cvFile ? cvFile.name : 'Click to upload CV'}</p></div>
                                                <input type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 h-full w-full opacity-0 cursor-pointer" onChange={(e) => setCvFile(e.target.files?.[0] || null)} />
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-novita px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(59,99,175,0.25)] hover:bg-novita-dark transition">Submit Application <Send className="h-4 w-4" /></button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-gray-900 via-[#0F1E3A] to-novita p-8 md:p-10">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-[60px]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div><h2 className="text-2xl md:text-3xl font-bold text-white">{ctaTitle}</h2><p className="mt-2 text-white/70">{ctaSubtitle}</p></div>
                            <a href={ctaUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-900 hover:bg-gray-100 transition">{ctaText} <Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
