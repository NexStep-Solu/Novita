import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function RndEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const overview = useMemo(() => page.sections.find((s) => ['overview', 'content', 'vision', 'introduction'].includes(s.section_type)), [page.sections]);
    const focus = useMemo(() => page.sections.find((s) => ['focus_areas', 'features', 'focus', 'development_areas'].includes(s.section_type)), [page.sections]);
    const approach = useMemo(() => page.sections.find((s) => ['approach', 'development_approach', 'strategic_approach'].includes(s.section_type)), [page.sections]);
    const collab = useMemo(() => page.sections.find((s) => ['collaboration', 'partnerships', 'partners'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Our R&D Direction',
        subtitle: hero?.subtitle || '',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'Innovation',
    });
    const [overviewForm, setOverviewForm] = useState({
        badge: (overview?.meta as any)?.badge || overview?.subtitle || 'Our Vision',
        title: overview?.title || 'Building R&D Capabilities',
        content: overview?.content || '',
        highlight: (overview?.meta as any)?.highlight || '',
        image_path: overview?.image_path || '',
    });
    const [focusForm, setFocusForm] = useState({
        badge: (focus?.meta as any)?.badge || focus?.subtitle || 'Focus Areas',
        title: focus?.title || 'Key Development Areas',
        content: focus?.content || '',
    });
    const [approachForm, setApproachForm] = useState({
        badge: (approach?.meta as any)?.badge || approach?.subtitle || 'Our Approach',
        title: approach?.title || 'Strategic Development Approach',
        content: approach?.content || '',
        image_path: approach?.image_path || '',
    });
    const [collabForm, setCollabForm] = useState({
        badge: (collab?.meta as any)?.badge || collab?.subtitle || 'Partnerships',
        title: collab?.title || 'Collaboration with Technical Partners',
        content: collab?.content || '',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Interested in R&D Collaboration?',
        subtitle: cta?.subtitle || cta?.content || '',
        link_text: cta?.link_text || 'Contact Us',
        link_url: cta?.link_url || '/contact',
    });

    const [overviewFile, setOverviewFile] = useState<File | null>(null);
    const [overviewPreview, setOverviewPreview] = useState<string | null>(overview?.image_path ? `/storage/${overview.image_path}` : null);
    const [approachFile, setApproachFile] = useState<File | null>(null);
    const [approachPreview, setApproachPreview] = useState<string | null>(approach?.image_path ? `/storage/${approach.image_path}` : null);

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
        let approachPath = approachForm.image_path || null;
        if (approachFile) approachPath = await uploadFile(approachFile);

        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: overview?.id, section_type: overview?.section_type || 'overview', title: overviewForm.title, subtitle: overviewForm.badge, content: overviewForm.content, image_path: overviewPath, meta: { badge: overviewForm.badge, highlight: overviewForm.highlight } },
            { id: focus?.id, section_type: focus?.section_type || 'focus_areas', title: focusForm.title, subtitle: focusForm.badge, content: focusForm.content, meta: { badge: focusForm.badge } },
            { id: approach?.id, section_type: approach?.section_type || 'approach', title: approachForm.title, subtitle: approachForm.badge, content: approachForm.content, image_path: approachPath, meta: { badge: approachForm.badge } },
            { id: collab?.id, section_type: collab?.section_type || 'collaboration', title: collabForm.title, subtitle: collabForm.badge, content: collabForm.content, meta: { badge: collabForm.badge } },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('R&D sections saved'),
            onError: () => toast.error('Failed to save R&D sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/product-development" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">R&D / Product Development Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Product Development page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/product-development" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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
                <CardHeader><SectionHeader title="Overview / Vision" type={overview?.section_type || 'overview'} badge={overviewForm.badge} /></CardHeader>
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

            {/* Focus Areas */}
            <Card>
                <CardHeader><SectionHeader title="Focus Areas" type={focus?.section_type || 'focus_areas'} badge={focusForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={focusForm.badge} onChange={(e) => setFocusForm({ ...focusForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={focusForm.title} onChange={(e) => setFocusForm({ ...focusForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={focusForm.content} onChange={(e) => setFocusForm({ ...focusForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Approach */}
            <Card>
                <CardHeader><SectionHeader title="Development Approach" type={approach?.section_type || 'approach'} badge={approachForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={approachForm.badge} onChange={(e) => setApproachForm({ ...approachForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={approachForm.title} onChange={(e) => setApproachForm({ ...approachForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={approachForm.content} onChange={(e) => setApproachForm({ ...approachForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setApproachFile(f); setApproachPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {approachPreview && <img src={approachPreview} alt="Approach" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Collaboration */}
            <Card>
                <CardHeader><SectionHeader title="Collaboration / Partnerships" type={collab?.section_type || 'collaboration'} badge={collabForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={collabForm.badge} onChange={(e) => setCollabForm({ ...collabForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={collabForm.title} onChange={(e) => setCollabForm({ ...collabForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={collabForm.content} onChange={(e) => setCollabForm({ ...collabForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
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
