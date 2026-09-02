import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <PublicLayout>
            <Head title="Privacy Policy - NOVITA Pharmaceutical Co., Ltd." />
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-novita/[0.07] dark:bg-novita/20 blur-[90px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">LEGAL</div>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
                    <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">Last updated: January 1, 2026 — NOVITA Pharmaceutical Co., Ltd.</p>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray dark:prose-invert max-w-none">
                    <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.04] p-6 md:p-8 space-y-8">
                        <div className="flex gap-3">
                            <Shield className="h-6 w-6 text-novita shrink-0" />
                            <div>
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Introduction</h2>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">NOVITA Pharmaceutical Co., Ltd. ("we", "us") respects your privacy and is committed to protecting personal information in accordance with Myanmar law and internationally recognized principles.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Eye className="h-4 w-4 text-novita" /> Information We Collect</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                <li>Contact details you provide via forms (name, email, phone, message)</li>
                                <li>Technical data (IP, browser, device) via cookies for analytics</li>
                                <li>Recruitment data (CVs) sent to careers@novita-myanmar.com.mm</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><FileText className="h-4 w-4 text-novita" /> How We Use Information</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">To respond to inquiries, evaluate partnership/career applications, improve our site, and comply with legal obligations. We do not sell personal data.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Lock className="h-4 w-4 text-novita" /> Data Retention & Security</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We retain inquiry data for up to 24 months, recruitment data per our retention policy, and protect it with technical and organizational measures. No method is 100% secure, but we strive to protect your data.</p>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-gray-800/50 border p-4">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Contact for Privacy</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Email: <a href="mailto:info@novita-myanmar.com.mm" className="text-novita hover:underline">info@novita-myanmar.com.mm</a> — Subject: Privacy Request</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">This policy does not cover third-party sites linked from our site. For medical information, see our Medical Disclaimer.</p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
