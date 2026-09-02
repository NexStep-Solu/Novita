import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Save, Settings2, Eye, ExternalLink, LayoutDashboard, Building2, FlaskConical, ShieldCheck, Package, Newspaper, BriefcaseBusiness, MessageSquare, Home, Edit3, Layers, Sparkles, Beaker, Leaf, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Setting {
    id: number;
    key: string;
    value: string | null;
    type: string;
    group: string;
}

interface SettingsIndexProps {
    settings: Record<string, Setting[]>;
    groups: string[];
}

function Switch({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (v: boolean) => void }) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onCheckedChange(!checked)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${checked ? 'bg-novita' : 'bg-gray-200 dark:bg-white/20'}`}
        >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    );
}

const navConfig = [
    { key: 'home', label: 'Home', href: '/', icon: Home, public: true },
    { key: 'about', label: 'About Us', href: '/about-us', icon: Building2, children: ['Our Leadership'] },
    { key: 'facility', label: 'Our Facility', href: '/our-facility', icon: FlaskConical },
    { key: 'quality', label: 'Quality', href: '/quality', icon: ShieldCheck },
    { key: 'product_development', label: 'Product Development', href: '/product-development', icon: Beaker },
    { key: 'products', label: 'Products', href: '/products', icon: Package },
    { key: 'partnership', label: 'Business Partnership', href: '/partnership', icon: Handshake },
    { key: 'sustainability', label: 'Sustainability & EHS', href: '/sustainability', icon: Leaf },
    { key: 'news', label: 'News & Media', href: '/news', icon: Newspaper },
    { key: 'careers', label: 'Careers', href: '/careers', icon: BriefcaseBusiness },
    { key: 'contact', label: 'Contact Us', href: '/contact', icon: MessageSquare },
];

const publicPages = [
    { title: 'Home', slug: '/', href: '/', desc: 'Hero, Vision, Facility, Why, Stats, CTA', icon: LayoutDashboard, badge: '6 sections' },
    { title: 'About Us', slug: 'about-us', href: '/about-us', desc: 'Overview, Purpose, Vision/Mission, Values, MD Message', icon: Building2, badge: '5 sections' },
    { title: 'Our Leadership', slug: 'leadership', href: '/leadership', desc: 'MD, Board, Directors, Senior Management', icon: Building2, badge: '4 sections' },
    { title: 'Our Facility', slug: 'our-facility', href: '/our-facility', desc: 'Overview, Specs, Phase 1, Zones, Roadmap', icon: FlaskConical, badge: '6 sections' },
    { title: 'Quality', slug: 'quality', href: '/quality', desc: 'Policy, Patient Safety, GMP, Systems, EHS', icon: ShieldCheck, badge: '5 sections' },
    { title: 'Products', slug: 'products', href: '/products', desc: 'Tablets, Capsules, Therapeutic, Pipeline', icon: Package, badge: '5 sections' },
    { title: 'News & Media', slug: 'news', href: '/news', desc: 'Featured, Recent, Categories', icon: Newspaper, badge: 'Dynamic' },
    { title: 'Careers', slug: 'careers', href: '/careers', desc: 'Why Work, Culture, Training, Form', icon: BriefcaseBusiness, badge: '5 sections' },
    { title: 'Contact Us', slug: 'contact', href: '/contact', desc: 'Offices, Departments, Map, Form', icon: MessageSquare, badge: '4 sections' },
];

export default function SettingsIndex({ settings, groups }: SettingsIndexProps) {
    const allSettings = Object.values(settings).flat();
    const { data, setData, put, processing } = useForm({
        settings: allSettings.map((s) => ({ key: s.key, value: s.value || '' })),
    });

    const getInitialNavState = () => {
        const navSettings: Setting[] = (settings['navigation'] as Setting[]) || [];
        const state: Record<string, boolean> = {};
        navConfig.forEach((item) => {
            const s = navSettings.find((x) => x.key === `nav_${item.key}`);
            state[item.key] = s ? s.value === '1' : true;
        });
        return state;
    };
    const [navState, setNavState] = useState<Record<string, boolean>>(getInitialNavState);

    const handleValueChange = (key: string, value: string) => {
        const exists = data.settings.some((s) => s.key === key);
        if (exists) {
            const updated = data.settings.map((s) => (s.key === key ? { ...s, value } : s));
            setData('settings', updated);
        } else {
            setData('settings', [...data.settings, { key, value }]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/settings', {
            onSuccess: () => toast.success('Settings saved'),
        });
    };

    const handleNavToggle = (key: string, val: boolean) => {
        setNavState((prev) => ({ ...prev, [key]: val }));
        const navKey = `nav_${key}`;
        const newValue = val ? '1' : '0';
        const exists = data.settings.some((s) => s.key === navKey);
        const updatedSettings = exists
            ? data.settings.map((s) => (s.key === navKey ? { ...s, value: newValue } : s))
            : [...data.settings, { key: navKey, value: newValue }];
        setData('settings', updatedSettings);
        router.put(
            '/admin/settings',
            { settings: updatedSettings },
            {
                preserveScroll: true,
                onSuccess: () => toast.success(val ? `${key} enabled` : `${key} hidden`, { description: val ? 'Visible in public navbar' : 'Hidden from navbar (route still active)' }),
                onError: () => toast.error('Failed to save navigation'),
            },
        );
    };

    const getGroupLabel = (group: string) => {
        const labels: Record<string, string> = {
            general: 'General Settings',
            contact: 'Contact Information',
            social: 'Social Media',
            seo: 'SEO Settings',
            footer: 'Footer Settings',
        };
        return labels[group] || group.charAt(0).toUpperCase() + group.slice(1);
    };

    const getGroupDescription = (group: string) => {
        const desc: Record<string, string> = {
            general: 'Basic site configuration and branding.',
            contact: 'Contact details displayed across the site.',
            social: 'Links to your social media profiles.',
            seo: 'Search engine optimization settings.',
            footer: 'Footer content and copyright information.',
        };
        return desc[group] || `Manage ${group} settings.`;
    };

    return (
        <AdminLayout breadcrumbs={[{ title: 'Settings', href: '/admin/settings' }]}>
            <Head title="Site Settings" />

            <div className="flex flex-col gap-1 mb-6">
                <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <Settings2 className="h-6 w-6 text-muted-foreground" />
                    Site Settings
                </h1>
                <p className="text-sm text-muted-foreground">Control navigation, manage public pages, and configure global site preferences.</p>
            </div>

            {/* Nav Visibility */}
            <Card className="shadow-sm py-0 gap-0 overflow-hidden mb-6">
                <CardHeader className="bg-muted/30 border-b p-6">
                    <div className="flex items-center gap-2">
                        <Layers className="h-5 w-5 text-novita" />
                        <CardTitle className="text-base font-semibold">Navigation Menu</CardTitle>
                        <Badge variant="outline" className="ml-2 font-normal">{navConfig.length} items</Badge>
                    </div>
                    <CardDescription>Turn on/off items in the public navbar. Hidden items keep their routes but are not shown.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y">
                        {navConfig.map((item) => (
                            <div key={item.key} className="flex items-center justify-between p-4 hover:bg-muted/30 transition">
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center border">
                                        <item.icon className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium flex items-center gap-2">
                                            {item.label}
                                            {item.children && <span className="text-xs text-muted-foreground">→ {item.children.join(', ')}</span>}
                                        </div>
                                        <div className="text-xs text-muted-foreground font-mono">{item.href}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge variant={navState[item.key] ? 'secondary' : 'outline'} className={navState[item.key] ? 'bg-emerald-500/15 text-emerald-700 border-emerald-200' : 'text-muted-foreground'}>
                                        {navState[item.key] ? 'Visible' : 'Hidden'}
                                    </Badge>
                                    <Switch checked={navState[item.key]} onCheckedChange={(v) => handleNavToggle(item.key, v)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-muted/20 border-t">
                        <p className="text-xs text-muted-foreground">Toggle to instantly update the public navbar — no save button needed. Hidden routes like /product-development remain accessible directly.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Public Pages */}
            <Card className="shadow-sm py-0 gap-0 overflow-hidden mb-6">
                <CardHeader className="bg-muted/30 border-b p-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-novita" />
                        <CardTitle className="text-base font-semibold">Public Pages</CardTitle>
                        <Badge variant="outline" className="font-normal">{publicPages.length} pages</Badge>
                    </div>
                    <CardDescription>All public-facing pages. Click a card to view or manage its sections.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {publicPages.map((page) => (
                            <div key={page.slug} className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-md hover:border-novita/20 transition text-left">
                                <div className="p-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-novita/10 flex items-center justify-center text-novita border">
                                            <page.icon className="h-5 w-5" />
                                        </div>
                                        <Badge variant="outline" className="text-xs font-normal">{page.badge}</Badge>
                                    </div>
                                    <h3 className="mt-3 font-semibold text-sm">{page.title}</h3>
                                    <p className="text-xs font-mono text-muted-foreground">/{page.slug === '/' ? '' : page.slug}</p>
                                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{page.desc}</p>
                                    <div className="mt-4 flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1 h-8 text-xs" asChild>
                                            <a href={page.href} target="_blank" rel="noopener noreferrer">
                                                <Eye className="h-3.5 w-3.5" /> View
                                            </a>
                                        </Button>
                                        <Button size="sm" className="flex-1 h-8 text-xs" asChild>
                                            <Link href={`/admin/pages`}>
                                                <Edit3 className="h-3.5 w-3.5" /> Manage
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-novita to-blue-500 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/admin/pages">
                                <Layers className="h-4 w-4" /> Go to Pages Management
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Existing Groups */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {groups.map((group) => (
                    <Card key={group} className="shadow-sm py-0 gap-0 overflow-hidden">
                        <CardHeader className="bg-muted/30 border-b p-6">
                            <CardTitle className="text-base font-semibold">{getGroupLabel(group)}</CardTitle>
                            <CardDescription>{getGroupDescription(group)}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-5">
                            {settings[group]?.map((setting) => (
                                <div key={setting.key} className="grid gap-2">
                                    <Label htmlFor={setting.key} className="capitalize text-sm font-medium">
                                        {setting.key.replace(/_/g, ' ')}
                                    </Label>
                                    {setting.type === 'textarea' ? (
                                        <textarea
                                            id={setting.key}
                                            value={data.settings.find((s) => s.key === setting.key)?.value || ''}
                                            onChange={(e) => handleValueChange(setting.key, e.target.value)}
                                            rows={3}
                                            placeholder={`Enter ${setting.key.replace(/_/g, ' ')}`}
                                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    ) : (
                                        <Input
                                            id={setting.key}
                                            type={setting.type === 'image' ? 'text' : 'text'}
                                            value={data.settings.find((s) => s.key === setting.key)?.value || ''}
                                            onChange={(e) => handleValueChange(setting.key, e.target.value)}
                                            placeholder={`Enter ${setting.key.replace(/_/g, ' ')}`}
                                        />
                                    )}
                                </div>
                            ))}
                            {(!settings[group] || settings[group].length === 0) && (
                                <p className="text-sm text-muted-foreground">No settings in this group.</p>
                            )}
                        </CardContent>
                    </Card>
                ))}

                <div className="sticky bottom-0 z-10 -mx-4 md:-mx-6 -mb-4 md:-mb-6 mt-6 border-t bg-background/80 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing} className="min-w-[160px]">
                            <Save className="h-4 w-4" />
                            {processing ? 'Saving...' : 'Save All Settings'}
                        </Button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
