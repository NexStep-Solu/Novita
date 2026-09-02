import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public/public-layout';
import { AlertTriangle, HeartPulse, Stethoscope, Info } from 'lucide-react';

export default function MedicalDisclaimerPage() {
    return (
        <PublicLayout>
            <Head title="Medical Disclaimer - NOVITA Pharmaceutical Co., Ltd." />
            <section className="relative overflow-hidden bg-white dark:bg-[#070E1F] border-b border-gray-100 dark:border-white/[0.06]">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="absolute -top-32 -right-32 h-[640px] w-[640px] rounded-full bg-red-500/[0.06] dark:bg-red-500/10 blur-[90px]" />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 px-3 py-1 text-xs font-semibold tracking-widest text-red-700 dark:text-red-300">IMPORTANT</div>
                    <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Medical Disclaimer</h1>
                    <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">Information on this site is for general educational purposes only and is not medical advice.</p>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-white dark:bg-[#070E1F]">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[24px] border border-amber-200 dark:border-amber-500/20 bg-amber-50/70 dark:bg-amber-500/10 p-6 flex gap-3">
                        <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0" />
                        <p className="text-sm font-medium text-amber-900 dark:text-amber-200">Always seek the advice of a qualified healthcare professional with any questions regarding a medical condition. Never disregard professional advice or delay seeking it because of something you read on this site.</p>
                    </div>

                    <div className="mt-8 rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.04] p-6 md:p-8 space-y-6">
                        <div>
                            <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Info className="h-5 w-5 text-novita" /> No Medical Advice</h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Content about products, therapeutic categories, and manufacturing is general information. It does not establish a doctor-patient relationship and is not a substitute for professional diagnosis, treatment, or prescription.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><HeartPulse className="h-5 w-5 text-red-500" /> Product Information</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">NOVITA's facility is under development. Product information, claims, and availability will be provided only after regulatory approval by the Myanmar FDA and in compliance with WHO Ethical Criteria. Do not use site content to self-diagnose or self-medicate.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2"><Stethoscope className="h-5 w-5 text-novita" /> Emergency</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">If you have a medical emergency, contact your doctor, hospital, or emergency services immediately. For adverse events related to medicines, contact your healthcare provider and report to the relevant authority.</p>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-gray-800/50 border p-4">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">Questions?</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">For medical information, please consult a healthcare professional. For corporate inquiries: <a href="mailto:info@novita-myanmar.com.mm" className="text-novita hover:underline">info@novita-myanmar.com.mm</a></p>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">© 2026 NOVITA Pharmaceutical Co., Ltd. — Better Health, Longer Life</p>
                </div>
            </section>
        </PublicLayout>
    );
}
