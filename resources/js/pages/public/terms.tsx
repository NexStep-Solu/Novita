import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { FileText, Scale, AlertTriangle, Copyright } from 'lucide-react';

export default function TermsPage() {
    return (
        <PublicLayout>
            <Head title="Terms of Use - NOVITA Pharmaceutical Co., Ltd." />
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-novita/[0.07] dark:bg-novita/20 blur-[90px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.06] px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300">LEGAL</div>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Use</h1>
                    <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">Please read these terms carefully before using novita-myanmar.com.mm.</p>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.04] p-6 md:p-8 space-y-8">
                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><FileText className="h-5 w-5 text-novita" /> Acceptance</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">By accessing this site you agree to these Terms. If you do not agree, please do not use the site. We may update Terms at any time; continued use constitutes acceptance.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Permitted Use</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Content is for general information about NOVITA and is not medical advice (see Medical Disclaimer). Do not misuse the site, attempt unauthorized access, or use content for commercial purposes without written permission.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Copyright className="h-4 w-4 text-novita" /> Intellectual Property</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">All text, graphics, logos (NOVITA), and layout are owned by NOVITA Pharmaceutical Co., Ltd. or licensed. You may view and print for personal, non-commercial use only.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Disclaimer & Limitation</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Site is provided "as is" without warranties. To the extent permitted by law, we are not liable for damages arising from use. Product information will be provided only after regulatory approval per Myanmar FDA and WHO Ethical Criteria.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Scale className="h-4 w-4 text-novita" /> Governing Law</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">These Terms are governed by the laws of the Republic of the Union of Myanmar. Disputes shall be submitted to the competent courts in Yangon.</p>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-gray-800/50 border p-4">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Contact</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Questions? <a href="mailto:info@novita-myanmar.com.mm" className="text-novita hover:underline">info@novita-myanmar.com.mm</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
