import { Head } from '@inertiajs/react';
import { useState } from 'react';
import PublicLayout from '@/layouts/public/public-layout';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building2, Factory, Globe, Facebook, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

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

interface ContactProps {
    page?: { id: number; title: string; slug: string; activeSections?: PageSection[] };
}

export default function ContactPage({ page }: ContactProps) {
    const hero = ((page as any)?.active_sections || (page as any)?.activeSections)?.find((s) => s.section_type === 'hero');
    const heroTitle = hero?.title || 'Contact Us';
    const heroSubtitle = hero?.subtitle || "We'd love to hear from you. Get in touch for any inquiries.";
    const heroBadge = hero?.meta?.badge || hero?.meta?.label || 'GET IN TOUCH';

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
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

            {/* Contact Info */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Building2,
                                title: 'Registered Office',
                                lines: ['NOVITA Pharmaceutical Co., Ltd.', 'Level 5, Building A', 'Yangon Business Centre', 'No. 123, Pyay Road', 'Yangon, Myanmar'],
                                phone: '+95 1 234 5678',
                                email: 'info@novitapharma.com',
                            },
                            {
                                icon: Factory,
                                title: 'Factory',
                                lines: ['NOVITA Pharmaceutical Factory', 'Industrial Zone (1)', 'Hlaing Tharyar Township', 'Yangon, Myanmar'],
                                phone: '+95 1 678 9012',
                                note: 'Factory under development. Visits by appointment only.',
                            },
                            {
                                icon: Clock,
                                title: 'Office Hours',
                                hours: [['Monday - Friday','9:00 AM - 5:00 PM'],['Saturday','9:00 AM - 1:00 PM'],['Sunday','Closed']],
                            },
                        ].map((card) => (
                            <div key={card.title} className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 shadow-sm hover:shadow-xl transition">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-novita/10 dark:bg-novita/15 text-novita"><card.icon className="h-6 w-6" /></div>
                                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
                                <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    {card.lines && card.lines.map((l) => <div key={l}>{l}</div>)}
                                    {card.hours && card.hours.map(([k,v]) => <div key={k} className="flex justify-between border-b border-gray-100 dark:border-white/5 py-2 last:border-0"><span>{k}</span><span className="font-medium text-gray-900 dark:text-white">{v}</span></div>)}
                                </div>
                                {card.phone && <div className="mt-4 flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-novita" /><a href={`tel:${card.phone.replace(/\s/g,'')}`} className="font-medium text-gray-900 dark:text-white hover:text-novita">{card.phone}</a></div>}
                                {card.email && <div className="mt-2 flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-novita" /><a href={`mailto:${card.email}`} className="font-medium text-novita hover:underline">{card.email}</a></div>}
                                {card.note && <div className="mt-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-3 py-2 text-xs font-medium text-amber-800 dark:text-amber-200">{card.note}</div>}
                                {card.title === 'Office Hours' && (
                                    <div className="mt-6 flex gap-2">
                                        <a href="#" className="h-9 w-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-novita hover:text-white hover:border-novita transition text-gray-600 dark:text-gray-300"><Facebook className="h-4 w-4" /></a>
                                        <a href="#" className="h-9 w-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-novita hover:text-white hover:border-novita transition text-gray-600 dark:text-gray-300"><Linkedin className="h-4 w-4" /></a>
                                        <a href="#" className="h-9 w-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-novita hover:text-white hover:border-novita transition text-gray-600 dark:text-gray-300"><Youtube className="h-4 w-4" /></a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Emails */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220] relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">CONTACT BY DEPARTMENT</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Department Contacts</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: MessageSquare, title: 'General Inquiries', email: 'info@novitapharma.com' },
                            { icon: Globe, title: 'Business Inquiries', email: 'business@novitapharma.com' },
                            { icon: Mail, title: 'Careers', email: 'careers@novitapharma.com' },
                        ].map((c) => (
                            <div key={c.title} className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 text-center shadow-sm hover:shadow-lg transition">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-novita/10 dark:bg-novita/15 text-novita"><c.icon className="h-6 w-6" /></div>
                                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                <a href={`mailto:${c.email}`} className="mt-1 inline-block text-sm font-medium text-novita hover:underline">{c.email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="py-14 md:py-20 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-novita/10 dark:bg-novita/15 px-3 py-1 text-xs font-semibold tracking-widest text-novita">FIND US</div>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">Our Location</h2>
                    </div>
                    <div className="overflow-hidden rounded-[28px] border border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5!2d96.1!3d16.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzAwLjAiTiA5NsKwMDYnMDAuMCJF!5e0!3m2!1sen!2smm!4v1234567890" width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="NOVITA Location" />
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="py-14 md:py-20 bg-gray-50/70 dark:bg-[#0B1220]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">SEND A MESSAGE</div>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Form</h2>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">Have a question? Fill out the form and we'll reply within 2 business days.</p>
                            <div className="mt-6 rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6">
                                <h3 className="font-bold text-gray-900 dark:text-white">Our Commitment:</h3>
                                <div className="mt-3 space-y-2">
                                    {['Response within 2 business days','Confidential handling of all inquiries','Dedicated support for business partners'].map((t) => (
                                        <div key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><CheckCircle className="h-4 w-4 text-emerald-500" />{t}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center rounded-[28px] border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 p-10 text-center">
                                    <CheckCircle className="h-14 w-14 text-emerald-500" />
                                    <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">Your message has been received. We will get back to you within 2 business days.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="rounded-[28px] border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800/50 p-6 md:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                                            <input type="text" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label>
                                            <input type="email" required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                                        <input type="tel" className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject *</label>
                                        <select required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="business">Business Partnership</option>
                                            <option value="products">Product Information</option>
                                            <option value="careers">Career Opportunities</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message *</label>
                                        <textarea rows={4} required className="mt-1 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm focus:ring-2 focus:ring-novita focus:border-transparent outline-none" placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                    </div>
                                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-novita px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(59,99,175,0.25)] hover:bg-novita-dark transition">Send Message <Send className="h-4 w-4" /></button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
