import { Link } from '@inertiajs/react';
import { Wrench, ArrowRight, Home } from 'lucide-react';

export function UnderUpgrading({ title = 'Information Updating', message = 'Information အချက်အလက်များ ဖြည့်စွက်နေဆဲဖြစ်ပါသည်။ ခေတ္တစောင့်ဆိုင်းပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။', showHome = true }: { title?: string; message?: string; showHome?: boolean }) {
    return (
        <div className="rounded-[24px] border border-amber-200 dark:border-amber-500/20 bg-amber-50/70 dark:bg-amber-500/10 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white">
                <Wrench className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-amber-900 dark:text-amber-200">{title} — Under Upgrading</h3>
            <p className="mt-2 text-sm text-amber-800/80 dark:text-amber-200/80">{message}</p>
            {showHome && (
                <Link href="/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-bold hover:opacity-90">
                    <Home className="h-4 w-4" /> Home သို့ ပြန်သွားရန်
                </Link>
            )}
        </div>
    );
}
