import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function SustainabilityEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const overview = useMemo(() => page.sections.find((s) => ['overview', 'content', 'commitment', 'introduction'].includes(s.section_type)), [page.sections]);
    const ehs = useMemo(() => page.sections.find((s) => ['employee_safety', 'health_safety', 'worker_protection', 'safety', 'ehs'].includes(s.section_type)), [page.sections]);
    const env = useMemo(() => page.sections.find((s) => ['environment', 'environmental_management', 'environmental', 'stewardship'].includes(s.section_type)), [page.sections]);
    const energy = useMemo(() => page.sections.find((s) => ['energy', 'energy_efficiency', 'resource_efficiency', 'efficiency'].includes(s.section_type)), [page.sections]);
    const community = useMemo(() => page.sections.find((s) => ['community', 'ethics', 'social_responsibility', 'community_ethics'].includes(s.section_type)), [page.sections]);
    const framework = useMemo(() => page.sections.find((s) => ['framework', 'ehs_framework', 'ehs_management', 'management_system'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Environment, Health & Safety',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'Sustainability & EHS',
    });
    const [overviewForm, setOverviewForm] = useState({
        badge: (overview?.meta as any)?.badge || overview?.subtitle || 'Our Commitment',
        title: overview?.title || 'Sustainable Manufacturing',
        content: overview?.content || '',
        highlight: (overview?.meta as any)?.highlight || '',
        image_path: overview?.image_path || '',
    });
    const [ehsForm, setEhsForm] = useState({
        badge: (ehs?.meta as any)?.badge || ehs?.subtitle || 'Worker Protection',
        title: ehs?.title || 'Employee Health & Safety',
        content: ehs?.content || '',
    });
    const [envForm, setEnvForm] = useState({
        badge: (env?.meta as any)?.badge || env?.subtitle || 'Environmental Stewardship',
        title: env?.title || 'Environmental Management',
        content: env?.content || '',
    });
    const [energyForm, setEnergyForm] = useState({
        badge: (energy?.meta as any)?.badge || energy?.subtitle || 'Resource Efficiency',
        title: energy?.title || 'Energy Efficiency',
        content: energy?.content || '',
        image_path: energy?.image_path || '',
    });
    const [communityForm, setCommunityForm] = useState({
        badge: (community?.meta as any)?.badge || community?.subtitle || 'Social Responsibility',
        title: community?.title || 'Community & Ethical Practices',
        content: community?.content || '',
    });
    const [frameworkForm, setFrameworkForm] = useState({
        title: framework?.title || 'EHS Management System',
        content: framework?.content || '',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Our Sustainability Commitment',
        subtitle: cta?.subtitle || cta?.content || '',
        link_text: cta?.link_text || 'Contact Us',
        link_url: cta?.link_url || '/contact',
    });

    const [overviewFile, setOverviewFile] = useState<File | null>(null);
    const [overviewPreview, setOverviewPreview] = useState<string | null>(overview?.image_path ? `/storage/${overview.image_path}` : null);
    const [energyFile, setEnergyFile] = useState<File | null>(null);
    const [energyPreview, setEnergyPreview] = useState<string | null>(energy?.image_path ? `/storage/${energy.image_path}` : null);

    const uploadFile = async (file: File): Promise<string | null> => {
        const fd = new FormData();
        fd.append('file', file);
        const csrf = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '';
        const res = await fetch('/admin/upload', { method: 'POST', headers: { 'X-CSRF-TOKEN': csrf } as any, body: fd });
        const j = await res.json();
        return j.path || null;
    };

    const handleSave = async () => {
        let overviewPath = overviewForm.image_path || null;
        if (overviewFile) overviewPath = await uploadFile(overviewFile);
        let energyPath = energyForm.image_path || null;
        if (energyFile) energyPath = await uploadFile(energyFile);

        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: overview?.id, section_type: overview?.section_type || 'overview', title: overviewForm.title, subtitle: overviewForm.badge, content: overviewForm.content, image_path: overviewPath, meta: { badge: overviewForm.badge, highlight: overviewForm.highlight } },
            { id: ehs?.id, section_type: ehs?.section_type || 'employee_safety', title: ehsForm.title, subtitle: ehsForm.badge, content: ehsForm.content, meta: { badge: ehsForm.badge } },
            { id: env?.id, section_type: env?.section_type || 'environment', title: envForm.title, subtitle: envForm.badge, content: envForm.content, meta: { badge: envForm.badge } },
            { id: energy?.id, section_type: energy?.section_type || 'energy', title: energyForm.title, subtitle: energyForm.badge, content: energyForm.content, image_path: energyPath, meta: { badge: energyForm.badge } },
            { id: community?.id, section_type: community?.section_type || 'community', title: communityForm.title, subtitle: communityForm.badge, content: communityForm.content, meta: { badge: communityForm.badge } },
            { id: framework?.id, section_type: framework?.section_type || 'framework', title: frameworkForm.title, content: frameworkForm.content },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Sustainability sections saved'),
            onError: () => toast.error('Failed to save sustainability sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/sustainability" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Sustainability & EHS Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Sustainability page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/sustainability" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
                    </Button>
                    <Button size="sm" onClick={handleSave}><Save className="h-4 w-4" /> Save All</Button>
                </div>
            </div>

            {/* Hero */}
            <Card>
                <CardHeader><SectionHeader title="Hero" type="hero" badge={heroForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={heroForm.badge} onChange={(e) => setHeroForm({ ...heroForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={heroForm.title} onChange={(e) => setHeroForm({ ...heroForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><textarea value={heroForm.subtitle} onChange={(e) => setHeroForm({ ...heroForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Overview */}
            <Card>
                <CardHeader><SectionHeader title="Overview / Commitment" type={overview?.section_type || 'overview'} badge={overviewForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={overviewForm.badge} onChange={(e) => setOverviewForm({ ...overviewForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={overviewForm.title} onChange={(e) => setOverviewForm({ ...overviewForm, title: e.target.value })} /></div>
                    <div><Label>Content (paragraphs separated by blank line)</Label><textarea value={overviewForm.content} onChange={(e) => setOverviewForm({ ...overviewForm, content: e.target.value })} rows={4} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div><Label>Highlight Quote</Label><Input value={overviewForm.highlight} onChange={(e) => setOverviewForm({ ...overviewForm, highlight: e.target.value })} /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setOverviewFile(f); setOverviewPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {overviewPreview && <img src={overviewPreview} alt="Overview" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Employee Safety */}
            <Card>
                <CardHeader><SectionHeader title="Employee Health & Safety" type={ehs?.section_type || 'employee_safety'} badge={ehsForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={ehsForm.badge} onChange={(e) => setEhsForm({ ...ehsForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={ehsForm.title} onChange={(e) => setEhsForm({ ...ehsForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={ehsForm.content} onChange={(e) => setEhsForm({ ...ehsForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <p className="text-xs text-muted-foreground">Feature cards (Safety Management, Risk Assessment, etc.) are managed via page sections meta.</p>
                </CardContent>
            </Card>

            {/* Environmental Management */}
            <Card>
                <CardHeader><SectionHeader title="Environmental Management" type={env?.section_type || 'environment'} badge={envForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={envForm.badge} onChange={(e) => setEnvForm({ ...envForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={envForm.title} onChange={(e) => setEnvForm({ ...envForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={envForm.content} onChange={(e) => setEnvForm({ ...envForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Energy Efficiency */}
            <Card>
                <CardHeader><SectionHeader title="Energy Efficiency" type={energy?.section_type || 'energy'} badge={energyForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={energyForm.badge} onChange={(e) => setEnergyForm({ ...energyForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={energyForm.title} onChange={(e) => setEnergyForm({ ...energyForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={energyForm.content} onChange={(e) => setEnergyForm({ ...energyForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setEnergyFile(f); setEnergyPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {energyPreview && <img src={energyPreview} alt="Energy" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Community & Ethics */}
            <Card>
                <CardHeader><SectionHeader title="Community & Ethics" type={community?.section_type || 'community'} badge={communityForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={communityForm.badge} onChange={(e) => setCommunityForm({ ...communityForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={communityForm.title} onChange={(e) => setCommunityForm({ ...communityForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={communityForm.content} onChange={(e) => setCommunityForm({ ...communityForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* EHS Framework */}
            <Card>
                <CardHeader><SectionHeader title="EHS Management System" type={framework?.section_type || 'framework'} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={frameworkForm.title} onChange={(e) => setFrameworkForm({ ...frameworkForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={frameworkForm.content} onChange={(e) => setFrameworkForm({ ...frameworkForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* CTA */}
            <Card>
                <CardHeader><SectionHeader title="Call to Action" type="cta" /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Title</Label><Input value={ctaForm.title} onChange={(e) => setCtaForm({ ...ctaForm, title: e.target.value })} /></div>
                    <div><Label>Subtitle</Label><textarea value={ctaForm.subtitle} onChange={(e) => setCtaForm({ ...ctaForm, subtitle: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div className="grid grid-cols-2 gap-3">
                        <div><Label>Button Text</Label><Input value={ctaForm.link_text} onChange={(e) => setCtaForm({ ...ctaForm, link_text: e.target.value })} /></div>
                        <div><Label>Button URL</Label><Input value={ctaForm.link_url} onChange={(e) => setCtaForm({ ...ctaForm, link_url: e.target.value })} /></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
