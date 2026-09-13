import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { Save, ExternalLink, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Page, PageSection } from '@/types';

export function FacilityEditor({ page }: { page: Page & { sections: PageSection[] } }) {
    const hero = useMemo(() => page.sections.find((s) => s.section_type === 'hero'), [page.sections]);
    const overview = useMemo(() => page.sections.find((s) => ['overview', 'content', 'project_overview'].includes(s.section_type)), [page.sections]);
    const specs = useMemo(() => page.sections.find((s) => ['specs', 'stats', 'features', 'specifications', 'project_details'].includes(s.section_type)), [page.sections]);
    const phase1 = useMemo(() => page.sections.find((s) => ['phase1', 'phase_1', 'osd', 'phase_one', 'phase'].includes(s.section_type)), [page.sections]);
    const zones = useMemo(() => page.sections.find((s) => ['zones', 'gallery', 'facility_areas', 'areas', 'manufacturing_zones'].includes(s.section_type)), [page.sections]);
    const expansion = useMemo(() => page.sections.find((s) => ['expansion', 'future_expansion', 'future_plans', 'roadmap', 'expansion_roadmap'].includes(s.section_type)), [page.sections]);
    const progress = useMemo(() => page.sections.find((s) => ['progress', 'construction', 'construction_progress', 'building_progress'].includes(s.section_type)), [page.sections]);
    const cta = useMemo(() => page.sections.find((s) => s.section_type === 'cta'), [page.sections]);

    const [heroForm, setHeroForm] = useState({
        title: hero?.title || 'Our New Manufacturing Facility',
        subtitle: hero?.subtitle || 'State-of-the-art pharmaceutical manufacturing facility designed to meet international quality standards.',
        badge: (hero?.meta as any)?.badge || (hero?.meta as any)?.label || 'OUR FACILITY',
    });
    const [overviewForm, setOverviewForm] = useState({
        badge: (overview?.meta as any)?.badge || overview?.subtitle || 'PROJECT OVERVIEW',
        title: overview?.title || 'Building the Future of Pharmaceutical Manufacturing',
        content: overview?.content || '',
        image_path: overview?.image_path || '',
    });
    const [specsForm, setSpecsForm] = useState({
        badge: (specs?.meta as any)?.badge || specs?.subtitle || 'PROJECT DETAILS',
        title: specs?.title || 'Facility Specifications',
        content: specs?.content || '',
    });
    const [phase1Form, setPhase1Form] = useState({
        badge: (phase1?.meta as any)?.badge || phase1?.subtitle || 'PHASE 1',
        title: phase1?.title || 'Oral Solid Dosage Facility',
        content: phase1?.content || '',
        image_path: phase1?.image_path || '',
    });
    const [zonesForm, setZonesForm] = useState({
        badge: (zones?.meta as any)?.badge || zones?.subtitle || 'FACILITY AREAS',
        title: zones?.title || 'Comprehensive Manufacturing Zones',
        content: zones?.content || '',
    });
    const [expansionForm, setExpansionForm] = useState({
        badge: (expansion?.meta as any)?.badge || 'FUTURE PLANS',
        title: expansion?.title || 'Expansion Roadmap',
        content: expansion?.subtitle || expansion?.content || '',
    });
    const [progressForm, setProgressForm] = useState({
        badge: (progress?.meta as any)?.badge || progress?.subtitle || 'CONSTRUCTION PROGRESS',
        title: progress?.title || 'Building in Progress',
        content: progress?.content || progress?.subtitle || '',
    });
    const [ctaForm, setCtaForm] = useState({
        title: cta?.title || 'Interested in Our Facility?',
        subtitle: cta?.subtitle || cta?.content || '',
        link_text: cta?.link_text || 'View Our Products',
        link_url: cta?.link_url || '/products',
    });

    const [overviewFile, setOverviewFile] = useState<File | null>(null);
    const [overviewPreview, setOverviewPreview] = useState<string | null>(overview?.image_path ? `/storage/${overview.image_path}` : null);
    const [phase1File, setPhase1File] = useState<File | null>(null);
    const [phase1Preview, setPhase1Preview] = useState<string | null>(phase1?.image_path ? `/storage/${phase1.image_path}` : null);

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
        let phase1Path = phase1Form.image_path || null;
        if (phase1File) phase1Path = await uploadFile(phase1File);

        const sections = [
            { id: hero?.id, section_type: 'hero', title: heroForm.title, subtitle: heroForm.subtitle, meta: { badge: heroForm.badge } },
            { id: overview?.id, section_type: overview?.section_type || 'overview', title: overviewForm.title, subtitle: overviewForm.badge, content: overviewForm.content, image_path: overviewPath, meta: { badge: overviewForm.badge } },
            { id: specs?.id, section_type: specs?.section_type || 'specs', title: specsForm.title, subtitle: specsForm.badge, content: specsForm.content, meta: { badge: specsForm.badge } },
            { id: phase1?.id, section_type: phase1?.section_type || 'phase1', title: phase1Form.title, subtitle: phase1Form.badge, content: phase1Form.content, image_path: phase1Path, meta: { badge: phase1Form.badge } },
            { id: zones?.id, section_type: zones?.section_type || 'zones', title: zonesForm.title, subtitle: zonesForm.badge, content: zonesForm.content, meta: { badge: zonesForm.badge } },
            { id: expansion?.id, section_type: expansion?.section_type || 'expansion', title: expansionForm.title, subtitle: expansionForm.badge, content: expansionForm.content, meta: { badge: expansionForm.badge } },
            { id: progress?.id, section_type: progress?.section_type || 'progress', title: progressForm.title, subtitle: progressForm.badge, content: progressForm.content, meta: { badge: progressForm.badge } },
            { id: cta?.id, section_type: 'cta', title: ctaForm.title, subtitle: ctaForm.subtitle, link_text: ctaForm.link_text, link_url: ctaForm.link_url },
        ].filter((s) => s.id);

        router.put(`/admin/pages/${page.id}/sections`, { sections } as any, {
            preserveScroll: true,
            onSuccess: () => toast.success('Facility sections saved'),
            onError: () => toast.error('Failed to save facility sections'),
        });
    };

    const SectionHeader = ({ title, type, badge }: { title: string; type: string; badge?: string }) => (
        <div className="flex items-center justify-between">
            <div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-xs">{type} • {badge || '—'}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                <a href="/our-facility" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" /> View
                </a>
            </Button>
        </div>
    );

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">Facility Sections</h2>
                    <p className="text-sm text-muted-foreground">Manage each section of the Our Facility page.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="/our-facility" target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> View Public</a>
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
                <CardHeader><SectionHeader title="Project Overview" type={overview?.section_type || 'overview'} badge={overviewForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={overviewForm.badge} onChange={(e) => setOverviewForm({ ...overviewForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={overviewForm.title} onChange={(e) => setOverviewForm({ ...overviewForm, title: e.target.value })} /></div>
                    <div><Label>Content (paragraphs separated by blank line)</Label><textarea value={overviewForm.content} onChange={(e) => setOverviewForm({ ...overviewForm, content: e.target.value })} rows={4} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setOverviewFile(f); setOverviewPreview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {overviewPreview && <img src={overviewPreview} alt="Overview" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Specs */}
            <Card>
                <CardHeader><SectionHeader title="Facility Specifications" type={specs?.section_type || 'specs'} badge={specsForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={specsForm.badge} onChange={(e) => setSpecsForm({ ...specsForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={specsForm.title} onChange={(e) => setSpecsForm({ ...specsForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={specsForm.content} onChange={(e) => setSpecsForm({ ...specsForm, content: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Phase 1 */}
            <Card>
                <CardHeader><SectionHeader title="Phase 1 — OSD Facility" type={phase1?.section_type || 'phase1'} badge={phase1Form.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={phase1Form.badge} onChange={(e) => setPhase1Form({ ...phase1Form, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={phase1Form.title} onChange={(e) => setPhase1Form({ ...phase1Form, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={phase1Form.content} onChange={(e) => setPhase1Form({ ...phase1Form, content: e.target.value })} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                    <div>
                        <Label>Image</Label>
                        <div className="flex items-center gap-3">
                            <Input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if (f) { setPhase1File(f); setPhase1Preview(URL.createObjectURL(f)); } }} className="max-w-xs" />
                            {phase1Preview && <img src={phase1Preview} alt="Phase 1" className="h-16 w-16 rounded-lg object-cover border" />}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Zones */}
            <Card>
                <CardHeader><SectionHeader title="Manufacturing Zones" type={zones?.section_type || 'zones'} badge={zonesForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={zonesForm.badge} onChange={(e) => setZonesForm({ ...zonesForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={zonesForm.title} onChange={(e) => setZonesForm({ ...zonesForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={zonesForm.content} onChange={(e) => setZonesForm({ ...zonesForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Expansion */}
            <Card>
                <CardHeader><SectionHeader title="Expansion Roadmap" type={expansion?.section_type || 'expansion'} badge={expansionForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={expansionForm.badge} onChange={(e) => setExpansionForm({ ...expansionForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={expansionForm.title} onChange={(e) => setExpansionForm({ ...expansionForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={expansionForm.content} onChange={(e) => setExpansionForm({ ...expansionForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
                </CardContent>
            </Card>

            {/* Progress */}
            <Card>
                <CardHeader><SectionHeader title="Construction Progress" type={progress?.section_type || 'progress'} badge={progressForm.badge} /></CardHeader>
                <CardContent className="space-y-3">
                    <div><Label>Badge Label</Label><Input value={progressForm.badge} onChange={(e) => setProgressForm({ ...progressForm, badge: e.target.value })} /></div>
                    <div><Label>Title</Label><Input value={progressForm.title} onChange={(e) => setProgressForm({ ...progressForm, title: e.target.value })} /></div>
                    <div><Label>Content</Label><textarea value={progressForm.content} onChange={(e) => setProgressForm({ ...progressForm, content: e.target.value })} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
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
